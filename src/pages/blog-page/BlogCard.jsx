import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BlogCard = ({ blog }) => {
    return (
        <div className='border rounded-lg h-[500px] p-4 bg-white shadow-md'>
            <Link to={`/blog-details/${blog?._id}`}>
                <img
                    src={blog.image || 'https://via.placeholder.com/150'}
                    alt={`Thumbnail for ${blog.title}`}
                    className='w-full h-48 object-cover mb-4 hover:scale-105 transition-all duration-200 cursor-pointer rounded-md'
                />
            </Link>
            <div>
                <p className='bg-secondary/5 inline-block text-sm text-secondary px-3 py-1 rounded-md mb-3'>Technology</p>
                <Link to={`/blog-details/${blog?._id}`}>
                    <h3 className='text-xl font-semibold text-gray-800 hover:text-secondary mb-2'>{blog.title}</h3>
                </Link>
                <p className='text-gray-500'>
                    {`${blog.description?.substring(0, 150) || 'No description available'}`}...
                </p>
                <div className='mt-4 flex items-center'>
                    <img
                        src={blog.author?.authorImage || 'https://via.placeholder.com/50'}
                        alt={`Author: ${blog.author?.authorName || 'Unknown'}`}
                        className='size-10 rounded-full mr-3'
                    />
                    <div>
                        <p className='text-sm text-gray-600'>{blog.author?.authorName || 'Unknown Author'}</p>
                        <p className='text-xs text-gray-400'>
                            {blog?.date
                                ? <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                : <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

BlogCard.propTypes = {
    blog: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        image: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        author: PropTypes.shape({
            authorImage: PropTypes.string,
            authorName: PropTypes.string.isRequired,
        }),
        date: PropTypes.string,
        createdAt: PropTypes.string.isRequired,
    }).isRequired,
};

export default BlogCard;
