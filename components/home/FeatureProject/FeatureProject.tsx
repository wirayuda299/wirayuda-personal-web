import Link from 'next/link';

import FeatureProjectCard from './Card';
import FeatureProjectTitle from './Title';
import { NextIcon } from '@/components/shared/next-icon';

export default function FeatureProject({ projects }: { projects: Projects[] }) {
	return (
		<section className='px-5 pt-20 dark:bg-black-200'>
			<div className='mx-auto max-w-1400'>
				<FeatureProjectTitle />
				<div className='mt-9 flex flex-col gap-5'>
					{projects.map((item) => (
						<FeatureProjectCard {...item} key={item.title} />
					))}
					<Link
						title='See more case studies'
						href='/case-studies'
						className='mx-auto my-10 inline-flex max-w-350 animate-fade-up gap-5 truncate rounded-full bg-primary-light px-5 py-3 text-xs text-white opacity-0 dark:bg-primary-dark sm:px-10 sm:text-sm'
					>
						See more case studies
						<NextIcon />
					</Link>
				</div>
			</div>
		</section>
	);
}
