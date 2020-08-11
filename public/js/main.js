

import {headerResponsive,headerScroll} from './mudele/scroll.js';
import{initmap,ShowMap} from './mudele/maps.js'
import { acordeonAeropuerts } from './mudele/tab.js';
import { navAeropuerts } from './mudele/nav.js';
const d   = document;

d.addEventListener('DOMContentLoaded',  function(){
    headerResponsive();
    headerScroll();
    initmap();
    ShowMap();
   
  
})

d.addEventListener('click',function(){
    acordeonAeropuerts();
    navAeropuerts();
})




