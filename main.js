$('.nav-container').on('click', () => {
    if ($('.nav-container')[0].classList.value.includes('show-nav'))
        $('.nav-container').removeClass('show-nav')
    else
        $('.nav-container').addClass('show-nav')
})

let acc = document.querySelectorAll(".accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
