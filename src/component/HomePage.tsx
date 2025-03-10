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
            <div className="mask">
                <svg
                    className="transparent-heart"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                >
                    <path
                        d="M16 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"
                        fill="transparent"
                        stroke="#ff6b6b"
                        strokeWidth="2"
                    />
                </svg>
            </div>
            <div className="hearts-background">
                {Array.from({length: 25}).map((_, i) => {
                    const size = 20 + Math.random() * 20; // 随机大小，范围在 40px 到 80px
                    const rotation = Math.random() * 360; // 随机旋转角度，范围在 0° 到 360°
                    return (
                        <svg
                            key={i}
                            className="heart-bg"
                            style={{
                                left: `${Math.random() * 100}%`, // 随机水平位置
                                top: `${Math.random() * 100}%`, // 随机垂直位置
                                animationDelay: `${Math.random() * 2}s`, // 随机动画延迟
                                width: `${size}px`, // 随机大小
                                height: `${size}px`,
                                transform: `rotate(${rotation}deg)`, // 随机旋转角度
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                        >
                            <path
                                d="M16 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"
                                fill="transparent" /* 透明填充 */
                                stroke="#ff6b6b" /* 红色描边 */
                                strokeWidth="2" /* 描边粗细 */
                                strokeDasharray="100" /* 路径总长度 */
                            />
                        </svg>
                    );
                })}
            </div>
            <div className="stars-container">
                {Array.from({length: 50}).map((_, i) => (
                    <span key={i} className="star"></span>
                ))}
            </div>
            <div className="birthday-message">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1800 400"
                    className="birthday-svg"
                >
                    <defs>
                        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#fff6b7"/>
                            <stop offset="50%" stopColor="#ffdd94"/>
                            <stop offset="100%" stopColor="#f8a488"/>
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="4.5" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>

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