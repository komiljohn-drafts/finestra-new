import React, { useState } from "react"
import cls from "./SearchResult.module.scss"
import { ArrowDownFilledSvg, ArrowDownSvg, QuestionSvg, SearchSvg } from "../../utils/svgs"
import Badge from "../../components/UI/Badge"
import Select from "../../components/UI/Select"

function SearchResult() {
  const [zipCode, setZipCode] = useState("")
  const [value, setValue] = useState("")
  const [insuranceValue, setInsuranceValue] = useState("")

  const options = [
    { value: 1, label: "View Insurance Rate" },
    { value: 2, label: "View Insurance Rate2" },
    { value: 3, label: "View Insurance Rate3" },
  ]
  const insuranceOptions = [
    { value: 1, label: "Optum Health" },
    { value: 2, label: "Other option" },
    { value: 3, label: "Another option" },
  ]

  return (
    <section className={cls.wrapper}>
      <div>
        <div className="relative">
          <input
            value="Prenatal Ultrasound"
            className="border-b-2 w-full py-[18px] pr-20 text-5xl tracking-tighter font-bold leading-[58px] px-4 border-[#a7a7a7]"
            type="text"
          />
          <SearchSvg color="#000" className="w-8 h-8 absolute right-6 bottom-6" />
        </div>
        <div className="mt-[30px] flex gap-[30px]">
          <div className="flex gap-1 text-xl leading-[44px] relative">
            <span className="text-[#0000009c]">Insurance: </span>
            <Select
              width={180}
              options={insuranceOptions}
              setValue={setInsuranceValue}
              value={insuranceValue}
              fontStyle="text-xl leading-[44px]"
            />
          </div>
          <div className="flex gap-3 text-xl leading-[44px]">
            <span className="text-[#0000009c]">ZIP Code: </span>
            <input
              onChange={(e) => setZipCode(e.target.value)}
              value={zipCode}
              style={{ width: `${(zipCode.length + 1) * 13}px` }}
              className="border-b-2 border-[#a6a6a6] text-[#000000] px-3 inline-block text-center min-w-[80px]"
            />
          </div>
        </div>
        <div className="mt-14">
          <p className="text-xl leading-[44px] mb-[30px] text-[#0000009c]">Based on our data, you can pay around:</p>
          <div className="flex items-top">
            <div>
              <p className="text-[50px] text-[#2962FF] font-bold leading-[58px] mb-3 tracking-tight">325$</p>
              <Badge color="#2962FF" title="Out of pocket price" />
              <Select
                width={240}
                options={options}
                setValue={setValue}
                value={value}
                fontStyle="text-xl leading-[24px]"
                className="mt-[57px]"
              />
            </div>
            <div className="w-px bg-[#e3e3e3] h-[125px] mx-[58px]"></div>
            <div>
              <div className="mb-3 pl-[20%] text-center">
                <p className="mb-2 text-[17px] leading-[26px] font-semibold">Average Out-of-Pocket Price</p>
                <ArrowDownFilledSvg className="mx-auto" />
              </div>
              <div className="relative text-[#000000b0] text-[15px] leading-[26px] family-600 font-medium">
                <div className="w-[484px] rounded-full h-[22px] bg-[#D6E1FF] relative mb-3"></div>
                <div className="bg-[#2962FF] absolute t-0 bottom-0 h-[22px] left-[50%] right-[20%]"></div>
                <span className="absolute left-0 font-semibold">$250</span>
                <div className="absolute left-[46%]">
                  <p className="font-semibold">$500</p>
                  <p>25%</p>
                </div>
                <div className="absolute right-[17%]">
                  <p className="font-semibold">$750</p>
                  <p>75%</p>
                </div>
                <span className="absolute right-0 font-semibold">$1000</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[92px]">
          <p className="text-[39px] leading-[58px] font-bold tracking-tighter mb-2.5">About this procedure</p>
          <p className="text-xl leading-[33px] text-[#000000b0]">
            Obstetric ultrasonography, or prenatal ultrasound, is the use of medical ultrasonography in pregnancy, in
            which sound waves are used to create real-time visual images of the developing embryo or fetus in the uterus
            (womb). The procedure is a standard part of prenatal care in many countries, as it can provide a variety of
            information about the health of the mother, the timing and progress of the pregnancy, and the health and
            development of the...
          </p>
        </div>
      </div>
    </section>
  )
}

export default SearchResult
