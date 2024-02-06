// 2. This code loads the IFrame Player API code asynchronously.
let tag = document.createElement('script')
tag.src = 'https://www.youtube.com/iframe_api'
//스크립트 태그를 만들고 태그에 api를 쓸수있게 source 정의

let firstScriptTag = document.getElementsByTagName('script')[0]
// script 태그 가장 첫번째 요소를 찾음

firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
//firstScriptTag의 부묘오소를 찾고, 이전에 삽입해주는데, firstScriptTag 이전에 tag를 넣어줌

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // 여기서 id 값으로 player을 넣는다고 #player 넣을 수도 있겠지만 여기서 알아서 찾으니까 그냥 player이라고할것
  new YT.Player('player', {
    // height: '360',
    // width: '640',  높이 요소는 여기선 딱히 정의해줄 필요없음
    videoId: 'An6LvWQuj_8', // youtube 영상의 v=로 시작하는 부분 뒷부분이 영상의 id
    playerVars: {
      autoplay: true, // 자동재생
      loop: true, // 반복재생 ,
      playlist: 'An6LvWQuj_8', // 반복재생 유무가 true일 경우, 다시 반복해서 재생할 그 영상의 id를 목록으로 제공해줘야함
    },
    // 영상을 제어하기위한 여러가지 변수를 정의하는 옵션
    events: {
      onReady: function (event) {
        event.target.mute()
      },
      // playerVars에서는 제공해 주지 않아서, events에 삽입을 하는데
      // onReady - 즉 영상이 준비되면 함수가 실행되고 그 함수가 실행될떄 주비되는 영상을 음소거 처리하겠다는 명렁 실행
    },
  })
}
