
export const ToggleModule = () => {

    //Write solution to the Toggle task inside this ToggleModule function.
    let myDiv = document.querySelector('#myDiv');
    let toggBtn = document.querySelector('#toggBtn');

    toggBtn.addEventListener('click', function() {
        if (myDiv.innerHTML === 'OFF') {
            myDiv.innerHTML = 'ON';
            myDiv.classList.add('on');
        } else {
            myDiv.innerHTML = 'OFF';
            myDiv.classList.remove('on');
        }
    })
    
}

