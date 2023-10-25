
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import LoginForm from '@/components/Form/LoginForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1>hello</h1>

      <LoginForm />
    </>
  )
}
