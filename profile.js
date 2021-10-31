const favoriteColorBtn = document.querySelector('#color')
const favoritePlaceBtn = document.querySelector('#place')
const favoriteRitualBtn = document.querySelector('#ritual')

function checkColor (e) {
    e.preventDefault();

    alert('Your favorite color is blue')
}

function checkPlace (e) {
    e.preventDefault();

    alert('Your best place is Stony Creek')
}

function CheckRitual (e) {
    e.preventDefault();

    alert('Your best place for riding a bike is Bear Iceland')
}

favoriteColorBtn.addEventListener('click', checkColor);
favoritePlaceBtn.addEventListener('click', checkPlace);
favoriteRitualBtn.addEventListener('click', CheckRitual);


