!function(){function e(e,n,o,t){Object.defineProperty(e,n,{get:o,set:t,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var a={id:e,exports:{}};return o[e]=a,n.call(a.exports,a,a.exports),a.exports}var m=new Error("Cannot find module '"+e+"'");throw m.code="MODULE_NOT_FOUND",m}).register=function(e,n){t[e]=n},n.parcelRequired7c6=a),a.register("4Nugj",(function(n,o){e(n.exports,"arrayCommand",(function(){return t})),e(n.exports,"printGames",(function(){return a}));var t=[{firstCommand:"barselona",firstCommandGoal:"0",secondCommand:"Lyoha",secondCommandGoal:"11"},{firstCommand:"mazepa",firstCommandGoal:"1488",secondCommand:"chervyak",secondCommandGoal:"1"},{firstCommand:"threeTwoTwo",firstCommandGoal:"1",secondCommand:"cyborg",secondCommandGoal:"2"},{firstCommand:"barselona",firstCommandGoal:"18",secondCommand:"mazepa",secondCommandGoal:"4"},{firstCommand:"musor",firstCommandGoal:"3",secondCommand:"trash",secondCommandGoal:"22"}];function a(e,n){n.innerHTML=e.map((function(e,n){return'\n    <li class="none">\n        <p> '.concat(e.firstCommand," ").concat(e.firstCommandGoal,":").concat(e.secondCommandGoal," ").concat(e.secondCommand,' </p>\n        <button type="button" name="deleteMatch" data-index="').concat(n,'">Delete</button>\n        <button type="button" name="edit" data-index="').concat(n,'">Edit</button>\n        <form action="" data-form class="form-element-edit">\n            <input type="text" name="firstCommand" value="').concat(e.firstCommand,'">\n            <input type="number" name="firstCommandGoal" value="').concat(e.firstCommandGoal,'" >\n            <input type="text" name="secondCommand" value="').concat(e.secondCommand,'">\n            <input type="number" name="secondCommandGoal" value="').concat(e.secondCommandGoal,'">\n            <button type="submit">Submit</button>\n        </form>\n        </li>')})).join("");var o=document.querySelectorAll('[name="deleteMatch"]'),t=document.querySelectorAll('[name="edit"]'),a=document.querySelectorAll(".form-element-edit");o.forEach((function(e){e.addEventListener("click",m)})),t.forEach((function(e){e.addEventListener("click",r)})),a.forEach((function(e){e.addEventListener("submit",d)}))}function m(e){var n=e.target.dataset.index,o=document.querySelector(".list-games");t.splice(n,1),a(t,o),localStorage.setItem("games",JSON.stringify(t))}function r(e){e.target.parentNode.classList.toggle("none")}function d(e){e.preventDefault();var n=e.target.parentNode.querySelector("[data-index]").dataset.index,o=e.target.elements,m=o.firstCommand,r=o.firstCommandGoal,d=o.secondCommand,c=o.secondCommandGoal;t[n]={firstCommand:m.value,firstCommandGoal:r.value,secondCommand:d.value,secondCommandGoal:c.value},localStorage.setItem("games",JSON.stringify(t));var i=document.querySelector(".list-games");a(t,i)}localStorage.getItem("games")&&(t=JSON.parse(localStorage.getItem("games")))})),a("4Nugj")}();
//# sourceMappingURL=index.180f609a.js.map