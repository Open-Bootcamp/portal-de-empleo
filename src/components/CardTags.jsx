import { useAutoAnimate } from '@formkit/auto-animate/react'
import { v4 as uuidv4 } from 'uuid'

function CardTags({ job, handleTagClick }) {
	const tags = [job.role, job.level]
	tags.push(...job.languages, ...job.tools)

	const [parent] = useAutoAnimate()

	return (
		<div
			ref={parent}
			className='mt-4 mb-2 flex flex-wrap gap-3 lg:mr-5 lg:self-center'
		>
			{tags.map(tag => (
				<span
					key={uuidv4()}
					onClick={() => handleTagClick(tag)}
					className='cursor-pointer rounded-md bg-light-grayish-cyan-ft px-2 py-2 pb-1 text-base font-bold text-dark-cyan transition-colors duration-300 hover:bg-dark-cyan hover:text-light-grayish-cyan-ft'
				>
					{tag}
				</span>
			))}
		</div>
	)
}

export default CardTags
