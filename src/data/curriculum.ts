export type Lesson = {
  title: string;
  objective: string;
  safetyWarnings: string[];
};

export type Module = {
  title: string;
  lessons: Lesson[];
  practicalChecklist: string[];
  quiz: string[];
};

export type Course = {
  id: string;
  title: string;
  track: 'plumbing' | 'electrical' | 'hvac' | 'datacenter' | 'facilities';
  level: 'foundation' | 'intermediate' | 'specialist';
  summary: string;
  requiredTools: string[];
  modules: Module[];
  skillMapping: string[];
  certificationMapping: string[];
};

const moduleSet = (domain: string, focus: string): Module[] => [
  {
    title: `${domain} safety and site readiness`,
    lessons: [
      { title: 'Hazard recognition', objective: `Identify common ${focus} hazards before work begins.`, safetyWarnings: ['Stop work when hazards are uncontrolled.', 'Use qualified supervision for regulated work.'] },
      { title: 'PPE and tool staging', objective: 'Select PPE, stage tools, and protect the work area.', safetyWarnings: ['Inspect PPE before use.', 'Keep wet areas clear of electrical tools.'] },
      { title: 'Documentation habits', objective: 'Capture before photos, readings, notes, and customer or supervisor approvals.', safetyWarnings: ['Do not record private data unrelated to the work.'] },
    ],
    practicalChecklist: ['Complete job hazard analysis', 'Select PPE', 'Stage tools', 'Document before condition'],
    quiz: ['What makes a task safety critical?', 'When should work be escalated?', 'Why document before conditions?'],
  },
  {
    title: `${domain} systems and equipment`,
    lessons: [
      { title: 'System components', objective: `Recognize core ${focus} components and their purpose.`, safetyWarnings: ['Do not alter equipment outside your authorization.'] },
      { title: 'Failure modes', objective: 'Connect symptoms to common failure patterns.', safetyWarnings: ['Protect people and property before testing.'] },
      { title: 'Tools and measurements', objective: 'Use basic measurement tools to support diagnosis.', safetyWarnings: ['Verify tool condition and rating.'] },
    ],
    practicalChecklist: ['Identify components', 'Map symptoms', 'Take a measurement', 'Explain failure safety concern'],
    quiz: ['What component failed?', 'Which tool verifies the symptom?', 'What safety concern must be controlled first?'],
  },
  {
    title: `${domain} diagnostics workflow`,
    lessons: [
      { title: 'Intake and evidence', objective: 'Gather history, photos, readings, and constraints.', safetyWarnings: ['Avoid tests that can worsen damage.'] },
      { title: 'Step-by-step diagnosis', objective: 'Use least-invasive tests before repair guidance.', safetyWarnings: ['Stop for electrical, pressure, contamination, or uptime safety concerns.'] },
      { title: 'Repair flow planning', objective: 'Build a repair flow with tools, parts, safety concerns, and final tests.', safetyWarnings: ['Confirm authorization before work.'] },
    ],
    practicalChecklist: ['Gather evidence', 'Run controlled test', 'Build repair flow', 'Perform final verification'],
    quiz: ['Why test one variable at a time?', 'What makes evidence useful?', 'What belongs in a repair flow?'],
  },
  {
    title: `${domain} certification signoff`,
    lessons: [
      { title: 'Practical assessment', objective: 'Prepare for hands-on checkoff and instructor review.', safetyWarnings: ['Training checkoffs do not replace licensing.'] },
      { title: 'Customer and team communication', objective: 'Explain findings, safety concerns, options, and next steps clearly.', safetyWarnings: ['Do not overstate certainty or credentials.'] },
      { title: 'Final testing and closeout', objective: 'Verify work, clean the area, and complete documentation.', safetyWarnings: ['Do not leave unsafe systems operating.'] },
    ],
    practicalChecklist: ['Complete hands-on checkoff', 'Pass quiz', 'Explain findings', 'Submit final documentation'],
    quiz: ['What does certification validate?', 'What remains outside training scope?', 'How is final quality verified?'],
  },
];

