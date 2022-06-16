let rating = document.querySelector('.rating');
let stars = document.querySelectorAll('.fa-star-o');
let totalStars = 0;

stars.forEach((star, idx) => {
    star.dataset.rating = idx + 1;
    star.addEventListener('mouseover', onMouseOver);
    star.addEventListener('click', onClick);
    star.addEventListener('mouseleave', onMouseLeave);

});

function onMouseOver(e){
    const ratingVal = e.target.dataset.rating;

    if (!ratingVal) {
        return;
    } else {
        fill(ratingVal);
    }
}

function fill(ratingVal){
    for (let i = 0; i < 5; i++) {
        if ( i < ratingVal) {
            stars[i].classList.replace('fa-star-o', 'fa-star');
        } else {
            stars[i].classList.replace('fa-star', 'fa-star-o');
        }
    }
}

function onMouseLeave(e){
    fill(totalStars);
}

function onClick(e){
    const ratingVal = e.target.dataset.rating;
    totalStars = ratingVal;
    fill(totalStars);
    rating.innerHTML = ratingVal;
}