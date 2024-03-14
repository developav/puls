"use strict";

// import { Navigation } from 'swiper';
var swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 50,
  variableWidth: true,
  breakpoints: {
    120: {
      slidesPerView: 1,
      spaceBetween: 200
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 55
    },
    850: {
      slidesPerView: 2,
      spaceBetween: 55
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },
  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  } // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },

});
var newSwiper = new Swiper('.mySwiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  rewind: true,
  slidesPerView: 5,
  speed: 800,
  spaceBetween: 50,
  allowTouchMove: true,
  // variableWidth: true,
  autoplay: {
    delay: 4000
  },
  mousewheel: {
    sensitivity: 1
  },
  breakpoints: {
    120: {
      slidesPerView: 1,
      spaceBetween: 50,
      centeredSlides: true
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
      centeredSlides: true
    },
    450: {
      slidesPerView: 2,
      spaceBetween: 35,
      centeredSlides: true
    },
    850: {
      slidesPerView: 3,
      spaceBetween: 35,
      centeredSlides: true
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
      centeredSlides: true
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swip-sec-next',
    prevEl: '.swip-sec-prev'
  } // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },

});