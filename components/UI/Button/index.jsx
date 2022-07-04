import React from "react"
import cls from "./Button.module.scss"

function Button({ children, color, bgColor, classes, ...rest }) {
  return (
    <button className={`${cls.button} ${classes}`} type="submit" {...rest}>
      {children}
    </button>
  )
}

export default Button
