import React from "react";
import { Parallax } from "react-parallax";
import { Link } from 'react-router-dom'
import bgimg from '../Images/clipboard2.jpg'


function Home() {

    return (
        <div style={{ overflowX: "hidden" }}>
            <Parallax
                style={{ height: "90vh" }} bgImage={bgimg} strength={500}>

                <div className="text-center mt-5">
                    <h1 className=" text-black mb-3">My Docs</h1>
                    <h2 className=" text-secondary " >
                        Store and Edit your documents here
                    </h2>
                </div>

                <div className="d-flex justify-content-evenly mt-5">

                    <Link to={'/add'}>
                        <div >
                            <button className="btn btn-transparent mt-5 fw-bolder fs-2 text-center" style={{ border: "solid 1px", borderRadius: "5px", width: '200px', height: '200px' }}>
                                Add Notes <i style={{height:'45px'}} className="fa-solid fa-add text-danger "></i></button>
                        </div>
                    </Link>

                    <Link to={'/view'}>
                        <button className="btn btn-transparent mt-5 ms-3 fs-2 fw-bolder" style={{ border: "solid 1px", borderRadius: "5px", width: '200px', height: '200px' }}>
                            View Notes
                            <i style={{height:'45px'}} className="fa-solid fa-note-sticky ms-2 text-danger"></i>
                        </button>
                    </Link>
                </div>

            </Parallax>
        </div>
    );
}

export default Home;