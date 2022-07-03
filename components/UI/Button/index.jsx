import React from "react"
import cls from "./Button.module.scss"

function Button({ children, color = "#333", bgColor = "#fff", classes, style, ...rest }) {
  return (
    <button
      className={`${cls.button} ${classes}`}
      style={{ backgroundColor: bgColor || "initial", color: color || "initial", ...style }}
      type="submit"
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
