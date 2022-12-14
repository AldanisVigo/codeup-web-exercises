"use strict";

$(function() {
    //Passing an anonymous function to the $ jquery object, will run that function after the DOM loads
    // alert("The DOM has finished loading")
    /*
    Use jQuery to select an element by the id. Alert the contents of the element.
     */
    //alert($("#mydiv").html())

        /*
            Update the jQuery code to select and alert a different id.
         */
    //alert($('#myh1').html())

        /*
            Use the same id on 2 elements. How does this change the jQuery selection?
            //Answer : I only get access to the first element
         */
    // Remove your custom jQuery code from previous exercises.
    // alert($('#myli').html())

    /*
        Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.
     */
    //Remove your custom jQuery code from previous exercises.
    // $('.codeup').css({
    //     border : '1px solid red'
    // })
    /*
        Using jQuery, set the font-size of all li elements to 20px.
     */
    $('li').css({
        fontSize : '20px'
    })

    /*
        Craft selectors that highlight all the h1, p, and li elements.
     */
    // Remove your custom jQuery code from previous exercises.
    //li elements
    // $('li').css({
    //     border: '1px solid red'
    // })
    //
    // //h1 elements
    // $('h1').css({
    //     border: '1px solid red'
    // })
    //
    // //p elements
    // $('p').css({
    //     border: '1px solid red'
    // })
    //
    // /*
    //     Create a jQuery statement to alert the contents of your h1 element(s).
    //  */
    // alert($('h1').html())
    //
    // /*
    //     Combine your selectors that highlight all the h1, p, and li elements
    //  */
    // $('h1,p,li').css({
    //     border: '1px solid blue'
    // })

    /*
        Add jQuery code that will change the background color of an h1 element when clicked.
     */
    $('h1').click(function(){
        $(this).css({
            background : 'red'
        })
    })

    /*
        Make all paragraphs have a font size of 18px when they are double clicked.
     */
    $('p').dblclick(function(){
        $(this).css({
            fontSize: '18px'
        })
    })

    /*
        Set all li text color to red when the mouse is hovering; reset to black when it is not.
     */
    $('li').hover(function(){
        $(this).css({
            color : 'red'
        })
    }).mouseout(function(){
        $(this).css({
            color : 'black'
        })
    })


});

