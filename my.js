let screen = document.getElementById('screen');
function thisInput(value) {
    screen.value += value;
}
function xoa(value) {
    screen.value = ''
}
function result(value) {
    let result = eval(screen.value);
    screen.value = result;
}