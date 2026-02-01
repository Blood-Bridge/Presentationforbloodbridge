import { Smartphone, Server, Database, MapPin, Bell, Brain } from 'lucide-react';
import { motion } from 'motion/react';
import { useSizes } from '../SizeContext';

export function Slide10() {
  const { sizes } = useSizes();
  
  const components = [
    { icon: Smartphone, title: 'Mobile App', tech: 'Flutter', color: 'from-blue-500/20' },
    { icon: Server, title: 'Backend', tech: '.NET Core', color: 'from-purple-500/20' },
    { icon: Database, title: 'Database', tech: 'SQL Server', color: 'from-green-500/20' },
    { icon: MapPin, title: 'Location Services', tech: 'Google Maps', color: 'from-yellow-500/20' },
    { icon: Bell, title: 'Notifications', tech: 'Firebase FCM', color: 'from-orange-500/20' },
    { icon: Brain, title: 'AI Module', tech: 'ML.NET', color: 'from-[#C97777]/25' }
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
          System Architecture
        </h2>
        <div 
          className="bg-[#C97777]"
          style={{ width: '160px', height: '8px', borderRadius: `${sizes.cardRounding / 4}px` }}
        ></div>
      </motion.div>

      {/* Components Grid */}
      <div className="flex-1 grid grid-cols-3" style={{ gap: `${sizes.itemSpacing * 2}px` }}>
        {components.map((component, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center justify-center bg-gradient-to-br ${component.color} to-transparent hover:bg-[#1f1f22]/50 transition-all shadow-2xl`}
            style={{
              padding: `${sizes.cardPadding * 3.2}px`,
              borderWidth: `${sizes.borderWidth}px`,
              borderColor: `rgba(201, 119, 119, ${sizes.borderOpacity / 100})`,
              borderRadius: `${sizes.cardRounding}px`
            }}
            initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.08, y: -5 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
            >
              <component.icon 
                style={{ 
                  width: `${sizes.iconSize * 4}px`, 
                  height: `${sizes.iconSize * 4}px`,
                  marginBottom: `${sizes.itemSpacing}px`
                }}
                className="text-[#C97777]" 
                strokeWidth={2.5} 
              />
            </motion.div>
            <h3 
              className="font-bold text-white text-center"
              style={{ fontSize: `${sizes.textSize * 0.25}rem`, marginBottom: `${sizes.itemSpacing / 2}px` }}
            >
              {component.title}
            </h3>
            <p 
              className="text-[#A3A3A3] text-center"
              style={{ fontSize: `${sizes.subTextSize * 0.25}rem` }}
            >
              {component.tech}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
