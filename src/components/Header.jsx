import React from 'react'

function Header() {
	return (
		<div
			className='bg-dark-cyan bg-[url("./assets/bg-header-mobile.svg")] bg-contain'
			// style={{ backgroundImage: `url("${bgmobile}")` }}
		>
			<div className='font-bold p-5 drop-shadow-lg text-light-grayish-cyan-bg '>
				OPENWEEKAPPS
			</div>
		</div>
	)
}

export default Header
