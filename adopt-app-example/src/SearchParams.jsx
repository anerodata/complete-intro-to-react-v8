import { useState, useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import useBreedList from "./useBreedList"
import fetchSearch from "./fetchSearch"
import Results from "./Results"
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"]
const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    animal: "",
    breed: "",
    location: ""
  })
  const [animal, setAnimal] = useState("")
  const [breeds] = useBreedList(animal)

  const results = useQuery(["search", requestParams], fetchSearch)
  const pets = results?.data?.pets ?? []
  // Same as:
  // const locationHook = useState("")
  // const location = locationHook[0]
  // const setLocation = locationHook[1]
  return (
    <div className="search-params">
      <form onSubmit={e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const obj = {
          animal: formData.get('animal') ?? '',
          breed: formData.get('breed') ?? '',
          location: formData.get('location') ?? '',
        }
        setRequestParams(obj)
      }}>
        <label htmlFor="location">
          Location
        </label>
        <input id="location" name="location"  placeholder="Location"/>
        <label htmlFor="animal">
          Location
        </label>
        <select
          id="animal"
          name="animal"
          onChange={e => {
            setAnimal(e.target.value)
          }}>
          <option/>
          {ANIMALS.map(animal => (
            <option key={animal}>{animal}</option>
          ))}
        </select>
        <label htmlFor="breed">
          Breed
        </label>
        <select
          id="breed"
          name="breed"
          disabled={breeds.length === 0}
        >
          <option/>
          {breeds.map(breed => (
            <option key={breed}>{breed}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  )
}
export default SearchParams
