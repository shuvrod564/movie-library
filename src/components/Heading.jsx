import React from 'react'

const Heading = ({ title='', level='2' }) => {
    const Tag = `h${level}`;
  return (
    <Tag className='text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-5'>
        {title}
    </Tag>
  )
}

export default Heading