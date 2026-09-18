import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import ilustration from './assets/pictures/ilustration.png?w=1600&format=avif;webp;png&as=picture'
import StarIcon from './assets/icons/star.svg?react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1 className="font-roboto">Шрифт font-roboto</h1>
          <h1 className="font-fira-sans">Шрифт font-fira-sans</h1>  
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <div className="icons">
          <StarIcon />
          <StarIcon className='starIcon' />
        </div>
        <div className="ilustration">
          <picture>
            <source srcSet={ilustration.sources.avif} type='image/avif' />
            <source srcSet={ilustration.sources.webp} type='image/webp' />
            <img alt='горы' src={ilustration.img.src} />
          </picture>
        </div>
      </section>
    </>
  )
}

export default App
