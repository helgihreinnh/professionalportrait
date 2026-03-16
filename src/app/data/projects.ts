export interface ProjectData {
  id: string;
  number: string;
  client: string;
  title: string;
  subtitle: string;
  year: string;
  outcome: string;
  tags: string[];
  accentColor: string;
  heroImage: string;
  
  // Content sections
  brief: {
    challenge: string;
    context: string;
  };
  
  approach: {
    title: string;
    description: string;
    methods: Array<{
      name: string;
      description: string;
    }>;
  };
  
  insights: Array<{
    title: string;
    description: string;
    stat?: string;
  }>;
  
  solution: {
    description: string;
    interventions: Array<{
      title: string;
      description: string;
    }>;
  };
  
  impact: Array<{
    metric: string;
    value: string;
    description: string;
  }>;
  
  gallery: string[];
  
  quote?: {
    text: string;
    author: string;
    role: string;
  };
  
  relatedProjects?: string[];
}

export const projects: Record<string, ProjectData> = {
  "lego-billund": {
    id: "lego-billund",
    number: "01",
    client: "LEGO",
    title: "Billund Headquarters",
    subtitle: "Redesigning collaboration through behavioral architecture",
    year: "2024",
    outcome: "+40% Collab",
    tags: ["Workplace Strategy", "Behavioral Mapping", "Space Analytics"],
    accentColor: "#D5DEF4",
    heroImage: "https://images.unsplash.com/photo-1771908997889-6d043c4a9ef7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHN0dWRpbyUyMHdvcmtzcGFjZSUyMGRyYW1hdGljJTIwbGlnaHRpbmd8ZW58MXx8fHwxNzczMTQ0MDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    
    brief: {
      challenge: "LEGO's Billund headquarters needed to foster more spontaneous collaboration and cross-team interaction while maintaining focus areas for deep work. The existing layout created silos between departments.",
      context: "With over 2,000 employees across multiple buildings, LEGO sought to create a workplace that embodied their creative culture while supporting diverse work modes—from collaborative play to concentrated design work.",
    },
    
    approach: {
      title: "Evidence-Based Spatial Strategy",
      description: "We combined behavioral observation, movement tracking, and participatory design workshops to understand how people actually work—not how we assume they work.",
      methods: [
        {
          name: "Behavioral Mapping",
          description: "Two weeks of systematic observation capturing movement patterns, collision points, and informal gathering behaviors across 12 floors.",
        },
        {
          name: "Digital Shadow Data",
          description: "Analysis of badge swipe data and calendar patterns to identify collaboration networks and team interaction frequencies.",
        },
        {
          name: "Co-Design Workshops",
          description: "Participatory sessions with 40+ employees from different departments to prototype spatial interventions and test behavioral hypotheses.",
        },
      ],
    },
    
    insights: [
      {
        title: "Collision Deficit",
        description: "Teams working on related projects had a 68% lower chance of spontaneous interaction due to floor separation and vertical circulation patterns.",
        stat: "68% deficit",
      },
      {
        title: "The Kitchen Effect",
        description: "82% of cross-departmental conversations happened in or near kitchen areas, but these spaces were undersized and lacked stay-awhile affordances.",
        stat: "82% of cross-team talk",
      },
      {
        title: "Focus Paradox",
        description: "Employees moved to collaboration zones not for collaboration, but for focus work—indicating a need for diverse focus typologies.",
      },
    ],
    
    solution: {
      description: "We redesigned circulation, zoning, and spatial activation to create a gradient from high-energy collaborative zones to deep-focus sanctuaries—with intentional friction points for serendipitous encounters.",
      interventions: [
        {
          title: "Vertical Neighborhoods",
          description: "Reconfigured stairwell placement and created cross-floor visual connections to increase inter-floor movement by 240% and create 'vertical neighborhoods' connecting related teams.",
        },
        {
          title: "Magnetized Hubs",
          description: "Enlarged kitchen areas into multi-functional social hubs with varied seating typologies (high-energy collaboration, casual lounging, focus nooks) and strategic placement to intercept natural flow.",
        },
        {
          title: "Focus Spectrum",
          description: "Created a legible gradient of work zones from 'buzz' to 'library' with clear behavioral cues (lighting, materials, acoustic treatments) so people can self-select appropriate environments.",
        },
      ],
    },
    
    impact: [
      {
        metric: "Cross-Team Collaboration",
        value: "+40%",
        description: "Measured increase in spontaneous cross-departmental interactions through post-occupancy observation",
      },
      {
        metric: "Space Utilization",
        value: "87%",
        description: "Average utilization across all zones, compared to 62% pre-intervention",
      },
      {
        metric: "Employee Satisfaction",
        value: "+28%",
        description: "Improvement in workplace satisfaction scores related to 'finding the right space for the task'",
      },
    ],
    
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600",
      "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1600",
    ],
    
    quote: {
      text: "USER_ didn't just design a space—they designed behaviors. The data-driven approach meant we could make decisions based on evidence, not assumptions.",
      author: "Lars Nielsen",
      role: "Workplace Director, LEGO Group",
    },
    
    relatedProjects: ["novo-nordisk", "maersk"],
  },
  
  "novo-nordisk": {
    id: "novo-nordisk",
    number: "02",
    client: "Novo Nordisk",
    title: "Innovation Campus",
    subtitle: "Creating environments that accelerate pharmaceutical breakthroughs",
    year: "2024",
    outcome: "Evidence-Based",
    tags: ["Research Spaces", "Innovation Design", "Behavioral Science"],
    accentColor: "#DCE8E6",
    heroImage: "https://images.unsplash.com/photo-1573306366674-5d42fa734860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBvZmZpY2UlMjBpbnRlcmlvciUyMHBlb3BsZSUyMHdvcmtpbmclMjBDb3BlbmhhZ2VuJTIwbWluaW1hbHxlbnwxfHx8fDE3NzMxNDQwNDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    
    brief: {
      challenge: "Novo Nordisk needed to design their new Innovation Campus to support breakthrough thinking while maintaining the rigorous focus required for pharmaceutical research. How do you balance creative chaos with scientific precision?",
      context: "The campus would house 600+ researchers across drug discovery, clinical development, and data science—disciplines that require different environmental conditions but benefit from cross-pollination.",
    },
    
    approach: {
      title: "Research-Informed Design",
      description: "We conducted a meta-analysis of spatial cognition research and ran controlled experiments to understand which environmental factors genuinely impact innovation vs. those that just feel innovative.",
      methods: [
        {
          name: "Literature Meta-Analysis",
          description: "Systematic review of 140+ peer-reviewed studies on environmental psychology, cognitive load, and innovation spaces.",
        },
        {
          name: "Field Experiments",
          description: "Controlled studies in their existing facilities measuring creative output under different spatial configurations and environmental variables.",
        },
        {
          name: "Expert Ethnography",
          description: "Deep shadowing of 25 researchers across disciplines to understand workflow patterns, interruption tolerance, and collaboration triggers.",
        },
      ],
    },
    
    insights: [
      {
        title: "Visibility Paradox",
        description: "Open, visible spaces increased casual interaction but decreased risk-taking and experimental thinking—researchers self-censored.",
      },
      {
        title: "Proximity ≠ Collaboration",
        description: "Simply placing teams near each other didn't increase meaningful collaboration. Shared resources and compelling reasons to collide did.",
        stat: "3.2x more effective",
      },
      {
        title: "Environmental Variety",
        description: "Researchers who changed environments 3+ times per day showed 26% more creative connections in idea generation tasks.",
        stat: "+26% creativity",
      },
    ],
    
    solution: {
      description: "We created 'innovation gradients'—sequences of spaces that support the full arc of innovation from wild brainstorming to rigorous validation, with environmental cues that signal behavioral norms.",
      interventions: [
        {
          title: "Sheltered Experimentation",
          description: "Semi-enclosed 'innovation pods' with high visibility but acoustic privacy where teams can experiment freely without fear of judgment from the broader organization.",
        },
        {
          title: "Strategic Resource Anchors",
          description: "Placed high-value shared resources (specialized equipment, data visualization walls, model shop) at the intersection of different disciplines to create purpose-driven collisions.",
        },
        {
          title: "Environmental Variety System",
          description: "Designed a palette of 12 distinct environmental typologies (from sensory-rich to minimal) easily accessible to all researchers to support cognitive variety and prevent adaptation.",
        },
      ],
    },
    
    impact: [
      {
        metric: "Cross-Discipline Projects",
        value: "+52%",
        description: "Increase in projects involving researchers from 2+ disciplines",
      },
      {
        metric: "Patent Applications",
        value: "+18%",
        description: "Year-over-year increase in patent applications filed from the campus",
      },
      {
        metric: "Researcher Satisfaction",
        value: "4.6/5",
        description: "Average rating for 'environment supports my best thinking'",
      },
    ],
    
    gallery: [
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1600",
      "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?w=1600",
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1600",
    ],
    
    quote: {
      text: "The campus design is grounded in real science, not design trends. That evidence-based approach gave us confidence to try unconventional solutions.",
      author: "Dr. Maria Sørensen",
      role: "Head of Research Infrastructure, Novo Nordisk",
    },
    
    relatedProjects: ["lego-billund", "aec-hackathon"],
  },
  
  "maersk": {
    id: "maersk",
    number: "03",
    client: "MAERSK",
    title: "Global Workplace Strategy",
    subtitle: "Cross-cultural behavioral design for a distributed organization",
    year: "2023",
    outcome: "Cross-Cultural",
    tags: ["Global Strategy", "Cultural Adaptation", "Change Management"],
    accentColor: "#B8C9EE",
    heroImage: "https://images.unsplash.com/photo-1770944182416-911214039dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWVyc2slMjBzaGlwcGluZyUyMGluZHVzdHJpYWwlMjBkcmFtYXRpYyUyMHdpZGV8ZW58MXx8fHwxNzczMTQ0MDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    
    brief: {
      challenge: "MAERSK needed a global workplace standard that could be adapted across 130 countries while maintaining a cohesive culture. The challenge: create consistency without erasing cultural context.",
      context: "With offices ranging from Singapore to São Paulo, MAERSK struggled with a one-size-fits-all approach that failed to account for regional work styles, cultural norms around hierarchy, and different relationships to time and space.",
    },
    
    approach: {
      title: "Culturally Adaptive Framework",
      description: "Rather than imposing a single workplace model, we created a flexible system of principles and interventions that could be localized based on cultural dimensions.",
      methods: [
        {
          name: "Cross-Cultural Behavioral Audits",
          description: "On-site behavioral observation and interviews across 8 representative offices (Copenhagen, Singapore, Mumbai, São Paulo, Dubai, Rotterdam, Shanghai, Lagos) to identify cultural patterns.",
        },
        {
          name: "Hofstede Mapping",
          description: "Applied cultural dimensions framework (power distance, individualism, uncertainty avoidance) to understand how workplace behaviors vary by culture.",
        },
        {
          name: "Participatory Localization",
          description: "Co-design sessions in each region to adapt the global framework to local norms and preferences.",
        },
      ],
    },
    
    insights: [
      {
        title: "Hierarchy Manifests Spatially",
        description: "In high power-distance cultures, open-plan designs created anxiety and reduced information sharing. Private offices signaled approachability of leadership.",
      },
      {
        title: "The Lunch Culture Divide",
        description: "Break room strategies that worked in Copenhagen (casual, prolonged) failed in Singapore (efficient, transactional). Food's role varies by culture.",
        stat: "47 min vs. 18 min",
      },
      {
        title: "Personalization Spectrum",
      description: "Tolerance for desk personalization varied 10x between individualist cultures (Denmark: heavy personalization) and collectivist cultures (Japan: minimal).",
        stat: "10x variance",
      },
    ],
    
    solution: {
      description: "We created a 'Design Constitution'—a set of behavioral principles with multiple implementation pathways. Each region selects interventions that align with local culture while achieving the same organizational goals.",
      interventions: [
        {
          title: "Principle-Based Flexibility",
          description: "Instead of mandating open offices, we mandated outcomes like 'increase cross-functional visibility by 30%' and provided 5 culturally-adapted solutions (open plan, glass walls, scheduled rotations, digital dashboards, etc.).",
        },
        {
          title: "Cultural Adaptation Toolkit",
          description: "A decision-making framework that maps spatial interventions to cultural dimensions, helping local teams choose what will actually work in their context.",
        },
        {
          title: "Global Behavioral Metrics",
          description: "Standardized measurement of behavioral outcomes (collaboration frequency, information flow, innovation rate) so different spatial solutions can be compared on impact, not aesthetics.",
        },
      ],
    },
    
    impact: [
      {
        metric: "Global Adoption",
        value: "94%",
        description: "Of regional offices successfully implemented localized versions of the workplace strategy",
      },
      {
        metric: "Cross-Regional Collaboration",
        value: "+35%",
        description: "Increase in projects involving teams from 2+ regions",
      },
      {
        metric: "Cost Efficiency",
        value: "-22%",
        description: "Reduction in workplace costs through optimized space utilization",
      },
    ],
    
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600",
    ],
    
    quote: {
      text: "USER_ understood that culture isn't decoration—it's the operating system. They gave us a framework that respects diversity while building coherence.",
      author: "Thomas Jakobsen",
      role: "Global Head of Workplace, MAERSK",
    },
    
    relatedProjects: ["lego-billund"],
  },
  
  "aec-hackathon": {
    id: "aec-hackathon",
    number: "04",
    client: "AEC Hackathon",
    title: "Behavioral Prediction Tool",
    subtitle: "ML-powered spatial design that predicts human behavior",
    year: "2024",
    outcome: "🏆 Best Overall",
    tags: ["PropTech", "Machine Learning", "Predictive Analytics"],
    accentColor: "#C5D5EC",
    heroImage: "https://images.unsplash.com/photo-1739054730201-4b6463484e3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYmx1ZXByaW50JTIwZGF0YSUyMHZpc3VhbGl6YXRpb24lMjBkYXJrJTIwYmx1ZSUyMHRlY2h8ZW58MXx8fHwxNzczMTQ0MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    
    brief: {
      challenge: "48-hour hackathon challenge: Create a tool that helps architects and developers predict how people will actually use spaces before construction begins. Current methods rely on intuition and past precedent.",
      context: "The AEC (Architecture, Engineering, Construction) industry wastes billions on spaces that don't work because we design for imagined behaviors, not real ones. Can we predict behavioral outcomes from floor plans?",
    },
    
    approach: {
      title: "Rapid ML Prototyping",
      description: "Built a neural network trained on behavioral mapping data from 40+ real buildings that predicts movement patterns, dwell time, and interaction likelihood from architectural drawings.",
      methods: [
        {
          name: "Training Data Compilation",
          description: "Aggregated behavioral observation data from previous USER_ projects covering 200,000+ hours of observed human behavior across diverse building types.",
        },
        {
          name: "Spatial Feature Extraction",
          description: "Converted floor plans into machine-readable features (sight lines, path options, spatial affordances, proximity patterns, environmental qualities) using computer vision.",
        },
        {
          name: "Predictive Model",
          description: "Trained a convolutional neural network to predict heat maps of likely movement, dwell zones, and collision points with 76% accuracy on test data.",
        },
      ],
    },
    
    insights: [
      {
        title: "Corners Are Magnetic",
        description: "Model revealed that corners with 270° visibility consistently attracted 3.2x more dwell time than other positions—designers should consciously place corners.",
        stat: "3.2x dwell time",
      },
      {
        title: "The Path Less Taken",
        description: "When given 3+ path options, people choose the least-direct route 40% of the time if it offers better views or environmental qualities. Shortest path ≠ chosen path.",
        stat: "40% scenic route",
      },
      {
        title: "Density Tipping Point",
        description: "Collaboration spaces show sharp decline in use when within 15m of areas that exceed 0.8 people/m². Proximity to density is a collaboration killer.",
        stat: "15m buffer needed",
      },
    ],
    
    solution: {
      description: "Created a web-based tool where architects upload floor plans and receive real-time behavioral predictions visualized as heat maps, movement flows, and risk zones—with design recommendations.",
      interventions: [
        {
          title: "Behavioral Heat Mapping",
          description: "Visual overlay showing predicted movement density, dwell zones, and dead spaces so designers can identify problem areas before construction.",
        },
        {
          title: "Intervention Suggestions",
          description: "AI-generated recommendations for spatial modifications to achieve desired behavioral outcomes (e.g., 'Moving the entrance 4m east will increase lobby dwell time by 34%').",
        },
        {
          title: "Scenario Comparison",
          description: "Test multiple floor plan iterations side-by-side to see behavioral impact of design changes, enabling evidence-based design decisions.",
        },
      ],
    },
    
    impact: [
      {
        metric: "Hackathon Award",
        value: "🏆 Best Overall",
        description: "Selected as top project out of 42 teams from 12 countries",
      },
      {
        metric: "Prediction Accuracy",
        value: "76%",
        description: "Accuracy on held-out test data for predicting movement patterns",
      },
      {
        metric: "Industry Interest",
        value: "12 firms",
        description: "Architecture and development firms expressing interest in pilot programs",
      },
    ],
    
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600",
    ],
    
    quote: {
      text: "This is the future of evidence-based design. Instead of guessing how people will use a space, we can predict it. Game-changing.",
      author: "Sarah Mitchell",
      role: "AEC Hackathon Judge & Partner at Gensler",
    },
    
    relatedProjects: ["novo-nordisk"],
  },
};
