// for scrolling effects

window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});


//navigation action for mobile devices

function toggleMenu(){
    const navigation = document.querySelector('.navigation');
    const menuToggle = document.querySelector('.menuToggle');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}


//skills animation effect

let imgBx = document.querySelectorAll('.imgBx');
let contentBx = document.querySelectorAll('.contentBx');
// for(let i=0; i<imgBx.length; i++){
//     imgBx[i].addEventListener('mouseover', function(){
//         for(let j=0; j<contentBx.length; j++){
//             contentBx[j].className = 'contentBx';
//         }
//         document.getElementById(this.dataset.id).className = 'contentBx active'
//         for(let k=0; k<imgBx.length; k++){
//             imgBx[k].className = 'imgBx'
//         }
//         this.className = 'imgBx active'
//     })
// }
let currentIndex = 0; // Index of the current active element

// Set the initial active elements
contentBx[currentIndex].classList.add('active');
imgBx[currentIndex].classList.add('active');

// Define a function to handle the mouseover event
function handleMouseover() {
    // Remove the active class from the current elements
    contentBx[currentIndex].classList.remove('active');
    imgBx[currentIndex].classList.remove('active');

    // Increment the index
    currentIndex++;

    // If the index is out of range, reset it to 0
    if (currentIndex >= contentBx.length) {
        currentIndex = 0;
    }

    // Add the active class to the new elements
    contentBx[currentIndex].classList.add('active');
    imgBx[currentIndex].classList.add('active');
}

// Call the handleMouseover function every 2 seconds
setInterval(handleMouseover, 2000);


//handling contact form

const contactForm = document.getElementById('contactForm'),
    fn = document.getElementById('fn'),
    ln = document.getElementById('ln'),
    email = document.getElementById('email'),
    mobile = document.getElementById('mobile'),
    msg = document.getElementById('msg'),
    statusMsg = document.getElementById('status')

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.service_id,process.env.template_id,'#contactForm',process.env.public_key)
    .then(() => {
        statusMsg.textContent = 'Message Sent';

        setTimeout(() => {
            statusMsg.textContent = '';
            fn.value = ''
            ln.value = ''
            email.value = ''
            mobile.value = ''
            msg.value = ''
        }, 2000)
    },(error) => {
        alert('Something has failed...',error)
    })
}
contactForm.addEventListener('submit', sendEmail)