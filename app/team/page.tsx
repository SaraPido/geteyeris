import Image from 'next/image'
import Link from 'next/link'

const teamMembers = [
  {
    name: 'Chiara Plizzari',
    role: 'Researcher',
    company: 'Google',
    image: '/images/chiara.jpeg'
  },
  {
    name: 'Sara Pidò',
    role: 'Postdoc',
    company: 'MIT',
    image: '/images/sara.JPG'
  },
  {
    name: 'Gabriele Goletto',
    role: 'PhD',
    company: 'Politecnico di Torino',
    image: '/images/gabri.jpeg'
  },
  {
    name: 'Maëlle-Marie Troadec',
    role: 'Strategy consultant',
    company: 'PwC',
    image: '/images/maelle.jpeg'
  },
  {
    name: 'Jacopo Faini',
    role: 'Program Manager',
    company: 'Bocconi',
    image: '/images/jacopo.jpeg'
  }
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-black text-white relative p-8">
      <header className="mb-12">
        <Link href="/" className="text-purple-400 hover:text-purple-300 transition-colors">
          ← Back to Home
        </Link>
      </header>
      
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 text-purple-400">
        The Eye<span className="relative">Ris<span className="absolute -top-1 -right-1 text-xs">👀</span></span> team
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-4 bg-gray-800">
              <Image
                src={member.image}
                alt={member.name}
                width={192}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-xl font-semibold text-center text-purple-400">{member.name}</h2>
            <p className="text-lg text-center text-gray-300">{member.role}</p>
            <p className="text-md text-center text-gray-400">{member.company}</p>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-4 right-4 w-24 h-24">
        <Image
          src="/images/eyeris2.png"
          alt="EyeRis Logo"
          width={96}
          height={96}
          className="object-contain"
        />
      </div>
    </div>
  )
}