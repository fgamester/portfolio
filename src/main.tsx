import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalContext } from './context/GloblalContext.tsx'
import Router from './router.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <GlobalContext>
    <Router />
  </GlobalContext>,
)
