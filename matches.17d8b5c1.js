!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){r[e]=n},e.parcelRequired7c6=t);var o=t("4Nugj"),a=document.querySelector("[data-form]"),i=document.querySelector(".list-games"),d=document.querySelector('[name="findToDelete"]');(0,o.printGames)(o.arrayCommand,i),a.addEventListener("submit",(function(e){e.preventDefault();var n=e.target.elements.commandName.value,r=o.arrayCommand.filter((function(e){return e.firstCommand.includes(n)||e.secondCommand.includes(n)}));(0,o.printGames)(r,i)})),d.addEventListener("submit",printForDelete)}();
//# sourceMappingURL=matches.17d8b5c1.js.map
