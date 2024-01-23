import { FaTrash } from "react-icons/fa6"
import { Link, NavLink } from "react-router-dom"
import Button from "../Component/Button"
import { FaLongArrowAltRight } from "react-icons/fa";

const addresses = [
    {
        name: 'tushal',
        street: 'parshottam',
        city: 'surat',
        pincode: 395004,
        state: 'gujrat',
        phone: 54235152
    },
    {
        name: 'paka',
        street: 'variyav',
        city: 'surat',
        pincode: 395032,
        state: 'delhi',
        phone: 4394494
    }
]

function CheckOut() {
    return (
        <section className="padding-y">
            <div className="max-container">
                <div className="grid grid-cols-1 gap-x-5 gap-y-10 lg:grid-cols-5">

                    {/* payment form */}
                    <div className="lg:col-span-3">
                        <form className="bg-gray-50 rounded-md p-4">
                            <div className="space-y-10">
                                <div className="border-b border-gray-900/10 pb-12">
                                    <h2 className="text-xl font-semibold tracking-wide leading-7 text-blue-600">Personal Information</h2>

                                    <div className="mt-10 grid grid-cols-1 gap-x-6 sm:gap-y-7 gap-y-5 sm:grid-cols-6">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                First name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    autoComplete="given-name"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                Last name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="last-name"
                                                    id="last-name"
                                                    autoComplete="family-name"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-4">
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                Email address
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                                Country
                                            </label>
                                            <div className="mt-2">
                                                <select
                                                    id="country"
                                                    name="country"
                                                    autoComplete="country-name"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                >
                                                    <option>United States</option>
                                                    <option>Canada</option>
                                                    <option>Mexico</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-span-full">
                                            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                                Street address
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="street-address"
                                                    id="street-address"
                                                    autoComplete="street-address"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-2 sm:col-start-1">
                                            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                                City
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="city"
                                                    id="city"
                                                    autoComplete="address-level2"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                                State / Province
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="region"
                                                    id="region"
                                                    autoComplete="address-level1"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                                ZIP / Postal code
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="postal-code"
                                                    id="postal-code"
                                                    autoComplete="postal-code"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 flex items-center justify-end gap-x-6">
                                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                        Reset
                                    </button>
                                    <button
                                        type="submit"
                                        className="rounded-md bg-blue-600 px-3 py-2 tracking-wide text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Add Address
                                    </button>
                                </div>
                                <div className="border-b border-gray-900/10 pb-12">
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">Address</h2>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">
                                        Choose from existing address
                                    </p>
                                    <ul role="list" className="space-y-2 mt-3">
                                        {addresses.map((address, index) => (
                                            <li key={index} className="flex justify-between gap-x-6 py-5 px-3 border border-solid border-gray-400 rounded-md">
                                                <div className="flex min-w-0 gap-x-4">
                                                    <input
                                                        name="address"
                                                        type="radio"
                                                        className="h-3 w-3 mt-2 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                    />
                                                    <div className="min-w-0 flex-auto">
                                                        <p className="text-sm font-semibold leading-6 text-gray-900">{address.name}</p>
                                                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{address.street}</p>
                                                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{address.pincode}</p>
                                                    </div>
                                                </div>
                                                <div className="sm:flex sm:flex-col sm:items-end">
                                                    <p className="text-sm leading-6 text-gray-900">{address.phone}</p>
                                                    <p className="text-sm leading-6 text-gray-900">{address.city}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-10 space-y-10">
                                        <fieldset>
                                            <legend className="text-sm font-semibold leading-6 text-gray-900">Payment Methods</legend>
                                            <p className="mt-1 text-sm leading-6 text-gray-600">Select One</p>
                                            <div className="mt-6 space-y-6">
                                                <div className="flex items-center gap-x-3">
                                                    <input
                                                        id="push-everything"
                                                        name="push-notifications"
                                                        type="radio"
                                                        className="h-3 w-3 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                    />
                                                    <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                                                        Cash
                                                    </label>
                                                </div>
                                                <div className="flex items-center gap-x-3">
                                                    <input
                                                        id="push-email"
                                                        name="push-notifications"
                                                        type="radio"
                                                        className="h-3 w-3 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                    />
                                                    <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                                                        Cart Payment
                                                    </label>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* checkout */}
                    <div className="lg:col-span-2 ">
                        <div className="shadow-md shadow-gray-300 md:py-5 md:px-3 p-2">
                            <div className="grid grid-cols-4 pb-2 text-center">
                                <h2 className="cart-heading text-left">Item</h2>
                                <h2 className="cart-heading">Price</h2>
                                <h2 className="cart-heading">Quantity</h2>
                                <h2 className="cart-heading">Remove</h2>
                            </div>
                            <hr className="w-full bg-blue-400 border" />
                            <div className="flex flex-col">
                                <div className="grid grid-cols-4 mt-4 max-md:mt-3 items-center">
                                    <div className="flex items-center justify-start gap-2 max-sm:gap-1 ">
                                        <img src="" alt="cart-img" className="w-[50px] max-sm:w-[35px] rounded-md" />
                                        <h3 className="tracking-wide max-sm:text-[12px]">hello</h3>
                                    </div>
                                    <div className="">
                                        <p className="text-center">
                                            200
                                        </p>
                                    </div>
                                    <div className="flex justify-center">
                                        <select name="quantity" className="border-none outline-none m-0">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <FaTrash className="cursor-pointer text-red-700 text-lg max-md:text-sm" />
                                    </div>
                                </div>
                            </div>
                            <hr className="my-4 border border-slate-200" />
                            <div className="flex flex-col gap-y-4">
                                <NavLink to="/checkout">
                                    <button className="w-full border-none outline-none px-3 py-2 bg-blue-600 rounded-md text-sm font-medium cursor-pointer hover:scale-105 transition-all text-white">Pay Now</button>
                                </NavLink>
                                <Link to="/ProductList"><div className="flex items-center justify-center gap-2">
                                    <p className="text-base font-Oswald tracking-wide font-normal cursor-pointer text-center">Continew Shopping</p>
                                    <FaLongArrowAltRight className="text-purple-800 text-lg" />
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CheckOut