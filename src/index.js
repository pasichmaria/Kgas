import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from '@mui/material'

import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { theme } from './theme/theme'

export const queryOptions = {
  refetchOnWindowFocus: false,
  retry: true,
  staleTime: 1000 * 60 * 5,
  cacheTime: 1000 * 60 * 5,
  onError: (error) => {
    console.log(error)
  },
  onSuccess: (data) => {
    console.log('Query succeeded', data)
  }
}
export const mutationOptions = {
  onError: (error) => {
    console.log(error)
  },
  onSuccess: (data) => {
  }
}
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: queryOptions, mutations: mutationOptions
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Suspense fallback={'Loading ...'}>
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </LocalizationProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
