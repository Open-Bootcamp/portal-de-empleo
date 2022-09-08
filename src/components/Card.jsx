function Card({ jobs }) {
	return (
		<div>
			{jobs.map(job => (
				<p key={job.id}>{job.company}</p>
			))}
		</div>
	)
}

export default Card
