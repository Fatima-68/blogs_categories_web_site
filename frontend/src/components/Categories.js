"use client"
import { useCatogoryStore } from '@/stores/useCatogoryStore'
import React from 'react'

function Categories({categories}) {
  const {category, setCategory} = useCatogoryStore();
  console.log(category);
  return (
    <div className='pt-5 flex gap-2'>
        {categories.map((i) =>(
        <button key ={i.documentId} 
        onClick={() => setCategory(i.title)}
        className='bg-black text-white py-2 px-5 rounded-b-md'>
          {i.title}
        </button>
      ))}
       <button 
        onClick={() => setCategory(null)}
        className='bg-black text-white py-2 px-5 rounded-b-md'>
          All
        </button>
    </div>
  )
}

export default Categories