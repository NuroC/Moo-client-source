// ==UserScript==
// @name         Replace bundle script
// @version      1
// @description  Replaces the bundle script with your custom opne
// @author       You
// @match        *://moomoo.io/*
// @run-at       document-start
// ==/UserScript==

var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.type === 'childList') {
            if (mutation.addedNodes.length > 0) {
                if (mutation.addedNodes[0].nodeName === 'SCRIPT') {
                    let script = mutation.addedNodes[0];
                    if(script.src === "https://moomoo.io/bundle.js") {
                        script.src = 'http://127.0.0.1:6969/output/bundle.js'
                    }
                }
            }
        }
    });
})

observer.observe(document, {
    childList: true,
    subtree: true
});