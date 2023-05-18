import { Inter } from 'next/font/google'
import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'
import { DarkLayout } from '../../components/layouts/DarkLayout'


const inter = Inter({ subsets: ['latin'] })

export default function PricingPage() {
  return (
   <>
    <h1>Pricing</h1>
        
        <h1 className={'title'}>
          Ir a  <Link href="/">Home</Link>
        </h1>

          <p className={'description'}>
            Get started by editing&nbsp;
            <code className={'code'}>pages/pricing.jsx</code>
          </p>
   </>
  )
}


PricingPage.getLayout = function getLayout( page: JSX.Element ) {
  return(
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout> 
    </MainLayout>
  );
}