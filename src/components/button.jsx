import  React from 'react';

function Button() {
    return (
        <div className='w-full h-auto px-14 py-7 flex justify-end'>
            <button className='w-auto bg-pink-300 px-4 py-2 rounded-md mr-2.5 cursor-pointer text-white hover:bg-gray-500'>
                Add
            </button>
            <button className='border-2 w-auto  bg-pink-500 px-4 py-2 rounded-md cursor-pointer text-white hover:bg-gray-500'>
                Delete
            </button>
        </div>
    );
}

export default Button;