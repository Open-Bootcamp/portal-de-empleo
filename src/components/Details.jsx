import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import * as API from '../data/getJobs'
import Loader from './Loader'

function Details() {
	const { jobId } = useParams()
	const [job, setJob] = useState({})
	const [tags, setTags] = useState([])

	useEffect(() => {
		API.getJobById(jobId)
			.then(data => {
				setJob(data[0])
				createTags(data[0])
			})
			.catch(error => console.error(error))
	}, [jobId])

	const createTags = job => {
		const tags = [job?.role, job?.level]
		tags.push(...job?.languages, ...job?.tools)
		setTags(tags)
	}

	return (
		<section className='flex items-center justify-center bg-light-grayish-cyan-bg p-3'>
			{Object.keys(job).length === 0 ? (
				<Loader />
			) : (
				<article className='container mx-auto flex max-w-2xl flex-col items-center gap-6 rounded-lg bg-white p-6 text-center'>
					<div className='flex items-center justify-center gap-6'>
						<img src={job?.logo} className='w-32' alt='logo' />
						<div className='text-left'>
							<h3 className='text-3xl font-bold text-slate-800'>
								{job?.company?.name}
							</h3>
							<h4>{job?.company?.location}</h4>
						</div>
					</div>

					<div>
						<h2 className='text-2xl font-bold text-slate-800'>
							{job?.position}
						</h2>
						<p className='my-5 text-lg'>{job?.description}</p>
					</div>

					<div className='mb-4 flex flex-wrap justify-center gap-3 lg:mr-5 lg:self-center'>
						{tags.map(tag => (
							<span
								key={uuidv4()}
								className='rounded-sm bg-light-grayish-cyan-ft px-2 py-1 pb-0 text-base font-bold text-dark-cyan'
							>
								{tag}
							</span>
						))}
					</div>

					<Link to='/#'>
						<button className='rounded-lg bg-dark-cyan p-2 px-4 pb-1 text-2xl font-semibold text-light-grayish-cyan-ft'>
							Back to home
						</button>
					</Link>
				</article>
			)}
		</section>
	)
}

export default Details
