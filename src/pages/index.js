import { Inter } from "next/font/google";

<<<<<<< HEAD
const inter = Inter({ subsets: ["latin"] });
=======
import Services from '@/components/services'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })
>>>>>>> daf20b709ccfce755f35312cbe7edfb0fc49dfd0

export default function Home() {
  return (
    <>
      <h1>hello</h1>

      <Services />
    </>
  );
}
