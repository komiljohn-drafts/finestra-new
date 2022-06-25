import { SavingsSvg, SearchBoldSvg, SmileSvg } from '../../../utils/svgs'
import cls from './HowItWorks.module.scss'

const HowItWorks = () => {
  const features = [
    { id: 1, text: 'Over 3 million charges at your fingertips', icon: <SearchBoldSvg /> },
    { id: 2, text: 'Find the lowest price at nearby hospitals', icon: <SavingsSvg /> },
    { id: 3, text: 'Save money on your next medical bill', icon: <SmileSvg /> },
  ]

  return (
    <>
      <div className={cls.borderTop}></div>
      <section className={cls.wrapper}>
        <h2 className={cls.title}>How does it work?</h2>
        <div className={cls.subtitle}>
          We have collected millions of data points from hospitals, insurance companies, and users like you to help
          predict how much your next medical bill will be. We untangle the confusing pricing schemes so you don’t have
          to.
        </div>
        <div className={cls.features}>
          {features.map((feature) => (
            <div key={feature.id} className={cls.feature}>
              <div className={cls.icon}>{feature.icon}</div>
              <div className={cls.text}>{feature.text}</div>
            </div>
          ))}
        </div>
      </section>
      <div className={cls.borderBottom}></div>
    </>
  )
}

export default HowItWorks
