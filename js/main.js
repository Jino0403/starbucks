const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function () {
  searchInputEl.focus()
})
