import React from 'react'
import MyImg from './MyImg'
import Contract from './Contract'

function Profile() {
  return (
    <section className='flex flex-col lg:flex-row items-center gap-12'>
        <MyImg />
        <Contract />
    </section>
  )
}

export default Profile