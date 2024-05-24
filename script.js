

gsap.to("#rollover",{
    x:1200,
    y:100,
    duration: 2,
    delay: 1,
    rotate:360,
    backgroundColor:"yellow",
    borderRadius:"50%",
    scale: 0.5,
    repeat: -1,
    yoyo: true,
})
var tl = gsap.timeline()
tl.from(".head-big",{
    scale: 0,
    delay: 0.5,
    duration: 2,
})

tl.from(".stag",{
    opacity: 0,
    delay: 1,
    duration: 2,
    y: -20,
    stagger: 1,
})

gsap.from(".scrolltrigger .trigimg",{
    borderRadius: "50%",
    delay: 2,
    scrollTrigger:{
        trigger:".scrolltrigger .trigimg",
        scroller:"body",
        marker:true,
        start:"top 40%",
        scrub:true,
    }
})

var main =  document.querySelector("body");
var curs = document.querySelector("#cursor");
body.addEventListener("mousemove",function(dets){
    gsap.to(curs,{
        x: dets.x,
        y: dets.y,
        scale: 1,
        background: "whitesmoke",
    })
})
