import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const DataContext = createContext()

const DataProvider = ({ children }) => {

  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/kolapowariz/repos');
        const data = await response.json();
        if(Array.isArray(data)) {
          setPost(data)
          setLoading(false)
        } else{
          console.log('Data is not an array');
        }
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    }
    fetchingData();
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <DataContext.Provider value={post}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider;