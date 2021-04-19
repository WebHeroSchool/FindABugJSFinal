/*создание карты*/
const createCard= () => {
const card =  document.createElement('div');
card.className = 'card';
document.querySelector('.filed').add(card);
card.addEventListener('click', flipCard);
}

/* переворот карт*/
const flipCard

/* здесь еще что-то*/

/*создание игрового поля*/
document.querySelectorById('.button').onclick = () => {
    const level = document.querySelector('input[name="choice"]:cheked').value;
document.querySelector('.body').innerHTML = '<div class="filed"><div>';  
  for (let i=0; i < level; i++) {
      createCard ()
  }
  if (level == 3) {
    document.querySelector('.field').style.width = '100%';
    document.querySelector('.field').style.paddingTop = '15%';
  } else if (level == 6) {
    document.querySelector('.field').style.width = '50%';
    document.querySelector('.field').style.paddingTop = '1%';
  }
}