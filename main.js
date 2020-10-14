$('.nav-container').on('click', () => {
    if ($('.nav-container')[0].classList.value.includes('show-nav'))
        $('.nav-container').removeClass('show-nav')
    else
        $('.nav-container').addClass('show-nav')
})