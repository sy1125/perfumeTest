const Result = ({totalScore}) => {
    const resultPoint = Math.round(totalScore / 2);
    const Type = ['유형1입니다', '유형2입니다', '유형3입니다', '유형4입니다', '유형5입니다'];
    // const Type2 = `유형2입니다`;
    // const Type3 = `유형3입니다`;
    // const Type4 = `유형4입니다`;
    // const Type5 = `유형5입니다`;

    const Default = `유형이 없습니다.`;
    let answer = JSON.stringify(Default);
    switch (resultPoint) {
        case 1:
            // document.write("유형1");
            answer = JSON.stringify(Type[0]);
          break;
        case 2:
            // document.write("유형2");
            answer = JSON.stringify(Type[1]);
          break;
        case 3:
            // document.write("유형3");
            answer = JSON.stringify(Type[2]);
          break;
        case 4:
            // document.write("유형4");
            answer = JSON.stringify(Type[3]);
          break;
        case 5:
            // document.write("유형5");
            answer = JSON.stringify(Type[4]);
          break;
        default:
            // document.write("유형None");
            break;
      };
      if(totalScore != null) {
        localStorage.setItem('type', answer);
      }else {
        const localData = localStorage.getItem('type');
        if (localData) {
            answer = localData;
        }
      }
      localStorage.removeItem('Score');
    return (
        <div>
            {JSON.parse(answer)}
        </div>
    )
}
export default Result;