import Link from 'next/link'
import './globals.css'
import Button from './components/Button'

export const metadata = {
  title: 'JWT + Toast',
  description: 'Project for PTAC',
}

export default function RootLayout({ children }) {
  return (
    <html lang='pt-br'>
      <body className='bg-pink-50 grid grid-cols-1 justify-items-center'>
        <nav className='flex bg-white w-screen shadow-md align-middle p-5'>
          <Link href={'/'}><Button secondary>Login</Button></Link>
          <Link href={'/pages/dashboard/'}><Button secondary>Dashboard</Button></Link>
          <Link href={'/pages/dashboard/register'}><Button secondary>Register</Button></Link>
          <Link href={'/pages/dashboard/alter'}><Button secondary>Alter</Button></Link>
        </nav>
        {children}
      </body>
    </html>
  )
}