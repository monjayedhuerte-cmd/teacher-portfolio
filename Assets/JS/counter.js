const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.dataset.target;

            let current = 0;

            const speed = target / 120;

            function updateCounter(){

                current += speed;

                if(current < target){

                    counter.innerText = Math.ceil(current);

                    requestAnimationFrame(updateCounter);

                }else{

                    counter.innerText = target;

                }

            }

            updateCounter();

            observer.unobserve(counter);

        }

    });

},{threshold:.6});

counters.forEach(counter=>observer.observe(counter));