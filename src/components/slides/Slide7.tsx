import { Droplet, MapPin, AlertTriangle, Bell, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { useSizes } from '../SizeContext';

export function Slide7() {
  const { sizes } = useSizes();
  
  const features = [
    { icon: Droplet, title: 'Blood Type Matching', desc: 'Accurate compatibility checks' },
    { icon: MapPin, title: 'Map-Based Search', desc: 'Find nearest donors instantly' },
    { icon: AlertTriangle, title: 'Emergency Mode', desc: 'Priority handling for urgent cases' },
    { icon: Bell, title: 'Push Notifications', desc: 'Real-time alerts to donors' },
    { icon: Award, title: 'Reward System', desc: 'Points and badges for motivation' }
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
        <h2 
          className="font-bold text-white leading-tight"
          style={{ fontSize: `${sizes.titleSize * 0.25}rem`, marginBottom: `${sizes.itemSpacing * 2}px` }}
        >
          Core Features
        </h2>
        <div 
          className="bg-[#C97777]"
          style={{ width: '160px', height: '8px', borderRadius: `${sizes.cardRounding / 4}px` }}
        ></div>
      </motion.div>

      {/* Features List */}
      <div 
        className="flex-1 flex flex-col justify-center"
        style={{ gap: `${sizes.itemSpacing * 2}px` }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-center bg-[#1a1a1d] hover:bg-[#1f1f22] transition-all shadow-2xl"
            style={{
              gap: `${sizes.cardPadding * 4}px`,
              padding: `${sizes.cardPadding * 3.2}px ${sizes.cardPadding * 4}px`,
              borderWidth: `${sizes.borderWidth}px`,
              borderColor: `rgba(201, 119, 119, ${sizes.borderOpacity / 100})`,
              borderRadius: `${sizes.cardRounding}px`
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.02, x: 5 }}
          >
            <motion.div 
              className="bg-[#C97777]/25 flex items-center justify-center flex-shrink-0"
              style={{
                width: `${sizes.iconContainerSize * 3.5}px`,
                height: `${sizes.iconContainerSize * 3.5}px`,
                borderWidth: `${sizes.borderWidth}px`,
                borderColor: '#C97777',
                borderRadius: `${sizes.cardRounding / 1.5}px`
              }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <feature.icon 
                style={{ width: `${sizes.iconSize * 3}px`, height: `${sizes.iconSize * 3}px` }}
                className="text-[#C97777]" 
                strokeWidth={2.5} 
              />
            </motion.div>
            <div className="flex-1 min-w-0">
              <h3 
                className="font-bold text-white leading-tight"
                style={{ fontSize: `${sizes.headingSize * 0.25}rem`, marginBottom: `${sizes.itemSpacing / 2}px` }}
              >
                {feature.title}
              </h3>
              <p 
                className="text-[#E5E5E5]"
                style={{ fontSize: `${sizes.subTextSize * 0.25}rem` }}
              >
                {feature.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
