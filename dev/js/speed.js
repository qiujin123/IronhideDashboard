import { gsap } from "gsap";
export let speedTL = gsap.timeline();

speedTL.to("#skinMph1",{ duration: 0.3, fill:"#D34F47", onStart: startTimer})
	   .to("#rpmZero",{ duration: 0.3, alpha:0})	
	   .to("#skinMph2",{ duration: 0.3, fill:"#CF4037"},"one")
	   .from("#rpmOne",{ duration: 0.3, alpha:0 },"one")
	   .to("#skinRpm1",{ duration: 0.3, fill:"#279DDC"},"one")
	   .to("#rpmOne",{ duration: 0.3, alpha:0})
	   .to("#skinMph3",{ duration: 0.3, fill:"#C3382F"},"two")
	   .from("#rpmTwo",{ duration: 0.3, alpha:0 },"two")
	   .to("#skinRpm2",{ duration: 0.3, fill:"#2192CE"},"two")
	   .to("#rpmTwo",{ duration: 0.3, alpha:0})
	   .to("#skinMph4",{ duration: 0.3, fill:"#B4332B"},"three")
	   .from("#rpmThree",{ duration: 0.3, alpha:0 },"three")
	   .to("#skinRpm3",{ duration: 0.3, fill:"#1F86BD"},"three")
	   .to("#skinMph5",{ duration: 0.3, fill:"#A42F27"})
	   .to("#skinMph6",{ duration: 0.3, fill:"#942A24"})
	   .to("#rpmZero",{ duration: 0.3, alpha:0})
	   
	   
	

var counterSpeed = 30;
var topSpeed = 90;
var speedNumber = 0;
var myVar;


function startTimer(){

    myVar = setInterval(speedCounter, counterSpeed);
}

function speedCounter(){
    if (speedNumber < topSpeed) {
		speedNumber++;
		document.getElementById("speedTag").innerHTML = speedNumber;
	} else {
		clearInterval(myVar);
	}
	return speedNumber;

}