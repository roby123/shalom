
import angular from 'angular';

class controller{
   constructor(){
       this.init();

   }

    init(){
        this.text = "Tab 1";
        console.log("Registration controller initialized");
        this.participantCount = [   {key:0, value:0},
        							{key:1, value:1},
	    							{key:2, value:2},
	    							{key:3, value:3},
	    							{key:4, value:4},
	    							{key:5, value:5},
	    							{key:6, value:6},
	    							{key:8, value:8},
	    							{key:9, value:9},
	    							{key:10, value:10},
	    							{key:11, value:11},
	    							{key:12, value:12}
        						];
        this.text = "Title";
        console.log("Selecting Titles from the list");
        // this.participantTitle=['Mr.','Mrs','Miss','Rev.Fr','Rev.Sr','Master','Baby'];
       	this.person = [];
       	this.overallIndex=0;
    }
    	addRegistrationAdults(participantCount){
    		this.participantAdultTitle=['Mr.','Mrs.','Miss.','Rev.Fr','Rev.Sr'];
    		console.log('TESTING - Adding participants');
    		console.log('Number of Participants added (Adults)',participantCount.value);
    		for(var i=1;i<=participantCount.value;i++){
				this.overallIndex++;
    			this.person.push({id:this.overallIndex, title:'participantAdultTitle',firstName:'',lastName:'',fee:'$255',titleSelected:'reg.adultTitleSelected'});
    		}
    		console.log('Total participant count :',this.overallIndex);
    	};

        addRegistrationYouth(participantCount){
    		this.participantYouthTitle=['Mr.','Miss.'];
    		console.log('Adding Youth');
    		console.log('Number of Participants added (Youth)',participantCount.value);
    		for(var i=1;i<=participantCount.value;i++){
				this.overallIndex++;
    			this.person.push({id:this.overallIndex, title:'participantYouthTitle',firstName:'',lastName:'',fee:'$200',titleSelected:'reg.youthTitleSelected'});
    		}
    		console.log('Total participant count :',this.overallIndex);
    	};
	// console.log(this.adultData);

        addRegistrationTeens(participantCount)
        {
            // this.participantTitle=['Mast.','Miss.'];
            this.participantTeenTitle=['Mr.','Miss.'];
            console.log('Adding Teens');
            console.log('Number of participants added(Teens)',participantCount.value);
            for(var i=1;i<=participantCount.value;i++)
            {
                this.overallIndex++;
                this.person.push({id:this.overallIndex, title:'participantTeenTitle',firstName:'',lastName:'',fee:'$150',titleSelected:'reg.teenTitleSelected'});
            }
            console.log('Total participant count :',this.overallIndex);
        };
        
        addRegistrationKids(participantCount){
            this.participantKidTitle=['Mast.','Baby'];
            console.log('Adding Kids');
            console.log('Number of participants added(Kids)',participantCount.value);
            for(var i=1;i<=participantCount.value;i++)
            {
                this.overallIndex++;
                this.person.push({id:this.overallIndex, title:'participantKidTitle',firstName:'',lastName:'',fee:'$100',titleSelected:'reg.kidTitleSelected'});
            }
            console.log('Total participant count :',this.overallIndex);
        };
}


export default controller;