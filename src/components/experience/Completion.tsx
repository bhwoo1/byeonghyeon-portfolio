import { completionData } from '@/data/ExpData'
import React from 'react'
import CompletionBlock from './CompletionBlock';

function Completion() {
  const data = completionData;


  return (
    <section className='flex flex-col gap-4'>
      {data.map((block) => (
        <div key={block.title}>
          <CompletionBlock data={block} />
        </div>
      ))

      }
    </section>
  )
}

export default Completion;