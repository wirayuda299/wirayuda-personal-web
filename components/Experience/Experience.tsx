import Card from './Card';
import Background from './Background';
import { backgrounds } from '@/constant';

export default function Experience() {
	return (
		<section className=' mt-20 h-full w-full !overflow-hidden'>
			<div className='flex w-full flex-col items-center gap-6 bg-white p-5 pt-16 dark:bg-black-200  lg:flex-row '>
				<Card />
				<div className='flex w-full flex-col justify-between gap-8 '>
					{backgrounds.map((background) => (
						<Background {...background} key={background.title} />
					))}
				</div>
			</div>
		</section>
	);
}
