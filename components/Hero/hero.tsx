import Image from 'next/image';

import Content from './Content';

export default function Hero() {
	return (
		<section className='mx-auto grid h-full w-full max-w-1400 grid-cols-1 justify-between gap-6 p-5 md:grid-cols-2'>
			<Content />
			<div className=' h-full w-full max-w-xl'>
				<Image
					width={1000}
					height={500}
					className='h-full animate-fade-left object-contain object-center animate-once'
					src={'/assets/images/hero.png'}
					alt='illustration image'
					priority
					fetchPriority='high'
				/>
			</div>
		</section>
	);
}
