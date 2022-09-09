import logo from '../assets/photosnap.svg'
import CardTags from './CardTags'

function Card({ jobs }) {
	return (
		<>
			{jobs.map(job => (
				<div
					key={job.id}
					className='container mx-auto flex flex-col rounded-md border-l-4 border-dark-cyan bg-white p-2 pl-4'
				>
					<img src={logo} alt='logo' className='-mt-7 ml-1 w-12' />
					<div className='flex flex-col gap-1 border-b-[1px] border-slate-500/30 text-left'>
						<div className='mt-3 flex items-center gap-2'>
							<h3 className='mr-5 mt-1 text-base font-bold text-dark-cyan'>
								{job.company}
							</h3>
							{job.new && (
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
						<p className='text-lg font-bold'>{job.position}</p>
						<div className='mb-3 flex items-center gap-1 text-sm text-dark-grayish-cyan'>
							<span>{job.postedAt}</span> · <span>{job.contract}</span> ·
							<span>{job.location}</span>
						</div>
					</div>

					<CardTags job={job} />
				</div>
			))}
		</>
	)
}

export default Card