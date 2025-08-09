/* этот скрипт использует такие имена классов:
✦ like-icon — для svg-иконки анимированного сердца
✦ card__like-button — для кнопки Like рядом с иконкой
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ is-liked — для обозначения состояния лайкнутой иконки в виде сердца
✦ button__text — для обозначения текстового элемента внутри кнопки
Если эти классы поменять в HTML, скрипт перестанет работать. Будьте аккуратны.
*/

document.addEventListener('DOMContentLoaded', function() {
  const hearts = document.querySelectorAll('.like-icon');
  const likes = document.querySelectorAll('.card__like-button');
  const icons = document.querySelectorAll('.card__icon-button'); 
  hearts.forEach((heart, index) => {
    const likeBtn = likes[index];
    const iconBtn = icons[index];

    function toggleLike() {
      heart.classList.toggle('is-liked');
      const newText = heart.classList.contains('is-liked')? 'Unlike':'like'

      setTimeout(() => {
        likeBtn.querySelector('.button__text').textContent = newText
      }, 500);
    }

    likeBtn.addEventListener('click',toggleLike)
    iconBtn.addEventListener('click',toggleLike)
  });
});

