let number = document.getElementById('number');
let count = 0;

function addMinus(e) {
    if (e.key === 'ArrowLeft') {
        if (count == 0) {
            alert('Count cannot be less than 0');
        } else {
            count--;
            number.innerText = count;
        }
    }

    if (e.key === 'ArrowRight') {
        if (count == 50) {
            alert('Count cannot be greater than 50');
        } else {
            count++;
            number.innerText = count;
        }
    }
}

function decrement() {
    if (count == 0) {
        alert('Count cannot be less than 0');
    } else {
        count--;
        number.innerText = count;
    }
}

function increment() {
    if (count == 50) {
        alert('Count cannot be greater than 50');
    } else {
        count++;
        number.innerText = count;
    }
}
document.addEventListener('keydown', addMinus);
