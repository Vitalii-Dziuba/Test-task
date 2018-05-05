(function() {
'use strict';

angular
    .module('myApp')
    .component('items', {
        templateUrl: '/components/items/items.html',
        controller: ItemsController
    });

ItemsController.$inject = [];
function ItemsController() {
    var ctrl = this;
    
}

})();