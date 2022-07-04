import React from "react"
import Container from "../../components/Layout/Container"
import cls from "./Footer.module.scss"
import Image from "next/image"
import Link from "next/link"

function Footer() {
  return (
    <footer className={cls.wrapper}>
      <Container>
        <div className={cls.footer}>
          <div className={cls.logo}>
            <Link href="/">
              <a>
                <Image src="/icons/logo.svg" width={76} height={79} alt="logo" />
              </a>
            </Link>
          </div>
          <div className={cls.terms}>
            <ul className={cls.nav__list}>
              <li className={cls.nav__item}>
                <a href="#">Terms & Conditions</a>
              </li>
              <li className={cls.nav__item}>
                <a href="#">Privacy Policy</a>
              </li>
              <li className={cls.nav__item}>
                <a href="#">FAQ</a>
              </li>
              <li className={cls.nav__item}>
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <div className={cls.contacts}>
              <div className={cls.call}>
                <p>Call Us</p>
                <a href="tel:54-382-4920-233">+54 382 4920 233</a>
              </div>
              <div className={cls.email}>
                <p>E-mail</p>
                <a href="mailto:contact@finestrahealth.com">contact@finestrahealth.com</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
