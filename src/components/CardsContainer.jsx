import Card from './Card'
import data from '../data/data.json'
import { useEffect, useState } from 'react'

function CardsContainer() {
	const [jobs, setJobs] = useState([])

	useEffect(() => {
		setJobs(data)
	}, [])

	return (
		<main className='flex min-h-screen flex-col gap-10 bg-light-grayish-cyan-bg p-5 py-10 text-center'>
			<Card jobs={jobs} />
		</main>
	)
}

export default CardsContainer
