import React from "react"
import { motion } from "framer-motion"
import Container from "../../components/Layout/Container"
import cls from "./Follow.module.scss"
import Button from "../../components/UI/Button"

function Follow() {
  return (
    <>
      <div className={cls.borderTop}></div>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "50px", opacity: 0 },
        }}
        className={cls.wrapper}
      >
        <Container>
          <div className={cls.follow}>
            <h2 className={cls.title}>Sounds good?</h2>
            <p className={cls.subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare libero a ex pretium rutrum.
              Mauris orci tellus, lacinia id lacus vitae.
            </p>
            <Button bgColor="#FF8600" color="#fff" classes="h-[48px]">
              Register your account
            </Button>
          </div>
        </Container>
      </motion.section>
    </>
  )
}

export default Follow
