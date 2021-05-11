// Ohh boy! this was the toughest part amonst but at the end it was worth it
// afterall it was the brain of the keyboard.
// Nothing highly advanced or extraordinay here, just simple JavaScript to make the keyboard functional,
// if it doesn't works, what are the aesthetics worth then isn't it?


var output_text = "";
var caps = true;

function button_clicked(character) {
    if (caps) {
        output_text = output_text + character;
    } else {
        var lower_character = character.toLowerCase();
        output_text = output_text + lower_character;
    }

    var output = document.getElementById("keys_output");
    output.textContent = output_text;
}

function caps_clicked() {
    var caps_btn = document.getElementById("caps_btn");
    if (caps) {
        caps_btn.textContent = "Caps Lk: Of";
        caps = false;
    } else {
        caps_btn.textContent = "Caps Lk: On";
        caps = true;
    }
}
function clear_clicked(character) {
    var output = document.getElementById("keys_output");
    output.textContent = "";
    output_text = "";
}
function spcbar_clicked(character) {
    output_text = output_text + " ";
    var output = document.getElementById("keys_output");
    output.textContent = output_text
}