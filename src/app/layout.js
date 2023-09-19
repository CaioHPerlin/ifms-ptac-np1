import './globals.css'

export const metadata = {
  title: 'JWT + Toast',
  description: 'Project for PTAC',
}

export default function RootLayout({ children }) {
  return (
    <html lang='pt-br'>
      <body className='bg-pink-50 flex p-8 justify-center'>{children}</body>
    </html>
  )
}