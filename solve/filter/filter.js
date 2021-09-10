
export const FilterModule = () => {

    //Write solution to the Filter task inside this FilterModule function.
    let btnAll = document.getElementById('btnAll');
    let btnRed = document.getElementById('btnRed');
    let btnYellow = document.getElementById('btnYellow');
    let btnGreen = document.getElementById('btnGreen');
    filterObjects("all");

    btnAll.addEventListener('click', () => {
        filterObjects('all');
    })

    btnRed.addEventListener('click', () => {
        filterObjects('red');
    })

    btnYellow.addEventListener('click', () => {
        filterObjects('yellow');
    })

    btnGreen.addEventListener('click', () => {
        filterObjects('green');
    })


    function filterObjects(c) {
        let x, i;
        x = document.getElementsByClassName('box');
        if(c == "all") c = "";
        for(i = 0; i < x.length; i++) {
            removeClass(x[i], "show");
            if(x[i].className.indexOf(c) > -1) addClass(x[i], "show")
        }

    }

    function addClass(element, name) {
        let i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for(i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {
                element.className += " " + arr2[i];
            }
        }
    }

    function removeClass(element, name) {
        let i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
    }
}