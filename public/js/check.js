$(function () {
var user_email = '';
var database = firebase.database();
var checkout = document.getElementById('checkout');
var user = firebase.auth().currentUser;
var Today = new Date();
firebase.auth().onAuthStateChanged(function (user) {
    var menu = document.getElementById('dynamic-menu');
    // Check user login
    if (user) {
        user_email = user.email;
        menu.innerHTML = "<span class='dropdown-item'>" + user.email + "<br>" + "</span><span class='dropdown-item' id='logout-btn' >Logout</span>";

        var logoutbtn = document.getElementById('logout-btn');
        var pay = document.getElementById('payment');
        logoutbtn.addEventListener('click', function () {
            firebase.auth().signOut().then(() => {
                alert('byebye~~');
                window.location.replace('signin.html');
            }, function (error) {

            });
        });
        pay.addEventListener('click', function () {
            window.location.replace('payment.html');
        });
        firebase.database().ref('users/' + firebase.auth().currentUser.uid).on('value', function (snapshot) {
            console.log('intofunction');
            var Product1_Name = snapshot.val().product1_name;
            var Product2_Name = snapshot.val().product2_name;
            var Product3_Name = snapshot.val().product3_name;
            var Product4_Name = snapshot.val().product4_name;
            var Product5_Name = snapshot.val().product5_name;
            var Product6_Name = snapshot.val().product6_name;
            var Product1_Q = snapshot.val().product1_quantity;
            var Product2_Q = snapshot.val().product2_quantity;
            var Product3_Q = snapshot.val().product3_quantity;
            var Product4_Q = snapshot.val().product4_quantity;
            var Product5_Q = snapshot.val().product5_quantity;
            var Product6_Q = snapshot.val().product6_quantity;
            var shoppinghistory1 = document.getElementById('Product1History');
            var shoppinghistory2 = document.getElementById('Product2History');
            var shoppinghistory3 = document.getElementById('Product3History');
            var shoppinghistory4 = document.getElementById('Product4History');
            var shoppinghistory5 = document.getElementById('Product5History');
            var shoppinghistory6 = document.getElementById('Product6History');
            var year = snapshot.val().Year;
            var month = snapshot.val().Month;
            var day = snapshot.val().Day;
            var hours = snapshot.val().Hours;
            var minutes = snapshot.val().Minutes;
            var seconds = snapshot.val().Seconds;
            var month1 = month+1;
            if (hours < 10)
              hours = '0' + hours;
            if (minutes < 10)
              minutes = '0' + minutes;
            if (seconds < 10)
              seconds = '0' + seconds;
            if (Product1_Q != 0) {
              shoppinghistory1.innerHTML = 'You last time bought this Item is <br>Date : ' + year + '/' + month + '/' + day + '<br>Time : ' + hours + ':' + minutes + ':' + seconds + '<br>Quantity : ' + Product1_Q;
            }
            if (Product2_Q != 0) {
              shoppinghistory2.innerHTML = 'You last time bought this Item is <br>Date : ' + year + '/' + month + '/' + day + '<br>Time : ' + hours + ':' + minutes + ':' + seconds + '<br>Quantity : ' + Product2_Q;
            }
            if (Product3_Q != 0) {
              shoppinghistory3.innerHTML = 'You last time bought this Item is <br>Date : ' + year + '/' + month + '/' + day + '<br>Time : ' + hours + ':' + minutes + ':' + seconds + '<br>Quantity : ' + Product3_Q;
            }
            if (Product4_Q != 0) {
              shoppinghistory4.innerHTML = 'You last time bought this Item is <br>Date : ' + year + '/' + month + '/' + day + '<br>Time : ' + hours + ':' + minutes + ':' + seconds + '<br>Quantity : ' + Product4_Q;
            }
            if (Product5_Q != 0) {
              shoppinghistory5.innerHTML = 'You last time bought this Item is <br>Date : ' + year + '/' + month + '/' + day + '<br>Time : ' + hours + ':' + minutes + ':' + seconds + '<br>Quantity : ' + Product5_Q;
            }
            if (Product6_Q != 0) {
              shoppinghistory6.innerHTML = 'You last time bought this Item is <br>Date : ' + year + '/' + month + '/' + day + '<br>Time : ' + hours + ':' + minutes + ':' + seconds + '<br>Quantity : ' + Product6_Q;
            }
            console.log('finish');
    
          });
          checkout.addEventListener('click', function () {
            if (Product1_Quantity !== 0 || Product2_Quantity !== 0 || Product3_Quantity !== 0 || Product4_Quantity !== 0 || Product5_Quantity !== 0 || Product6_Quantity !== 0) {
              console.log('buy sth');
              writeUserData();
              notifyMe();
            }
            else{
              console.log('buy nothing');
              buynothing();
            }
          });
    } else {
      var notlogin = document.getElementById('checkout');
      notlogin.addEventListener('click', function () {
        alert('Please Login!!!');
      });
    }
});
function writeUserData() {
    firebase.database().ref('users/' + firebase.auth().currentUser.uid).set({
        name: firebase.auth().currentUser.email,
        product1_name: 'How Sweater',
        product1_quantity: Product1_Quantity,
        product2_name: 'Hot Coats',
        product2_quantity: Product2_Quantity,
        product3_name: 'Hot Jeans',
        product3_quantity: Product3_Quantity,
        product4_name: 'Hot Shirt',
        product4_quantity: Product4_Quantity,
        product5_name: 'Hot Suit',
        product5_quantity: Product5_Quantity,
        product6_name: 'Hot Jacket',
        product6_quantity: Product6_Quantity,
        Year: Today.getFullYear(),
        Month: Today.getMonth()+1,
        Day: Today.getDate(),
        Hours: Today.getHours(),
        Minutes: Today.getMinutes(),
        Seconds: Today.getSeconds()
    });
}
});
