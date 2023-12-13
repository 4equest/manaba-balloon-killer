// ==UserScript==
// @name         manaba balloon killer
// @namespace    https://REPLACE ME/
// @version      0.1
// @description  manabaからバルーン(外部のURL押したときに出てくるやつ)を消します。　自己責任で利用してください。
// @author       4equest
// @match        https://REPLACE ME/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    const ct_domain = "REPLACE ME"; // "ct.kansha.ac.jp" みたいにあなたが利用するmanabaのドメイン名をここに

    manaba.balloon = null;

    const replaceLinks = () => {
        console.log("[ballon killer] (=^・ω・^=)");
        Array.from(
            document.querySelectorAll('a[href*="link_iframe_balloon?url="]'),
            el => {
                el.onclick = void 0
                el.target = '_blank'
                const re = /link_iframe_balloon\?url=(.+)/
                el.href = decodeURIComponent(el.href.match(re)[1])
            }
        )
    }

    // 初回実行
    replaceLinks();

    // DOM変更を監視
    const observer = new MutationObserver(replaceLinks);
    observer.observe(document.body, { childList: true, subtree: true });
})();
