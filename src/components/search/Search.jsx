import React, { useContext, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { BlogContext } from '../../context/BlogProvider';

const Search = () => {
    const { searchTearm, setSearchTerm } = useContext(BlogContext);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSearch = () => {
        setSearchTerm(inputValue); // Update the search term in context
        setInputValue(''); // Reset the input value
    };


    return (
        <div className='relative'>
            <input
                type="text"
                value={inputValue} // Bind the input value to state
                placeholder='Search...'
                onChange={handleChange}
                className='bg-[#F4F4F5] py-2 pl-4 pr-4 focus:outline-none rounded-full'
            />
            <button onClick={handleSearch}>
                <FaSearch className='absolute right-3 top-2.5 hover:text-secondary' />
            </button>
        </div>
    );
};

export default Search;
