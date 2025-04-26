import Blogitem from '@/components/Blogitem';
import Categories from '@/components/Categories';
import React from 'react'

async function getAllCategories(){
  let response = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL +"/api/categories");
  let res = await response.json();
  //console.log(res);
  return res.data;
}

async function getAllBlogs(){
  let response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL +"/api/blogs?populate=*");
  let res = await response.json();
  return res.data;

}

async function Homepage() {
  let categories = await getAllCategories();
  let blogs = await getAllBlogs();
  //console.log(categories);
  return (
    <div className='bg-gray-300 min-h-screen'>
      <Categories categories = {categories}/>
      <Blogitem blogs ={blogs}/>
    </div>
  );
}

export default Homepage