/**
 * @description
 * @author lihao
 * @date 2025/2/25 23:36
 */

import { useEffect, useState } from "react";
import './HeyHeyPage.css';

const HeyHeyPage = () => {
    const messages = [
        " 嘿嘿，终于到了这个页面！",
        " 这里有一段神秘的文字等待你来看~",
        " 每段文字会依次浮现，慢慢消失。",
        " 准备好了吗？下一个就是最有趣的！",
        " 记住，每个瞬间都充满意义！"
    ];

    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [currentChars, setCurrentChars] = useState<string[]>([]);

    useEffect(() => {
        const message = messages[currentMessageIndex];
        let charIndex = 0;

        setCurrentChars([]);  // 清空当前显示的字符数组

        // 每个字符逐个显示
        const interval = setInterval(() => {
            setCurrentChars(prev => [...prev, message[charIndex]]);
            charIndex++;
            if (charIndex >= message.length) {
                clearInterval(interval);
            }
        }, 100); // 每100ms显示一个字符

        return () => clearInterval(interval); // 清理定时器
    }, [currentMessageIndex]);

    useEffect(() => {
        if (currentChars.length === messages[currentMessageIndex].length) {
            const timer = setTimeout(() => {
                setCurrentMessageIndex(prev => (prev + 1) % messages.length);
            }, 2000); // 延迟2秒切换到下一段文字

            return () => clearTimeout(timer);
        }
    }, [currentChars, currentMessageIndex]);

    return (
        <div className="heyhey-page">
            <div className="message">
                {currentChars.map((char, index) => (
                    <span key={index} className="char" style={{ animationDelay: `${index * 100}ms` }}>
            {char}
          </span>
                ))}
            </div>
        </div>
    );
};

export default HeyHeyPage;

