import React from "react";

function Interview() {
  return (
    <div className="w-full lg:w-2/3 lg:p-24 lg:pb-0 p-20 flex flex-col gap-4">
      <p className="text-4xl font-bold">Interview</p>
      <div className="flex flex-col bg-neutral-500 rounded-3xl gap-4 text-neutral-200 p-4">
        <p className="text-2xl font-bold">Q. 프론트엔드를 지망하는 이유는?</p>
        <p>
          여러 경험을 쌓으면서 <span className="bg-neutral-950 p-1 rounded-3xl">사용자와 직접 상호작용</span>하는 부분을 담당하는
          프론트엔드에 관심을 가지게 되었습니다. 사용자와의 상호작용을
          극대화하는 프로젝트를 개발하고자 합니다. 이를 위해 React와 Next.JS를
          이용해 프로젝트를 진행하였고, Recoil, Zustand, React-query, Tailwind
          등 다양한 라이브러리나 프레임워크를 도입해 발전을 위해 한 걸음씩
          나아가고 있습니다.{" "}
        </p>
      </div>
      <div className="flex flex-col bg-neutral-500 rounded-3xl gap-4 text-neutral-200 p-4">
        <p className="text-2xl font-bold">Q. 가장 중요하게 생각하는 것은?</p>
        <p>
          가장 중요하게 생각하는 것은 역시 <span className="bg-neutral-950 p-1 rounded-3xl">소통</span>이라고 생각합니다. 여기서
          소통이란, 동료들 간의 소통이 될 수도 있고, 사용자나 고객과의 소통이 될
          수도 있습니다. 모든 사람은 살아온 환경과 배경이 다르기 때문에 항상
          다른 생각을 하기 마련입니다. 이 과정에서 갈등은 필연적입니다. 하지만
          갈등을 해결할 수 있는 방법은 서로의 의견을 존중하고, 열린 마음으로
          대화하는 것입니다. 소통을 통해 서로의 입장을 이해하고, 최선의 해결책을
          찾아가는 과정이 중요합니다. 이렇게 긍정적인 소통을 바탕으로 협업을
          하면, 결과적으로 더 나은 아이디어와 효율적인 작업이 가능해지며, 팀의
          목표를 함께 이루어가는 데 큰 도움이 됩니다. 저는 이런 과정을 통해
          원활하게 주어진 과제를 해결할 수 있도록 노력하겠습니다.
        </p>
      </div>
      <div className="flex flex-col bg-neutral-500 rounded-3xl gap-4 text-neutral-200 p-4">
        <p className="text-2xl font-bold">Q. 본인이 생각하는 본인의 장단점은?</p>
        <p>
          저는 <span className="bg-neutral-950 p-1 rounded-3xl">새로운 기술</span>을 습득하기 위해 끊임없이 노력합니다. 기존에 알고 있던
          지식에 안주하지 않고, 더 나은 방향으로 나아가기 위해 항상 공부하려
          합니다. 새로운 기술을 배우는 과정은 저에게 도전적이지만, 그 도전이
          저를 성장시키는 원동력이 됩니다. 변화하는 기술 환경 속에서 빠르게
          적응하기 위해 최신 트렌드와 도구들을 꾸준히 학습하고, 실무에 적용할 수
          있는 능력을 기르기 위해 노력하고 있습니다.
        </p>
        <p>
          하지만, 제 자신에게 부족한 점이 있다면 <span className="bg-neutral-950 p-1 rounded-3xl">디테일에 대한 집중</span>이 부족하다는
          것입니다. 때로는 큰 그림에 집중하면서도 세부적인 부분에서 미비한 점을
          발견할 때가 있습니다. 이를 극복하기 위해 <span className="bg-neutral-950 p-1 rounded-3xl">기초</span>부터 탄탄히 공부하며,
          새로운 기술을 습득할 때는 공식 문서를 충분히 읽고, 실제 프로젝트에서
          그 내용을 깊이 있게 적용하려고 합니다. 또한, 부족한 부분을 채우기 위해
          다양한 자료와 학습 방법을 활용하여 기술적인 깊이를 더하려고 합니다. 이
          과정에서 얻은 디테일한 지식들이 결국 큰 성과로 이어진다고 믿습니다.
        </p>
      </div>
    </div>
  );
}

export default Interview;
