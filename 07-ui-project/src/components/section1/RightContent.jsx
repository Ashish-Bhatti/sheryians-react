import React from 'react'
import RightContentCard from './RightContentCard'

const RightContent = (props) => {
  return (
    <div className='min-w-3/4 h-full flex flex-nowrap shrink-0 gap-10 '>
    {
      props.userData.map((item)=>{
       return <RightContentCard key={item.id} userData={item}/>
      })
    }
      {/* <RightContentCard/>
      <RightContentCard/> */}
    </div>
  )
}
 
export default RightContent