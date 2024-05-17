import Link from 'next/link'
import React from 'react'

const Login = () => {
    return (
        <>
        <Link href="/dashboard" className="hover:underline hover:bg-indigo-500 rounded-md hover:text-white">Login to Dashboard</Link>
        <Link href="/home" className="hover:underline hover:bg-indigo-500 rounded-md hover:text-white">Go to Home</Link>
        </>
    )
}

export default Login