import setEnvironment from './enviroment'

function bootstrap() {
    if (process.env.NODE_ENV !== 'production') {
        setEnvironment()
    }
}

export default bootstrap
