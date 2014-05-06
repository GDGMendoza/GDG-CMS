'use strict';

app.factory('Event', ['$rootScope', 'Restangular', '$q', function($rootScope, Restangular, $q){
    var eventService = Restangular.all('events');
    return {
        getEvent: function(eventParam){
            var defer = $q.defer();
            eventService.get(eventParam).then(function(response){
                defer.resolve(response);
            }, function onError(){
                defer.reject();
            });
            return defer.promise;
        },
        getEvents: function(){
            var defer = $q.defer();
            eventService.get('').then(function(response){
                defer.resolve(response);
            }, function onError(){
                defer.reject();
            });
            return defer.promise;
        },
        addEvent: function(post){
            var defer = $q.defer();
            eventService.post(post).then(function(response){
                defer.resolve(response);
            }, function onError(){
                defer.reject();
            });
            return defer.promise;
        },
        updateEvent: function(eventParam, event){
            var defer = $q.defer();
            eventService.all(eventParam).put(event).then(function(response){
                defer.resolve(response);
            }, function onError(){
                defer.reject();
            });
            return defer.promise;
        },
        deleteEvent: function(eventParam){
            var defer = $q.defer();
            eventService.all(eventParam).remove().then(function(response){
                defer.resolve(response);
            }, function onError(){
                defer.reject();
            });
            return defer.promise;
        }
    };
}]);

app.controller('EventCtrl', ['$scope', 'Event', function($scope, Event){

}]);