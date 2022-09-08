import CardsContainer from './components/CardsContainer'
import Footer from './components/Footer'

function App() {
	return (
		<div className='App text-xl grid grid-rows-layout'>
			<header className='bg-dark-cyan'>OPENWEEKAPP</header>
			<CardsContainer />
			<Footer />
		</div>
	)
}

export default App
