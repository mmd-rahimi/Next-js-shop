import React from 'react'

interface IContsinerProps {
    children: React.ReactNode
}

function Container({children} : IContsinerProps) {
  return (
    <div className='container mx-auto py-4'>{children}</div>
  )
}

export default Container