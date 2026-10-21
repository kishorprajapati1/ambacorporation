export const PRODUCT_CATEGORIES = [
  { 
    id: 'all', 
    name: 'All Machinery', 
    count: 18,
    desc: 'Complete turnkey parenteral and oral packaging equipment portfolio'
  },
  { 
    id: 'injectables', 
    name: 'Injectable Vial Lines', 
    count: 6,
    desc: 'Sterile washing, powder & liquid filling, stoppering & aluminum cap sealing'
  },
  { 
    id: 'syrups', 
    name: 'Oral Liquid & Dry Syrups', 
    count: 5,
    desc: 'Air jet bottle cleaning, auger powder filling, volumetric syrup filling & capping'
  },
  { 
    id: 'diagnostics', 
    name: 'VTM & Diagnostics', 
    count: 3,
    desc: 'Viral Transport Medium tube filling, cryovial packaging & syringe labelling'
  },
  { 
    id: 'labelling', 
    name: 'Automatic Sticker Labelling', 
    count: 4,
    desc: 'High-speed rotary, OCV/OCR vision verification, wrap-around & front-back labelers'
  },
];

export const PRODUCTS_DATA = [
  // --- INJECTABLES ---
  {
    id: 'rotary-vial-washing',
    featured: true,
    category: 'injectables',
    name: 'Automatic Rotary Vial Washing Machine',
    model: 'AC-RVW-120',
    tagline: 'High-efficiency internal & external multi-media cleaning for sterile injectable vials',
    speed: '60 to 120 Vials/min',
    range: '2ml to 100ml Glass/Molded Vials',
    power: '3.0 HP / 415 V / 50 Hz',
    accuracy: '100% Complete Wash Coverage',
    image: './images/products/rotary-vial-washing.jpg',
    compliance: 'cGMP, FDA Validatable',
    highlights: [
      '6 Internal & 3 External Washing Stations (WFI, Purified Water, Air Jets)',
      'Specially designed gripper fingers with positive mechanical hold',
      'Contact parts SS 316L, non-contact parts SS 304',
      'No Vial - No Wash water-saving system',
      'Recirculation tank with centrifugal pump options'
    ],
    specs: {
      'Output Speed': '60 to 120 Vials per minute (Custom up to 240 BPM)',
      'Vial Diameter': '16mm to 52mm',
      'Vial Height': '35mm to 110mm',
      'Wash Cycles': 'Customizable (Recycled Water, DM Water, WFI, Sterile Compressed Air)',
      'Water Consumption': 'Approx 250 - 450 Liters/Hour',
      'Air Consumption': '25 CFM at 6 Bar',
      'Dimensions': '1700mm (L) x 1500mm (W) x 1550mm (H)',
      'Weight': 'Approx 900 kg'
    },
    seoKeywords: 'rotary vial washing machine, injectable vial washer, cGMP vial washing machine manufacturer Vatva Ahmedabad'
  },
  {
    id: 'linear-vial-washing',
    featured: false,
    category: 'injectables',
    name: 'Automatic Linear Vial Washing Machine',
    model: 'AC-LVW-150',
    tagline: 'Continuous indexing tunnel linear washer for high-speed parenteral lines',
    speed: '90 to 200 Vials/min',
    range: '2ml to 100ml Vials',
    power: '4.5 HP / 415 V',
    accuracy: 'Precision Indexing & Zero Dead-zone',
    image: './images/products/linear-vial-washing.jpg',
    compliance: 'cGMP & 21 CFR Part 11 Ready',
    highlights: [
      'Linear continuous motion with servo-synchronized spray needles',
      'Easy integration with Sterilizing & Depyrogenation Tunnel',
      'Independent pumps and high-grade 0.2 micron sterile air filtration',
      'Quick changeover parts with color-coded guide tracks'
    ],
    specs: {
      'Output Speed': 'Up to 200 Vials/min',
      'Container Range': '2ml - 100ml',
      'Washing Stations': '8 internal washes & 3 external washes',
      'Utility Need': 'WFI, Demineralized Water, Compressed Air 6kg/cm2',
      'MOC Contact Parts': 'SS 316L mirror polished',
      'Weight': 'Approx 1400 kg'
    },
    seoKeywords: 'linear vial washing machine, sterile washing tunnel, high speed parenteral washing machine'
  },
  {
    id: 'vial-powder-filling-stoppering-vacuum-wheel',
    featured: true,
    category: 'injectables',
    name: 'Automatic Vial Powder Filling & Stoppering Machine (Vacuum Wheel)',
    model: 'AC-VPF-VW-2H',
    tagline: 'Dual Head Vacuum Wheel Technology for sterile antibiotic powder filling with rubber stoppering',
    speed: '80 to 160 Vials/min',
    range: '50mg to 5000mg Sterile Powder',
    power: '4.0 HP / 415 V / 50 Hz',
    accuracy: '± 1% with high precision dosing port',
    image: './images/products/vial-powder-vacuum-wheel.jpg',
    compliance: 'cGMP / Cleanroom Class 100 Laminar Flow Ready',
    highlights: [
      'Piston vacuum wheel powder dosing for uniform bulk density handling',
      'Automatic vibratory bowl feeder for sterile rubber stoppers',
      'No Vial - No Powder Fill and No Vial - No Stopper safety logic',
      'Laminar Air Flow (LAF) enclosure ready with acrylic hood interlocks',
      'High filling precision with negligible powder dusting'
    ],
    specs: {
      'Dosing Heads': 'Single Head / Double Head Vacuum Wheel',
      'Output Speed': 'Up to 160 vials/min (Dual Head)',
      'Fill Weight Range': '50 mg to 5000 mg (with change parts)',
      'Stopper Range': '13mm & 20mm standard sterile rubber stoppers',
      'Accuracy': '±1% depending on powder characteristics & hygroscopicity',
      'Vacuum Required': '25" Hg at 30 CFM',
      'Nitrogen Flushing': 'Optional pre & post filling flushing'
    },
    seoKeywords: 'vial powder filling and stoppering machine, vacuum wheel powder filler, dry injectable filling line Ahmedabad'
  },
  {
    id: 'vial-powder-filling-stoppering-auger',
    featured: false,
    category: 'injectables',
    name: 'Automatic Vial Powder Filling Machine (Auger Type)',
    model: 'AC-VPF-AG-4H',
    tagline: 'Multi-head servo-driven auger metering for antibiotics, biotechnology & sterile powders',
    speed: '60 to 120 Vials/min',
    range: '100mg to 10g',
    power: '3.5 HP / 3 Phase',
    accuracy: '± 1.5% - Servo Controlled',
    image: './images/products/vial-powder-auger.jpg',
    compliance: 'cGMP Standard, Touchscreen HMI',
    highlights: [
      'Microprocessor servo motor auger dosing for micro-adjustments',
      'Tool-less dismantling of powder hopper for quick batch changeover and autoclave',
      'Integrated vibratory bowl feeder for half or full stopper insertion',
      'Statistical weight tracking with optional rejection system'
    ],
    specs: {
      'Auger Drives': 'Independent high-torque digital servo drives',
      'Speed': '60 - 120 containers/min',
      'Fill Volume': '0.1g - 10g',
      'Stopper Insertion': 'Half-insertion (lyophilization) or full closure',
      'Air Requirement': '6 Bar, dry filtered air'
    },
    seoKeywords: 'auger vial powder filling machine, servo powder filler, injectable powder packaging machinery'
  },
  {
    id: 'vial-liquid-filling-stoppering-peristaltic',
    featured: true,
    category: 'injectables',
    name: 'Vial Liquid Filling & Stoppering Machine (Peristaltic Pump)',
    model: 'AC-VLF-PP',
    tagline: 'Zero-contamination single-use tubing filling for vaccines, biologics & high-potency drugs',
    speed: '40 to 120 Vials/min',
    range: '0.2ml to 100ml',
    power: '2.5 HP / 230-415 V',
    accuracy: '± 0.5% with programmable peristaltic drive',
    image: './images/products/vial-liquid-peristaltic.jpg',
    compliance: 'cGMP / Biopharmaceutical Grade',
    highlights: [
      'Disposable platinum-cured silicone fluid paths (zero cross-contamination)',
      'Valveless design eliminates mechanical wear and shear on protein molecules',
      'Automatic vacuum pick-and-place rubber stopper positioning',
      'Easy calibration via touch screen HMI without mechanical disassembly'
    ],
    specs: {
      'Filling Technology': 'Precision Peristaltic Pump System (2 to 8 Heads)',
      'Fill Volume': '0.2 ml to 100 ml',
      'Vial Compatibility': '2R, 4R, 6R, 10R, 20R, 50R, 100R',
      'Stopper Range': '13mm, 20mm, 28mm (Inverted or Slotted)',
      'Control System': 'Siemens / Allen Bradley PLC with color touchscreen'
    },
    seoKeywords: 'peristaltic pump vial filling machine, vaccine filling machine, sterile liquid vial stoppering'
  },
  {
    id: 'vial-cap-sealing-rotary',
    featured: false,
    category: 'injectables',
    name: 'Automatic Rotary Vial Cap Sealing Machine',
    model: 'AC-VCS-8H',
    tagline: 'High-speed continuous rotary aluminum / flip-off tear-off vial cap crimper',
    speed: '80 to 240 Vials/min',
    range: '13mm & 20mm Flip-Off / Tear-Off Caps',
    power: '2.0 HP / 415 V',
    accuracy: 'Hermetic Seal with Zero Particulate Generation',
    image: './images/products/vial-cap-sealing.jpg',
    compliance: 'cGMP Class A/B Laminar Flow compatible',
    highlights: [
      'Multi-head sealing turret with independent free-spinning roller blades',
      'Zero metal particle generation during crimping (essential for sterile areas)',
      'Continuous star wheel transfer with spring-loaded capping heads',
      'Safety slip clutch on star wheel prevents vial breakage'
    ],
    specs: {
      'Sealing Heads': '4, 6, 8 or 12 Heads Rotary Turret',
      'Cap Types': 'Flip-Off, Tear-Off, Plain Aluminum Caps',
      'Speed': 'Up to 240 vials/minute',
      'Vial Sizes': '2ml - 100ml',
      'Air Supply': '5 to 6 Bar'
    },
    seoKeywords: 'rotary vial cap sealing machine, flip off cap crimper, aluminum vial capping machine manufacturer'
  },

  // --- ORAL LIQUIDS & SYRUPS ---
  {
    id: 'air-jet-bottle-cleaning',
    featured: false,
    category: 'syrups',
    name: 'Automatic Air Jet & Vacuum Bottle Cleaning Machine',
    model: 'AC-ABC-120',
    tagline: 'Inverted continuous bottle dusting with ionized air nozzles and vacuum debris extraction',
    speed: '60 to 150 Bottles/min',
    range: '30ml to 1000ml Glass & PET Bottles',
    power: '2.5 HP / 415 V',
    accuracy: '100% De-dusting & Static Neutralization',
    image: './images/products/air-jet-bottle-cleaning.jpg',
    compliance: 'cGMP Compliant for Oral Liquid Lines',
    highlights: [
      'Positive neck holding with 180-degree bottle inversion mechanism',
      'Ionized air jets neutralize electrostatic charge clinging dust to bottle walls',
      'High-suction vacuum extraction captures particulate into HEPA filters',
      'No Bottle - No Air blast economizer sensor'
    ],
    specs: {
      'Bottle Capacity': 'Glass, PET, HDPE (30ml - 1000ml)',
      'Air Jets': 'Ionized compressed air (Oil-free)',
      'Dust Collector': 'Integrated HEPA filter collector box',
      'Output': 'Up to 150 BPM'
    },
    seoKeywords: 'air jet bottle cleaning machine, vacuum bottle cleaner, dry syrup bottle washer'
  },
  {
    id: 'dry-syrup-powder-filling',
    featured: false,
    category: 'syrups',
    name: 'Automatic Dry Syrup Powder Filling Machine',
    model: 'AC-DSP-4H',
    tagline: 'Rotary/linear multi-head auger powder filling for pediatric antibiotic suspensions',
    speed: '40 to 120 Bottles/min',
    range: '10g to 100g Powder in Bottles',
    power: '3.5 HP / 415 V',
    accuracy: '± 1% with high sensitivity auger controller',
    image: './images/products/dry-syrup-powder-filling.jpg',
    compliance: 'cGMP Stainless Steel Construction',
    highlights: [
      'Specialized anti-humidity closed dosing chamber',
      'Rotary star wheel bottle indexing with vibrator beneath filling funnel',
      'No Bottle - No Fill interlock prevents powder waste on conveyor',
      'Optional nitrogen gas purger before and after filling'
    ],
    specs: {
      'Output': '40 - 120 Bottles/min',
      'Container Type': 'Glass and PET Dry Syrup Bottles',
      'Filling Station': 'Single / Twin / Four Auger Heads',
      'Hopper Volume': '25 - 50 Liters with slow-speed agitator'
    },
    seoKeywords: 'dry syrup powder filling machine, pediatric suspension filler, dry syrup packaging line'
  },
  {
    id: 'liquid-syrup-filling-piston-gear',
    featured: true,
    category: 'syrups',
    name: 'Automatic Liquid Syrup Bottle Filling Machine',
    model: 'AC-LSF-8H',
    tagline: 'Volumetric piston / positive displacement rotary gear pump filling for pharmaceutical syrups and suspensions',
    speed: '60 to 160 Bottles/min',
    range: '30ml to 1000ml Liquids',
    power: '3.0 HP / 415 V',
    accuracy: '± 0.5% - 1% repeatable precision',
    image: './images/products/liquid-syrup-filling.jpg',
    compliance: 'cGMP / SS 316L Contact Parts',
    highlights: [
      'Drip-proof diving nozzles with bottom-up filling to avoid foaming',
      'Precision machined SS 316L volumetric piston cylinders with PTFE seals',
      'Fast volume adjustment with centralized hand wheel or digital touchscreen',
      'Direct synchronization with conveyor and downstream capping machine'
    ],
    specs: {
      'Filling Heads': '4, 6, 8, 12 Nozzles available',
      'Output Speed': '60 to 160 BPM',
      'Viscosity Range': 'Aqueous solutions to viscous cough syrups & suspensions',
      'Contact Material': 'AISI 316L with sanitary tri-clamp fittings'
    },
    seoKeywords: 'liquid syrup filling machine, volumetric bottle filler, oral liquid suspension filling line Vatva'
  },
  {
    id: 'bottle-capping-multi-head',
    featured: false,
    category: 'syrups',
    name: 'Automatic Multi-Head Rotary Bottle Capping Machine',
    model: 'AC-BCM-4H',
    tagline: 'Precision torque-controlled capping for ROPP, screw caps, and child-resistant caps (CRC)',
    speed: '60 to 150 Bottles/min',
    range: '20mm to 38mm Cap Diameters',
    power: '2.0 HP / 415 V',
    accuracy: 'Magnetic Hysteresis Torque Clutch',
    image: './images/products/bottle-capping.jpg',
    compliance: 'cGMP Standard',
    highlights: [
      'Magnetic torque heads ensure consistent tightness without damaging plastic caps',
      'Vibratory or mechanical elevator cap feeder with orientation chute',
      'No Bottle - No Cap delivery logic',
      'Quick changeover star wheels and guides'
    ],
    specs: {
      'Capping Heads': '1, 4, 6, 8 Heads Rotary',
      'Cap Types': 'Plastic Screw Caps, ROPP Aluminum Caps, CRC Caps',
      'Torque Control': 'Adjustable Magnetic Clutch (0.5 to 3.5 Nm)'
    },
    seoKeywords: 'bottle capping machine, rotary ROPP capper, screw capping machine pharmaceutical'
  },
  {
    id: 'measuring-cup-placement',
    featured: false,
    category: 'syrups',
    name: 'Automatic Bottle Measuring Cup Placement Machine',
    model: 'AC-MCP-120',
    tagline: 'High-speed automatic feeder and presser for dosage measuring cups on syrup bottles',
    speed: '80 to 150 Bottles/min',
    range: 'Standard Pharma Measuring Cups',
    power: '1.5 HP / 415 V',
    accuracy: '100% Press Fit Alignment',
    image: './images/products/measuring-cup-placement.jpg',
    compliance: 'cGMP Oral Liquid Line Integration',
    highlights: [
      'Oriented cup feeding via rotary centrifugal bowl',
      'Overhead pressing belt or rotary plungers ensure firm placement without bottle cocking',
      'Optical sensor detects missing cup and signals downstream rejection'
    ],
    specs: {
      'Speed': 'Up to 150 bottles/min',
      'Cup Compatibility': '5ml, 10ml, 15ml, 20ml pharmaceutical dosage cups',
      'Conveyor Length': '6 to 8 feet customized'
    },
    seoKeywords: 'measuring cup placement machine, syrup bottle cup applicator, pharma packaging equipment'
  },

  // --- DIAGNOSTICS & VTM ---
  {
    id: 'vtm-tube-filling-capping',
    featured: true,
    category: 'diagnostics',
    name: 'Automatic VTM Tube Filling & Capping Machine',
    model: 'AC-VTM-80',
    tagline: 'Engineered for Viral Transport Medium (COVID/Flu) diagnostic tube filling and airtight screw capping',
    speed: '40 to 80 Tubes/min',
    range: '1ml to 10ml Reagent Fill in 5ml/10ml/15ml Tubes',
    power: '2.5 HP / 230-415 V',
    accuracy: '± 0.2ml Ceramic / Peristaltic Pump',
    image: './images/products/vtm-tube-filling-capping.jpg',
    compliance: 'ISO 13485 / IVD Diagnostic Class',
    highlights: [
      'Designed specifically for conical and self-standing diagnostic test tubes',
      'Dual diving nozzles for precise micro-dispensing without droplet splatter',
      'Automatic cap elevator with precise servo torquing to avoid reagent leakage',
      'Compact monoblock footprint saves high-grade cleanroom space'
    ],
    specs: {
      'Filling Volume': '1.0 ml to 5.0 ml (Custom up to 15ml)',
      'Tube Types': 'Cryovials, Falcon conical tubes, 16x100mm VTM tubes',
      'Torque Control': 'Digital torque feedback with missing cap sensor',
      'Speed': '40 - 80 tubes/min (Higher speed dual monoblock available)'
    },
    seoKeywords: 'VTM tube filling and capping machine, viral transport medium packaging machine, IVD diagnostic packaging line India'
  },
  {
    id: 'vtm-tube-labelling',
    featured: false,
    category: 'diagnostics',
    name: 'Automatic High-Speed VTM & Cryovial Labelling Machine',
    model: 'AC-VTM-LBL',
    tagline: 'Micro-diameter container wrap-around sticker labelling with barcode & batch verification',
    speed: '60 to 150 Tubes/min',
    range: '10mm to 25mm Diameter Tubes',
    power: '1.5 HP / 230 V Single Phase',
    accuracy: '± 0.5 mm label positioning',
    image: './images/products/vtm-tube-labelling.jpg',
    compliance: 'cGMP / Track & Trace Ready',
    highlights: [
      'Vertical or inclined roller trunnion system ensures zero label skew on small tubes',
      'Integrated TIJ / CIJ inkjet or laser barcode printer',
      '2D DataMatrix code inspection with motorized reject gate for unreadable barcodes'
    ],
    specs: {
      'Tube Diameters': '10mm to 25mm',
      'Label Height': '15mm to 80mm',
      'Print Verification': 'Cognex / Keyence Camera integration optional',
      'Rejection': 'Pneumatic air blow rejector'
    },
    seoKeywords: 'VTM tube labelling machine, cryovial sticker labelling machine, diagnostic tube labeler'
  },
  {
    id: 'pfs-dental-cartridge-labelling',
    featured: false,
    category: 'diagnostics',
    name: 'Prefilled Syringe (PFS) & Dental Cartridge Labelling Machine',
    model: 'AC-PFS-150',
    tagline: 'Horizontal roller conveyor labelling for delicate glass syringes, ampoules and dental cartridges',
    speed: '80 to 200 Units/min',
    range: '0.5ml to 20ml Prefilled Syringes & 1.8ml Dental Cartridges',
    power: '2.0 HP / 230 V',
    accuracy: '± 0.4 mm',
    image: './images/products/pfs-dental-cartridge-labelling.jpg',
    compliance: 'Sterile Injectable Safety Standards',
    highlights: [
      'Specialized horizontal cradle rollers prevent glass breakage and plunger movement',
      'Gentle infeed screw or star wheel eliminates shock impact',
      'Label overlap inspection and tamper-evident flag / wrap options',
      'Vision camera inspection for needle shield presence'
    ],
    specs: {
      'Syringe Sizes': '0.5ml, 1ml, 2.25ml, 5ml, 10ml, 20ml PFS',
      'Cartridge Sizes': '1.8ml & 3.0ml Dental cartridges',
      'Labeling Speed': 'Up to 200 pieces/min',
      'Dispensing Drive': 'Micro-stepping servo label dispenser'
    },
    seoKeywords: 'prefilled syringe labelling machine, PFS labeler, dental cartridge labelling machine manufacturer'
  },

  // --- AUTOMATIC LABELLING ---
  {
    id: 'vial-labelling-ocv-ocr',
    featured: true,
    category: 'labelling',
    name: 'Automatic High-Speed Vial Labelling Machine with OCV / OCR',
    model: 'AC-VSL-200',
    tagline: 'Ultra-precision high-speed wrap-around labeler with integrated optical character validation',
    speed: '120 to 250 Vials/min',
    range: '2ml to 100ml Vials & Ampoules',
    power: '2.2 HP / 230-415 V',
    accuracy: '± 0.5 mm positioning',
    image: './images/products/vial-labelling-ocv-ocr.jpg',
    compliance: '21 CFR Part 11 Audit Trail Compliant',
    highlights: [
      'Continuous star wheel transfer with servo-driven dispensing engine',
      'Vision camera inspects Batch No, Exp Date, MRP, and 2D Barcode in real-time',
      'High-speed pneumatic flipper or air-jet reject station for defective labels',
      'Zero label loss during reel changes with dual reel unwind option'
    ],
    specs: {
      'Production Speed': 'Up to 250 vials/min',
      'Vial Diameters': '15mm to 50mm',
      'Label Roll Diameter': 'Max 300mm with 76mm core',
      'Camera System': 'High-resolution industrial sensor with AI OCR neural engine',
      'Data Logging': 'Exportable audit reports via USB/Ethernet'
    },
    seoKeywords: 'vial labelling machine OCV OCR, vision inspection sticker labeler, high speed vial labeler Ahmedabad'
  },
  {
    id: 'ampoule-vial-labelling-rotary',
    featured: false,
    category: 'labelling',
    name: 'Rotary Ampoule & Vial Sticker Labelling Machine',
    model: 'AC-AVL-300',
    tagline: 'High-speed rotary carousel labelling for 1ml - 20ml ampoules and small vials',
    speed: '150 to 300 Containers/min',
    range: '1ml to 20ml Ampoules & Vials',
    power: '3.0 HP / 415 V',
    accuracy: '± 0.3 mm precision wrap',
    image: './images/products/ampoule-vial-labelling.jpg',
    compliance: 'cGMP / Export Grade',
    highlights: [
      'Rotary pocket star wheel eliminates container friction and scuffing',
      'Wrap-around belt synchronization prevents wrinkles or air pockets',
      'Equipped with safety acrylic cabinet with electrical interlocking doors',
      'Dual-feed magazine option for seamless continuous 24/7 production'
    ],
    specs: {
      'Output': 'Up to 300 units/min',
      'Applicable Products': 'Glass ampoules (1-20ml), Tubular vials (2-30ml)',
      'Label Length': '15mm to 90mm',
      'Power': '415V 3-Phase + Neutral'
    },
    seoKeywords: 'rotary ampoule labelling machine, high speed ampoule labeler, vial sticker labelling'
  },
  {
    id: 'double-side-bottle-labelling',
    featured: false,
    category: 'labelling',
    name: 'Automatic Double-Side (Front & Back) Labelling Machine',
    model: 'AC-DSL-120',
    tagline: 'Simultaneous front, back or wraparound application for flat, oval & square bottles',
    speed: '60 to 120 Bottles/min',
    range: '50ml to 5000ml Flat / Oval / Round Containers',
    power: '2.5 HP / 415 V',
    accuracy: '± 0.75 mm',
    image: './images/products/double-side-bottle-labelling.jpg',
    compliance: 'cGMP Stainless Steel Construction',
    highlights: [
      'Twin synchronized servo label dispensing heads for front & back placement',
      'Top hold-down belt stabilizing conveyor prevents bottle tilt or shaking during label release',
      'Bottle orientation alignment rollers for curved and oval pharmaceutical bottles',
      'Independent angle and height micro-adjusters for quick bottle changeover'
    ],
    specs: {
      'Container Types': 'Square, Oval, Flat, Rectangular & Round bottles',
      'Output': 'Up to 120 bottles/min',
      'Label Height': '20mm to 180mm',
      'Conveyor Belt': 'SS 304 slat chain or high-friction polymer'
    },
    seoKeywords: 'double side labelling machine, front and back bottle labeler, oval bottle sticker labelling machine'
  },
  {
    id: 'wrap-around-bottle-labelling',
    featured: false,
    category: 'labelling',
    name: 'Automatic Wrap-Around Bottle Sticker Labelling Machine',
    model: 'AC-WRL-120',
    tagline: 'Reliable high-accuracy body sticker labelling for round pharmaceutical & syrup bottles',
    speed: '60 to 150 Bottles/min',
    range: '30ml to 1000ml Round Containers',
    power: '1.5 HP / 230-415 V',
    accuracy: '± 0.5 mm',
    image: './images/products/wrap-around-bottle-labelling.jpg',
    compliance: 'cGMP Pharmaceutical Standard',
    highlights: [
      'Synchronized wrap-around belt ensures bubble-free 100% circumferential wrap',
      'Variable speed control with stepper/servo label dispenser',
      'No Bottle - No Label dispensing logic saves label roll stock',
      'Batch code overprinting station with hot foil or thermal inkjet'
    ],
    specs: {
      'Output Speed': 'Up to 150 BPM',
      'Bottle Diameter': '20mm to 100mm',
      'Label Length': '20mm to 250mm',
      'Construction': 'Matt finished SS 304 structure'
    },
    seoKeywords: 'wrap around bottle labelling machine, round bottle labeler, pharmaceutical sticker labelling machine'
  }
];
