import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {

  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router.jsx';
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <RouterProvider router={router} >

        </RouterProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </StrictMode>,
)