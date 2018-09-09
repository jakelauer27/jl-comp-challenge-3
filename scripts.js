document.querySelector('.settings-container').addEventListener('click', toggleNav)
document.querySelector('.section-break-carrot').addEventListener('click', toggleCharts)

function toggleNav(){
  document.querySelector('.sidebar').classList.toggle('hide');
  document.querySelector('body').classList.toggle('expand-body')
}

function toggleCharts() {
  document.querySelector('.charts-section').classList.toggle('toggle-up');
  document.querySelector('.section-break-carrot').classList.toggle('toggle-up-arrow');
  document.querySelector('.charts-mini-menu').classList.toggle('toggle-up')

}