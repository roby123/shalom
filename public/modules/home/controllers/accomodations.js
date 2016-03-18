/**
 * Created by urvashi on 2/19/16.
 */
import angular from 'angular';

class controller{

    constructor(){
        this.init();
    }

    init(){
        this.text = 'Tab 2';
        console.log("controller 2 initialized");
    }
}

export default controller;