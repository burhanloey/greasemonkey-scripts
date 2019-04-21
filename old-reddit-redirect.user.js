// ==UserScript==
// @name      Old Reddit Redirect
// @namespace old-reddit-redirect
// @version   1
// @grant     none
// @include   https://www.reddit.com/*
// @run-at    document-start
// ==/UserScript==

var targetUrl = window.location.href.replace(/www/, 'old');

window.location.replace(targetUrl);
