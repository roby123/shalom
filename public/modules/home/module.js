/**
 * Created by roby on 3/17/16
 */
import angular from 'angular';
import 'angular-ui-router';

/* import controllers for home modules*/
import registration from './controllers/registration';
import accomodations from './controllers/accomodations';
import speakers from './controllers/speakers';
import fees from './controllers/fees';
import payments from './controllers/payments';
import guidelines from './controllers/guidelines';
import flyers from './controllers/flyers';

let path='./modules/home/';
console.log("module here also");
let homeModule=angular.module('homeModule',['ui.router'])
    .controller('registration',registration)
    .controller('accomodations',accomodations)
    .controller('speakers',speakers)
    .controller('fees',fees)
    .controller('payments',payments)
    .controller('guidelines',guidelines)
    .controller('flyers',flyers)

    .config(['$stateProvider',function($stateProvider){
        $stateProvider.state('registration',{
                url:'/registration',
                controller: 'registration',
                templateUrl: './modules/home/views/registration.html'
            })
            .state('accomodations',{
                url: '/accomodations',
                controller: 'accomodations',
                templateUrl: './modules/home/views/accomodations.html'
            })
            .state('speakers',{
                url: '/speakers',
                controller: 'speakers',
                templateUrl: './modules/home/views/speakers.html'
            })
            .state('fees',{
                url: '/fees',
                controller: 'fees',
                templateUrl: './modules/home/views/fees.html'
            })
            .state('payments',{
                url: '/payments',
                controller: 'payments',
                templateUrl: './modules/home/views/payments.html'
            })
            .state('guidelines',{
                url: '/guidelines',
                controller: 'guidelines',
                templateUrl: './modules/home/views/guidelines.html'
            })
            .state('flyers',{
                url: '/flyers',
                controller: 'flyers',
                templateUrl: './modules/home/views/flyers.html'
            })


    }

    ]);

export default homeModule;