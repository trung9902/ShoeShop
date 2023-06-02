

// bài 1
let product_list = document.querySelector(".product-list")
let listcar = JSON.parse(localStorage.getItem(keyLocalStorageItemCart))
let getlistdata = JSON.parse(localStorage.getItem(keyLocalStorageListSP))
let btnMobile = document.querySelector(".header__nav")




// bai 2
function saveLocalStorage(key = '', value = '') {
    localStorage.setItem(key, JSON.stringify(value));
}
function saveData() {
    showproduct = JSON.parse(localStorage.getItem(keyLocalStorageListSP));

    // saveLocalStorage(keyLocalStorageListSP, listData)
}
// bai3
function run() {
    let runView = showproduct.map((item) => {
        return (
            `     <div class="product__items">
            <div class="product-item">
            <div class=""><img class="product__img" src="${item?.img}" alt=""></div>
                <button onclick='addSP(${item?.id},${item?.price})'>
                    <i class="ti-shopping-cart icon-shopp" ></i>
                </button>

                <div class="product__box-tittle">
                    <h4 class="product-tittle-begin">${item?.name}</h4>
                    <div class="product-tittle-end">
                        <h3 class="Total">$${item?.price}</h3>
                        <h3 class="Quantity">Quantity:${item?.quantity}</h3>
    
                    </div>
                </div>
    
            </div>
        </div>`
        )
    });

    product_list.innerHTML = runView.join("");

}
//bài 4
// tạo ra đối tượng item giỏ hàng 
// const button__addCarts = document.querySelectorAll('.icon-shopp');
function carObject(idSP, soLuong, price) {
    let itemCart = new Object()
    itemCart.idSP = idSP
    itemCart.soLuong = soLuong
    itemCart.price = price
    return itemCart;

}
//  thêm đối tượng vào aray
function getListcart() {

    let listItem = new Array();
    // lấy dữ liệu trong localstorate
    let jsonlistItem = localStorage.getItem(keyLocalStorageItemCart);
    // chuyen file json thanh mot doi tuong tuong ung 
    if (jsonlistItem != null) {
        listItem = JSON.parse(jsonlistItem);
    }
    return listItem;
}
// lưu vào local
function saveLocalsorate(listItemCart) {
    // chuyển thành chuỗi json
    let jsonListItem = JSON.stringify(listItemCart);
    // lưu vào localstorate
    localStorage.setItem(keyLocalStorageItemCart, jsonListItem);
}
// hàm add sản phẩm 
function addSP(idSP, price) {
    let listItemCart = getListcart();
    // Thêm sản phẩm vào danh sách giỏ hàng
    let isExistInList = false;
    for (let i = 0; i < getlistdata.length; i++) {
        if (getlistdata[i].id === idSP) {
            // Kiểm tra số lượng sản phẩm trong kho
            if (getlistdata[i].quantity <= 0) {
                alert("Sản phẩm đã hết hàng");
                return;
            }
            break;
        }
    }
    for (let i = 0; i < listItemCart.length; i++) {
        if (listItemCart[i].idSP === idSP) {
            // Kiểm tra số lượng sản phẩm trong kho
            let quantityInStock = 0;
            for (let j = 0; j < getlistdata.length; j++) {
                if (listData[j].id === idSP) {
                    quantityInStock = getlistdata[j].quantity;
                    break;
                }
            }
            // Nếu số lượng sản phẩm trong giỏ hàng đã vượt quá số lượng mặc định thì hiển thị thông báo và không thêm sản phẩm vào giỏ hàng
            if (listItemCart[i].soLuong >= quantityInStock) {
                alert("Số lượng sản phẩm đã đạt tối đa");
                return;
            }
            // Tăng số lượng sản phẩm và cập nhật lại danh sách giỏ hàng
            listItemCart[i].soLuong++;
            isExistInList = true;
            break;
        }
    }
    // Nếu sản phẩm chưa tồn tại trong giỏ hàng thì thêm mới sản phẩm vào danh sách giỏ hàng
    if (!isExistInList) {
        let itemCart = carObject(idSP, 1, price);
        listItemCart.push(itemCart);
    }
    // Lưu danh sách giỏ hàng và danh sách sản phẩm vào local storage
    saveLocalsorate(listItemCart);
    renderUpdate();

}
function renderUpdate() {
    listcar = JSON.parse(localStorage.getItem(keyLocalStorageItemCart))

    document.querySelector(".header__cart-number").innerHTML = `${listcar.length}`;
    // saveLocalsorate(listcar)
    run();
    viewBoxCart()
}
function runProduct() {
    saveData()
    run();
    renderUpdate()
    viewBoxCart()
}
runProduct()

// hiển thị mobie


function viewBoxCart() {
    let cartShow = document.querySelector(".header_cart-item")
    let runviewBoxCart = listcar.map((item) => {
        return `
        <div class="header_cart-box"><img class="header_cart-img"
                            src="${getlistdata[item.idSP - 1].img}" alt="">
                        <b class="header_cart-name">${getlistdata[item.idSP - 1].name}</b>
                        <b class="header_cart-price">$${getlistdata[item.idSP - 1].price}</b>
                    </div>
`
    });
    cartShow.innerHTML = runviewBoxCart.join("")

}


function handlerMobile() {
    if (btnMobile.style.display === 'none' || !btnMobile.style.display) {
        btnMobile.style.display = 'block';
    } else {
        btnMobile.style.display = 'none';
        location.reload();
    }
}




