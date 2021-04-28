"use strict"
const myNav= document.querySelector('nav');
 
addEventListener('scroll', () =>{
 
    if(scrollY>530){
        myNav.style.setProperty('background',"#117711");
    }
  else {
        myNav.style.setProperty('background',"transparent");
  }
})
