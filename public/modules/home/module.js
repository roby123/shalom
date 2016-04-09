/**
 * Created by roby on 3/17/16
 */
import angular from 'angular';
import 'angular-ui-router';

/* import controllers for home modules*/
import registration from './directives/registration';
import accommodation from './controllers/accommodation';
import specialneeds from './controllers/specialneeds';
import guidelines from './controllers/guidelines';
import flyers from './controllers/flyers';
import payment from './controllers/payment';
import confirmation from './controllers/confirmation';
import shalomservice from './services/shalomservice';

let path='./modules/home/';
console.log("module here also");
let homeModule=angular.module('homeModule',['ui.router'])
    // .controller('registration',registration)
    .controller('accommodation',accommodation)
    .controller('specialneeds',specialneeds)
    .controller('guidelines',guidelines)
    .controller('flyers',flyers)
    .controller('payment',payment)
    .controller('confirmation',confirmation)
    .service('shalomservice',shalomservice)
    .directive('registration',registration)

    .config(['$stateProvider',function($stateProvider){
        $stateProvider.state('registration',{
                url:'/registration',
                controller: 'registration',
                controllerAs: 'reg',
                templateUrl: './modules/home/views/registration.html'
            })
            .state('accommodation',{
                url: '/accommodation',
                controller: 'accommodation',
                controllerAs: 'acc',
                templateUrl: './modules/home/views/accommodation.html'
            })
            .state('specialneeds',{
                url: '/specialneeds',
                controller: 'specialneeds',
                controllerAs: 'spec',
                templateUrl: './modules/home/views/specialneeds.html'
            })
            .state('guidelines',{
                url: '/guidelines',
                controller: 'guidelines',
                controllerAs: 'guide',
                templateUrl: './modules/home/views/guidelines.html'
            })
            .state('flyers',{
                url: '/flyers',
                controller: 'flyers',
                controllerAs: 'fly',
                templateUrl: './modules/home/views/flyers.html'
            })
            .state('payment',{
                url: '/payment',
                controller: 'payment',
                controllerAs: 'pay',
                templateUrl: './modules/home/views/payment.html'
            })
            .state('confirmation',{
                url: '/confirmation',
                controller: 'confirmation',
                controllerAs: 'conf',
                templateUrl: './modules/home/views/confirmation.html'
            })


    }

    ]);

export default homeModule;