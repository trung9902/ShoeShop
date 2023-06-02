
// let listcar = JSON.parse(localStorage.getItem(keyLocalStorageItemCart))
let listcart = JSON.parse(localStorage.getItem('DANHSACHITEMCART'));
function confirmBuy() {
   // validate thông tin nhập vào
   function validate() {
      let check = false;
     
      if(checkemptyError([infoEmaii, infoPhone, firtName, lastName, arpatment]))  return check = false;  
        if(!checkEmailError(infoEmaii)) return check = false;
        if(checkLengthError(infoPhone, 10, 15, 'chũ số')) return check = false;
      else  return  check = true;
     
   }




   if (validate()) {
      let listcar = JSON.parse(localStorage.getItem('DANHSACHITEMCART'))
      let list = {
         id: generateRandomId(),
         ho: lastName.value,
         ten: firtName.value,
         email: infoEmaii.value,
         phone: infoPhone.value,
         apartmentNumber: arpatment.value,
         mesenger: mesenger.value,
         listcart: listcar,
         Total: listcar.reduce((sum, listcar) => {
            return sum + listcar.price * listcar.soLuong;
         }, 0)
      };
      createData(list);
      renderUpdate();
      updateProduct();

   }
}



function saveLocalStorage(key = '', value = '') {
   localStorage.setItem(key, JSON.stringify(value));
}
// 
function updateProduct() {

   listProduct.forEach((product) => {
      listcart.forEach((cart) => {
         if (product.id === cart.idSP) {
            product.quantity = product.quantity - cart.soLuong
         }

      })
   });
   saveLocalStorage('DANHSACHSP', listProduct)
   localStorage.removeItem('DANHSACHITEMCART');
   renderUpdate()
}

function createData(data) {
   fetch('http://localhost:3000/listOrder', {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
   })
      .then((response) => response.json())
      .then(data => {
         location.href = 'bills.html';
      })
}
function deleteData(data) {
   fetch('http://localhost:3000/listOrder', {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
   })
      .then((response) => response.json())

}