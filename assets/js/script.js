//Smooth scroll        
let scroll = new SmoothScroll('a[href*="#"]', {speed: 600});


//Hiding navbar after clicking
$('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
});

//Send Email
function sendMail(contactForm) {
    emailjs.send("service_vd2bbtd","project_request", {
        'message': contactForm.textmessage.value,
        'from_name': contactForm.name.value,
        'from_email': contactForm.emailaddress.value,
        'subject': contactForm.subject.value
    })
    .then(
        function(response) {
            console.log('SUCCESS', response)
            alert('YOUR MESSAGE SENT SUCCESSFULY')
        },
        function(error) {
            console.log('FAILED', error)
        });
        return false;
}
   

//Clean form after submit
 let form = document.getElementById('contact_form')
form.addEventListener('submit', function submitForm (event) {
  event.preventDefault()

  console.table([ ...new FormData(form).entries() ])
  form.reset()
})




