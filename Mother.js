let click = document.querySelector('.click');
click.addEventListener('click', function() {
    let img = document.querySelectorAll('.img');
    let imgfirst = document.querySelectorAll('.img1');
    click.style.display = 'none'
    for (let i = 0; i < img.length; i++) {
        img[i].style.opacity = 1
    }
    for (let i = 0; i < imgfirst.length; i++) {
        imgfirst[i].style.opacity = 1
    }
    /* img.style.opacity = 0
    imgfirst.style.opacity = 0 */
})