import React, { useState } from 'react'
import SingleBdays from './singleBdays'
import { Data } from './data'
const Birthday = () => {
    const [info, setInfo] = useState(Data)
    const [count, setCount] = useState(Data)

    const handleClick = () => {

        setInfo([])
    }
    return (
        <>
            <div className='content col-lg-5 shadow mt-3 m-auto p-2'>
                <h1 className='display-1 text-center '>
                    {info.length} Birthday
                </h1>
                {info.map((item) => {
                    return (
                        <SingleBdays name={item.name} age={item.age} image={item.Image} />
                    )
                })}
                <div className='button-1 py-3 mt-3'>
                    <button onClick={handleClick} className='w-100 btn bg-danger text-white text-capitalize border-0'> remove all </button>
                </div>
            </div>
        </>
    )
}

export default Birthday
