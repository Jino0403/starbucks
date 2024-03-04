const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')

// 클릭했을때 강제 포커스
searchEl.addEventListener('click', function () {
  searchInputEl.focus()
})

// 포커스 되면서 focused라는 클래스 추가 및 placeholder 속성 추가
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '통합검색')
})

// 포커스 해제되면서 blur 속성 사용, focused라는 클래스 제거 및 placeholder 글자 공백으로
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})

const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()
