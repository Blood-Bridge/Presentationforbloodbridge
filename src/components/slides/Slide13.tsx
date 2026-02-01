import { Clock, TrendingUp, Heart, Building2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useSizes } from '../SizeContext';

export function Slide13() {
  const { sizes } = useSizes();
  
  const impacts = [
    { 
      icon: Clock, 
      title: 'Reduced Access Time', 
      desc: 'Blood delivery from hours to minutes',
      stat: '75%'
    },
    { 
      icon: TrendingUp, 
      title: 'Increased Participation', 
      desc: 'Higher donor engagement rates',
      stat: '60%'
    },
    { 
      icon: Building2, 
      title: 'Hospital Support', 
      desc: 'Improved resource management',
      stat: '100%'
    },
    { 
      icon: Heart, 
      title: 'Lives Saved', 
      desc: 'Direct emergency impact',
      stat: '∞'
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
          Impact
        </h2>
        <div 
          className="bg-[#C97777]"
          style={{ width: '160px', height: '8px', borderRadius: `${sizes.cardRounding / 4}px` }}
        ></div>
      </motion.div>

      {/* Impact Grid */}
      <div className="flex-1 grid grid-cols-2" style={{ gap: `${sizes.itemSpacing * 2}px` }}>
        {impacts.map((impact, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col justify-between bg-[#1a1a1d] overflow-hidden hover:bg-[#1f1f22] transition-all shadow-2xl"
            style={{
              padding: `${sizes.cardPadding * 3.2}px`,
              borderWidth: `${sizes.borderWidth}px`,
              borderColor: `rgba(201, 119, 119, ${sizes.borderOpacity / 100})`,
              borderRadius: `${sizes.cardRounding}px`
            }}
            initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <div>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                <impact.icon 
                  style={{ 
                    width: `${sizes.iconSize * 4}px`, 
                    height: `${sizes.iconSize * 4}px`,
                    marginBottom: `${sizes.itemSpacing * 1.5}px`
                  }}
                  className="text-[#C97777]" 
                  strokeWidth={2.5} 
                />
              </motion.div>
              <h3 
                className="font-bold text-white leading-tight"
                style={{ fontSize: `${sizes.headingSize * 0.25}rem`, marginBottom: `${sizes.itemSpacing}px` }}
              >
                {impact.title}
              </h3>
              <p 
                className="text-[#E5E5E5]"
                style={{ fontSize: `${sizes.subTextSize * 0.25}rem` }}
              >
                {impact.desc}
              </p>
            </div>
            <div className="text-right" style={{ marginTop: `${sizes.itemSpacing * 2}px` }}>
              <motion.span 
                className="font-bold text-[#C97777]/25"
                style={{ fontSize: `${sizes.titleSize * 0.25 + 2}rem` }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
              >
                {impact.stat}
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
