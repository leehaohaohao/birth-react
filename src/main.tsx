import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './component/HomePage.tsx';
import CakePage from "./component/CakePage.tsx";
import ScrollPhotoPage from "./component/ScrollPhotoPage.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />  {/* 首页路由 */}
                <Route path="/scroll" element={<ScrollPhotoPage />} />  {/* 嘿嘿页面路由 */}
                <Route path="/cake" element={<CakePage/>}/>  {/* 蛋糕页面路由 */}
            </Routes>
        </Router>
    </StrictMode>
);
