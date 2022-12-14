import { Link } from 'react-router-dom'
import CardTags from './CardTags'

function Card({ job, handleTagClick }) {
	return (
		<div className='container mx-auto flex max-w-6xl flex-col rounded-md border-l-4 border-dark-cyan bg-white p-2 pl-4 lg:flex-row'>
			<img
				src={job.logo}
				alt='logo'
				className='-mt-7 ml-1 w-12 lg:mt-0 lg:mr-5 lg:h-fit lg:w-auto lg:self-center'
			/>
			<div className='flex flex-col gap-1 border-b-[1px] border-slate-500/30 text-left lg:mr-auto lg:border-none'>
				<div className='mt-3 flex items-center gap-2'>
					<h3 className='mr-5 mt-1 text-lg font-bold text-dark-cyan lg:text-xl'>
						{job.company.name}
					</h3>
					{job.isRecent && (
						<p className='rounded-full bg-dark-cyan px-2 pt-1 text-sm font-bold uppercase text-white'>
							New!
						</p>
					)}

					{job.featured && (
						<p className='rounded-full bg-slate-800 px-2 pt-1 text-sm font-bold uppercase text-white'>
							Featured
						</p>
					)}
				</div>
				<Link to={`job/${job.idOffer}`}>
					<p className='cursor-pointer text-lg font-bold hover:underline lg:text-xl'>
						{job.position}
					</p>
				</Link>
				<div className='mb-3 flex items-center gap-1 text-sm text-dark-grayish-cyan lg:text-base'>
					<span>{job.postedAt}</span> · <span>{job.contract}</span> ·
					<span>{job.location}</span>
				</div>
			</div>

			<CardTags job={job} handleTagClick={handleTagClick} />
		</div>
	)
}

export default Card
