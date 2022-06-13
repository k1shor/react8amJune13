import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Layout/Footer'
import Navbar from '../Layout/Navbar'

const Signup = () => {
    return (
        <>
            <Navbar />

            <div className='container text-center my-5'>
                <main class="form-signin w-50 m-auto shadow-lg p-5">
                    <form>
                        <img class="mb-4" src="./logo192.png" alt="" width="72" height="57" />
                        <h1 class="h3 mb-3 fw-normal">Register</h1>

                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingfname" placeholder="first name" />
                            <label for="floatingfname">First Name</label>
                        </div>

                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatinglname" placeholder="last name" />
                            <label for="floatinglname">Last Name</label>
                        </div>

                        <div class="form-floating">
                            <input type="date" class="form-control" id="floatingdob" placeholder="date of birth" />
                            <label for="floatingdob">Date of birth:</label>
                        </div>

                        <div className='form-floating'>
                            <div className='form-control d-flex justify-content-evenly'>
                                <div>
                                    <input type="radio" id='male' name='gender' />
                                    <label htmlFor='male' className='ms-2'>Male</label>
                                </div>
                                <div>
                                    <input type="radio" id='female' name='gender' className='me-2' />
                                    <label htmlFor='female'>Female</label>
                                </div>
                                <div>
                                    <input type="radio" id='others' name='gender' className='me-2' />
                                    <label htmlFor='others'>Others</label>
                                </div>
                            </div>
                            <label>Gender:</label>

                        </div>


                        <div className='form-floating'>
                            <select className='form-control'>
                                <option>Kathmandu</option>
                                <option>Bhaktapur</option>
                                <option>Lalitpur</option>
                                <option>Biratnagar</option>
                                <option>Pokhara</option>
                            </select>
                            <label>Address:</label>
                        </div>





                        <div class="form-floating">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword" >Password</label>
                        </div>

                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingCPassword" placeholder="Confirm Password" />
                            <label for="floatingCPassword" >Confirm Password</label>
                        </div>

                        <div class="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> I agree to the terms and conditions.
                            </label>
                        </div>
                        <button class="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                        Already have an account. <Link to='/signin'>Sign in</Link>


                        <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                    </form>
                </main>
            </div>

            <Footer />
        </>
    )
}

export default Signup