import Image from "next/image"
import Link from "next/link"



export default function Login() {
    return (
        <main className=" bg-[#0BB574] h-screen">

            <div className="flex items-center justify-center h-[318px]">
                <Image src={"logo-main.svg"} alt="worklify logo" width={183} height={113} className="" />
            </div>


            <div className="absolute bottom-0 left-0 w-full bg-white h-[614px] rounded-t-[32px] p-10 flex flex-col items-center">
                <div className="mb-14">
                    <h1 className="text-[32px] font-bold text-center w-[298px] leading-8">Simplify your day, one task at a time!</h1>
                    <h2 className="font-normal text-center">Log in to connect with your next helper</h2>
                </div>

                <div className="w-full h-10 bg-[#E8E8E8] flex items-center justify-center p-6 rounded mb-9">
                    <Image src="/google-icon.svg" alt="Google" width={24} height={24} className="mr-2" />
                    Log in with Google
                </div>

                <div className="font-bold mb-6 flex items-center">
                    <hr className="bg-slate-400 w-[160px]" />
                    <h3 className="mx-2">or</h3>
                    <hr className="bg-slate-400 w-[160px]" />

                </div>

                <form action="#">
                    <label htmlFor="Email" className="mb-2">Email</label>
                    <input
                        type="email"
                        placeholder="e.g mike@gmail.com"
                        className="w-full border border-gray-300 p-2 rounded-md mb-4"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="Email" className="mb-2">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border border-gray-300 p-2 rounded-md mb-8"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    />

                    <Link
                        href={"/"}
                        className="flex justify-center items-center w-full bg-[#0BB574] hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md"
                    >
                        Log in
                    </Link>
                </form>
            </div>

        </main>
    )
}