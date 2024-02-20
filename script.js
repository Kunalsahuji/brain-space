function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco();

function page1Animation() {
  gsap.to(".page1 video", {
    filter: "blur(20px)",
    transform: "scaleX(0.85)",
    scrollTrigger: {
      trigger: ".page1",
      scroller: ".main",

      start: "top 0",
      end: "top -50%",
      scrub: true,
    },
  });

  document.addEventListener("mousemove", function (dets) {
    gsap.to(".cursor", {
      top: dets.y,
      left: dets.x,
      duration: 0.5,
    });
  });

  document.querySelector("nav i").addEventListener("mouseenter", function () {
    gsap.to(".cursor", {
      scale: 2,
      backgroundColor: "black",
      mixBlendMode: "darken",
    });

    gsap.to("nav i", {
      color: "white",
    });
    gsap.to("nav", {
      mixBlendMode: "normal",
    });
  });

  document.querySelector("nav i").addEventListener("mouseleave", function () {
    gsap.to(".cursor", {
      scale: 1,
      backgroundColor: "white",
      mixBlendMode: "difference",
    });

    gsap.to("nav i", {
      color: "white",
    });
    gsap.to("nav", {
      mixBlendMode: "difference",
    });
  });
}
page1Animation();

function navAnimation() {
  gsap.to(".nav-right", {
    y: -100,
    duration: 0.5,
    scrollTrigger: {
      trigger: "nav",
      scroller: ".main",
      start: "top 0",
      end: "top -10%",
      scrub: true,
    },
  });

  gsap.to("nav i", {
    display: "block",
    scrollTrigger: {
      trigger: "nav",
      scroller: ".main",
      start: "top -15%",
      end: "top -20%",
      scrub: true,
    },
  });
}

navAnimation();

function page2Animation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page2-content",
      scroller: ".main",
      start: "top 90%",
      end: "top -80%",
      scrub: 2,
    },
  });
  tl2.from(".page2-left, .page2-right h1", {
    y: 50,
    scale: 1.15,
    opacity: 0,
    duration: 0.002,
  });

  // tl2.from(".page2-right h1", {
  //   y: 50,
  //   scale: 1.15,
  //   opacity: 0,
  //   duration: 0.003,
  // });
  tl2.from(".page2-right p, .page2-right button ", {
    y: 50,
    scale: 1.15,
    opacity: 0,
    duration: 0.005,
  });
  // tl2.from(".page2-right button", {
  //   y: 50,
  //   scale: 1.15,
  //   opacity: 0,
  //   duration: 0.005,
  // });
  tl2.from(".page2-bottom-content-left h2, .page2-bottom-content-right video", {
    y: 50,
    scale: 1.15,
    opacity: 0,
    duration: 0.002,
  });
  // tl2.from(".page2-bottom-content-right video", {
  //   y: 50,
  //   scale: 1.15,
  //   opacity: 0,
  //   duration: 0.002,
  // });
  tl2.from(".page2-bottom-content-left p, .page2-bottom-content-left button", {
    y: 60,
    scale: 1.15,
    opacity: 0,
    duration: 0.006,
  });
  // tl2.from(".page2-bottom-content-left button", {
  //   y: 50,
  //   scale: 1.15,
  //   opacity: 0,
  //   duration: 0.001,
  // });

}
page2Animation();
/* -----------------------------*/
// gsap.from(".page3 .helmet", {
//   // y: 50,
//   scale: 1.15,
//   rotation: 360,
//   opacity: 0,
//   duration: 0.6,
// });


function page3Animation() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page3-content-1",
      scroller: ".main",
      start: "top 75%",
      end: "top -10%",
      scrub: 2,
    },
  });
  tl3.from(".page3-content-1 h2", {
    y: 50,
    scale: 1.15,
    opacity: 0,
    duration: 0.005,
  });
  tl3.from(".page3-content-1 p", {
    y: 50,
    scale: 1.15,
    opacity: 0,
    duration: 0.005,
  });
  tl3.from(".page3-content-1 button", {
    y: 50,
    scale: 1.15,
    opacity: 0,
    duration: 0.005,
  });
  tl3.from(".page3-content-2 h5", {
    y: 50,
    scale: 1.15,
    opacity: 0,
    duration: 0.004,
  });
  tl3.from(".page3-content-2 video", {
    y: 50,
    scale: 1.15,
    opacity: 0,
    duration: 0.003,
  });
  // part-2 page3---------
  // ----step-1 ---------

  var tlp3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page3-part-2-left",
      scroller: ".main",
      start: "top 80%",
      end: "top -20%",
      scrub: 2,
    },
  });
  tlp3.from(".page3-part-2-left video", {
    y: 50,
    scale: 1.15,
    opacity: 0,
    duration: 0.004,
  });
  tlp3.from(".page3-part-2-right h5", {
    y: 50,
    scale: 1.15,
    opacity: 0,
    duration: 0.003,
  });
  tlp3.from(".page3-part-2-right button", {
    y: 60,
    scale: 1.15,
    opacity: 0,
    duration: 0.005,
  });

  // ---------step-2-----------

  tlp3.from(".page3-part-2-left-1 h5", {
    y: 50,
    scale: 1.15,
    opacity: 0,
    duration: 0.002,
  });

  tlp3.from(".page3-part-2-right-1 video", {
    y: 40,
    scale: 1.15,
    opacity: 0,
    duration: 0.004,
  });

  // --------step-3 --------------

  var tlps3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page3-part-2-step-3",
      scroller: ".main",
      start: "top 80%",
      end: "top -20%",
      scrub: 2,
    },
  });
  tlps3.from(".page3-part-2-left-2 video", {
    y: 50,
    scale: 1.15,
    opacity: 0,
    duration: 0.003,
  });
  tlps3.from(".page3-part-2-right-2 h5", {
    y: 50,
    scale: 1.15,
    opacity: 0,
    duration: 0.003,
  });
  tlps3.from(".page3-part-2-right-2 button", {
    y: 60,
    scale: 1.15,
    opacity: 0,
    duration: 0.004,
  });
}

