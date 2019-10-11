// Login with Email/Password
var txtEmail = document.getElementById('txtEmail');
var txtPassword = document.getElementById('txtPassword');
var btnLogin = document.getElementById('btnLogin');
var btnSignUp = document.getElementById('btnSignUp');
var btnLogout = document.getElementById('btnLogout');

firebase.auth().createUserWithEmailAndPassword(email,password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
});

 firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
});


btnLogin.addEventListener('click', e => {
    var email = txtEmail.value;
    var password = txtPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(e => console.log(e.message));
});

btnSignUp.addEventListener('click', e => {
    var email = txtEmail.value;
    var password = txtPassword.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(e => console.log(e.message));
});

btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
});

// Login with Google
var btnLoginGooglePop = document.getElementById('btnLoginGooglePop');
var btnLoginGoogleRedi = document.getElementById('btnLoginGoogleRedi');

var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    });
btnLoginGooglePop.addEventListener('click', e => {
    console.log('signInWithPopup');
    firebase.auth().signInWithPopup(provider).then(function (result) {
        var token = result.credential.accessToken;
        var user = result.user;
    }).catch(function (error) {
        console.log('error: ' + error.message);
    });
});

btnLoginGoogleRedi.addEventListener('click', e => {
    console.log('signInWithPopup');
    firebase.auth().signInWithRedirect(provider);
});

firebase.auth().getRedirectResult().then(function (result) {
    if (result.credential)
        var token = result.credential.accessToken;
    var user = result.user;
}).catch(function (error) {
    console.log('error: ' + error.message);
});

// Login with Facebook
var btnLoginFBPop = document.getElementById('btnLoginFBPop');
var btnLoginFBRedi = document.getElementById('btnLoginFBRedi');

var facebook_provider = new firebase.auth.FacebookAuthProvider();

btnLoginFBPop.addEventListener('click', e => {
    firebase.auth().signInWithPopup(facebook_provider).then(function (result) {
        console.log('signInWithPopup');
        var token = result.credential.accessToken;
        var user = result.user;
    }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
    });
});

btnLoginFBRedi.addEventListener('click', e => {
    firebase.auth().signInWithRedirect(facebook_provider);
});

// Manage Users
var usrDiv = document.getElementById('usrDiv');
var usrName = document.getElementById('usrName');
var useEmail = document.getElementById('useEmail');

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log(user);
        usrDiv.style.visibility = 'visible';
        usrName.innerHTML = 'User Name: ' + user.displayName;
        useEmail.innerHTML = 'User Email: ' + user.email;
    } else {
        console.log('not logged in');
        usrDiv.style.visibility = 'hidden';
    }
});
