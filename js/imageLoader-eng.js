"use strict";

(function LOADER() {
  let imagesArray = []; //storage for generated images
  const gallery = document.getElementById("gallery-row");
  // console.dir(gallery);
  const galleryName = gallery.getAttribute("data-gallery");

  // temporary object as a database - this will be replaced by a request from the real database
  let galleries = {
    vines: {
      name: "I am the Vine",
      gallerySize: 26,
      src: "./img/EXHIBITION-I-AM-THE-VINE/paintings/Vines-",
      carouselSrc: "./img/EXHIBITION-I-AM-THE-VINE/photos/I-am-the-vine-photo-",
      carouselSize: 23,
    },
    lilies: {
      name: "Lilies",
      gallerySize: 34,
      src: "./img/EXHIBITION-LILIES/paintings/Lilies-",
      carouselSrc: "./img/EXHIBITION-LILIES/photos/Lilies-photos-",
      carouselSize: 10,
    },
    waterLilies: {
      name: "Water Lilies",
      gallerySize: 36,
      src: "./img/EXHIBITION-WATER-LILIES/Water-lilies-",
    },
    landscapes: {
      name: "Landscapes",
      gallerySize: 37,
      src: "./img/LANDSCAPES/Landscapes-",
      dimensions: [
        "70 x 50",
        "50 x 70",
        "70 x 50",
        "70 x 50",
        "50 x 35",
        "50 x 35",
        "70 x 50",
        "29.7 x 21",
        "21 x 29.7",
        "40 x 30 x 4",
        "40 x 30 x 4",
        "50 x 70",
        "70 x 50",
        "21 x 29.7",
        "21 x 29.7",
        "21 x 29.7",
        "21 x 29.7",
        "21 x 29.7",
        "35 x 50",
        "35 x 50",
        "35 x 50",
        "70 x 50",
        "70 x 50",
        "35 x 50",
        "70 x 50",
        "70 x 50",
        "70 x 50",
        "70 x 50",
        "70 x 50",
        "70 x 50",
        "70 x 50",
        "70 x 50",
        "29.7 x 21",
        "29.7 x 21",
        "29.7 x 21",
        "21 x 29.7",
        "21 x 29.7",
      ],
      base: [
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "canvas",
        "canvas",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
      ],
    },
    adriatic: {
      name: "Adriatic",
      gallerySize: 10,
      src: "./img/ADRIATIC/Adriatic-",
      dimensions: [
        "70 x 50",
        "70 x 50",
        "50 x 70",
        "70 x 50",
        "50 x 70",
        "29.7 x 21",
        "120 x 80 x 4",
        "50 x 70",
        "70 x 50",
        "50 x 70",
      ],
      base: [
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "canvas",
        "hardboard",
        "hardboard",
        "hardboard",
      ],
    },
    stillLife: {
      name: "Still Life",
      gallerySize: 27,
      src: "./img/STILL-LIFE/Still-life-",
      dimensions: [
        "50 x 70",
        "50 x 70",
        "70 x 50",
        "70 x 50",
        "50 x 70",
        "50 x 70",
        "50 x 70",
        "50 x 70",
        "50 x 70",
        "70 x 50",
        "50 x 70",
        "70 x 50",
        "70 x 50",
        "30 x 40 x 4",
        "50 x 70",
        "50 x 70",
        "50 x 70",
        "50 x 70",
        "21 x 29.7",
        "21 x 29.7",
        "21 x 29.7",
        "21 x 29.7",
        "21 x 29.7",
        "21 x 29.7",
        "21 x 29.7",
        "21 x 29.7",
        "70 x 50",
      ],
      base: [
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "canvas",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
      ],
    },
    blackAndWhite: {
      name: "Black and white in color",
      gallerySize: 41,
      src: "./img/BLACK-AND-WHITE/Black-And-White-",
      dimensions: [
        "70 x 50",
        "21 x 29.7",
        "21 x 29.7",
        "50 x 70",
        "21 x 29.7",
        "21 x 29.7",
        "29.7 x 21",
        "29.7 x 21",
        "29.7 x 21",
        "29.7 x 21",
        "29.7 x 21",
        "21 x 29.7",
        "28 x 36 x 4",
        "28 x 36 x 4",
        "28 x 36 x 4",
        "50 x 70",
        "21 x 29.7",
        "30 x 30 x 4",
        "40 x 30 x 4",
        "30 x 40 x 4",
        "70 x 50",
        "29.7 x 21",
        "21 x 29.7",
        "50 x 70",
        "21 x 29.7",
        "21 x 29.7",
        "21 x 29.7",
        "21 x 29.7",
        "50 x 70",
        "21 x 29.7",
        "21 x 29.7",
        "21 x 29.7",
        "21 x 29.7",
        "21 x 29.7",
        "21 x 29.7",
        "70 x 50",
        "50 x 70",
        "21 x 29.7",
        "50 x 70",
        "21 x 29.7",
        "21 x 29.7",
      ],
      base: [
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "canvas",
        "canvas",
        "canvas",
        "hardboard",
        "hardboard",
        "canvas",
        "canvas",
        "canvas",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
        "hardboard",
      ],
    },
    apstractions: {
      name: "Apstract art",
      gallerySize: 3,
      src: "./img/APSTRACTIONS/Apstractions-",
      titles: ["Life", "Life", "Vine"],
      dimensions: ["70 x 50", "140 x 50 x 4", "50 x 70"],
      base: ["canvas", "canvas", "hardboard"],
    },
    poems: {
      name: "Poems",
      gallerySize: 26,
      src: "./img/POEMS/Poems-",
      titles: [
        "Ponekad",
        "Pjesma o pjesmi",
        "Ne želim",
        "Baka",
        "Kišobran",
        "Put",
        "Tingl-tangl-zvec",
        "Beskraj vremena",
        "Stara Cesta",
        "Pjesma oprosta",
        "Ja",
        "Nekad sam pisao",
        "Patnja",
        "Svemirska paučina",
        "Pjesma svjedočanstva",
        "Naš čuvar",
        "Čamac na jedra",
        "Your dreams",
        "Pjesma samom sebi",
        ",Zarez,zarez,",
        "Fališ mi",
        "Božić dolazi",
        "Vau",
        "Život je prljavo kazalište",
        "Divlje guske",
        "Jesen",
      ],
    },
  };
  const gallerySize = galleries[galleryName].gallerySize;

  function imageLOAD() {
    const numOfImgsToLoad = gallerySize;
    let imageHTML = "";

    for (let i = numOfImgsToLoad; i >= 1; i--) {
      let src = `${galleries[galleryName].src}${i}.jpg`;
      // load first 6 images normally, and the rest lazy load
      let image = `<img ${
        i > numOfImgsToLoad - 6 ? `src="${src}"` : 'src=""'
      } data-src="${src}" data-id="${i}" id="${i}" class="img-fluid image-cont-scale  gallery-image ${
        i > numOfImgsToLoad - 6 ? `` : "fadeIn"
      }" alt="${
        galleries[galleryName].titles?.[i - 1] ||
        galleries[galleryName].name + " " + i
      }">`;

      imageHTML += `<div class="col grid-item my-3 text-center">
                        ${image}
                        <h4 class="m-2 text-center ${
                          galleryName === "poems" ? "text-white my-4" : ""
                        } font-Caveat">${
        galleries[galleryName].titles?.[i - 1] ||
        galleries[galleryName].name + " " + i
      } </h4>
                        <div class="tag-background d-inline-block">
                            <h5 class="m-2 fs-5 text-center text-white font-Caveat  ${
                              galleryName !== "poems" ? "d-none" : ""
                            }">Text - Branko Pritišanac</h5>
                            <h5 class="m-2 fs-5 text-center text-white font-Caveat  ${
                              galleryName !== "poems" ? "d-none" : ""
                            }">Design - Tin Pritišanac</h5>
                        </div>
                    </div> `;
    }
    // insert it in DOM
    gallery.insertAdjacentHTML("beforeend", imageHTML);
  }
  imageLOAD();

  /// Carousels loader
  const carouselContainer = document.querySelector(".carouselCont");

  if (carouselContainer != null) {
    // if it exists in DOM
    const carouselLength = galleries[galleryName].carouselSize;
    carouselImgLoad(carouselLength, galleryName);
  }

  function carouselImgLoad(carouselLength, galleryName) {
    for (let i = 1; i <= carouselLength; i++) {
      let imageHTML = `<div class="carousel-item  ${i === 1 ? "active" : ""}">
            <img src="${
              galleries[galleryName].carouselSrc
            }${i}.jpg" class=" rounded-3 img-fluid"
                alt="Fotografija sa izložbe ${galleries[galleryName].name}">
          </div>`;
      carouselContainer.insertAdjacentHTML("beforeend", imageHTML);
    }
  }

  // MODALS

  // 1. detect image to show in modal
  // we are listening in the body because modal will be placed in the body at the end(not to have margins and paddings)
  let modalState = "closed";
  document.body.addEventListener("click", function (event) {
    if (modalState === "closed") {
      // to prevent bug when  clicking on image in open modal
      if (event.target.classList.contains("gallery-image")) {
        // if clicked on image
        // get the original image that was clicked
        let origImage = event.target;
        // copy it for work in modal, so not to affect original
        let imgElement = origImage.cloneNode(true);
        // remove/add some classes
        imgElement.classList.remove("image-cont-scale");
        imgElement.classList.add("max-height-90");

        // create modal html template
        const modalHTML = `<div class="modal fade" id="myImageModal" tabindex = "-1" aria-labelledby="myImageModalLabel" aria-hidden="true" >
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content" style="position:relative;">
                    <div class="modal-header shadow">
                        <h5 class="modal-title font-Caveat fs-4" style="position:absolute;left:50%;transform:translate(-50%);" id="myImageModalLabel">${
                          event.target.alt
                        }</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body d-flex text-center px-0">
                        <div class="container-fluid p-0 m-0">
                            <div class="row justify-content-center align-items-center">
                                <div class="col-12 col-lg-8 col-xxl-8 px-0">
                                    <div class="wrapper d-flex">
                                        <a class="btn btn-prev text-danger d-none d-lg-block align-self-center"><i class="fas fa-chevron-left top-icon fa-2x" style="pointer-events: none"></i></a>
                                        <div class="col img-div">
                                            ${imgElement.outerHTML}
                                            <div id="swipeFinger" class="d-lg-none">
                                            <i class="fas fa-3x fa-hand-point-up"></i>
                                            </div>
                                        </div>
                                        <a class="btn btn-next text-danger d-none d-lg-block align-self-center"><i class="fas fa-chevron-right top-icon fa-2x" style="pointer-events: none"></i></a>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-4 col-xxl-4 mt-4 d-flex justify-content-center ${
                                  galleryName == "poems" ||
                                  galleryName == "vines" ||
                                  galleryName == "lilies" ||
                                  galleryName == "waterLilies"
                                    ? "d-none"
                                    : ""
                                }">
                                    <div class="centering-div text-start font-Caveat fs-4">
                                    <p><span class="text-danger">Technique :</span> Oil on <span id="technique">${
                                      galleries[galleryName].base?.[
                                        imgElement.id - 1
                                      ] || "canvas/hardboard"
                                    }</span></p>
                                    <p><span class="text-danger">Dimensions :</span> <span id="dimension">${
                                      galleries[galleryName].dimensions?.[
                                        imgElement.id - 1
                                      ] || "AA x BB x CC"
                                    }</span> cm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>
              </div>`;

        // insert modal in DOM
        document.body.insertAdjacentHTML("beforeend", modalHTML);

        //designate and initiate modal
        var myModal = new bootstrap.Modal(
          document.getElementById("myImageModal"),
          {}
        );
        myModal.show();
        modalState = "open";

        // remove id from the current image shown in modal
        function removeID() {
          const modal = document.querySelector(".modal");
          const currentImg = modal.querySelector(".gallery-image");
          currentImg.removeAttribute("id");
        }
        removeID();

        // listen for the closing button to remove modal
        document
          .querySelector(".btn-close")
          .addEventListener("click", function () {
            //remove modal upon closing
            document.getElementById("myImageModal").remove();
            modalState = "closed";
          });
        // listend for the buttons prev and next
        document.querySelectorAll(".btn-prev").forEach(function (item) {
          item.addEventListener("click", function () {
            loadImage("previous");
          });
        });
        document.querySelectorAll(".btn-next").forEach(function (item) {
          item.addEventListener("click", function () {
            loadImage();
          });
        });

        // listen for keyboard buttons (arrows)
        const modal = document.querySelector(".modal");
        modal.addEventListener("keydown", function (e) {
          if (e.keyCode === 37 || e.keyCode === 65) {
            loadImage("previous");
          } else if (e.keyCode === 39 || e.keyCode === 68) {
            loadImage();
          }
        });
        // SWIPE GESTURES //
        // listen for swipe events within modal body (for touch screens)

        function detectswipe(el, func) {
          let swipe_det = new Object();
          swipe_det.sX = 0;
          swipe_det.sY = 0;
          swipe_det.eX = 0;
          swipe_det.eY = 0;
          var min_x = 120; //min x swipe for horizontal swipe
          var max_x = 30; //max x difference for vertical swipe
          var min_y = 50; //min y swipe for vertical swipe
          var max_y = 60; //max y difference for horizontal swipe
          var direc = "";
          let ele = document.querySelector(el);

          function checkScale() {
            let viewport = window.visualViewport;
            let scale = viewport.scale;
            if (scale == 1) return true;
            else return false;
          }

          ele.addEventListener(
            "touchstart",
            function (e) {
              var t = e.touches[0];
              swipe_det.sX = t.screenX;
              swipe_det.sY = t.screenY;
            },
            false
          );
          ele.addEventListener(
            "touchmove",
            function (e) {
              // e.preventDefault();
              var t = e.touches[0];
              swipe_det.eX = t.screenX;
              swipe_det.eY = t.screenY;
            },
            false
          );
          ele.addEventListener(
            "touchend",
            function (e) {
              //horizontal detection
              if (
                (swipe_det.eX - min_x > swipe_det.sX ||
                  swipe_det.eX + min_x < swipe_det.sX) &&
                swipe_det.eY < swipe_det.sY + max_y &&
                swipe_det.sY > swipe_det.eY - max_y &&
                swipe_det.eX > 0
              ) {
                if (swipe_det.eX > swipe_det.sX) direc = "r";
                else direc = "l";
              }
              //vertical detection
              else if (
                (swipe_det.eY - min_y > swipe_det.sY ||
                  swipe_det.eY + min_y < swipe_det.sY) &&
                swipe_det.eX < swipe_det.sX + max_x &&
                swipe_det.sX > swipe_det.eX - max_x &&
                swipe_det.eY > 0
              ) {
                if (swipe_det.eY > swipe_det.sY) direc = "d";
                else direc = "u";
              }
              // react to a swipe only if the viewport scale is 1
              if (direc != "" && checkScale()) {
                if (typeof func == "function") func(el, direc);
              }

              direc = "";
              swipe_det.sX = 0;
              swipe_det.sY = 0;
              swipe_det.eX = 0;
              swipe_det.eY = 0;
            },
            false
          );
        }

        function swipeRection(element_, direction) {
          //alert("you swiped on element with id '"+element+"' to "+direction+" direction");
          if (direction == "l") {
            loadImage("previous");
          } else if (direction == "r") {
            loadImage("next");
          }
        }

        detectswipe(".modal-body", swipeRection);

        ///////////////
        function loadImage(direction) {
          // find the number of the image
          // select the image
          const modal = document.querySelector(".modal");
          let currentImg = modal.querySelector(".gallery-image");
          // get its number from its data-id

          let imgNumber = Number(currentImg.dataset.id);

          //if previous button was pressed
          if (direction === "previous") {
            //select the next higher number
            imgNumber == gallerySize
              ? (imgNumber = 1)
              : (imgNumber = imgNumber + 1);
          } else {
            //select next lower number
            imgNumber === 1
              ? (imgNumber = gallerySize)
              : (imgNumber = imgNumber - 1);
          }
          //find the image with this id in the array imagesArray
          let newImage = imagesArray.find((item) => item.id == imgNumber);

          //replace the attributes of the image with the new ones
          // move id to data-id to prevent 2 images having the same id on the page
          currentImg.setAttribute("data-id", newImage.id);
          currentImg.classList.remove("animateFadeIn");
          currentImg.src = newImage.dataset.src;
          currentImg.alt = newImage.alt;
          modal.querySelector(".modal-title").textContent = newImage.alt;
          // to restart fade in transition(needs some delay)
          setTimeout(() => {
            currentImg.classList.add("animateFadeIn");
          }, 0);
          //load the image in the body so it can be scrolled to the correct position...
          let imageInGallery = document.getElementById(newImage.id);
          imageInGallery.src = imageInGallery.dataset.src;

          // after modal is closed page will be scrolled to the position of the last image viewed in modal
          scrollToCurrentImg(currentImg.dataset.id);

          // change image info

          modal.querySelector("#technique").textContent =
            galleries[galleryName].base?.[imgNumber - 1] || "canvas/hardboard";
          modal.querySelector("#dimension").textContent =
            galleries[galleryName].dimensions?.[imgNumber - 1] ||
            "AA x BB x CC";
        }
      }
    }
  });

  /**********************************MASONRY************************************/

  // initiate masonry layout,obrserve for changes and observe images for lazy loading
  // on screens with width less than 768px ( md breakpoint) Masonry will not be initiated,
  // on bigger screens (2 columns and more) it will be initiated

  // 1. when everything is loaded
  window.addEventListener("load", function () {
    observeAndPush();
    // listen for resize
    // window.addEventListener("resize", resetMasonry);

    function observeAndPush() {
      document
        .querySelectorAll(".gallery-image")
        .forEach(function (item, index) {
          // we don't want to lazy load first 6 images
          if (index > 5) {
            // add observer for lazy load
            lazyLoad(item);
          }

          // push images in array so they can be accesed when using modal
          imagesArray.push(item);
        });
    }

    function lazyLoad(item) {
      //setup observer
      function callbackFunc(entries, observer) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // if masonry is setup
            if (window.innerWidth >= 768) {
              // when image is loaded, reset masonry layout
              entry.target.onload = function () {
                resetMasonry();
              };
            }
            // take url from data-src and put it in src attribute ( this will load the image)
            entry.target.src = entry.target.dataset.src;
            // stop observing the element
            observer.unobserve(item);
          }
        });
      }

      let options = {
        root: null,
        rootMargin: "300px",
        threshold: 0,
      };

      let observer = new IntersectionObserver(callbackFunc, options);
      observer.observe(item);
    }

    // if there is only one column layout (on mobile) don't setup masonry
    if (window.innerWidth < 768) return;

    // Masonry setup
    var elem = document.querySelector(".grid");
    var msnry = new Masonry(elem, {
      // options
      itemSelector: ".grid-item",
      // disable initial layout
      // initLayout: false
    });
    function resetMasonry() {
      msnry.layout();
    }
  });
})();
