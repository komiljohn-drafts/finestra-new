import Image from "next/image"
import { DocOutlinedSvg } from "../../../utils/svgs"
import cls from "./Hospitals.module.scss"
import MapImage from "/public/images/map.png"

const Hospitals = () => {
  const hospitalsData = [
    {
      id: 1,
      type: "out-of-pocket",
      price: 314,
      docCount: 7,
      title: "Mount Sinai West Hospital",
      distance: "0.24 miles away",
    },
    { id: 2, type: "insurance", price: 314, docCount: 12, title: "NYC Health + Hospitals", distance: "3 miles away" },
    { id: 3, type: "out-of-pocket", price: 295, docCount: 9, title: "Mount Sinai Queens", distance: "5.1 miles away" },
    { id: 4, type: "insurance", price: 712, docCount: 17, title: "Hudson Regional Hospital", distance: "4 miles away" },
    {
      id: 5,
      type: "out-of-pocket",
      price: 303,
      docCount: 31,
      title: "The Brooklyn Hospital Center",
      distance: "5 miles away",
    },
    {
      id: 6,
      type: "out-of-pocket",
      price: 312,
      docCount: 12,
      title: "Maimonides Medical Center",
      distance: "7.1 miles away",
    },
  ]

  return (
    <div className={cls.wrapper}>
      <div className="flex justify-between items-center mb-[44px]">
        <div>
          <p className="text-[39px] leading-[58px] font-bold tracking-tighter">Hospitals</p>
          <p className="text-lg leading-[33px] text-[#0000009c]">where you can preform this procedure</p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-10">
        {hospitalsData.map((hospital) => (
          <div key={hospital.id} className="border rounded-[30px] col-span-4">
            <div className="flex justify-between items-center p-[17px]">
              <div
                className={`text-white text-[15px] leading-[18px] px-[14px] py-2 rounded-[18px] ${
                  hospital.type === "out-of-pocket" ? "bg-[#2962FF]" : "bg-[#FF8600]"
                }`}
              >
                {`$${hospital.price}`}
              </div>
              <div className="flex">
                <span className="mr-1.5 text-base leading-[19px] font-semibold">{hospital.docCount}</span>
                <DocOutlinedSvg />
              </div>
            </div>
            <div>
              <Image src={MapImage} height={210} placeholder="blur" layout="responsive" alt="banner" />
            </div>
            <div className="p-[18px]">
              <p className="text-xl leading-6 font-bold mb-1.5">{hospital.title}</p>
              <p className="text-xl leading-6 text-[#0000009c]">{hospital.distance}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-2 rounded-full border-[#000] py-[15px] px-[50px] mx-auto text-base leading-[20px] font-semibold w-fit mt-[50px] mb-[130px]">
        View more
      </div>
    </div>
  )
}

export default Hospitals
