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
    $(".WB_global_nav").css("background", "transparent");
    // Align the top nav-bar
    $(".W_miniblog").css("padding-top","41px");
    // All AD class
    $(".sinaads").css("display", "none");
    // Right side AD
    $(".content .adver_contB").css("display","none");
    // Recommend weibo
    $("div[node-type='feed_spread']").hide();
};

$(document).ready(function() {
    clean_background();
});
