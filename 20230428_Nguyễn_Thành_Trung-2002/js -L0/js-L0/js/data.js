let keyLocalStorageListSP = "DANHSACHSP";
let keyLocalStorageItemCart = "DANHSACHITEMCART";
function saveLocalStorage(key = '', value = '') {
    localStorage.setItem(key, JSON.stringify(value));
 }
const listData = [
    {
        id: 1,
        img: "/js -L0/js-L0/img/Product__HOME/Nike Dunk Low SE Men_s Shoes.jpg",
        name: "Nike Dunk Low SE",
        price: 2000,
        quantity: 10
    },
    {
        id: 2,
        img: "/js -L0/js-L0/img/Product__HOME/Nike Air Force 1 Mid React Men_s Shoes.jpg",
        name: "Nike Air Force 1 Mid React",
        price: 4000,
        quantity: 16
    },
    {
        id: 3,
        img: "/js -L0/js-L0/img/Product__HOME/Nike Air Force 1 Low By You Custom Men_s_yyt.jpg",
        name: "Nike Air Force 1 Low By you",
        price: 3000,
        quantity: 12
    },
    {
        id: 4,
        img: "/js -L0/js-L0/img/Product__HOME/Nike City Rep TR Women_s Training Shoes.jpg",
        name: "Nike City rep TR",
        price: 1900,
        quantity: 17
    },
    {
        id: 5,
        img: "/js -L0/js-L0/img/Product__HOME/Nike Air Force 1 High _07 LV8 EMB Men_s_yyth.jpg",
        name: "Nike Air Force 1 High '07 LV8 EMB",
        price: 3600,
        quantity: 18
    },
    {
        id: 6,
        img: "/js -L0/js-L0/img/Product__HOME/Nike Free Metcon 4 Training Shoes.jpg",
        name: "Nike Free Metcon 4",
        price: 3500,
        quantity: 14
    },
    {
        id: 7,
        img: "/js -L0/js-L0/img/Product__HOME/air-max-95-shoes-nv8gnV.jpg",
        name: "Nike Air Max 95",
        price: 4200,
        quantity: 12
    },
    {
        id: 8,
        img: "/js -L0/js-L0/img/Product__HOME/legend-essential-3-next-nature-training-shoes-sJBRlm.jpg",
        name: "Nike Legent Essential 3 Next Nature",
        price: 1900,
        quantity: 12
    }
]