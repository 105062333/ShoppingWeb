// Create a storage reference from our storage service
var storageRef = firebase.storage().ref();

// Upload
var selectedFile;
var fileRefUL = document.getElementById('fileRefUL');
var btnUL = document.getElementById('btnUL');

btnUL.addEventListener('click', e => {
    var fileRef = storageRef.child(fileRefUL.value);
    fileRef.put(selectedFile).then(function (snapshot) {
        console.log('Uploaded a blob or file!');
    }).catch(function (error) {
        console.log(error.message);
    });
});

// Download
var fileRefDL = document.getElementById('fileRefDL');
var btnDL = document.getElementById('btnDL');

btnDL.addEventListener('click', e => {
    storageRef.child(fileRefDL.value).getDownloadURL().then(function (url) {
        // `url` is the download URL for fileRefDL.value
        window.open(url, "_self");
    }).catch(function (error) {
        console.log(error.message);
    });
});