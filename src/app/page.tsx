import Link from "next/link"

export default function Root(){
  return(
    <div className="bg-black bg-home-image bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-bold">Dan&apos;s Computer <br /> Repair Shop </h1>

          <address>
            5555 Gateway Lane <br />
            kansas City, KS 5555

          </address>

          <p>
            Open Daily : 9am to 5pm
          </p>

          <Link href="tel:5555555555" className="hover:underline"> 555-555-555 </Link>

        </div>
      </main>
    </div>
  )
}