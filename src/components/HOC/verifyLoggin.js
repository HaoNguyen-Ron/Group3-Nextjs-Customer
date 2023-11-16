import { useRouter } from "next/router"
import { useEffect } from "react"

const verifyLoggin = (CheckLogginComponent) => {
  const AuthComponent = (props) => {
    const router = useRouter()

      if(router.isReady){
        const checkForToken = localStorage.getItem("TOKEN")
        if (!checkForToken) {
          router.push('/login')
        }
      }
      console.log('««««« gay »»»»»');
    return <CheckLogginComponent {...props} /> 
  }

  return AuthComponent
}

export default verifyLoggin
