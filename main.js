// Bài 1
document.getElementById("btntinhnumber").onclick = function () {
  /* Đầu vào */
  // Ta cho số nhập thành biến number1, number2, number3
  var number1 = +document.getElementById("number1").value;
  var number2 = +document.getElementById("number2").value;
  var number3 = +document.getElementById("number3").value;

  // bước 2
  // Xử Lý
  // cách 1
  var tangdan = "";
  // if (number1 > number2 && number1 > number3 ) {
  //   tangdan = number3 + '<' + number2 + "<" + number1;
  // }else if (number1 > number3 && number3 > number2) {
  //   tangdan = number2 + '<' + number3 + '<' + number1;
  // } else if (number2 > number1 && number1 > number3) {
  //   tangdan = number3 + '<' + number1 + '<' + number2;
  // } else if (number2 > number3 && number3 > number1) {
  //   tangdan = number1 + '<' + number3 + '<' + number2;
  // }else if (number3 > number2 && number2 > number1) {
  //   tangdan = number1 + '<' + number2 + '<' + number3;
  // }else{
  //   tangdan = number2 + '<' + number1 + '<' + number3;
  // }

  // cách 2
  // if lồng if
  if (number1 > number2) {
    if (number2 > number3) {
      tangdan = number3 + "<" + number2 + "<" + number1;
    } else if (number1 > number3) {
      tangdan = number2 + "<" + number3 + "<" + number1;
    } else {
      tangdan = number2 + "<" + number1 + "<" + number3;
    }
  } else if (number2 > number3) {
    if (number1 > number3) {
      tangdan = number3 + "<" + number1 + "<" + number2;
    } else {
      tangdan = number1 + "<" + number3 + "<" + number2;
    }
  } else {
    tangdan = number1 + "<" + number2 + "<" + number3;
  }

  // Đầu ra
  document.getElementById("showIntotalnumber").innerHTML =
    "Thứ Tự Tăng Dần: " + tangdan;
};

// Bài 2
document.getElementById("btnhello").onclick = function () {
  // Đầu vào
  var family = +document.getElementById("family").value;

  // Bước 2 xử lý
  var xinchao = "";
  // cách 1:
  //  switch(family) {
  //   case 1: {
  //     xinchao = "Xin Chào Bố"
  //   };break
  //   case 2: {
  //     xinchao = "Xin Chào Mẹ"
  //   };break
  //   case 3: {
  //     xinchao = "Xin Chào Anh Trai"
  //   }break
  //   default : {
  //     xinchao = "Xin Chào Em Trai"
  //   }
  //  }

  // Cách 2

  if (family === 1) {
    xinchao = "Xin Chào Bố";
  } else if (family === 2) {
    xinchao = "Xin Chào Mẹ";
  } else if (family === 3) {
    xinchao = "Xin Chào Anh Trai";
  } else {
    xinchao = "Xin Chào Em Trai";
  }

  // Đầu ra
  document.getElementById("showInhello").innerHTML = xinchao;
};

/* Bài 3 */

document.getElementById("btntinhchanle").onclick = function () {
  // Đầu ra: 
  var sothu1 = +document.getElementById("number5").value;
  var sothu2 = +document.getElementById("number6").value;
  var sothu3 = +document.getElementById("number7").value;

  // Xử Lý
  var sochan = 0;
  var sole = 0;

  if (sothu1 % 2 == 0) {
    sochan++;
  }

  if (sothu2 % 2 == 0) {
    sochan++;
  }

  if (sothu3 % 2 == 0) {
    sochan++;
  }

  sole = 3 - sochan;

  // Đầu ra
  document.getElementById("showInchanle").innerHTML =
    "Số Chẵn: " + sochan + "Số Lẻ :" + sole;
};

// Bài 4

document.getElementById("btntinhtamgiac").onclick = function () {
  // Đầu vào
  var canha = +document.getElementById("canha").value;
  var canhb = +document.getElementById("canhb").value;
  var canhc = +document.getElementById("canhc").value;

  // Xử lý

  var tamgiac = "";
  if (canha == canhb && canhb == canhb) {
    tamgiac = "Đây là tam giác đều";
  } else if (canha == canhb || canha == canhc || canhb == canhc) {
    tamgiac = "Đây là tam giác cân ";
  } else if (
    canha * canha == canhb * canhb + canhc * canhc ||
    canhb * canhb == canha * canha + canhc * canhc ||
    canhc * canhc == canha * canha + canhb * canhb
  ) {
    tamgiac = "Đây là tam giác vuông";
  } else {
    tamgiac = "Một loại tam giác nào đó";
  }

  // Đầu ra
  document.getElementById("showIntamgiac").innerHTML = tamgiac;
};
