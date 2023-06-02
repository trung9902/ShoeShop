
let btnMobile = document.querySelector(".header__nav")

function renderUpdate() {
    listcar = JSON.parse(localStorage.getItem(keyLocalStorageItemCart))
  
    document.querySelector(".header__cart-number").innerHTML = `${listcar.length}`;
   renderData()
}
function start(){
    renderData()
    renderUpdate()
}
start()
function handlerMobile() {
    if (btnMobile.style.display === 'none' || !btnMobile.style.display) {
        btnMobile.style.display = 'block';
      } else {
        btnMobile.style.display = 'none';
        location.reload();
      }
  }