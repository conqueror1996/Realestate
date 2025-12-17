import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { BrowserRouter } from 'react-router-dom'

import { ProjectProvider } from './context/ProjectContext'
import { ContentProvider } from './context/ContentContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ProjectProvider>
        <ContentProvider>
          <App />
        </ContentProvider>
      </ProjectProvider>
    </BrowserRouter>
  </StrictMode>,
)
