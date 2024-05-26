import React from 'react'

const SectionTitle = ({title, path}) => {
  return (
    <div className='section-title-div border-b py-5 border-gray-600'>
        <h1 className='section-title-title text-4xl text-center mb-2 max-md:text-6xl max-sm:text-6xl text-accent-content'>{ title }</h1>
        <p className='section-title-path text-xl text-center max-sm:text-lg text-accent-content'>{ path }</p>
    </div>
  )
}

export default SectionTitle