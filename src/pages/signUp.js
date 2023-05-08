import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-white">
      <main className="w-1/3 flex flex-col items-center bg-gray-100 px-8 pt-10 rounded shadow-lg">
        <h1 className="text-black text-3xl font-Inter">Sign Up</h1>
        <form className="w-full flex flex-col px-2 py-4 gap-5 items-center justify-center mt-2">
          <div className="flex items-center justify-center flex-col w-full gap-1">
            <p className="text-gray-700 text-sm">Name</p>
            <input className="w-3/4 border border-gray-300 shadow rounded px-2 py-1" />
          </div>
          <div className="flex items-center justify-center flex-col w-full gap-1">
            <p className="text-gray-700 text-sm">Email</p>
            <input className="w-3/4 border border-gray-300 shadow rounded px-2 py-1" />
          </div>
          <div className="flex items-center justify-center flex-col w-full gap-1">
            <p className="text-gray-700 text-sm">Password</p>
            <input
              type="password"
              className="w-3/4 border border-gray-300 shadow rounded px-2 py-1"
            />
          </div>

          <div className="flex w-full items-center justify-center flex-col gap-2 mt-8">
            <p className="text-gray-700 text-sm">Already have an account?</p>
            <Link href="/login">
              <button className="text-gray-700 text-sm hover:opacity-80">
                Log in!
              </button>
            </Link>
          </div>
          <div className="flex w-full justify-between">
            <button disabled className="bg-transparent" />
            <Link href="dashboard">
              <button className="rounded text-gray-700 text-md w-max py-2 px-4 mt-4 hover:opacity-80">
                Next
              </button>
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
};

export default SignUp;
