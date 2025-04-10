export const projectData = [
  {
    logo: "/mine_logo.png",
    name: "MINE",
    date: "2024.03 - 2024.05",
    images: [
      "/mine/mine_main.png",
      "/mine/mine_comment.png",
      "/mine/mine_product.png",
      "/mine/mine_profile.png",
    ],
    description: "중고 물품 경매 웹사이트입니다.",
    type: "팀 프로젝트(2인)",
    contribution: "프론트 100%",
    href: "",
    velog: "https://velog.io/@bhwoo1/series/Mine",
    github: "https://github.com/bhwoo1/mineApp",
    stack: [["Next.JS", "TypeScript"], ["Recoil"], ["Tailwind"], ["Next-Auth"]],
    detail: "mine",
    description_long: `
        이 프로젝트는 Naver 계정을 통한 로그인을 제공하며, 상품 등록, 상품 즐겨찾기, 경매 입찰 등 다양한 기능을 통해 사용자가 참여할 수 있는 경매 플랫폼입니다.

        또한, 자동 종료 기능을 통해 경매 종료 시간을 자동으로 처리하고, 댓글 및 답글 기능을 통해 사용자 간 소통을 원활하게 합니다.
      `,
    detailImage: [
      "/mine/mine_detail_main.png",
      "/mine/mine_detail_comment.png",
      "/mine/mine_detail_product.png",
      "/mine/mine_detail_profile.png",
    ],
    function: [
      "Naver 계정을 이용하여 간편하게 로그인하고, 경매 참여 및 상품 등록 등의 기능을 이용할 수 있습니다.",
      "사용자는 경매에 참가할 상품을 등록하고, 다른 사용자들이 볼 수 있도록 공개할 수 있습니다.",
      "관심 있는 상품을 즐겨찾기하여 추후 쉽게 확인하고 경매 참여 여부를 결정할 수 있습니다.",
      "경매 종료 시간을 설정하고, 자동으로 경매가 종료되도록 하여 보다 효율적인 운영이 가능합니다.",
      "경매 상품에 대해 입찰하고, 경쟁자들과의 경매를 통해 상품을 손에 넣을 기회를 가질 수 있습니다.",
      "사용자들이 상품에 대해 댓글을 남기고 답글을 달 수 있어, 경매에 대한 의견을 자유롭게 교환할 수 있습니다.",
    ],
  },
  {
    logo: "/gajayeogi_logo.png",
    name: "가자여기",
    date: "2024.06 - 2024.08",
    images: ["/Gajayeogi.png"],
    description:
      "혼자만 알고 있던 비밀 장소(여행지)를 다른 사람과 공유할 수 있는 서비스입니다.",
    type: "팀 프로젝트(2인)",
    contribution: "프론트 100%",
    href: "https://gajayeogi.vercel.app/",
    velog:
      "https://velog.io/@bhwoo1/series/%EA%B0%80%EC%9E%90%EC%97%AC%EA%B8%B0",
    github: "https://github.com/bhwoo1/gajayeogi",
    stack: [
      ["Next.JS", "TypeScript"],
      ["Recoil"],
      ["Tailwind"],
      ["Next-Auth", "Naver Map API", "Tour API"],
    ],
    detail: "gajayeogi",
    description_long: `
      이 프로젝트는 Naver 계정을 통한 로그인을 지원하고, Tour API를 통해 관광지 정보를 제공하는 관광지 추천 시스템입니다. 

      사용자는 관광지를 지도에 시각적으로 표시하고, 자신이 선호하는 관광지를 등록하여 맞춤형 여행 계획을 세울 수 있습니다. 

      또한, 추천된 관광지와 베스트 관광지 필터링 기능을 통해 더욱 효율적인 여행지 탐색이 가능합니다.
      `,
    detailImage: [
      "/gajayeogi/gajayeogi_1.png",
      "/gajayeogi/gajayeogi_2.png",
      "/gajayeogi/gajayeogi_3.png",
    ],
    function: [
      "사용자는 Naver 계정을 이용해 간편하게 로그인할 수 있습니다.",
      "Tour API를 통해 받아온 관광지 정보를 Naver Map API와 통합하여 지도 위에 시각적으로 표시합니다.",
      "사용자는 자신이 관심 있는 관광지를 등록하여 개인적인 여행 리스트를 관리할 수 있습니다.",
      "추천 알고리즘을 기반으로 개인화된 관광지 추천을 제공하며, 베스트 관광지를 필터링하여 인기 있는 명소들을 쉽게 찾을 수 있습니다.",
    ],
  },
  // {
  //   logo: "/tripto_logo.png",
  //   name: "TRipTo",
  //   date: "2024.12",
  //   images: ["/TRipTo.png"],
  //   description:
  //     "사용자의 위치를 기반으로 관광지를 추천 받고 관광지의 유형별로 찾아볼 수 있는 서비스입니다.",
  //   type: "미니 프로젝트",
  //   contribution: "100%",
  //   href: "https://tripto-xi.vercel.app/",
  //   velog: "https://velog.io/@bhwoo1/series/TRipTo",
  //   github: "https://github.com/bhwoo1/TRipTo",
  //   stack: [
  //     ["Next.JS", "TypeScript"],
  //     ["Zustand", "React-Query"],
  //     ["Tailwind", "Shadcn-UI"],
  //     ["MySQL"],
  //   ],
  //   detail: "tripto",
  //   description_long: `UI/UX 및 반응형 디자인, Next.JS의 API Routes를 공부하는 목적으로 진행하였습니다.

  //   사용자의 GPS 정보를 받아와 Naver 지도 API의 Reverse Geocoding 모듈을 이용해 사용자가 위치한 곳의 정보를 취득해 해당 지역의 관광지를 소개합니다.

  //   관광지를 총 10개의 태그로 분류하였으며 페이지에 접속할 때마다 랜덤으로 10개의 태그 중 1개를 선택해 해당 태그에 해당하는 관광지를 소개하며, 사용자는 검색을 통해 관광지 정보를 얻을 수 있습니다.

  //   MySQL을 이용해 DB를 구축하였으며 현재 등록되어 있는 관광지 정보는 더미 데이터로 구성하였습니다.
  //   `,

  //   detailImage: [
  //     "/tripto/tripto 1.jpg",
  //     "/tripto/tripto 2.jpg",
  //     "/tripto/tripto 3.jpg",
  //     "/tripto/tripto 4.jpg",
  //   ],
  //   function: [
  //     "API Routes를 활용해 별도의 웹 서버 없이 DB와 통신",
  //     "React-Query를 활용해 무한 스크롤 구현",
  //     "PC와 모바일 모두 호환되는 반응형 디자인",
  //   ],
  // },
  {
    logo: "/hashtag_logo.png",
    name: "#해시태그#생성기",
    date: "2025.04",
    images: ["/Hashtag.png"],
    description:
      "사진을 업로드해 사진과 어울리는 SNS용 해시태그를 생성해주는 서비스입니다.",
    type: "미니 프로젝트",
    contribution: "100%",
    href: "https://hash-tag-generator-xi.vercel.app/",
    velog: "",
    github: "https://github.com/bhwoo1/HashTagGenerator",
    stack: [
      ["Next.JS", "TypeScript"],
      ["Zustand", "React-Query"],
      ["Tailwind"],
      ["Google Cloud Vision API", "OpenAI"],
    ],
    detail: "hashtag",
    description_long: `이 프로젝트는 이미지 업로드 후 Google Cloud Vision API를 통해 이미지를 분석하고, 분석된 내용을 바탕으로 자동으로 해시태그를 생성하는 이미지 분석 및 태그 생성 툴입니다.

    사용자는 한국어, 영어 등 원하는 언어로 원하는 개수만큼 해시태그를 생성할 수 있어, 소셜 미디어나 다양한 플랫폼에 최적화된 해시태그를 손쉽게 생성할 수 있습니다.`,

    detailImage: [
      "/Hashtag/Hashtag 1.jpg",
      "/Hashtag/Hashtag 2.jpg",
      "/Hashtag/Hashtag 3.jpg",
      "/Hashtag/Hashtag 4.jpg",
      "/Hashtag/Hashtag 5.jpg",
    ],
    function: [
      "사용자가 업로드한 이미지를 Google Cloud Vision API를 이용해 분석하여, 이미지에 포함된 객체, 텍스트, 색상 등 다양한 정보를 추출합니다.",
      "분석된 이미지 정보를 바탕으로 관련성 높은 해시태그를 자동으로 생성합니다.",
      "사용자는 해시태그 생성을 한국어와 영어 등 원하는 언어로 설정할 수 있으며, 해시태그의 생성 갯수도 자유롭게 조절할 수 있습니다.",
    ],
  },
  {
    logo: "/TravelPlanner_logo.png",
    name: "떠나봄",
    date: "진행 중",
    images: ["/default.png"],
    description: "대신 여행 계획을 세워주는 AI 기반 여행 플래너입니다.",
    type: "미니 프로젝트",
    contribution: "100%",
    href: "",
    velog: "",
    github: "https://github.com/bhwoo1/TravelPlanner",
    stack: [
      ["Next.JS", "TypeScript"],
      ["Zustand", "React-Query"],
      ["Tailwind"],
      ["OpenAI", "Google Maps JavaScript API"],
    ],
    detail: "TravelPlanner",
    description_long: `이 프로젝트는 사용자의 입력 정보를 바탕으로 AI가 맞춤형 계획을 자동으로 생성하고, Google Maps를 통해 추천된 장소들을 직관적으로 확인할 수 있는 스마트 여행/일정 플래너입니다.

     또한, 추후에는 사용자 계정 기반의 로그인 기능을 통해 개인화된 계획을 저장하고 관리할 수 있도록 확장될 예정입니다.`,

    detailImage: ["/TravelPlanner/Planner_1.gif"],
    function: [
      "사용자가 입력한 정보(여행 목적, 기간, 선호 장소 등)를 바탕으로 AI가 자동으로 계획을 생성합니다.",
      "추천된 장소들을 지도 위에 시각적으로 표시하여 위치 정보를 한눈에 파악할 수 있습니다.",
      "로그인 기능을 통해 개인 계획을 저장하고, 관리할 수 있도록 구현 예정입니다.",
    ],
  },
];
