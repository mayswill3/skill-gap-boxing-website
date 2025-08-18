import Image from "next/image";

export default function OmariGrantProfile() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen flex items-center pt-16">
        <div className="absolute inset-0">
          <Image
            src="/assets/omari-grant-kriptik.jpg"
            alt="Omari Grant aka Kriptik aka The Praying Mantis"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 text-red-400">Omari Grant</h1>
                <div className="text-2xl md:text-3xl text-gray-300 space-y-2">
                  <p className="font-semibold">aka "Kriptik"</p>
                  <p className="font-semibold">aka "The Praying Mantis"</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                An undefeated influencer boxer and Music Artist from Nottingham with a total of 19 bouts and 9 title wins. 
                A community worker, role model, and ambassador for boxing who bridges the worlds of music and sport.
              </p>
              
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-400">19</div>
                  <div className="text-gray-400">Total Bouts</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-400">9</div>
                  <div className="text-gray-400">Title Wins</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400">0</div>
                  <div className="text-gray-400">Losses</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold">Undefeated</span>
                <span className="bg-purple-600 text-white px-4 py-2 rounded-full">Influencer Boxer</span>
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full">Music Artist</span>
                <span className="bg-green-600 text-white px-4 py-2 rounded-full">Community Worker</span>
              </div>
              
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/thekriptik?igsh=MTF0ZDQ3cXgzY24wOA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Follow @thekriptik
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/assets/omari-grant-kriptik.jpg"
                  alt="Omari Grant with championship belts"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">The Story</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">From Grime to Glory</h3>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Omari Grant's journey is one of remarkable versatility and determination. Known in the music world as "Kriptik," 
                  he made his mark in the grime scene starting around 2009, growing up in a musical family with a reggae singer father 
                  and poet stepfather.
                </p>
                <p>
                  His transition to boxing began with a charity event in 2015, where he discovered another passion that would 
                  define his career. After turning professional in 2017, he has remained undefeated, earning the nickname 
                  "The Praying Mantis" for his unique fighting style.
                </p>
                <p>
                  As a seven-time champion who has never lost a fight, Omari represents the perfect fusion of entertainment 
                  and athletic excellence. His work extends beyond the ring as a community worker, earning recognition for 
                  his contributions to youth development and supporting people with disabilities through boxing.
                </p>
              </div>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/assets/omari-grant-news.jpg"
                alt="Omari Grant news coverage"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Achievements & Recognition</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 16L3 5h5.5l1.5 5 1.5-5H17l-2 11H5zm2.5-7L6 15h8l1.5-6H7.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Undefeated Record</h3>
              <p className="text-gray-600">19 total bouts with zero losses, showcasing exceptional skill and preparation</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">9 Title Wins</h3>
              <p className="text-gray-600">Multiple championship victories across different boxing organizations</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nottingham Castle Honor</h3>
              <p className="text-gray-600">Portrait displayed at Nottingham Castle as one of the city's 100 most influential people</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Music Career</h3>
              <p className="text-gray-600">Established grime artist "Kriptik" with radio appearances and performances across UK and Spain</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Community Recognition</h3>
              <p className="text-gray-600">Awarded for contributions to youth development and disability support through boxing</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-Media Creator</h3>
              <p className="text-gray-600">Author of a novel, podcast host, and short film writer showcasing creative versatility</p>
            </div>
          </div>
        </div>
      </section>

      {/* Media Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Media Gallery</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl group">
              <Image
                src="/assets/omari-grant-kriptik.jpg"
                alt="Omari Grant with championship belts"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Championship Victory</p>
              </div>
            </div>
            
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl group">
              <Image
                src="/assets/omari-grant-news.jpg"
                alt="Omari Grant news coverage"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Media Recognition</p>
              </div>
            </div>
            
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl group">
              <Image
                src="/assets/omari-grant-music-poster.jpg"
                alt="Kriptik music performance"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Music Career as "Kriptik"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Coverage */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">In The News</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-red-400">Nottingham Post Feature</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "Undefeated boxer Omari's biggest fight - to get people of Nottingham in his corner." 
                Featured as a prominent Nottingham figure representing the city's talent and potential.
              </p>
              <div className="border-l-4 border-red-600 pl-4 mb-6">
                <p className="text-gray-400 italic">
                  "I'm undefeated and my record is great – but there's just a big barrier because of the lack 
                  of support in the city. If I can showcase my skills and show what I'm capable of, that's all 
                  it would take me to take that step."
                </p>
                <p className="text-sm text-gray-500 mt-2">- Omari Grant, Nottingham Post</p>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-red-400">Left Lion Magazine</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Featured profile highlighting his journey from grime music to professional boxing, 
                showcasing his unique path and dedication to both crafts.
              </p>
              <div className="border-l-4 border-red-600 pl-4 mb-6">
                <p className="text-gray-400 italic">
                  "You can be very talented, but it all depends on how you sell yourself, how much people 
                  get behind you and how you push through setbacks."
                </p>
                <p className="text-sm text-gray-500 mt-2">- Omari Grant, Left Lion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Support a Champion
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Follow Omari's journey as he continues to represent Nottingham on the world stage, 
            bridging the gap between music and sport while inspiring the next generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/thekriptik?igsh=MTF0ZDQ3cXgzY24wOA=="
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
              </svg>
              Follow @thekriptik
            </a>
            <a
              href="#contact"
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg"
            >
              Get In Touch
            </a>
            <a
              href="/fighters"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg"
            >
              View All Fighters
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}