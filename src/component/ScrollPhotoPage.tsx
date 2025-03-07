/**
 * @description
 * @author lihao
 * @date 2025/3/7 22:35
 */
import {useEffect} from "react";
const ScrollPhotoPage = () => {
    useEffect(() => {
        // 禁用外层 body 滚动
        document.body.style.overflow = "hidden";

        return () => {
            // 组件卸载时恢复滚动
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div>
            <iframe
                src={"/opensource/index.html"}
                style={{ width: "100%", height: "100vh", border: "none" }}
            ></iframe>
        </div>
    );
};


export default ScrollPhotoPage;
