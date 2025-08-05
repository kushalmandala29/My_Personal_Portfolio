import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/components/Animations/FadeIn';
import Image from 'next/image';

const certificationsData = [
	{
		id: 1,
		name: 'Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate',
		issuer: 'Oracle',
		earnedDate: '13-Jul-2024',
		expiryDate: '13-Jul-2026',
		credentialId: '',
		certificateUrl:
			'https://kluniversityin-my.sharepoint.com/:b:/g/personal/2200080037_kluniversity_in/Edb_lcvGYH9Nu-IIjFE6SuQB6POMd9Dm3oCZvGvMrdrimA?e=8yho5f',
		image: '/oracle1.png',
	},
	{
		id: 2,
		name: 'Salesforce Certified AI Associate',
		issuer: 'Trailhead',
		earnedDate: '23-Oct-2024',
		expiryDate: '',
		credentialId: '5111206',
		certificateUrl:
			'https://kluniversityin-my.sharepoint.com/:b:/g/personal/2200080037_kluniversity_in/EdkJ4I3YpMJBrKWet5wM_YgBRkmZxDtgynUvTfsHcPPS6g?e=nYqDs2',
		image: '/salesforce.png',
	},
	{
		id: 3,
		name: 'IBM Python',
		issuer: 'Etrain Education',
		earnedDate: '06-Oct-2024',
		expiryDate: '',
		credentialId: '',
		certificateUrl:
			'https://kluniversityin-my.sharepoint.com/:b:/g/personal/2200080037_kluniversity_in/EQKMEvNBQ9tFhtp7B-l_OskBkkd2OzFV0XEBRyNpJv34wg?e=e8o4WT',
		image: '/ibm.png',
		description: 'A course on etrain.skillsnetwork.site',
	},
	{
		id: 4,
		name: 'Oracle Cloud Infrastructure 2024 Generative AI Certified Professional',
		issuer: 'Oracle',
		earnedDate: '22-Jul-2024',
		expiryDate: '22-Jul-2026',
		credentialId: '',
		certificateUrl:
			'https://kluniversityin-my.sharepoint.com/:b:/g/personal/2200080037_kluniversity_in/EbiCZSKvkSNIh4cqls0BhGABSr5qvBjep51bk5WqQdZxaw?e=bnH1fh',
		image: '/oracleGAI.png',
	},
	{
		id: 5,
		name: 'Oracle Cloud Infrastructure 2023 Certified Foundations Associate',
		issuer: 'Oracle',
		earnedDate: '13-Jul-2024',
		expiryDate: '13-Jul-2026',
		credentialId: '',
		certificateUrl:
			'https://kluniversityin-my.sharepoint.com/:b:/g/personal/2200080037_kluniversity_in/EQipcwZmM8FNhb36GvAscfwB7khdOMgI5W87rLTgAqpEZQ?e=7mve5S',
		image: '/OracleAi.png',
	},
];

const Certifications = () => {
	return (
		<div className="w-full">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto scrollbar-none">
				{certificationsData.map((cert, index) => (
					<motion.div
						key={cert.id}
						initial={{ y: 30, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							delay: index * 0.1,
							duration: 0.5,
							ease: 'easeOut',
						}}
						className="group relative mb-4"
					>
						<div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 h-full transition-all duration-300 hover:bg-white/15 hover:border-accent/50 text-center">
							<div className="flex justify-center mb-3">
								<Image
									src={cert.image}
									alt={cert.name}
									width={48}
									height={48}
									className="w-12 h-12 object-contain"
									onError={(e) => {
										e.currentTarget.src = '/favicon.webp';
									}}
								/>
							</div>

							<h3 className="text-base font-semibold text-accent mb-2 line-clamp-2">
								{cert.name}
							</h3>

							<div className="text-xs text-white/80 mb-3 space-y-1">
								<p>
									<strong>Issued by:</strong> {cert.issuer}
								</p>
								<p>
									<strong>Earned:</strong> {cert.earnedDate}
								</p>
								{cert.expiryDate && (
									<p>
										<strong>Expires:</strong> {cert.expiryDate}
									</p>
								)}
							</div>

							<motion.a
								href={cert.certificateUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block px-3 py-1 bg-accent text-black text-xs font-semibold rounded transition-all duration-300 hover:bg-accent/80 hover:scale-105"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								View Certificate
							</motion.a>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Certifications;
