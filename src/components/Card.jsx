import logo from '../assets/photosnap.svg'
import CardTags from './CardTags'

function Card({ jobs }) {
	return (
		<>
			{jobs.map(job => (
				<div
					key={job.id}
					className='bg-white border-l-4 border-dark-cyan p-2 rounded-md flex flex-col pl-4 container'
				>
					<img src={logo} alt='logo' className='w-12 -mt-7 ml-1' />
					<div className='border-b-[1px] border-slate-500/30 text-left flex flex-col gap-1'>
						<div className='mt-3 flex items-center gap-2'>
							<h3 className='mr-5 mt-1 text-dark-cyan font-bold text-base'>
								{job.company}
							</h3>
							{job.new && (
								<p className='uppercase text-sm text-white font-bold px-2 pt-1 bg-dark-cyan rounded-full'>
									New!
								</p>
							)}

							{job.featured && (
								<p className='uppercase text-sm text-white font-bold px-2 pt-1 bg-slate-800 rounded-full'>
									Featured
								</p>
							)}
						</div>
						<p className='font-bold text-lg'>{job.position}</p>
						<div className='text-sm text-dark-grayish-cyan flex items-center gap-1 mb-3'>
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
