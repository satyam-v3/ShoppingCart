import React from 'react'
import toast from 'react-hot-toast'
import { FcDeleteDatabase } from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slices/cartSlice'

const CartItem = ({ item, itemIndex }) => {

    const dispatch = useDispatch()

    const removeFromCart = () => {
        dispatch(remove(item.id))
        toast.success("Item Removed")
    }

    return (
        <div>

            <div className='flex space-x-10 justify-between items-center p-5 md:w-[450px] lg:w-[550px] border-b-2 border-slate-700'>

                <div className='h-50'>
                    <img src={item.image} className='w-full h-full' />
                </div>

                <div className='flex flex-col gap-x-2'>
                    <h1 className='text-gray-700 font-semibold text-xl text-left w-full'>
                        {item.title}
                    </h1>

                    <h1 className='w-full text-gray-400 font-normal text-sm text-left'>
                        {item.description.split(" ").slice(0, 15).join(" ") + "..."}
                    </h1>

                    <div className='w-full flex justify-between items-center mt-5'>
                        <p className='text-green-600 font-bold text-xl'>
                            ${item.price}
                        </p>

                        <div
                            className='p-1 bg-red-300 rounded-full'
                            onClick={removeFromCart}
                        >
                            <FcDeleteDatabase className='text-2xl' />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CartItem