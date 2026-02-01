import { X, RotateCcw, ChevronDown, ChevronUp, Save, Download, Upload, Check } from 'lucide-react';
import { useSizes } from './SizeContext';
import { useState, useRef } from 'react';

interface Props {
  onClose: () => void;
}

export function SizeSettingsPanel({ onClose }: Props) {
  const { sizes, updateSize, resetSizes, saveSizes, loadSizes, exportSizes, importSizes, hasSavedSettings } = useSizes();
  const [expandedSections, setExpandedSections] = useState<string[]>(['text', 'icons', 'spacing', 'borders']);
  const [justSaved, setJustSaved] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section) ? prev.filter(s => s !== section) : [...prev, section]
    );
  };

  const handleSave = () => {
    saveSizes();
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 2000);
  };

  const handleExport = () => {
    const data = exportSizes();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'blood-bridge-settings.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        if (importSizes(content)) {
          alert('Settings imported successfully!');
        } else {
          alert('Failed to import settings. Please check the file format.');
        }
      };
      reader.readAsText(file);
    }
  };

  const SliderControl = ({ 
    label, 
    value, 
    onChange, 
    min, 
    max, 
    step = 1,
    unit = '' 
  }: { 
    label: string; 
    value: number; 
    onChange: (v: number) => void; 
    min: number; 
    max: number; 
    step?: number;
    unit?: string;
  }) => (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <label className="text-xs text-white font-medium">{label}</label>
        <span className="text-xs text-[#C97777] font-semibold min-w-[60px] text-right">
          {value}{unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-1.5 bg-[#1a1a1d] rounded-lg appearance-none cursor-pointer slider"
      />
    </div>
  );

  const Section = ({ 
    title, 
    id, 
    children 
  }: { 
    title: string; 
    id: string; 
    children: React.ReactNode 
  }) => (
    <div className="bg-[#1a1a1d] border-2 border-[#C97777]/30 rounded-xl overflow-hidden">
      <button
        onClick={() => toggleSection(id)}
        className="w-full flex items-center justify-between p-4 hover:bg-[#1f1f22] transition-colors"
      >
        <h3 className="text-lg font-bold text-[#C97777]">{title}</h3>
        {expandedSections.includes(id) ? (
          <ChevronUp className="w-5 h-5 text-[#C97777]" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#C97777]" />
        )}
      </button>
      {expandedSections.includes(id) && (
        <div className="p-4 pt-0 space-y-4">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#0A0A0A] border-4 border-[#C97777]/70 rounded-2xl w-full max-w-7xl max-h-[95vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-[#0A0A0A] border-b-2 border-[#C97777]/30 p-5 flex items-center justify-between z-10">
          <div>
            <h2 className="text-2xl font-bold text-white">Complete Control Panel</h2>
            <p className="text-sm text-[#A3A3A3] mt-1">
              Adjust every aspect • {hasSavedSettings && '✓ Saved settings loaded'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* Save Button */}
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 bg-[#C97777] hover:bg-[#C97777]/90 border-2 border-[#C97777] rounded-lg transition-all font-semibold text-white"
            >
              {justSaved ? (
                <>
                  <Check className="w-4 h-4" />
                  <span className="text-sm">Saved!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span className="text-sm">Save Settings</span>
                </>
              )}
            </button>

            {/* Export Button */}
            <button
              onClick={handleExport}
              className="flex items-center gap-2 px-4 py-2 bg-[#C97777]/20 hover:bg-[#C97777]/30 border-2 border-[#C97777]/40 rounded-lg transition-all"
              title="Export settings to file"
            >
              <Download className="w-4 h-4 text-[#C97777]" />
              <span className="text-white text-sm">Export</span>
            </button>

            {/* Import Button */}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2 px-4 py-2 bg-[#C97777]/20 hover:bg-[#C97777]/30 border-2 border-[#C97777]/40 rounded-lg transition-all"
              title="Import settings from file"
            >
              <Upload className="w-4 h-4 text-[#C97777]" />
              <span className="text-white text-sm">Import</span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".json"
              onChange={handleImport}
              className="hidden"
            />

            {/* Reset Button */}
            <button
              onClick={resetSizes}
              className="flex items-center gap-2 px-4 py-2 bg-[#C97777]/20 hover:bg-[#C97777]/30 border-2 border-[#C97777]/40 rounded-lg transition-all"
            >
              <RotateCcw className="w-4 h-4 text-[#C97777]" />
              <span className="text-white text-sm">Reset All</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 bg-[#C97777]/20 hover:bg-[#C97777]/30 border-2 border-[#C97777]/40 rounded-lg transition-all"
            >
              <X className="w-5 h-5 text-[#C97777]" />
            </button>
          </div>
        </div>

        {/* Settings Grid */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-3 gap-4">
            
            {/* TEXT SIZES */}
            <Section title="📝 Text Sizes" id="text">
              <SliderControl
                label="Title Size"
                value={sizes.titleSize}
                onChange={(v) => updateSize('titleSize', v)}
                min={3}
                max={12}
                step={0.5}
                unit="xl"
              />
              <SliderControl
                label="Title Line Height"
                value={sizes.titleLineHeight}
                onChange={(v) => updateSize('titleLineHeight', v)}
                min={0.8}
                max={2}
                step={0.05}
              />
              <SliderControl
                label="Title Letter Spacing"
                value={sizes.titleLetterSpacing}
                onChange={(v) => updateSize('titleLetterSpacing', v)}
                min={-0.1}
                max={0.1}
                step={0.01}
                unit="em"
              />
              
              <div className="h-px bg-[#C97777]/20 my-2"></div>
              
              <SliderControl
                label="Heading Size"
                value={sizes.headingSize}
                onChange={(v) => updateSize('headingSize', v)}
                min={1.5}
                max={6}
                step={0.25}
                unit="xl"
              />
              <SliderControl
                label="Heading Line Height"
                value={sizes.headingLineHeight}
                onChange={(v) => updateSize('headingLineHeight', v)}
                min={0.8}
                max={2}
                step={0.05}
              />
              <SliderControl
                label="Heading Letter Spacing"
                value={sizes.headingLetterSpacing}
                onChange={(v) => updateSize('headingLetterSpacing', v)}
                min={-0.05}
                max={0.1}
                step={0.005}
                unit="em"
              />
              
              <div className="h-px bg-[#C97777]/20 my-2"></div>
              
              <SliderControl
                label="Text Size"
                value={sizes.textSize}
                onChange={(v) => updateSize('textSize', v)}
                min={0.75}
                max={5}
                step={0.25}
                unit="xl"
              />
              <SliderControl
                label="Text Line Height"
                value={sizes.textLineHeight}
                onChange={(v) => updateSize('textLineHeight', v)}
                min={1}
                max={2.5}
                step={0.05}
              />
              <SliderControl
                label="Text Letter Spacing"
                value={sizes.textLetterSpacing}
                onChange={(v) => updateSize('textLetterSpacing', v)}
                min={-0.05}
                max={0.1}
                step={0.005}
                unit="em"
              />
              
              <div className="h-px bg-[#C97777]/20 my-2"></div>
              
              <SliderControl
                label="Sub Text Size"
                value={sizes.subTextSize}
                onChange={(v) => updateSize('subTextSize', v)}
                min={0.5}
                max={3}
                step={0.25}
                unit="xl"
              />
              <SliderControl
                label="Sub Text Line Height"
                value={sizes.subTextLineHeight}
                onChange={(v) => updateSize('subTextLineHeight', v)}
                min={1}
                max={2.5}
                step={0.05}
              />
              <SliderControl
                label="Sub Text Letter Spacing"
                value={sizes.subTextLetterSpacing}
                onChange={(v) => updateSize('subTextLetterSpacing', v)}
                min={-0.05}
                max={0.1}
                step={0.005}
                unit="em"
              />
            </Section>

            {/* FONT WEIGHTS */}
            <Section title="🔤 Font Weights" id="weights">
              <SliderControl
                label="Title Weight"
                value={sizes.titleWeight}
                onChange={(v) => updateSize('titleWeight', v)}
                min={300}
                max={900}
                step={100}
              />
              <SliderControl
                label="Heading Weight"
                value={sizes.headingWeight}
                onChange={(v) => updateSize('headingWeight', v)}
                min={300}
                max={900}
                step={100}
              />
              <SliderControl
                label="Text Weight"
                value={sizes.textWeight}
                onChange={(v) => updateSize('textWeight', v)}
                min={300}
                max={900}
                step={100}
              />
            </Section>

            {/* ICONS */}
            <Section title="🎨 Icons" id="icons">
              <SliderControl
                label="Icon Container Size"
                value={sizes.iconContainerSize}
                onChange={(v) => updateSize('iconContainerSize', v)}
                min={12}
                max={48}
                step={2}
                unit="px"
              />
              <SliderControl
                label="Icon Size"
                value={sizes.iconSize}
                onChange={(v) => updateSize('iconSize', v)}
                min={6}
                max={32}
                step={1}
                unit="px"
              />
              <SliderControl
                label="Icon Stroke Width"
                value={sizes.iconStrokeWidth}
                onChange={(v) => updateSize('iconStrokeWidth', v)}
                min={1}
                max={4}
                step={0.5}
              />
              <SliderControl
                label="Icon Background Opacity"
                value={sizes.iconBgOpacity}
                onChange={(v) => updateSize('iconBgOpacity', v)}
                min={0}
                max={100}
                step={5}
                unit="%"
              />
              <SliderControl
                label="Icon Rounding"
                value={sizes.iconRounding}
                onChange={(v) => updateSize('iconRounding', v)}
                min={0}
                max={48}
                step={2}
                unit="px"
              />
            </Section>

            {/* SPACING */}
            <Section title="📐 Spacing" id="spacing">
              <SliderControl
                label="Page Padding X"
                value={sizes.paddingX}
                onChange={(v) => updateSize('paddingX', v)}
                min={4}
                max={48}
                step={2}
                unit="px"
              />
              <SliderControl
                label="Page Padding Y"
                value={sizes.paddingY}
                onChange={(v) => updateSize('paddingY', v)}
                min={4}
                max={40}
                step={2}
                unit="px"
              />
              
              <div className="h-px bg-[#C97777]/20 my-2"></div>
              
              <SliderControl
                label="Card Padding"
                value={sizes.cardPadding}
                onChange={(v) => updateSize('cardPadding', v)}
                min={2}
                max={20}
                step={1}
                unit="px"
              />
              <SliderControl
                label="Card Padding X"
                value={sizes.cardPaddingX}
                onChange={(v) => updateSize('cardPaddingX', v)}
                min={2}
                max={24}
                step={1}
                unit="px"
              />
              <SliderControl
                label="Card Padding Y"
                value={sizes.cardPaddingY}
                onChange={(v) => updateSize('cardPaddingY', v)}
                min={2}
                max={24}
                step={1}
                unit="px"
              />
              
              <div className="h-px bg-[#C97777]/20 my-2"></div>
              
              <SliderControl
                label="Item Spacing"
                value={sizes.itemSpacing}
                onChange={(v) => updateSize('itemSpacing', v)}
                min={2}
                max={32}
                step={2}
                unit="px"
              />
              <SliderControl
                label="Section Spacing"
                value={sizes.sectionSpacing}
                onChange={(v) => updateSize('sectionSpacing', v)}
                min={8}
                max={48}
                step={2}
                unit="px"
              />
              <SliderControl
                label="Header Spacing"
                value={sizes.headerSpacing}
                onChange={(v) => updateSize('headerSpacing', v)}
                min={8}
                max={48}
                step={2}
                unit="px"
              />
              
              <div className="h-px bg-[#C97777]/20 my-2"></div>
              
              <SliderControl
                label="Grid Gap"
                value={sizes.gridGap}
                onChange={(v) => updateSize('gridGap', v)}
                min={2}
                max={24}
                step={1}
                unit="px"
              />
              <SliderControl
                label="Flex Gap"
                value={sizes.flexGap}
                onChange={(v) => updateSize('flexGap', v)}
                min={2}
                max={24}
                step={1}
                unit="px"
              />
            </Section>

            {/* BORDERS */}
            <Section title="🔲 Borders" id="borders">
              <SliderControl
                label="Border Width"
                value={sizes.borderWidth}
                onChange={(v) => updateSize('borderWidth', v)}
                min={0}
                max={10}
                step={1}
                unit="px"
              />
              <SliderControl
                label="Border Opacity"
                value={sizes.borderOpacity}
                onChange={(v) => updateSize('borderOpacity', v)}
                min={0}
                max={100}
                step={5}
                unit="%"
              />
              <SliderControl
                label="Border Hover Opacity"
                value={sizes.borderHoverOpacity}
                onChange={(v) => updateSize('borderHoverOpacity', v)}
                min={0}
                max={100}
                step={5}
                unit="%"
              />
            </Section>

            {/* BORDER RADIUS */}
            <Section title="⭕ Rounding" id="rounding">
              <SliderControl
                label="Card Rounding"
                value={sizes.cardRounding}
                onChange={(v) => updateSize('cardRounding', v)}
                min={0}
                max={64}
                step={4}
                unit="px"
              />
              <SliderControl
                label="Button Rounding"
                value={sizes.buttonRounding}
                onChange={(v) => updateSize('buttonRounding', v)}
                min={0}
                max={32}
                step={2}
                unit="px"
              />
            </Section>

            {/* COLORS & OPACITY */}
            <Section title="🎨 Colors & Opacity" id="colors">
              <SliderControl
                label="Card Background Opacity"
                value={sizes.cardBgOpacity}
                onChange={(v) => updateSize('cardBgOpacity', v)}
                min={0}
                max={100}
                step={5}
                unit="%"
              />
              <SliderControl
                label="Primary Color Opacity"
                value={sizes.primaryOpacity}
                onChange={(v) => updateSize('primaryOpacity', v)}
                min={0}
                max={100}
                step={5}
                unit="%"
              />
            </Section>

            {/* SHADOWS */}
            <Section title="🌑 Shadows" id="shadows">
              <SliderControl
                label="Shadow Size"
                value={sizes.shadowSize}
                onChange={(v) => updateSize('shadowSize', v)}
                min={0}
                max={40}
                step={2}
                unit="px"
              />
              <SliderControl
                label="Shadow Opacity"
                value={sizes.shadowOpacity}
                onChange={(v) => updateSize('shadowOpacity', v)}
                min={0}
                max={100}
                step={5}
                unit="%"
              />
            </Section>

            {/* ANIMATIONS */}
            <Section title="✨ Animations" id="animations">
              <SliderControl
                label="Hover Scale"
                value={sizes.hoverScale}
                onChange={(v) => updateSize('hoverScale', v)}
                min={1}
                max={1.2}
                step={0.01}
              />
              <SliderControl
                label="Transition Duration"
                value={sizes.transitionDuration}
                onChange={(v) => updateSize('transitionDuration', v)}
                min={0.1}
                max={1}
                step={0.05}
                unit="s"
              />
              <SliderControl
                label="Animation Delay"
                value={sizes.animationDelay}
                onChange={(v) => updateSize('animationDelay', v)}
                min={0}
                max={0.5}
                step={0.05}
                unit="s"
              />
            </Section>

            {/* SPECIFIC ELEMENTS */}
            <Section title="🎯 Specific Elements" id="elements">
              <SliderControl
                label="Divider Height"
                value={sizes.dividerHeight}
                onChange={(v) => updateSize('dividerHeight', v)}
                min={1}
                max={20}
                step={1}
                unit="px"
              />
              <SliderControl
                label="Divider Width"
                value={sizes.dividerWidth}
                onChange={(v) => updateSize('dividerWidth', v)}
                min={40}
                max={400}
                step={10}
                unit="px"
              />
              <SliderControl
                label="Dot Size"
                value={sizes.dotSize}
                onChange={(v) => updateSize('dotSize', v)}
                min={2}
                max={16}
                step={1}
                unit="px"
              />
              <SliderControl
                label="Header Line Height"
                value={sizes.headerLineHeight}
                onChange={(v) => updateSize('headerLineHeight', v)}
                min={2}
                max={16}
                step={1}
                unit="px"
              />
              <SliderControl
                label="Header Line Width"
                value={sizes.headerLineWidth}
                onChange={(v) => updateSize('headerLineWidth', v)}
                min={40}
                max={400}
                step={10}
                unit="px"
              />
            </Section>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-[#0A0A0A] border-t-2 border-[#C97777]/30 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#A3A3A3]">
              Press <kbd className="px-2 py-1 bg-[#1a1a1d] border border-[#C97777]/30 rounded text-xs">S</kbd> to toggle • 
              All changes apply instantly • Don't forget to <strong className="text-[#C97777]">Save</strong>!
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#C97777]/20 hover:bg-[#C97777]/30 text-white font-semibold rounded-lg transition-all border-2 border-[#C97777]/40"
            >
              Close Panel
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          background: #C97777;
          cursor: pointer;
          border-radius: 50%;
          border: 2px solid #fff;
        }
        
        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          background: #C97777;
          cursor: pointer;
          border-radius: 50%;
          border: 2px solid #fff;
        }
        
        .slider::-webkit-slider-thumb:hover {
          background: #d98888;
          transform: scale(1.2);
        }
        
        .slider::-moz-range-thumb:hover {
          background: #d98888;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}
