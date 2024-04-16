// ==UserScript==
// @name         Change YouTube Title!
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  What is Title?!
// @author       noverio
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @updateURL    https://github.com/r0senove/ChangeYoutubeTitle/raw/main/Change-Youtube-Title.user.js
// @downloadURL  https://github.com/r0senove/ChangeYoutubeTitle/raw/main/Change-Youtube-Title.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to modify the video title element once
    function modifyVideoTitleOnce() {
        // Check for the video title element
        const videoTitleElement = document.querySelector("#title > h1 > yt-formatted-string");
        const videoTitleElement2 = document.querySelector("#title > h1 > yt-formatted-string > span");
        const videoTitleElementTag = document.querySelector("#title > h1 > yt-formatted-string > a");
        const webpageTitleElement = document.querySelector("head > title");

        if (videoTitleElement && webpageTitleElement) {
            // Replace the text content of the video title
            videoTitleElement.textContent = 'WHAT!?';
            videoTitleElement2.textContent = '';
            videoTitleElementTag.textContent = '';
            webpageTitleElement.textContent = 'WHAT!? - YouTube';

            // Remove the mutation observer after modification
            observer.disconnect();
        }
    }

    // Create a mutation observer to detect changes in the DOM
    const observer = new MutationObserver(mutationsList => {
        // Call the modification function when the DOM changes
        modifyVideoTitleOnce();
    });

    // Start observing changes in the DOM
    observer.observe(document.body, { childList: true, subtree: true });
})();
