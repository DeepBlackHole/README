import React, { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import SkillCategory from './SkillCategory'

interface Skill {
	name: string
	icon: string
}

interface CategoryData {
	title: string
	skills: Skill[]
}

const TechStackSection = () => {
	const [activeTab, setActiveTab] = useState('programming')

	const categories: Record<string, CategoryData> = {
		programming: {
			title: 'Programming & Frameworks',
			skills: [
				{ name: 'Python', icon: '🐍' },
				{ name: 'JavaScript', icon: '📜' },
				{ name: 'Django', icon: '🎸' },
				{ name: 'Flask', icon: '🧪' },
				{ name: 'Vue.js', icon: '⚡' },
				{ name: 'Odoo', icon: '🔧' },
			],
		},
		databases: {
			title: 'Databases & Backend',
			skills: [
				{ name: 'MySQL', icon: '🗄️' },
				{ name: 'PostgreSQL', icon: '🐘' },
				{ name: 'Redis', icon: '🔴' },
				{ name: 'SQLite', icon: '📁' },
				{ name: 'Microsoft SQL Server', icon: '🪟' },
			],
		},
		devops: {
			title: 'DevOps & Tools',
			skills: [
				{ name: 'Git', icon: '📊' },
				{ name: 'GitHub', icon: '🐱' },
				{ name: 'GitLab', icon: '🦊' },
				{ name: 'Docker', icon: '🐳' },
				{ name: 'Jenkins', icon: '👷' },
				{ name: 'Nginx', icon: '🟩' },
				{ name: 'Grafana', icon: '📈' },
			],
		},
		frontend: {
			title: 'Frontend & UI',
			skills: [
				{ name: 'HTML5', icon: '🌐' },
				{ name: 'CSS3', icon: '🎨' },
			],
		},
		cloud: {
			title: 'Cloud & Hosting',
			skills: [
				{ name: 'AWS', icon: '☁️' },
				{ name: 'Google Cloud', icon: '☁️' },
				{ name: 'Azure', icon: '☁️' },
				{ name: 'DigitalOcean', icon: '🌊' },
			],
		},
		os: {
			title: 'Operating Systems & Tools',
			skills: [
				{ name: 'macOS', icon: '🍎' },
				{ name: 'Ubuntu', icon: '🟠' },
				{ name: 'Arch Linux', icon: '🏹' },
				{ name: 'Raspberry Pi', icon: '🍓' },
				{ name: 'Kali Linux', icon: '🐉' },
			],
		},
	}

	return (
		<section className='px-4 py-0 bg-background' id='tech-stack'>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-3xl font-bold text-center mb-8'>🚀 Tech Stack</h2>

				<Card className='border-none shadow-md bg-card'>
					<CardContent className='p-6'>
						<Tabs
							defaultValue='programming'
							value={activeTab}
							onValueChange={setActiveTab}
							className='w-full'
						>
							<TabsList className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-8'>
								<TabsTrigger value='programming'>Programming</TabsTrigger>
								<TabsTrigger value='databases'>Databases</TabsTrigger>
								<TabsTrigger value='devops'>DevOps</TabsTrigger>
								<TabsTrigger value='frontend'>Frontend</TabsTrigger>
								<TabsTrigger value='cloud'>Cloud</TabsTrigger>
								<TabsTrigger value='os'>OS & Tools</TabsTrigger>
							</TabsList>

							{Object.entries(categories).map(([key, category]) => (
								<TabsContent key={key} value={key} className='mt-4'>
									<SkillCategory
										title={category.title}
										skills={category.skills}
									/>
								</TabsContent>
							))}
						</Tabs>
					</CardContent>
				</Card>
			</div>
		</section>
	)
}

export default TechStackSection
