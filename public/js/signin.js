function initApp() {
    // Login with Email/Password
    var txtEmail = document.getElementById('inputEmail');
    var txtPassword = document.getElementById('inputPassword');
    var btnLogin = document.getElementById('btnLogin');
    var btnGoogle = document.getElementById('btngoogle');
    var btnSignUp = document.getElementById('btnSignUp');
    var btnFacebook = document.getElementById('btnFacebook');

    btnLogin.addEventListener('click', function () {
        
        var email = txtEmail.value;
        var password = txtPassword.value;

         firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
             window.location.replace('index.html');
             Loginsuccessful();
        }).catch(function (error) {
            // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        //window.alert("Error : " + errorMessage);
        window.alert("Wrong Password!!");
        //create_alert("error", errorMessage);
        txtEmail.value="";
        txtPassword.value="";
        });
    
    });

    btnFacebook.addEventListener('click', function(){
        var btnLoginFBPop = document.getElementById('btnLoginFBPop');
        var btnLoginFBRedi = document.getElementById('btnLoginFBRedi');
        var facebook_provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(facebook_provider).then(function (result) {
            console.log('signInWithPopup');
            var token = result.credential.accessToken;
            var user = result.user;
            window.location.replace('index.html');
            Loginsuccessful();
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            //console.log('error: ' + error.message);
        });
    });

    btnGoogle.addEventListener('click', function () {
        
        var btnLoginGooglePop = document.getElementById('btnLoginGooglePop');
        var btnLoginGoogleRedi = document.getElementById('btnLoginGoogleRedi');
        var provider = new firebase.auth.GoogleAuthProvider();

        console.log('signInWithPopup');
        firebase.auth().signInWithPopup(provider).then(function (result) {
            var token = result.credential.accessToken;
            var user = result.user;
            window.location.replace('index.html');
            Loginsuccessful();
        }).catch(function (error) {
            console.log('error: ' + error.message);
            //create_alert("error", error.message);
            window.alert("Please try again!");
            txtEmail.value="";
            txtPassword.value="";
        });
        /*btnLoginGoogleRedi.addEventListener('click', e => {
            console.log('signInWithPopup');
            firebase.auth().signInWithRedirect(provider);
        });

        firebase.auth().getRedirectResult().then(function (result) {
            if (result.credential)
                var token = result.credential.accessToken;
            var user = result.user;
        }).catch(function (error) {
            console.log('error: ' + error.message);
        });*/

    });

    btnSignUp.addEventListener('click', function () {        
       
         var email = txtEmail.value;
        var password = txtPassword.value;
            firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
                window.alert('Sign Up Successfully!!!');
                txtPassword.value="";
            }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode === 'auth/weak-password') {
             //create_alert('error','wrong');
             window.alert("The minimum six Characters!!");
            } else {
                alert(errorMessage);
            }
             console.log(error);
        });
    });
}

// Custom alert
/*function create_alert(type, message) {
    var alertarea = document.getElementById('custom-alert');
    if (type == "success") {
        str_html = "<div class='alert alert-success alert-dismissible fade show' role='alert'><strong>Success! </strong>" + message + "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>";
        alertarea.innerHTML = str_html;
    } else if (type == "error") {
        str_html = "<div class='alert alert-danger alert-dismissible fade show' role='alert'><strong>Error! </strong>" + message + "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>";
        alertarea.innerHTML = str_html;
    }
}*/

window.onload = function () {
    initApp();
};
