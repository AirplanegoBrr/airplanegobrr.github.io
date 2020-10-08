/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("Mess with the code if you want, if you break something just refresh ¯\\_(ツ)_/¯ ");

function sendEmail() {
    var contact = document.getElementById("contactinfo").value;
    var subjecttitle = document.getElementById("subject").value;
    var inbodytext = document.getElementById("inbody").value;
    var body = inbodytext + "<br><br><br>Contact info:" + contact;
    Email.send({
        SecureToken : "09111750-24e6-4094-a6b2-d977382eb0a9",
        To : "airplanegobrrfeedback@gmail.com",
        From : "flocknotif@gmail.com",
        Subject : subjecttitle,
        Body : body,
    })
    .then(console.log("Email sent"));
}

function disableb() {
    document.getElementById("button").disabled = true;
}