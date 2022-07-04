import React from 'react'

function Input({ value, onChange, className, ...rest }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`bg-white text-sm leading-5 placeholder:text-sm rounded text-black outline-none py-3 px-5 mr-2.5 ${className}`}
      placeholder='your@email.com'
      type='text'
      {...rest}
    />
  )
}

export default Input
