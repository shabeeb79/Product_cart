import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveCart } from './Cart'
import Navbar from './Navbar'

const CartList = () => {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    if (cart.length === 0) {
        return <div className="text-center text-gray-500 mt-10">Your cart is empty</div>
    }

    return (
        <>
        <Navbar/>
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cart.map((item) => (
                <div
                    key={item.id}
                    className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between"
                >
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                        <p className="text-gray-600 mt-2">${item.price}</p>
                    </div>
                    <button
                        onClick={() => dispatch(RemoveCart(item.id))}
                        className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
                    >
                        Remove
                    </button>
                </div>
            ))}
        </div>
        </>
    )
}

export default CartList
