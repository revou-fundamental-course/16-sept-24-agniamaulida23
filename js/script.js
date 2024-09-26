//Javascript



function replaceName() {
    let name = prompt('Masukkan nama anda');
     console.log(name);
     document.getElementById('user-name').innerHTML = name;
}

function validateform() {
    let inputName = document.getElementById('input-name').Value;
    if (inputName == '') {
        alert('Inputan Kosong');
    }  else {
        document.getElementById('result-form').innerHTML = inputName;
        alert('Sukses Submit Form');
    }
}

let indexSlide = 1;
showSlide();

function nextSlide(n) {
    showSlide(indexSlide += n);
}

function showSlide(index) {
    // Get DOM semua Image Banner
    let listimage = document.getElementsByClassName('photo-banner');
    console.log(indexSlide);

    // Reset IndexSlide 
   if (index > listimage.length) indexSlide = 1

    // Hide All Images
    let i = 0;
    while (i < listimage.length) {
        listimage[i].style.display = 'none';
        i++;
    }

    // Show Selected Image
    listimage[indexSlide - 1].style.display =  'block';
    console.log(indexSlide);
}


setInterval(() => nextSlide(1), 2000);