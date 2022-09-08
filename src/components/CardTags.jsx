function CardTags({ job }) {
	return (
		<div className='mt-4 mb-2 flex flex-wrap gap-3'>
			{job.languages.map(language => (
				<span className='text-sm bg-light-grayish-cyan-ft px-2 py-1 font-bold text-dark-cyan rounded-sm cursor-pointer'>
					{language}
				</span>
			))}

			{/* <span>{job.role}</span>
			<span>{job.level}</span>

			{job.tools.map(language => (
				<span>{language}</span>
			))} */}
		</div>
	)
}

export default CardTags
