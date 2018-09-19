
function toggleNav(){
  document.querySelector('.sidebar').classList.toggle('hide');
  document.querySelector('#left-arrow-icon').classList.toggle('rotate');
  document.querySelector('body').classList.toggle('expand-body')
}

function resetNav(){
  document.querySelector('.sidebar').classList.remove('hide');
  document.querySelector('#left-arrow-icon').classList.remove('rotate');
  document.querySelector('body').classList.remove('expand-body')
}

function toggleCharts() {
  document.querySelector('.charts-section').classList.toggle('toggle-up');
  document.querySelector('.section-break-carrot').classList.toggle('toggle-up-arrow');
  document.querySelector('.charts-mini-menu').classList.toggle('toggle-up')
}

function showPopup(bar) {
  bar.parentNode.insertAdjacentHTML("afterend", `<div class="bar-info-popup" style="bottom: calc(40px + ${bar.getAttribute('height')}px)">
  <h4>${bar.getAttribute('data-day')}</h4>
  <p class="bar-info-text"><span class="blue-text">${bar.getAttribute('data-applicants')}</span>
  Applicants / <span class="blue-text">${bar.getAttribute('data-interviews')}</span>
  Interviews
  </p>
  <div class="triangle"></div>
  </div>`)
}

function removePopup(bar) {
  bar.parentNode.nextSibling.remove();
}

/* JavaScript Media Queries */
if (matchMedia) {
	const min1090 = window.matchMedia("(min-width: 1090px)");
	min1090.addListener(resetNav);
}
