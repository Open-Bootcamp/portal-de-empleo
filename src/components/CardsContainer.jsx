import { useEffect, useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import * as API from '../data/getJobs'
import Card from './Card'
import Navbar from './Navbar'

function CardsContainer() {
	const [jobs, setJobs] = useState([])
	const [filters, setFilters] = useState([])

	const [parent] = useAutoAnimate()

	useEffect(() => {
		API.getAllJobs()
			.then(setJobs)
			.catch(error => console.error(error))
	}, [])

	const filterFunction = ({ role, level, tools, languages }) => {
		if (filters.length === 0) return true

		const tags = [role, level]

		if (tools && languages) {
			tags.push(...languages, ...tools)
		}

		return filters.every(filter => tags.includes(filter))
	}

	const handleTagClick = tag => {
		if (filters.includes(tag)) return
		setFilters([...filters, tag])
	}

	const filteredJobs = jobs.filter(filterFunction)

	return (
		<main
			ref={parent}
			className='flex min-h-screen flex-col gap-10 bg-light-grayish-cyan-bg p-5 py-10 text-center'
		>
			{filters.length > 0 && (
				<Navbar filters={filters} setFilters={setFilters} />
			)}

			{filteredJobs.map(job => (
				<Card key={job.idOffer} job={job} handleTagClick={handleTagClick} />
			))}
		</main>
	)
}

export default CardsContainer
