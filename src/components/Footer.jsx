import { FaInstagram, FaTwitch, FaTwitter } from 'react-icons/fa'

function Footer() {
	return (
		<div className='flex h-24 items-center justify-center bg-dark-cyan p-3 text-center text-lg text-[#FFFFFF] drop-shadow-[0_-4px_4px_rgba(0,0,0,0.20)]'>
			<div className='text-center'>
				<span className=' text-sm md:text-lg'>
					© OpenBootCamp - Open WeekApps - 2022
				</span>
				<div className='flex flex-row items-center justify-center gap-4 pt-3'>
					<a href='https://www.instagram.com/openbootcamp_/' target='_blank'>
						<FaInstagram className='transition:colors duration-300 hover:text-teal-900' />
					</a>
					<a href='https://twitter.com/open_bootcamp' target='_blank'>
						<FaTwitter className='transition:colors duration-300 hover:text-teal-900' />
					</a>
					<a href='https://www.twitch.tv/openbootcamp' target='_blank'>
						<FaTwitch className='transition:colors duration-300 hover:text-teal-900' />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Footer
