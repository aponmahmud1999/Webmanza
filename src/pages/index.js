import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ data }) {
  if (data.access_token && typeof window !== 'undefined') localStorage.setItem('accessToken', data.access_token)
  // console.log(storeData)
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >





    </main>
  )
}

export async function getServerSideProps({ req, res }) {
  var myHeaders = new Headers();
  myHeaders.append("Origin", "bookshop.webmanza.com");
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
  };
  const response = await fetch("https://api.webmanza.com/auth/v2/get-access-token", requestOptions)
  const data = await response.json()
  if (data.access_token) {
    myHeaders.append("Authorization", `Bearer ${data.access_token}`);
  }
  return { props: { data } }
}