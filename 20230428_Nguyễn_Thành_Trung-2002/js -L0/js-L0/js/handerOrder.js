
let listcar = JSON.parse(localStorage.getItem(keyLocalStorageItemCart))
let listProduct = JSON.parse(localStorage.getItem(keyLocalStorageListSP));

function getAPI() {
  fetch('http://localhost:3000/listOrder')
    .then((response) => response.json())
    .then(data => {
      try {
        renderData(data)
        data.forEach(order => {
          const listCart = order.listcart;
          updateProduct(listCart)
        })
        noBill(data)
      }
      catch (e) {
        return null;
      }
    })
}
getAPI()


let today = new Date();
let day = today.getDate(); // lấy ngày
let month = today.getMonth() + 1; // lấy tháng (lưu ý tháng bắt đầu từ 0 nên cần cộng thêm 1)
let year = today.getFullYear(); // lấy năm
function renderData(data) {
  let btnlistOrder = document.querySelector(".productConfirm_item");
  let runOder = data.map((item) => {
    return `
                   <div class="productConfirm-lisproduct">
                   <b class="confirm__code">${item?.id}
                       <a class="detail" href="#">details </a> 
                     </b>
               </div>
                    <b class="confirm__CustomerName">${item?.ho} ${item?.ten}</b>
                    <b class="confirm__Date">${day + '/' + month + '/' + year}</b>
                    <b class="confirm__TotalQuantity">1</b>
                    <b class="confirm__TotalPrice">$${item?.Total}</b>
                    <button class="confirm__Return" onclick = "handerDeleteData(${item?.id})"> Return </button>
    `
  });
  btnlistOrder.innerHTML = runOder.join("");
}





async function handerDeleteData(id) {
  fetch('http://localhost:3000/listOrder' + '/' + id)
    .then((response) => response.json())
    .then(function (data) {

      let listProduct = JSON.parse(localStorage.getItem(keyLocalStorageListSP));
      const listCart = data.listcart;
      listProduct.forEach((product) => {
        listCart.forEach((cart) => {
          if (product.id === cart.idSP) {
            product.quantity = product.quantity + cart.soLuong
          }

        })
      });
      saveLocalStorage(keyLocalStorageListSP, listProduct)
    })



  await fetch('http://localhost:3000/listOrder' + '/' + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(data => {

      renderData(data)
      noBill(data)
    })
}

function renderUpdate() {
  document.querySelector(".header__cart-number").innerHTML = `${listcar.length}`;
  renderData(data)
}
renderUpdate()
function noBill(data) {
  if (data.length === 0) {
    document.querySelector(".product__confirm").style.display = "none";
  }
}
