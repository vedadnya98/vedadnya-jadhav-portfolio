import React from 'react';
import '../App.css'
import logo from '../imgs/logoBlack.png'

const Loader = () => {
	return (
        <div className="loader">
            <div className="loaderElement">
            {/* <h1>HI</h1> */}
            <img src={logo} alt="Logo"/>
            <br></br>
            {/* <div>
                <div className="spinner-grow text-light" role="status">
                <span className="sr-only">Loading...</span>
                </div>                <div className="spinner-grow text-light" role="status">
                <span className="sr-only">Loading...</span>
                </div>                <div className="spinner-grow text-light" role="status">
                <span className="sr-only">Loading...</span>
                </div>                <div className="spinner-grow text-light" role="status">
                <span className="sr-only">Loading...</span>
                </div>                <div className="spinner-grow text-light" role="status">
                <span className="sr-only">Loading...</span>
                </div>                <div className="spinner-grow text-light" role="status">
                <span className="sr-only">Loading...</span>
                </div>                <div className="spinner-grow text-light" role="status">
                <span className="sr-only">Loading...</span>
                </div>                <div className="spinner-grow text-light" role="status">
                <span className="sr-only">Loading...</span>
                </div>
            </div> */}
            <main>
                <div class="dank-ass-loader">
                    <div class="row">
                        <div class="arrow up outer outer-18"></div>
                        <div class="arrow down outer outer-17"></div>
                        <div class="arrow up outer outer-16"></div>
                        <div class="arrow down outer outer-15"></div>
                        <div class="arrow up outer outer-14"></div>
                    </div>
                    <div class="row">
                        <div class="arrow up outer outer-1"></div>
                        <div class="arrow down outer outer-2"></div>
                        <div class="arrow up inner inner-6"></div>
                        <div class="arrow down inner inner-5"></div>
                        <div class="arrow up inner inner-4"></div>
                        <div class="arrow down outer outer-13"></div>
                        <div class="arrow up outer outer-12"></div>
                    </div>
                    <div class="row">
                        <div class="arrow down outer outer-3"></div>
                        <div class="arrow up outer outer-4"></div>
                        <div class="arrow down inner inner-1"></div>
                        <div class="arrow up inner inner-2"></div>
                        <div class="arrow down inner inner-3"></div>
                        <div class="arrow up outer outer-11"></div>
                        <div class="arrow down outer outer-10"></div>
                    </div>
                    <div class="row">
                        <div class="arrow down outer outer-5"></div>
                        <div class="arrow up outer outer-6"></div>
                        <div class="arrow down outer outer-7"></div>
                        <div class="arrow up outer outer-8"></div>
                        <div class="arrow down outer outer-9"></div>
                    </div>
                </div>
                </main>
            </div>
        </div>
    )
    }

export default Loader;