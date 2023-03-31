let stars = document.getElementById('stars');
let moon2 = document.getElementById('moon2');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
let Moon = document.querySelector('.nouvil');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river5.style.top = value * 1.2 + 'px';
    boat6.style.top = value * 1.2 + 'px';
    boat6.style.left = value * 1.2 + 'px';
    Moon.style.fontSize = value + 'px';
    if(scrollY >= 67){
        Moon.style.fontSize = 67 + 'px';
        Moon.style.position = 'fixed';
        if(scrollY >= 478){
            Moon.style.display = 'none';

        }else{
            Moon.style.display = 'block';
            
        }
        if(scrollY >= 176){
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#2f7470)'
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)'

        }
    }
}