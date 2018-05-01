(function (doc) {
    'use strict';

    function afterDomcontentLoader() {
        alert('teste img');
        var fragment = document.createDocumentFragment();
        var childP = document.createElement('p');
        var textChilp = document.createTextNode('Texto deontro da tag P');
        childP.appendChild(textChilp);
        fragment.appendChild(childP);

        document.body.appendChild(fragment);
    }

    function afterWindoLoad() {
        alert('AFTERWINDOWLOAD');
    }

    // teste com script no head
    doc.addEventListener('DOMContentLoaded', afterDomcontentLoader, false); // carrega o script antes mas o html está carregado

    window.addEventListener('load', afterWindoLoad, false); // dispara ao final de tudo estiver carregado


})(document);