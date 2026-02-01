import { Building2, Brain, LayoutDashboard, BarChart3 } from 'lucide-react';
import { motion } from 'motion/react';
import { useSizes } from '../SizeContext';

export function Slide14() {
  const { sizes } = useSizes();
  
  const enhancements = [
    { 
      icon: Building2, 
      title: 'Government Integration', 
      desc: 'Connect with national hospital and health systems'
    },
    { 
      icon: Brain, 
      title: 'Advanced AI Models', 
      desc: 'Enhanced prediction accuracy and pattern recognition'
    },
    { 
      icon: LayoutDashboard, 
      title: 'Admin Dashboard', 
      desc: 'Centralized monitoring and control panel'
    },
    { 
      icon: BarChart3, 
      title: 'Analytics & Reports', 
      desc: 'Data-driven insights and decision support tools'
    }
  ];

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
        className="mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 
          className="font-bold text-white leading-tight"
          style={{ fontSize: `${sizes.titleSize * 0.25}rem`, marginBottom: `${sizes.itemSpacing * 2}px` }}
        >
          Future Enhancements
        </h2>
        <div 
          className="bg-[#C97777]"
          style={{ width: '160px', height: '8px', borderRadius: `${sizes.cardRounding / 4}px` }}
        ></div>
      </motion.div>

      {/* Enhancements Grid */}
      <div className="flex-1 grid grid-cols-2" style={{ gap: `${sizes.itemSpacing * 2}px` }}>
        {enhancements.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start bg-[#1a1a1d]/50 border-dashed hover:border-solid hover:bg-[#1f1f22] transition-all shadow-2xl"
            style={{
              padding: `${sizes.cardPadding * 3.2}px`,
              borderWidth: `${sizes.borderWidth}px`,
              borderColor: `rgba(201, 119, 119, ${sizes.borderOpacity / 100})`,
              borderRadius: `${sizes.cardRounding}px`
            }}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="bg-[#C97777]/25 flex items-center justify-center"
              style={{
                width: `${sizes.iconContainerSize * 3}px`,
                height: `${sizes.iconContainerSize * 3}px`,
                borderWidth: `${sizes.borderWidth}px`,
                borderColor: '#C97777',
                borderRadius: `${sizes.cardRounding / 1.5}px`,
                marginBottom: `${sizes.itemSpacing * 1.5}px`
              }}
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <item.icon 
                style={{ width: `${sizes.iconSize * 2.5}px`, height: `${sizes.iconSize * 2.5}px` }}
                className="text-[#C97777]" 
                strokeWidth={2.5} 
              />
            </motion.div>
            <h3 
              className="font-bold text-white leading-tight"
              style={{ fontSize: `${sizes.headingSize * 0.25}rem`, marginBottom: `${sizes.itemSpacing}px` }}
            >
              {item.title}
            </h3>
            <p 
              className="text-[#A3A3A3] leading-relaxed"
              style={{ fontSize: `${sizes.subTextSize * 0.25}rem` }}
            >
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Timeline Indicator */}
      <motion.div 
        className="flex items-center justify-center text-[#A3A3A3]"
        style={{ marginTop: `${sizes.itemSpacing * 3}px`, gap: `${sizes.itemSpacing * 1.5}px` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex-1 h-1 bg-[#A3A3A3]/30 rounded-full"></div>
        <span style={{ fontSize: `${sizes.subTextSize * 0.25}rem` }}>Roadmap 2025-2026</span>
        <div className="flex-1 h-1 bg-[#A3A3A3]/30 rounded-full"></div>
      </motion.div>
    </div>
  );
}
