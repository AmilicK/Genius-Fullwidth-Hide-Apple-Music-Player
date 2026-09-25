// ==UserScript==
// @name         Genius Fullwidth & Hide Apple Music Player
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Растягивает текст песни на весь экран и скрывает плеер Apple Music
// @updateURL    https://github.com/AmilicK/Genius-Fullwidth-Hide-Apple-Music-Player/edit/main/Genius%20Fullwidth%20%26%20Hide%20Apple%20Music%20Player.js
// @downloadURL  https://github.com/AmilicK/Genius-Fullwidth-Hide-Apple-Music-Player/edit/main/Genius%20Fullwidth%20%26%20Hide%20Apple%20Music%20Player.js
// @match        https://genius.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    const css = `
        /* Сетка и читаемость */
        [id="lyrics-root"],
        div[class*="Lyrics__Container"] {
            width: 100% !important;
            max-width: 100% !important;
            grid-template-columns: 1fr !important;
        }
        div[data-lyrics-container="true"] {
            width: 100% !important;
            max-width: none !important;
        }
        div[class*="RightSidebar__Container"] {
            display: none !important;
        }

        /* Удаление нижнего плеера Apple Music */
        div[class*="SongPage__BottomSticky"],
        div[data-testid="media-player-container"],
        div[class*="AppleMusicPlayer"],
        iframe[src*="apple_music_player"] {
            display: none !important;
            height: 0 !important;
            visibility: hidden !important;
            pointer-events: none !important;
        }
    `;

    if (typeof GM_addStyle !== 'undefined') {
        GM_addStyle(css);
    } else {
        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);
    }
})();
