import { useState } from 'react'
import { Link } from 'react-router-dom'
import { releases, videos, artists, news } from '../data/site'
import { Page, Pills } from '../components/Shell'
import cover from '../assets/cover.jpg'
import banner from '../assets/banner.jpg'
import fbcover from '../assets/fbcover.jpg'

let d = 'M0 60 Q75 10 150 60'; for (let x = 300; x <= 2400; x += 150) d += ` T${x} 60`; d += ' V120 H0Z'
const ticker = Array(8).fill('SOUND WITHOUT LIMITS ✦ AFRICAN SOUNDS ✦ SEPEDI STORIES ✦ GLOBAL VIBRATIONS ✦ ').join('')

export function Feat({ r }) {
  return <div className="feat"><img className="cov" src={cover} alt={`${r.title} by ${r.artist} single artwork`} />
    <div><span className="badge">{r.status}</span>
      <h3 style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)', margin: '1rem 0 .3rem' }}>{r.title}</h3>
      <p style={{ color: 'var(--mute)', margin: 0 }}>{r.artist} · {r.type}</p>
      <ul className="meta"><li><span>Label</span>{r.label}</li><li><span>Distribution</span>{r.dist}</li><li><span>Status</span>{r.status} · {r.date}</li></ul>
      <div className="player"><button disabled aria-label="Play (unavailable)">▶</button><div className="bar" /><small>Audio preview placeholder</small></div>
      <p style={{ color: 'var(--mute)', margin: '0 0 .8rem' }}>Streaming links appear here once the release is live.</p>
      <div className="pills">{['Spotify', 'Apple Music', 'YouTube Music'].map(n => <span key={n} className="pill off"><i>♪</i>{n} · soon</span>)}</div></div></div>
}

export function Home() {
  return <Page><header className="hero">
    <div className="blob" style={{ width: '40vw', height: '40vw', background: 'var(--v)', top: '-10vw', right: '-8vw' }} />
    <div className="blob" style={{ width: '30vw', height: '30vw', background: 'var(--m)', bottom: '-8vw', left: '-6vw', animationDelay: '-5s' }} />
    <div style={{ position: 'relative' }}><h1><span>Infinity</span><span>Wave</span><span>Music</span></h1>
      <p className="tag">SOUND WITHOUT LIMITS.</p><p className="phr">African sounds. Sepedi stories. Global vibrations.</p>
      <div className="btns"><Link className="btn" to="/music">Explore music</Link><Link className="btn o" to="/videos">Watch videos</Link></div></div>
    <div className="art"><img src={cover} alt="Mphe Lerato by INFINITY — single artwork of a couple in silhouette at a purple African sunset" /></div>
    <div className="wave" aria-hidden="true"><svg viewBox="0 0 2400 120" preserveAspectRatio="none"><path d={d} /></svg></div></header>
    <div className="mq" aria-hidden="true"><div>{ticker}</div></div>
    <section className="wrap"><img className="ban" src={banner} alt="INFINITY WAVE MUSIC — Sound Without Limits. Amapiano, Sepedi music, African vibes." /></section>
    <section className="wrap"><p className="kick">One global sound</p><h2>All languages.<br />All cultures.<br />All genres.</h2>
      <p className="big" style={{ marginTop: '2rem' }}>INFINITY WAVE MUSIC is a global-minded music and creative entertainment brand, rooted in South Africa and open to the entire world.</p>
      <div className="grid"><div className="card"><h3>Music</h3><p>Original releases that celebrate musical diversity, language and cultural expression without borders.</p></div>
        <div className="card"><h3>Animated visuals</h3><p>AI-generated animated music videos that bring sounds, languages and stories together.</p></div>
        <div className="card"><h3>Vision</h3><p>Global music without boundaries.</p></div></div></section>
    <section className="wrap"><p className="kick">First release</p><h2>Mphe Lerato</h2><div style={{ marginTop: '2.5rem' }}><Feat r={releases[0]} /></div></section></Page>
}

export function Music() {
  return <Page title="Music"><section className="wrap"><p className="kick">Catalogue</p><h2>Music</h2>
    <div style={{ marginTop: '2.5rem' }}><Feat r={releases[0]} /></div>
    <h3 style={{ marginTop: '5rem', fontSize: '2.2rem' }}>All releases</h3>
    <div className="grid">{releases.map(r => <div key={r.title} className="card"><img className="cov" style={{ transform: 'none', animation: 'none', boxShadow: 'none', marginBottom: '1rem' }} src={cover} alt="" />
      <span className="badge">{r.status}</span><h3>{r.title}</h3><p>{r.artist} · {r.type}</p></div>)}
      <div className="card" style={{ display: 'grid', placeItems: 'center', textAlign: 'center', borderStyle: 'dashed' }}><p>Next release<br /><span className="disp" style={{ fontSize: '1.8rem', color: 'var(--g)' }}>Coming soon</span></p></div></div></section></Page>
}

