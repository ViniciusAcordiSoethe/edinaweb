import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Edina Acordi - Consultora SISAN',
  description: 'Explore a compreensiva página da consultora especializada em SISAN, Edina Acordi. Descubra seu expertise e serviços, além de informações valiosas sobre sistemas de segurança alimentar. Obtenha insights fundamentais para otimizar práticas e garantir conformidade. Conheça a excelência em consultoria que Edina Acordi oferece para impulsionar a eficiência e segurança alimentar.',
  keywords: 'sisan, Consultora de sisan, SISAN, Consultoria, Segurança Alimentar, Nutricional, Edina Acordi, ISSAN, Instituto de Soberania e Segurança Alimentar e Nutricional, Edina Acordi Consultora SISAN, Edina Acordi Consultora, Edina Acordi SISAN, Edina Acordi Segurança Alimentar, Edina Acordi Nutricional, Edina Acordi ISSAN, Edina Acordi Instituto de Soberania e Segurança Alimentar e Nutricional',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
