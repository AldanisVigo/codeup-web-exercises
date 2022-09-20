"use strict";

$(function() {
    //Passing an anonymous function to the $ jquery object, will run that function after the DOM loads
    alert("The DOM has finished loading")
});

/*
    Use jQuery to select an element by the id. Alert the contents of the element.
 */
//alert($("#mydiv").html())

/*
    Update the jQuery code to select and alert a different id.
 */
alert($('#myh1').html())
