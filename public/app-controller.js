/**
 * Created by roby on 2/16/16.
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
            case 1: this.$location.path('/registration');break;
            case 2: this.$location.path('/accomodations');break;
            case 3: this.$location.path('/speakers');break;
            case 4: this.$location.path('/fees');break;
            case 5: this.$location.path('/payments');break;
            case 6: this.$location.path('/guidelines');break;
            case 7: this.$location.path('/flyers');break;

        }
    }
    isSet(tabId){
        return this.tab === tabId;
    }

}

controller.$inject = ['$log','$scope','$rootScope','$state', '$location'];
export default controller;