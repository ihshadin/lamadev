import Button from '@/components/Button/Button'
import Image from 'next/image'
import Hero from 'public/hero.png'

export default function Home() {
  return (
    <div className='flex items-center gap-24'>
      <div className='flex-1 flex flex-col gap-12'>
        <h1 className='text-7xl bg-gradient-to-b to-[#ddd] from-[#194c33] bg-clip-text text-transparent font-bold'>Better Design for your digital products.</h1>
        <p className='text-2xl font-light'>Turning your Idea into Reality. We bring together the teams from the global tech industry</p>
        <Button url='/portfolio' text='See Our Works' />
      </div>
      <div className='flex-1'>
        <Image src={Hero} className='w-full h-[500px] object-contain' alt='Hero Images' />
      </div>
    </div>
  )
}
