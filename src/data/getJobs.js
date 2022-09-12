const API_URL = 'https://portal-de-empleo-api-production.up.railway.app'

export async function getAllJobs() {
	try {
		const response = await fetch(`${API_URL}/jobs`)
		const data = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}

export async function getJobById(jobId) {
	try {
		const response = await fetch(`${API_URL}/jobs/${jobId}`)
		const data = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}
