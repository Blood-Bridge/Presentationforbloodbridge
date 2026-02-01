import { Droplet } from 'lucide-react';
import { motion } from 'motion/react';
import { useSizes } from '../SizeContext';

export function Slide1() {
  const { sizes } = useSizes();

  return (
    <div 
      className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0A0A0A] via-[#151518] to-[#1a1214]"
      style={{ 
        paddingLeft: `${sizes.paddingX * 4}px`, 
        paddingRight: `${sizes.paddingX * 4}px`,
        paddingTop: `${sizes.paddingY * 4}px`,
        paddingBottom: `${sizes.paddingY * 4}px`
      }}
    >
      <div className="text-center max-w-6xl w-full" style={{ gap: `${sizes.itemSpacing * 4}px` }}>
        {/* Logo/Icon */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          <div className="relative">
            <motion.div 
              className="absolute inset-0 bg-[#C97777] blur-3xl opacity-50"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.7, 0.5]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <Droplet 
              className="text-[#C97777] relative drop-shadow-2xl" 
              fill="currentColor" 
              strokeWidth={0}
              style={{ width: `${sizes.iconContainerSize * 4}px`, height: `${sizes.iconContainerSize * 4}px` }}
            />
          </div>
        </motion.div>

        {/* Title */}
        <div style={{ marginTop: `${sizes.itemSpacing * 4}px`, marginBottom: `${sizes.itemSpacing * 2}px` }}>
          <motion.h1 
            className="font-bold text-white tracking-tight leading-tight"
            style={{ fontSize: `${sizes.titleSize * 0.25 + 2}rem`, marginBottom: `${sizes.itemSpacing * 2}px` }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Blood Bridge
          </motion.h1>
          <motion.p 
            className="text-[#C97777] font-light"
            style={{ fontSize: `${sizes.headingSize * 0.25 + 0.5}rem`, marginBottom: `${sizes.itemSpacing * 2}px` }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Smart Blood Donation Platform
          </motion.p>
          <motion.p 
            className="text-[#E5E5E5] font-light"
            style={{ fontSize: `${sizes.textSize * 0.25}rem`, marginBottom: `${sizes.itemSpacing * 3}px` }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Graduation Project
          </motion.p>
          <motion.div 
            className="bg-[#C97777] mx-auto"
            style={{ width: '160px', height: '8px', borderRadius: `${sizes.cardRounding / 4}px`, marginTop: `${sizes.itemSpacing * 3}px` }}
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          />
        </div>

        {/* Student Info */}
        <motion.div 
          className="text-[#E5E5E5]"
          style={{ marginTop: `${sizes.itemSpacing * 8}px`, gap: `${sizes.itemSpacing}px` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p className="font-light" style={{ fontSize: `${sizes.textSize * 0.25}rem`, marginBottom: `${sizes.itemSpacing}px` }}>
            Prepared by: [Student Name]
          </p>
          <p className="text-[#A3A3A3] font-light" style={{ fontSize: `${sizes.subTextSize * 0.25}rem`, marginBottom: `${sizes.itemSpacing / 2}px` }}>
            [College Name]
          </p>
          <p className="text-[#A3A3A3] font-light" style={{ fontSize: `${sizes.subTextSize * 0.25}rem` }}>
            [Department]
          </p>
        </motion.div>
      </div>
    </div>
  );
}
