import { gsap } from "gsap";

export let skinOneTL = gsap.timeline();


skinOneTL.to("#leftGuard", {duration:0.5, morphSVG:"#skinleftGuard", y:97, x:-307},"skinChange")
         .to("#rightGuard", {duration:0.5, morphSVG:"#skinRightGuard", y:-596, x:487},"skinChange")
         .to("#rightHandleUpBase", {duration:0.5, morphSVG:"#skinRightBase", y:445, x:740},"skinChange")
         .to("#leftHandleUpBase", {duration:0.5, morphSVG:"#skinLeftBase", y:445, x:165},"skinChange")
         .to("#actBase", {duration:0.5, morphSVG:"#skinActivateBase", x:-70, y:123},"skinChange")
         .to("#actView", {duration:0.5, morphSVG:"#skinActivateView", x:-65, y:116},"skinChange")
         .to("#ACTIVATE", {duration:0.5, x:5, y:-5, fill:"#000"},"skinChange")
         .from("#skinRightGuard", {duration:0.1, alpha: 0},"switch1")
         .from("#skinleftGuard", {duration:0.1, alpha: 0},"switch1")
         .from("#skinRightBase", {duration:0.1, alpha:0},"switch1")
         .from("#skinLeftBase", {duration:0.1, alpha:0},"switch1")
         .to("#rightHandleUpBase",{ duration:1, alpha: 0},"switch2") 
         .to("#leftHandleUpBase",{ duration:1, alpha: 0},"switch2") 
         .to("#leftGuard",{ duration:1, alpha: 0},"switch2") 
         .to("#rightGuard",{ duration:1, alpha: 0},"switch2") 
         .from("#skinRightView", {duration:0.5, alpha:0},"skinView")
         .from("#skinLeftView", {duration:0.5, alpha:0},"skinView")
         .from("#skinTriRight", {duration:0.5, alpha:0},"skinView")
         .from("#skinTriLeft", {duration:0.5, alpha:0},"skinView")
         .from("#skinNavBase", {duration:0.3, alpha:0},"skin1")
         .from("#skinCameraBase", {duration:0.3, alpha:0},"skin1")
         .from("#skinHomeBase", {duration:0.3, alpha:0},"skin2")
         .from("#skinPhoneBase", {duration:0.3, alpha:0},"skin2")
         .from("#skinSettingBase", {duration:0.3, alpha:0},"skin3")
         .from("#skinMusicBase", {duration:0.3, alpha:0},"skin3")
         .from("#skinWeaponBase", {duration:0.3, alpha:0})
         .from("#skinCameraView", {duration:1, alpha:0},"skinIcon")
         .from("#skinCameraIcon", {duration:1, alpha:0},"skinIcon")
         .from("#skinMusicView", {duration:1, alpha:0},"skinIcon")
         .from("#skinMusicIcon", {duration:1, alpha:0},"skinIcon")
         .from("#skinSettingView", {duration:1, alpha:0},"skinIcon")
         .from("#skinSettingIcon", {duration:1, alpha:0},"skinIcon")
         .from("#skinHomeView", {duration:1, alpha:0},"skinIcon")
         .from("#skinHomeIcon", {duration:1, alpha:0},"skinIcon")
         .from("#skinPhoneView", {duration:1, alpha:0},"skinIcon")
         .from("#skinPhoneIcon", {duration:1, alpha:0},"skinIcon")
         .from("#skinNavView", {duration:1, alpha:0},"skinIcon")
         .from("#skinNavigationIcon", {duration:1, alpha:0},"skinIcon")
         .from("#skinWeaponView", {duration:1, alpha:0},"skinIcon")
         .from("#skinSword", {duration:1, alpha:0},"skinIcon")
         .from("#skinLeft", {duration:1, alpha:0},"skinIcon")
         .from("#skinRight", {duration:1, alpha:0},"skinIcon")