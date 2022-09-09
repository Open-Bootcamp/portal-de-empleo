import React from 'react'

function Header() {
	return (
		<div className='bg-dark-cyan flex items-center bg-[url("./assets/bg-header-mobile.svg")] bg-contain sm:bg-[url("./assets/bg-header-desktop.svg")] sm:bg-cover'>
			<div className='font-bold drop-shadow-lg ml-6 text-light-grayish-cyan-bg '>
				OPENWEEKAPPS
			</div>
		</div>
	)
}

export default Header
