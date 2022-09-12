import React from 'react'

function Header() {
	return (
		<header className='flex items-center bg-dark-cyan bg-[url("./assets/bg-header-mobile.svg")] bg-contain sm:bg-[url("./assets/bg-header-desktop.svg")] sm:bg-cover'>
			<div className='ml-16 font-bold text-light-grayish-cyan-bg drop-shadow-lg'>
				OPENWEEKAPPS
			</div>
		</header>
	)
}

export default Header
