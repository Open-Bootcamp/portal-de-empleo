import { useEffect, useState } from 'react'
import data from '../data/data.json'
import Card from './Card'


function CardsContainer() {
	const [jobs, setJobs] = useState([])

	useEffect(() => {
		setJobs(data)
	}, [])

	return (
		<main className='flex min-h-screen flex-col gap-10 bg-light-grayish-cyan-bg p-5 py-10 text-center'>
			<Navbar />
			<Card jobs={jobs} />
		</main>
	)
}

export default CardsContainer
