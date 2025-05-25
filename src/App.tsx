import React, { useState } from 'react';
import { Brain, ArrowRight, Github, Linkedin, Twitter, Sparkles, BookOpen, Code2, Eye, Repeat, Layout, ChevronDown } from 'lucide-react';

function App() {
  const [showFullContent, setShowFullContent] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      {!showFullContent ? (
        // Initial Manifesto Screen
        <div className="h-screen flex flex-col justify-center items-center px-6 relative">
          <div className="absolute top-8 left-8 flex items-center space-x-3">
            <Brain className="w-10 h-10 text-purple-500" />
            <span className="text-3xl font-semibold">Albus</span>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-12">
            <blockquote className="text-3xl md:text-4xl text-gray-200 italic leading-tight">
              <span className="line-through text-gray-500">
                we need a nation of <span className="font-semibold">workers</span>, not <span className="font-semibold">thinkers</span>.
              </span>
              <br />
              <span className="text-gray-100 font-semibold not-italic">
                we need a nation of <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">thinkers</span>, not just <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">workers</span>.
              </span>
            </blockquote>
            
            <h1 className="text-7xl md:text-9xl font-bold mt-10 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text py-2">
              Albus
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-200 mt-4">
              A Thinking Environment for a Thinking World
            </p>
            
            <div className="mt-16 flex justify-center">
              <button 
                onClick={() => setShowFullContent(true)}
                className="bg-purple-600 hover:bg-purple-700 px-12 py-5 rounded-full flex items-center justify-center space-x-3 text-xl font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 shadow-lg"
              >
                <span>Explore Albus</span>
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
            <ChevronDown className="w-10 h-10 text-purple-500 opacity-60" />
          </div>
        </div>
      ) : (
        // Full Content
        <>
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 bg-gray-900/70 backdrop-blur-lg z-50 py-4 shadow-xl">
            <div className="container mx-auto px-6 flex justify-between items-center">
              <div className="flex items-center space-x-2.5">
                <Brain className="w-7 h-7 text-purple-400" />
                <span className="text-xl font-semibold text-gray-100">Albus</span>
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

          {/* Creative Intelligence Introduction */}
          <section className="pt-36 pb-24 bg-black/40">
            <div className="container mx-auto px-6 text-center max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-semibold mb-10 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text py-2">
                An Instrument of Intelligence
              </h2>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                Albus is an <span className="font-semibold text-purple-300">Independent Creator Environment (ICE)</span>—an AI-native IDE for designing expert systems. It captures not just what you produce, but how you think—bridging curiosity, logic, and computational creativity.
              </p>
            </div>
          </section>

          {/* Principles Section */}
          <section id="principles" className="py-24">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-semibold text-center mb-20 text-gray-100">What Makes Albus Different</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                <PrincipleCard icon={<Sparkles className="w-10 h-10 text-purple-400" />} title="Thinking-first architecture" desc="Albus mirrors cognition. Ideas flow from sketch to system, preserving the shape of thought—not just the result." />
                <PrincipleCard icon={<BookOpen className="w-10 h-10 text-purple-400" />} title="Context as a computation layer" desc="Forget chat history. Albus builds memory graphs that evolve across workflows, enabling true context reuse." />
                <PrincipleCard icon={<Code2 className="w-10 h-10 text-purple-400" />} title="Expert system design, no code required" desc="Compose prompts like functions, connect tools like APIs, and build logic like software—without writing syntax." />
                <PrincipleCard icon={<Eye className="w-10 h-10 text-purple-400" />} title="Explainable by design" desc="Every output is traceable to the logic and data that created it. Click a paragraph, inspect the path." />
                <PrincipleCard icon={<Repeat className="w-10 h-10 text-purple-400" />} title="Reusable intelligence" desc="Every node, chain, and insight can be saved, versioned, and embedded—intelligence that compounds over time." />
                <PrincipleCard icon={<Layout className="w-10 h-10 text-purple-400" />} title="Multimodal reasoning canvas" desc="Sketch. Structure. Orchestrate. Albus unites left-brain logic and right-brain creativity in a visual IDE for AI systems." />
              </div>
            </div>
          </section>

          {/* Inspired by the Brain Section */}
          <section className="py-24 bg-black/40">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 text-gray-100">Inspired by the Brain</h2>
                <div className="md:grid md:grid-cols-5 md:gap-12 items-center">
                    <div className="md:col-span-2 text-center mb-10 md:mb-0">
                        <Brain className="w-32 h-32 md:w-48 md:h-48 text-purple-500 mx-auto opacity-70" />
                    </div>
                    <div className="md:col-span-3 space-y-6">
                        <p className="text-2xl md:text-3xl text-gray-200 leading-snug text-center md:text-left">
                            Albus mirrors the architecture of human cognition:
                        </p>
                        <div className="space-y-4 text-gray-300 text-lg md:text-xl leading-relaxed">
                            <p>
                                <span className="font-semibold text-purple-300">Nodes are neurons</span> — units of reasoning, retrieval, or generation
                            </p>
                            <p>
                                <span className="font-semibold text-purple-300">Chains are pathways</span> — directional flows of logic and thought
                            </p>
                            <p>
                                <span className="font-semibold text-purple-300">Subgraphs become networks</span> — modular systems that interlink and evolve
                            </p>
                        </div>
                    </div>
                </div>
            </div>
          </section>

          {/* Three Creative Spaces Section */}
          <section id="spaces" className="py-24">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-semibold text-center mb-20 text-gray-100">The Cognition-Driven Stack</h2>
              <div className="grid md:grid-cols-3 gap-10">
                <SpaceCard title="Ideation Space" subtitle="Sketch, think, connect" desc={<>
                  <ul className="text-left list-disc list-inside text-gray-300/90 mb-4 space-y-1.5 leading-relaxed text-base">
                    <li>Idea cards, spatial canvas</li>
                    <li>Semantic links ("leads to", "contradicts")</li>
                    <li>AI-augmented clustering</li>
                    <li>Contextual whiteboarding</li>
                  </ul>
                  <span className="italic text-purple-300/80 text-sm font-medium">where raw ideas are expressed, clarified, and given form</span>
                </>} />
                <SpaceCard title="Orchestration Space" subtitle="Craft Expert Intelligence" desc={<>
                  <ul className="text-left list-disc list-inside text-gray-300/90 mb-4 space-y-1.5 leading-relaxed text-base">
                    <li>Visual chain builder (DAG)</li>
                    <li>Nodes: Prompt, Tool, Agent, Eval, Render</li>
                    <li>Model config, system messages, I/O schema</li>
                    <li>MCP (Model Context Protocol) for adaptive reasoning</li>
                  </ul>
                  <span className="italic text-purple-300/80 text-sm font-medium">where logic is composed, intelligence is structured, and systems are executed</span>
                </>} />
                <SpaceCard title="Publication Space" subtitle="Communicate outcomes" desc={<>
                  <ul className="text-left list-disc list-inside text-gray-300/90 mb-4 space-y-1.5 leading-relaxed text-base">
                    <li>Smart documents tied to live chains</li>
                    <li>Traceable paragraphs</li>
                    <li>Inline graphs, dashboards, API endpoints</li>
                    <li>Convert output → reusable nodes</li>
                  </ul>
                  <span className="italic text-purple-300/80 text-sm font-medium">Where ideas become artifacts—explainable, structured, and shareable.</span>
                </>} />
              </div>
            </div>
          </section>

          {/* Who It's For Section */}
          <section id="who" className="py-24 bg-black/40">
            <div className="container mx-auto px-6 text-center max-w-5xl">
              <h2 className="text-4xl md:text-5xl font-semibold mb-20 text-gray-100">Who It's For</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left text-lg mb-12">
                <WhoCard title="Founders" desc="who think in systems" />
                <WhoCard title="Strategists" desc="who diagram reasoning" />
                <WhoCard title="Analysts" desc="who value logic over vibes" />
                <WhoCard title="Philosophers" desc="who want to build" />
                <WhoCard title="Designers" desc="who prototype in intelligence" />
                <WhoCard title="Storytellers" desc="weaving the threads of what can be" />
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-20 border-t border-gray-800/70">
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-2.5 mb-8 md:mb-0">
                  <Brain className="w-7 h-7 text-purple-400" />
                  <span className="text-xl font-semibold text-gray-200">Albus</span>
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
                © {new Date().getFullYear()} Albus. All rights reserved.
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

function PrincipleCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-gray-800/50 p-8 rounded-xl shadow-xl hover:bg-gray-700/70 transition-all duration-300 h-full transform hover:scale-105 flex flex-col">
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-semibold mb-4 text-gray-100">{title}</h3>
      <p className="text-gray-300/90 leading-relaxed flex-grow">{desc}</p>
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