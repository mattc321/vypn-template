window.onload = function(e){

    //Listeners
    var btnSignIn = document.getElementById('signin');
    if(btnSignIn){
        btnSignIn.addEventListener('click', fSignIn, false);
    }


    //Hamburger Menu
    (function() {
        // Bind Click event to the drop down navigation button
        document.querySelector('.nav-button').addEventListener('click', function() {
            /*  Toggle the CSS closed class which reduces the height of the UL thus
             hiding all LI apart from the first */
            this.parentNode.parentNode.classList.toggle('closed')
        }, false);
    })();

    //console.log(4);
    //var navbutton= document.getElementById('nav-button');
    //if(navbutton){
    //    navbutton.addEventListener('click', function() {
    //        /*  Toggle the CSS closed class which reduces the height of the UL thus
    //         hiding all LI apart from the first */
    //        this.parentNode.parentNode.classList.toggle('closed');
    //        console.log('clicked');
    //        //this.parentNode.parentNode.classList.toggle('closed')
    //    }, false);
    //}
}; // End window load

function fSignIn(){
    console.log('clicked signin');
        addAnimation(document.getElementById("login-cont"), 'bounceIn');

        //setTimeout(function() {
        //    //document.getElementById("first").style.display="none";
        //    //document.getElementById("second").style.opacity=0;
        //    //document.getElementById("second").style.display="block";
        //    addAnimation(document.getElementById("second"), 'bounceIn');
        //    document.getElementById("second").style.opacity=1;
        //    document.getElementById("first").style.display="none";
        //    addAnimation(document.getElementById("first"), 'bounceOutRight');
        //},400)
}


function addMyClass(param, classToAdd) {
    //if it has the class
    if (param.classList.contains(classToAdd)) {
        param.classList.remove(classToAdd);
    } else {
        //if it doesnt have the class add it
        var classString = param.className; // returns the string of all the classes for element
        var newClass = classString.concat(" " + classToAdd);
        param.className = newClass;
    }
}

function addAnimation(param, classAnimate) {
    //if it has the class
    console.log('adding animation');
    if (param.classList.contains(classAnimate)) {
        param.classList.remove('animated');
        param.classList.remove(classAnimate);
    } else {
        //if it doesnt have the class add it
        var classString = param.className; // returns the string of all the classes for element
        var newClass = classString.concat(" animated " + classAnimate);
        param.className = newClass;
    }
}
