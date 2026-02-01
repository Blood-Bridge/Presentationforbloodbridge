import { Smartphone, Moon, Zap, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useSizes } from '../SizeContext';

export function Slide12() {
  const { sizes } = useSizes();

  return (
    <div 
      className="h-full flex flex-col bg-[#0A0A0A]"
      style={{ 
        paddingLeft: `${sizes.paddingX * 4}px`, 
        paddingRight: `${sizes.paddingX * 4}px`,
        paddingTop: `${sizes.paddingY * 4}px`,
        paddingBottom: `${sizes.paddingY * 4}px`
      }}
    >
      {/* Header */}
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 
          className="font-bold text-white leading-tight"
          style={{ fontSize: `${sizes.titleSize * 0.25}rem`, marginBottom: `${sizes.itemSpacing * 2}px` }}
        >
          Prototype Overview
        </h2>
        <div 
          className="bg-[#C97777]"
          style={{ width: '160px', height: '8px', borderRadius: `${sizes.cardRounding / 4}px` }}
        ></div>
      </motion.div>

      {/* Prototype Display */}
      <div className="flex-1 flex items-center justify-center" style={{ gap: `${sizes.itemSpacing * 4}px` }}>
        {/* Phone Mockup */}
        <motion.div 
          className="relative flex-shrink-0"
          initial={{ opacity: 0, x: -100, rotateY: -90 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05, y: -10 }}
        >
          <div 
            className="bg-[#0A0A0A] rounded-[3rem] border-[5px] border-[#A3A3A3]/40 shadow-2xl overflow-hidden"
            style={{ width: '288px', height: '540px' }}
          >
            <div className="h-full flex flex-col">
              {/* Status Bar */}
              <div className="bg-[#0A0A0A] h-10 flex items-center justify-center">
                <div className="w-28 h-6 bg-[#151518] rounded-full border-2 border-[#A3A3A3]/30"></div>
              </div>
              
              {/* Screen Content */}
              <div className="flex-1 bg-gradient-to-br from-[#151518] to-[#0A0A0A] p-7">
                <h3 className="text-white text-xl font-bold mb-5">Emergency Requests</h3>
                
                <div className="space-y-4">
                  {['A+', 'O-', 'B+'].map((type, index) => (
                    <motion.div 
                      key={index} 
                      className="bg-[#151518] border-[3px] border-[#C97777]/40 rounded-xl p-5"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.02, borderColor: 'rgba(201, 119, 119, 0.7)' }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[#C97777] font-bold text-2xl">{type}</span>
                        <span className="text-sm text-[#A3A3A3]">{index + 1}.{index + 2} km</span>
                      </div>
                      <p className="text-[#E5E5E5] text-sm mb-3">King Fahd Hospital</p>
                      <div className="flex gap-2">
                        <button className="flex-1 bg-[#C97777] text-white text-sm py-2.5 rounded-lg border-2 border-[#C97777] hover:bg-[#C97777]/90 font-semibold">
                          Donate
                        </button>
                        <button className="flex-1 bg-[#151518] border-2 border-[#A3A3A3]/40 text-white text-sm py-2.5 rounded-lg hover:bg-[#151518]/50 font-semibold">
                          Details
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features List */}
        <motion.div 
          className="flex-1"
          style={{ gap: `${sizes.itemSpacing * 2}px` }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-col" style={{ gap: `${sizes.itemSpacing * 2}px` }}>
            {[
              { icon: Moon, title: 'Dark Theme', desc: 'Reduces eye strain in critical situations' },
              { icon: Zap, title: 'Simple Navigation', desc: 'Intuitive user interface design' },
              { icon: CheckCircle, title: 'Emergency-Focused', desc: 'Optimized for urgent blood requests' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-start bg-[#1a1a1d] hover:bg-[#1f1f22] transition-all shadow-2xl"
                style={{
                  gap: `${sizes.itemSpacing * 2}px`,
                  padding: `${sizes.cardPadding * 2.4}px`,
                  borderWidth: `${sizes.borderWidth}px`,
                  borderColor: `rgba(201, 119, 119, ${sizes.borderOpacity / 100})`,
                  borderRadius: `${sizes.cardRounding / 1.5}px`
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div 
                  className="bg-[#C97777]/25 flex items-center justify-center flex-shrink-0"
                  style={{
                    width: `${sizes.iconContainerSize * 2}px`,
                    height: `${sizes.iconContainerSize * 2}px`,
                    borderWidth: `${Math.max(sizes.borderWidth - 1, 2)}px`,
                    borderColor: '#C97777',
                    borderRadius: `${sizes.cardRounding / 2}px`
                  }}
                >
                  <item.icon 
                    style={{ width: `${sizes.iconSize * 2}px`, height: `${sizes.iconSize * 2}px` }}
                    className="text-[#C97777]" 
                    strokeWidth={2.5} 
                  />
                </div>
                <div className="min-w-0">
                  <h4 
                    className="text-white font-bold leading-tight"
                    style={{ fontSize: `${sizes.textSize * 0.25}rem`, marginBottom: `${sizes.itemSpacing / 2}px` }}
                  >
                    {item.title}
                  </h4>
                  <p 
                    className="text-[#A3A3A3]"
                    style={{ fontSize: `${sizes.subTextSize * 0.25}rem` }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
