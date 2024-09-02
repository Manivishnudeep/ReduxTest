import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './state/index'
const Shop = () => {
  const dispatch = useDispatch();
  const { withdrawMoney, depositeMoney } = bindActionCreators(actionCreators, dispatch)
  return (
    <div>
      <h2>Deposit/WithDraw Money</h2>
      {/* <button className='btn-primary mx-2' onClick={()=>{dispatch(withdrawMoney(100))}}>-</button>
      Update Balance
      <button className='btn-primary mx-2' onClick={()=>{dispatch(depositeMoney(100))}}>+</button> */}
      <button className='btn-primary mx-2' onClick={() => { withdrawMoney(100) }}>-</button>
      Update Balance
      <button className='btn-primary mx-2' onClick={() => { depositeMoney(100) }}>+</button>
    </div>
  )
}

export default Shop
