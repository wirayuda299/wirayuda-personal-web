import Image from 'next/image';
import CallToAction from './CallToAction';

export default function Content() {
	return (
		<div className='flex h-full w-full flex-col justify-center lg:max-w-[500px]'>
			<h1 className='animate-fade-up pb-5 text-sm uppercase text-primary-light animate-once md:pb-7 md:text-xl'>
				Hi, I am Wirayuda
			</h1>
			<h2 className='z-0 w-fit animate-fade-up text-3xl font-bold text-black-200 animate-once  dark:text-white sm:text-5xl  xl:text-16'>
				Professional{' '}
				<div className='ease relative whitespace-nowrap py-3 transition-all duration-500  after:absolute after:bottom-4 after:left-0 after:z-[-1] after:h-3 after:w-0 after:animate-increasing after:bg-secondary md:after:h-5'>
					Web Developer
				</div>{' '}
				based in Bali
				<Image
					className='inline-block h-12 w-12 animate-fade-right object-contain animate-delay-300 animate-duration-1000 animate-once lg:h-14 lg:w-14'
					src={'/assets/images/flower.png'}
					width={50}
					height={50}
					priority
					alt='jepun flower image'
				/>
			</h2>
			<p className='animate-fade-up pt-4 text-xs text-white-500  animate-once dark:text-white sm:text-sm'>
				Transforming the web one line of code at a time: Crafting cutting-edge
				digital experiences with precision, passion, and a profound commitment
				to excellence
			</p>
			<CallToAction />
		</div>
	);
}
