import { Fragment } from 'react';
import SearchPropertyComponent from './searchproperty'
import { Popover, Transition } from '@headlessui/react';
import {
  BookmarkAltIcon,
  InformationCircleIcon,
  MenuIcon,
  ShieldCheckIcon,
  XIcon,
  UserCircleIcon,
  SparklesIcon,
  HomeIcon
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import BrandIcon from 'assets/imgs/brand/png-black-background.png';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SignOut } from 'reduxstore/authreducer/action';
import { classNames } from 'shared/function';
import HeaderDropdownComponent from './headerdropdown';

const company = [
  { name: 'About', href: '#', icon: InformationCircleIcon },
  { name: 'Privacy and Policies', href: '/policy', icon: ShieldCheckIcon },
];
const resources = [
  { name: 'Guides', href: '#', icon: BookmarkAltIcon },
  { name: 'Staging', href: '/staging', icon: SparklesIcon },
];
export default function HeaderComponent() {

  const authUser = useSelector((state) => state.auth.user);
  const authToken = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

return (
  <Popover className="relative bg-white" id="header">
      {({ open }) => (
          <>
            <div className="absolute inset-0 shadow z-40 pointer-events-none" aria-hidden="true" />
            <div className="relative z-40">
              <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
                <div>
                  <Link to="/" className="flex">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-12 w-auto sm:h-16"
                      src={BrandIcon}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
                  <Popover.Group as="nav" className="flex space-x-10">
                    <Link to="/properties" className="text-base font-medium text-gray-500 hover:text-gray-900">
                      View All Properties
                    </Link>
                    <Link to="/profit" className="text-base font-medium text-gray-500 hover:text-gray-900">
                      Courses
                    </Link>
                    <Link to="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
                      Contact Us
                    </Link>
                    <Popover>
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              open ? 'text-gray-900' : 'text-gray-500',
                              'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                            )}
                          >
                            <span>More</span>
                            <ChevronDownIcon
                              className={classNames(
                                open ? 'text-gray-600' : 'text-gray-400',
                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>
  
                          <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 -translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 -translate-y-1"
                          >
                            <Popover.Panel
                              static
                              className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg"
                            >
                              <div className="absolute inset-0 flex">
                                <div className="bg-white w-1/2" />
                                <div className="bg-gray-50 w-1/2" />
                              </div>
                              <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                                <nav className="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                                  <div>
                                    <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Company</h3>
                                    <ul className="mt-5 space-y-6">
                                      {company.map((item) => (
                                        <li key={item.name} className="flow-root">
                                          <Link
                                            to={item.href}
                                            className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                                          >
                                            <item.icon
                                              className="flex-shrink-0 h-6 w-6 text-gray-400"
                                              aria-hidden="true"
                                            />
                                            <span className="ml-4">{item.name}</span>
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div>
                                    <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                      Resources
                                    </h3>
                                    <ul className="mt-5 space-y-6">
                                      {resources.map((item) => (
                                        <Link to={item.href} className="flow-root" key={item.name}>
                                          <div
                                            className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                                          >
                                            <item.icon
                                              className="flex-shrink-0 h-6 w-6 text-gray-400"
                                              aria-hidden="true"
                                            />
                                            <span className="ml-4">{item.name}</span>
                                          </div>
                                        </Link>
                                      ))}
                                    </ul>
                                  </div>
                                </nav>
                                <div className="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                                  
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  </Popover.Group>
                    {authToken ?
                      <div>
                        <HeaderDropdownComponent/>
                      </div>
                      :
                      <div className="flex items-center md:ml-12">
                        <Link to="/signin" className="text-base font-medium text-gray-500 hover:text-gray-900">
                          Sign in
                        </Link>
                        <Link to="/signup" className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-500 hover:bg-red-600">
                          Sign up
                        </Link>
                      </div>
                    }
                </div>
              </div>
              <div className="absolute w-full top-52 hidden lg:block">
                {
                  path=="/" && <SearchPropertyComponent />
                }
              </div>
            </div>
  
            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5 sm:pb-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <img
                          className="h-10 w-auto"
                          src={BrandIcon}
                          alt="Workflow"
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6 sm:mt-8">
                      <nav>
                        <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                          {/* place mobile search here */}
                        </div>
                        <div className="mt-8 text-base">
                          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            {' '}
                            View all products <span aria-hidden="true">&rarr;</span>
                          </a>
                        </div>
                      </nav>
                    </div>
                  </div>
                  <div className="py-6 px-5">
                    <div className="grid grid-cols-2 gap-4">
                      <Link to="/properties" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                        Properties
                      </Link>
  
                      <Link to="/profit" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                        Courses
                      </Link>
  
                      <Link to="/staging" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                        Staging
                      </Link>
  
                      <Link to="/policy" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                        Privacy and Policies
                      </Link>

                      {
                          authUser?.role== "admin" &&<Link to="/admin" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                            Admin
                          </Link>
                      }

                      {
                          authUser?.role== "host" &&<Link to="/host" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                            Add New Space
                          </Link>
                      }
  
                      <Link to="/contact" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                        Contact Us
                      </Link>
                    </div>
                    <div className="mt-6">
                    {authUser ?
                    <div onClick={() => dispatch(SignOut())} className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-500 hover:bg-red-600">
                      Sign Out
                    </div>
                    :
                    <>
                      <Link to="/signup"className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-500 hover:bg-red-600">
                        Sign up
                      </Link>
                      <p className="mt-6 text-center text-base font-medium text-gray-500">
                        Existing customer?{' '}
                        <Link to="/signin" className="text-red-500 hover:text-red-600">
                          Sign in
                        </Link>
                      </p>
                    </>
                    }
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    )
  }