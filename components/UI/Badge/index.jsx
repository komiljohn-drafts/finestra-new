import { QuestionSvg } from "../../../utils/svgs"

const Badge = ({ color, title }) => {
  return (
    <div className="flex gap-2 items-center">
      <div className={`w-5 h-5 rounded-full bg-[${color}]`}></div>
      <span className="text-[17px] leading-[26px] font-light">{title}</span>
      <QuestionSvg />
    </div>
  )
}

export default Badge
