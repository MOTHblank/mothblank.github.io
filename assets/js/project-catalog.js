(function () {
  "use strict";
  document.querySelectorAll("[data-project-catalog]").forEach(function (catalog) {
    var controls = catalog.querySelector("[data-filter-controls]");
    var buttons = Array.from(catalog.querySelectorAll("[data-filter]"));
    var cards = Array.from(catalog.querySelectorAll("[data-category]"));
    var count = catalog.querySelector("[data-filter-count]");
    if (!controls || !buttons.length || !cards.length) return;
    controls.hidden = false;
    var lang = document.documentElement.lang === "pt-BR" ? "pt-BR" : "en";
    function filter(category) {
      var shown = 0;
      cards.forEach(function (card) {
        var visible = category === "all" || card.dataset.category === category;
        card.hidden = !visible;
        if (visible) shown++;
      });
      buttons.forEach(function (button) {
        button.setAttribute("aria-pressed", String(button.dataset.filter === category));
      });
      count.textContent = lang === "pt-BR"
        ? shown + (shown === 1 ? " projeto exibido" : " projetos exibidos")
        : shown + (shown === 1 ? " project shown" : " projects shown");
    }
    buttons.forEach(function (button) {
      button.addEventListener("click", function () { filter(button.dataset.filter); });
    });
    filter("all");
  });
}());
