let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
let video = document.getElementById('macVideo');

// Colorful Scrollbar
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight)*100;
    progress.style.height = progressHeight + "%";
}

// Mac video fading
window.addEventListener('scroll', function(){
    let value = 1 + window.scrollY/-600;
    video.style.opacity = value;
})

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
