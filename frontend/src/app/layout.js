import '../styles/global.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
export const metadata = {
  title: 'Restaurant D\'ale Gurii Pogoanele',
  description: 'Bucură-te de preparate delicioase la Restaurantul D\'ale Gurii din Pogoanele.',
  keywords: 'restaurant, Pogoanele, D\'ale Gurii, dale gurii, mancare, pomana, evenimente, meniul zilei',
  openGraph: {
    title: 'D\'ale Gurii',
    description: 'Bucură-te de preparate delicioase la Restaurantul D\'ale Gurii din Pogoanele.',
    images: '/logo.svg',
    url: 'https://dalegurii.vercel.app',
    type: 'website',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <SpeedInsights/>
      <Analytics/>
    </html>
  )
}
