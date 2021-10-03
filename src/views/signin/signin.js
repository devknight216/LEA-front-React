import { useEffect } from 'react';
import Brand from 'assets/imgs/brand/brand.svg';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { SignIn } from 'reduxstore/authreducer/slice';
import { SpinnerCircularFixed } from 'spinners-react';


export default function SigninPage() {

  //React hook form
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const token = useSelector((state) => state.auth.token);
  const authUser = useSelector((state) => state.auth.user);
  const status = useSelector(state => state.auth.status);

  const onSubmit = async( data )=> {
    const user = {
      email: data.email,
      password: data.password,
      rememberMe: data.rememberMe
    }
    try {      
      dispatch(SignIn(user));
    } catch (error) {
    }
  };

  useEffect(()=>{
    if(token){
      if(authUser.role === 'admin'){
        history.push('/admin');
      } else {
        history.push('/');
      }
    }
  },[token])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/">
          <img
            className="mx-auto h-28 w-auto"
            src={Brand}
            alt="Workflow"
          />
        </Link>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
      </div>
  
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  {...register("email", { required: true })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
  
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  {...register("password", { required: true })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
  
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  {...register("rememberMe")}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>
  
            <div>
              <button
                type="submit"
                className="w-full flex justify-center items-center gap-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
                {
                  status == 2 && <SpinnerCircularFixed size={20} thickness={200} speed={100} color="#000000AA" secondaryColor="#D9D9D6" />
                }
              </button>
            </div>
          </form>
  
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Haven't account? <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">Sign Up</Link></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }