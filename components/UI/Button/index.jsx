import React from 'react'
import cls from './Button.module.scss'

function Button({ children, color = '#333', bgColor = '#fff', classes }) {
  return (
    <button
      className={`${classes} ${cls.button}`}
      style={{ backgroundColor: bgColor || 'initial', color: color || 'initial' }}
      type='submit'
    >
      {children}
    </button>
  )
}

export default Button
