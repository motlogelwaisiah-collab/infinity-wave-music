import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { nav, socials } from '../data/site'
import logo from '../assets/logo.jpg'

export function Pills() {
  return <div className="pills">{socials.map(s => s.u
    ? <a key={s.n} className="pill" href={s.u} target="_blank" rel="noopener noreferrer"><i>{s.s}</i>{s.n}</a>
    : <span key={s.n} className="pill off" title="Link coming soon"><i>{s.s}</i>{s.n} · soon</span>)}</div>
}
export function Page({ title, children }) {
  useEffect(() => { document.title = (title ? title + ' · ' : '') + 'INFINITY WAVE MUSIC — Sound Without Limits.' }, [title])
  return <div className="page on">{children}</div>
}
export function Navbar() {
  const [open, setOpen] = useState(false); const { pathname } = useLocation()
  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [pathname])
  return <nav aria-label="Main"><Link className="logo" to="/"><img src={logo} alt="" />INFINITY <b>WAVE</b> MUSIC</Link>
    <button id="bt" aria-expanded={open} aria-controls="lk" onClick={() => setOpen(!open)}>Menu</button>
    <div className={'links' + (open ? ' open' : '')} id="lk">{nav.map(n => <NavLink key={n} to={n === 'home' ? '/' : '/' + n} end>{n}</NavLink>)}</div></nav>
}
export function Footer() {
  return <footer><Link className="logo" to="/"><img src={logo} alt="" />INFINITY <b>WAVE</b> MUSIC</Link>
    <div className="disp" style={{ fontSize: '1.6rem', color: 'var(--g)' }}>SOUND WITHOUT LIMITS.</div><Pills />
    <small>© 2026 INFINITY WAVE MUSIC. All rights reserved.</small></footer>
}
