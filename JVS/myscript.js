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
