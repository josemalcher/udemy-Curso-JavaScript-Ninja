/* -- 88 - this -- */
(function () {
    var myObjetect = {
        myProperty: 1,
        init: function init() {
            return this;
        }
    };
    console.log(myObjetect.init()); // this faz referencia ao proprio objeto
    console.log(myObjetect.myProperty); // 1

    function funcaquiThis1() {
        return this;
    }

    console.log(funcaquiThis1()); // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}

    function MyContructor(){
        this.prop1 = 'propriedade 1';
        this.prop2 = 'propriedade 2';

    }

    //console.log("My contructor", new MyContructor());
    //My contructor MyContructor {prop1: "propriedade 1", prop2: "propriedade 2"}
    var contructor = new MyContructor();
    console.log('Meu controturor', contructor.prop1);
    // Meu controturor propriedade 1

    //prop1 = 'Propriedade 1 global';
    var prop1 = 'Propriedade 1 global'; // sempre usar o var
    console.log(window.prop1); // Propriedade 1 global // undefined
    console.log(prop1); // Propriedade 1 global


})();