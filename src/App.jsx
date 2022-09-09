import CardsContainer from './components/CardsContainer'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
	return (
		<div className='App grid grid-rows-layout text-xl'>
			<Header />
			<CardsContainer />
			<Footer />
		</div>
	)
}

export default App
