import { Droplet, Mail, Globe, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useSizes } from '../SizeContext';

export function Slide16() {
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
      <div className="text-center max-w-5xl w-full">
        {/* Icon */}
        <motion.div 
          className="flex justify-center"
          style={{ marginBottom: `${sizes.itemSpacing * 3}px` }}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="relative">
            <motion.div 
              className="absolute inset-0 bg-[#C97777] blur-3xl opacity-50"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Droplet 
                className="text-[#C97777] relative" 
                fill="currentColor" 
                strokeWidth={0}
                style={{ width: `${sizes.iconContainerSize * 3.5}px`, height: `${sizes.iconContainerSize * 3.5}px` }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Thank You Message */}
        <div style={{ marginBottom: `${sizes.itemSpacing * 2}px` }}>
          <motion.h1 
            className="font-bold text-white leading-tight"
            style={{ fontSize: `${sizes.titleSize * 0.25 + 2.5}rem` }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Thank You
          </motion.h1>
          <motion.div 
            className="bg-[#C97777] mx-auto"
            style={{ 
              height: '8px', 
              borderRadius: `${sizes.cardRounding / 4}px`,
              marginTop: `${sizes.itemSpacing * 2}px`
            }}
            initial={{ width: 0 }}
            animate={{ width: 192 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </div>

        {/* Questions Prompt */}
        <motion.div
          className="bg-[#1a1a1d] shadow-2xl"
          style={{
            marginTop: `${sizes.itemSpacing * 4}px`,
            padding: `${sizes.cardPadding * 3.2}px`,
            borderWidth: `${sizes.borderWidth}px`,
            borderColor: `rgba(201, 119, 119, ${sizes.borderOpacity / 100})`,
            borderRadius: `${sizes.cardRounding}px`
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex items-center justify-center" style={{ gap: `${sizes.itemSpacing}px`, marginBottom: `${sizes.itemSpacing}px` }}>
            <MessageCircle 
              style={{ width: `${sizes.iconSize * 2}px`, height: `${sizes.iconSize * 2}px` }}
              className="text-[#C97777]" 
              strokeWidth={2.5} 
            />
            <h3 
              className="font-bold text-white"
              style={{ fontSize: `${sizes.headingSize * 0.25 + 0.5}rem` }}
            >
              Questions?
            </h3>
          </div>
          <p 
            className="text-[#A3A3A3]"
            style={{ fontSize: `${sizes.subTextSize * 0.25}rem` }}
          >
            We're ready to discuss any aspect of the project
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          className="text-[#A3A3A3]"
          style={{ marginTop: `${sizes.itemSpacing * 3}px`, gap: `${sizes.itemSpacing}px` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="flex flex-col" style={{ gap: `${sizes.itemSpacing}px` }}>
            <motion.div 
              className="flex items-center justify-center hover:text-[#C97777] transition-colors cursor-pointer"
              style={{ gap: `${sizes.itemSpacing}px` }}
              whileHover={{ scale: 1.05 }}
            >
              <Mail style={{ width: `${sizes.iconSize * 1.5}px`, height: `${sizes.iconSize * 1.5}px` }} />
              <span style={{ fontSize: `${sizes.subTextSize * 0.25}rem` }}>contact@bloodbridge.com</span>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center hover:text-[#C97777] transition-colors cursor-pointer"
              style={{ gap: `${sizes.itemSpacing}px` }}
              whileHover={{ scale: 1.05 }}
            >
              <Globe style={{ width: `${sizes.iconSize * 1.5}px`, height: `${sizes.iconSize * 1.5}px` }} />
              <span style={{ fontSize: `${sizes.subTextSize * 0.25}rem` }}>www.bloodbridge.com</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.div 
          style={{ marginTop: `${sizes.itemSpacing * 3}px` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <p 
            className="text-[#C97777] italic font-light"
            style={{ fontSize: `${sizes.textSize * 0.25}rem` }}
          >
            "Together We Save Lives"
          </p>
        </motion.div>
      </div>
    </div>
  );
}
