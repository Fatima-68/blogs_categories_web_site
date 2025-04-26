"use client"
import { useCatogoryStore } from '@/stores/useCatogoryStore';
import Link from 'next/link'
import React from 'react'

function Blogitem({blogs}) {
  const {category, setCategory} = useCatogoryStore();
  const filteredBlogs = !category 
  ? blogs 
  : blogs.filter ( (i) => i.categories?.some((cat) => cat.title ===category)
    );
  return (
    <div className='grid grid-cols-3 gap-5 pt-4'>
       {filteredBlogs.map( (i) =>(
        <Link href={"/details/" + i.documentId} key={i.documentId} className="border border-b-gray-500 p-5">
        <img src ={process.env.NEXT_PUBLIC_API_BASE_URL  + i.image.url} 
        className="w-full h-[200px] object-fit"/>

        <h2>{i.title}</h2>
        <p>{i.description.substring(0,80) + "..."}</p>
        </Link>
       ))}
    </div>
  )
}

export default Blogitem