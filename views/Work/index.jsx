import React, { useState, useEffect } from "react"
import Image from "next/image"
import Container from "../../components/Layout/Container"
import cls from "./Work.module.scss"
import { BrowseSvg, CompareSvg, StoreSvg } from "../../utils/svgs"
import { useWindowSize } from "../../utils/useWindowSize"
import { motion } from "framer-motion"
import WorkItem1Image from "/public/images/work-1.png"
import WorkItem2Image from "/public/images/work-2.png"
import WorkItem3Image from "/public/images/work-3.png"

function Work() {
  const size = useWindowSize()
  const [windowWidth, setWindowWidth] = useState("")

  useEffect(() => {
    if (size.width <= 960) {
      setWindowWidth("lg")
    }
  }, [size])

  return (
    <section className={cls.wrapper}>
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
            hidden: { opacity: 0, y: "50px" },
          }}
        >
          <h2 className={cls.mainTitle}>What can you do with it?</h2>
          <p className={cls.mainSubtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique diam tempor auctor venenatis. Proin
            auctor pellentesque nibh, consectetur.
          </p>
        </motion.div>
        <div className={cls.work}>
          <section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: "-100px" },
            }}
            className={cls.left}
          >
            <div className={cls.image}>
              <Image placeholder="blur" layout="responsive" src={WorkItem1Image} alt="banner" />
              <div className={cls.small}>
                <CompareSvg />
              </div>
            </div>
            <div className={cls.content}>
              <h2 className={cls.title}>
                <span>Compare</span> prices at local hospitals near you
              </h2>
              <p className={cls.subtitle}>
                Find out how much a specific procedure may cost with your insurance plan or status. A simple search with
                your insurance and ZIP code shows you the most relevant prices for you.
              </p>
            </div>
          </section>
          <section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: "100px" },
            }}
            className={cls.right}
          >
            <div className={cls.image}>
              <Image placeholder="blur" layout="responsive" src={WorkItem2Image} alt="banner" />
              <div className={cls.small}>
                <BrowseSvg />
              </div>
            </div>
            <div className={cls.content}>
              <h2 className={cls.title}>
                <span>Browse</span> crowdsourced data at your fingertips
              </h2>
              <p className={cls.subtitle}>
                Published price lists from hospitals create the foundation of our results, but our data also contains
                verified costs from real patient bills. Read reviews from fellow patients about their experiences with
                your local hospital.
              </p>
            </div>
          </section>
          <section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: "-100px" },
            }}
            className={cls.leftBottom}
          >
            <div className={cls.image}>
              <Image placeholder="blur" layout="responsive" src={WorkItem3Image} alt="banner" />
              <div className={cls.small}>
                <StoreSvg />
              </div>
            </div>
            <div className={cls.content}>
              <h2 className={cls.title}>
                Securely <span>store</span> healthcare information
              </h2>
              <p className={cls.subtitle}>
                We utilize bank-level security, 256-bit encryption to securely store your data in ways that even we
                cannot access your information. No need to fear losing important information ever again.
              </p>
            </div>
          </section>
        </div>
      </Container>
    </section>
  )
}

export default Work
