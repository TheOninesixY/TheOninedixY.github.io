// ==UserScript==
// @name         BeyCNBing
// @namespace    https://theoninesixy.github.io/Script/BeyCNBing
// @author       OninesixY
// @version      2.1
// @updateURL    https://theoninesixy.github.io/Script/BeyCNBing/file/BeyCNBing.user.js
// @downloadURL  https://theoninesixy.github.io/Script/BeyCNBing/file/BeyCNBing.user.js
// @description  有时即使开着梯子，访问必应也会被重定向到中国版，这个脚本可以完美解决这个问题。
// @icon         https://theoninesixy.github.io/Script/BeyCNBing/file/bing-color.svg
// @match        *://cn.bing.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 获取当前URL
    const currentUrl = window.location.href;
    const redirectKey = 'lastBingRedirectTime';
    const now = Date.now();

    // 检查是否需要重定向
    if (currentUrl.startsWith('https://cn.bing.com') || currentUrl.startsWith('http://cn.bing.com')) {
        // 获取上次重定向时间
        const lastRedirectTime = localStorage.getItem(redirectKey);

        // 检查是否在1秒内返回
        if (lastRedirectTime && (now - parseInt(lastRedirectTime)) < 1000) {
            console.log('1秒内返回中国版，放弃重定向');
            // 清除记录，避免影响下次访问
            localStorage.removeItem(redirectKey);
        } else {
            // 记录重定向时间
            localStorage.setItem(redirectKey, now.toString());
            // 替换域名
            const newUrl = currentUrl.replace('cn.bing.com', 'www.bing.com');
            // 重定向
            window.location.replace(newUrl);
        }
    }
})();
