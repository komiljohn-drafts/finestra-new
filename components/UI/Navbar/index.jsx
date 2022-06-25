import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Container from '../../Layout/Container'
import cls from './Navbar.module.scss'
import { useWindowSize } from '../../../utils/useWindowSize'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '../Button'

const boxWrapperVariants = {
  open: {
    opacity: 1,
    x: 0,
  },
  closed: { opacity: 0, x: '100%' },
}

const burgerMenuVariants = {
  open: {
    opacity: 1,
    x: 0,
  },
  closed: { opacity: 0, x: '100%' },
}

const btnOpenTopVariant = {
  open: {
    transform: 'rotate(-25deg) translateY(9px)',
  },
  closed: { transform: 'rotate(0deg) translateY(0px)' },
}

const btnOpenBottomVariant = {
  open: {
    transform: 'rotate(25deg) translateY(-8px)',
  },
  closed: { transform: 'rotate(0deg)  translateY(0px)' },
}

const btnClosedVariant = {
  open: {
    opacity: 0,
    x: '100%',
  },
  closed: { opacity: 1, x: 0 },
}

function Navbar() {
  const size = useWindowSize()
  const [showBurger, setShowBurger] = useState(false)
  const [showBurgerMenu, setShowBurgerMenu] = useState(false)

  useEffect(() => {
    if (size.width <= 720) {
      setShowBurger(true)
    } else {
      setShowBurger(false)
      setShowBurgerMenu(false)
    }
  }, [size])

  return (
    <div className={cls.wrapper}>
      <Container>
        <nav className={cls.nav}>
          <div className={cls.logo}>
            <Link href='/'>
              <>
                <Image src='/icons/logo.svg' width={32} height={32} alt='logo' />
                <span>finestra</span>
              </>
            </Link>
          </div>
          <div>
            <span className='text-white'>
              <Link href='/signin'>
                <a className='text-white mr-6 text-base leading-5'>Sign in</a>
              </Link>
            </span>
            <Button>Upload Bills</Button>
          </div>
        </nav>
      </Container>
    </div>
  )
}

export default Navbar
