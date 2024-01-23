import { FaTrash } from "react-icons/fa6"
import { NavLink } from "react-router-dom"
import Button from "../Component/Button"

function Cart() {
    return (
        <section className="padding-y">
            <div className="max-container">
                <div className="grid grid-cols-4 pb-2 text-center">
                    <h2 className="cart-heading max-md:col-span-2 text-left">Item</h2>
                    <h2 className="cart-heading max-md:hidden">Price</h2>
                    <h2 className="cart-heading">Quantity</h2>
                    <h2 className="cart-heading">Remove</h2>
                </div>
                <hr className="w-full bg-blue-400 border" />
                <div className="flex flex-col">
                    <div className="grid grid-cols-4 mt-4 max-md:mt-3 items-center">
                        <div className="flex items-center justify-start gap-2 max-sm:gap-1 max-md:col-span-2">
                            <img src="" alt="cart-img" className="w-[50px] max-sm:w-[35px] rounded-md" />
                            <h3 className="tracking-wide max-sm:text-[12px]">hello</h3>
                        </div>
                        <div className="max-md:hidden">
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
                <div className="flex justify-between">
                    <NavLink to="/ProductList" className="">
                        <Button name="Shop More"></Button>
                    </NavLink>
                    <div className="flex justify-center">
                        <NavLink to="/checkout">
                            <button className="md:mr-16 border-none outline-none px-3 py-2 bg-fuchsia-600 rounded-md text-sm font-medium cursor-pointer hover:scale-105 transition-all text-white" >CheckOut</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Cart