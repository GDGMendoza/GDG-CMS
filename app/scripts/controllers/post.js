'use strict';

app.factory('Post', ['$rootScope', 'Restangular', '$q', function($rootScope, Restangular, $q){
    var postService = Restangular.all('posts');
    return {
        getPost: function(postParam){
            var defer = $q.defer();
            postService.get(postParam).then(function(response){
                defer.resolve(response);
            }, function onError(){
                defer.reject();
            });
            return defer.promise;
        },
        getPosts: function(){
            var defer = $q.defer();
            postService.get('').then(function(response){
                defer.resolve(response);
            }, function onError(){
                defer.reject();
            });
            return defer.promise;
        },
        addPost: function(post){
            var defer = $q.defer();
            postService.post(post).then(function(response){
                defer.resolve(response);
            }, function onError(){
                defer.reject();
            });
            return defer.promise;
        },
        updatePost: function(postParam, post){
            var defer = $q.defer();
            postService.all(postParam).put(post).then(function(response){
                defer.resolve(response);
            }, function onError(){
                defer.reject();
            });
            return defer.promise;
        },
        deletePost: function(postParam){
            var defer = $q.defer();
            postService.all(postParam).remove().then(function(response){
                defer.resolve(response);
            }, function onError(){
                defer.reject();
            });
            return defer.promise;
        }
    };
}]);

app.controller('PostCtrl', ['$scope', 'Post', function($scope, Post){

    $scope.post = {author: 'Make me a hero'};

    $scope.addPost = function(){
        Post.addPost($scope.post).then(function(response){
            console.log(response);
        }, function onError(response){
            console.log(response);
        })
    }
}]);