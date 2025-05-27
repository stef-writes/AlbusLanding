import React, { useState } from 'react';
import { Brain, ArrowRight, Github, Linkedin, Twitter, Sparkles, BookOpen, Code2, Eye, Repeat, Layout, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/70 backdrop-blur-lg z-50 py-4 shadow-xl">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2.5">
            <Brain className="w-7 h-7 text-purple-400" />
            <span className="text-xl font-semibold text-gray-100">ICE OS</span>
          </div>
          <div className="hidden md:flex space-x-8 text-gray-300">
            <a href="#principles" className="hover:text-purple-300 transition-colors font-medium">Principles</a>
            <a href="#spaces" className="hover:text-purple-300 transition-colors font-medium">Spaces</a>
            <a href="#who" className="hover:text-purple-300 transition-colors font-medium">Who It's For</a>
          </div>
          <button className="bg-purple-500 hover:bg-purple-600 px-6 py-2.5 rounded-md transition-colors text-white text-sm font-semibold shadow-md">
            Get Started
          </button>
        </div>
      </nav>

      {/* ICE OS Introduction */}
      <section className="pt-36 pb-24 bg-black/40">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <div className="space-y-8">
            <div>
              <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text py-2 tracking-tight" style={{textShadow: '0 0 30px rgba(96, 165, 250, 0.3), 0 0 60px rgba(147, 51, 234, 0.2)'}}>
                ICE OS
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mt-4 italic font-light tracking-wide">
                Independent Creator Environment OS
              </p>
            </div>
            
            <div className="py-8">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Knowledge workers and creators waste countless hours reinventing thought processes that should compound. Current AI tools force either rigid templates or chaotic chats—missing the sweet spot where structured reasoning meets creative flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* An Instrument of Intelligence Section */}
      <section className="py-32 bg-gradient-to-b from-black/40 to-black/60">
        <div className="container mx-auto px-6 text-center max-w-6xl">
          <div className="space-y-20">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text py-2 mb-8">
                The Instrument of Intelligence
              </h2>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light max-w-4xl mx-auto">
                for creators to build AI systems that think like they do—then scale beyond them.
              </p>
            </div>
            
            {/* Why Now Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-10 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">AI 2.0 Transition</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  We've moved from single prompts (ChatGPT) to compound systems—creators need tools to match
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-10 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Imagination Gap</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Teams that can't turn institutional knowledge into AI systems will be outpaced
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-10 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Economic Shift</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  The next wave of businesses will sell process-as-product
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center max-w-7xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-100">Who It's For</h2>
          <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto">
            Built for the creators, thinkers, and builders who see AI as an extension of human intelligence
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-8 rounded-2xl border border-gray-700/30 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-110 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-xl mb-4 mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-xl">CA</span>
              </div>
              <h3 className="font-bold text-lg text-cyan-400 group-hover:text-cyan-300 transition-colors">Content Architects</h3>
            </div>
            
            <div className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-8 rounded-2xl border border-gray-700/30 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-110 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl mb-4 mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-xl">CC</span>
              </div>
              <h3 className="font-bold text-lg text-blue-400 group-hover:text-blue-300 transition-colors">Course Creators</h3>
            </div>
            
            <div className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-8 rounded-2xl border border-gray-700/30 hover:border-purple-400/50 transition-all duration-500 transform hover:scale-110 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-500 rounded-xl mb-4 mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-xl">SP</span>
              </div>
              <h3 className="font-bold text-lg text-purple-400 group-hover:text-purple-300 transition-colors">Solopreneurs</h3>
            </div>
            
            <div className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-8 rounded-2xl border border-gray-700/30 hover:border-pink-400/50 transition-all duration-500 transform hover:scale-110 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-500 rounded-xl mb-4 mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-xl">AN</span>
              </div>
              <h3 className="font-bold text-lg text-pink-400 group-hover:text-pink-300 transition-colors">Analysts</h3>
            </div>
            
            <div className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-8 rounded-2xl border border-gray-700/30 hover:border-indigo-400/50 transition-all duration-500 transform hover:scale-110 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-xl mb-4 mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-xl">DS</span>
              </div>
              <h3 className="font-bold text-lg text-indigo-400 group-hover:text-indigo-300 transition-colors">Designers</h3>
            </div>
            
            <div className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-8 rounded-2xl border border-gray-700/30 hover:border-violet-400/50 transition-all duration-500 transform hover:scale-110 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-400 to-violet-500 rounded-xl mb-4 mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-xl">ST</span>
              </div>
              <h3 className="font-bold text-lg text-violet-400 group-hover:text-violet-300 transition-colors">Storytellers</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-gray-800/70">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2.5 mb-8 md:mb-0">
              <Brain className="w-7 h-7 text-purple-400" />
              <span className="text-xl font-semibold text-gray-200">ICE OS</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} ICE OS. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function SpaceCard({ title, subtitle, desc }: { title: string; subtitle: string; desc: React.ReactNode }) {
  return (
    <div className="bg-gray-800/50 p-8 rounded-xl shadow-xl hover:bg-gray-700/70 transition-all duration-300 h-full transform hover:scale-105 flex flex-col">
      <h3 className="text-2xl font-semibold mb-2 text-gray-100">{title}</h3>
      <p className="text-purple-300 mb-6 text-sm font-semibold tracking-wide">{subtitle.toUpperCase()}</p>
      <div className="flex-grow">{desc}</div>
    </div>
  );
}

function WhoCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-gray-800/50 p-8 rounded-xl shadow-xl hover:bg-gray-700/70 transition-all duration-300 transform hover:scale-105">
      <h3 className="font-semibold text-2xl mb-2 text-gray-100">{title}</h3>
      <p className="text-gray-300/90 text-base leading-relaxed">{desc}</p>
    </div>
  );
}

export default App;