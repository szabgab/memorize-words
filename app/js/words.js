var add_word_button = document.getElementById('add_words_button');
var select_lesson_button = document.getElementById('select_lesson_button');

var main_page = document.getElementById('main_page');
var select_lesson_page = document.getElementById('select_lesson_page');

function add_word() {
   alert("Not yet implemented");
}

function hide_pages() {
    main_page.classList.remove('current_page');
    select_lesson_page.classList.remove('current_page');
};


add_word_button.addEventListener( 'click', add_word );
select_lesson_button.addEventListener( 'click', function() {
   hide_pages();
   select_lesson_page.classList.add('current_page');
});

var home_buttons = document.getElementsByClassName('home_button');
for (var i=0; i < home_buttons.length; i++) {
   home_buttons[i].addEventListener( 'click', function() {
      hide_pages();
      main_page.classList.add('current_page');
   });
}


main_page.classList.add('current_page');
