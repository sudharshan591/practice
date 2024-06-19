import Link from "next/link"
export default function Home() {
  return (
   <div className="text-3xl flex flex-col items-center justify-center py-20 px-40 ">
    <h1>Welcome to my website!</h1>
    <Link href="/form">form</Link>
   </div>
  )
}