import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from "./component/HomePage.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
)
