(function() {
'use strict';

angular
    .module('myApp')
    .component('comments', {
        templateUrl: '/components/comments/comments.html',
        controller: CommentsController
    });

CommentsController.$inject = [];
function CommentsController() {
    var ctrl = this;
    
}

})();