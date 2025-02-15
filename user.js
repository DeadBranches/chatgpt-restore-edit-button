// ==UserScript==
// @name         ChatGPT: Restore Edit Button
// @version      1.0
// @description  This script restores the ability to edit user messages in OpenAI's ChatGPT web-ui
// @author       DeadBranch
// @homepageURL  https://github.com/DeadBranches/chatgpt-restore-edit-button
// @grant        none
// @match    https://chatgpt.com/*
// @match    https://chat.openai.com/*
// ==/UserScript==

(function() {
    'use strict';

    // Configuration for the target element
    const HIDDEN_REMOVAL_CONFIG = [
        {
            selector: '.right-full', // The element with the hidden class to unhide, nyan~!
            description: 'Target element with class "right-full" for unhiding'
        }
    ];

    // Function to remove the 'hidden' class from a matched element
    const processElement = (element, config) => {
        if (!element) return false;
        if (element.classList.contains('hidden')) {
            element.classList.remove('hidden');
            console.info(`Removed 'hidden' from ${config.description}`, element);
            return true; // Indicate that the element was processed
        }
        return false; // No action taken if the class isn't present
    };

    // Process all configured elements on the page
    const processHiddenElements = () => {
        HIDDEN_REMOVAL_CONFIG.forEach(config => {
            const element = document.querySelector(config.selector);
            processElement(element, config);
        });
    };

    // Initial processing when the DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener("DOMContentLoaded", processHiddenElements);
    } else {
        processHiddenElements();
    }

    // Set up a MutationObserver to detect and process dynamic DOM changes
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    HIDDEN_REMOVAL_CONFIG.forEach(config => {
                        let element = null;
                        // If the added node itself matches the selector, use it
                        if (node.matches && node.matches(config.selector)) {
                            element = node;
                        } else if (node.querySelector) { // Otherwise, look for a matching descendant
                            element = node.querySelector(config.selector);
                        }
                        if (element) {
                            processElement(element, config);
                        }
                    });
                }
            });
        });
    });

    observer.observe(document.documentElement, { childList: true, subtree: true });
})();