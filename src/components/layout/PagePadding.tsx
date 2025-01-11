import React from 'react'

function PagePadding({children}: {
    children: React.ReactNode
}
) {
  return (
    <div className='lg:p-24'>
        {children}
    </div>
  )
}

export default PagePadding