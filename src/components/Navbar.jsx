function Navbar({ filters, setFilters }) {
	const clearFilters = () => {
		setFilters([])
	}

	const removeFilter = passedFilter => {
		setFilters(filters.filter(f => f !== passedFilter))
	}

	return (
		<div className='container mx-auto -mt-16 flex max-w-6xl rounded bg-white py-3.5 pl-6 shadow-sm sm:items-center'>
			<div className='flex flex-wrap gap-4'>
				{filters.map(filter => (
					<div className='rounded'>
						<span className='rounded-l bg-light-grayish-cyan-ft px-2 py-1.5 text-sm font-bold text-dark-cyan sm:text-sm'>
							{filter}
						</span>
						<span
							onClick={() => removeFilter(filter)}
							className='cursor-pointer rounded-r bg-dark-cyan p-2 px-2 py-1.5 text-sm text-light-grayish-cyan-ft hover:bg-black hover:text-white'
						>
							X
						</span>
					</div>
				))}
			</div>
			<button
				onClick={clearFilters}
				className='ml-auto mr-8 flex self-center text-sm text-dark-grayish-cyan hover:text-dark-cyan hover:underline'
			>
				Clear
			</button>
		</div>
	)
}

export default Navbar
