document.getElementById('nav-toggle').addEventListener('click', function() {
    var nav = document.querySelector('.nav-links');
    if (nav.style.maxHeight && nav.style.maxHeight !== "0px") {
        nav.style.maxHeight = null;
    } else {
        nav.style.maxHeight = nav.scrollHeight + "px";
    }
});