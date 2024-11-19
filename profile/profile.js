
document.getElementById('toggle-btn').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});
document.getElementById('toggle-btn').addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active'); // Toggle the active class
});
let currentIndex = 0;
const cardsToShow = 2;

function showSlides(index) {
    const slides = document.querySelectorAll('.card-container > .card');
    const totalCards = slides.length;

    currentIndex = index < 0 ? totalCards - 1 : index % totalCards;

    const offset = -currentIndex * (100 / cardsToShow);
    document.querySelector('.card-container').style.transform = `translateX(${offset}%)`;

    updateDots();
}

function currentSlide(index) {
    showSlides(index - 1); // Adjust for zero-based index
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.className = (i === currentIndex) ? 'dot active' : 'dot';
    });
}

// Initialize the slider
showSlides(currentIndex);










const monthYear = document.getElementById("month-year");
const datesContainer = document.getElementById("dates");
const popup = document.getElementById("popup");
const popupDate = document.getElementById("popup-date");

const info = {
    1: "HTML Information",
    3: "CSS Information",
    5: "JavaScript Information",
    7: "ReactJS Information",
    9: "Azure Information",
    11: "Python Information",
};

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function renderCalendar(month, year) {
    datesContainer.innerHTML = "";
    monthYear.textContent = `${new Date(year, month).toLocaleString("default", {
        month: "long",
    })} ${year}`;
    
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        datesContainer.appendChild(document.createElement("div"));
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElem = document.createElement("div");
        dayElem.className = "date";
        dayElem.textContent = day;
        dayElem.dataset.day = day;
        dayElem.onclick = () => showPopup(day);
        datesContainer.appendChild(dayElem);
    }
}

function moveMonth(direction) {
    currentMonth += direction;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear -= 1;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear += 1;
    }
    renderCalendar(currentMonth, currentYear);
}

function showPopup(day) {
    if (info[day]) {
        popupDate.textContent = info[day];
        popup.style.display = "block";
    }
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

renderCalendar(currentMonth, currentYear);


//3d
// JavaScript for opening and closing the popup
function openPopup(cardNumber) {
    const popup = document.getElementById("popupi");
    const title = document.getElementById("popup-title");
    const description = document.getElementById("popup-description");

    switch (cardNumber) {
        case 1:
            title.innerText = "HTML";
            description.innerText = "HTML is the standard markup language for creating web pages.";
            break;
        case 2:
            title.innerText = "CSS";
            description.innerText = "CSS is used for styling and designing web pages.";
            break;
        case 3:
            title.innerText = "JavaScript";
            description.innerText = "JavaScript is a programming language for the web.";
            break;
        case 4:
            title.innerText = "ReactJS";
            description.innerText = "ReactJS is a JavaScript library for building user interfaces.";
            break;
        case 5:
            title.innerText = "Azure & DevOps";
            description.innerText = "Azure & DevOps help with cloud computing and development workflows.";
            break;
        case 6:
            title.innerText = "Python";
            description.innerText = "Python is a versatile programming language.";
            break;
        default:
            title.innerText = "Unknown";
            description.innerText = "No description available.";
    }

    popup.style.display = "flex";
}

function closePopup() {
    const popup = document.getElementById("popupi");
    popup.style.display = "none";
}