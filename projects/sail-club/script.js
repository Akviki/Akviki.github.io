// Смена темы 
let darkButton = document.querySelector(".theme-button-dark");
let lightButton = document.querySelector(".theme-button-light");

lightButton.onclick = function() {
  document.body.classList.remove("dark");
  darkButton.classList.remove("active");
  lightButton.classList.add("active");
}

darkButton.onclick = function() {
  document.body.classList.add("dark");
  lightButton.classList.remove("active");
  darkButton.classList.add("active");
}
// Смена шрифта
let serifButton = document.querySelector(".font-button-serif");
let sansSerifButton = document.querySelector(".font-button-sans-serif");

sansSerifButton.onclick = function() {
  document.body.classList.remove("serif");
  serifButton.classList.remove("active");
  sansSerifButton.classList.add("active");
}

serifButton.onclick = function() {
  document.body.classList.add("serif");
  sansSerifButton.classList.remove("active");
  serifButton.classList.add("active");
}

// Развертывание текста
 let blogArticles = document.querySelectorAll('.blog-article');

 for (let blogArticle of blogArticles) {
  let moreButton = blogArticle.querySelector('.more');
  moreButton.onclick = function() {
    blogArticle.classList.remove('short');
  }
 }

 //Смена раскладки товаров
 let gridButton = document.querySelector('.card-view-button-grid');
 let listButton = document.querySelector('.card-view-button-list');
 let cards = document.querySelector('.cards');

 gridButton.onclick = function() {
  gridButton.classList.add('active');
  listButton.classList.remove('active');
  cards.classList.remove('list');
 }

 listButton.onclick = function() {
  listButton.classList.add('active');
  gridButton.classList.remove('active');
  cards.classList.add('list');
 }

 // Галерея и миниатюры
 let activePhoto = document.querySelector('.active-photo');
 let previews = document.querySelectorAll('.preview-list a');

 for (let preview of previews) {
  preview.onclick = function (evt) {
    evt.preventDefault();
    activePhoto.src = preview.href;

    let currentPreview = document.querySelector('.preview-list .active-item');
    currentPreview.classList.remove('active-item');
    preview.classList.add('active-item');
  }
 }