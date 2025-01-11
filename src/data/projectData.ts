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
        최근 몇 년 사이 중고물품 거래가 활발해지면서 당근, 중고나라, 번개장터와 같은 플랫폼들이 크게 성장하였습니다. 많은 사람들이 더 저렴하게 물건을 구매하거나 사용하지 않는 물건을 판매하며 중고 거래를 이용하고 있습니다.

        MINE은 이러한 중고거래에 경매 시스템을 도입한 서비스로, 사용자들이 물품을 경매 방식으로 거래하며 더욱 흥미롭고 효율적인 경험을 제공합니다.
      `,
    detailImage: [
      "/mine/mine_detail_main.png",
      "/mine/mine_detail_comment.png",
      "/mine/mine_detail_product.png",
      "/mine/mine_detail_profile.png",
    ],
    function: [
      "Naver 계정을 이용한 로그인",
      "상품 등록",
      "상품 즐겨찾기",
      "경매 입찰",
      "경매 자동 종료",
      "댓글 및 답글",
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
      평소 여행과 사진을 좋아하는 저는 자주 사진을 찍기 위해 당일치기로 여러 장소를 다녀오곤 합니다. 항상 여행을 갈 때마다 어디로 가야할지 고민이 많았던 저는 자연스럽게 쉽게 관광지 정보를 얻을 수 있는 서비스를 생각하게 되었습니다.

      사용자는 한국관광공사에서 제공하는 관광지의 정보를 사용자의 위치로부터 가까운 거리에 있는 순서대로 쉽게 조회가 가능합니다. 또 사용자들끼리 본인만이 알고 있는 알려지지 않은 비밀 장소들을 공유하여 넓은 선택지를 제공받을 수 있게 됩니다.
    
      현재 리팩토링을 계획하고 있습니다.
      `,
    detailImage: [
      "/gajayeogi/gajayeogi_1.png",
      "/gajayeogi/gajayeogi_2.png",
      "/gajayeogi/gajayeogi_3.png",
    ],
    function: [
      "Naver 계정을 이용한 로그인",
      "Tour API를 통해 받아온 관광지 정보를 지도에 표시",
      "유저 관광지 등록",
      "관광지 추천 및 베스트 관광지 필터링",
    ],
  },
  {
    logo: "/tripto_logo.png",
    name: "TRipTo",
    date: "2024.12",
    images: ["/TRipTo.png"],
    description:
      "사용자의 위치를 기반으로 관광지를 추천 받고 관광지의 유형별로 찾아볼 수 있는 서비스입니다.",
    type: "미니 프로젝트",
    contribution: "100%",
    href: "https://tripto-xi.vercel.app/",
    velog: "https://velog.io/@bhwoo1/series/TRipTo",
    github: "https://github.com/bhwoo1/TRipTo",
    stack: [
      ["Next.JS", "TypeScript"],
      ["Zustand", "React-Query"],
      ["Tailwind", "Shadcn-UI"],
      ["MySQL"],
    ],
    detail: "tripto",
    description_long: `UI/UX 및 반응형 디자인, Next.JS의 API Routes를 공부하는 목적으로 진행하였습니다. 
    
    사용자의 GPS 정보를 받아와 Naver 지도 API의 Reverse Geocoding 모듈을 이용해 사용자가 위치한 곳의 정보를 취득해 해당 지역의 관광지를 소개합니다.

    관광지를 총 10개의 태그로 분류하였으며 페이지에 접속할 때마다 랜덤으로 10개의 태그 중 1개를 선택해 해당 태그에 해당하는 관광지를 소개하며, 사용자는 검색을 통해 관광지 정보를 얻을 수 있습니다.

    MySQL을 이용해 DB를 구축하였으며 현재 등록되어 있는 관광지 정보는 더미 데이터로 구성하였습니다.
    `,

    detailImage: [
      "/tripto/tripto 1.jpg",
      "/tripto/tripto 2.jpg",
      "/tripto/tripto 3.jpg",
      "/tripto/tripto 4.jpg",
    ],
    function: [
      "API Routes를 활용해 별도의 웹 서버 없이 DB와 통신",
      "React-Query를 활용해 무한 스크롤 구현",
      "PC와 모바일 모두 호환되는 반응형 디자인",
    ],
  },
];
