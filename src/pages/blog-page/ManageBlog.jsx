import BlogCard from './BlogCard';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useState } from 'react';
import { motion } from 'framer-motion';

const ManageBlog = () => {
  const [showBlogs, setShowBlogs] = useState(6);
  const [searchTerm] = useState(''); // TODO: Use Blog Context

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
  );

  const handleMoreBlog = () => {
    setShowBlogs(prev => prev + 3);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <motion.div
        className="grid lg:grid-cols-3 grid-cols-1 gap-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {blogData.slice(0, showBlogs).map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <BlogCard blog={blog} />
          </motion.div>
        ))}
      </motion.div>
      <div>
        {showBlogs < blogData.length && (
          <motion.div
            className="my-10 mb-5"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
          >
            <button
              onClick={handleMoreBlog}
              className="block mx-auto px-4 rounded-2xl bg-[#4B6BFB] text-white font-bold py-2"
            >
              View More
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ManageBlog;
