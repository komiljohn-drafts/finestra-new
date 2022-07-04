import React from 'react'
import Container from '../../Layout/Container'
import cls from './Offers.module.scss'
import { motion } from 'framer-motion'
import {
  ArrowDecorationSvg,
  DocSvg,
  FolderSvg,
  UserSvg,
} from '../../../utils/svgs'

function Offers() {
  const data = [
    {
      id: 1,
      boldText: '3 million',
      icon: <DocSvg />,
      bgColor: '#EBEEF8',
      title: `Over <span>3 million</span> data points from 100+ hospitals in NYC`,
      subtitle:
        'Data includes discounted cash prices (uninsured) and insurance-specific negotiated charges.',
    },
    {
      id: 2,
      boldText: '3 million',
      icon: <FolderSvg />,
      bgColor: '#F8EBD0',
      title: `Files stored using high-level <span>encryption</span>`,
      subtitle:
        'Between hospital visits, lab tests, and doctor’s appointments, the average person in the United States racks up quite a lot of medical information. We are here to help.',
    },
    {
      id: 3,
      boldText: '3 million',
      icon: <UserSvg />,
      bgColor: '#FF52521A',
      title: `<span>Seamless sync</span> between existing healthcare accounts`,
      subtitle:
        'Whether you use MyChart or another portal, you can easily import your information. If your provider does not offer an online portal, we offer you ways to scan, upload, and secure your information.',
    },
  ]

  return (
    <section className={cls.wrapper}>
      <Container>
        <div className={cls.offers}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            className={cls.arrow}
          >
            <ArrowDecorationSvg />
          </motion.div>
          <motion.h2
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: '300px', opacity: 0 },
            }}
            className={cls.title}
          >
            What do we offer?
          </motion.h2>
          <motion.p
            className={cls.subtitle}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: '300px', opacity: 0 },
            }}
          >
            The U.S. healthcare system is broken. Patients are too often left
            feeling powerless. At Finestra, we know there is a better way.
            Patients deserve control.
          </motion.p>
          {data.map((offer) => (
            <motion.section
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: '300px', opacity: 0 },
              }}
              key={offer.id}
              className={cls.offer}
            >
              <div
                style={{ backgroundColor: offer.bgColor }}
                className={cls.image}
              >
                {offer.icon}
              </div>
              <h3 dangerouslySetInnerHTML={{ __html: offer.title }} />
              <p>{offer.subtitle}</p>
            </motion.section>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Offers
