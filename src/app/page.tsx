import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen flex items-center pt-16">
        <div className="absolute inset-0">
          <Image
            src="/assets/hero-boxer.jpg"
            alt="Professional Boxing"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white">
            <div className="mb-8">
              <Image
                src="/assets/Primary Logo/PNG/whitelogo.png"
                alt="Skill Gap Promotion & Management"
                width={600}
                height={180}
                className="h-32 md:h-48 lg:h-56 w-auto mx-auto mb-6"
                priority
              />
            </div>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
              Elite boxing promotion and fighter management. Bridging the skill gap between potential and championship glory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#fighters"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Our Fighters
              </a>
              <a
                href="#contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg"
              >
                Get In Touch
              </a>
              <a
                href="https://www.instagram.com/sgp_skillgap_promotions?igsh=MWl1czNlbmttY3Nrbg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow Us
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Skill Gap</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are dedicated to discovering, developing, and promoting exceptional boxing talent while providing comprehensive management services that ensure our fighters reach their full potential.
            </p>
          </div>
          
          <div className="mb-16">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/assets/training-action.jpg"
                alt="Professional Boxing Training"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Elite Training</h3>
              <p className="text-gray-600">State-of-the-art training facilities and world-class coaching to develop championship-level skills.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Professional Management</h3>
              <p className="text-gray-600">Comprehensive career management including contracts, sponsorships, and strategic fight planning.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Championship Promotion</h3>
              <p className="text-gray-600">Strategic promotion and marketing to build fighter brands and secure high-profile opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive boxing services designed to elevate fighters from amateur to professional championship level.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fighter Management</h3>
              <p className="text-gray-600 mb-4">Complete career management including contract negotiations, fight scheduling, and strategic planning.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Contract negotiations</li>
                <li>• Career planning</li>
                <li>• Fight scheduling</li>
                <li>• Media relations</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Event Promotion</h3>
              <p className="text-gray-600 mb-4">Professional boxing event organization from amateur showcases to championship bouts.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Event planning</li>
                <li>• Venue booking</li>
                <li>• Marketing &amp; promotion</li>
                <li>• Broadcast coordination</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Training Programs</h3>
              <p className="text-gray-600 mb-4">Elite training programs with world-class coaches and state-of-the-art facilities.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Technical training</li>
                <li>• Strength &amp; conditioning</li>
                <li>• Mental preparation</li>
                <li>• Sparring partners</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Brand Development</h3>
              <p className="text-gray-600 mb-4">Building fighter brands through strategic marketing and sponsor relationships.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Personal branding</li>
                <li>• Sponsorship deals</li>
                <li>• Social media</li>
                <li>• Merchandise</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fighters Section */}
      <section id="fighters" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Champions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the elite fighters who trust Skill Gap Promotion &amp; Management to guide their careers to championship glory.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-96">
                <Image
                  src="/assets/fighter-portrait-1.jpg"
                  alt="Carlos Moreno - Founder & Professional Boxer"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Carlos Moreno</h4>
                <p className="text-gray-600 mb-4">Our founder started boxing at 15, had his first amateur bout at 18 vs Carl Marsh (son of former world champion Terry Marsh). Reached national semi-finals in 2008, won Haringey Box Cup gold in 2009, and ended his amateur career in 2014 with the Elite Portuguese National Title.</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Founder & Fighter</span>
                  <span>39 Fights • 30 Wins</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-96">
                <Image
                  src="/assets/dante-munisi-cropped.png"
                  alt="Dante Munisi - Professional Boxer"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Dante Munisi</h4>
                <p className="text-gray-600 mb-4">A seasoned fighter with over 100 bouts under his belt. His goal is simple and unwavering - to be a champion. That's all.</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>100+ Bouts</span>
                  <span>Championship Goal</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-96">
                <Image
                  src="/assets/hulio-chavez-fighter.jpg"
                  alt="Hulio Chavez - Professional Boxer"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Hulio Chavez</h4>
                <p className="text-gray-600 mb-4">120+ amateur fights with 4-1 professional record and Right2fight hall of fame 1-0. His goal is simple: to become champion and be involved in development of young fighters coming up. To be on a world stage to GLORIFY and showcase his skillset!</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Professional: 4-1</span>
                  <span>120+ Amateur Fights</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-96">
                <Image
                  src="/assets/bailey-legg-champion.jpg"
                  alt="Bailey Legg - Professional Boxer"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Bailey Legg</h4>
                <p className="text-gray-600 mb-4">Undefeated rising star at 63kg with lightning speed and technical precision. Bailey combines youth with championship ambition, showcasing exceptional footwork and ring IQ that has kept him perfect through 5 professional fights. A dedicated athlete with the heart of a champion.</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>63kg Division</span>
                  <span>5-0 (1 KO)</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-96">
                <Image
                  src="/assets/soroush-saeedi-fighter.jpg"
                  alt="Soroush S.S.S Saeedi - Professional Boxer"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Soroush "S.S.S" Saeedi</h4>
                <p className="text-gray-600 mb-4">Young and determined fighter at just 19 years old with impressive physical attributes. Standing 180cm tall in the 75kg division, Soroush brings raw talent and hunger to prove himself in the professional ranks. Despite early setbacks, he's focused on growth and development.</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>75kg • Age 19</span>
                  <span>0-1 Record</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-96">
                <Image
                  src="/assets/kenz-bailey-fighter.jpg"
                  alt="Kenz Bailey - Professional Boxer"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Kenz Bailey</h4>
                <p className="text-gray-600 mb-4">Fighting out of Derbyshire, Kenz has showcased real talent, determination and skill. Most notably fighting on viral boxing platform King of the Ring (KOTR). Every time he steps into the ring he's guaranteed to put on a show and cause problems for any opponent. Now partnered with Skill Gap x Provizion!</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Derbyshire</span>
                  <span>3-1-1 Record</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Upcoming Events</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the excitement of professional boxing with Skill Gap promoted events featuring rising stars and championship bouts.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <div className="relative h-64">
                <Image
                  src="/assets/promotion-poster.jpg"
                  alt="Boxing Promotion Event"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">UPCOMING</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black/60 text-white px-3 py-1 rounded-full text-sm">TBA 2024</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Championship Night</h3>
                <p className="text-gray-300 mb-6">
                  An evening of professional boxing featuring title fights and rising contenders. Details to be announced.
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between">
                    <span>Venue:</span>
                    <span>TBA</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Main Event:</span>
                    <span>TBA</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tickets:</span>
                    <span>Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-semibold">PLANNING</span>
                <span className="text-gray-400">TBA 2024</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Rising Stars Showcase</h3>
              <p className="text-gray-300 mb-6">
                A showcase event featuring up-and-coming fighters looking to make their mark in professional boxing.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>Venue:</span>
                  <span>TBA</span>
                </div>
                <div className="flex justify-between">
                  <span>Format:</span>
                  <span>Multi-fight card</span>
                </div>
                <div className="flex justify-between">
                  <span>Tickets:</span>
                  <span>TBA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to take your boxing career to the next level? Contact Skill Gap Promotion &amp; Management today.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <a href="tel:07949510959" className="text-red-600 hover:text-red-700 transition-colors duration-200">
                      07949 510 959
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a href="mailto:Info@morenoboxing.co.uk" className="text-red-600 hover:text-red-700 transition-colors duration-200">
                      Info@morenoboxing.co.uk
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">
                      Moreno Boxing<br />
                      G1A Stamford Works<br />
                      London, N16 8JH
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Instagram</h4>
                    <a 
                      href="https://www.instagram.com/sgp_skillgap_promotions?igsh=MWl1czNlbmttY3Nrbg%3D%3D&utm_source=qr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-700 transition-colors duration-200"
                    >
                      @sgp_skillgap_promotions
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option>Fighter Management Inquiry</option>
                    <option>Event Promotion</option>
                    <option>Training Programs</option>
                    <option>Partnership Opportunities</option>
                    <option>Media Inquiries</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Tell us about your boxing goals, experience, and how we can help..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
