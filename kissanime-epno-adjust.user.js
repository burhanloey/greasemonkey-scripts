// ==UserScript==
// @name      KissAnime Episode Numbers Adjustment
// @namespace kissanime-epno-adjust
// @version   1
// @grant     none
// @include   /http:\/\/kissanime\.ru\/Anime\/(?!.+\/)/
// ==/UserScript==

var episodes = document.querySelectorAll('.listing a');

for (var i = 0; i < episodes.length; i++) {
    // Replace the episode number at the end of string with episode number
    // starting from 1
    var title = episodes[i].innerHTML;
    var updatedEpNo = episodes.length - i;
    var updatedTitle = title.replace(/\d*$/, updatedEpNo);

    episodes[i].innerHTML = updatedTitle;
}
