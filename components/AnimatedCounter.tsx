'use client'
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className='w-full'>
        <CountUp decimals = { 2 } decimal='.' duration = { 2 } prefix='&#8377;' end = {amount}></CountUp>
    </div>
  )
}

export default AnimatedCounter