import { gsap } from "gsap";


export let classicThreeTL = gsap.timeline();

gsap.set("#activateButton",{transformOrigin:"center"});
gsap.set("#cameraButton",{transformOrigin:"center"});
gsap.set("#settingButton",{transformOrigin:"center"});
gsap.set("#homeButton",{transformOrigin:"center"});
gsap.set("#phoneButton",{transformOrigin:"center"});
gsap.set("#musicButton",{transformOrigin:"center"});
gsap.set("#navigationButton",{transformOrigin:"center"});


classicThreeTL.from("#energonBar", {duration:0.7, alpha: 0},"fuel")
              .from("#fuelBar", {duration:0.7, alpha: 0},"fuel")
              .from("#FUEL", {duration:0.7, alpha: 0},"fuel")
              .from("#ENERGON", {duration:0.7, alpha: 0},"fuel")
              .to("#leftFrontDoor", {duration:1, x:-80},"doorOpen")
              .to("#rightFrontDoor", {duration:1, x:85},"doorOpen")
              .to("#leftGuardDoorUp", {duration:1, y:-50},"doorOpen")
              .to("#leftGuardDoorDown", {duration:1, y:60},"doorOpen")
              .to("#rightGuardDoorUp", {duration:1, y:-50},"doorOpen")
              .to("#rightGuardDoorDown", {duration:1, y:60},"doorOpen")
              .from("#activateButton", {duration:0.6, alpha:0, scale:0, y:520},"buttonOut")
              .from("#cameraButton", {duration:0.6, alpha:0, scale:0, x:720},"buttonOut")
              .from("#settingButton", {duration:0.6, alpha:0, scale:0, x:160},"buttonOut")
              .from("#homeButton", {duration:0.6, alpha:0, scale:0, x:720},"buttonOut2")
              .from("#phoneButton", {duration:0.6, alpha:0, scale:0, x:160},"buttonOut2")
              .from("#musicButton", {duration:0.6, alpha:0, scale:0, x:720},"buttonOut3")
              .from("#navigationButton", {duration:0.6, alpha:0, scale:0, x:160},"buttonOut3")
              .to("#leftFrontDoor", {duration:1, x:0},"doorClose")
              .to("#rightFrontDoor", {duration:1, x:0},"doorClose")
              .to("#leftGuardDoorUp", {duration:1, y:-22},"doorClose")
              .to("#leftGuardDoorDown", {duration:1, y:32},"doorClose")
              .to("#rightGuardDoorUp", {duration:1, y:-22},"doorClose")
              .to("#rightGuardDoorDown", {duration:1, y:32},"doorClose")




