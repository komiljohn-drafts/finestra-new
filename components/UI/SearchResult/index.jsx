import React, { useState } from "react"
import { motion } from "framer-motion"
import cls from "./SearchResult.module.scss"
import { ArrowDownFilledSvg, ArrowDownSvg, QuestionSvg, SearchSvg } from "../../../utils/svgs"
import Select from "react-select"

function SearchResult() {
  const [zipCode, setZipCode] = useState("")

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
          <div className="flex gap-3 text-xl leading-[44px] relative">
            <span className="text-[#0000009c]">Insurance: </span>
            <select name="cars" id="cars" className="px-5">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <label htmlFor="cars" className="absolute bottom-4 right-0">
              <ArrowDownSvg />
            </label>
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
          <div className="flex">
            <div>
              <p className="text-[50px] text-[#2962FF] font-bold leading-[58px] mb-3 tracking-tight">325$</p>
              <div className="flex gap-2 items-center">
                <div className="w-5 h-5 rounded-full bg-[#2962FF]"></div>
                <span>Out of pocket price</span>
                <QuestionSvg />
              </div>
              <div className="flex gap-3 text-xl leading-[44px] relative">
                <select name="cars" id="cars" className="px-5">
                  <option value="volvo">View Insurance Rate</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
                <label htmlFor="cars" className="absolute bottom-4 right-0">
                  <ArrowDownSvg />
                </label>
              </div>
            </div>
            <div className="border-l">
              <div>
                <p>Average Out-of-Pocket Price</p>
                <ArrowDownFilledSvg />
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
