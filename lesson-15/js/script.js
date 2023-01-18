function sumInput(sum = 0) {
    
    let arr = [];
    let num = 0;

    do {
        num = prompt('enter');
        arr.push(num);
    } while(!(num === "" || num === null || !isFinite(num)));

    let invalid = arr.length - 2;

    for(let i = 0; i <= invalid; i++) {
        sum += +arr[i];
    }

    alert(sum);
}

sumInput();
