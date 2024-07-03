function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  // --- RED PANEL ---
  gsap.from(".line-1", {
    scrollTrigger: {
      trigger: ".line-1",
      scroller: "#main",
      scrub: true,
      start: "top bottom",
      end: "top top",
      onUpdate: self => console.log(self.direction)
    },
    scaleX: 0,
    transformOrigin: "left center",
    ease: "none"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
loco()
function one() {
  gsap.from(".bottom>i", {
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    repeat: -1,
    yoyo: true
  })
  gsap.from("#aq", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#aq",
      scroller: "#main",
      start: "40% top",
      end: "39% bottom",
      scrub: 5,
    }
  })
  gsap.to(".slid", {
    x: -1000,
    duration: 5,
    stagger: 0.5,
    repeat: -1,
    yoyo: true,
    ease: "power.out",
    onComplete: {
      x: 2000
    }
  })
  gsap.to(".slid1", {
    x: -1500,
    duration: 7,
    stagger: 0.5,
    repeat: -1,
    delay: 0.5,
    yoyo: true,
    ease: "power.out",
    onComplete: {
      x: 2500
    }
  })
  gsap.to(".slid2", {
    x: -950,
    duration: 5,
    stagger: 0.5,
    repeat: -1,
    dalay: 1,
    yoyo: true,
    ease: "power.out",
    onComplete: {
      x: 1000
    }
  })
}
one()
function canvas() {
  const canvas = document.querySelector("#two>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
  ../canve/001.jpg
  ../canve/002.jpg
  ../canve/003.jpg
  ../canve/004.jpg
  ../canve/005.jpg
  ../canve/006.jpg
  ../canve/007.jpg
  ../canve/008.jpg
  ../canve/009.jpg
  ../canve/010.jpg
  ../canve/011.jpg
  ../canve/012.jpg
  ../canve/013.jpg
  ../canve/014.jpg
  ../canve/015.jpg
  ../canve/016.jpg
  ../canve/017.jpg
  ../canve/018.jpg
  ../canve/019.jpg
  ../canve/020.jpg
  ../canve/021.jpg
  ../canve/022.jpg
  ../canve/023.jpg
  ../canve/024.jpg
  ../canve/025.jpg
  ../canve/026.jpg
  ../canve/027.jpg
  ../canve/028.jpg
  ../canve/029.jpg
  ../canve/030.jpg
  ../canve/031.jpg
  ../canve/032.jpg
  ../canve/033.jpg
  ../canve/034.jpg
  ../canve/035.jpg
  ../canve/036.jpg
  ../canve/037.jpg
  ../canve/038.jpg
  ../canve/039.jpg
  ../canve/040.jpg
  ../canve/041.jpg
  ../canve/042.jpg
  ../canve/043.jpg
  ../canve/044.jpg
  ../canve/045.jpg
  ../canve/046.jpg
  ../canve/047.jpg
  ../canve/048.jpg
  ../canve/049.jpg
  ../canve/050.jpg
  ../canve/051.jpg
  ../canve/052.jpg
  ../canve/053.jpg
  ../canve/054.jpg
  ../canve/055.jpg
  ../canve/056.jpg
  ../canve/057.jpg
  ../canve/058.jpg
  ../canve/059.jpg
  ../canve/060.jpg
  ../canve/061.jpg
  ../canve/062.jpg
  ../canve/063.jpg
  ../canve/064.jpg
  ../canve/065.jpg
  ../canve/066.jpg
  ../canve/067.jpg
  ../canve/068.jpg
  ../canve/069.jpg
  ../canve/070.jpg
  ../canve/071.jpg
  ../canve/072.jpg
  ../canve/073.jpg
  ../canve/074.jpg
  ../canve/075.jpg
  ../canve/076.jpg
  ../canve/077.jpg
  ../canve/078.jpg
  ../canve/079.jpg
  ../canve/080.jpg
  ../canve/081.jpg
  ../canve/082.jpg
  ../canve/083.jpg
  ../canve/084.jpg
  ../canve/085.jpg
  ../canve/086.jpg
  ../canve/087.jpg
  ../canve/088.jpg
  ../canve/089.jpg
  ../canve/090.jpg
  ../canve/091.jpg
  ../canve/092.jpg
  ../canve/092.jpg
  ../canve/093.jpg
  ../canve/094.jpg
  ../canve/095.jpg
  ../canve/096.jpg
  ../canve/097.jpg
  ../canve/098.jpg
  ../canve/099.jpg
  ../canve/100.jpg
  ../canve/101.jpg
  ../canve/102.jpg
  ../canve/103.jpg
  ../canve/104.jpg
  ../canve/105.jpg
  ../canve/106.jpg
  ../canve/107.jpg
  ../canve/108.jpg
  ../canve/109.jpg
  ../canve/110.jpg
  ../canve/111.jpg
  ../canve/112.jpg
  ../canve/113.jpg
  ../canve/114.jpg
  ../canve/115.jpg
  ../canve/116.jpg
  ../canve/117.jpg
  ../canve/118.jpg
  ../canve/119.jpg
  ../canve/120.jpg
  ../canve/121.jpg
  ../canve/122.jpg
  ../canve/123.jpg
  ../canve/124.jpg
  ../canve/125.jpg
  ../canve/126.jpg
  ../canve/127.jpg
  ../canve/128.jpg
  ../canve/129.jpg
  ../canve/130.jpg
  ../canve/131.jpg
  ../canve/132.jpg
  ../canve/133.jpg
  ../canve/134.jpg
  ../canve/135.jpg
  ../canve/136.jpg
  ../canve/137.jpg
  ../canve/138.jpg
  ../canve/139.jpg
  ../canve/140.jpg
  ../canve/141.jpg
  ../canve/142.jpg
  ../canve/143.jpg
  ../canve/144.jpg
  ../canve/145.jpg
  ../canve/146.jpg
  ../canve/147.jpg
  ../canve/148.jpg
  ../canve/149.jpg
  ../canve/150.jpg
  ../canve/151.jpg
  ../canve/152.jpg
  ../canve/153.jpg
  ../canve/154.jpg
  ../canve/155.jpg
  ../canve/156.jpg
  ../canve/157.jpg
  ../canve/158.jpg
  ../canve/159.jpg
  ../canve/160.jpg
  ../canve/161.jpg
  ../canve/162.jpg
  ../canve/163.jpg
  ../canve/164.jpg
  ../canve/165.jpg
  ../canve/166.jpg
  ../canve/167.jpg
  ../canve/168.jpg
  ../canve/169.jpg
  ../canve/170.jpg
  ../canve/171.jpg
  ../canve/172.jpg
  ../canve/173.jpg
  ../canve/174.jpg
  ../canve/175.jpg
  ../canve/176.jpg
  ../canve/177.jpg
  ../canve/178.jpg
  ../canve/179.jpg
  ../canve/180.jpg
  ../canve/181.jpg
  ../canve/182.jpg
  ../canve/183.jpg
  ../canve/184.jpg
  ../canve/185.jpg
  ../canve/186.jpg
  ../canve/187.jpg
  ../canve/188.jpg
  ../canve/189.jpg
  ../canve/190.jpg
  ../canve/191.jpg
  ../canve/192.jpg
  ../canve/192.jpg
  ../canve/193.jpg
  ../canve/194.jpg
  ../canve/195.jpg
  ../canve/196.jpg
  ../canve/197.jpg
  ../canve/198.jpg
  ../canve/199.jpg
  ../canve/200.jpg
  ../canve/201.jpg
  ../canve/202.jpg
  ../canve/203.jpg
  ../canve/204.jpg
  ../canve/205.jpg
  ../canve/206.jpg
  ../canve/207.jpg
  ../canve/208.jpg
  ../canve/209.jpg
  ../canve/210.jpg
  ../canve/211.jpg
  ../canve/212.jpg
  ../canve/213.jpg
  ../canve/214.jpg
  ../canve/215.jpg
  ../canve/216.jpg
  ../canve/217.jpg
  ../canve/218.jpg
  ../canve/219.jpg
  ../canve/220.jpg
  ../canve/221.jpg
  ../canve/222.jpg
  ../canve/223.jpg
  ../canve/224.jpg
  ../canve/225.jpg
  ../canve/226.jpg
  ../canve/227.jpg
  ../canve/228.jpg
  ../canve/229.jpg
  ../canve/230.jpg
  ../canve/231.jpg
  ../canve/232.jpg
  ../canve/233.jpg
  ../canve/234.jpg
  ../canve/235.jpg
  ../canve/236.jpg
  ../canve/237.jpg
  ../canve/238.jpg
  ../canve/239.jpg
  ../canve/240.jpg
  ../canve/241.jpg
  ../canve/242.jpg
  ../canve/243.jpg
  ../canve/244.jpg
  ../canve/245.jpg
  ../canve/246.jpg
  ../canve/247.jpg
  ../canve/248.jpg
  ../canve/249.jpg
  ../canve/250.jpg
  ../canve/251.jpg
  ../canve/252.jpg
  ../canve/253.jpg
  ../canve/254.jpg
  ../canve/255.jpg
  ../canve/256.jpg
  ../canve/257.jpg
  ../canve/258.jpg
  ../canve/259.jpg
  ../canve/260.jpg
  ../canve/261.jpg
  ../canve/262.jpg
  ../canve/263.jpg
  ../canve/264.jpg
  ../canve/265.jpg
  ../canve/266.jpg
  ../canve/267.jpg
  ../canve/268.jpg
  ../canve/269.jpg
  ../canve/270.jpg
  ../canve/271.jpg
  ../canve/272.jpg
  ../canve/273.jpg
  ../canve/274.jpg
  ../canve/275.jpg
  ../canve/276.jpg
  ../canve/277.jpg
  ../canve/278.jpg
  ../canve/279.jpg
  ../canve/280.jpg
  ../canve/281.jpg
  ../canve/282.jpg
  ../canve/283.jpg
  ../canve/284.jpg
  ../canve/285.jpg
  ../canve/286.jpg
  ../canve/287.jpg
  ../canve/288.jpg
  ../canve/289.jpg
  ../canve/290.jpg
  ../canve/291.jpg
  ../canve/292.jpg
  ../canve/292.jpg
  ../canve/293.jpg
  ../canve/294.jpg
  ../canve/295.jpg
  ../canve/296.jpg
  ../canve/297.jpg
  ../canve/298.jpg
  ../canve/299.jpg
  ../canve/300.jpg
  ../canve/301.jpg
  ../canve/302.jpg
  ../canve/303.jpg
  ../canve/304.jpg
  ../canve/305.jpg
  ../canve/306.jpg
  ../canve/307.jpg
  ../canve/308.jpg
  ../canve/309.jpg
  ../canve/310.jpg
  ../canve/311.jpg
  ../canve/312.jpg
  ../canve/313.jpg
  ../canve/314.jpg
  ../canve/315.jpg
  ../canve/316.jpg
  ../canve/317.jpg
  ../canve/318.jpg
  ../canve/319.jpg
  ../canve/320.jpg
  ../canve/321.jpg
  ../canve/322.jpg
  ../canve/323.jpg
  ../canve/324.jpg
  ../canve/325.jpg
  ../canve/326.jpg
  ../canve/327.jpg
  ../canve/328.jpg
  ../canve/329.jpg
  ../canve/330.jpg
  ../canve/331.jpg
  ../canve/332.jpg
  ../canve/333.jpg
  ../canve/334.jpg
  ../canve/335.jpg
  ../canve/336.jpg
  ../canve/337.jpg
  ../canve/338.jpg
  ../canve/339.jpg
  ../canve/340.jpg
  ../canve/341.jpg
  ../canve/342.jpg
  ../canve/343.jpg
  ../canve/344.jpg
  ../canve/345.jpg
  ../canve/346.jpg
  ../canve/347.jpg
  ../canve/348.jpg
  ../canve/349.jpg
  ../canve/350.jpg
  ../canve/351.jpg
  ../canve/352.jpg
  ../canve/353.jpg
  ../canve/354.jpg
  ../canve/355.jpg
  ../canve/356.jpg
  ../canve/357.jpg
  ../canve/358.jpg
  ../canve/359.jpg
  ../canve/360.jpg
  ../canve/361.jpg
  ../canve/362.jpg
  ../canve/363.jpg
  ../canve/364.jpg
  ../canve/365.jpg
  ../canve/366.jpg
  ../canve/367.jpg
  ../canve/368.jpg
  ../canve/369.jpg
  ../canve/370.jpg
  ../canve/371.jpg
  ../canve/372.jpg
  ../canve/373.jpg
  ../canve/374.jpg
  ../canve/375.jpg
  ../canve/376.jpg
  ../canve/377.jpg
  ../canve/378.jpg
  ../canve/379.jpg
  ../canve/380.jpg
  ../canve/381.jpg
  ../canve/382.jpg
  ../canve/383.jpg
  ../canve/384.jpg
  ../canve/385.jpg
  ../canve/386.jpg
  ../canve/387.jpg
  ../canve/388.jpg
  ../canve/389.jpg
  ../canve/390.jpg
  ../canve/391.jpg
  ../canve/392.jpg
  ../canve/392.jpg
  ../canve/393.jpg
  ../canve/394.jpg
  ../canve/395.jpg
  ../canve/396.jpg
  ../canve/397.jpg
  ../canve/398.jpg
  ../canve/399.jpg
  ../canve/400.jpg
  ../canve/401.jpg
  ../canve/402.jpg
  ../canve/403.jpg
  ../canve/404.jpg
  ../canve/405.jpg
  ../canve/406.jpg
  ../canve/407.jpg
  ../canve/408.jpg
  ../canve/409.jpg
  ../canve/410.jpg
  ../canve/411.jpg
  ../canve/412.jpg
  ../canve/413.jpg
  ../canve/414.jpg
  ../canve/415.jpg
  ../canve/416.jpg
  ../canve/417.jpg
  ../canve/418.jpg
  ../canve/419.jpg
  ../canve/420.jpg
  ../canve/421.jpg
  ../canve/422.jpg
  ../canve/423.jpg
  ../canve/424.jpg
  ../canve/425.jpg
  ../canve/426.jpg
  ../canve/427.jpg
  ../canve/428.jpg
  ../canve/429.jpg
  ../canve/430.jpg
  ../canve/431.jpg
  ../canve/432.jpg
  ../canve/433.jpg
  ../canve/434.jpg
  ../canve/435.jpg
  ../canve/436.jpg
  ../canve/437.jpg
  ../canve/438.jpg
  ../canve/439.jpg
  ../canve/440.jpg
  ../canve/441.jpg
  ../canve/442.jpg
  ../canve/443.jpg
  ../canve/444.jpg
  ../canve/445.jpg
  ../canve/446.jpg
  ../canve/447.jpg
  ../canve/448.jpg
  ../canve/449.jpg
  ../canve/450.jpg
  ../canve/451.jpg
  ../canve/452.jpg
  ../canve/453.jpg
  ../canve/454.jpg
  ../canve/455.jpg
  ../canve/456.jpg
  ../canve/457.jpg
  ../canve/458.jpg
  ../canve/459.jpg
  ../canve/460.jpg
  ../canve/461.jpg
  ../canve/462.jpg
  ../canve/463.jpg
  ../canve/464.jpg
  ../canve/465.jpg
  ../canve/466.jpg
  ../canve/467.jpg
  ../canve/468.jpg
  ../canve/469.jpg
  ../canve/470.jpg
  ../canve/471.jpg
  ../canve/472.jpg
  ../canve/473.jpg
  ../canve/474.jpg
  ../canve/475.jpg
  ../canve/476.jpg
  ../canve/477.jpg
  ../canve/478.jpg
  ../canve/479.jpg
  ../canve/480.jpg
  ../canve/481.jpg
  ../canve/482.jpg
  ../canve/483.jpg
  ../canve/484.jpg
  ../canve/485.jpg
  ../canve/486.jpg
  ../canve/487.jpg
  ../canve/488.jpg
  ../canve/489.jpg
  ../canve/490.jpg
  ../canve/491.jpg
  ../canve/492.jpg
  ../canve/492.jpg
  ../canve/493.jpg
  ../canve/494.jpg
  ../canve/495.jpg
  ../canve/496.jpg
  ../canve/497.jpg
  ../canve/498.jpg
  ../canve/499.jpg
  ../canve/500.jpg
  ../canve/501.jpg
  ../canve/502.jpg
  ../canve/503.jpg
  ../canve/504.jpg
  ../canve/505.jpg
  ../canve/506.jpg
  ../canve/507.jpg
  ../canve/508.jpg
  ../canve/509.jpg
  ../canve/510.jpg
  ../canve/511.jpg
  ../canve/512.jpg
  ../canve/513.jpg
  ../canve/514.jpg
  ../canve/515.jpg
  ../canve/516.jpg
  ../canve/517.jpg
  ../canve/518.jpg
  ../canve/519.jpg
  ../canve/520.jpg
  ../canve/521.jpg
  ../canve/522.jpg
  ../canve/523.jpg
  ../canve/524.jpg
  ../canve/525.jpg
  ../canve/526.jpg
  ../canve/527.jpg
  ../canve/528.jpg
  ../canve/529.jpg
  ../canve/530.jpg
  ../canve/531.jpg
  ../canve/532.jpg
  ../canve/533.jpg
  ../canve/534.jpg
  ../canve/535.jpg
  ../canve/536.jpg
  ../canve/537.jpg
  ../canve/538.jpg
  ../canve/539.jpg
  ../canve/540.jpg
  ../canve/541.jpg
  ../canve/542.jpg
  ../canve/543.jpg
  ../canve/544.jpg
  ../canve/545.jpg
  ../canve/546.jpg
  ../canve/547.jpg
  ../canve/548.jpg
  ../canve/549.jpg
  ../canve/550.jpg
  ../canve/551.jpg
  ../canve/552.jpg
  ../canve/553.jpg
  ../canve/554.jpg
  ../canve/555.jpg
  ../canve/556.jpg
  ../canve/557.jpg
  ../canve/558.jpg
  ../canve/559.jpg
  ../canve/560.jpg
  ../canve/561.jpg
  ../canve/562.jpg
  ../canve/563.jpg
  ../canve/564.jpg
  ../canve/565.jpg
  ../canve/566.jpg
  ../canve/567.jpg
  ../canve/568.jpg
  ../canve/569.jpg
  ../canve/570.jpg
  ../canve/571.jpg
  ../canve/572.jpg
  ../canve/573.jpg
  ../canve/574.jpg
  ../canve/575.jpg
  ../canve/576.jpg
  ../canve/577.jpg
  ../canve/578.jpg
  ../canve/579.jpg
  ../canve/580.jpg
  ../canve/581.jpg
  ../canve/582.jpg
  ../canve/583.jpg
  ../canve/584.jpg
  ../canve/585.jpg
  ../canve/586.jpg
  ../canve/587.jpg
  ../canve/588.jpg
  ../canve/589.jpg
  ../canve/590.jpg
  ../canve/591.jpg
  ../canve/592.jpg
  ../canve/592.jpg
  ../canve/593.jpg
  ../canve/594.jpg
  ../canve/595.jpg
  ../canve/596.jpg
  ../canve/597.jpg
  ../canve/598.jpg
  ../canve/599.jpg
  ../canve/600.jpg
  ../canve/601.jpg
  ../canve/602.jpg
  ../canve/603.jpg
  ../canve/604.jpg
  ../canve/605.jpg
  ../canve/606.jpg
  ../canve/607.jpg
  ../canve/608.jpg
  ../canve/609.jpg
  ../canve/610.jpg
  ../canve/611.jpg
  ../canve/612.jpg
  ../canve/613.jpg
  ../canve/614.jpg
  ../canve/615.jpg
  ../canve/616.jpg
  ../canve/617.jpg
  ../canve/618.jpg
  ../canve/619.jpg
  ../canve/620.jpg
  ../canve/621.jpg
  ../canve/622.jpg
  ../canve/623.jpg
  ../canve/624.jpg
  ../canve/625.jpg
  ../canve/626.jpg
  ../canve/627.jpg
  ../canve/628.jpg
  ../canve/629.jpg
  ../canve/630.jpg
  ../canve/631.jpg
  ../canve/632.jpg
  ../canve/633.jpg
  ../canve/634.jpg
  ../canve/635.jpg
  ../canve/636.jpg
  ../canve/637.jpg
  ../canve/638.jpg
  ../canve/639.jpg
  ../canve/640.jpg
  ../canve/641.jpg
  ../canve/642.jpg
  ../canve/643.jpg
  ../canve/644.jpg
  ../canve/645.jpg
  ../canve/646.jpg
  ../canve/647.jpg
  ../canve/648.jpg
  ../canve/649.jpg
  ../canve/650.jpg
 `;
    return data.split("\n")[index];
  }

  const frameCount = 650;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: .5,
      trigger: `#two`,
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#two",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
  });
}
canvas()
function mouseHover() {
  var smae = document.querySelectorAll(".four_box_img")
  smae[0].addEventListener("mouseover", function () {
    gsap.to("#img_one", {
      attr: { src: "svg/2.svg" }
    })
    this.addEventListener("mouseleave", function () {
      gsap.to("#img_one", {
        attr: { src: "svg/1.svg" }
      })
    })
  })
  smae[1].addEventListener("mouseover", function () {
    gsap.to("#img_two", {
      attr: { src: "svg/4.svg" }
    })
    this.addEventListener("mouseleave", function () {
      gsap.to("#img_two", {
        attr: { src: "svg/3.svg" }
      })
    })
  })
  smae[2].addEventListener("mouseover", function () {
    gsap.to("#img_three", {
      attr: { src: "svg/6.svg" }
    })
    this.addEventListener("mouseleave", function () {
      gsap.to("#img_three", {
        attr: { src: "svg/5.svg" }
      })
    })
  })
}
mouseHover()
function five() {
  var tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#five",
      start: "top top",
      end: "250% 80%",
      scroller: "#main",
      scrub: 5,
      pin: true,
    }
  })
  tl1.from(".five_one", {
    x: "-100%",
    opacity: 0,
    delay: 0.2
  }, 'same_one')
  tl1.from(".five_one1", {
    y: "100%",
    opacity: 0,
    delay: 0.2
  }, "same_one")
  tl1.to("#five>.five_one>img", {
    x: "-200%",
    delay: 2,
  }, "same_two")
  tl1.to("#five>.five_one1>img", {
    x: "-200%",
    delay: 2
  }, "same_two")
}
five()
function six() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#six",
      start: "top top",
      end: "250% bottom",
      scroller: "#main",
      scrub: 1,
      pin: true,
    }
  })
  tl2.from(".six_main", {
    width: "0%",
    y: "500px"
  })
  tl2.from(".six_main_one", {
    y: "125%",
  })
  tl2.from(".six_s", {
    opacity: 0,
    stagger: 1
  })
  tl2.to(".six_main_one", {
    scale: 2.5,
    zIndex: 5
  })
  tl2.from(".six_s", {
    opacity: 0,
  })
  tl2.from(".six_main_one_img", {
    y: "180%"
  })
  tl2.from(".six_main_one_img", {
    scale: 1.8
  })
}
six()
function footer() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "footer",
      start: "top top",
      end: "250% bottom",
      scroller: "#main",
      scrub:1,
      pin: true,
    }
  })
  tl3.to("footer>img", {
    transform:"translateX(-300%)"
  })
  tl3.from("footer>h1>span",{
    opacity:0,
    stagger:0.5
  })
}
footer()