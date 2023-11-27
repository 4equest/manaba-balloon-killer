// ==UserScript==
// @name         manaba balloon killer(public ver.)
// @namespace    https://REPLACE ME/
// @version      0.1
// @description  manabaからバルーン(外部のURL押したときに出てくるやつ)を消します。　自己責任で利用してください。
// @author       4equest
// @match        https://REPLACE ME/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    const ct_domain = "REPLACE ME"; // "ct.kansha.ac.jp" みたいにあなたが利用するmanabaのドメイン名をここに

    console.log("[ballon killer] (=^・ω・^=)");
    manaba.balloon = null;

    // すべてのaタグを取得
    var aTags = document.getElementsByTagName("a");

    for (var i = 0; i < aTags.length; i++) {
        var aTag = aTags[i];

        // hrefが"link_iframe_balloon?url="で始まり、onclickが"return manaba.linkballoon(event);"であるaタグを探す
        if (aTag.href.startsWith("https://" + ct_domain + "/ct/link_iframe_balloon?url=") && aTag.getAttribute("onclick") === "return manaba.linkballoon(event);") {
            console.log("[ballon killer] replace " + aTag);
            // onclick属性を削除
            aTag.removeAttribute("onclick");

            // href属性の"link_iframe_balloon?url="以降の文字列をデコード
            var decodedUrl = decodeURIComponent(aTag.href.split("https://" + ct_domain + "/ct/link_iframe_balloon?url=")[1]);

            // デコードしたURLをaタグのhrefとして設定
            aTag.href = decodedUrl;
        }
    }

})();
