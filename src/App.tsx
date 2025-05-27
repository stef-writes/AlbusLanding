import React, { useState } from 'react';
import { ArrowRight, Github, Linkedin, Twitter, Sparkles, BookOpen, Code2, Eye, Repeat, Layout, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/70 backdrop-blur-lg z-50 py-4 shadow-xl">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2.5">
            <img src="/ice-os-logo.png" alt="ICE OS" className="w-9 h-9" />
            <span className="text-xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">ICE OS</span>
          </div>
          <div className="hidden md:flex space-x-8 text-gray-300">
            <a href="#principles" className="hover:text-purple-300 transition-colors font-medium">Principles</a>
            <a href="#spaces" className="hover:text-purple-300 transition-colors font-medium">Spaces</a>
            <a href="#who" className="hover:text-purple-300 transition-colors font-medium">Who It's For</a>
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-6 py-2.5 rounded-lg transition-all duration-300 text-white text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
            Get Started
          </button>
        </div>
      </nav>

      {/* ICE OS Introduction */}
      <section className="pt-32 pb-16 bg-black/40">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <div className="space-y-12">
            <div>
              <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text py-2 tracking-tight" style={{textShadow: '0 0 30px rgba(96, 165, 250, 0.3), 0 0 60px rgba(147, 51, 234, 0.2)'}}>
                ICE OS
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mt-6 italic font-light tracking-wide">
                Independent Creator Environment OS
              </p>
            </div>
            
            <div className="pt-8">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                <span className="font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">ICE OS</span> is a platform designed to democratize creation and development by blending system-level intelligence with intuitive, abstracted tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-800/50 p-4 mb-20">
            <video 
              className="w-full h-auto rounded-xl"
              controls
              poster="/api/placeholder/800/450"
              preload="metadata"
            >
              <source src="/site-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8">Core Philosophy</h3>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-16">
              Empower <span className="font-semibold text-cyan-400">"every user as a creator"</span> by merging:
            </p>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-gray-800/50 p-10 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h4 className="text-2xl font-bold text-cyan-400 mb-6">AI OS</h4>
                <p className="text-gray-300 leading-relaxed text-lg">A smart, adaptive layer that manages workflows, resources, and context-aware automation.</p>
              </div>
              
              <div className="bg-gray-800/50 p-10 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h4 className="text-2xl font-bold text-blue-400 mb-6">AI IDE</h4>
                <p className="text-gray-300 leading-relaxed text-lg">A collaborative, no-code/low-code environment for building software, automations, or digital experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-20 bg-gradient-to-b from-black/40 to-black/60">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <div className="space-y-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text py-2 mb-6">
                Why Now
              </h2>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light max-w-3xl mx-auto">
                AI is crossing the chasm. Context is King.
              </p>
            </div>
            
            {/* Why Now Cards */}
            <div className="grid gap-8 text-left">
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500">
                <div className="flex items-start space-x-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-cyan-400">Legacy Tools Can't Keep Up with Human Thought</h3>
                    <div className="space-y-3 text-gray-300 leading-relaxed">
                      <p>Modern work is nonlinear, multi-modal, and deeply personal.</p>
                      <p>Legacy platforms were built for rigid workflows—not fluid ideation, iteration, or insight.</p>
                      <p>Users now expect tools that adapt to them, not the other way around.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500">
                <div className="flex items-start space-x-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-blue-400">The Cognition-Driven Stack Is Emerging</h3>
                    <div className="space-y-3 text-gray-300 leading-relaxed">
                      <p>AI is moving from novelty to infrastructure—reshaping roles, systems, and strategy:</p>
                      <div className="ml-4 space-y-2">
                        <p><span className="font-semibold text-cyan-400">Cognitive Nodes:</span> Each function becomes an intelligent, adaptive unit.</p>
                        <p><span className="font-semibold text-blue-400">AI Stewards:</span> Humans oversee alignment, ethics, and intent.</p>
                        <p><span className="font-semibold text-purple-400">Orchestration Engineers:</span> Teams design bespoke AI workflows—strategic, composable, and integrated.</p>
                      </div>
                      <p className="italic text-purple-300 text-sm pt-1">This is the rise of the Cognition-Driven Stack: from scattered tools to unified intelligence.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500">
                <div className="flex items-start space-x-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-purple-400">Prompt-Only AI Has Peaked</h3>
                    <div className="space-y-3 text-gray-300 leading-relaxed">
                      <p>The era of one-off prompts is fading. Users want systems that:</p>
                      <div className="ml-4 space-y-1">
                        <p>• Understand their data, context, and creative goals</p>
                        <p>• Execute in structured, reliable, and transparent ways</p>
                      </div>
                      <p><span className="italic">"Chat with your data"</span> was the start.</p>
                      <p>The future lies in persistent memory, modular structure, and collaborative cognition.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 rounded-2xl border border-gray-700/50 hover:border-pink-500/50 transition-all duration-500">
                <div className="flex items-start space-x-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-violet-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-pink-400">Context Is King—and Composability Is the Missing Layer</h3>
                    <div className="space-y-3 text-gray-300 leading-relaxed">
                      <p>Generic AI tools feel empty. Context-aware platforms feel personal.</p>
                      <p>But context alone isn't enough. People don't just want smarter tools—they want malleable systems.</p>
                      <p>Individuals crave environments where they can design their own workflows and thinking tools—without writing code.</p>
                      <p className="italic text-pink-300 text-sm pt-1">The next wave looks more like an OS × IDE hybrid: composable, contextual, and creator-first.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center max-w-7xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-gray-100">Who It's For</h2>
          <p className="text-xl text-gray-400 mb-20 max-w-3xl mx-auto">
            Built for the creators, thinkers, and builders who see AI as an extension of human intelligence
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-10 rounded-2xl border border-gray-700/30 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-110 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-xl mb-6 mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-xl">TC</span>
              </div>
              <h3 className="font-bold text-lg text-cyan-400 group-hover:text-cyan-300 transition-colors">Technical Creators</h3>
            </div>
            
            <div className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-10 rounded-2xl border border-gray-700/30 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-110 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl mb-6 mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-xl">PR</span>
              </div>
              <h3 className="font-bold text-lg text-blue-400 group-hover:text-blue-300 transition-colors">Prosumers</h3>
            </div>
            
            <div className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-10 rounded-2xl border border-gray-700/30 hover:border-purple-400/50 transition-all duration-500 transform hover:scale-110 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-500 rounded-xl mb-6 mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-lg">DS</span>
              </div>
              <h3 className="font-bold text-lg text-purple-400 group-hover:text-purple-300 transition-colors">Designers & Storytellers</h3>
            </div>
            
            <div className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-10 rounded-2xl border border-gray-700/30 hover:border-pink-400/50 transition-all duration-500 transform hover:scale-110 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-500 rounded-xl mb-6 mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-xl">AN</span>
              </div>
              <h3 className="font-bold text-lg text-pink-400 group-hover:text-pink-300 transition-colors">Analysts</h3>
            </div>
            
            <div className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-10 rounded-2xl border border-gray-700/30 hover:border-indigo-400/50 transition-all duration-500 transform hover:scale-110 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-xl mb-6 mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-xl">SP</span>
              </div>
              <h3 className="font-bold text-lg text-indigo-400 group-hover:text-indigo-300 transition-colors">Solopreneurs</h3>
            </div>
            
            <div className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-10 rounded-2xl border border-gray-700/30 hover:border-violet-400/50 transition-all duration-500 transform hover:scale-110 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-400 to-violet-500 rounded-xl mb-6 mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-xl">CA</span>
              </div>
              <h3 className="font-bold text-lg text-violet-400 group-hover:text-violet-300 transition-colors">Content Architects</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-gray-800/70">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2.5 mb-8 md:mb-0">
              <img src="/ice-os-logo.png" alt="ICE OS" className="w-9 h-9" />
              <span className="text-xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">ICE OS</span>
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