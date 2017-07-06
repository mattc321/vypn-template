window.onload = function(e){

//<------- Listeners -------->>
    //top menu Sign In button
    var btnSignIn = document.getElementById('signin');
    if(btnSignIn){
        btnSignIn.addEventListener('click', fSignIn, false);
    }

    var btnPro = document.getElementById('pro');
    if(btnPro){
        btnPro.addEventListener('click', fPro, false);
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
                leftMenuSelect(idToShow);
            });
        }
    }

    //var nav = document.getElementById('top-menu');
    //nav.addEventListener('onmouseout', onMouseOut, true);
    //listeners to user-menu-action class
    //var cname = document.getElementsByClassName('user-menu-action');
    //if(cname){
    //    for (var j = 0; j < cname.length; j++) {
    //        cname[j].addEventListener('click', function(e){
    //            e.preventDefault();
    //            e.stopPropagation();
    //            //get id to unhide
    //            var idToShow = this.getAttribute('data-id');
    //            rightMenuSelect(idToShow);
    //        });
    //    }
    //}

//<-------Top Menu stuff -------->>
    (function() {
        // Bind Click event to the drop down navigation button
        document.getElementById('top-menu').addEventListener('mouseout',onMouseOut,true);
        var isMouseDown = false;
        document.querySelector('.nav-button').addEventListener('click', function() {
            this.parentNode.parentNode.classList.toggle('closed');
            this.focus();
            isMouseDown = false;
        }, false);

        //If the doc is clicked outside the menu while it is open, then close it
        document.onclick = function(e){
            var menuBtn = document.getElementById('top-menu');
            if (isMouseDown) {
                if (!menuBtn.classList.contains('closed')) {
                    addClass(menuBtn, 'closed');
                    isMouseDown = false;
                }
            } else {
                isMouseDown = true;
            }
        };
    })();
}; // End window load

function onMouseOut(event) {
    //console.log('running mouseout');
    //this is the original element the event handler was assigned to
    //var te = event.toElement;
    //var e = event.relatedTarget;
    //var pn = e.parentNode;
    //console.log (pn.getAttribute('id'));
    //console.log(this);
    ////console.log(e.parentNode);
    ////if (e.parentNode == this || e == this) {
    //if (pn.getAttribute('id')=='top-menu') {
    //    //console.log('still on same do nothinbg');
    //    return;
    //}
    //console.log('real mouse out!');
    // handle mouse event here!
}
function fPro () {
    alert('do something for pro click');
}
function getRightFrameList(){
    var array = [];

    array.push({value:"user-menu-cont"});
    array.push({value:"login-cont"});

    return array;
}
function getLeftFrameList(){
    var array = [];

    array.push({value:"after-upload"});
    array.push({value:"opening-slogan"});
    array.push({value:"select-a-file-upload"});
    array.push({value:"preview-download"});
    array.push({value:"upload-complete"});
    //array.push({value:"login-cont"});
    //array.push({value:"user-menu-cont"});
    array.push({value:"transfers-table"});
    array.push({value:"contacts"});
    //array.push({value:""});
    return array;
}

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
    //addAnimation(document.getElementById("login-cont"), 'bounceIn');
    rightMenuSelect('login-cont');
}

//This is a blind add class function. Doesnt care if class exists.
function addClass(param, classToAdd) {
    var classString = param.className;
    var newClass = classString.concat(" " + classToAdd);
    param.className = newClass;
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

function showLeftFrame(frameId) {
    console.log(frameId);
    var frame = document.getElementById(frameId);
    if (frame.classList.contains('hide-field')) {

    }
}
function submit_login(){
    if (validate_login(event) == false) {
        console.log('validate was false');
    } else {
        console.log('validate was true');
        //if login was successful
        unHide('user-menu-cont');
        hideIt('login-cont');
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
function rightMenuSelect(paramID) {

    var frameList = getRightFrameList();

    for (var i = 0; i < frameList.length; i++) {
        hideIt(frameList[i].value);
    }
    unHide(paramID);

}

function leftMenuSelect(paramID) {

    //loop through menu items and get all their child link data-ids
    //the data-id of an element will be the div id you want to show

    var frameList = getLeftFrameList();

    for (var i = 0; i < frameList.length; i++) {
        hideIt(frameList[i].value);
    }
    unHide(paramID);
}