// jquery code

document.addEventListener("DOMContentLoaded", ()=>{

    window.onscroll = () => {
        console.log(window.scrollY)
        console.log(window.innerHeight)
        console.log(document.body.offsetHeight)
    if (window.scrollY+window.innerHeight >= document.body.offsetHeight){
        document.querySelector('body').style.background = '#ff6666';
    }
    else{
        document.querySelector('body').style.background = '';
    }};

})


