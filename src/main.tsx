import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './component/HomePage.tsx';
import HeyHeyPage from './component/HeyHeyPage.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />  {/* 首页路由 */}
                <Route path="/heyhey" element={<HeyHeyPage />} />  {/* 嘿嘿页面路由 */}
            </Routes>
        </Router>
    </StrictMode>
);
