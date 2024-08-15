let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
    
    Array.from(currentWord.children).forEach((letter,i) => {
        setTimeout(()=> {
            letter.className = "letter out";
        }, i * 80)
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=> {
        letter.className = "letter behind"
        setTimeout(()=> {
            letter.className = "letter in"
        }, 340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);

// circle Skills ////////////////////////////////////////////////

const circles = document.querySelectorAll(".cercle");

circles.forEach(elem => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
});


// mix it up Portfolio Section ////////////////////////////////////

var mixer = mixitup('.portflio-gallary')


// Active Menu ////////////////////////////////////////////////
let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 80 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);


// sticky Navbar ////////////////////////////////////////////////

const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.scrollY > 50);
})

// toggle icon Navbar ////////////////////////////////////////////////

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

// Remove nav on scroll ////////////////////
window.onscroll = () => {
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}

// parallax ////////////////////

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollButton = document.querySelectorAll(".scroll-bottom");
scrollButton.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));



// See More BTN //////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    // Select all portfolio items
    const portfolioItems = document.querySelectorAll('.port-box');

    // Hide items beyond the first 8
    for (let i = 8; i < portfolioItems.length; i++) {
        portfolioItems[i].style.display = 'none';
    }

    // Check if there are more than 8 items
    if (portfolioItems.length <= 8) {
        document.getElementById('seeMoreBtn').style.display = 'none'; // Hide the "See More" button
    } else {
        // Add event listener to the "See More" button
        document.getElementById('seeMoreBtn').addEventListener('click', function() {
            // Display hidden items
            for (let i = 8; i < portfolioItems.length; i++) {
                portfolioItems[i].style.display = 'block';
            }
            // Hide the "See More" button after displaying all items
            this.style.display = 'none';
        });
    }
});







