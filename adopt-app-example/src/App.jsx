import { createRoot } from "react-dom/client"
import { useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import SearchParams from "./SearchParams"
import Details from "./Details"
import AdoptedPetContext from "./AdotpedPetContext"
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity
    }
  }
})
const App = () => {
  const adoptedPetHook = useState(null)
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPetHook}>
          <header>
            <Link to="/">Adopt me!</Link>
          </header>
          <div>
            <Routes>
              <Route path="/details/:id" element={<Details/>}/>
              <Route path="/" element={<SearchParams/>}/>
            </Routes>
          </div>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}
const rootContainer = document.querySelector('#root')
const root = createRoot(rootContainer)
root.render(<App/>)
