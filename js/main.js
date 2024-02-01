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

const badgeEl = document.querySelector('header .badges')

// 그냥 scroll을 사용하면 함수가 우르르 실행되는데 방지하는 용도로 throttle을 사용
window.addEventListener(
  'scroll',
  _.throttle(function () {
    console.log(window.scrollY)
    if (window.scrollY > 500) {
      //   badgeEl.style.display = 'none'
      //   gsap.to(요소, 지속시간, 옵션)
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: 'none',
      })
      // 뱃지 숨기기
    } else {
      //   badgeEl.style.display = 'block'
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: 'block',
      })
      // 뱃지 보이기
    }
  }, 300),
)
// underscore 기호 적고 점 throttle 이라는 메소드 실행
// 그 다음 throttle 이라는 메소드의 첫 번째 인수로는 사용하고자 하는 함수를 넣어줌
// 그 이후 얼마의 간격으로 실행되면 되는지 밀리ㅅ컨드 단위로 시간을 추가한다.
// _.throttle(함수, 시간)
