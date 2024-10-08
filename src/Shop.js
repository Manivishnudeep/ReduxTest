import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './state/index'
const Shop = () => {
  const dispatch = useDispatch();
  const { withdrawMoney, depositeMoney } = bindActionCreators(actionCreators, dispatch)
  const amount=useSelector(state=>state.amount)
  return (
    <div>
      <h2>Deposit/WithDraw Money</h2>
      {/* <button className='btn-primary mx-2' onClick={()=>{dispatch(withdrawMoney(100))}}>-</button>
      Update Balance
      <button className='btn-primary mx-2' onClick={()=>{dispatch(depositeMoney(100))}}>+</button> */}
      <button className='btn-primary mx-2' onClick={() => { withdrawMoney(100) }}>-</button>
      Updated Balance : {amount}
      <button className='btn-primary mx-2' onClick={() => { depositeMoney(100) }}>+</button>
    </div>
  )
}

export default Shop
