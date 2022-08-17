import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h2>홈페이지</h2>
            <p>뒤로 갈 수 없으니 신중히 선택하시길 바랍니다.</p>
            <Link className="testLink" to={"/test1"} replace>테스트 보러가기</Link>
        </div>
    )
}
export default Home;