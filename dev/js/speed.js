import { gsap } from "gsap";
export let speedTL = gsap.timeline();

speedTL.to("#skinMph1",{ duration: 2, fill:"#D92121", onStart: startTimer})

var counterSpeed = 10;
var topSpeed = 80;
var speedNumber = 0;
var myVar;


function startTimer(){

    myVar = setInterval(speedCounter, counterSpeed);
}

function speedCounter(){
    // console.log("counter");
    if (speedNumber < topSpeed) {
		speedNumber++;
		document.getElementById("speedTag").innerHTML = speedNumber;
	} else {
		clearInterval(myVar);
	}
	return speedNumber;

}