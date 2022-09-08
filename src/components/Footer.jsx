import { FaInstagram, FaTwitch, FaTwitter } from 'react-icons/fa'

function Footer() {
	return (
		<div className='h-24 bg-dark-cyan p-3 text-center text-lg text-[#FFFFFF] drop-shadow-[0_-4px_4px_rgba(0,0,0,0.20)]'>
			<div className='text-center'>
				<span className=' text-sm md:text-lg'>
					© OpenBootCamp - Open WeekApps - 2022
				</span>
				<div className='flex flex-row justify-center gap-4 pt-3'>
					<a href='https://www.instagram.com/openbootcamp_/'>
						<FaInstagram />
					</a>
					<a href='https://twitter.com/open_bootcamp'>
						<FaTwitter />
					</a>
					<a href='https://www.twitch.tv/openbootcamp'>
						<FaTwitch />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Footer
