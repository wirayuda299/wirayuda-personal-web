import {
	Hero,
	Skills,
	Experience,
	Services,
	Testimonial,
	FeatureProject,
} from '@/components/index';
import { getCaseStudies } from '@/sanity/actions/caseStudies';

export const revalidate = 0;

export default async function Home() {
	const caseStudies = await getCaseStudies('featured');

	return (
		<>
			<Hero />
			<Skills />
			<Services />
			<Experience />
			<FeatureProject projects={caseStudies} />
			<Testimonial />
		</>
	);
}
