import React from 'react'

const TaskList = () => {
    return (

        <div id='taskList' className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10">
            <div className=" flex-shrink-0 w-[300px] p-5 bg-red-400 rounded-xl ">

                <div className='flex justify-between items-center'>
                    <h3 className="text-sm bg-red-600 px-3 py-1 rounded">High</h3>
                    <h4 className='text-sm'>20-FEB 2024</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
                <p className="text-sm mt-2 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, blanditiis ipsum! Laborum, minima veritatis sequi amet ullam quasi quisquam. Facere error voluptatem veniam quos cumque ratione dolor explicabo eligendi recusandae.
                </p>
            </div>

            <div className=" flex-shrink-0 w-[300px] p-5 bg-green-400 rounded-xl ">

                <div className='flex justify-between items-center'>
                    <h3 className="text-sm bg-red-600 px-3 py-1 rounded">High</h3>
                    <h4 className='text-sm'>20-FEB 2024</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
                <p className="text-sm mt-2 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, blanditiis ipsum! Laborum, minima veritatis sequi amet ullam quasi quisquam. Facere error voluptatem veniam quos cumque ratione dolor explicabo eligendi recusandae.
                </p>
            </div>
            <div className=" flex-shrink-0 w-[300px] p-5 bg-blue-400 rounded-xl ">

                <div className='flex justify-between items-center'>
                    <h3 className="text-sm bg-red-600 px-3 py-1 rounded">High</h3>
                    <h4 className='text-sm'>20-FEB 2024</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
                <p className="text-sm mt-2 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, blanditiis ipsum! Laborum, minima veritatis sequi amet ullam quasi quisquam. Facere error voluptatem veniam quos cumque ratione dolor explicabo eligendi recusandae.
                </p>
            </div>
            <div className=" flex-shrink-0 w-[300px] p-5 bg-yellow-400 rounded-xl ">

                <div className='flex justify-between items-center'>
                    <h3 className="text-sm bg-red-600 px-3 py-1 rounded">High</h3>
                    <h4 className='text-sm'>20-FEB 2024</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
                <p className="text-sm mt-2 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, blanditiis ipsum! Laborum, minima veritatis sequi amet ullam quasi quisquam. Facere error voluptatem veniam quos cumque ratione dolor explicabo eligendi recusandae.
                </p>
            </div>
        </div>

    )
}

export default TaskList
