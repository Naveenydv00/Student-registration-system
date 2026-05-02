document.getElementById("rFather").innerText =
localStorage.getItem("fatherName");

document.getElementById("rMother").innerText =
localStorage.getItem("motherName");

document.getElementById("rDob").innerText =
localStorage.getItem("dob");

document.getElementById("rGender").innerText =
localStorage.getItem("gender");

document.getElementById("rStudentMobile").innerText =
localStorage.getItem("studentMobile");

document.getElementById("rParentMobile").innerText =
localStorage.getItem("parentMobile");

document.getElementById("rCity").innerText =
localStorage.getItem("city");

document.getElementById("rState").innerText =
localStorage.getItem("state");

document.getElementById("rAbc").innerText =
localStorage.getItem("abcId");

document.getElementById("rAadhar").innerText =
localStorage.getItem("aadhar");

document.getElementById("rBlood").innerText =
localStorage.getItem("bloodGroup");

document.getElementById("rNationality").innerText =
localStorage.getItem("nationality");

document.getElementById("rAddress").innerText =
localStorage.getItem("address");

document.getElementById("rPhoto").src =
localStorage.getItem("studentPhoto");

document.getElementById("rSign").src =
localStorage.getItem("studentSign");

/* FINAL SUBMIT */

document.getElementById("finalSubmit")

.addEventListener("click", async function(){

    const studentData = {

        firstName:
        localStorage.getItem("firstName"),

        lastName:
        localStorage.getItem("lastName"),

        email:
        localStorage.getItem("email"),

        phone:
        localStorage.getItem("phone"),

        course:
        localStorage.getItem("course"),

        department:
        localStorage.getItem("department"),

        fatherName:
        localStorage.getItem("fatherName"),

        motherName:
        localStorage.getItem("motherName"),

        dob:
        localStorage.getItem("dob"),

        gender:
        localStorage.getItem("gender"),

        studentMobile:
        localStorage.getItem("studentMobile"),

        parentMobile:
        localStorage.getItem("parentMobile"),

        city:
        localStorage.getItem("city"),

        state:
        localStorage.getItem("state"),

        abcId:
        localStorage.getItem("abcId"),

        aadhar:
        localStorage.getItem("aadhar"),

        bloodGroup:
        localStorage.getItem("bloodGroup"),

        nationality:
        localStorage.getItem("nationality"),

        address:
        localStorage.getItem("address"),

        photo:
        localStorage.getItem("studentPhoto"),

        signature:
        localStorage.getItem("studentSign")

    };

    try{

        const response = await fetch(

            "http://localhost:5000/api/register",

            {

                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify(studentData)

            }

        );

        const result = await response.json();

        alert(result.message);

        localStorage.clear();

        window.location.href = "index.html";

    }

    catch(error){

        console.log(error);

        alert("Registration Failed");

    }

});