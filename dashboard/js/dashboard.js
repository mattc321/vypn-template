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
                //get id to unhide
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
            this.parentNode.parentNode.classList.toggle('closed')
            this.focus()
        }, false);
        document.querySelector('.nav-button').addEventListener('mousedown', function() { /*  Toggle the CSS closed class which reduces the height of the UL thus
         hiding all LI apart from the first */
            isMouseDown = true;
        }, false);
        document.querySelector('.nav-button').addEventListener('mouseup', function() { /*  Toggle the CSS closed class which reduces the height of the UL thus
         hiding all LI apart from the first */
            isMouseDown = true;
        }, false);
        document.querySelector('.nav-button').addEventListener('mouseleave', function() { /*  Toggle the CSS closed class which reduces the height of the UL thus
         hiding all LI apart from the first */
            isMouseDown = true;
        }, false);
        document.querySelector('.nav-button').addEventListener('blur', function() { /*  Toggle the CSS closed class which reduces the height of the UL thus
         hiding all LI apart from the first */
            if (isMouseDown) {
                this.parentNode.parentNode.classList.toggle('closed');
            } else {
                console.log('isnot');
            }
        }, false);



    })();

}; // End window load

//function to select whole textfield
function fSelectAll(paramID) {
    var lnk = document.getElementById(paramID);
    lnk.select();
}

function fCopyLink() {
    console.log('clicked copy');

    fSelectAll("upload-link");
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
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

    //login callback
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
    console.log(element.classList);
    if (element.classList.contains('hide-field')) {
        element.classList.remove('hide-field');
    }
}
function hideIt(paramID) {
    var classToAdd = 'hide-field';
    var element = document.getElementById(paramID);
    if (!element.classList.contains('hide-field')) {
        var classString = element.className; // returns the string of all the classes for element
        var newClass = classString.concat(" " + classToAdd);
        element.className = newClass;
    }
}

//menu select function
//this is primarily used to show the
//transitions between frames. You can of course
//just use normal links in the menu as well, without the nav-action class.
function menuSelect(paramID) {
    var ele = document.getElementById(paramID);

    var array = [];
    array.push({ value: 'after-upload' });
    array.push({ value: 'opening-slogan' });
    array.push({ value: 'select-a-file-upload' });
    array.push({ value: 'preview-download' });
    array.push({ value: 'upload-complete' });
    array.push({ value: 'login-cont' });
    array.push({ value: 'right-menu-cont' });

    for (var i = 0; i < array.length; i++) {
        console.log('hiding ' + array[i].value);
        hideIt(array[i].value);
    }
    unHide(paramID);

}
