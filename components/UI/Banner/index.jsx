import React, { useState } from "react"
import Container from "../../Layout/Container"
import cls from "./Banner.module.scss"
import Input from "../Input"
import Button from "../Button"
import { motion } from "framer-motion"
import { useRouter } from "next/router"

function Banner() {
  const router = useRouter()
  const [procedure, setProcedure] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [insurance, setInsurance] = useState("")

  const fadeUpVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: "50px" },
  }

  return (
    <section className={cls.wrapper}>
      <Container>
        <div className={cls.banner}>
          <div className={cls.content}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={fadeUpVariant}
            >
              <motion.h1 className={cls.title}>
                Find how much <span>your</span> medical care should cost
              </motion.h1>
              <p className={cls.subtitle}>Don&apos;t get caught off guard by your next medical bill.</p>
            </motion.div>
            <motion.div
              className={cls.action}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              variants={fadeUpVariant}
            >
              <Input value={procedure} onChange={setProcedure} placeholder="Prodecure" />
              <Input value={zipCode} onChange={setZipCode} placeholder="ZIP Code" />
              <Input value={insurance} onChange={setInsurance} placeholder="Insurance" />
              <Button bgColor="#2962FF" color="#fff" classes="h-[48px]" onClick={() => router.push("/search")}>
                Search
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Banner
