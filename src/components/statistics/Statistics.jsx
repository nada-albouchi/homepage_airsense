import React from 'react'
import CountUp from 'react-countup';

const Statistics = () => {
  return (
    <div className='bg-beige text-secondaryGris py-12 '>
    <div className='container grid grid-cols-2 md:grid-cols-4 gap-8'>
    <div className='flex flex-col items-center justify-center'>
    <p className='text-3xl font-semibold'>
    <CountUp start ={0} end ={30} duration={2} enableScrollSpy={true} scrollSpyOnce={true}/>%
    </p>
    <p className='text-3xl font-semibold'>higher risk of respiratory diseases among workers
     </p>  
     </div>
     <div className='flex flex-col items-center justify-center'>
     <p className='text-3xl font-semibold'>
     <CountUp start ={0} end ={1000} duration={2} enableScrollSpy={true} scrollSpyOnce={true}/>
      +
    </p>
   
    <p className='text-3xl font-semibold'>workers affected annually </p>  
     </div>
     <div className='flex flex-col items-center justify-center'>
     <p className='text-3xl font-semibold'> $
     <CountUp start ={0} end ={1} duration={1} enableScrollSpy={true} scrollSpyOnce={true}/>
     B

       
    </p>
    
    
    <p className='text-3xl font-semibold'> in damages</p>  
    </div>
    <div className='flex flex-col items-center justify-center'>
     <p className='text-3xl font-semibold'>
     <CountUp start ={0} end ={37000} duration={3} enableScrollSpy={true} scrollSpyOnce={true}/>
     
    </p>
    
    <p className='text-3xl font-semibold'>fires from industrial incidents annually</p>  
</div>

    

    </div>
    </div>
  )
}

export default Statistics