import { useState } from "react"
const SearchParams = () => {
  const [location, setLocation] = useState("Houston, TX")
  // Same as:
  // const locationHook = useState("")
  // const location = locationHook[0]
  // const setLocation = locationHook[1]
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
        </label>
        <input id="location" value={location} onChange={e => setLocation(e.target.value)} placeholder="Location"/>
        <button type="button">Submit</button>
      </form>
    </div>
  )
}
export default SearchParams
