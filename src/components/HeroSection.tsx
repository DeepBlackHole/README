import React from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { ArrowDownIcon } from 'lucide-react'
import avatar from '../../assets/image.png'

interface HeroSectionProps {
	name?: string
	title?: string
	description?: string
	imageUrl?: string
}

const HeroSection = ({
	name = 'Black Hole',
	title = 'InfoSec | Reverse Engineering | Hardware Engineering',
	description = "I'm currently working on InfoSec, Reverse Engineering, and Hardware Engineering projects with a focus on security and performance optimization.",
	imageUrl = avatar,
}: HeroSectionProps) => {
	return (
		<section className='relative w-full min-h-[600px] flex items-center justify-center py-16 px-4 md:px-8 bg-background'>
			{/* Tech-inspired background pattern */}
			<div className='absolute inset-0 z-0 opacity-5'>
				<div className='absolute inset-0 bg-[radial-gradient(#444_1px,transparent_1px)] bg-[size:20px_20px]'></div>
			</div>

			<div className='container max-w-6xl mx-auto z-10'>
				<div className='flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16'>
					{/* Image column */}
					<motion.div
						className='w-full md:w-2/5'
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
					>
						<div className='relative w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl'>
							<img
								src={imageUrl}
								alt={name}
								className='w-full h-full object-cover'
							/>
						</div>
					</motion.div>

					{/* Content column */}
					<motion.div
						className='w-full md:w-3/5 text-center md:text-left'
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70'>
							{name}
						</h1>
						<h2 className='text-xl md:text-2xl font-medium text-muted-foreground mb-6'>
							{title}
						</h2>
						<p className='text-lg text-foreground/80 mb-8 max-w-2xl'>
							{description}
						</p>
						<Button
							className='group'
							onClick={() => {
								const techStackSection = document.getElementById('tech-stack')
								if (techStackSection) {
									techStackSection.scrollIntoView({ behavior: 'smooth' })
								}
							}}
						>
							View My Tech Stack
							<ArrowDownIcon className='ml-2 h-4 w-4 transition-transform group-hover:translate-y-1' />
						</Button>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
