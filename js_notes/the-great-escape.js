
(function(){

    "use strict";

    function whatKindOfDog(){
        return prompt("What kind of dog is it?");
    }

        function getContactInfo(){
            return prompt("How do I contact you when I find your dog?");
        }


        function getDogName(){
            return prompt( "What is your dog's name?");
        }


        function greatEscape(){
            //get all info
            var dogKind = whatKindOfDog();
            var contactInfo = getContactInfo();
            var dogName = getDogName();

            alert ("Time to search for doggo");
            alert ("I see a dog!");

            var kindofDogSeen = whatKindOfDog();

            var isLostDog = (kindofDogSeen === dogKind) & confirm("Does the dog respond to name " + dogName +"?");


            if (isLostDog){
                alert("Puts leash on " + dogName);
                alert("Time to call the owner!");
                alert("Calling: " + contactInfo);
                alert("Doggo is home!")
            }
        }

        greatEscape();

}
)()
