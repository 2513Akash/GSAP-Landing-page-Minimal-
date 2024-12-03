function hero(){
let time = gsap.timeline();

time.from("nav h1,nav div a,nav div button",{
    y:-30,
    duration:0.5,
    delay:1,
    opacity:0,
    stagger:0.15
})
time.from("section h1",{
    x:-100,
    opacity:0,
    duration:0.6,
})
time.from("section p",{
    x:-50,
    opacity:0,
    duration:0.4,
})
time.from("section button",{
    x:-30,
    opacity:0,
    duration:0.6,
},"-=0.2")
time.from(".image video",{
    opacity:0,
    duration:3
},"-=1.5")
}
hero();


function icons(){
let logos =  document.querySelectorAll(".companies img")

logos.forEach((img,index)=>{
    if(index%2==0){
        gsap.from(img,{
            y:-60,
            duration:1,
            opacity:0,
            scrollTrigger:{
            trigger:img,
            scoller:"body",
            start:"top 42%",
            // end:"top 50%",
            // markers:true,
            }
        })
    }else{
        gsap.from(img,{
            y:60,
            duration:1,
            opacity:0,
            scrollTrigger:{
            trigger:img,
            scoller:"body",
            start:"top 58.5%",
            // end:"top 50%",
            // markers:true,
            }
        })
    }
})
}
icons();


function services(){
gsap.from("article",{
    y:30,
    duration:1,
    opacity:0,
    delay:0.5,
    scrollTrigger:{
        trigger:"article",
        scroller:"body",
        start:"top 75%",
        // markers:true
    }
})
}
services();


function cards(){
let time3 = gsap.timeline({
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        start:"top 60%",
        end:"top -20%",
        // markers:true,
        scrub:2
    }
})

time3.from("#card1",{
    x:-300,
    duration:0.7,
    opacity:0
},"anime1")
time3.from("#card2",{
    x:300,
    duration:0.7,
    opacity:0
},"anime1")
time3.from("#card3",{
    x:-300,
    duration:0.7,
    opacity:0
},"anime2")
time3.from("#card4",{
    x:300,
    duration:0.7,
    opacity:0
},"anime2")
}
cards();