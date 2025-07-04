import React from 'react'
import HeroSection from './HeroSection'
import TechStackSection from './TechStackSection'

import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { ExternalLink, Send, Heart } from 'lucide-react'

export default function Home() {
	return (
		<div className='min-h-screen bg-background text-foreground flex flex-col'>
			{/* Hero Section */}
			<HeroSection />

			{/* Main content */}
			<div className='container mx-auto px-4 space-y-12 flex-1'>
				{/* Tech Stack */}
				<TechStackSection />

				<Separator className='my-12' />

				{/* Contact */}
				<section id='contact' className='space-y-6'>
					<h2 className='text-3xl font-bold tracking-tight text-center mb-8'>
						📫 How to reach me
					</h2>
					<div className='flex flex-col md:flex-row justify-center items-center gap-8'>
						<a
							href='https://t.me/Blinchik_I_Tochka'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Button className='gap-2'>
								<Send size={18} />
								Telegram: @Blinchik_I_Tochka
							</Button>
						</a>

						<a
							href='mailto:gizmo-frown-hertz@duck.com'
							className='flex items-center gap-2 hover:text-primary transition-colors'
						>
							<Button variant='outline' className='gap-2'>
								<Send size={18} />
								Email: gizmo-frown-hertz@duck.com
							</Button>
						</a>
					</div>
				</section>

				<Separator className='my-12' />

				{/* Support */}
				<section id='support' className='space-y-6'>
					<h2 className='text-3xl font-bold tracking-tight text-center mb-8'>
						Support me
					</h2>
					<div className='flex justify-center'>
						<a
							href='https://www.patreon.com/c/DeepBlackHole/membership'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Button variant='default' className='gap-2'>
								<Heart size={18} className='text-red-500' />
								Support on Patreon
								<ExternalLink size={16} />
							</Button>
						</a>
					</div>
				</section>
			</div>

			{/* Footer */}
			<footer className='bg-muted py-6 mt-24'>
				<div className='container mx-auto px-4 text-center text-sm text-muted-foreground'>
					<p>© {new Date().getFullYear()} – MIT License </p>
				</div>
			</footer>
		</div>
	)
}
