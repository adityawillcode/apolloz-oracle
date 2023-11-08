import React, { useEffect, useState } from 'react'

function useLocalStorage([key,initialValue]) {
 const initial=initialValue || localStorage.getItem(key)
 const [value,setValue] = useState(initial)
  useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value))
  },[key,setValue])

  return [value,setValue]
}


export default useLocalStorage