import { gsap } from "gsap";


export let classicThreeTL = gsap.timeline();

gsap.set("#activateButton",{transformOrigin:"center"});
gsap.set("#cameraButton",{transformOrigin:"center"});
gsap.set("#settingButton",{transformOrigin:"center"});
gsap.set("#homeButton",{transformOrigin:"center"});
gsap.set("#phoneButton",{transformOrigin:"center"});
gsap.set("#musicButton",{transformOrigin:"center"});
gsap.set("#navigationButton",{transformOrigin:"center"});
gsap.set("#middleWScreenBase",{transformOrigin:"center"});
gsap.set("#leftWScreenBase",{transformOrigin:" right center"});
gsap.set("#rightWScreenBase",{transformOrigin:" left center"});
gsap.set("#rpmMeterBase",{transformOrigin:" bottom center"});
gsap.set("#mphMeterBase",{transformOrigin:" bottom center"});
gsap.set("#mphBase",{transformOrigin:" bottom center"});
gsap.set("#rpmBase",{transformOrigin:" bottom center"});
gsap.set("#mphMeterView",{transformOrigin:" bottom center"});
gsap.set("#rpmMeterView",{transformOrigin:" bottom center"});
gsap.set("#mphView",{transformOrigin:" bottom center"});
gsap.set("#rpmView",{transformOrigin:" bottom center"});

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
              .from("#middleWScreenBase", {duration:0.6, y:32, scale:0})
              .from("#rightWScreenBase", {duration:0.6, scaleX:0},"weaponsBase")
              .from("#leftWScreenBase", {duration:0.6, scaleX:0},"weaponsBase")
              .from("#rpmMeterBase", {duration:1, scaleY:0},"indicateBase")
              .from("#mphMeterBase", {duration:1, scaleY:0},"indicateBase")
              .from("#mphBase", {duration:1, scaleY:0},"indicateBase")
              .from("#rpmBase", {duration:1, scaleY:0},"indicateBase")
              .from("#rpmMeterView", {duration:0.6, alpha:0},"indicateView")
              .from("#mphMeterView", {duration:0.6, alpha:0},"indicateView")
              .from("#mphView", {duration:0.6, alpha:0},"indicateView")
              .from("#rpmView", {duration:0.6, alpha:0},"indicateView")
              .from("#middleWScreenView", {duration:0.6, alpha:0},"indicateView")
              .from("#rightWScreenView", {duration:0.6, alpha:0},"indicateView")
              .from("#leftWScreenView", {duration:0.6, alpha:0},"indicateView")
              .from("#rpm1", {duration:0.2, alpha:0},"in1")
              .from("#rpm2", {duration:0.2, alpha:0},"in2")
              .from("#rpm3", {duration:0.2, alpha:0},"in3")
              .from("#rpm4", {duration:0.2, alpha:0},"in4")
              .from("#rpm5", {duration:0.2, alpha:0},"in5")
              .from("#rpm6", {duration:0.2, alpha:0},"in6")
              .from("#mph1", {duration:0.2, alpha:0},"in1")
              .from("#mph2", {duration:0.2, alpha:0},"in2")
              .from("#mph3", {duration:0.2, alpha:0},"in3")
              .from("#mph4", {duration:0.2, alpha:0},"in4")
              .from("#mph5", {duration:0.2, alpha:0},"in5")
              .from("#mph6", {duration:0.2, alpha:0},"in6")
              .from("#mph7", {duration:0.2, alpha:0})
              .from("#mph8", {duration:0.2, alpha:0})
              .from("#mphLine", {duration:1, alpha:0},"info")
              .from("#mph0", {duration:1, alpha:0},"info")
              .from("#rpm0", {duration:1, alpha:0},"info")
              .from("#rpmInfo", {duration:1, alpha:0},"info")
              .from("#mphInfo", {duration:1, alpha:0},"info")
              .from("#leftButton", {duration:1, alpha:0},"info")
              .from("#rightButton", {duration:1, alpha:0},"info")
              .from("#blade", {duration:1, alpha:0},"info")
              .to("#e1", {duration:1, fill:"#DCA82D"},"info")
              .to("#e2", {duration:1, fill:"#DCA82D"},"info")
              .to("#e3", {duration:1, fill:"#DCA82D"},"info")
              .to("#f10", {duration:1, fill:"#CF4037"},"info")
              .to("#f9", {duration:1, fill:"#CF4037"},"info")
              .to("#f8", {duration:1, fill:"#CF4037"},"info")
              .to("#f7", {duration:1, fill:"#CF4037"},"info")
              .to("#f6", {duration:1, fill:"#CF4037"},"info")

              
              
             



