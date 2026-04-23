import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'

const Cart = () => {

    const cart = useSelector((state) => state.cart) || []
    const [totalAmount, setTotalAmount] = useState(0)

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0))
    }, [cart])

    return (
        <div>
            {
                cart.length > 0 ?
                    (
                        <div className='max-w-6xl max-h-screen flex justify-around mx-auto'>
                            <div className='max-w-11/12 '>
                                {
                                    cart.map((item, index) => {
                                        return <CartItem key={item.id} item={item} itemIndex={index} />
                                    })
                                }
                            </div>

                            <div className='max-w-11/12 w-137.5 h-[80vh] flex flex-col justify-between py-10 px-10'>
                                <div>

                                    <div className='text-green-600 text-2xl'>
                                        Your Cart
                                    </div>

                                    <div className='text-green-600 text-6xl font-bold'>
                                        Summary
                                    </div>

                                    <p className='mt-2.5'>
                                        <span className='text-slate-600 font-semibold text-lg'>Total Item: <span className='text-black'>{cart.length}</span></span>
                                    </p>
                                </div>

                                <div className='flex flex-col gap-y-4'>
                                    <p className='text-lg text-slate-600 font-semibold'>
                                        Total Ammount: <span className='font-bold text-black'>${totalAmount}</span>
                                    </p>

                                    <button
                                    className='bg-green-600 text-white text-2xl font-bold rounded-md py-1 w-[70%]'
                                    >
                                        Checkout Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) :
                    (
                        <div className='w-full h-[80vh] flex flex-col justify-center items-center'>
                            <h1 className='text-slate-800 text-3xl'>Cart Empty!</h1>
                            <Link to={'/'}>
                                <button className='bg-blue-600 text-white text-3xl p-2 px-4 rounded-xl mt-10'>
                                    Shop Now
                                </button>
                            </Link>
                        </div>
                    )
            }
        </div>
    )
}

export default Cart