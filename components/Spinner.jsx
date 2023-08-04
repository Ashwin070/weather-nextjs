import React from 'react'
import spinner from '../public/spinner.gif' 
const Spinner = () => {
  return (
    <>
        <Image classname='w-[200px] m-auto block' src={spinner} alt='loading..'/>
    </>
  )
}

export default Spinner
