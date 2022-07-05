import { AnimatePresence, motion } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowDownSvg } from "../../../utils/svgs"
import useClickOutside from "../../../hooks/useClickOutside"

const Select = ({ options, value, setValue, width, className, fontStyle = "", selectedStyle }) => {
  const [show, setShow] = useState(false)
  const selectRef = useRef()
  useClickOutside(selectRef, () => setShow(false))

  return (
    <div className={`relative ${className}`} style={{ width: `${width}px` }} ref={selectRef}>
      <div
        className={`w-full rounded-full flex justify-between items-center cursor-pointer hover:border-[#2962ff] select-none duration-300 focus-within:border-[#2962FF] ${
          selectedStyle || "px-1"
        }`}
        onClick={() => setShow((p) => !p)}
      >
        <span className={fontStyle}>{value ? value.label : options[0].label}</span>
        <ArrowDownSvg />
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[50px] w-full left-0 border rounded-md bg-white"
          >
            {options.map((option) => (
              <div
                key={option.value}
                className={`px-6 py-2 cursor-pointer hover:bg-blue-100 text-base`}
                onClick={() => {
                  setValue(option)
                  setShow(false)
                }}
              >
                {option.label}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Select
