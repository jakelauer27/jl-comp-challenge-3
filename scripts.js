document.querySelector('.settings-container').addEventListener('click', hideNav)

function hideNav(){
  document.querySelector('.sidebar').classList.toggle('hide');
  document.querySelector('body').classList.toggle('expand-body')
}