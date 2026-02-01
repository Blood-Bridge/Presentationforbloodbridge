import { useState } from 'react';
import { ChevronLeft, ChevronRight, Settings } from 'lucide-react';
import { Slide1 } from './components/slides/Slide1';
import { Slide2 } from './components/slides/Slide2';
import { Slide3 } from './components/slides/Slide3';
import { Slide4 } from './components/slides/Slide4';
import { Slide5 } from './components/slides/Slide5';
import { Slide6 } from './components/slides/Slide6';
import { Slide7 } from './components/slides/Slide7';
import { Slide8 } from './components/slides/Slide8';
import { Slide9 } from './components/slides/Slide9';
import { Slide10 } from './components/slides/Slide10';
import { Slide11 } from './components/slides/Slide11';
import { Slide12 } from './components/slides/Slide12';
import { Slide13 } from './components/slides/Slide13';
import { Slide14 } from './components/slides/Slide14';
import { Slide15 } from './components/slides/Slide15';
import { Slide16 } from './components/slides/Slide16';
import { SizeSettingsPanel } from './components/SizeSettingsPanel';
import { SizeProvider } from './components/SizeContext';

const slides = [
  Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8,
  Slide9, Slide10, Slide11, Slide12, Slide13, Slide14, Slide15, Slide16
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSettings, setShowSettings] = useState(false);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const CurrentSlideComponent = slides[currentSlide];

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextSlide();
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevSlide();
    if (e.key === 's' || e.key === 'S') setShowSettings(!showSettings);
  };

  useState(() => {
    window.addEventListener('keydown', handleKeyDown as any);
    return () => window.removeEventListener('keydown', handleKeyDown as any);
  });

  return (
    <SizeProvider>
      <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col relative">
        {/* Settings Panel */}
        {showSettings && <SizeSettingsPanel onClose={() => setShowSettings(false)} />}

        {/* Settings Toggle Button */}
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="absolute top-4 right-4 z-50 p-3 bg-[#C97777]/20 hover:bg-[#C97777]/30 border-2 border-[#C97777]/40 rounded-lg transition-all"
          title="Settings (Press S)"
        >
          <Settings className="w-6 h-6 text-[#C97777]" />
        </button>

        {/* Main Slide Area */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-6xl aspect-[16/9] bg-[#151518] rounded-xl shadow-2xl border-2 border-[#A3A3A3]/30 overflow-hidden">
            <CurrentSlideComponent />
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="pb-8 px-8">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#C97777]/10 hover:bg-[#C97777]/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg transition-all border-2 border-[#C97777]/40 hover:border-[#C97777]/60"
            >
              <ChevronLeft className="w-5 h-5 text-[#C97777]" />
              <span className="text-[#E5E5E5]">Previous</span>
            </button>

            <div className="flex items-center gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-[#C97777] w-8'
                      : 'bg-[#A3A3A3]/30 w-2 hover:bg-[#A3A3A3]/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#C97777]/10 hover:bg-[#C97777]/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg transition-all border-2 border-[#C97777]/40 hover:border-[#C97777]/60"
            >
              <span className="text-[#E5E5E5]">Next</span>
              <ChevronRight className="w-5 h-5 text-[#C97777]" />
            </button>
          </div>

          <div className="text-center mt-4 text-[#A3A3A3] text-sm">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>
    </SizeProvider>
  );
}
