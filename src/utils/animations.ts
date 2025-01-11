import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = (onComplete?: () => void) => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const tl = gsap.timeline({
      onComplete, // 애니메이션 완료 시 콜백 실행
    });

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 100,
      stagger: 0.2,
    });
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const tl = gsap.timeline();

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: -100,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0,
      stagger: 0.2,
      onComplete: () => {
        router.push(href);
      },
    });
  }
};

export const menuIn = () => {
  const menu = document.getElementById("menu");

  if (menu) {
    const tl = gsap.timeline();

    // 화면 밖에서 안으로 슬라이드
    tl.fromTo(
      menu,
      { yPercent: -100 }, // 처음 화면 위에 숨겨진 상태
      { yPercent: 0, duration: 0.5, ease: "power2.out" } // 화면 안으로 슬라이드
    );
  }
};

export const menuOut = (onComplete?: () => void) => {
  const menu = document.getElementById("menu");

  if (menu) {
    const tl = gsap.timeline({
      onComplete, // 애니메이션 완료 후 콜백 실행
    });

    tl.to(menu, {
      yPercent: -100,
      duration: 0.5, // 메뉴 닫기 애니메이션 지속 시간
    });
  }
};
