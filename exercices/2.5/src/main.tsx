import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from '../src/components/App/index.tsx'

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <App title='Get started' message='You are a master in the art of clicking !' buttonMessage='Please click on me now !'/>
  </StrictMode>,
)
