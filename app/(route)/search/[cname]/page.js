"use client"
import React from 'react'
import { useEffect } from 'react'

function Search({params}) {

  useEffect(()=>{
    console.log(params.cname)
  }, [])
  return (
    <div>Search</div>
  )
}

export default Search