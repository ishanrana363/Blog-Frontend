import axios from 'axios';
import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import React Icons for Edit and Delete
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import Framer Motion
import Loader from '../../components/loader/Loader';
import { deleteAlert } from '../../helper/deleteAlert';
import Swal from 'sweetalert2';

const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State to manage search term

  const { data: allBlogData = [], refetch, isLoading } = useQuery({
    queryKey: ['allBlogData'],
    queryFn: async () => {
      const res = await axios.get("https://blog-backend-blush-theta.vercel.app/api/v1/all-blogs");
      return res.data.blogs;
    }
  });

  if (isLoading) {
    return <div><Loader></Loader></div>;
  }
  window.scrollTo(0, 0);

  const handleDelete = async (id) => {
    try {
      let resp = await deleteAlert();
      if (resp.isConfirmed) {
        let res = await axios.delete(`https://blog-backend-blush-theta.vercel.app/api/v1/delete-blog/${id}`);
        if (res) {
          Swal.fire({
            title: 'Blog deleted successfully!',
            icon: 'success',
            confirmButtonText: 'Cool'
          });
          refetch();
        }
      }
    } catch (error) {
      Swal.fire({
        title: 'Error deleting blog!',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
    }
  };

  // Filter blogs based on search term
  const filteredBlogs = allBlogData.filter(blog =>
    blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.author?.authorName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="overflow-x-auto w-full py-10">
      {/* Search Bar */}
      <div className="mb-5 ">
        <input
          type="text"
          placeholder="Search by Title or Author Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/3 float-end mb-10  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <table className="min-w-full table-auto bg-white border border-gray-200 rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 text-left text-gray-600">Number</th>
            <th className="py-2 px-4 text-left text-gray-600">Author Name</th>
            <th className="py-2 px-4 text-left text-gray-600">Author Image</th>
            <th className="py-2 px-4 text-left text-gray-600">View Blog</th>
            <th className="py-2 px-4 text-left text-gray-600">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredBlogs.map((blog, index) => (
            <motion.tr
              key={blog.id}
              className="border-b hover:bg-gray-50"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Initial position: fade out to left or right
              animate={{ opacity: 1, x: 0 }} // Animate to normal position
              transition={{ duration: 0.5, ease: 'easeOut' }} // Duration and easing for the animation
            >
              <td className="py-2 px-4 text-gray-700">{index + 1}</td>
              <td className="py-2 px-4 text-gray-700">{blog?.author?.authorName}</td>
              <td className="py-2 px-4">
                <img
                  src={blog?.author?.authorImage}
                  alt={blog?.author?.authorName}
                  className="w-12 h-12 rounded-full"
                />
              </td>
              <td className="py-2 px-4">
                <Link to={`/blog-details/${blog?._id}`} className="text-blue-500 hover:underline">
                  View Blog
                </Link>
              </td>
              <td className="py-2 px-4 flex space-x-2">
                <div className="flex items-center space-x-3 mt-4">
                  <div>
                    <Link to={`/blog-update/${blog?._id}`}>
                      <button className="text-blue-500 hover:text-blue-700">
                        <FaEdit />
                      </button>
                    </Link>
                  </div>
                  <div>
                    <button
                      onClick={() => handleDelete(blog._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogList;
