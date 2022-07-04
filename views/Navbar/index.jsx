import React from "react"
import Image from "next/image"
import Container from "../../components/Layout/Container"
import cls from "./Navbar.module.scss"
import { useWindowSize } from "../../utils/useWindowSize"
import Link from "next/link"
import Button from "../../components/UI/Button"

function Navbar() {
  const { width } = useWindowSize()

  return (
    <div className={cls.wrapper}>
      <Container>
        <nav className={cls.nav}>
          <div className={cls.logo}>
            <Link href="/">
              <>
                <Image className="absolute top-5" src="/icons/logo.svg" width={32} height={32} alt="logo" />
                <span>finestra</span>
              </>
            </Link>
          </div>
          <div className={cls.signin}>
            <span className="text-white">
              <Link href="/signin">
                <a className="text-white mr-6 text-base leading-5">Sign in</a>
              </Link>
            </span>
            <Button classes={`bg-[#fff] text-[#000]`}>Upload Bills</Button>
          </div>
        </nav>
      </Container>
    </div>
  )
}

export default Navbar
