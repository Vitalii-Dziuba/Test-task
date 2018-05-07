(function() {
'use strict';

angular
    .module('myApp')
    .component('items', {
        templateUrl: '/components/items/items.html',
        controller: ItemsController
    });

ItemsController.$inject = ['localStorageService', '$rootScope', '$timeout'];
function ItemsController(localStorageService, $rootScope, $timeout) {
    var ctrl = this;
    var newComment = {color: 'grey'};
    var items = localStorageService.get('items');

    ctrl.newItem = {};
    ctrl.newComment = angular.copy(newComment);
    ctrl.items = items ? items : [];
    selectItem(0);

    ctrl.addItem = addItem;
    ctrl.removeItem = removeItem;
    ctrl.selectItem = selectItem;
    ctrl.addComment = addComment;

    function addItem() {
        if (ctrl.addForm.$valid) {
            ctrl.items.push(ctrl.newItem);
            ctrl.newItem = {};
            localStorageService.set('items', ctrl.items);
            selectItem(ctrl.items.length - 1);
            ctrl.addForm.$setPristine();
        }
    }

    function removeItem(index) {
        ctrl.items.splice(index, 1);
        localStorageService.set('items', ctrl.items);
        if (ctrl.selectedItem === index) {
            selectItem(ctrl.selectedItem - 1);
        } else if (ctrl.selectedItem === ctrl.items.length) {
            selectItem(ctrl.items.length - 1);
        }
    }

    function selectItem(index) {
        ctrl.comments = ctrl.items && ctrl.items[index] && ctrl.items[index].comments ? ctrl.items[index].comments : [];
        ctrl.selectedItem = index;
    }

    function addComment(event) {
        if (event.code == "Enter" && event.which === 10) {
            ctrl.commentForm.$setSubmitted();
            if (ctrl.commentForm.$valid) {
                ctrl.comments.push(ctrl.newComment);
                ctrl.newComment = angular.copy(newComment);
                ctrl.items[ctrl.selectedItem].comments = ctrl.comments;
                localStorageService.set('items', ctrl.items);
                ctrl.commentForm.$setPristine();
            }
        }
    }
}

})();