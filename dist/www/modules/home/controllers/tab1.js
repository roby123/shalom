/**
 * Created by urvashi on 2/19/16.
 */
import angular from 'angular';

class controller{
   constructor(){
       this.init();
   }

    init(){
        this.text = "Tab 1";
        console.log("tab1 controller initialized");
    }
}


export default controller;