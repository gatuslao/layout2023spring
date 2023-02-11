$( document ).ready(function() {			/* Here we're using JQuery to check that the DOM (the document) is ready */
$("#nav-items").hide();
$("#ham-icon").click(function(){		/* This line says to listen for a "click" event on something with with the class of "controls" */
    $("#nav-items").toggle();	/* A click happened, so now we toggle (add/remove) the class "open" on an element with the ID of "drawer" */
    console.log("Toggle!");	/* For help troubleshooting, we're logging a note to the browser console so we can see that the function ran */
});

});
