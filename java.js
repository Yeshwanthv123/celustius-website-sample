document.querySelector('.container2').addEventListener('animationend', function() {
    document.body.classList.add('scrollable');
});
let scrollPosition = window.scrollY;

window.addEventListener("load", function() {
    window.scrollTo(0, scrollPosition); 
});
document.addEventListener("DOMContentLoaded", () => {
  const container3 = document.getElementById("container3");

  if (!container3) {
    console.error("Element with ID 'container3' not found!");
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        container3.classList.add("active");
      } else {
        container3.classList.remove("active");
      }
    });
  });

  observer.observe(container3);
});
document.addEventListener("DOMContentLoaded", function () {
    const container4 = document.querySelector('.container4');
    let animationPlayed = false; 

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !animationPlayed) {

                    container4.classList.add('visible');
                    container4.classList.remove('hidden');
                    animationPlayed = true; 
                }
            });
        },
        {
            threshold: 0.5,
        }
    );
    observer.observe(container4);
    window.addEventListener('beforeunload', () => {
        container4.classList.remove('visible');
        container4.classList.add('hidden');
    });
});
function adjustLayout() {
  const viewportWidth = window.innerWidth;
  const container1 = document.querySelector('.container1');
  const boxes = document.querySelectorAll('.box1, .box2, .box3, .box4');

  if (viewportWidth >= 1024) {

      container1.style.padding = '2vh 4vw';
      boxes.forEach((box) => {
          box.style.width = '40vw';
      });
  } else if (viewportWidth >= 768 && viewportWidth < 1024) {
      container1.style.padding = '2vh 3vw';
      boxes.forEach((box) => {
          box.style.width = '50vw';
      });
  } else {
      container1.style.padding = '1vh 2vw';
      boxes.forEach((box) => {
          box.style.width = '90vw';
      });
  }
}
adjustLayout();
window.addEventListener('resize', adjustLayout);
const container3 = document.querySelector('.container3');
const boxes = document.querySelectorAll('.box1, .box2, .box3, .box4');

function adjustLayout() {
    const screenWidth = window.innerWidth;

    container3.style.overflowX = 'hidden';

    if (screenWidth <= 768) {
        boxes.forEach(box => {
            box.style.width = '90%'; 
            box.style.margin = '10px auto';
        });
    } else if (screenWidth <= 1024) {
        boxes.forEach(box => {
            box.style.width = '45%';
            box.style.margin = '10px';
        });
    } else {
        boxes.forEach(box => {
            box.style.width = '25%'; 
            box.style.margin = '10px';
        });
    }
}

adjustLayout();
window.addEventListener('resize', adjustLayout);
function sendMessage() {
    document.getElementById('confirmation').style.display = 'block';

    setTimeout(function() {
        document.getElementById('confirmation').style.display = 'none';
    }, 3000);
}
function scrollToContainer() {
    document.querySelector('#container3').scrollIntoView({
        behavior: 'smooth', 
        block: 'start'      
    });
}
function scrollToContainer1() {
    document.querySelector('#container4').scrollIntoView({
        behavior: 'smooth', 
        block: 'start'      
    });
}
function scrollToContainer2() {
    document.querySelector('#container5').scrollIntoView({
        behavior: 'smooth', 
        block: 'start'      
    });
}
function scrollToContainer3() {
    document.querySelector('#container6').scrollIntoView({
        behavior: 'smooth', 
        block: 'start'      
    });
    
}
function sendMessage() {
    const name = document.querySelector('.box1p5').value.trim();
    const email = document.querySelector('.box2p5').value.trim();
    const message = document.querySelector('.box3p5').value.trim();
    const confirmation = document.getElementById('confirmation');
    
    if (!name || !email || !message) {
        confirmation.textContent = "Please fill all the details!";
        confirmation.style.color = "red";
        confirmation.style.display = "block";
    } else {
        confirmation.textContent = "Message has been sent successfully!";
        confirmation.style.color = "green";
        confirmation.style.display = "block";
    }
}


















