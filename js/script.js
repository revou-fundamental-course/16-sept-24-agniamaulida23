//Javascript

function validateForm() {
    const nama = document.forms['nama-anda']['name-input'].value
 
    if  (nama == ''){
        document.getElementById("error-name").innerHTML = "Tidak Boleh Kosong!"
        return false
    }
    setName (nama);

    return false;
 }


function setName(name) {
  document.getElementById("name").innerHTML = name;
  document.getElementById('error-name').innerHTML = "";

  return false;
}

function validateMessage(){
  const name = document.forms["message-form"]["full-name"].value
  const birthdate = document.forms["message-form"]["birth-date"].value
  const gender = document.forms["message-form"]["gender"].value
  const messages = document.forms["message-form"]["messages"].value

  if (name  == "" || birthdate == "" || gender == "" || messages == ""){
    alert("Tidak boleh kosong!");
    return false;
  }
}

replaceName();

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

// Autorun Banner Photo
setInterval(() => nextSlide(1), 2000);