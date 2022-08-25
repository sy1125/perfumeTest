import { Link } from "react-router-dom";
import React from "react";

const Result = ({totalScore}) => {
    const resultPoint = Math.round(totalScore / 2);
    const Type = ['크리드 실버 마운틴 워터', '랑방 아방가르드', '캘빈 클라인 씨케이 원', '크리니크 해피 포 맨', '랑방 에끌라 드 아르페쥬'];
    const Default = `해당 향수가 존재하지 않습니다.`;
    let answer = JSON.stringify(Default);
    const Text = ['혼자만의 공간에서 혼자만의 시간을 즐길 때 행복감과 안도감을 느끼는 당신은, 혼자여도 외롭지 않은 철저한 개인주의자입니다. 냉철하고 통찰력 있으며, 객관성을 지향하는 당신에게 추천합니다.',
    '즉흥적인걸 싫어하며 꼼꼼하고 기억력이 뛰어난 당신은 성실하고 책임감이 강한 원리원칙자 입니다. 매번 새로운 일보다는 안정된 것을 추구하는 당신에게 추천합니다.',
    '확고한 신념과 명확한 원리 원칙을 가지고 행동하는 당신은 때로는 애늙은이 같은 말을 자주하지만 속이 깊은 사람입니다. 강한 신념과 특유의 섬세함을 가진 당신에게 추천합니다.',
    '차분하고 헌신적이며 인내심이 강한 당신은 주변 무리와 원만하게, 둥글 둥글하게 잘 지내는 훌륭한 서포터입니다. 차분하고, 섬세한 성향을 지닌 당신에게 추천합니다.',
    '다재다능하고 능력이 뛰어나며 반복적인 일을 지루해 하는 당신은 매력이 넘치며 큰 그림을 잘그리고 다른 사람들의 생각을 읽어내는데 뛰어납니다. 추진력이 뛰어나며 상대방의 의견을 쉽게 받아줄 수 있는 열린 마인드를 가진 당신에게 추천합니다.'];
    const Default2 = `해당 설명이 존재하지 않습니다.`;
    let txt = JSON.stringify(Default2);
    const subType = ['묵직하고 깔끔한 향기', '달콤한 라벤더 향', '산뜻하게 몸에서 자연스럽게 새어나오는 듯한 향', '심플하지만 시원하고 달콤한 향', '꽃잎에서 느껴지는 시원하고 은은하게 퍼지는 달달한 향'];
    const Default3 = `해당 설명이 존재하지 않습니다.`;
    let subAnswer = JSON.stringify(Default3);
    let res = "/images/perfume_res1.png";

    switch (resultPoint) {
        case 1:
            answer = JSON.stringify(Type[0]);
            txt = JSON.stringify(Text[0]);
            subAnswer = JSON.stringify(subType[0]);
            res = "/images/perfume_res1.png"
          break;
        case 2:
            answer = JSON.stringify(Type[1]);
            txt = JSON.stringify(Text[1]);
            subAnswer = JSON.stringify(subType[1]);
            res = "/images/perfume_res2.png"
          break;
        case 3:
            answer = JSON.stringify(Type[2]);
            txt = JSON.stringify(Text[2]);
            subAnswer = JSON.stringify(subType[2]);
            res = "/images/perfume_res3.png"
          break;
        case 4:
            answer = JSON.stringify(Type[3]);
            txt = JSON.stringify(Text[3]);
            subAnswer = JSON.stringify(subType[3]);
            res = "/images/perfume_res4.png"
          break;
        case 5:
            answer = JSON.stringify(Type[4]);
            txt = JSON.stringify(Text[4]);
            subAnswer = JSON.stringify(subType[4]);
            res = "/images/perfume_res5.png"
          break;
        default:
            break;
      };
      if(totalScore != null) {
        localStorage.setItem('type', answer);
        localStorage.setItem('img', res);
        localStorage.setItem('text', txt);
        localStorage.setItem('subType', subAnswer);
      }else {
        const localData = localStorage.getItem('type');
        const localData2 = localStorage.getItem('img');
        const localData3 = localStorage.getItem('text');
        const localData4 = localStorage.getItem('subType');
        if (localData) {
            answer = localData;
            res = localData2;
            txt = localData3;
            subAnswer = localData4;
        }
      }
      localStorage.removeItem('Score');
    return (
        <div>
          <div className="result">
            <p className="title"><strong>SY</strong>Fume</p>
            <span className="subtitle">나에게 맞는 향수는 ?</span>
            <img className="perfume-img" src={res} alt="향수이미지" />
            <span className="perfume-type">{JSON.parse(answer)}</span>
            <span className="perfume-subtype">{JSON.parse(subAnswer)}</span>
            <span className="perfume-text">{JSON.parse(txt)}</span>
            <Link className="btn-test" to={"/"} replace>다시 테스트하기</Link>
          </div>
        </div>
    )
}
export default Result;