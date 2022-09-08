import { FaInstagram, FaTwitch, FaTwitter } from 'react-icons/fa'

function Footer() {
	return (
		<div className='bg-dark-cyan h-24 text-[#FFFFFF] text-lg text-center p-3'>
			<div className='text-center'>
				<span className=' text-sm md:text-lg'>
					© OpenBootCamp - Open WeekApps - 2022
				</span>
				<div className='flex flex-row gap-4 justify-center pt-3'>
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
