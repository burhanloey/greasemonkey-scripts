// ==UserScript==
// @name      KissAnime Dropdown Adjust
// @namespace kissanime-dropdown-adjust
// @version   1
// @grant     none
// @include   /http:\/\/kissanime\.ru\/Anime\/(?=.+\/)/
// ==/UserScript==

var episodes = document.querySelectorAll('#selectEpisode option');

for (var i = 0; i < episodes.length; i++) {
    // Replace episode numbers with numbers starting with 1
    episodes[i].innerHTML = episodes[i].innerHTML.replace(/[\d]+\b/, i + 1);
}
