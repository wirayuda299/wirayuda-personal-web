import Image from 'next/image';
import { Button } from '../ui/button';

export default function CallToAction() {
	return (
		<section className='mb-10 mt-24 flex h-full min-h-[500px] w-full items-center p-3 dark:bg-black-200 sm:p-6'>
			<div className="mx-auto flex aspect-video h-full w-full max-w-[1400px]  flex-col items-center justify-center  rounded-xl bg-[url('/assets/images/cta.png')] bg-auto bg-center bg-no-repeat p-4 sm:h-[330px] sm:bg-cover sm:p-10 md:flex-row md:justify-between lg:p-12">
				<div className='max-w-xl'>
					<h2 className='p-5 text-3xl font-bold sm:text-center md:text-left md:text-[32px] lg:text-5xl'>
						Have a project in mind that requires technical expertise?
					</h2>
				</div>
				<div className='pt-4 sm:pt-7'>
					<Button className='inline-flex w-full items-center  gap-3 truncate rounded-full bg-primary-light text-sm font-semibold hover:bg-blue-600 dark:bg-primary-dark dark:text-white sm:text-xs'>
						Get in Touch with Me
						<Image
							className='w-4'
							src={'/assets/icons/next.svg'}
							width={40}
							height={40}
							alt='next arrow icon'
						/>
					</Button>
				</div>
			</div>
		</section>
	);
}
