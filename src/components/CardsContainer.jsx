import Card from './Card'
import data from '../data/data.json'
import { useEffect, useState } from 'react'

function CardsContainer() {
	const [jobs, setJobs] = useState([])

	useEffect(() => {
		setJobs(data)
	}, [])

	return (
		<main className='bg-light-grayish-cyan-bg text-center min-h-screen flex flex-col gap-4 my-4'>
			<Card jobs={jobs} />
		</main>
	)
}

export default CardsContainer
