import { CounterButton } from '@features/counterButton';
import heroImg from './assets/hero.png';
import StarIcon from './assets/icons/star.svg?react';
import ilustration from './assets/pictures/ilustration.png?w=1600&format=avif;webp;jpg&as=picture';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';

function App() {
	return (
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
			<CounterButton />
			<div className="icons">
				<StarIcon title="Star icon" />
				<StarIcon className="star-icon" title="Star icon" />
			</div>
			<div className="ilustration">
				<picture>
					<source srcSet={ilustration.sources.avif} type="image/avif" />
					<source srcSet={ilustration.sources.webp} type="image/webp" />
					<img alt="горы" src={ilustration.img.src} loading="lazy" />
				</picture>
			</div>
		</section>
	);
}

export default App;
