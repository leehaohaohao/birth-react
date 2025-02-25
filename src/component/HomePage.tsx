/**
 * @description
 * @author lihao
 * @date 2025/2/23 23:29
 */
import './HomePage.css';
import {useState} from "react";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate(); // 获取导航函数
    const handleHeyHeyClick = () => {
        navigate('/heyhey'); // 跳转到嘿嘿页面
    };
    const [balloons, setBalloons] = useState([1, 2, 3, 4, 5,6,7,8,9,10]); // 初始气球的数量

    // 点击气球后的动画
    const handleBalloonClick = (index: number) => {
        const newBalloons = balloons.filter((_, i) => i !== index); // 点击后移除气球
        setBalloons(newBalloons);
    };

    return (
        <div className="homepage">
            <div className="birthday-message">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1800 300"
                    className="birthday-svg"
                >
                    <text
                        x="50%"
                        y="80"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="3"
                        strokeDasharray="1000"
                        strokeDashoffset="1000"
                        textAnchor="middle"
                        className="birthday-text"
                    >
                        生日快乐！
                    </text>
                    <text
                        x="50%"
                        y="180"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="3"
                        strokeDasharray="1000"
                        strokeDashoffset="1000"
                        textAnchor="middle"
                        className="birthday-text"
                    >
                        愿你在每一个季节里都收获满满的幸福与爱！
                    </text>
                </svg>
            </div>

            <div className="nav-blocks">
                <div className="nav-item" onClick={handleHeyHeyClick}>嘿嘿</div>
                <div className="nav-item">cake</div>
                <div className="nav-item">祝福</div>
                <div className="nav-item">关于</div>
            </div>

            {/* 底部气球交互效果 */}
            <div className="balloon-container">
                {balloons.map((_, index) => (
                    <div
                        key={index}
                        className="balloon"
                        onClick={() => handleBalloonClick(index)}
                    >
                        🎈
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;





