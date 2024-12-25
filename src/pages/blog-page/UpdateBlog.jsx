import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loader from "../../components/loader/Loader";

const UpdateBlog = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const { data: singleBlogData = [], refetch, isLoading } = useQuery({
        queryKey: ['singleBlogData', id],
        queryFn: async () => {
            const res = await axios.get(`https://blog-backend-blush-theta.vercel.app/api/v1/single-blogs/${id}`);
            return res.data.data;
        }
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const blogData = {
            title: data.title,
            description: data.description,
            image: data.image,
            author: {
                authorName: data.authorName,
                authorImage: data.authorImage,
            },
        };
        console.log(blogData);
        try {
            setLoading(true);
            let res = await axios.put(`https://blog-backend-blush-theta.vercel.app/api/v1/update-blog/${id}`, blogData);
            setLoading(false);
            if (res) {
                Swal.fire({
                    icon: "success",
                    title: "Blog update successfully!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                // Reset form
                refetch();
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Failed to update blog",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };
    if (isLoading) {
        return <div>
            <Loader></Loader>
        </div>
    }

    return (
        <div className="my-6 flex items-center justify-center">
            <Helmet>
                <title>Update Blog</title>
            </Helmet>
            <div className="w-[80%]  bg-white p-6 rounded-lg shadow-lg">
                <motion.h2
                    className="text-2xl font-bold text-gray-800 text-center mb-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Update Blog
                </motion.h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Title */}
                    <motion.div
                        className="mb-4"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Title
                        </label>
                        <input
                            type="text"
                            {...register("title", { required: true })}
                            id="title"
                            name="title"
                            defaultValue={singleBlogData?.title}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                            placeholder="Enter title"
                        />
                        {errors.title && <p className="text-red-500 text-sm">Title is required</p>}
                    </motion.div>

                    {/* Description */}
                    <motion.div
                        className="mb-4"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            {...register("description", { required: true })}
                            defaultValue={singleBlogData?.description}
                            rows="5"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                            placeholder="Enter description"
                        ></textarea>
                        {errors.description && <p className="text-red-500 text-sm">Description is required</p>}
                    </motion.div>
                    <div className="avatar offline">
                        <div className="w-24 rounded-full">
                            <img src={singleBlogData?.image} />
                        </div>
                    </div>

                    {/* Image */}
                    <motion.div
                        className="mb-4"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                            Image URL
                        </label>
                        <input
                            type="text"
                            id="image"
                            {...register("image", { required: true })}
                            defaultValue={singleBlogData?.image}
                            name="image"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                            placeholder="Enter image URL"
                        />
                        {errors.image && <p className="text-red-500 text-sm">Image URL is required</p>}
                    </motion.div>

                    {/* Author Name */}
                    <motion.div
                        className="mb-4"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <label htmlFor="authorName" className="block text-sm font-medium text-gray-700">
                            Author Name
                        </label>
                        <input
                            type="text"
                            id="authorName"
                            {...register("authorName", { required: true })}
                            defaultValue={singleBlogData?.author?.authorName}
                            name="authorName"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                            placeholder="Enter author name"
                        />
                        {errors.authorName && <p className="text-red-500 text-sm">Author name is required</p>}
                    </motion.div>

                    {/* Author Image */}
                    <div className="avatar offline">
                        <div className="w-24 rounded-full">
                            <img src={singleBlogData?.author?.authorImage} />
                        </div>
                    </div>
                    <motion.div
                        className="mb-4"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <label htmlFor="authorImage" className="block text-sm font-medium text-gray-700">
                            Author Image URL
                        </label>
                        <input
                            type="url"
                            id="authorImage"
                            {...register("authorImage", { required: true })}
                            defaultValue={singleBlogData?.author?.authorImage}
                            name="authorImage"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                            placeholder="Enter author image URL"
                        />
                        {errors.authorImage && <p className="text-red-500 text-sm">Author image URL is required</p>}
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <button
                            type="submit"
                            className={`w-full bg-[#4B6BFB] text-white py-2 px-4 rounded-md shadow-md transition-all duration-300 ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-secondary-dark"
                                }`}
                            disabled={loading}
                        >
                            {loading ? (
                                <div className="flex justify-center items-center">
                                    <svg
                                        className="animate-spin h-5 w-5 mr-3 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v8H4z"
                                        ></path>
                                    </svg>
                                    Loading...
                                </div>
                            ) : (
                                "Submit"
                            )}
                        </button>
                    </motion.div>
                </form>
            </div>
        </div>
    );
};

export default UpdateBlog;
