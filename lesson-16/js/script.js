let validation = document.getElementById('validation'),
    arr =[];

function valid() {
    for (let elem of document.getElementsByClassName('inp')) {
        if (elem.classList.contains('check')){
            arr.push(elem.checked);
        } else {
            arr.push(elem.value);
        }
    }

    if (Boolean(arr[0]) && Boolean(arr[1]) && Boolean(arr[2])) {
        return true;
    } else {
        return false;
    }

}

validation.onsubmit = function (event) {
    if(valid()) {

       if(!isNaN(+arr[1])) {
           return true;
       } else {
           alert('Заполните все поля правильно!');
       }

    } else {
        alert('Не все поля заполнены');
    }

    arr = [];

    return false;
}