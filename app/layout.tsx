import type { Metadata, Viewport } from 'next';
import { DM_Sans, Inter } from 'next/font/google';
import './globals.css';
import {siteUrl,canIndex,pageMetadata,siteDescription} from '@/lib/seo';
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
export const metadata: Metadata = {
  ...pageMetadata('Distrito Creativo | Agencia de contenidos digitales',siteDescription,'/'),
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  applicationName:'Distrito Creativo',
  robots:{index:canIndex,follow:canIndex,googleBot:{index:canIndex,follow:canIndex,'max-image-preview':'large','max-snippet':-1,'max-video-preview':-1}},
  verification:{google:process.env.GOOGLE_SITE_VERIFICATION,other:process.env.BING_SITE_VERIFICATION?{'msvalidate.01':process.env.BING_SITE_VERIFICATION}:undefined},
  icons: { icon: [{url: '/assets/Distrito_Creativo_Logo_Transparente.svg', type: 'image/svg+xml'}] },
};
export const viewport: Viewport = { themeColor: '#ffce00' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className={`${dmSans.variable} ${inter.variable}`}><body className="bg-[linear-gradient(155deg,#eee_0_17%,#ffce00_17%_24%,#eee_24%_85%,#ffce00_85%_91%,#eee_91%)]">{children}</body></html>;
}
