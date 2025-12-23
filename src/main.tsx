import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { BrowserRouter } from 'react-router-dom'

import { ProjectProvider } from './context/ProjectContext'
import { ContentProvider } from './context/ContentContext'

import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ProjectProvider>
          <ContentProvider>
            <App />
          </ContentProvider>
        </ProjectProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
