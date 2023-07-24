// dom html bang querySelector chi xuat ra mot cai
//querySelector trả về thẻ đầu tiên theo thứ tự HTML
document.querySelector(".title").innerHTML = "hello viet name";
//querySelector trả về toàn bộ thẻ hiện có trong file HTML
//document.querySelectorAll("trong này là css") nếu id thì sử dụng #
var tag = document.querySelectorAll(".title");
console.log("ptag: ", tag);
tag[1].style.color = "red";
tag[0].innerHTML = "caheo";