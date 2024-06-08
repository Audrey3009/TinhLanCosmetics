import React from 'react'
import { useSelector } from 'react-redux';

const CartTotals = () => {
  const { amount } = useSelector((state) => state.cart);
  const { total } = useSelector((state) => state.cart);
  const tax = total / 5;
  const shipping = 50;
  return (
    <div className='card bg-base-200'>
      <div className='card-body'>
        {/* SUBTOTAL */}
        <p className='flex justify-between text-xs border-b border-base-300 pb-2 text-accent-content'>
          <span>Tổng cộng</span>
          <span className='font-medium'>{ Math.round(total) }đ</span>
        </p>
        {/* SHIPPING */}
        <p className='flex justify-between text-xs border-b border-base-300 pb-2 text-accent-content'>
          <span>Phí ship</span>
          <span className='font-medium'>{ shipping }đ</span>
        </p>
        {/* Tax */}
        <p className='flex justify-between text-xs border-b border-base-300 pb-2 text-accent-content'>
          <span>Giảm giá</span>
          <span className='font-medium'>{Math.round(tax)}đ</span>
        </p>
        {/* Order Total */}
        <p className='flex justify-between text-sm mt-4 pb-2 text-accent-content'>
          <span>Thành tiền</span>
          <span className='font-medium'>{ Math.round(total + shipping + tax) }đ</span>
        </p>
      </div>
    </div>
  )
}

export default CartTotals