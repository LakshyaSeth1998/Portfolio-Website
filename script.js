function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('desktop-nav');
    if (window.scrollY > 0) {
        navbar.style.height = '10vh';
    } else {
        navbar.style.height = '17vh';
    }
});

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('hamburger-nav');
    if (window.scrollY > 0) {
        navbar.style.height = '10vh';
    } else {
        navbar.style.height = '17vh';
    }
});

// document.addEventListener('DOMContentLoaded', function() {
//     window.addEventListener('scroll', function() {
//         const elements = document.getElementsByTagName('section');
//         elements.forEach(function(element) {
//             if (element.getBoundingClientRect().top < window.innerHeight) {
//                 element.classList.add('visible');
//             }
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        // const elements = document.querySelectorAll('.animated-top');
        // elements.forEach(section => {
        //     const sectionTop = section.getBoundingClientRect().top;
        //     const sectionBottom = section.getBoundingClientRect().bottom;

        //     if (sectionTop < window.innerHeight && sectionBottom > 0) {
        //         section.classList.add('appear-top');
        //     } else {
        //         section.classList.remove('appear-top');
        //         section.classList.add('disappear-top');
        //     }
        // });

        const elements = document.querySelectorAll('.animated-top');
        elements.forEach(function(element) {
            if (element.getBoundingClientRect().top < window.innerHeight) {
                element.classList.add('appear-top');
            }
            else {
                element.classList.remove('appear-top');
            }

            if (element.getBoundingClientRect().bottom > window.innerHeight) {
                element.classList.add('disappear-top');
            }
            else {
                element.classList.remove('disappear-top');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const elements = document.querySelectorAll('.animated-bottom');
        elements.forEach(function(element) {
            if (element.getBoundingClientRect().top < window.innerHeight) {
                element.classList.add('appear-bottom');
            }
            else {
                element.classList.remove('appear-bottom');
            }

            if (element.getBoundingClientRect().bottom > window.innerHeight) {
                element.classList.add('disappear-bottom');
            }
            else {
                element.classList.remove('disappear-bottom');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const elements = document.querySelectorAll('.animated-left');
        elements.forEach(function(element) {
            if (element.getBoundingClientRect().top < window.innerHeight) {
                element.classList.add('appear-left');
            }
            else {
                element.classList.remove('appear-left');
            }

            if (element.getBoundingClientRect().bottom-50 > window.innerHeight) {
                element.classList.add('disappear-left');
            }
            else {
                element.classList.remove('disappear-left');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const elements = document.querySelectorAll('.animated-right');
        elements.forEach(function(element) {
            if (element.getBoundingClientRect().top < window.innerHeight) {
                element.classList.add('appear-right');
            }
            else {
                element.classList.remove('appear-right');
            }

            if (element.getBoundingClientRect().bottom > window.innerHeight) {
                element.classList.add('disappear-right');
            }
            else {
                element.classList.remove('disappear-right');
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    particlesJS.load('particles-js', 'assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
      });
});

function sendEmail(){
    let params= {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
    //using email js here
    emailjs.send("service_530fzzo","template_w0g7n73",params)
        .then(alert("email has been sent"));
}