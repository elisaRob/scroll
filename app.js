const images=document.querySelectorAll("img");
const h2s=document.querySelectorAll("h2");
// const ps=document.querySelectorAll("p");
const hamberger=document.querySelector(".hamberger");

window.addEventListener("scroll",()=>defilementImages(images));
window.addEventListener("scroll", ()=>defilementImages(h2s));

function defilementImages(items){
    const pointdeDefilement = innerHeight/5*4;

    items.forEach(item => {
        const imageTop = item.getBoundingClientRect().top;
        if(imageTop < pointdeDefilement){
            item.classList.add("voir");
        }
    })
}

hamberger.addEventListener("click",()=>{
    hamberger.classList.toggle("active");
})


