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
      //   gsap.to(요소, 지속시간, 옵션) 지속시간은 초단위 작성
      // 애니메이션 작성을 위한 gsap.to() 사용, index.html에서 불러오는 로직 추가
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: 'none',
      })
      // 뱃지 숨기기
    } else {
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

const fadeEls = document.querySelectorAll('.visual .fade-in')

// /받는 매개변수, 반복횟수/
fadeEls.forEach(function (fadeEl, index) {
  //   gsap.to(요소, 지속시간, 옵션) 지속시간은 초단위 작성
  gsap.to(fadeEl, 1, {
    opacity: 1,
    delay: (index + 1) * 0.7,
    // 처음 반복할때 index의 값은 0, 곱하지 않으면 모두 0.7로 딜레이가 없어 동시출력됨
  })
})

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
})

new Swiper('.promotion .swiper-container', {
  // direction:'horizontal' 수평옵션은 기본값으로 설정되어있기 때문에 생략
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 요소 선택자
    clickable: true, // 사용자 페이지 번호요소 선택 가능 불가능 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  },
})

const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false

promotionToggleBtn.addEventListener('click', () => {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    //숨김처리!
    promotionEl.classList.add('hide')
  } else
    [
      // 보이기!
      promotionEl.classList.remove('hide'),
    ]
})

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소,시간,옵션)
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), //애니메이션 동작 시간
    {
      // 옵션
      y: size,
      //y축으로 20만큼 내려오는데
      repeat: -1,
      // 반복여부를 -1로 설정하면 무한반복
      yoyo: true,
      // 한번 재생된 애니메이션 다시 뒤로 재생
      ease: 'power1.inOut',
      // 반복관련 gsap easing 함수 검색해서 참조, 반복을 자연스럽게 하기위한 추가
      delay: random(0, delay),
    },
  )
}

floatingObject('.floating1', 1, 15)
floatingObject('.floating2', 0.5, 15)
floatingObject('.floating3', 1.5, 20)