export function Videos() {
  return <Page title="Videos"><section className="wrap"><p className="kick">Watch</p><h2>Videos</h2>
    <p className="big" style={{ marginTop: '1.5rem' }}>Animated music videos, visual stories and teasers. Part of what makes the sound visible.</p>
    <p style={{ color: 'var(--mute)' }}>Placeholders below. Real YouTube videos will replace them when published.</p>
    <div className="grid">{videos.map(v => <article key={v.t} className="vid" style={{ '--h': v.h }}>
      {v.url ? <iframe src={v.url} title={v.t} loading="lazy" allowFullScreen /> : <span className="badge">Placeholder</span>}
      <div><p className="kick" style={{ color: '#fff', margin: '0 0 .3rem' }}>{v.c}</p><h3>{v.t}</h3></div></article>)}</div></section></Page>
}

export function About() {
  return <Page title="About"><section className="wrap"><p className="kick">About</p><h2>Rooted in Africa.<br />Open to the world.</h2>
    <img className="ban" style={{ marginTop: '2rem' }} src={fbcover} alt="INFINITY WAVE MUSIC cover artwork" loading="lazy" />
    <div style={{ maxWidth: '68ch', marginTop: '2rem' }}>
      <p>INFINITY WAVE MUSIC is an independent South African music and creative entertainment brand exploring the limitless possibilities of music and digital storytelling.</p>
      <p>Rooted in African creativity and inspired by global sounds, the brand brings together different languages, cultures, musical genres and creative expressions.</p>
      <p>Through original music and AI-generated animated visual experiences, INFINITY WAVE MUSIC aims to create entertainment that connects people across borders.</p>
      <p>From African sounds to global vibrations, every release is an opportunity to tell a story, express creativity and explore something new.</p></div>
    <div className="grid"><div className="card"><p className="kick">Mission</p><p style={{ color: 'var(--ink)' }}>To create and promote original music and imaginative visual storytelling that connects people across cultures and borders.</p></div>
      <div className="card"><p className="kick">Vision</p><p style={{ color: 'var(--ink)' }}>To grow into an internationally recognised independent music and digital entertainment brand.</p></div>
      <div className="card"><p className="kick">Creative philosophy</p><p style={{ color: 'var(--ink)' }}>Diversity is the sound. Technology is the instrument. Every song is a story, and stories have no borders.</p></div></div></section></Page>
}

export function Artist() {
  const a = artists[0]
  return <Page title="Artist"><section className="wrap"><p className="kick">Artist</p><h2>{a.name}</h2>
    <div className="feat"><img className="cov" src={cover} alt="Mphe Lerato artwork" />
      <div><p className="big" style={{ maxWidth: 'none' }}>{a.bio}</p>
        <ul className="meta"><li><span>Releases</span>{a.releases.join(', ')}</li><li><span>Videos</span>Coming soon</li></ul><Pills /></div></div></section></Page>
}

export function News() {
  return <Page title="News"><section className="wrap"><p className="kick">Updates</p><h2>News</h2>
    <div className="grid">{news.map(n => <article key={n.t} className="card"><span className="badge">{n.d}</span><h3>{n.t}</h3><p>{n.p}</p></article>)}</div></section></Page>
}

export function Contact() {
  const [ok, setOk] = useState(false)
  return <Page title="Contact"><section className="wrap"><p className="kick">Get in touch</p><h2>Contact</h2>
    <p className="big" style={{ marginTop: '1.5rem' }}>Business, collaborations, creative partnerships, media and general enquiries.</p>
    <ul className="meta" style={{ maxWidth: 640 }}><li><span>Email</span>[email address to be added]</li><li><span>Phone</span>[phone number to be added]</li></ul>
    <form onSubmit={e => { e.preventDefault(); setOk(true) }}>
      <label>Name<input required name="n" autoComplete="name" /></label><label>Email<input required type="email" name="e" autoComplete="email" /></label>
      <label>Subject<input required name="s" /></label><label>Message<textarea required name="m" rows="6" /></label>
      <button className="btn" type="submit">Send message</button>
      {ok && <div id="ok" role="status" style={{ display: 'block' }}>This form isn’t connected to an inbox yet. Add a form service or email address to make it live.</div>}</form></section></Page>
}
