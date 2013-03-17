var add_words_button = document.getElementById('add_words_button');
var select_lesson_button = document.getElementById('select_lesson_button');
var new_lesson_button = document.getElementById('new_lesson_button');

var home_page = document.getElementById('home_page');
var select_lesson_page = document.getElementById('select_lesson_page');
var new_lesson_page = document.getElementById('new_lesson_page');

function add_words() {
   alert("Not yet implemented");
}

function hide_pages() {
    home_page.classList.remove('current_page');
    select_lesson_page.classList.remove('current_page');
    new_lesson_page.classList.remove('current_page');
    add_words_page.classList.remove('current_page');
};

function switch_to(page) {
   hide_pages();
   page.classList.add('current_page');
};


add_words_button.addEventListener( 'click',function() {
    switch_to(add_words_page);
});

select_lesson_button.addEventListener( 'click', function() {
    switch_to(select_lesson_page);
});

new_lesson_button.addEventListener( 'click', function() {
    switch_to(new_lesson_page);
});

var home_buttons = document.getElementsByClassName('home_button');
for (var i=0; i < home_buttons.length; i++) {
   home_buttons[i].addEventListener( 'click', function() {
      switch_to(home_page);
   });
}


/* home_page.classList.add('current_page'); */
switch_to(home_page);
