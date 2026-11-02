let CartQuantity = 0;

function plus_one(){
    CartQuantity+=1;
    show_quanity();
}
function plus_two(){
    CartQuantity+=2;
    show_quanity();
}
function plus_three(){
    CartQuantity+=3;
    show_quanity();
}
function reset(){
    CartQuantity = 0;
    show_quanity();
}

function show_quanity(){
    document.getElementById("cartQuantity").innerText = CartQuantity;
}

const show_btn = document.getElementById("qnt")
const add1_btn = document.getElementById("add1");
const add2_btn = document.getElementById("add2");
const add3_btn = document.getElementById("add3");
const rst_btn = document.getElementById("rst");

show_btn.addEventListener("click",show_quanity)
add1_btn.addEventListener("click",plus_one)
add2_btn.addEventListener("click",plus_two)
add3_btn.addEventListener("click",plus_three)
rst_btn.addEventListener("click",reset)