export const courses: Course[] = [
  {
    id: 'plumbing-foundations',
    title: 'Plumbing Foundations',
    track: 'plumbing',
    level: 'foundation',
    summary: 'Safety, tools, water supply, drainage, materials, code awareness, and field habits.',
    requiredTools: ['PPE kit', 'Pipe wrench', 'Tubing cutter', 'Pressure gauge'],
    modules: moduleSet('Plumbing', 'water, drainage, pressure, and fixtures'),
    skillMapping: ['PPE', 'Tool control', 'Pipe identification', 'Fixture isolation'],
    certificationMapping: ['Infrastructure Foundations', 'Plumbing Foundations Certificate'],
  },
  {
    id: 'residential-plumbing',
    title: 'Residential Plumbing',
    track: 'plumbing',
    level: 'intermediate',
    summary: 'Residential service workflow, fixture repair, leak diagnosis, customer communication, and callback prevention.',
    requiredTools: ['Hand tool kit', 'Moisture meter', 'Pressure gauge', 'Fixture repair kit'],
    modules: moduleSet('Residential plumbing', 'fixtures, leaks, shutoffs, and service calls'),
    skillMapping: ['Leak diagnosis', 'Toilet rebuild', 'Faucet service', 'Customer briefing'],
    certificationMapping: ['Residential Plumbing Technician'],
  },
  {
    id: 'drain-cleaning',
    title: 'Drain Cleaning',
    track: 'plumbing',
    level: 'intermediate',
    summary: 'Drain safety, cable machine setup, blockage diagnosis, flow testing, and sanitary closeout.',
    requiredTools: ['Cable gloves', 'Drain machine', 'GFCI cord', 'Cleanout tools'],
    modules: moduleSet('Drain cleaning', 'drainage, stoppages, cleanouts, and wastewater exposure'),
    skillMapping: ['Cable safety', 'Access selection', 'Flow verification', 'Sanitation'],
    certificationMapping: ['Drain & Sewer Specialist'],
  },
  {
    id: 'electrical-foundations',
    title: 'Electrical Foundations',
    track: 'electrical',
    level: 'foundation',
    summary: 'Electrical safety, basic circuits, lockout awareness, panels, meters, and documentation.',
    requiredTools: ['PPE kit', 'Multimeter', 'Lockout tagout kit', 'Panel schedule'],
    modules: moduleSet('Electrical', 'circuits, panels, meters, and electrical hazards'),
    skillMapping: ['Electrical hazard recognition', 'Meter basics', 'LOTO awareness', 'Panel documentation'],
    certificationMapping: ['Electrical Foundations Certificate'],
  },
  {
    id: 'commercial-electrical',
    title: 'Commercial Electrical',
    track: 'electrical',
    level: 'intermediate',
    summary: 'Commercial distribution, load mapping, thermal inspection, critical circuits, and work planning.',
    requiredTools: ['Clamp meter', 'Thermal camera', 'Panel schedule', 'Lockout kit'],
    modules: moduleSet('Commercial electrical', 'distribution, load mapping, and commercial power systems'),
    skillMapping: ['Load mapping', 'Thermal scan', 'Circuit tracing', 'Work authorization'],
    certificationMapping: ['Commercial Electrical Readiness'],
  },
  {
    id: 'hvac-cooling-systems',
    title: 'HVAC Cooling Systems',
    track: 'hvac',
    level: 'intermediate',
    summary: 'Cooling fundamentals, airflow, coils, filtration, hydronics, thermal baselines, and maintenance workflows.',
    requiredTools: ['Thermal camera', 'Anemometer', 'Temperature probes', 'Filter gauge'],
    modules: moduleSet('HVAC cooling', 'airflow, thermal management, coils, pumps, and controls'),
    skillMapping: ['Thermal baseline', 'Airflow measurement', 'Filter inspection', 'Cooling failure triage'],
    certificationMapping: ['Cooling Systems Technician'],
  },
  {
    id: 'datacenter-cooling-basics',
    title: 'Datacenter Cooling Basics',
    track: 'datacenter',
    level: 'specialist',
    summary: 'AI infrastructure systems, chilled water, pumps, redundancy, uptime, emergency response, and facilities operations.',
    requiredTools: ['BMS dashboard', 'Thermal camera', 'Runbook', 'Differential pressure gauge'],
    modules: moduleSet('AI Infrastructure Systems', 'datacenter cooling, redundancy, uptime, and emergency response'),
    skillMapping: ['Thermal management', 'Chilled water', 'Redundancy audit', 'Emergency response'],
    certificationMapping: ['AI Infrastructure Systems Certificate', 'Datacenter Cooling Operator'],
  },
  {
    id: 'facilities-maintenance-fundamentals',
    title: 'Facilities Maintenance Fundamentals',
    track: 'facilities',
    level: 'foundation',
    summary: 'Preventive maintenance, work orders, asset tagging, vendor coordination, and building systems readiness.',
    requiredTools: ['CMMS', 'Asset tags', 'Inspection checklist', 'Basic tool kit'],
    modules: moduleSet('Facilities maintenance', 'building systems, work orders, assets, and preventive maintenance'),
    skillMapping: ['Asset triage', 'Preventive maintenance', 'Work orders', 'Vendor handoff'],
    certificationMapping: ['Facilities Maintenance Foundations'],
  },
];

export const certifications = [
  'Infrastructure Foundations',
  'Plumbing Foundations Certificate',
  'Residential Plumbing Technician',
  'Drain & Sewer Specialist',
  'Electrical Foundations Certificate',
  'Commercial Electrical Readiness',
  'Cooling Systems Technician',
  'AI Infrastructure Systems Certificate',
  'Datacenter Cooling Operator',
  'Facilities Maintenance Foundations',
];

export const skillGroups = ['Safety', 'Tools', 'Plumbing', 'Electrical', 'HVAC/cooling', 'Datacenter', 'Facilities', 'Diagnostics', 'Customer communication', 'Business operations'];

export const aiLearningTools = [
  'Manual summarizer',
  'Quiz generator',
  'Skill-gap recommender',
  'Photo-based equipment identification',
  'Procedure retrieval',
  'Safety warning prompts',
  'Practice diagnostic flow builder',
];

export const businessFramework = [
  'Contractor onboarding packages',
  'Apprentice pipeline',
  'Employer partnerships',
  'Paid cohorts',
  'Membership model',
  'Continuing education',
  'Vendor sponsored labs',
  'Safety compliance training',
];
