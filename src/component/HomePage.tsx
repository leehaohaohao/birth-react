/**
 * @description
 * @author lihao
 * @date 2025/2/23 23:29
 */
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="birthday-message">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1800 300"  /* 调整viewBox，增加高度以适应两行文本 */
                    className="birthday-svg"
                >
                    <text
                        x="50%"  /* 水平居中 */
                        y="80"   /* 调整y值来控制文本的垂直位置 */
                        fill="none"
                        stroke="#fff"
                        strokeWidth="3"
                        strokeDasharray="1000"
                        strokeDashoffset="1000"
                        textAnchor="middle"  /* 水平居中 */
                        className="birthday-text"
                    >
                        生日快乐！
                    </text>
                    <text
                        x="50%"  /* 水平居中 */
                        y="180"  /* 第二行文字的y值更大，放置在下一行 */
                        fill="none"
                        stroke="#fff"
                        strokeWidth="3"
                        strokeDasharray="1000"
                        strokeDashoffset="1000"
                        textAnchor="middle"  /* 水平居中 */
                        className="birthday-text"
                    >
                        愿你在每一个季节里都收获满满的幸福与爱！
                    </text>
                </svg>
            </div>

            <div className="nav-blocks">
                <div className="nav-item">嘿嘿</div>
                <div className="nav-item">cake</div>
                <div className="nav-item">祝福</div>
                <div className="nav-item">关于</div>
            </div>
        </div>
    );
};

export default HomePage;





