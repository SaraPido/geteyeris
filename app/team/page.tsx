import Image from 'next/image'

const teamMembers = [
  {
    name: 'Chiara Plizzari',
    role: 'Researcher',
    company: 'Google',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Mw0YDEi8wYToFfFMl45JSCVp0Bxfx6.png#chiara'
  },
  {
    name: 'Gabriele Goletto',
    role: 'PhD',
    company: 'Politecnico di Torino',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Mw0YDEi8wYToFfFMl45JSCVp0Bxfx6.png#gabriele'
  },
  {
    name: 'Sara Pidò',
    role: 'Postdoc',
    company: 'MIT',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Mw0YDEi8wYToFfFMl45JSCVp0Bxfx6.png#sara'
  },
  {
    name: 'Maëlle-Marie Troadec',
    role: 'Strategy consultant',
    company: 'PwC',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Mw0YDEi8wYToFfFMl45JSCVp0Bxfx6.png#maelle'
  },
  {
    name: 'Jacopo Faini',
    role: 'Program Manager',
    company: 'Bocconi',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Mw0YDEi8wYToFfFMl45JSCVp0Bxfx6.png#jacopo'
  }
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#ffd7c5] relative p-8">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 text-[#1a2b4e]">
        The Eye<span className="relative">Ris<span className="absolute -top-1 -right-1 text-xs">👀</span></span> team
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
              <Image
                src={member.image}
                alt={member.name}
                width={192}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-xl font-semibold text-center">{member.name}</h2>
            <p className="text-lg text-center">{member.role}</p>
            <p className="text-md text-center text-gray-600">{member.company}</p>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-4 right-4 w-24 h-24">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Mw0YDEi8wYToFfFMl45JSCVp0Bxfx6.png#logo"
          alt="EyeRis Logo"
          width={96}
          height={96}
          className="object-contain"
        />
      </div>
    </div>
  )
}
