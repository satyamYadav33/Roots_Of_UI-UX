
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ChatInterface from './components/ChatInterface';
import { PRINCIPLES, RESOURCES } from './constants';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('hero');

  const scrollTo = (id: string) => {
    setCurrentSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={scrollTo} />

      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-semibold tracking-wide">
              WELCOME TO ROOTS OF UI/UX
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight">
              Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Intuitive</span> Experiences.
            </h1>
            <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
              Master the foundational principles of user interface and user experience design. Explore interactive guides, download essential assets, and chat with our AI mentor.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => scrollTo('chat')}
                className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl hover:shadow-indigo-200 active:scale-95"
              >
                Start Learning Now
              </button>
              <button 
                onClick={() => scrollTo('foundations')}
                className="px-8 py-4 bg-white text-slate-800 border-2 border-slate-200 rounded-full font-bold text-lg hover:border-indigo-600 transition-all active:scale-95"
              >
                View Principles
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
            <img 
              src="https://picsum.photos/seed/uxhero/800/600" 
              alt="UI/UX Design Concept" 
              className="relative rounded-2xl shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </section>

        {/* Foundations Section */}
        <section id="foundations" className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Foundational Principles</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">The building blocks of great products. Learn how to apply these timeless design rules to any interface.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRINCIPLES.map((principle) => (
                <div 
                  key={principle.id}
                  className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{principle.icon}</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{principle.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
             <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Premium Resources</h2>
                <p className="text-slate-500 max-w-xl">Download high-quality assets and guides to jumpstart your career in UI/UX design.</p>
              </div>
              <button className="text-indigo-600 font-bold hover:underline flex items-center gap-2">
                View All Assets
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {RESOURCES.map((resource) => (
                <div key={resource.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={resource.previewImage} 
                      alt={resource.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        resource.type === 'FIGMA' ? 'bg-orange-100 text-orange-600' : 
                        resource.type === 'PDF' ? 'bg-red-100 text-red-600' : 
                        'bg-blue-100 text-blue-600'
                      }`}>
                        {resource.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-4">{resource.name}</h3>
                    <a 
                      href={resource.downloadUrl}
                      className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors w-full justify-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download Preview
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Chat Section */}
        <section id="chat" className="py-24 bg-indigo-50/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Your Personal UX Mentor</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">Stuck on a design challenge? Our AI mentor has been trained on thousands of successful case studies to help you grow.</p>
            </div>
            
            <ChatInterface />
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">R</div>
              <span className="font-bold text-xl tracking-tight text-white">Roots of UI/UX</span>
            </div>
            <p className="text-sm leading-relaxed">
              Empowering the next generation of product designers with the foundations of intuitive user experiences.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Learning</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => scrollTo('foundations')} className="hover:text-indigo-400">UI Foundations</button></li>
              <li><button className="hover:text-indigo-400">UX Research</button></li>
              <li><button className="hover:text-indigo-400">Interaction Design</button></li>
              <li><button className="hover:text-indigo-400">Accessibility Guide</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => scrollTo('resources')} className="hover:text-indigo-400">Figma Files</button></li>
              <li><button className="hover:text-indigo-400">Design Systems</button></li>
              <li><button className="hover:text-indigo-400">Icon Sets</button></li>
              <li><button className="hover:text-indigo-400">Case Studies</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-indigo-400">Twitter / X</a></li>
              <li><a href="#" className="hover:text-indigo-400">Dribbble</a></li>
              <li><a href="#" className="hover:text-indigo-400">Newsletter</a></li>
              <li><button onClick={() => scrollTo('chat')} className="hover:text-indigo-400">Contact AI Mentor</button></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-xs text-center">
          © {new Date().getFullYear()} Roots of UI/UX Design. All rights reserved. Built with Gemini AI.
        </div>
      </footer>
    </div>
  );
};

export default App;
