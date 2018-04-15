/* -- 125 - setTimeout vs setInterval -- */

(function (win, doc) {
        'use strict';
        var counter = 0;
        /*function timer() {
            console.log('timer', counter++);
            if (counter > 10) {
                return;
            }
            setTimeout(timer, 1000); // melhor perfomace
        }*/

        /*function timer() {
            console.log('timer', counter++);
        }
        setInterval(timer, 1000);*/

        //
        /*function timer() {
            console.log('timer', counter++);
            if (counter > 20) {
                return;
            }
            setTimeout(timer, 1000); // melhor perfomace
        }
        timer();*/
        var $button = doc.querySelector('[data-js="button"]');
        var temporizador;
        function timer() {
            console.log('timer', counter++);
            if (counter > 20) {
                return;
            }
            temporizador = setTimeout(timer, 1000);
        }
        timer();

        $button.addEventListener('click', function () {
            clearTimeout(temporizador); // clearInterval(id)
        }, false);
    }
)(window, document);


