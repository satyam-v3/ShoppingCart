import React from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/slices/cartSlice'

const Product = ({ post }) => {

    const cart = useSelector((state) => state.cart) || []
    const dispatch = useDispatch()

    const isInCart = cart.some((p) => p.id === post.id)

    const addToCart = () => {
        dispatch(add(post))
        toast.success("Items added to Cart")
    }

    const removeFromCart = () => {
        dispatch(remove(post.id))
        toast.success("Item removed from Cart")
    }

    return (
        <div className='flex flex-col justify-between items-center hover:scale-110 transition-all duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
            <div>
                <p className='text-gray-700 font-semibold text-lg text-left truncate w-40'>
                    {post.title}
                </p>
            </div>

            <div>
                <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>
                    {post.description.split(" ").slice(0, 10).join(" ") + "..."}
                </p>
            </div>

            <div className='h-45'>
                <img src={post.image} className='h-full w-full' loading="lazy" />
            </div>

            <div className='w-full flex justify-between items-center mt-5'>
                <div>
                    <p className='text-green-600'>
                        ${post.price}
                    </p>
                </div>

                {
                    isInCart ?
                        (
                            <button
                                className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-xs p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in'
                                onClick={removeFromCart}
                            >
                                Remove Item
                            </button>
                        ) :
                        (
                            <button
                                className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-xs p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in'
                                onClick={addToCart}
                            >
                                Add to Cart
                            </button>
                        )
                }
            </div>

        </div>
    )
}

export default Product