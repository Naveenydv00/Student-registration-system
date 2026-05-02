const detailsForm = document.getElementById("detailsForm");

/* PHOTO PREVIEW */

const photoUpload = document.getElementById("photoUpload");
const photoPreview = document.getElementById("photoPreview");

photoUpload.addEventListener("change", function(){

    const file = this.files[0];

    if(file){

        const reader = new FileReader();

        reader.onload = function(e){

            photoPreview.innerHTML = `
                <img src="${e.target.result}">
            `;

            localStorage.setItem("studentPhoto", e.target.result);

        }

        reader.readAsDataURL(file);

    }

});

/* SIGN PREVIEW */

const signUpload = document.getElementById("signUpload");
const signPreview = document.getElementById("signPreview");

signUpload.addEventListener("change", function(){

    const file = this.files[0];

    if(file){

        const reader = new FileReader();

        reader.onload = function(e){

            signPreview.innerHTML = `
                <img src="${e.target.result}">
            `;

            localStorage.setItem("studentSign", e.target.result);

        }

        reader.readAsDataURL(file);

    }

});

/* SAVE DATA */

detailsForm.addEventListener("submit", function(e){

    e.preventDefault();

    localStorage.setItem("fatherName",
        document.getElementById("fatherName").value
    );

    localStorage.setItem("motherName",
        document.getElementById("motherName").value
    );

    localStorage.setItem("dob",
        document.getElementById("dob").value
    );

    localStorage.setItem("gender",
        document.getElementById("gender").value
    );

    localStorage.setItem("studentMobile",
        document.getElementById("studentMobile").value
    );

    localStorage.setItem("parentMobile",
        document.getElementById("parentMobile").value
    );

    localStorage.setItem("city",
        document.getElementById("city").value
    );

    localStorage.setItem("state",
        document.getElementById("state").value
    );

    localStorage.setItem("abcId",
        document.getElementById("abcId").value
    );

    localStorage.setItem("aadhar",
        document.getElementById("aadhar").value
    );

    localStorage.setItem("bloodGroup",
        document.getElementById("bloodGroup").value
    );

    localStorage.setItem("nationality",
        document.getElementById("nationality").value
    );

    localStorage.setItem("address",
        document.getElementById("address").value
    );

    window.location.href = "review.html";

});