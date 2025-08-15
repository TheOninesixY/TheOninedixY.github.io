// ==UserScript==
// @name         BeyCNBing
// @namespace    https://www.theoninesixy.github.io/BeyCNBing

// @version      1.0
// @updateURL    https://www.theoninesixy.github.io/BeyCNBing/file/BeyCNBing.js
// @downloadURL  https://www.theoninesixy.github.io/BeyCNBing/file/BeyCNBing.js
// @description  有时即使开着梯子，访问必应也会被重定向到中国版，这个脚本能完美解决这个问题。
// @icon         https://www.theoninesixy.github.io/BeyCNBing/file/bing-color.svg
// @author       OninesixY
// @match        *://cn.bing.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 获取当前URL
    const currentUrl = window.location.href;

    // 检查是否需要重定向
    if (currentUrl.startsWith('https://cn.bing.com') || currentUrl.startsWith('http://cn.bing.com')) {
        // 替换域名
        const newUrl = currentUrl.replace('cn.bing.com', 'www.bing.com');
        // 重定向
        window.location.replace(newUrl);
    }
})();