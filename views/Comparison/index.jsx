import { useState } from "react"
import Select from "../../components/UI/Select"
import { ArrowDownSvg } from "../../utils/svgs"

const Comparison = () => {
  const [activeId, setActiveId] = useState(1)
  const [activeInsurance, setActiveInsurance] = useState("")

  const comparisonOptions = [
    { id: 1, title: "All Insurances" },
    { id: 2, title: "Insurance Data" },
  ]

  const insuranceOptions = [
    { value: 1, percent: 210, label: "Atena" },
    { value: 2, percent: 110, label: "Wellcare" },
    { value: 3, percent: 300, label: "Blue Cross Blue Shield (BCBS)" },
    { value: 4, percent: 280, label: "UnitedHealthcare" },
    { value: 5, percent: 315, label: "Optum Health" },
    { value: 6, percent: 300, label: "Cigna" },
    { value: 7, percent: 170, label: "Fielids Care (NY)" },
    { value: 8, percent: 60, label: "Oxford (UnitedHealthcare)" },
    { value: 9, percent: 80, label: "CDPHP" },
    { value: 10, percent: 240, label: "MVP Health Care" },
    { value: 11, percent: 530, label: "MagnaCare" },
    { value: 12, percent: 260, label: "Affinity Health Plan" },
    { value: 13, percent: 150, label: "HealthFirst (NY)" },
  ]

  return (
    <div className="max-w-[1200px] mx-auto px-[15px] mb-[98px]">
      <p className="text-[39px] leading-[58px] font-bold tracking-tighter mb-5">Prices Comparison</p>
      <div className="flex gap-4 mb-9">
        {comparisonOptions.map((option) => (
          <div
            key={option.id}
            onClick={() => setActiveId(option.id)}
            className={`py-3 px-6 rounded-[15px] duration-300 cursor-pointer ${
              activeId === option.id ? "bg-[#E7E5E5]" : "bg-white"
            }`}
          >
            {option.title}
          </div>
        ))}
      </div>
      <Select
        width={380}
        options={insuranceOptions}
        selectedStyle="px-6 py-2.5 border"
        setValue={setActiveInsurance}
        value={activeInsurance}
      />
      <p className="mb-[30px] text-xl leading-[44px] text-[#0000009c] mt-[37px]">
        Optum Health is <span className="font-bold">24%</span> more expensive than the average of{" "}
        <span className="font-bold">$261%</span>
      </p>
      <div>
        {insuranceOptions.map((option) => (
          <div key={option.value} className="grid grid-cols-12 gap-[26px] mb-4">
            <p
              className={`text-[15px] leading-[26px] text-end col-span-3 ${
                +activeInsurance.value === option.value ? "font-bold text-[#000]" : "text-[#000000b0]"
              }`}
            >
              {option.label}
            </p>
            <div
              className={`col-span-6 duration-300 ${
                +activeInsurance.value === option.value ? "bg-[#2962FF]" : "bg-[#2962ff30]"
              }`}
              style={{ width: `${(option.percent / 600) * 100}%` }}
            ></div>
          </div>
        ))}
        <div className="grid grid-cols-12 gap-[26px]">
          <div className="col-span-3"></div>
          <div className="col-span-6 flex justify-between items-center border-t pt-5">
            <span className="text-[15px] leading-[26px] text-[#0000009c]">0</span>
            <span className="text-[15px] leading-[26px] text-[#0000009c]">100</span>
            <span className="text-[15px] leading-[26px] text-[#0000009c]">200</span>
            <span className="text-[15px] leading-[26px] text-[#0000009c]">300</span>
            <span className="text-[15px] leading-[26px] text-[#0000009c]">400</span>
            <span className="text-[15px] leading-[26px] text-[#0000009c]">500</span>
            <span className="text-[15px] leading-[26px] text-[#0000009c]">600</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comparison