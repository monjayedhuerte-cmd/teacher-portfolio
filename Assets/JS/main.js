console.log("Teacher Portfolio Loaded");
window.addEventListener("scroll",()=>{

const winScroll=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const scrolled=(winScroll/height)*100;

document.getElementById("progress-bar").style.width=scrolled+"%";

});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSections);

function revealSections(){

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < trigger){

            section.classList.add("active");

        }

    });

}

revealSections();