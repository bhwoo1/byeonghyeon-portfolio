import React from 'react'

function Badge({icon, content}: {icon?: React.ReactNode, content: string}) {
  return (
    <div className='flex flex-col bg-neutral-900 rounded-xl text-white w-[80px] h-[60px] lg:w-[120px] lg:h-[100px] items-center justify-center font-bold text-sm lg:text-xl p-4'>
        <div>{icon}</div>
        <p>{content}</p>
    </div>
  )
}

export default Badge