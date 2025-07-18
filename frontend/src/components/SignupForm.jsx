import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import validateManyFields from '../validations';
import Input from './utils/Input';
import Loader from './utils/Loader';

const SignupForm = () => {

  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [fetchData, { loading }] = useFetch();
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    const errors = validateManyFields("signup", formData);
    setFormErrors({});
    if (errors.length > 0) {
      setFormErrors(errors.reduce((total, ob) => ({ ...total, [ob.field]: ob.err }), {}));
      return;
    }

    const config = { url: "/auth/signup", method: "post", data: formData };
    fetchData(config).then(() => {
      navigate("/login");
    });

  }

  const fieldError = (field) => (
    <p className={`mt-1 text-pink-600 text-sm ${formErrors[field] ? "block" : "hidden"}`}>
      <i className='mr-2 fa-solid fa-circle-exclamation'></i>
      {formErrors[field]}
    </p>
  )

  return (
    <>
      <form className='m-auto my-16 max-w-[500px] p-8 bg-white border-2 shadow-md rounded-md'>
        {loading ? (
          <Loader />
        ) : (
          <>
            <h2 className='font-semibold text-center mb-4'>Welcome, Please signup here</h2>
            <div className="mb-4">
              <label htmlFor="name">Full Name</label>
              <Input type="text" name="name" id="name" value={formData.name} placeholder="Full Name" onChange={handleChange} />
              {fieldError("name")}
            </div>

            <div className="mb-4">
              <label htmlFor="email" >Email</label>
              <Input type="text" name="email" id="email" value={formData.email} placeholder="Enter your Email" onChange={handleChange} />
              {fieldError("email")}
            </div>

            <div className="mb-4">
              <label htmlFor="password" >Password</label>
              <Input type="password" name="password" id="password" value={formData.password} placeholder="Enter Your password" onChange={handleChange} />
              {fieldError("password")}
            </div>

            <button className='bg-blue-500 rounded-sm w-full text-white px-4 py-2 font-medium hover:bg-primary-dark' onClick={handleSubmit}>Submit</button>

            <div className='pt-4 flex justify-center'>
              <Link to="/login" className='text-blue-400'>Already have an account? <span className='underline'>Login</span></Link>
            </div>
          </>
        )}

      </form>
    </>
  )
}

export default SignupForm