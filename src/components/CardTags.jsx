function CardTags({ job }) {
	const tags = [job.role, job.level]
	tags.push(...job.languages, ...job.tools)

	return (
		<div className='mt-4 mb-2 flex flex-wrap gap-3 lg:self-center lg:mr-5'>
			{tags.map(tag => (
				<span className='cursor-pointer rounded-sm bg-light-grayish-cyan-ft px-2 py-1 text-sm font-bold text-dark-cyan'>
					{tag}
				</span>
			))}
		</div>
	)
}

export default CardTags
