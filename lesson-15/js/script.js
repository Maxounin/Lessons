function sumInput(sum = 0) {
    
    let arr = [];
    let i = 0;

    do {
        i = prompt('enter');
        arr.push(i);
    } while(!(i === "" || i === null || !isFinite(i)));

    let odd = arr.length - 2;

    for(let i = 0; i <= odd; i++) {
        sum += +arr[i];
    }

    alert(sum);
}

sumInput();
