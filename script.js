// function hamburger() {
//     const navBar = document.querySelector(".navbar");
//     navBar.style.display = 'flex';
// }


function hamburger() {
    const navBar = document.querySelector(".navbar");

    if (navBar.style.display == '' || navBar.style.display == 'none') {
        navBar.style.display = 'flex' 
    } else {
        navBar.style.display = 'none'
    }
}