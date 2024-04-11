function workbut(){

}
function homebut(){

}
function aboutbut() {
}
function yutube(){
window.open("https://www.youtube.com/channel/UCphezTUSi_LeecsJzAXHo1Q");
}
function linked(){
window.open("https://www.linkedin.com/in/brian-frankena-308699211/");
}
function behan(){
window.open("https://www.behance.net/brianffranken");
}

function xbut(){
    window.open("https://twitter.com/Mont_Entt");
}
function sendMail(event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    const email = 'montentertainment23@gmail.com';
    const name = document.getElementById('fname').value;
    const subject = encodeURIComponent(document.getElementById('subject').value);
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${name}`;
    window.location.href = mailtoLink;
}

function initializeTypedText() {
    const typedText = new Typed("#typed-text", {
        strings: ["Brian Frankena", "MontEntertainment", "Montzy"], // You can add more strings if needed
        typeSpeed: 50, // Adjust the typing speed
        backSpeed: 25, // Adjust the backspacing speed
        startDelay: 100, // Delay before typing starts
        backDelay: 1000, // Delay before backspacing
        showCursor: true, // Show the typing cursor
        cursorChar: "|", // Typing cursor character
        loop: true, // Loop the typing animation
    });
}
// Event listener for page load
window.addEventListener("load", () => {
    // Initialize Typed.js after the page content is loaded
    initializeTypedText();
});

function setDefaultColor(word, color) {
    var content = document.getElementById('abtBox1').innerHTML;
    var replacedContent = content.replace(new RegExp(word, 'g'), `<span style="color: ${color}">${word}</span>`);
    document.getElementById('abtBox1').innerHTML = replacedContent;
}

setDefaultColor('Brian Frankena', 'lightgreen');
setDefaultColor('good', 'lightgreen');
setDefaultColor('open mind', 'pink');
setDefaultColor('hard', 'red');
setDefaultColor('indie game developer', 'lightgreen');
setDefaultColor('Independence', 'lightblue');
setDefaultColor('connecting', 'lightgreen');

function setDefaultColorNew(word, color) {
    var content = document.getElementById('workCont3').innerHTML;
    var replacedContentbox = content.replace(new RegExp(word, 'g'), `<span style="color: ${color}">${word}</span>`);
    document.getElementById('workCont3').innerHTML = replacedContentbox;
}
setDefaultColorNew('C#', 'purple');
setDefaultColorNew('Javascript', 'yellow');
setDefaultColorNew('HTML', 'black');
setDefaultColorNew('CSS', 'blue');

var currentSlide = 0;
var slides = ["img/youtubeIMG.jpg", "img/faceimg.jpg"]; // Add the paths to your images here

function showSlide(index) {
    var img = document.getElementById("slideshowImg");
    if (index < 0) {
        currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }
    img.src = slides[currentSlide];
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Show the initial slide
showSlide(currentSlide);




