import './globals.css'
//import { Inter } from 'next/font/google'
import { Plus_Jakarta_Sans } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })
const plusjakartasans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Leadster - Ferramenta de Geração de Leads',
  description: 'A Leadster é líder em Marketing Conversacional no Brasil, com metodologia de conversão validada ao longo de 5 anos por mais de 2.000 empresas. ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      
      <body className={plusjakartasans.className}>{children}</body>
    </html>
  )
}
