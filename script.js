const step1Form = document.getElementById("step1Form");

step1Form.addEventListener("submit", function(e){

    e.preventDefault();

    /* SAVE BASIC DATA */

    localStorage.setItem(
        "firstName",
        document.getElementById("firstName").value
    );

    localStorage.setItem(
        "lastName",
        document.getElementById("lastName").value
    );

    localStorage.setItem(
        "email",
        document.getElementById("email").value
    );

    localStorage.setItem(
        "phone",
        document.getElementById("phone").value
    );

    localStorage.setItem(
        "course",
        document.getElementById("course").value
    );

    localStorage.setItem(
        "department",
        document.getElementById("department").value
    );

    /* NEXT PAGE */

    window.location.href = "details.html";

});
/* AOS INIT */

AOS.init({
    duration:1000,
    once:true
});

/* CARD ENTRY ANIMATION */

gsap.from(".card",{

    y:50,
    opacity:0,
    duration:1.2,
    ease:"power3.out"

});

/* FORM FIELDS ANIMATION */

gsap.from(".input-group",{

    y:30,
    opacity:0,
    duration:1,
    stagger:0.1,
    delay:0.5

});

/* BUTTON ANIMATION */

gsap.from("button",{

    scale:0.8,
    opacity:0,
    duration:1,
    delay:1

});

/* GLASS CARD 3D EFFECT */

VanillaTilt.init(document.querySelector(".card"),{

    max:8,
    speed:400,
    glare:true,
    "max-glare":0.3

});