// Define an interface for the function that will be passed as an argument to nameless
interface AsyncFunction<T> {
  (): Promise<T>
}

// Define the type for the nameless function
type NamelessFunction<T> = (
  fn: AsyncFunction<T>,
  duration?: number
) => Promise<T>

// Define the nameless function
const nameless: NamelessFunction<any> = async (fn, duration = 5) => {
  const timeout = setTimeout(() => {
    throw new Error('Fetch timeout error')
  }, duration * 1000)

  console.log('aqio')

  const data = await fn()
  clearTimeout(timeout)
  return data
}

export default nameless
