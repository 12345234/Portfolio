import type { MouseEvent } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { profile } from '../data/portfolio'
import SafeImg from './SafeImg'

export default function Hero() {
  function scrollToSection(event: MouseEvent<HTMLAnchorElement>, sectionId: string) {
    event.preventDefault()
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <section className="hero section" id="hero">
      <div className="container">
        <div className="avatar-placeholder">
          <SafeImg
            src={profile.avater}
            alt={profile.name}
            fallback={profile.nameEn.charAt(0)}
          />
        </div>

        <p className="hero-eyebrow">Portfolio</p>

        <h1 className="hero-name">
          <span className="gradient">{profile.name}</span>
          <span className="hero-name-en">{profile.nameEn}</span>
        </h1>

        <p className="hero-role">{profile.role}</p>

        {profile.motto && (
          <blockquote className="hero-motto">
            <span className="hero-motto-mark">"</span>
            {profile.motto}
            <span className="hero-motto-mark">"</span>
          </blockquote>
        )}

        <div className="hero-actions">
          <a
            href="#works"
            className="btn btn-primary"
            onClick={(event) => scrollToSection(event, 'works')}
          >
            制作物を見る <FaArrowRight />
          </a>
          <a
            href="#contact"
            className="btn btn-outline"
            onClick={(event) => scrollToSection(event, 'contact')}
          >
            連絡する
          </a>
        </div>
      </div>

      <div className="hero-scroll">Scroll</div>
    </section>
  )
}
