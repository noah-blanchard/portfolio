const pageContent = document.getElementById('page-content');
const pageSections = document.getElementsByClassName('page-section');
const barContainer = document.getElementsByClassName('bar-container');

pageContent.scrollTop = 0;

function switchColor(){
    if(pageContent.classList.contains("second"))
        pageContent.classList.remove("second");
    else
        pageContent.classList.add("second");
}

document.querySelectorAll(".bar-container").forEach(function(bar, i) {
    bar.addEventListener("click", addActive => {
        const activeBar = document.querySelector(".left-bar.active");
        activeBar.classList.remove("active");
        const left = bar.firstElementChild;
        if(left.classList.contains("active")){
             left.classList.remove("active");
        }else{
             left.classList.add("active");
        }
    })

    bar.addEventListener("click", scrollContent => {
        if(pageContent.scrollTop > document.getElementById(`s${i+1}`).offsetTop){
            pageContent.scrollTop = document.getElementById(`s${i+1}`).offsetTop;
            switchColor();
        }else if(pageContent.scrollTop < document.getElementById(`s${i+1}`).offsetTop){
            pageContent.scrollTop = document.getElementById(`s${i+1}`).offsetTop;
            switchColor();
        }
        
    })
})