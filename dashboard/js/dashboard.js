window.onload = function(e){

//<------- Listeners -------->>
    //top menu Sign In button
    var btnSignIn = document.getElementById('signin');
    if(btnSignIn){
        btnSignIn.addEventListener('click', fSignIn, false);
    }

    //copy link
    var btnCopyLink = document.getElementById('copy-link');
    if(btnCopyLink){
        btnCopyLink.addEventListener('click', fCopyLink, false);
    }

    //file link select all when click
    var txtFileLink = document.getElementById('upload-link');
    if(txtFileLink){
        txtFileLink.addEventListener("click", function(){
            fSelectAll('upload-link');
        }, false);
    }

    //listeners to nav-action class
    var classname = document.getElementsByClassName('nav-action');
    if(classname){
        for (var i = 0; i < classname.length; i++) {
            classname[i].addEventListener('click', function(e){
                e.preventDefault();
                e.stopPropagation();
                //get id to unhide\
                var idToShow = this.getAttribute('data-id');
                menuSelect(idToShow);
            });
        }
    }

//<------- Other styff -------->>
    //Hamburger Menu
    (function() {
        // Bind Click event to the drop down navigation button
        var isMouseDown = false;
        document.querySelector('.nav-button').addEventListener('click', function() { /*  Toggle the CSS closed class which reduces the height of the UL thus
             hiding all LI apart from the first */

            this.parentNode.parentNode.classList.toggle('closed');
            this.focus();
        }, false);


    })();

}; // End window load

//function to select whole textfield
function fSelectAll(paramID) {
    var lnk = document.getElementById(paramID);
    lnk.select();
}

function fCopyLink() {
    fSelectAll("upload-link");
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
    } catch (err) {
        console.log('Oops, unable to copy');
    }
}

//top menu signin button
function fSignIn(){

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
function submit_login(){

    if (validate_login(event) == false) {
        console.log('validate was false');
    } else {
        //setTimeout(function() {
        //    document.getElementById("first").style.display="none";
        //    document.getElementById("second").style.opacity=0;
        //    document.getElementById("second").style.display="block";
        //    addAnimation(document.getElementById("second"), 'bounceIn');
        //    document.getElementById("second").style.opacity=1;
        //    document.getElementById("first").style.display="none";
        //    addAnimation(document.getElementById("first"), 'bounceOutRight');
        //},400)

        console.log('validate was true');
    }
}

/**
* Function that handles login. Put in api here to validate username/passwd
**/
function validate_login(event){
    event.preventDefault();
    event.stopPropagation();
    var i = 0;

    var txtemail = document.getElementById('email');
    var txtpass  = document.getElementById('password');


    //check that there are values
    if (txtemail.value.length == 0) {
        i=1;
        if (!txtemail.classList.contains('failed')) {
            addMyClass(txtemail, 'failed');
        }
    } else {
        txtemail.classList.remove('failed');
    }

    if (txtpass.value.length == 0) {
        i=1;
        if (!txtpass.classList.contains('failed')) {
            addMyClass(txtpass, 'failed');
        }
    } else {
        txtpass.classList.remove('failed');
    }


    //set an alert if no values.
    if (i > 0) {
        tellEm('You forgot something', 'login-error');
        unHide('login-error');
        return false;
    } else {
        txtemail.classList.remove('failed');
        txtpass.classList.remove('failed');

        tellEm('', 'login-error');
        unHide('login-error');
    }

    //put login callback here
    console.log(txtemail.value);
    console.log(txtpass.value);

    return true;

}


function tellEm(msg, el) {
    var targetMsg = document.getElementById(el);
    var og = targetMsg.innerHTML;
    if (msg == '') {
        targetMsg.innerHTML = '';
    } else {
        targetMsg.innerHTML = '<p class="targetMsg">'+msg+'</p>';
    }
}

function unHide(paramID) {
    var element = document.getElementById(paramID);
    if (element.classList.contains('hide-field')) {
        element.classList.remove('hide-field');
    }
}
function hideIt(paramID) {
    var classToAdd = 'hide-field';
    var ep = document.getElementById(paramID);
    if (!ep.classList.contains('hide-field')) {
        var classString = ep.className; // returns the string of all the classes for element
        var newClass = classString.concat(" " + classToAdd);
        ep.className = newClass;
    }

}

//menu select function
//this is primarily used to show the
//transitions between frames. You can of course
//just use normal links in the menu as well, without the nav-action class.
function menuSelect(paramID) {

    //loop through menu items and get all their child link data-ids
    //the data-id of an element will be the div id you want to show

    var menu = document.getElementById('top-menu');
    var ele = document.getElementById(paramID);
    var array = [];
    var array_items = 0;
    var items = menu.getElementsByTagName('li');

    //looping through menu, getting ids, building an array
    for (var j = 0; j < items.length; j++) {
        if (items[j].childNodes[0].getAttribute('data-id')) {
            array.push (items[j].childNodes[0].getAttribute('data-id'));
        }

    }
    //now hide all other ids and display the one that was clicked
    for (var i = 0; i < array.length; i++) {
        hideIt(array[i]);
    }
    unHide(paramID);

}
