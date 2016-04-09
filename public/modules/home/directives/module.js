import angular from 'angular';

import * as registration from './registration';

let module = angular.module('registration', []) 
.directive('registration',function() {
  return {
    scope: true,
    transclude: true,
    controller: registration.controller,
    controllerAs: 'reg',
    templateUrl: 'regtemplate.html'
  };
});
export default module;