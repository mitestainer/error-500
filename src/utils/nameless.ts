// interface Nameless {
//   fn: Function
//   duration?: number
// }

const nameless = async (fn: Promise<void>, duration = 20) => {
  // const { fn, duration = 20 } = params

  if (fn instanceof Function) {
    const timeout = setTimeout(() => {
      throw new Error('Erro de timeout de fetch')
    }, duration * 1000)

    const data = await fn()
    clearTimeout(timeout)
    return data
  }
}

export default nameless
