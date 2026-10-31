(() => {
    const catalogs = document.querySelectorAll("[data-project-catalog]");

    const normalize = (value) => (value || "")
        .toLocaleLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    catalogs.forEach((catalog) => {
        const search = catalog.querySelector("[data-project-search-input]");
        const type = catalog.querySelector("[data-project-type-filter]");
        const status = catalog.querySelector("[data-project-status-filter]");
        const count = catalog.querySelector("[data-project-count]");
        const empty = catalog.querySelector("[data-project-empty]");
        const cards = Array.from(catalog.querySelectorAll("[data-project-card]"));

        const update = () => {
            const query = normalize(search?.value);
            const wantedType = type?.value || "all";
            const wantedStatus = status?.value || "all";
            let visible = 0;

            cards.forEach((card) => {
                const matchesQuery = !query || normalize(card.dataset.projectSearch).includes(query);
                const matchesType = wantedType === "all" || card.dataset.projectType === wantedType;
                const matchesStatus = wantedStatus === "all" || card.dataset.projectStatus === wantedStatus;
                const show = matchesQuery && matchesType && matchesStatus;

                card.hidden = !show;
                if (show) visible += 1;
            });

            if (count) {
                const singular = count.dataset.singular || "project";
                const plural = count.dataset.plural || "projects";
                count.textContent = `${visible} ${visible === 1 ? singular : plural}`;
            }

            if (empty) empty.hidden = visible !== 0;
        };

        search?.addEventListener("input", update);
        type?.addEventListener("change", update);
        status?.addEventListener("change", update);
        update();
    });
})();
