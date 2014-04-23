// ==UserScript==
// @name         Weibo Cleaner
// @version      0.1
// @description  This script is used for hide personal colorful weibo background.
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @require      http://cdnjs.cloudflare.com/ajax/libs/sugar/1.3/sugar.min.js
// @include      http://weibo.com/*
// @match        http://weibo.com/*
// @copyright    2012+, Yan Cao
// ==/UserScript==

var clean_background = function(){
  $("body").css("background", "transparent");
  
};
 
$(document).ready(function() {
    clean_background();
});
