(function () {
    'use strict';
    //front end

    var ajax = new XMLHttpRequest();
    ajax.open('GET', 'http://localhost:3000/user');
    ajax.send();

    ajax.addEventListener('readystatechange', function (e) {
        if(ajax.readyState ===4 && ajax.status === 200){
            console.log(ajax.responseText);
        }
    }, false)


})();