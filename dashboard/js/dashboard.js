window.onload = function(e){

//<------- Listeners -------->>
    var btnSignIn = document.getElementById('signin');
    if(btnSignIn){
        btnSignIn.addEventListener('click', fSignIn, false);
    }

    //copy link
    var btnCopyLink = document.getElementById('copy-link');
    if(btnCopyLink){
        btnCopyLink.addEventListener('click', fCopyLink, false);
    }

    var btnLogin = document.getElementById('copy-link');
    if(btnLogin){
        btnLogin.addEventListener('click', fCopyLink, false);
    }

    //file link select all when click
    var txtFileLink = document.getElementById('upload-link');
    if(txtFileLink){
        txtFileLink.addEventListener("click", function(){
            fSelectAll('upload-link');
        }, false);
    }



//<------- Other styff -------->>
    //Hamburger Menu
    (function() {
        // Bind Click event to the drop down navigation button
        document.querySelector('.nav-button').addEventListener('click', function() { /*  Toggle the CSS closed class which reduces the height of the UL thus
             hiding all LI apart from the first */
            this.parentNode.parentNode.classList.toggle('closed')
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
function submit_login(){
console.log('clicked login');
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

function validate_login(event){
    event.preventDefault();
    event.stopPropagation();
    var i = 0;

    var txtemail = document.getElementById('email');
    var txtpass  = document.getElementById('password');


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


    //finish set the alert
    if (i > 0) {
        tellEm('You forgot something', 'login-error');
        unHide('login-error');
        return false;
    } else {
        txtemail.classList.remove('failed');
        txtpass.classList.remove('failed');

        tellEm('', 'login-error');
        unHide('login-error');
        return true;
    }

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
    console.log(11);
    var element = document.getElementById(paramID);
    console.log(element.classList);
    if (element.classList.contains('hide-field')) {
        console.log(12);
        element.classList.remove('hide-field');
    }
}
function HideIt(paramID) {
    var element = document.getElementById(paramID);
    var classString = paramID.className; // returns the string of all the classes for element
    var newClass = classString.concat(" " + classToAdd);
    param.className = newClass;
}