import React from 'react'
import Add from './Add'
import Edit from './Edit'

const View = () => {
    return (
        <>
            <div className="d-flex justify-content-between mt-2">
                <h3 className="text-warning">All Projects</h3>
                <div> <Add /> </div>
            </div>
            <div className="mt-2">
                <div className="border rounded p-2 d-flex justify-content-between mb-3">
                    <h5>Title</h5>
                    <div className="d-flex align-items-center">
                        <div><Edit /></div>
                        <div className="btn"><a href="" target='_blank'><i className="fa-brands fa-github"></i></a></div>
                        <button className='btn text-danger'><i className="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default View