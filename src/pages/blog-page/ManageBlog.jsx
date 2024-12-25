import BlogCard from './BlogCard';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useState } from 'react';

const ManageBlog = () => {
  const [showBlogs, setShowBlogs] = useState(6)
  const [searchTerm] = useState('') //TODO: Use Blog Context


  const { data: blogData = [], refetch, isLoading } = useQuery({
    queryKey: ['blogData'],
    queryFn: async () => {
      const res = await axios.get("https://blog-backend-blush-theta.vercel.app/api/v1/all-blogs");
      return res.data.blogs;
    }
  });


  const filteredBlogs = blogData.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.author.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleMoreBlog = () => {
    setShowBlogs(prev => prev + 3)
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className=' grid lg:grid-cols-3 grid-cols-1 gap-8  ' >
        {
          blogData.slice(0, showBlogs).map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))
        }

      </div>
      <div>
        {
          showBlogs < blogData.length && (
            <div className=' my-10 mb-5'>
              <button onClick={handleMoreBlog} className="  block mx-auto px-4 rounded-2xl bg-[#4B6BFB] text-white font-bold py-2  ">View More</button>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default ManageBlog
