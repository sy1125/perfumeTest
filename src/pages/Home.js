import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import PerfumeSlider from "../components/PerfumeSlider";

const Home = () => {
    localStorage.removeItem('Score');
    return (
        <div className="home">
            <div className="section1">
                <h2 className="title">Test Your Perfume</h2>
                <p className="subtitle">테스트를 통해 당신에게 맞는 향수를 찾아보세요</p>
                <Link className="btn-test" to={"/test1"} replace>START</Link>
            </div>
            <div className="section">
                <h3 className="text-title">당신의 향에 만족하고 계십니까?</h3>
                <p className="text">전세계 약 77억 인구가 있고 수만개가 넘는 향수가 있으며,<br />
                지금도 향수를 사용하는 인구는 계속해서 증가하고 있습니다.<br />
                이러한 시대에서 아직 자신에게 맞는향수를 찾지 못해 허우적거리는 여러분을 위해,<br />
                저희는 그러한 여러분에게 최적화된 향수를 추천해드리는 서비스이며,<br />
                이 서비스가 저희의 존재 가치입니다.</p>
                <div align="center">
                    <video width="1015px" height="535px" autoPlay muted loop>
                        <source src="/videos/perfume_video.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="section">
                <h3 className="text-title">Another Pick</h3>
                <p className="subtitle">테스트 결과 이외의 다른 향수들도 추천해드려요</p>
                <PerfumeSlider />
            </div>
            <Footer />
        </div>
    )
}
export default Home;