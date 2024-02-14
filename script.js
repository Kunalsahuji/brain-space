gsap.to("video", {
  filter: "blur(20px)",
  transform: "scaleX(0.85)",
  scrollTrigger: {
    trigger: ".page1",
    scroller: "body",
    markers: true,
    start: "top 0",
    end: "top -50%",
    scrub: true,
  },
});

document.addEventListener("mousemove", function (dets) {
  gsap.to(".cursor", {
    top: dets.y,
    left: dets.x,
    duration: 1,
  });
});

gsap.to(".nav-right", {
  y: -100,
  duration: 0.5,
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    start: "top 0",
    end: "top -10%",
    scrub: true,
  },
});

gsap.to("nav i", {
  display: "block",
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    start: "top -15%",
    end: "top -20%",
    scrub: true,
  },
});
gsap.to(".page2 img",{
  transform:"translateY(-50%) translateX(70%)",
  duration:10,
  repeat:-1,
  delay:3,
  ease:"none"
})