import { ShieldCheck, Lock, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { useSizes } from '../SizeContext';

export function Slide11() {
  const { sizes } = useSizes();
  
  const securityFeatures = [
    { 
      icon: ShieldCheck, 
      title: 'User Verification', 
      desc: 'Multi-step authentication and identity validation'
    },
    { 
      icon: Lock, 
      title: 'Secure Data Storage', 
      desc: 'End-to-end encryption for all sensitive information'
    },
    { 
      icon: Eye, 
      title: 'Access Control', 
      desc: 'Role-based permissions and privacy settings'
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
        className="mb-24"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 
          className="font-bold text-white leading-tight"
          style={{ fontSize: `${sizes.titleSize * 0.25}rem`, marginBottom: `${sizes.itemSpacing * 2}px` }}
        >
          Security and Privacy
        </h2>
        <div 
          className="bg-[#C97777]"
          style={{ width: '160px', height: '8px', borderRadius: `${sizes.cardRounding / 4}px` }}
        ></div>
      </motion.div>

      {/* Security Features */}
      <div 
        className="flex-1 flex flex-col justify-center"
        style={{ gap: `${sizes.itemSpacing * 4}px` }}
      >
        {securityFeatures.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-start bg-[#1a1a1d] hover:bg-[#1f1f22] transition-all shadow-2xl"
            style={{
              gap: `${sizes.cardPadding * 4.8}px`,
              padding: `${sizes.cardPadding * 4}px ${sizes.cardPadding * 4.8}px`,
              borderWidth: `${sizes.borderWidth}px`,
              borderColor: `rgba(201, 119, 119, ${sizes.borderOpacity / 100})`,
              borderRadius: `${sizes.cardRounding}px`
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.02, x: 10 }}
          >
            <motion.div 
              className="flex-shrink-0 bg-[#C97777]/25 flex items-center justify-center"
              style={{
                width: `${sizes.iconContainerSize * 4}px`,
                height: `${sizes.iconContainerSize * 4}px`,
                borderWidth: `${sizes.borderWidth}px`,
                borderColor: '#C97777',
                borderRadius: `${sizes.cardRounding}px`
              }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <item.icon 
                style={{ width: `${sizes.iconSize * 4}px`, height: `${sizes.iconSize * 4}px` }}
                className="text-[#C97777]" 
                strokeWidth={2.5} 
              />
            </motion.div>
            <div className="min-w-0">
              <h3 
                className="font-bold text-white leading-tight"
                style={{ fontSize: `${sizes.headingSize * 0.25 + 0.5}rem`, marginBottom: `${sizes.itemSpacing}px` }}
              >
                {item.title}
              </h3>
              <p 
                className="text-[#E5E5E5] leading-relaxed"
                style={{ fontSize: `${sizes.textSize * 0.25}rem` }}
              >
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
