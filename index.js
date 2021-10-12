let homedot = document.getElementsByClassName('homedot');
let home_sld = document.getElementsByClassName('homeImgSlid');
let currentSld = 0
window.onload = function(){
    slidview(0);
};

function slidview(n){
    sld = -100 *n
    home_sld[0].style.left = sld+'%';
    for(let i = 0 ; i< homedot.length; i++){
        homedot[i].style.backgroundColor = 'rgba(177, 177, 177, 0.438)';
    }
    homedot[n].style.backgroundColor = 'rgb(255, 102, 0)';
    currentSld = n;
}

function donateBtn(){
    let donatecon = document.getElementById('donatCont');
    donatecon.style.top = '0';
}
function closedonateCon(){
    let donatecon = document.getElementById('donatCont');
    donatecon.style.top = '-150%';
    document.getElementsByClassName('paybut')[0].classList.toggle('closeDonateclick')
}
function menuBtnClck(){
    let menupos = document.getElementById('menu');
    if(window.getComputedStyle(menupos).left !== '0px'){
        document.getElementsByClassName('headCont')[0].style.position = 'fixed';
        menupos.style.left ='0';
    }
    else{
        menupos.style.left ='-150%';
        document.getElementsByClassName('headCont')[0].style.position = 'absolute';
    }
}