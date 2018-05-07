(function() {
'use strict';

angular
    .module('myApp')
    .controller('BodyController', BodyController);

BodyController.$inject = ['localStorageService'];
function BodyController(localStorageService) {
    var comment1 = 'A variation of the ordinary lorem ipsum text has been used in typesetting' +
        ' since the 1960s or earlier, when it was popularized by advertisements for ' +
        'Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s';
    var comment2 = 'A variation of the ordinary lorem ipsum text has been used in typesetting' +
        ' since the 1960s or earlier, when it was popularized by advertisements for Letraset' +
        ' transfer sheets. It was introduced to the Information Age in the mid-1980sA variation ' +
        'of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, ' +
        'when it was popularized by advertisements for Letraset transfer sheets. It was introduced to ' +
        'the Information Age in the mid-1980sA variation of the ordinary lorem ipsum text has been used' +
        ' in typesetting since the 1960s or earlier, when it was popularized by advertisements for' +
        ' Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s';
    
    var comments = [{text: comment1, color: 'red'}, {text: comment1, color: 'blue'}, {text: comment2, color: 'grey'}];
    var items = [{ name: 'First item with custom name', comments: comments},
    	{name: 'Second  item is active', comments: [{text: comment1, color: 'red'}]}];

    var currentItems = localStorageService.get('items');
    if (!currentItems) {
    	localStorageService.set('items', items)
    }
}

})();