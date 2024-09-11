onst shuffle = 0;

function generate_header() {
    document.addEventListener('DOMContentLoaded', function() {
        const header = document.getElementById('header')
        const home_button = document.createElement('button')
        home_button.textContent = "Click me to view playlist";
        const shuffle_button = document.createElement('button');
        shuffle_button.textContent = "Click to shuffle songs";
        home_button.addEventListener('click', function() {
            window.location.href = "localhost:3000";
        })
        shuffle_button.addEventListener('click', function() {
            //0 = off, 1 = on
            if(shuffle = 0) {
                shuffle = 1;
            }
            if(shuffle = 1) {
                shuffle = 0; 
            }
        })
    })
    header.append(home_button);
    header.append(shuffle_button)
}

function generate_objects() {
   
}


generate_header();
