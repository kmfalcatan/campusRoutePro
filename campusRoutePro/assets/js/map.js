

function popUp2(){
    var popUp = document.querySelector('.subDestinationContainer');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
    }
}

 // Function to zoom in
function zoomIn() {
        var mapContainer = document.querySelector('.subContainer');
        var currentScale = parseFloat(mapContainer.style.transform.replace('scale(', '')) || 1;
        var newScale = currentScale + 0.1;
        mapContainer.style.transform = 'scale(' + newScale + ')';
    }

    // Function to zoom out
    function zoomOut() {
        var mapContainer = document.querySelector('.subContainer');
        var currentScale = parseFloat(mapContainer.style.transform.replace('scale(', '')) || 1;
        var newScale = currentScale - 0.1;
        mapContainer.style.transform = 'scale(' + newScale + ')';
    }

var sidebar = document.querySelector('.subDestinationContainer');
var hideButton = document.querySelector('.subCloseButtonContainer');
var rotateImg = document.querySelector('.close');

hideButton.addEventListener('click', function() {
    if (sidebar.classList.contains('subDestinationContainer')) {
        sidebar.classList.remove('subDestinationContainer');
        sidebar.classList.add('openSideBar');
    } else {
        sidebar.classList.add('subDestinationContainer');
        sidebar.classList.remove('openSideBar');
    }

    if(rotateImg.classList.contains('rotate')){
        rotateImg.classList.remove('rotate');
        rotateImg.classList.add('close');
    } else {
        rotateImg.classList.add('rotate');
        rotateImg.classList.remove('close');
    }

});

function popUp1(){
    var popUp = document.querySelector('.infoContainer');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp3(){
    var popUp = document.querySelector('.infoContainer1');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp4(){
    var popUp = document.querySelector('.infoContainer2');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp5(){
    var popUp = document.querySelector('.infoContainer3');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp6(){
    var popUp = document.querySelector('.infoContainer4');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp7(){
    var popUp = document.querySelector('.infoContainer5');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp8(){
    var popUp = document.querySelector('.infoContainer6');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp9(){
    var popUp = document.querySelector('.infoContainer7');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp43(){
    var popUp = document.querySelector('.infoContainer8');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp11(){
    var popUp = document.querySelector('.infoContainer9');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp12(){
    var popUp = document.querySelector('.infoContainer10');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp13(){
    var popUp = document.querySelector('.infoContainer11');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp14(){
    var popUp = document.querySelector('.infoContainer12');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp15(){
    var popUp = document.querySelector('.infoContainer13');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp16(){
    var popUp = document.querySelector('.infoContainer14');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp17(){
    var popUp = document.querySelector('.infoContainer15');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp18(){
    var popUp = document.querySelector('.infoContainer16');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}
function popUp19(){
    var popUp = document.querySelector('.infoContainer17');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp20(){
    var popUp = document.querySelector('.infoContainer18');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp21(){
    var popUp = document.querySelector('.infoContainer19');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp22(){
    var popUp = document.querySelector('.infoContainer20');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp23(){
    var popUp = document.querySelector('.infoContainer21');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp24(){
    var popUp = document.querySelector('.infoContainer22');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp25(){
    var popUp = document.querySelector('.infoContainer23');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp26(){
    var popUp = document.querySelector('.infoContainer24');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp27(){
    var popUp = document.querySelector('.infoContainer25');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp28(){
    var popUp = document.querySelector('.infoContainer26');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp29(){
    var popUp = document.querySelector('.infoContainer27');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp30(){
    var popUp = document.querySelector('.infoContainer29');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp291(){
    var popUp = document.querySelector('.infoContainer28');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp31(){
    var popUp = document.querySelector('.infoContainer30');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp32(){
    var popUp = document.querySelector('.infoContainer31');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp33(){
    var popUp = document.querySelector('.infoContainer32');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp34(){
    var popUp = document.querySelector('.infoContainer33');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp35(){
    var popUp = document.querySelector('.infoContainer34');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp36(){
    var popUp = document.querySelector('.infoContainer35');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp37(){
    var popUp = document.querySelector('.infoContainer36');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp38(){
    var popUp = document.querySelector('.infoContainer37');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp39(){
    var popUp = document.querySelector('.infoContainer38');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp40(){
    var popUp = document.querySelector('.infoContainer39');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}

function popUp41(){
    var popUp = document.querySelector('.infoContainer40');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}
function popUp42(){
    var popUp = document.querySelector('.infoContainer41');

    if(popUp.style.display === 'none'){
        popUp.style.display = 'block';
    } else{
        popUp.style.display = 'none'
    }
}