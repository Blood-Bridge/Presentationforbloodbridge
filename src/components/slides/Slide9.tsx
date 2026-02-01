import { Brain, TrendingUp, Target, Zap, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { useSizes } from '../SizeContext';

export function Slide9() {
  const { sizes } = useSizes();
  
  const aiFeatures = [
    { icon: TrendingUp, text: 'Predict donor availability using historical data patterns' },
    { icon: Target, text: 'Rank and prioritize requests based on medical urgency' },
    { icon: Zap, text: 'Optimize response time through intelligent routing' },
    { icon: Users, text: 'Suggest best donor match considering multiple factors' }
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
        className="mb-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center" style={{ gap: `${sizes.itemSpacing * 2}px`, marginBottom: `${sizes.itemSpacing * 2}px` }}>
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Brain 
              style={{ width: `${sizes.iconContainerSize * 3}px`, height: `${sizes.iconContainerSize * 3}px` }}
              className="text-[#C97777]" 
              strokeWidth={2} 
            />
          </motion.div>
          <h2 
            className="font-bold text-white leading-tight"
            style={{ fontSize: `${sizes.titleSize * 0.25}rem` }}
          >
            AI Integration
          </h2>
        </div>
        <div 
          className="bg-[#C97777] ml-24"
          style={{ width: '160px', height: '8px', borderRadius: `${sizes.cardRounding / 4}px` }}
        ></div>
      </motion.div>

      {/* AI Features List */}
      <div 
        className="flex-1 flex flex-col justify-center"
        style={{ gap: `${sizes.itemSpacing * 3}px` }}
      >
        {aiFeatures.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-start bg-gradient-to-r from-[#C97777]/15 via-[#C97777]/8 to-[#1a1a1d] hover:bg-[#1f1f22] transition-all shadow-2xl"
            style={{
              gap: `${sizes.cardPadding * 4}px`,
              padding: `${sizes.cardPadding * 4}px ${sizes.cardPadding * 4.8}px`,
              borderWidth: `${sizes.borderWidth}px`,
              borderColor: `rgba(201, 119, 119, ${sizes.borderOpacity / 100})`,
              borderRadius: `${sizes.cardRounding}px`
            }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.12, duration: 0.5 }}
            whileHover={{ scale: 1.02, x: 10 }}
          >
            <motion.div 
              className="flex-shrink-0 bg-[#C97777]/30 flex items-center justify-center"
              style={{
                width: `${sizes.iconContainerSize * 3.5}px`,
                height: `${sizes.iconContainerSize * 3.5}px`,
                borderWidth: `${sizes.borderWidth}px`,
                borderColor: '#C97777',
                borderRadius: `${sizes.cardRounding / 1.5}px`
              }}
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
            >
              <feature.icon 
                style={{ width: `${sizes.iconSize * 3}px`, height: `${sizes.iconSize * 3}px` }}
                className="text-[#C97777]" 
                strokeWidth={2.5} 
              />
            </motion.div>
            <p 
              className="text-white font-medium leading-relaxed"
              style={{ fontSize: `${sizes.headingSize * 0.25}rem`, paddingTop: `${sizes.itemSpacing * 1.5}px` }}
            >
              {feature.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
