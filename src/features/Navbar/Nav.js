import { NavLink, Link } from "react-router-dom"
import { MdMenu } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from "@mui/material"
import { useState } from "react";
import logo from '../../assets/images/logo.jpg'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Nav() {

    const [nav, setNav] = useState(false)

    const handlenav = () => {
        setNav((prev) => !prev)
    }

    return (
        <header className="py-5 bg-slate-100 w-full z-50 max-md:border-b max-md:border-b-blue-300">
            <div className="max-container">
                <nav className="flex items-center justify-between relative">
                    <Link to="/" className="logo">
                        <img src={logo} alt="logo" className="w-[80px] h-15 rounded object-cover max-md:w-[60px]" />
                    </Link>
                    <ul className={nav ? 'max-md:top-[150%] nav' : 'nav nav-links'}>

                        <li className="hidden"><NavLink to="/" className={({ isActive }) =>
                            `nav-links ${isActive ? "text-blue-500" : "text-gray-900"}`
                        }>Home</NavLink></li>
                        <li><NavLink to="/" className={({ isActive }) =>
                            `nav-links ${isActive ? "text-blue-500" : "text-gray-900"}`
                        }>Home</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) =>
                            `nav-links ${isActive ? "text-blue-500" : "text-gray-900"}`
                        }>About</NavLink></li>
                        <li><NavLink to="/ProductList" className={({ isActive }) =>
                            `nav-links ${isActive ? "text-blue-500" : "text-gray-900"}`
                        }>Product</NavLink></li>
                        <li><NavLink to="/cart" className={({ isActive }) =>
                            `nav-links ${isActive ? "text-blue-500" : "text-gray-900"}`
                        }>Cart</NavLink></li>
                        <li><NavLink to="/contect" className={({ isActive }) =>
                            `nav-links ${isActive ? "text-blue-500" : "text-gray-900"}`
                        }>Contect</NavLink></li>


                    </ul>


                    <Menu as="div" className="relative ml-3 flex items-center space-x-5">
                        <div className="menu-icon text-blue-500 cursor-pointer hidden max-md:block">
                            {nav ?
                                <CiCircleRemove onClick={handlenav} /> :
                                <MdMenu onClick={handlenav} />
                            }
                        </div>
                        <li>
                            <NavLink to="/cart">
                                <Badge color="secondary" badgeContent={1} className="text-blue-600 cursor-pointer">
                                    <ShoppingCartIcon />
                                </Badge>
                            </NavLink>
                        </li>
                        <div>
                            <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">Open user menu</span>
                                <img
                                    className="h-8 w-8 rounded-full"
                                    src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
                                    alt=""
                                />
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
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                        >
                                            Your Profile
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                        >
                                            Settings
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                        >
                                            Sign out
                                        </a>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </nav>
            </div>
        </header>
    )
}
export default Nav