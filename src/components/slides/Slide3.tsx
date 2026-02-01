import { MapPinOff, Zap, Building2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useSizes } from '../SizeContext';

export function Slide3() {
  const { sizes } = useSizes();
  
  const problems = [
    { icon: MapPinOff, text: 'Difficulty finding nearby compatible blood donors' },
    { icon: Zap, text: 'Lack of real-time donor-patient matching systems' },
    { icon: Building2, text: 'Hospitals rely on slow traditional contact processes' }
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
        className="mb-24"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 
          className="font-bold text-white leading-tight"
          style={{ fontSize: `${sizes.titleSize * 0.25}rem`, marginBottom: `${sizes.itemSpacing * 2}px` }}
        >
          Problem Statement
        </h2>
        <div 
          className="bg-[#C97777]"
          style={{ width: '160px', height: '8px', borderRadius: `${sizes.cardRounding / 4}px` }}
        ></div>
      </motion.div>

      {/* Problems List */}
      <div 
        className="flex-1 flex flex-col justify-center"
        style={{ gap: `${sizes.itemSpacing * 4}px` }}
      >
        {problems.map((problem, index) => (
          <motion.div
            key={index}
            className="flex items-center bg-[#1a1a1d] hover:bg-[#1f1f22] transition-all shadow-2xl"
            style={{
              gap: `${sizes.cardPadding * 4.8}px`,
              padding: `${sizes.cardPadding * 4}px ${sizes.cardPadding * 4.8}px`,
              borderWidth: `${sizes.borderWidth}px`,
              borderColor: `rgba(201, 119, 119, ${sizes.borderOpacity / 100})`,
              borderRadius: `${sizes.cardRounding}px`
            }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            whileHover={{ scale: 1.02, x: 10 }}
          >
            <div 
              className="flex-shrink-0 bg-[#C97777]/25 flex items-center justify-center"
              style={{
                width: `${sizes.iconContainerSize * 4}px`,
                height: `${sizes.iconContainerSize * 4}px`,
                borderWidth: `${sizes.borderWidth}px`,
                borderColor: '#C97777',
                borderRadius: `${sizes.cardRounding}px`
              }}
            >
              <problem.icon 
                style={{ width: `${sizes.iconSize * 4}px`, height: `${sizes.iconSize * 4}px` }}
                className="text-[#C97777]" 
                strokeWidth={2.5} 
              />
            </div>
            <p 
              className="text-white font-medium leading-relaxed"
              style={{ fontSize: `${sizes.headingSize * 0.25}rem` }}
            >
              {problem.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
