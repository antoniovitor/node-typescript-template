import dotenv from 'dotenv'

function setEnvironment() {
    const result = dotenv.config()

    if (result.error) {
        console.error(result.error)
    }
}

export default setEnvironment
