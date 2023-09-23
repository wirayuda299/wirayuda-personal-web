import Image from 'next/image';
import CallToAction from './CallToAction';

export default function Content() {
	return (
		<div className='h-full w-full'>
			<div className='flex h-full w-full flex-col justify-center md:max-w-lg'>
				<h1 className='animate-fade-up text-primary-light animate-once pb-5 text-sm uppercase md:pb-7 md:text-xl'>
					Hi, I am Wirayuda
				</h1>
				<h2 className='animate-fade-up text-black-200 animate-once z-0 w-fit py-[14px] text-3xl  font-bold dark:text-white sm:text-5xl lg:text-[64px]'>
					Professional{' '}
					<div className='ease after:animate-increasing after:bg-secondary relative whitespace-nowrap py-3  transition-all duration-500 after:absolute after:bottom-4 after:left-0 after:z-[-1] after:h-3 after:w-0 md:after:h-5'>
						Web Developer
					</div>{' '}
					based in Bali
					<Image
						className='animate-fade-right animate-delay-300 animate-duration-1000 animate-once inline-block h-12 w-12 object-contain lg:h-14 lg:w-14'
						src={'/assets/images/flower.png'}
						width={50}
						height={50}
						priority
						alt='jepun flower image'
					/>
				</h2>
				<p className='animate-fade-up text-white-500 animate-once  text-xs dark:text-white sm:text-sm'>
					Transforming the web one line of code at a time: Crafting cutting-edge
					digital experiences with precision, passion, and a profound commitment
					to excellence
				</p>
				<CallToAction />
			</div>
		</div>
	);
}
