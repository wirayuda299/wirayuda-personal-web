import Link from 'next/link';

import { Button } from '../ui/button';
import { NextIcon } from './next-icon';

export default function CallToAction() {
	return (
		<section className='flex size-full min-h-500 items-center p-3 dark:bg-black-200 sm:p-6'>
			<div className="mx-auto flex size-full max-w-1400 flex-col items-center justify-center rounded-xl bg-[url('/assets/images/cta.png')] bg-auto bg-center bg-no-repeat p-4 sm:aspect-video sm:h-[330px] sm:bg-cover sm:p-10 md:flex-row md:justify-between lg:p-12">
				<div className='w-full max-w-xl'>
					<h2 className='p-5 text-3xl font-bold sm:text-center md:text-left md:text-[32px] lg:text-5xl'>
						Have a project in mind that requires technical expertise?
					</h2>
				</div>
				<Link
					href={'/contact'}
					className='w-full pt-4 min-[350px]:w-auto sm:pt-7 '
				>
					<Button className='flex w-full items-center gap-3 truncate rounded-full bg-primary-light text-sm font-semibold hover:bg-blue-600 dark:bg-primary-dark dark:text-white sm:text-xs lg:px-7'>
						Get in Touch with Me
						<NextIcon color='#fff' />
					</Button>
				</Link>
			</div>
		</section>
	);
}
