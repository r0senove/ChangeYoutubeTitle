// ==UserScript==
// @name         Change YouTube Title!
// @namespace    http://tampermonkey.net/
// @version      1.4
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

        if (videoTitleElement) {
            // Replace the text content of the video title
            videoTitleElement.innerHTML = 'WHAT!?';

            // Update the WebPage Title
            document.title = 'WHAT!? - YouTube';

            // Remove the mutation observer after modification
        } else {
            console.log("Video Title Element not found");
        }
    }

    // Run the modification function initially when the script is executed
    modifyVideoTitleOnce();

    // Run the modification function every minute (60000 milliseconds)
    setInterval(modifyVideoTitleOnce, 30000); // Adjust interval as needed (in milliseconds)
})();
