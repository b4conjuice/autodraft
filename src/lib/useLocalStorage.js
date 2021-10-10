import { useState, useEffect } from 'react'

const useLocalStorage = (key, value) => {
  const [item, setItem] = useState(value)

  useEffect(() => {
    const update = async () => {
      const storedItem = JSON.parse(localStorage.getItem(key)) || value
      setItem(storedItem)
    }
    update()
  }, [])

  const updateItem = newValue => {
    setItem(newValue)
    localStorage.setItem(
      key,
      typeof newValue === 'string' ? newValue : JSON.stringify(newValue)
    )
  }

  return [item, updateItem]
}

export default useLocalStorage
