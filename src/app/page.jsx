'use client'

import Banner from '@/components/common/Home/Banner'
import SectionFooter from '@/components/common/Home/SectionFooter'
import ServiceSec from '@/components/common/Home/ServiceSec'
import { Section } from 'lucide-react'
import Clients from '@/components/common/Home/Clients'
import About from './Pages/about/page'
import PlacementBanner from '@/components/common/Home/PlacementBanner'
import PlacementRecords from '@/components/common/Home/PlacementRecords'
import Programs from '@/components/common/Home/Programs'

export default function Home() {
  return (
    <main className='h-[100%]'>
      <section>
        <Banner />
      </section>

      <section>
        <Programs />
      </section>

      <section>
        <ServiceSec />
      </section>
      
      <section>
        <PlacementRecords />
      </section>
      
      <section>
        <Clients />
      </section>

      <section>
        <About />
      </section>

      <section>
        <SectionFooter />
      </section>
    </main>
  )
}