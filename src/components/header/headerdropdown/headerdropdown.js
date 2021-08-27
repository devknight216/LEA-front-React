/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react';
import {
  LogoutIcon,
  BookmarkIcon,
  PencilIcon,
  MailIcon,
  HomeIcon,
  UserCircleIcon,
  CogIcon
} from '@heroicons/react/outline'
import { useDispatch, useSelector } from 'react-redux';
import { SignOut } from 'reduxstore/authreducer/action';
import { Link } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HeaderDropdownComponent() {
  const dispatch = useDispatch();
  const AuthUser = useSelector(state => state.auth.user);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className=" flex items-center justify-between w-full bg-white text-sm font-medium text-gray-700  focus:outline-none">
          <UserCircleIcon className="-mr-1 ml-2 h-12 w-12" aria-hidden="true" />
          <div className="ml-3 text-gray-500">
            <p className="font-bold text-base">{AuthUser.name}</p>
            <p className="text-xs">{AuthUser.role.toUpperCase()}</p>
          </div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="z-10 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
             
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'group flex items-center px-4 py-2 text-sm'
                  )}
                >
                  <PencilIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                  Edit Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'group flex items-center px-4 py-2 text-sm'
                  )}
                >
                  <MailIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                  Messages
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'group flex items-center px-4 py-2 text-sm'
                  )}
                >
                  <BookmarkIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                  Booking History
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-2">
            {
              AuthUser?.role === "host" && <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/host"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'group flex items-center px-4 py-2 text-sm'
                    )}
                  >
                    <HomeIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                    Host your Space
                  </Link>
                )}
              </Menu.Item>
            }
            {
              AuthUser?.role === "admin" && <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/admin"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'group flex items-center px-4 py-2 text-sm'
                    )}
                  >
                    <CogIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                    Admin Panel
                  </Link>
                )}
              </Menu.Item>
            }

          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <div
                  onClick={() => {dispatch(SignOut())}}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'group flex items-center px-4 py-2 text-sm cursor-pointer'
                  )}
                >
                  <LogoutIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                  Log Out
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}