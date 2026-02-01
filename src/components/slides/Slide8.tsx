import { Heart, User, Building2, Database } from 'lucide-react';
import { motion } from 'motion/react';
import { useSizes } from '../SizeContext';

export function Slide8() {
  const { sizes } = useSizes();
  
  const roles = [
    { 
      icon: Heart, 
      title: 'Donor', 
      desc: 'Individuals willing to donate blood',
      features: ['Receive requests', 'Track donations', 'Earn rewards']
    },
    { 
      icon: User, 
      title: 'Receiver', 
      desc: 'Patients in need of blood',
      features: ['Request blood', 'Track status', 'Emergency mode']
    },
    { 
      icon: Building2, 
      title: 'Hospital', 
      desc: 'Medical institutions',
      features: ['Manage requests', 'Access database', 'Priority handling']
    },
    { 
      icon: Database, 
      title: 'Blood Bank', 
      desc: 'Blood storage centers',
      features: ['Inventory management', 'Distribution', 'Analytics']
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
          User Roles
        </h2>
        <div 
          className="bg-[#C97777]"
          style={{ width: '160px', height: '8px', borderRadius: `${sizes.cardRounding / 4}px` }}
        ></div>
      </motion.div>

      {/* Roles Grid */}
      <div className="flex-1 grid grid-cols-2" style={{ gap: `${sizes.itemSpacing * 2}px` }}>
        {roles.map((role, index) => (
          <motion.div
            key={index}
            className="flex flex-col bg-[#1a1a1d] hover:bg-[#1f1f22] transition-all shadow-2xl"
            style={{
              padding: `${sizes.cardPadding * 3.2}px`,
              borderWidth: `${sizes.borderWidth}px`,
              borderColor: `rgba(201, 119, 119, ${sizes.borderOpacity / 100})`,
              borderRadius: `${sizes.cardRounding}px`
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex items-center" style={{ gap: `${sizes.itemSpacing * 2}px`, marginBottom: `${sizes.itemSpacing * 1.5}px` }}>
              <motion.div 
                className="bg-[#C97777]/25 flex items-center justify-center flex-shrink-0"
                style={{
                  width: `${sizes.iconContainerSize * 3}px`,
                  height: `${sizes.iconContainerSize * 3}px`,
                  borderWidth: `${sizes.borderWidth}px`,
                  borderColor: '#C97777',
                  borderRadius: `${sizes.cardRounding / 1.5}px`
                }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <role.icon 
                  style={{ width: `${sizes.iconSize * 2.5}px`, height: `${sizes.iconSize * 2.5}px` }}
                  className="text-[#C97777]" 
                  strokeWidth={2.5} 
                />
              </motion.div>
              <div className="min-w-0">
                <h3 
                  className="font-bold text-white leading-tight"
                  style={{ fontSize: `${sizes.headingSize * 0.25}rem` }}
                >
                  {role.title}
                </h3>
                <p 
                  className="text-[#A3A3A3]"
                  style={{ fontSize: `${sizes.subTextSize * 0.25}rem`, marginTop: `${sizes.itemSpacing / 4}px` }}
                >
                  {role.desc}
                </p>
              </div>
            </div>
            <ul style={{ gap: `${sizes.itemSpacing / 2}px` }} className="flex flex-col ml-3">
              {role.features.map((feature, idx) => (
                <li 
                  key={idx} 
                  className="flex items-center text-[#E5E5E5]"
                  style={{ gap: `${sizes.itemSpacing}px`, fontSize: `${sizes.subTextSize * 0.25}rem` }}
                >
                  <div className="w-2 h-2 bg-[#C97777] rounded-full flex-shrink-0"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
