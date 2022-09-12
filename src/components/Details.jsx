import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as API from '../data/getJobs'

function Details() {
	const { jobId } = useParams()

	const [job, setJob] = useState({})

	useEffect(() => {
		API.getJobById(jobId)
			.then(setJob)
			.catch(error => console.error(error))
	}, [jobId])

	return (
		<div>
			<h1>Details</h1>
			<h3>{job[0]?.company?.name}</h3>
		</div>
	)
}

export default Details
