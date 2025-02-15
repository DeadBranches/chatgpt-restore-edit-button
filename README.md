# Restore ChatGPT user message edit button
*Remove Hidden Class from `.right-full` Elements*

## Overview

This Greasemonkey/Tampermonkey userscript automatically removes the `hidden` class from elements with the `.right-full` CSS class. It ensures that these elements are always visible, even if they are dynamically added to the page.

## Installation

1. Install a userscript manager:
   - [Tampermonkey](https://www.tampermonkey.net/) (Recommended)
   - [Greasemonkey](https://www.greasespot.net/) (Firefox)
   - [Violentmonkey](https://violentmonkey.github.io/) (Alternative)

2. Click the following link to install the script:  
   **[Install user.js](https://github.com/YOUR-USERNAME/YOUR-REPO/raw/main/user.js)**  
   *(Replace `YOUR-USERNAME` and `YOUR-REPO` with your GitHub details.)*

3. Confirm the installation in your userscript manager.

## How It Works

- The script automatically scans the page for elements with `.right-full` and removes the `hidden` class.
- It continuously monitors for dynamically added elements and ensures they remain visible.

## Technical Details

- Uses `MutationObserver` to detect changes in the DOM.
- Runs immediately when the page loads and updates dynamically.

## License

This project is licensed under the AGPL License. See [LICENSE](LICENSE) for details.
