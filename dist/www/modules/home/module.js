/**
 * Created by urvashi on 2/19/16.
 */
import angular from 'angular';
import 'angular-ui-router';

/* import controllers for home modules*/
import tab1 from './controllers/tab1';
import tab2 from './controllers/tab2';
import tab3 from './controllers/tab3';

let path='./modules/home/';
console.log("module here also");
let homeModule=angular.module('homeModule',['ui.router'])
    .controller('tab1',tab1)
    .controller('tab2',tab2)
    .controller('tab3',tab3)
    .config(['$stateProvider',function($stateProvider){
        $stateProvider.state('home',{
                url:'/home',
                controller: 'tab1',
                templateUrl: './modules/home/views/tab1.html'
            })
            .state('about',{
                url: '/about',
                controller: 'tab2',
                templateUrl: './modules/home/views/tab2.html'
            })
            .state('contact',{
                url: '/contact',
                controller: 'tab3',
                templateUrl: './modules/home/views/tab3.html'
            })
    }

    ]);

export default homeModule;