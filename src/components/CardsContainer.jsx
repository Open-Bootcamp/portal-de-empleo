import Card from './Card'
import data from '../data/data.json'
import { useEffect, useState } from 'react'

function CardsContainer() {
	const [jobs, setJobs] = useState([])
	const [filters, setFilters] = useState([])

	useEffect(() => {
		setJobs(data)
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
		<main className='flex min-h-screen flex-col gap-10 bg-light-grayish-cyan-bg p-5 py-10 text-center'>
			{filteredJobs.map(job => (
				<Card key={job.id} job={job} handleTagClick={handleTagClick} />
			))}
		</main>
	)
}

export default CardsContainer
