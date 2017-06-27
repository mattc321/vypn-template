window.onload = function(e){
    console.log(4);
    var navbutton= document.getElementById('#nav-button');
    if(navbutton){
        navbutton.addEventListener('click', function() {
            /*  Toggle the CSS closed class which reduces the height of the UL thus
             hiding all LI apart from the first */
            console.log('clicked');
            //this.parentNode.parentNode.classList.toggle('closed')
        }, false);
    }
} // End window load


//
//(function() {
//    // Bind Click event to the drop down navigation button
//    var navbtn = document.getElementById('#nav-button');
//    navbtn.addEventListener('click', function() {
//        /*  Toggle the CSS closed class which reduces the height of the UL thus
//         hiding all LI apart from the first */
//        console.log('clicked');
//        this.parentNode.parentNode.classList.toggle('closed')
//    }, false);
//})();