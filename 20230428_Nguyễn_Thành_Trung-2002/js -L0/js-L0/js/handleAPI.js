// đoạn mã khai báo biến host lưu trữ URL của API
const host = "https://provinces.open-api.vn/api/";
// hàm gọi API tỉnh 
async function callAPI(api) {
  return await fetch(api)
    .then((response) => response.json())
    .then((data) => {
      renderData(data, "province");
    });
};
// chạy hàm get province
callAPI(host + "?depth=1");
// gọi API huyện
async function callApiDistrict(api) {
  return await fetch(api)
    .then((response) => response.json())

    .then((data) => {
      renderData(data.districts, "district");
      // renderData(data.wards, "ward");
    });
};
// gọi API xã
async function callApiWard(api) {
  return await fetch(api)
    .then((response) => response.json())
    .then((data) => {
      renderData(data.wards, "ward");
    });
};
// hàm render ra html 
function renderData(array, select) {
  let row = ' <option disable value="">---chọn---</option>';
  array.forEach((element) => {
    row += `<option value="${element.code}">${element.name}</option>`;
  });
  document.querySelector("#" + select).innerHTML = row;
};


// / bắt sự kiện onchangge khi click 
document.getElementById("province").addEventListener("change", function () {
  callApiDistrict(host + "p/" + this.value + "?depth=2");
  document.getElementById("district").innerHTML = '<option disable value="">---chọn---</option>';
  document.getElementById("ward").innerHTML = '<option disable value="">---chọn---</option>';
});

document.getElementById("district").addEventListener("change", function () {
  callApiWard(host + "d/" + this.value + "?depth=2");
});

document.getElementById("ward").addEventListener("change", function () {
});



let province = document.getElementById("province")
