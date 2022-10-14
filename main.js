var btnLuong = document.getElementById("btnLuong");
btnLuong.onclick = function () {
  var txtNgay = document.getElementById("txtNgay").value;
  // txtNgay = parseInt("txtNgay");
  var tong = txtNgay * 100000;
  var result = "Tổng Lương Là: " + tong;
  var divStyle = document.getElementById("divStyle");
  divStyle.innerHTML = result;
}
var btnTB = document.getElementById("btnTB").onclick = function () {
  var nb1 = document.getElementById("nb1").value;
  var nb2 = document.getElementById("nb2").value;
  var nb3 = document.getElementById("nb3").value;
  var nb4 = document.getElementById("nb4").value;
  var nb5 = document.getElementById("nb5").value;
  nb1 = parseInt(nb1);
  nb2 = parseInt(nb2);
  nb3 = parseInt(nb3);
  nb4 = parseInt(nb4);
  nb5 = parseInt(nb5);
  var tong = nb1 + nb2 + nb3 + nb4 + nb5;
  var TB = tong / 5;
  var result = "Kết quả là: " + TB;
  var divStyle2 = document.getElementById("divStyle2");
  divStyle2.innerHTML = result;
}


var btnUSD = document.getElementById("btnUSD").onclick = function () {
  var txtUSD = document.getElementById("txtUSD").value;
  var tong = txtUSD * 23500;
  var result = "VND: " + tong;
  var divStyle1 = document.getElementById("divStyle1");
  divStyle1.innerHTML = result;
}


var btnCv = document.getElementById("btnCv").onclick = function () {
  var txtCd = document.getElementById("txtCd").value;
  var txtCr = document.getElementById("txtCr").value;
  txtCd = parseInt(txtCd);
  txtCr = parseInt(txtCr);
  var tong = txtCd + txtCr;
  var chuvi = tong * 2;
  var result = "Chu vi là: " + chuvi;
  var divStyle4 = document.getElementById("divStyle4");
  divStyle4.innerHTML = result;
}
var btnDt = document.getElementById("btnDt").onclick = function () {
  var txtCd = document.getElementById("txtCd").value;
  var txtCr = document.getElementById("txtCr").value;
  txtCd = parseInt(txtCd);
  txtCr = parseInt(txtCr);
  var tong = txtCd * txtCr;
  var result = "Diện tích là: " + tong;
  var divStyle4 = document.getElementById("divStyle4");
  divStyle4.innerHTML = result;
}



var btnSo = document.getElementById("btnSo").onclick = function () {
  var txtSo = document.getElementById("txtSo").value;
  // txtSo = parseInt(txtSo);
  var chuc = Math.floor(txtSo % 100 / 10);
  var dv = txtSo % 10;
  var tong = chuc + dv;
  var result = "Kết quả là: " + tong;
  var divStyle4 = document.getElementById("divStyle5");
  divStyle5.innerHTML = result;
}
