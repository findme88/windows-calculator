"use strict";

let $btn = document.querySelector(".calculate");
let $win1 = document.querySelector(".example_1");
let $win2 = document.querySelector(".example_2");
let $win3 = document.querySelector(".example_3");
let $alert = document.querySelector(".alert");
let $alert2 = document.querySelector(".alert2");

let clk = () => {
  let $width = document.querySelector(".width").value;
  let $height = document.querySelector(".height").value;

//   ($width === '' || $height === '' ? $alert.classList.add('active') : $alert.classList.remove('active'))
  
  if ($width >= 500 && $width <= 700 && $height>=500 && $height <=1800) {
      $win1.classList.add('active')
      
  } else if ($width > 700 && $width < 1000 && $height>=500 && $height <=1800) {
    $win1.classList.add('active')
    $win2.classList.add('active')
  } else if ($width > 1000 && $width < 1200 && $height>=500 && $height <=1800) {
    $win1.classList.add('active')
    $win2.classList.add('active')
    $win3.classList.add('active')
  } else $alert2.classList.add('active')
};

$btn.onclick = clk;
