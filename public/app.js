/**
 * Created by roby on 3/17/16
 */
//Framework dependencies
import angular from 'angular';
import 'angular-ui-router';
import 'angular-animate';


//application modules
import homeModule from './modules/home/module';

//main application controller;
import AppCtrl from './app-controller';


let AppModule;
AppModule = angular.module('app', ['ui.router', 'ngAnimate', 'homeModule'])
    .controller('AppCtrl', AppCtrl)
    .config(['$locationProvider', '$httpProvider', '$urlRouterProvider', '$stateProvider',
        function ($locationProvider, $httpProvider, $urlRouterProvider, $stateProvider) {
            console.log("here");
            $locationProvider.html5Mode({
                enabled: true
            }).hashPrefix('!');
            console.log('here 2');
            $httpProvider.useApplyAsync(true);
             $urlRouterProvider.otherwise("/registration");
            //$urlRouterProvider.otherwise(function ($injector) {
            //    var $state = $injector.get('$state');
            //    console.log("state here");
            //    console.log($state);
            //    $state.go('home');
            //});

            $stateProvider.state('app', {
                abstract: true,
                url: '/app',
                template: '<div ui-view></div>'
            });
        }
    ]);

angular.element(document).ready(function(){
    return angular.bootstrap(document.body,[AppModule.name],{
        strictDi: true
    })
});

export default AppModule;
