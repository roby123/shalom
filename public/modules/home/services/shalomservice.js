/**
 * Created by Roby on 4/7/2016.
 */
import angular from 'angular';

class service{
    constructor($http){
    	this.$http = $http;
        // this.init();
    }

    // init(){
    //     this.testVar = 'Service is WORKING';
    //     console.log('hello SERVICE');
    // }

    getParticipantCount(){
    	let url = './modules/home/stub/numberofparticipants.json';
    	return this.$http.get(url);
    }
}

service.$inject = ["$http"];

export default service;