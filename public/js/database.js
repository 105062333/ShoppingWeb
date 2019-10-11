// Write
var txtWriteRef = document.getElementById('txtWriteRef');
var txtWriteData = document.getElementById('txtWriteData');
var btnWrite = document.getElementById('btnWrite');

btnWrite.addEventListener('click', e => {
    firebase.database().ref(txtWriteRef.value).set({
        data_name: txtWriteData.value
    }).catch(e => console.log(e.message));
});

// Read
var txtReadRef = document.getElementById('txtReadRef');
var readResult = document.getElementById('readResult');
var btnRead = document.getElementById('btnRead');

btnRead.addEventListener('click', e => {
    firebase.database().ref(txtReadRef.value + '/data_name').once('value')
        .then(function (snapshot) {
            readResult.innerHTML = snapshot.val();
        })
        .catch(e => console.log(e.message));
});