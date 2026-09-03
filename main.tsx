import React from 'react'
import {createRoot} from 'react-dom/client'
import Home from './Home'
import CaseStudy from './CaseStudy'
import type {Lang} from './Shared'
import './styles.css'

function App(){const path=window.location.pathname;const lang:Lang=path.startsWith('/en')?'en':'vi';const normalized=lang==='en'?(path.replace(/^\/en/,'')||'/'):path;return normalized.startsWith('/projects/recruitment-management')?<CaseStudy lang={lang}/>:<Home lang={lang}/>}
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>)
