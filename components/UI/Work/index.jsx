import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Container from '../../Layout/Container'
import cls from './Work.module.scss'
import { BrowseSvg, CompareSvg, StoreSvg } from '../../../utils/svgs'
import { useWindowSize } from '../../../utils/useWindowSize'
import { motion } from 'framer-motion'

function Work() {
  const size = useWindowSize()
  const [windowWidth, setWindowWidth] = useState('')

  useEffect(() => {
    if (size.width <= 960) {
      setWindowWidth('lg')
    }
  }, [size])

  return (
    <section className={cls.wrapper}>
      <Container>
        <h2 className={cls.mainTitle}>What can you do with it?</h2>
        <p className={cls.mainSubtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique diam tempor auctor venenatis. Proin
          auctor pellentesque nibh, consectetur.
        </p>
        <div className={cls.work}>
          <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: '-200px' },
            }}
            className={cls.left}
          >
            <div className={cls.image}>
              <Image src='/images/work-1.png' width={360} height={360} alt='work' />
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
                your insurance and ZIP code shows you the most relevant prices for you.{' '}
              </p>
            </div>
          </motion.section>
          <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: '200px' },
            }}
            className={cls.right}
          >
            <div className={cls.image}>
              <Image src='/images/work-2.png' width={385} height={385} alt='work' />
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
          </motion.section>
          <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: '-200px' },
            }}
            className={cls.leftBottom}
          >
            <div className={cls.image}>
              <Image src='/images/work-3.png' width={385} height={385} alt='work' />
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
          </motion.section>
        </div>
      </Container>
    </section>
  )
}

export default Work
