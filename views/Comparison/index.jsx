import { useState } from "react"
import Container from "../../components/Layout/Container"
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
    { value: 11, percent: 540, label: "MagnaCare" },
    { value: 12, percent: 260, label: "Affinity Health Plan" },
    { value: 13, percent: 150, label: "HealthFirst (NY)" },
  ]

  return (
    <div className="max-w-[1200px] mx-auto px-[15px] mb-[98px]">
      <Container>
        <div>
          <p className="text-[39px] leading-[58px] font-bold tracking-tighter mb-5 sm:text-[36px]">Prices Comparison</p>
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
          <p className="mb-[30px] text-xl leading-[44px] text-[#0000009c] mt-[37px] sm:text-lg">
            Optum Health is <span className="font-bold">24%</span> more expensive than the average of{" "}
            <span className="font-bold">$261%</span>
          </p>
          <div>
            {insuranceOptions.map((option) => (
              <div
                key={option.value}
                className="grid grid-cols-[230px_minmax(400px,_1fr)] gap-[26px] md:gap-4 md:grid-cols-[190px_minmax(350px,_1fr)] mb-4 md:mb-3 sm:flex sm:flex-col sm:gap-1"
              >
                <p
                  className={`text-[15px] leading-[26px] text-end md:text-[13px] sm:text-start sm:row-auto sm:leading-4 ${
                    +activeInsurance.value === option.value ? "font-bold text-[#000]" : "text-[#000000b0]"
                  }`}
                >
                  {option.label}
                </p>
                <div
                  className={`duration-300 sm:row-auto sm:h-5 ${
                    +activeInsurance.value === option.value ? "bg-[#2962FF]" : "bg-[#2962ff30]"
                  }`}
                  style={{ width: `${(option.percent / 600) * 100}%` }}
                />
              </div>
            ))}
            <div className="grid grid-cols-[230px_minmax(400px,_1fr)] gap-[26px] md:gap-4 md:grid-cols-[190px_minmax(350px,_1fr)] sm:flex">
              <div className="sm:hidden"></div>
              <div className="flex justify-between border-t pt-5 sm:grow">
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
      </Container>
    </div>
  )
}

export default Comparison
