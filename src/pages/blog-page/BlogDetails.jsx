import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loader from '../../components/loader/Loader';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const BlogDetails = () => {
    const { id } = useParams();
    const { data: singleBlogData = [], refetch, isLoading } = useQuery({
        queryKey: ['singleBlogData', id],
        queryFn: async () => {
            const res = await axios.get(`https://blog-backend-blush-theta.vercel.app/api/v1/single-blogs/${id}`);
            return res?.data?.data;
        }
    });

    if (isLoading) {
        return (
            <div>
                <Loader></Loader>
            </div>
        );
    }

    return (
        <div>
            <div className='container max-w-7xl mx-auto px-4 py-8'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }} // Start from below with 0 opacity
                    animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
                    transition={{ duration: 0.8 }} // Duration of the animation
                >
                    <h2 className='text-3xl font-bold mb-4'>{singleBlogData?.title}</h2>
                    <div className='flex items-center mb-4'>
                        <motion.img
                            src={singleBlogData?.author?.authorImage}
                            alt=""
                            className='w-10 h-10 rounded-full mr-3 hover:scale-105'
                            initial={{ opacity: 0, x: -50 }} // Start from the left with 0 opacity
                            animate={{ opacity: 1, x: 0 }} // Animate to full opacity and move to original position
                            transition={{ duration: 0.6 }} // Duration of the animation
                        />
                        <div>
                            <p className='text-lg font-medium'>{singleBlogData?.author?.authorName}</p>
                            <p className='text-gray-500'>
                                {singleBlogData?.date ? (
                                    <span>{new Date(singleBlogData.createdAt).toLocaleDateString()}</span>
                                ) : (
                                    <span>{new Date(singleBlogData.createdAt).toLocaleDateString()}</span>
                                )}
                            </p>
                        </div>
                    </div>
                    <motion.img
                        src={singleBlogData?.image}
                        alt=""
                        className='w-full md:h-[580px] rounded-md object-cover mb-4'
                        initial={{ opacity: 0, y: 50 }} // Start from below with 0 opacity
                        animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
                        transition={{ duration: 1 }} // Duration of the animation
                    />
                    <div className='space-y-4'>
                        <p>{singleBlogData.description}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BlogDetails;
