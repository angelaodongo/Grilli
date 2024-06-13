'use strict';


// preload * loading will end after document is loaded


const preload = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
    preload.classList.add("loaded");
    document.body.classList.add("loaded");
})