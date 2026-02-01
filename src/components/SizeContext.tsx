import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface SizeSettings {
  // Text Sizes - Very Detailed
  titleSize: number;           // Main title
  titleLineHeight: number;     // Title line spacing
  titleLetterSpacing: number;  // Title letter spacing
  
  headingSize: number;         // Section headings
  headingLineHeight: number;
  headingLetterSpacing: number;
  
  textSize: number;            // Body text
  textLineHeight: number;
  textLetterSpacing: number;
  
  subTextSize: number;         // Small text
  subTextLineHeight: number;
  subTextLetterSpacing: number;
  
  // Font Weights
  titleWeight: number;
  headingWeight: number;
  textWeight: number;
  
  // Icon Sizes
  iconContainerSize: number;
  iconSize: number;
  iconStrokeWidth: number;
  
  // Spacing - Very Detailed
  paddingX: number;           // Page horizontal padding
  paddingY: number;           // Page vertical padding
  cardPadding: number;        // Card internal padding
  cardPaddingX: number;       // Card horizontal padding
  cardPaddingY: number;       // Card vertical padding
  itemSpacing: number;        // Space between items
  sectionSpacing: number;     // Space between sections
  headerSpacing: number;      // Space after headers
  
  // Borders
  borderWidth: number;
  borderOpacity: number;
  borderHoverOpacity: number;
  
  // Border Radius
  cardRounding: number;
  buttonRounding: number;
  iconRounding: number;
  
  // Colors Opacity
  cardBgOpacity: number;
  iconBgOpacity: number;
  primaryOpacity: number;
  
  // Shadows
  shadowSize: number;
  shadowOpacity: number;
  
  // Animations
  hoverScale: number;
  transitionDuration: number;
  animationDelay: number;
  
  // Layout
  maxWidth: number;
  aspectRatio: string;
  
  // Gaps
  gridGap: number;
  flexGap: number;
  
  // Specific Elements
  dividerHeight: number;
  dividerWidth: number;
  dotSize: number;
  
  // Header Line
  headerLineHeight: number;
  headerLineWidth: number;
}

const defaultSizes: SizeSettings = {
  // Text Sizes
  titleSize: 7,
  titleLineHeight: 1.2,
  titleLetterSpacing: -0.02,
  
  headingSize: 3,
  headingLineHeight: 1.3,
  headingLetterSpacing: 0,
  
  textSize: 2,
  textLineHeight: 1.5,
  textLetterSpacing: 0,
  
  subTextSize: 1.25,
  subTextLineHeight: 1.4,
  subTextLetterSpacing: 0,
  
  // Font Weights
  titleWeight: 700,
  headingWeight: 600,
  textWeight: 500,
  
  // Icons
  iconContainerSize: 28,
  iconSize: 14,
  iconStrokeWidth: 2.5,
  
  // Spacing
  paddingX: 24,
  paddingY: 20,
  cardPadding: 10,
  cardPaddingX: 12,
  cardPaddingY: 10,
  itemSpacing: 14,
  sectionSpacing: 24,
  headerSpacing: 24,
  
  // Borders
  borderWidth: 4,
  borderOpacity: 70,
  borderHoverOpacity: 100,
  
  // Border Radius
  cardRounding: 24,
  buttonRounding: 8,
  iconRounding: 16,
  
  // Colors Opacity
  cardBgOpacity: 100,
  iconBgOpacity: 25,
  primaryOpacity: 100,
  
  // Shadows
  shadowSize: 20,
  shadowOpacity: 50,
  
  // Animations
  hoverScale: 1.02,
  transitionDuration: 0.3,
  animationDelay: 0.15,
  
  // Layout
  maxWidth: 1536,
  aspectRatio: '16/9',
  
  // Gaps
  gridGap: 8,
  flexGap: 6,
  
  // Specific Elements
  dividerHeight: 8,
  dividerWidth: 160,
  dotSize: 8,
  
  // Header Line
  headerLineHeight: 8,
  headerLineWidth: 160,
};

const STORAGE_KEY = 'blood-bridge-presentation-settings';

interface SizeContextType {
  sizes: SizeSettings;
  updateSize: (key: keyof SizeSettings, value: number | string) => void;
  resetSizes: () => void;
  saveSizes: () => void;
  loadSizes: () => void;
  exportSizes: () => string;
  importSizes: (data: string) => boolean;
  hasSavedSettings: boolean;
}

const SizeContext = createContext<SizeContextType | undefined>(undefined);

export function SizeProvider({ children }: { children: ReactNode }) {
  const [sizes, setSizes] = useState<SizeSettings>(defaultSizes);
  const [hasSavedSettings, setHasSavedSettings] = useState(false);

  // Load saved settings on mount
  useEffect(() => {
    loadSizes();
  }, []);

  // Check if there are saved settings
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    setHasSavedSettings(!!saved);
  }, [sizes]);

  const updateSize = (key: keyof SizeSettings, value: number | string) => {
    setSizes(prev => ({ ...prev, [key]: value }));
  };

  const resetSizes = () => {
    setSizes(defaultSizes);
    localStorage.removeItem(STORAGE_KEY);
    setHasSavedSettings(false);
  };

  const saveSizes = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sizes));
      setHasSavedSettings(true);
      return true;
    } catch (error) {
      console.error('Failed to save settings:', error);
      return false;
    }
  };

  const loadSizes = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setSizes(parsed);
        setHasSavedSettings(true);
      }
    } catch (error) {
      console.error('Failed to load settings:', error);
    }
  };

  const exportSizes = () => {
    return JSON.stringify(sizes, null, 2);
  };

  const importSizes = (data: string) => {
    try {
      const parsed = JSON.parse(data);
      setSizes(parsed);
      return true;
    } catch (error) {
      console.error('Failed to import settings:', error);
      return false;
    }
  };

  return (
    <SizeContext.Provider value={{ 
      sizes, 
      updateSize, 
      resetSizes, 
      saveSizes, 
      loadSizes, 
      exportSizes, 
      importSizes,
      hasSavedSettings 
    }}>
      {children}
    </SizeContext.Provider>
  );
}

export function useSizes() {
  const context = useContext(SizeContext);
  if (!context) {
    throw new Error('useSizes must be used within SizeProvider');
  }
  return context;
}
