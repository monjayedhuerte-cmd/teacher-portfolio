/*==================================
PREMIUM LOGIN SYSTEM
==================================*/

// ------------ SETTINGS ------------

// Change this to your own password
const PASSWORD_HASH = "4499a093a9dfe821a53b263f2148f48abd52d48d90e344170274d8052fa0c8bb";

// Change this if your homepage has another filename
const HOME_PAGE = "home.html";


// ------------ ELEMENTS ------------

const form = document.getElementById("loginForm");

const password = document.getElementById("password");

const togglePassword = document.getElementById("togglePassword");

const error = document.getElementById("errorMessage");

const loading = document.getElementById("loadingScreen");

const themeButton = document.getElementById("themeToggle");



// ==================================
// SHOW / HIDE PASSWORD
// ==================================

togglePassword.addEventListener("click",()=>{

    if(password.type==="password"){

        password.type="text";

        togglePassword.innerHTML='<i class="fas fa-eye-slash"></i>';

    }

    else{

        password.type="password";

        togglePassword.innerHTML='<i class="fas fa-eye"></i>';

    }

});

async function sha256(text){

    const encoder = new TextEncoder();

    const data = encoder.encode(text);

    const hashBuffer =
        await crypto.subtle.digest("SHA-256", data);

    const hashArray =
        Array.from(new Uint8Array(hashBuffer));

    return hashArray
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");

}



// ==================================
// DARK MODE
// ==================================

if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark");

    themeButton.innerHTML='<i class="fas fa-sun"></i>';

}

themeButton.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeButton.innerHTML='<i class="fas fa-sun"></i>';

    }

    else{

        localStorage.setItem("theme","light");

        themeButton.innerHTML='<i class="fas fa-moon"></i>';

    }

});



// ==================================
// LOGIN
// ==================================

form.addEventListener("submit", async (e)=>{

    e.preventDefault();

    error.textContent = "";

    const enteredHash = await sha256(password.value);

    if(enteredHash === PASSWORD_HASH){

        loading.style.display = "flex";

        setTimeout(()=>{

            window.location.href = HOME_PAGE;

        },1800);

    }

    else{

        error.textContent = "Incorrect password.";

        password.value = "";

        password.focus();

    }

});




// ==================================
// PARTICLES
// ==================================

particlesJS("particles-js",{

particles:{

number:{

value:90,

density:{

enable:true,

value_area:900

}

},

color:{

value:"#ffffff"

},

shape:{

type:"circle"

},

opacity:{

value:.25

},

size:{

value:3,

random:true

},

line_linked:{

enable:true,

distance:160,

color:"#ffffff",

opacity:.15,

width:1

},

move:{

enable:true,

speed:2,

direction:"none",

random:false,

straight:false,

out_mode:"out"

}

},

interactivity:{

events:{

onhover:{

enable:true,

mode:"grab"

},

onclick:{

enable:true,

mode:"push"

}

},

modes:{

grab:{

distance:180,

line_linked:{

opacity:.45

}

},

push:{

particles_nb:4

}

}

},

retina_detect:true

});