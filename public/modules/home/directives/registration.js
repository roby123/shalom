
import angular from 'angular';

export function controller($scope,shalomservice,$http){
   // constructor(shalomservice,$http){
   //      this.shalomservice = shalomservice;
   //      this.$http=$http;
   //     this.init();

   // }

    // init(){
    //     this.text = "Tab 1";
    //     this.testing;
    //     // console.log(shalomservice.testVar,'testing service');
    //     console.log("Registration controller initialized");
    //     this.participantCount; 
    //     this.text = "Title";
    //     console.log("Selecting Titles from the list");
    //     // this.participantTitle=['Mr.','Mrs','Miss','Rev.Fr','Rev.Sr','Master','Baby'];
    //    	this.person = [];
    //    	this.overallIndex=0;
    //     this.loadParticipantCount();
    // }

    this.person = [];
         this.overallIndex=0;
        this.loadParticipantCount = () => {
            this.shalomservice.getParticipantCount().then((response) => {
                console.log(response, 'what is response');
                this.participantCount = response.data;
            });
        };

    	addRegistrationAdults = (participantCount) => {
            // this.testing = this.shalomservice.testVar;
            // console.log(this.testing,'what is testing variable');
    		this.participantAdultTitle=['Mr.','Mrs.','Miss.','Rev.Fr','Rev.Sr'];
    		console.log('TESTING - Adding participants');
    		console.log('Number of Participants added (Adults)',participantCount.value);
    		for(var i=1;i<=participantCount.value;i++){
				this.overallIndex++;
    			this.person.push({id:this.overallIndex, title:'participantAdultTitle',firstName:'',lastName:'',fee:'$255',titleSelected:'reg.adultTitleSelected'});
    		}
    		console.log('Total participant count :',this.overallIndex);
    	};

        addRegistrationYouth = (participantCount) => {
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

        addRegistrationTeens = (participantCount) =>
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
        
        addRegistrationKids = (participantCount) => {
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

controller.$inject = ['$scope','shalomservice','$http'];
