// Sample data for the Local SEO Dashboard

// Generate sample competitor data for a law firm industry
export const sampleCompetitors = [
  {
    id: 1,
    name: "Smith & Associates Law Firm",
    position: 1,
    rating: 4.8,
    reviewCount: 127,
    services: ["Personal Injury", "Car Accidents", "Truck Accidents", "Motorcycle Accidents", "Slip and Fall", "Wrongful Death", "Medical Malpractice", "Brain Injuries"],
    updateFrequency: "Weekly",
    lastUpdate: "2023-03-15",
    badges: ["Veteran Owned", "24/7 Support", "Free Consultation"],
    attributes: ["Woman owned", "ADA Compliant", "Wheelchair accessible"],
    topKeywords: ["Boston personal injury lawyer", "Massachusetts car accident attorney", "slip and fall compensation"],
    photos: 42,
    posts: 18,
    qAndA: 24,
    reviewVelocity: 7,
    positionHistory: [1, 1, 2, 3, 2, 1, 1, 1],
    caseResults: [
      { type: "Car Accident", amount: "$2.1 Million" },
      { type: "Medical Malpractice", amount: "$3.5 Million" },
      { type: "Slip and Fall", amount: "$950,000" },
    ]
  },
  {
    id: 2,
    name: "Johnson Law Group",
    position: 2,
    rating: 4.6,
    reviewCount: 98,
    services: ["Personal Injury", "Car Accidents", "Truck Accidents", "Slip and Fall", "Nursing Home Abuse", "Workers' Compensation"],
    updateFrequency: "Bi-weekly",
    lastUpdate: "2023-03-05",
    badges: ["Free Consultation", "No Win No Fee"],
    attributes: ["Multilingual staff", "Wheelchair accessible"],
    topKeywords: ["Boston injury attorney", "Massachusetts truck accident lawyer", "workers compensation claim"],
    photos: 38,
    posts: 12,
    qAndA: 16,
    reviewVelocity: 5,
    positionHistory: [4, 3, 3, 2, 2, 2, 2, 2],
    caseResults: [
      { type: "Truck Accident", amount: "$1.8 Million" },
      { type: "Workers' Comp", amount: "$750,000" },
      { type: "Car Accident", amount: "$1.2 Million" },
    ]
  },
  {
    id: 3,
    name: "Lewis & Clark Attorneys",
    position: 3,
    rating: 4.9,
    reviewCount: 86,
    services: ["Personal Injury", "Car Accidents", "Medical Malpractice", "Premises Liability", "Dog Bites", "Product Liability"],
    updateFrequency: "Monthly",
    lastUpdate: "2023-02-20",
    badges: ["Super Lawyers", "Best Law Firms 2023"],
    attributes: ["Evening appointments", "Online consultations"],
    topKeywords: ["Boston dog bite lawyer", "Massachusetts product liability attorney", "medical malpractice lawsuit"],
    photos: 31,
    posts: 9,
    qAndA: 22,
    reviewVelocity: 4,
    positionHistory: [2, 2, 1, 1, 3, 3, 4, 3],
    caseResults: [
      { type: "Medical Malpractice", amount: "$4.2 Million" },
      { type: "Product Liability", amount: "$2.7 Million" },
      { type: "Dog Bite", amount: "$475,000" },
    ]
  },
  {
    id: 4,
    name: "Parker & Associates",
    position: 4,
    rating: 4.5,
    reviewCount: 110,
    services: ["Personal Injury", "Car Accidents", "Motorcycle Accidents", "Bicycle Accidents", "Pedestrian Accidents", "Brain Injuries"],
    updateFrequency: "Weekly",
    lastUpdate: "2023-03-13",
    badges: ["Top 100 Trial Lawyers", "Million Dollar Advocates"],
    attributes: ["Veteran owned", "Multilingual staff"],
    topKeywords: ["Boston brain injury attorney", "Massachusetts motorcycle accident lawyer", "pedestrian accident compensation"],
    photos: 45,
    posts: 22,
    qAndA: 18,
    reviewVelocity: 6,
    positionHistory: [3, 4, 4, 4, 4, 5, 5, 4],
    caseResults: [
      { type: "Brain Injury", amount: "$3.9 Million" },
      { type: "Motorcycle Accident", amount: "$1.5 Million" },
      { type: "Pedestrian Accident", amount: "$2.3 Million" },
    ]
  },
  {
    id: 5,
    name: "Wilson Injury Lawyers",
    position: 5,
    rating: 4.3,
    reviewCount: 75,
    services: ["Personal Injury", "Car Accidents", "Truck Accidents", "Workers' Compensation", "Social Security Disability"],
    updateFrequency: "Monthly",
    lastUpdate: "2023-02-25",
    badges: ["Free Consultation", "No Fee Unless We Win"],
    attributes: ["ADA Compliant", "Weekend appointments"],
    topKeywords: ["Boston disability attorney", "Massachusetts workers comp lawyer", "truck accident settlements"],
    photos: 29,
    posts: 7,
    qAndA: 14,
    reviewVelocity: 3,
    positionHistory: [5, 5, 5, 5, 6, 4, 3, 5],
    caseResults: [
      { type: "Truck Accident", amount: "$2.5 Million" },
      { type: "Workers' Comp", amount: "$950,000" },
      { type: "Social Security Disability", amount: "$185,000" },
    ]
  },
  // Add data for positions 6-20 for a complete dataset
  {
    id: 6,
    name: "Adams Law Group",
    position: 6,
    rating: 4.2,
    reviewCount: 64,
    services: ["Personal Injury", "Car Accidents", "Slip and Fall", "Wrongful Death"],
    updateFrequency: "Bi-weekly",
    lastUpdate: "2023-03-01",
    badges: ["Free Consultation"],
    attributes: ["Wheelchair accessible"],
    photos: 27,
    posts: 5,
    qAndA: 11,
    reviewVelocity: 2,
    positionHistory: [7, 6, 6, 6, 5, 6, 6, 6],
    caseResults: [
      { type: "Car Accident", amount: "$950,000" },
      { type: "Slip and Fall", amount: "$425,000" },
    ]
  },
  {
    id: 7,
    name: "Thompson Law Offices",
    position: 7,
    rating: 4.1,
    reviewCount: 58,
    services: ["Personal Injury", "Car Accidents", "Medical Malpractice"],
    updateFrequency: "Monthly",
    lastUpdate: "2023-02-10",
    badges: ["No Win No Fee"],
    attributes: ["Online consultations"],
    photos: 21,
    posts: 4,
    qAndA: 8,
    reviewVelocity: 2,
    positionHistory: [6, 7, 7, 7, 7, 7, 7, 7],
    caseResults: [
      { type: "Medical Malpractice", amount: "$1.1 Million" },
      { type: "Car Accident", amount: "$750,000" },
    ]
  },
  {
    id: 8,
    name: "Green & Green Law",
    position: 8,
    rating: 4.0,
    reviewCount: 49,
    services: ["Personal Injury", "Car Accidents", "Bicycle Accidents"],
    updateFrequency: "Quarterly",
    lastUpdate: "2023-01-15",
    badges: ["Free Consultation"],
    attributes: ["Evening appointments"],
    photos: 19,
    posts: 3,
    qAndA: 7,
    reviewVelocity: 1,
    positionHistory: [8, 8, 8, 8, 8, 8, 8, 8],
    caseResults: [
      { type: "Car Accident", amount: "$850,000" },
      { type: "Bicycle Accident", amount: "$570,000" },
    ]
  },
  {
    id: 9,
    name: "Russell Legal Services",
    position: 9,
    rating: 3.9,
    reviewCount: 41,
    services: ["Personal Injury", "Car Accidents", "Premises Liability"],
    updateFrequency: "Quarterly",
    lastUpdate: "2023-01-08",
    badges: ["No Fee Unless We Win"],
    attributes: ["Weekend appointments"],
    photos: 16,
    posts: 2,
    qAndA: 5,
    reviewVelocity: 1,
    positionHistory: [9, 9, 9, 10, 9, 9, 9, 9],
    caseResults: [
      { type: "Car Accident", amount: "$675,000" },
      { type: "Premises Liability", amount: "$380,000" },
    ]
  },
  {
    id: 10,
    name: "Jenkins & Sons",
    position: 10,
    rating: 3.8,
    reviewCount: 37,
    services: ["Personal Injury", "Car Accidents", "Workers' Compensation"],
    updateFrequency: "Quarterly",
    lastUpdate: "2023-01-20",
    badges: ["Free Consultation"],
    attributes: ["Multilingual staff"],
    photos: 14,
    posts: 2,
    qAndA: 4,
    reviewVelocity: 1,
    positionHistory: [10, 10, 10, 9, 10, 10, 10, 10],
    caseResults: [
      { type: "Car Accident", amount: "$525,000" },
      { type: "Workers' Comp", amount: "$275,000" },
    ]
  },
].map(comp => ({
  ...comp,
  url: `https://example.com/${comp.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
  location: "Boston, MA",
  category: "Personal Injury Law Firm"
}));

// List of all possible services offered by law firms
export const sampleServices = [
  "Personal Injury",
  "Car Accidents",
  "Truck Accidents",
  "Motorcycle Accidents",
  "Bicycle Accidents",
  "Pedestrian Accidents",
  "Slip and Fall",
  "Premises Liability",
  "Dog Bites",
  "Product Liability",
  "Medical Malpractice",
  "Wrongful Death",
  "Brain Injuries",
  "Spinal Cord Injuries",
  "Burn Injuries",
  "Workers' Compensation",
  "Social Security Disability",
  "Nursing Home Abuse",
  "Mass Torts",
  "Class Actions"
];

// Sample keyword data
export const keywordData = [
  {
    keyword: "Boston personal injury lawyer",
    competitorPositions: [
      { id: 1, position: 1 },
      { id: 2, position: 3 },
      { id: 3, position: 5 },
      { id: 4, position: 2 },
      { id: 5, position: 7 }
    ],
    searchVolume: 1200,
    difficulty: 68
  },
  {
    keyword: "Massachusetts car accident attorney",
    competitorPositions: [
      { id: 1, position: 2 },
      { id: 2, position: 5 },
      { id: 3, position: 1 },
      { id: 4, position: 8 },
      { id: 5, position: 4 }
    ],
    searchVolume: 880,
    difficulty: 72
  },
  {
    keyword: "Boston slip and fall lawyer",
    competitorPositions: [
      { id: 1, position: 1 },
      { id: 2, position: 6 },
      { id: 3, position: 4 },
      { id: 4, position: 9 },
      { id: 5, position: 3 }
    ],
    searchVolume: 590,
    difficulty: 65
  },
  {
    keyword: "Motorcycle accident attorney Boston",
    competitorPositions: [
      { id: 1, position: 3 },
      { id: 2, position: 7 },
      { id: 3, position: 8 },
      { id: 4, position: 1 },
      { id: 5, position: 10 }
    ],
    searchVolume: 480,
    difficulty: 63
  },
  {
    keyword: "Medical malpractice lawyer Massachusetts",
    competitorPositions: [
      { id: 1, position: 5 },
      { id: 2, position: 9 },
      { id: 3, position: 1 },
      { id: 4, position: 6 },
      { id: 5, position: 11 }
    ],
    searchVolume: 740,
    difficulty: 75
  }
];

// Recommendation data
export const recommendationData = {
  serviceGaps: [
    "Mass Torts representation not offered",
    "Class Actions services missing",
    "Nursing Home Abuse cases underrepresented"
  ],
  reviewStrategy: [
    "Increase review generation by 25% to match top competitors",
    "Focus on detailed reviews mentioning specific services",
    "Respond to all reviews within 24 hours like top performers"
  ],
  contentStrategy: [
    "Increase posting frequency to weekly (current: monthly)",
    "Add more case results and settlement information",
    "Focus on educational content for primary services"
  ],
  profileCompletion: [
    "Add all service categories from top 5 competitors",
    "Upload 15+ more high-quality photos",
    "Add answers to common questions in Q&A section"
  ],
  prioritizedActions: [
    "Add 'Medical Malpractice' service category",
    "Increase review velocity with follow-up system",
    "Start weekly content posting schedule",
    "Add more case results with settlement amounts",
    "Complete missing service descriptions"
  ]
}; 