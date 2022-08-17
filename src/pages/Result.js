const Result = ({totalScore}) => {
    const resultPoint = Math.round(totalScore / 2);
    switch (resultPoint) {
        case 1:
            document.write("유형1");
          break;
        case 2:
            document.write("유형2");
          break;
        case 3:
            document.write("유형3");
          break;
        case 4:
            document.write("유형4");
          break;
        case 5:
            document.write("유형5");
          break;
        default:
            document.write("유형None");
          break;
      };
    return (
        <div>
            <h2>당신의 결과는 입니다.</h2>
        </div>
    )
}
export default Result;