/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Create NFTs at affordable rates.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Easy NFT Creation',
    description:
      'Drag and drop interface to create NFTs.',
    icon: LightningBoltIcon,
  },
  {
    name: 'License and Own',
    description:
      'Easily license the rights to your NFTs and collect residuals. Also collect residuals on sales of the NFT.',
    icon: ScaleIcon,
  }
]

export default function About() {
  return (
    <div className="py-12 bg-white" id="about_section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Decentralize and Empowering the Creator Economy</h2>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
