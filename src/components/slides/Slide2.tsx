import { AlertTriangle, Clock, TrendingDown } from 'lucide-react';
import { motion } from 'motion/react';
import { useSizes } from '../SizeContext';

export function Slide2() {
  const { sizes } = useSizes();
  
  const motivations = [
    { icon: AlertTriangle, text: 'Blood shortages are common in hospitals and blood banks' },
    { icon: Clock, text: 'Emergency cases require immediate and fast response' },
    { icon: TrendingDown, text: 'Manual donor search processes waste critical time' }
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
        style={{ marginBottom: `${sizes.headerSpacing * 4}px` }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 
          className="text-white"
          style={{ 
            fontSize: `${sizes.titleSize * 0.25}rem`,
            fontWeight: sizes.titleWeight,
            lineHeight: sizes.titleLineHeight,
            letterSpacing: `${sizes.titleLetterSpacing}em`,
            marginBottom: `${sizes.itemSpacing * 2}px`
          }}
        >
          Project Motivation
        </h2>
        <div 
          className="bg-[#C97777]"
          style={{ 
            width: `${sizes.headerLineWidth}px`, 
            height: `${sizes.headerLineHeight}px`, 
            borderRadius: `${sizes.buttonRounding}px`,
            opacity: sizes.primaryOpacity / 100
          }}
        ></div>
      </motion.div>

      {/* Motivations List */}
      <div 
        className="flex-1 flex flex-col justify-center"
        style={{ gap: `${sizes.itemSpacing * 4}px` }}
      >
        {motivations.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center bg-[#1a1a1d] transition-all"
            style={{
              gap: `${sizes.flexGap * 8}px`,
              padding: `${sizes.cardPaddingY * 4}px ${sizes.cardPaddingX * 4}px`,
              borderWidth: `${sizes.borderWidth}px`,
              borderColor: `rgba(201, 119, 119, ${sizes.borderOpacity / 100})`,
              borderRadius: `${sizes.cardRounding}px`,
              transitionDuration: `${sizes.transitionDuration}s`,
              boxShadow: `0 ${sizes.shadowSize}px ${sizes.shadowSize * 2}px rgba(0,0,0,${sizes.shadowOpacity / 100})`,
              backgroundColor: `rgba(26, 26, 29, ${sizes.cardBgOpacity / 100})`
            }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * sizes.animationDelay, duration: 0.5 }}
            whileHover={{ 
              scale: sizes.hoverScale, 
              x: 10,
              borderColor: `rgba(201, 119, 119, ${sizes.borderHoverOpacity / 100})`
            }}
          >
            <div 
              className="flex-shrink-0 flex items-center justify-center"
              style={{
                width: `${sizes.iconContainerSize * 4}px`,
                height: `${sizes.iconContainerSize * 4}px`,
                backgroundColor: `rgba(201, 119, 119, ${sizes.iconBgOpacity / 100})`,
                borderWidth: `${sizes.borderWidth}px`,
                borderColor: `rgba(201, 119, 119, ${sizes.primaryOpacity / 100})`,
                borderRadius: `${sizes.iconRounding * 1.5}px`
              }}
            >
              <item.icon 
                style={{ 
                  width: `${sizes.iconSize * 4}px`, 
                  height: `${sizes.iconSize * 4}px`,
                  strokeWidth: sizes.iconStrokeWidth
                }}
                className="text-[#C97777]"
              />
            </div>
            <p 
              className="text-white"
              style={{ 
                fontSize: `${sizes.headingSize * 0.25}rem`,
                fontWeight: sizes.headingWeight,
                lineHeight: sizes.headingLineHeight,
                letterSpacing: `${sizes.headingLetterSpacing}em`
              }}
            >
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
