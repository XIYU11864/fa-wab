import * as wasm from "wasm-fa";

var input = document.getElementById('myInput');
input.addEventListener('input', function () {
    this.value = this.value.replace(/[^01*()+]/g, '');
});
input.addEventListener('keypress',  (e) => {
    if (e.key === 'Enter') {
        handleClick();
    }
});

let button = document.querySelector("button");
button.addEventListener("click", () => {
    handleClick();
});

function handleClick() {
    var input = document.getElementById('myInput');
    var value = input.value;
    value = value.replace(/\+/g,'\|');
    var result = wasm.get_ans(value);
    let [ans, rg] = result.split('@');

    var output = document.getElementById('output');
    var outputrg = document.getElementById('rg');

    output.textContent = ans;
    outputrg.textContent = rg;
    console.log(result);
}