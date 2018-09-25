$(document).ready(function() {
	"use strict";
	let container = $('.box2');
    TweenLite.from(container, 1, {marginTop: 400, backgroundColor: "white"});
    
    // Create a variable
    let $logo = $('.icon');
    // Scale box up/down on hover
    $logo.hover(function() {
     TweenLite.to($(this), 1, {scale:1.12,backgroundColor: "#003366"});
     },
     function() {
     TweenLite.to($(this), 1, {scale:1});
     }
    ); 

});

