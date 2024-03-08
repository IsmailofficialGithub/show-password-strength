let pass = document.querySelector("#password");
let message = document.querySelector("#message");
let strength = document.querySelector("#strength");

pass.addEventListener("input", () => {
    if (pass.value.length > 0) {
        message.style.display = "block";
    }
    else {
     
        message.style.display = "none";

    }

    if (pass.value.length < 4) {

        strength.innerHTML = "week";
        message.style.color="red";
        pass.style.border = "2px solid red";

    } else if (pass.value.length < 6) {

        message.style.color="yellow";
        strength.innerHTML = "medium";
        pass.style.border = "2px solid yellow";
        
    } else if (pass.value.length >= 8) {

        message.style.color="green";
        strength.innerHTML = "stronge";
        pass.style.border = "2px solid green";
    }
})