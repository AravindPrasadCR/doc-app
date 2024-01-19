import React from 'react';

function App() {

    return (    

        <div className='bg-dark'>
            <div style={{margin:'0px 100px'}}  className='w-90 pt-4'>
        <div className="footer-content d-flex justify-content-between gap-5">
            <div style={{width: '400px'}} className="title">
                <h3 className='d-flex text-white'>My Docs</h3>
                <p style={{textAlign: 'justify',color:'white'}}>The hub for all your files. Our app replaces a document viewer, PDF reader, "read it later", music and video player, file downloader, cloud integrator, and other useful applications in one elegant app experience.</p> 
            </div>

            <div className="guides d-flex flex-column text-white">
                <h3 className='text-white'>Links</h3>
                <a style={{color: 'white'}} className='text-decoration-none' href="" >Services</a>
                <a style={{color: 'white'}} className='text-decoration-none' href="">Policy</a>
                <a style={{color: 'white'}} className='text-decoration-none' href="">Rewards</a>
                <a style={{color: 'white'}} className='text-decoration-none' href="">More</a>
            </div>
            <div style={{ color: 'white' }} className="icons d-flex flex-column">
                        <h3 className='text-white'>Follow Us</h3>
                        <div className='d-flex gap-2 justify-content-between'>
                            <a href=""><i style={{height: '50px', color: 'white' }} class="fa-solid fa-envelope fa-2x"></i></a>
                            <a href=""><i style={{height: '50px', color: 'white' }} class="fa-brands fa-twitter fa-2x"></i></a>
                            <a href=""><i style={{height: '50px', color: 'white' }} class="fa-brands fa-github fa-2x"></i></a>
                            <a href=""><i style={{height: '50px', color: 'white' }} class="fa-brands fa-facebook fa-2x"></i></a>
                            <a href=""><i style={{height: '50px', color: 'white' }} class="fa-brands fa-instagram fa-2x"></i></a>
                        </div>
                    </div>

                    <div className="contact" id="contact">
                        <h3 className='text-white'>Contact Us</h3>
                        <div className="d-flex">
                            <input placeholder='Enter your mail' type="text" className='form-control' />
                            <button className='btn btn-dark ms-2'><i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>

                </div>
                <p className='mt-4 text-center'>Copyright &copy; 2023. Built with React</p>
            </div>
            </div>
    )
}
export default App;