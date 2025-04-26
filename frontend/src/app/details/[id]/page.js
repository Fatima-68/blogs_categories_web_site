import Link from 'next/link';
import React from 'react';
async function getsingleblog(id){
  const response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL +"/api/blogs/"+ id +"?populate=*" );
  const res = await response.json();
  return res.data;
}

// Dynamic Detail Page Component
export default async function DetailPage({ params }) {
  params = await params;
  console.log(params.id);
   const blog = await getsingleblog(params.id);
  console.log(blog)
  return (
    <div className='bg-gray-300 min-h-screen'>
    <Link href={"/"} className="max-w-5xl mx-auto py-10 px-70 text-2xl font-bold ">
        ← Go Back
      </Link>
    <div className='flex justify-center px-70 py-4 '>
    <div className='border border-b-gray-500 p-5'>
      <img
        src={process.env.NEXT_PUBLIC_API_BASE_URL + blog.image.url}
        alt=""
        className="w-[900] h-[400px] object-fit"
      />

      <h1 className="text-2xl font-bold mt-4">{blog.title}</h1>

      <p className="text-gray-700 leading-relaxed text-center">
        {blog.description}
      </p>
      </div>
      </div>
      </div>
  );
}
