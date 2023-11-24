import { SummaryCards } from '@/components/summary-cards'
import { YourResultsCard } from '@/components/your-results'
import Image from 'next/image'

export default function Home(props) {
  return (
    <div className='flex items-start md:items-center justify-center bg-slate-600 md:h-screen'>
      <div className='flex flex-col items-center justify-center bg-white md:flex-row md:rounded-[30px]'>
        <YourResultsCard />
        <SummaryCards />
      </div>
    </div>
  )
}
