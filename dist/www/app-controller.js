/**
 * Created by urvashi on 2/16/16.
 */
import angular from 'angular';
import _ from 'lodash';

class controller {
    constructor($log, $scope, $rootScope, $state, $location){
        this.$log = $log;
        this.$scope = $scope;
        this.$rootScope = $rootScope;
        this.$state = $state;
        this.$location = $location;
        this.init();
    }

    init(){
        let tab = 1;
        this.isSet(this.tab);
        this.setTab(this.tab);
    }

    setTab(tabId){

        this.tab = tabId;
        console.log("here3");
        switch(tabId) {
            case 1: this.$location.path('/home');break;
            case 2: this.$location.path('/about');break;
            case 3: this.$location.path('/contact');break;
        }
    }
    isSet(tabId){
        return this.tab === tabId;
    }

}

controller.$inject = ['$log','$scope','$rootScope','$state', '$location'];
export default controller;