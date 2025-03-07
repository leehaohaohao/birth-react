/**
 * @description
 * @author lihao
 * @date 2025/2/23 23:29
 */
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const handlerScrollPhotoPageClick = () => {
        navigate('/scroll');
    };
    const handlerCakePageClick = () =>{
        navigate('/cake');
    };
    return (
        <div className="homepage">
            <div className="birthday-message">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1800 400"
                    className="birthday-svg"
                >
                    <defs>
                        {/* 文字渐变色 */}
                        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#fff6b7"/>
                            {/* 亮黄色 */}
                            <stop offset="50%" stopColor="#ffdd94"/>
                            {/* 金色 */}
                            <stop offset="100%" stopColor="#f8a488"/>
                            {/* 橙粉色 */}
                        </linearGradient>
                        {/* 文字发光效果 */}
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="4.5" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>

                    {/* 生日快乐 文字 */}
                    <text
                        x="50%"
                        y="120"
                        fill="none"
                        stroke="url(#textGradient)"
                        strokeWidth="4"
                        strokeDasharray="1200"
                        strokeDashoffset="1200"
                        textAnchor="middle"
                        className="birthday-text"
                        filter="url(#glow)"
                    >
                        生日快乐！
                    </text>

                    {/* 祝福语 文字 */}
                    <text
                        x="50%"
                        y="250"
                        fill="none"
                        stroke="url(#textGradient)"
                        strokeWidth="3"
                        strokeDasharray="1500"
                        strokeDashoffset="1500"
                        textAnchor="middle"
                        className="birthday-text"
                        filter="url(#glow)"
                    >
                        愿你的世界充满爱与美好 ✨
                    </text>

                </svg>
            </div>

            <div className="nav-blocks">
                <div className="nav-item" onClick={handlerScrollPhotoPageClick}>嘿嘿</div>
                <div className="nav-item" onClick={handlerCakePageClick}>🎂 cake</div>
                <div className="nav-item">🎁 祝福</div>
                <div className="nav-item">💌 关于</div>
            </div>
        </div>
    );
};

export default HomePage;






