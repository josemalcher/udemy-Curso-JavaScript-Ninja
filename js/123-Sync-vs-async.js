/* -- 123 - Sync vs async -- */

(function () {
/*    console.log(1);
    for( var i = 0 ; i < 10000 ; i++){
        console.log(i);
    }
    console.log('FIM');*/
    console.log('INICIO');
    document.addEventListener('click', function (event) {
        console.log('clicou no documento' +
            '')
    },false);
    console.log('FIM');
   /* INICIO
    FIM
    clicou no documento
    */
})();

