(function () {
    'use strict';

    var fragment = document.createDocumentFragment();
    var childP = document.createElement('p');
    var textChilp = document.createTextNode('Texto deontro da tag P');
    childP.appendChild(textChilp);
    fragment.appendChild(childP);

    document.body.appendChild(fragment);

})();