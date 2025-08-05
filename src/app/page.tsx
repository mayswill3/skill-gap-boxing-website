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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <span>34+ Fights</span>
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
              <div className="h-64 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Featured Fighter</h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Coming Soon</h4>
                <p className="text-gray-600 mb-4">We are currently building our roster of elite fighters. Check back soon to meet our champions.</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Division: TBA</span>
                  <span>Record: TBA</span>
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
                    <p className="text-gray-600">Contact information coming soon</p>
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
                    <p className="text-gray-600">Contact information coming soon</p>
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
                    <p className="text-gray-600">Location information coming soon</p>
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
