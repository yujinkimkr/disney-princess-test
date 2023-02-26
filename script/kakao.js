function sendLinkCustom() {
  if (!Kakao.isInitialized()) {
    Kakao.init('https://developers.kakao.com/sdk/js/kakao.js');
  }
  Kakao.Link.sendCustom({
      templateId: [90512]
  });
}

try {
  function sendLinkDefault() {
    if (!Kakao.isInitialized()) {
      Kakao.init("d6e3dab46dbeaca72f3e9c546a25432a");
    }
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '재미로 보는 디즈니 공주 테스트',
        description: '#디즈니 #MBTI #심리테스트',
        imageUrl:
          'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201702/21/htm_20170221102628501735.jpg',
        link: {
          mobileWebUrl: 'https://jade-pavlova-0b8af6.netlify.app/',
          webUrl: 'https://jade-pavlova-0b8af6.netlify.app/',
        },
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845,
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: 'https://jade-pavlova-0b8af6.netlify.app/',
            webUrl: 'https://jade-pavlova-0b8af6.netlify.app/',
          },
        },
        {
          title: '앱으로 보기',
          link: {
            mobileWebUrl: 'https://jade-pavlova-0b8af6.netlify.app/',
            webUrl: 'https://jade-pavlova-0b8af6.netlify.app/',
          },
        },
      ],
    })
  }
; window.kakaoDemoCallback && window.kakaoDemoCallback() }
catch(e) { window.kakaoDemoException && window.kakaoDemoException(e) }