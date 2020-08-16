"use strict";

let $btn = document.querySelector(".calculate");
let $win1 = document.querySelector(".example_1");
let $win2 = document.querySelector(".example_2");
let $win3 = document.querySelector(".example_3");
let $alert = document.querySelector(".alert");
let $alert2 = document.querySelector(".alert2");

const size = {
  smallWidthInitial: 500,
  smallWidthFinal: 700,
  middleWidthFinal: 1000,
  largeWidthFinal: 1200,
  heightInitial: 500,
  heightFinal: 1800 
  
}

let clk = () => {
  let $width = document.querySelector(".width").value;
  let $height = document.querySelector(".height").value;
  $alert2.classList.remove('active')
  
//   ($width === '' || $height === '' ? $alert.classList.add('active') : $alert.classList.remove('active'))
  
  if ($width >= size.smallWidthInitial && $width <= size.smallWidthFinal && $height>= size.heightInitial && $height <= size.heightFinal) {
      $win1.classList.add('active')
      
  } else if ($width > size.smallWidthFinal && $width < size.middleWidthFinal && $height>= size.heightInitial && $height <= size.heightFinal) {
    $win1.classList.add('active')
    $win2.classList.add('active')
  } else if ($width > size.middleWidthFinal && $width <= size.largeWidthFinal && $height>= size.heightInitial && $height <= size.heightFinal) {
    $win1.classList.add('active')
    $win2.classList.add('active')
    $win3.classList.add('active')
  } else $alert2.classList.add('active')
};

$btn.addEventListener('click', clk)
