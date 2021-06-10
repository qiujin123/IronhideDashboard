import { gsap } from "gsap";
export let speedTL = gsap.timeline();

speedTL.to("#skinMph1",{ duration: 0.5, fill:"#D34F47", onStart: startTimer})
	   .to("#skinMph2",{ duration: 0.5, fill:"#CF4037"})
	   .to("#skinMph3",{ duration: 0.5, fill:"#C3382F"})
	   .to("#skinMph4",{ duration: 0.5, fill:"#B4332B"})
	   .to("#skinMph5",{ duration: 0.5, fill:"#A42F27"})
	   .to("#skinMph6",{ duration: 0.5, fill:"#942A24"})

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