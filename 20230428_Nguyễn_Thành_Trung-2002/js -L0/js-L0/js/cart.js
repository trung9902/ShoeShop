let product__lists = document.querySelector(".product-lists")
let listcar = JSON.parse(localStorage.getItem(keyLocalStorageItemCart))
let getlistdata = JSON.parse(localStorage.getItem(keyLocalStorageListSP))
let styleNoProductCart = document.querySelector(".no-product")
let styleProductCart = document.querySelector(".product-cart-items")
let styleConfirmCart = document.querySelector(".modal")
let closeCart = document.querySelector(".ti-close")
let btnMobile = document.querySelector(".header__nav")

// hàm lưu vào local
function saveLocalStorage(key = '', value = '') {
  localStorage.setItem(key, JSON.stringify(value));
}
// lưu dữ liệu liscart vào Localsorate
function saveLocalsorate(listcar) {
  // chuyển thành chuỗi json
  let jsonListItem = JSON.stringify(listcar);
  // lưu vào localstorate
  localStorage.setItem(keyLocalStorageItemCart, jsonListItem);
  if (listcar.length === 0) {
    localStorage.removeItem(keyLocalStorageItemCart);
  }
}
// } xóa phần tử hỏi giở hàng 
 function popCart(listcar, idSP) {

  const deleteobject = listcar.findIndex(item => item.idSP === idSP)
  if (deleteobject > -1) {
    listcar.splice(deleteobject, 1)
    renderUpdate()
  }
  if (listcar.length === 0) {
    styleNoProductCart.style.display = "block"
    styleProductCart.style.display = "none"
    document.querySelector(".header__cart-number").innerHTML = ''
  }
  saveLocalsorate(listcar);
  renderUpdate()
  showCart();
}
// shoư trang không hiển thị sản phẩm 
function noProduct() {

  if (listcar === null) {
    styleNoProductCart.style.display = "block"
    styleProductCart.style.display = "none"
  }
}
// show sản phẩm khi bấm addd sản phẩm 
function showCart() {
  let runView = listcar.map(
    (item) => {
      return (
        `   <div class="product__item">
              <div class="product__item-shoe"><img class="shoe__img" src="${getlistdata[item.idSP - 1].img}" alt="">
                <div class="shoe__tittle">
                  <h3 class="shoe-name">${getlistdata[item.idSP - 1].name}</h3>
                  <h4 class="shoe-quantity">Quantity:${getlistdata[item.idSP - 1].quantity}</h4>
                </div>
            </div>
              <div class="shoe__button-quantity">
                <button class="button-quantity" onclick ="minus(${item?.idSP})">-</button>
              <input class="input-quantity"  type="text" value="${item?.soLuong}" readonly>
              <button class="button-quantity" onclick ="plus(${item?.idSP})">+</button>
              </div>
              <b class="shoe__Subtotal">$${item.price}</b>
              <b class="shoe__Total">$${(getlistdata[item.idSP - 1].price * item.soLuong)}</b>
              <i class="ti-close close-cart" onclick ="popCart(listcar,${item?.idSP})"></i>

          </div> `
      )

    });
  product__lists.innerHTML = runView.join("");
}

// render ra tổng giá và tổng sản phẩm 
function renderUpdate() {
  listcar = JSON.parse(localStorage.getItem(keyLocalStorageItemCart))

  document.querySelector(".header__cart-number").innerHTML = `${listcar.length}`;
  document.querySelector(".product__TotalView").innerHTML = `Total: $${listcar.reduce((sum, listcar) => {
    return sum + listcar.price * listcar.soLuong;
  }, 0)}`;
  if (listcar.length === 0) {
    document.querySelector(".header__cart-number").style.display = "none"
  }
  saveLocalsorate(listcar)
  showCart()
}

// hàm trừ
function minus(idSP) {
  // Kiểm tra xem sản phẩm có trong giỏ hàng hay không
  const product = listcar.find(item => item.idSP === idSP);
  if (product) {
    // Giảm số lượng sản phẩm nếu số lượng > 1
    if (product.soLuong > 1) {
      product.soLuong--;
      saveLocalsorate(listcar);
      renderUpdate();
    }
      else if (product.soLuong === 1) {
      const result = confirm("Bạn có Chắc chắn muốn bỏ sản phẩm này?");
      if (result) {
        popCart(listcar, idSP)
      } else {
        product.soLuong = 1;
        saveLocalsorate(listcar);
      renderUpdate();
      }
    }
  }
}
// hàm cộng 
function plus(idSP) {
  // Kiểm tra xem sản phẩm có trong giỏ hàng hay không
  const product = listcar.find(item => item.idSP === idSP);
  if (product) {
    // Tăng số lượng sản phẩm
    if(product.soLuong < getlistdata[idSP -1].quantity){
      product.soLuong++;
      // getlistdata[idSP -1].quantity = getlistdata[idSP -1].quantity - product.soLuong
      saveLocalStorage(keyLocalStorageListSP, getlistdata)
      saveLocalsorate(listcar);
      renderUpdate();
    }
  }
}
// show trang nhập thộng tin để thanh toán
function showConfirm(){
  styleConfirmCart.style.display = "block"
}
// đóng trang nhập thông tin
function closeConfirm(){
  styleConfirmCart.style.display = "none"
}
// chạy các hàm 
function runCart(){

  noProduct()
  showCart();
  renderUpdate()
}
runCart()

function handlerMobile() {
  if (btnMobile.style.display === 'none' || !btnMobile.style.display) {
      btnMobile.style.display = 'block';
    } else {
      btnMobile.style.display = 'none';
      location.reload();
    }
}