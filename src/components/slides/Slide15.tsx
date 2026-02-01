import { CheckCircle, Zap, TrendingUp, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { useSizes } from '../SizeContext';

export function Slide15() {
  const { sizes } = useSizes();
  
  const conclusions = [
    { icon: Zap, text: 'Fast and reliable blood donation solution' },
    { icon: TrendingUp, text: 'Scalable architecture for future growth' },
    { icon: CheckCircle, text: 'Practical implementation for real-world use' },
    { icon: Heart, text: 'Life-saving technology with measurable impact' }
  ];

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
      <div className="w-full max-w-6xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="font-bold text-white leading-tight"
            style={{ fontSize: `${sizes.titleSize * 0.25 + 1}rem`, marginBottom: `${sizes.itemSpacing * 2}px` }}
          >
            Conclusion
          </h2>
          <div 
            className="bg-[#C97777] mx-auto"
            style={{ width: '160px', height: '8px', borderRadius: `${sizes.cardRounding / 4}px` }}
          ></div>
        </motion.div>

        {/* Main Statement */}
        <motion.div 
          className="text-center"
          style={{ marginBottom: `${sizes.itemSpacing * 4}px` }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p 
            className="text-[#E5E5E5] leading-relaxed font-light"
            style={{ fontSize: `${sizes.headingSize * 0.25 + 0.5}rem` }}
          >
            Blood Bridge provides a comprehensive solution to critical blood donation challenges
          </p>
        </motion.div>

        {/* Key Points Grid */}
        <div className="grid grid-cols-2" style={{ gap: `${sizes.itemSpacing * 2}px` }}>
          {conclusions.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center bg-[#1a1a1d] hover:bg-[#1f1f22] transition-all shadow-2xl"
              style={{
                gap: `${sizes.itemSpacing * 2}px`,
                padding: `${sizes.cardPadding * 2.8}px`,
                borderWidth: `${sizes.borderWidth}px`,
                borderColor: `rgba(201, 119, 119, ${sizes.borderOpacity / 100})`,
                borderRadius: `${sizes.cardRounding / 1.5}px`
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <div 
                className="bg-[#C97777]/25 flex items-center justify-center flex-shrink-0"
                style={{
                  width: `${sizes.iconContainerSize * 2.5}px`,
                  height: `${sizes.iconContainerSize * 2.5}px`,
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
              <p 
                className="text-[#E5E5E5] font-medium"
                style={{ fontSize: `${sizes.textSize * 0.25}rem` }}
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
