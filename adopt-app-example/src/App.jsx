import { createRoot } from "react-dom/client"
import SearchParams from "./SearchParams"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Details from "./Details"
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity
    }
  }
})
const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/">Adopt me!</Link>
        </header>
        <div>
          <Routes>
            <Route path="/details/:id" element={<Details/>}/>
            <Route path="/" element={<SearchParams/>}/>
          </Routes>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  )
}
const rootContainer = document.querySelector('#root')
const root = createRoot(rootContainer)
root.render(<App/>)
