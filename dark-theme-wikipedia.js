// ==UserScript==
// @name      Dark Theme Wikipedia
// @namespace dark-theme-wikipedia
// @version   1
// @grant     none
// @include   https://en.wikipedia.org/*
// @run-at    document-start
// ==/UserScript==

var styles = `
body {
  background-color: #2a2a2e;
}

.mw-body,
#mw-page-base,
.wikitable,
.wikitable > tr > th,
.wikitable > * > tr > th,
table.ambox,
.toc,
.infobox,
.vector-menu-tabs li {
  background-color: #2a2a2e !important;
  color: lightgrey; !important;
}

.table-yes,
.table-no {
  color: darkslategrey;
}

#mw-page-base,
.vector-menu-tabs li{
  background-image: none;
}

.vector-menu-tabs .selected {
  background: #36363a;
}

h1, h2, h3, h4, h5, h6,
.vector-menu-tabs .selected a,
.vector-menu-tabs .selected a:visited{
  color: lightgrey;
}

a,
.vector-menu-tabs li a,
.vector-menu-portal .body li a {
  color: cornflowerblue;
}

a:visited {
  color: #2958ac;
}

.navbox {
  background-color: #2a2a2e;
  color: black;
}

.navbox-odd {
  background: white;
}

.catlinks {
  background-color: #2a2a2e;
}

.metadata,
.vertical-navbox,
.thumbinner {
  background: #2a2a2e !important;
}
`;

var styleSheet = document.createElement("style");
styleSheet.innerText = styles;

// on new tab, this script run before document.head even exist
if (document.head) {
  document.head.appendChild(styleSheet);
} else {
  // constantly checking until document.head exists
  var process = setInterval(function () {
    if (document.head) {
      document.head.appendChild(styleSheet);
      clearInterval(process);
    }
  }, 10);
}
