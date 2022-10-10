// Import all plugins
//  import '../node_modules/@popperjs/core/dist/umd/popper.min.js';
// import * as Popper from "@popperjs/core"
// import 'bootstrap';

import * as popper from '@popperjs/core';
import * as bootstrap from 'bootstrap';
// import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
// import { Util, Dropdown, Offcanvas, Popover } from 'bootstrap';

// document.querySelectorAll('[data-bs-toggle="popover"]')
//   .forEach(popover => {
//     new Popover(popover)
//   })
document.addEventListener("DOMContentLoaded", function(){
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function(element){
      return new bootstrap.Tooltip(element);
  });
});

import * as prism from 'prismjs';
import 'prismjs/components/prism-python.js';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';



