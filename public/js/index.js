function init() {
    var user_email = '';
    firebase.auth().onAuthStateChanged(function (user) {
        var menu = document.getElementById('dynamic-menu');
        // Check user login
        if (user) {
            user_email = user.email;
            menu.innerHTML = "<span class='dropdown-item'>" + user.email + "</span><span style='opacity: 0;'>.</span><br><span style='cursor: pointer;'class='dropdown-item' id='logout-btn'>Logout</span><span style='opacity: 0;'>..</span><span class='fa fa-sign-out '>" + "</span>";
            /// TODO 5: Complete logout button event
            ///         1. Add a listener to logout button 
            ///         2. Show alert when logout success or error (use "then & catch" syntex)
            var logoutbtn = document.getElementById('logout-btn');
            var pay = document.getElementById('payment');
            var send = document.getElementById('send');
            logoutbtn.addEventListener('click', function () {
                firebase.auth().signOut().then(() => {  
                     alert('byebye~~');
                     //window.location.replace('signin.html');
                }, function(error) {
                    
                });
            });
            pay.addEventListener('click', function(){
                window.location.replace('payment.html');
            });
            send.addEventListener('click', function(){
                alert('We receive your Message, Thanksss~');
            });
        } else {
            // It won't show any post if not login
            menu.innerHTML = "<a class='dropdown-item' href='signin.html'>Login</a>";
            //document.getElementById('post_list').innerHTML = "";
            pay.addEventListener('click', function () {
                alert('Please Login!!');
                window.location.replace('signin.html');
            });
        }
    });

   /* post_btn = document.getElementById('post_btn');
    post_txt = document.getElementById('comment');

    post_btn.addEventListener('click', function () {
        if (post_txt.value != "") {
            var newPostRef = firebase.database().ref('com_list').push();
            newPostRef.set({
                message:post_txt.value,
                user:user_email
            })
        }
    });

    // The html code for post
    var str_before_username = "<div class='my-3 p-3 bg-white rounded box-shadow'><h6 class='border-bottom border-gray pb-2 mb-0'>Recent updates</h6><div class='media text-muted pt-3'><img src='img/test.svg' alt='' class='mr-2 rounded' style='height:32px; width:32px;'><p class='media-body pb-3 mb-0 small lh-125 border-bottom border-gray'><strong class='d-block text-gray-dark'>";
    var str_after_content = "</p></div></div>\n";

    var postsRef = firebase.database().ref('com_list');
    // List for store posts html
    var total_post = [];
    // Counter for checking history post update complete
    var first_count = 0;
    // Counter for checking when to update new post
    var second_count = 0;

    postsRef.once('value')
        .then(function (snapshot) {
            snapshot.forEach(function(childSnapshop){
                var childData = childSnapshop.val();
                total_post[total_post.length] = str_before_username + childData.email+"</strong>"+childData.message+str_after_content;
                first_count+=1;
            });
            document.getElementById('post_list').innerHTML = total_post.join('');
            postsRef.on('child_added',function(data){
                second_count+=1;
                if(second_count>first_count){
                    var childData = data.val();
                    total_post[total_post.length] = str_before_username + childData.email+"</strong>"+childData.message+str_after_content;
                    document.getElementById('post_list').innerHTML = total_post.join('');
                }
            });
        })
        .catch(e => console.log(e.message));*/
}

window.onload = function () {
    init();
};