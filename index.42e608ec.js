var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,o){a[e]=o},e.parcelRequired7c6=n);var r=n("krGWQ");const t=document.querySelector("[data-form]"),d=document.querySelector(".list-games");t.addEventListener("submit",(function(e){e.preventDefault(),console.dir(e.target.elements);const{elements:{firstCommand:o,firstCommandGoal:a,secondCommand:n,secondCommandGoal:t}}=e.target;r.arrayCommand.push({firstCommand:o.value,firstCommandGoal:a.value,secondCommand:n.value,secondCommandGoal:t.value}),(0,r.printGames)(r.arrayCommand,d),localStorage.setItem("games",JSON.stringify(r.arrayCommand)),e.target.reset(),console.log(r.arrayCommand)})),(0,r.printGames)(r.arrayCommand,d);
//# sourceMappingURL=index.42e608ec.js.map