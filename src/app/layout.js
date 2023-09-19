import './globals.css'

export const metadata = {
  title: 'JWT + Toast',
  description: 'Project for PTAC',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
