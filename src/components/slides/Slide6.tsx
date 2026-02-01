import { UserPlus, UserCheck, MapPin, Droplet, Bell } from 'lucide-react';
import { motion } from 'motion/react';
import { useSizes } from '../SizeContext';

export function Slide6() {
  const { sizes } = useSizes();
  
  const steps = [
    { icon: UserPlus, title: 'User Registration', desc: 'Create account' },
    { icon: UserCheck, title: 'Role Selection', desc: 'Choose role' },
    { icon: MapPin, title: 'Location Detection', desc: 'GPS positioning' },
    { icon: Droplet, title: 'Blood Request', desc: 'Specify type' },
    { icon: Bell, title: 'Instant Notification', desc: 'Alert donors' }
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
          How the System Works
        </h2>
        <div 
          className="bg-[#C97777]"
          style={{ width: '160px', height: '8px', borderRadius: `${sizes.cardRounding / 4}px` }}
        ></div>
      </motion.div>

      {/* Flow Steps */}
      <div className="flex-1 flex items-center">
        <div className="w-full grid grid-cols-5" style={{ gap: `${sizes.itemSpacing * 2}px` }}>
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="flex flex-col items-center text-center">
                <motion.div 
                  className="bg-[#151518] rounded-full flex items-center justify-center relative z-10"
                  style={{
                    width: `${sizes.iconContainerSize * 3.5}px`,
                    height: `${sizes.iconContainerSize * 3.5}px`,
                    borderWidth: `${sizes.borderWidth}px`,
                    borderColor: '#C97777',
                    marginBottom: `${sizes.itemSpacing * 1.5}px`
                  }}
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <step.icon 
                    style={{ width: `${sizes.iconSize * 3}px`, height: `${sizes.iconSize * 3}px` }}
                    className="text-[#C97777]" 
                    strokeWidth={2.5} 
                  />
                </motion.div>
                <h3 
                  className="font-bold text-white leading-snug"
                  style={{ fontSize: `${sizes.subTextSize * 0.25 + 0.2}rem`, marginBottom: `${sizes.itemSpacing / 2}px` }}
                >
                  {step.title}
                </h3>
                <p 
                  className="text-[#A3A3A3]"
                  style={{ fontSize: `${sizes.subTextSize * 0.25}rem` }}
                >
                  {step.desc}
                </p>
              </div>
              {index < steps.length - 1 && (
                <motion.div 
                  className="absolute bg-[#C97777]/50 -z-0 rounded-full"
                  style={{ 
                    top: `${sizes.iconContainerSize * 1.75}px`,
                    left: '65%',
                    height: '4px'
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: "70%" }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
