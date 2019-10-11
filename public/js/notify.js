document.addEventListener('DOMContentLoaded', function () {
    if (!Notification) {
        alert('Desktop notifications not available in your browser. Try Chromium.');
        return;
    }

    if (Notification.permission !== "granted")
        Notification.requestPermission();
});

function Loginsuccessful() {
    if (Notification.permission !== "granted")
        Notification.requestPermission();
    else {
        var notification = new Notification('SHAPPE Official', {
            icon: 'images/notification.jpg',
            body: "Login Successfully,\nHope you be delighted in my Web :)",
        });
        notification.onclick = function () {
            window.location.replace('about.html');
        };
    }
}
function notifyMe(){
    if (Notification.permission !== "granted")
        Notification.requestPermission();
    else {
        var notification = new Notification('SHAPPE Official', {
            icon: 'images/notification.jpg',
            body: "Pay Successfully,\nClick and Check your Shopping History !!",
        });
        notification.onclick = function () {
            window.location.replace('user.html');
        };
    }
}
function buynothing(){
    if (Notification.permission !== "granted")
        Notification.requestPermission();
    else {
        var notification = new Notification('SHAPPE Official', {
            icon: 'images/notification.jpg',
            body: "You have nothing in your cart :(",
        });
        notification.onclick = function () {
            window.location.replace('index.html');
        };
    }
}
function product1() {
    if (Notification.permission !== "granted")
        Notification.requestPermission();
    else {
        var notification = new Notification('SHAPPE Official', {
            icon: 'images/tp1.jpg',
            body: "Hot Sweater is added to your shopping cart !!",
        });
        notification.onclick = function () {
            window.location.replace('sweater.html');
        };
    }
}
function product2() {
    if (Notification.permission !== "granted")
        Notification.requestPermission();
    else {
        var notification = new Notification('SHAPPE Official', {
            icon: 'images/tp2.jpg',
            body: "Hot Coats is added to your shopping cart !!",
        });
        notification.onclick = function () {
            window.location.replace('coats.html');
        };
    }
}
function product3() {
    if (Notification.permission !== "granted")
        Notification.requestPermission();
    else {
        var notification = new Notification('SHAPPE Official', {
            icon: 'images/tp3.jpg',
            body: "Hot Jeans is added to your shopping cart !!",
        });
        notification.onclick = function () {
            window.location.replace('jeans.html');
        };
    }
}
function product4() {
    if (Notification.permission !== "granted")
        Notification.requestPermission();
    else {
        var notification = new Notification('SHAPPE Official', {
            icon: 'images/tp7.jpg',
            body: "Hot Shirt is added to your shopping cart !!",
        });
        notification.onclick = function () {
            window.location.replace('shirt.html');
        };
    }
}
function product5() {
    if (Notification.permission !== "granted")
        Notification.requestPermission();
    else {
        var notification = new Notification('SHAPPE Official', {
            icon: 'images/tp5.jpg',
            body: "Hot Suit is added to your shopping cart !!",
        });
        notification.onclick = function () {
            window.location.replace('suit.html');
        };
    }
}
function product6() {
    if (Notification.permission !== "granted")
        Notification.requestPermission();
    else {
        var notification = new Notification('SHAPPE Official', {
            icon: 'images/tp6.jpg',
            body: "Hot Jacket is added to your shopping cart !!",
        });
        notification.onclick = function () {
            window.location.replace('jacket.html');
        };
    }
}