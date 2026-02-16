import './globals.css'
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BackToTop } from '@/components/back-to-top'
import { ThemeProvider } from '@/components/theme-provider'
import { Background } from '@/components/background'
import { LoadingScreen } from '@/components/loading-screen'
import { MigrationBanner } from '@/components/migration-banner'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Prajwal Kusha - Portfolio',
  description: 'Data Scientist & Full Stack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${montserrat.variable} relative min-h-screen overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingScreen>
            <Background />
            <div className="relative z-10 flex min-h-screen flex-col">
              <MigrationBanner />
              <Navbar className="bg-background/30 hover:bg-background/50 transition-colors duration-200" />
              <main className="flex-grow backdrop-blur-[2px]">
                <div className="relative">
                  {children}
                </div>
              </main>
              <Footer className="bg-background/30 backdrop-blur-[2px] border-t border-border/10" />
              <BackToTop />
            </div>
          </LoadingScreen>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}