page3Animation();

function page4Animation() {
  var tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page4-content",
      scroller: ".main",
      start: "top 78%",
      end: "top 15%",
      scrub: 0.1,
    },
  });
  tl4.from(".page4-info h2, .page4-elems img", {
    y: 50,
    scale: 1.1,
    opacity: 0,
    duration: 0.0001,
  });
  tl4.from(".page4-info p,button, .page4-elems h2", {
    y: 50,
    scale: 1.1,
    opacity: 0,
    duration: 0.0001,
  });
  // tl4.from(".page4-info button", {
  //   y: 50,
  //   scale: 1.1,
  //   opacity: 0,
  //   duration: 0.0001,
  // });
  // tl4.from(".page4-elems img", {
  //   y: 50,
  //   scale: 1.1,
  //   opacity: 0,
  //   duration: 0.00001,
  // });
  // tl4.from(".page4-elems h2", {
  //   y: 50,
  //   scale: 1.1,
  //   opacity: 0,
  //   duration: 0.00001,
  // });
  var tlp4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page4",
      scroller: ".main",
      start: "top -10%",
      end: "top -40%",
      scrub: 2,
      pin: true,
    },
  });

  tlp4.to(
    ".page4-content",
    {
      transform: "translateX(-70%)",
    },
    "okay"
  );
  tlp4.to(
    ".page4 .page4-slider-in",
    {
      x: -100,
    },
    "okay"
  );
}
page4Animation();

function page5Animation() {
  document.querySelector(".page5").addEventListener("mousemove", function (dets) {
    document.querySelector(".page5").style.background = `conic-gradient(at ${dets.x}px ${dets.y}px,rgb(255, 228, 233),aliceblue,rgb(205, 243, 255),rgb(195, 255, 195),lightyellow,rgb(251, 226, 230))`
  })
  var tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page5-info",
      scroller: ".main",
      start: "top 80%",
      end: "top 20%",
      scrub: 0,
    },
  });
  tl5.from(".page5-in .first-text", {
    y: 50,
    scale: 1.15,
    opacity: 0,
    duration: 0.001,
  });
  tl5.from(".page5-info-left p", {
    y: 50,
    scale: 1.15,
    opacity: 0,
    duration: 0.001,
  });
  tl5.from(".page5-info-right p", {
    y: 50,
    scale: 1.15,
    opacity: 0,
    duration: 0.001,
  });
  tl5.from(".page5-info-right .second-text", {
    y: 50,
    scale: 1.15,
    opacity: 0,
    duration: 0.001,
  });
}


page5Animation();
// ------------------------------------
var tltxt = gsap.timeline();
var text = "We are brain.space            The brain data company"
var splittedText = text.split("")
var clutter = ""
splittedText.forEach(function (elem) {
  clutter += `<span>${elem}</span>`
})

var h1Text = document.querySelector(".page1 h1")
h1Text.innerHTML = clutter

tltxt.to(".page1 h1 span", {
  display: "initial",
  stagger: 0.1,
  opacity: 0.8,
  // loop: true,
  // speed: 50
})
// ---//
// var text1 = "Creating a future of hyper-personalized solutions and services based on your unique brain"
// var splittedText1 = text1.split("")
// var clutter1 = ""

// splittedText1.forEach(function (elem) {
//   clutter1 += `<span>${elem}</span>`
// })

// var h1text1 = document.querySelector(".page1 h1")
// h1text1.innerHTML = clutter1

// tltxt.to(".page1 h1 span", {
//   display: "initial",
//   stagger: 0.1,
// })
