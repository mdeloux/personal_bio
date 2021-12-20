function togglediv() {
    var myPersonal = document.getElementById('item');
    var displaySetting = myPersonal.style.display;
    var firstButton = document.getElementById('firstButton');
    if (displaySetting == 'block') {
        myPersonal.style.display = 'none';
        firstButton.innerHTML = 'Personal Life';
    } else {
        myPersonal.style.display = 'block';
        firstButton.innerHTML = 'Personal Life';
    }
}
function toggledivtwo() {
    var myPersonal = document.getElementById('work');
    var displaySetting = myPersonal.style.display;
    var firstButton = document.getElementById('secondButton');
    if (displaySetting == 'block') {
        myPersonal.style.display = 'none';
        firstButton.innerHTML = 'Professional Life';
    } else {
        myPersonal.style.display = 'block';
        firstButton.innerHTML = 'Professional Life';
    }
}
function toggledivthree() {
    var myPersonal = document.getElementById('fun');
    var displaySetting = myPersonal.style.display;
    var firstButton = document.getElementById('thirdButton');
    if (displaySetting == 'block') {
        myPersonal.style.display = 'none';
        firstButton.innerHTML = 'Free Time';
    } else {
        myPersonal.style.display = 'block';
        firstButton.innerHTML = 'Free Time';
    }
}