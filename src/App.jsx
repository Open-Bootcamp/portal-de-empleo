import { Route, Routes } from 'react-router-dom'
import CardsContainer from './components/CardsContainer'
import Details from './components/Details'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
	return (
		<div className='App grid min-h-screen grid-rows-layout text-xl'>
			<Header />
			<Routes>
				<Route path='/' element={<CardsContainer />} />
				<Route path='/job/:jobId' element={<Details />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
