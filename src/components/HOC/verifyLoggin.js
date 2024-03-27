import { useRouter } from 'next/router'

const verifyLoggin = (CheckLogginComponent) => {
  const AuthComponent = (props) => {
    const router = useRouter()

    if (router.isReady === true) {
      const checkForToken = localStorage.getItem('TOKEN')
      if (!checkForToken) {
        router.push('/login')
      }
    }
    return <CheckLogginComponent {...props} />
  }

  return AuthComponent
}

export default verifyLoggin
