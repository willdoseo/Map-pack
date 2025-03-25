/**
 * Local SEO Dashboard - Data Collection Template Rules
 * 
 * This file defines the data extraction rules and patterns for using
 * Firecrawl to collect competitive intelligence for the Local SEO Dashboard.
 */

// Location and keyword definitions
const TARGET_LOCATION = "Boston, MA";
const INDUSTRY = "Personal Injury Law";
const PRIMARY_KEYWORDS = [
  "personal injury lawyer",
  "car accident attorney",
  "slip and fall lawyer",
  "medical malpractice lawyer",
  "truck accident attorney"
];

/**
 * Maps Pack Data Extraction Configuration
 * Captures ranking data from Google Maps Pack results
 */
const mapsPackExtractionConfig = {
  url: (keyword) => `https://www.google.com/search?q=${encodeURIComponent(keyword + " " + TARGET_LOCATION)}`,
  formats: ["markdown", "screenshot"],
  actions: [
    // Allow time for Maps Pack to load
    { type: "wait", milliseconds: 3000 },
    
    // Take screenshot of entire page
    { type: "screenshot", fullPage: true },
    
    // Target the Maps Pack section specifically
    { type: "scrape", selector: "div[data-local-attribute-container]" },
    { type: "screenshot", selector: "div[data-local-attribute-container]" },
    
    // Alternative selectors to try if the first one doesn't work
    // Maps Pack listings container
    { type: "scrape", selector: ".rlfl__tls" },
    { type: "screenshot", selector: ".rlfl__tls" },
    
    // Individual Maps Pack business listings
    { type: "scrape", selector: ".VkpGBb" },
    { type: "screenshot", selector: ".VkpGBb" },
    
    // Click "More places" button if available
    { type: "click", selector: "a.Yy0iBb" },
    { type: "wait", milliseconds: 2000 },
    { type: "screenshot", fullPage: true }
  ],
  mobile: false,
  waitFor: 5000
};

/**
 * Business Profile Data Extraction Configuration
 * Extracts detailed data from a competitor's Google Business Profile
 */
const businessProfileExtractionConfig = {
  url: (businessName) => `https://www.google.com/maps/place/${encodeURIComponent(businessName + " " + TARGET_LOCATION)}`,
  formats: ["markdown", "screenshot"],
  actions: [
    { type: "wait", milliseconds: 2000 },
    { type: "screenshot", fullPage: true },
    
    // Capture business profile details
    { type: "scrape", selector: ".jANrlb" },
    
    // Capture reviews section
    { type: "click", selector: "button[data-tab-index='1']" },
    { type: "wait", milliseconds: 1500 },
    { type: "screenshot", selector: "div[data-review-id]" },
    { type: "scrape", selector: "div[data-review-id]" },
    
    // Capture services section
    { type: "click", selector: "button[data-item-id='services']" },
    { type: "wait", milliseconds: 1500 },
    { type: "screenshot", selector: ".m6QErb" },
    { type: "scrape", selector: ".m6QErb" },
    
    // Capture posts
    { type: "click", selector: "button[data-item-id='posts']" },
    { type: "wait", milliseconds: 1500 },
    { type: "screenshot", selector: ".DAdsTc" },
    { type: "scrape", selector: ".DAdsTc" },
    
    // Capture photos count
    { type: "click", selector: "button[data-item-id='photos']" },
    { type: "wait", milliseconds: 1500 },
    { type: "screenshot", selector: "img[data-photo-index]" },
    
    // Capture Q&A
    { type: "click", selector: "button[data-item-id='questions']" },
    { type: "wait", milliseconds: 1500 },
    { type: "screenshot", selector: ".DzVBYd" },
    { type: "scrape", selector: ".DzVBYd" }
  ],
  waitFor: 5000
};

/**
 * Direct Business Profile URL Extraction
 * Uses g.co/kgs shortened format for direct access to business profiles
 */
const directProfileExtractionConfig = {
  url: (profileId) => `https://g.co/kgs/${profileId}`,
  formats: ["markdown", "screenshot"],
  actions: [
    // Allow time for the profile to load
    { type: "wait", milliseconds: 5000 },
    
    // Take a full screenshot to capture basic profile information
    { type: "screenshot", fullPage: false },
    
    // Extract Services section - this will contain the comprehensive service list
    { type: "scrape", selector: "div[role='tabpanel']" },
    
    // If looking specifically for the Updates section, click the Updates tab
    { type: "click", selector: "button:contains('Updates')" },
    { type: "wait", milliseconds: 1500 },
    { type: "screenshot", selector: "div[role='tabpanel']" },
    { type: "scrape", selector: "div[role='tabpanel']" }
  ],
  waitFor: 8000
};

/**
 * Competitor Website Extraction
 * Extracts case results data from competitor websites
 */
const competitorWebsiteExtractionConfig = {
  url: (websiteUrl) => websiteUrl,
  formats: ["markdown", "screenshot"],
  actions: [
    { type: "wait", milliseconds: 3000 },
    
    // Find and capture case results/verdicts section
    { type: "scrape", selector: "div:contains('Case Results'), div:contains('Our Verdicts'), div:contains('Settlements')" },
    { type: "screenshot", selector: "div:contains('Case Results'), div:contains('Our Verdicts'), div:contains('Settlements')" },
    
    // Navigate to results/verdicts page if it exists
    { type: "click", selector: "a:contains('Case Results'), a:contains('Verdicts'), a:contains('Settlements')" },
    { type: "wait", milliseconds: 2000 },
    { type: "screenshot", fullPage: true },
    { type: "scrape", selector: "body" }
  ],
  onlyMainContent: true,
  waitFor: 5000
};

/**
 * Mobile Device Testing Configuration
 * Tests Maps Pack appearance on mobile devices
 */
const mobileExtractionConfig = {
  url: (keyword) => `https://www.google.com/search?q=${encodeURIComponent(keyword + " " + TARGET_LOCATION)}`,
  formats: ["markdown", "screenshot"],
  mobile: true,
  actions: [
    { type: "wait", milliseconds: 3000 },
    { type: "screenshot", fullPage: true },
    
    // Maps Pack elements on mobile
    { type: "scrape", selector: ".bJzME" },
    { type: "screenshot", selector: ".bJzME" }
  ],
  waitFor: 5000
};

/**
 * Structured Data Extraction Schema
 * Used with Firecrawl extract function to get structured profile data
 */
const profileExtractionSchema = {
  businessName: { type: "string", description: "Name of the business" },
  rating: { type: "number", description: "Star rating (1-5)" },
  reviewCount: { type: "number", description: "Number of reviews" },
  address: { type: "string", description: "Business address" },
  phone: { type: "string", description: "Business phone number" },
  website: { type: "string", description: "Business website URL" },
  services: { 
    type: "array", 
    items: { type: "string" },
    description: "List of services offered"
  },
  badges: {
    type: "array",
    items: { type: "string" },
    description: "Google profile badges (e.g., 'Woman-owned', 'Veteran-owned')"
  },
  attributes: {
    type: "array",
    items: { type: "string" },
    description: "Business attributes (e.g., 'Wheelchair accessible', 'Offers online consultations')"
  },
  updateFrequency: {
    type: "string",
    enum: ["Daily", "Weekly", "Bi-weekly", "Monthly", "Quarterly", "Rarely"],
    description: "How often the profile is updated with new posts"
  },
  lastPostDate: {
    type: "string",
    description: "Date of the most recent post"
  },
  qAndACount: {
    type: "number",
    description: "Number of Q&A entries"
  },
  photoCount: {
    type: "number",
    description: "Number of photos on the profile"
  },
  caseResults: {
    type: "array",
    items: {
      type: "object",
      properties: {
        type: { type: "string", description: "Type of case (e.g., 'Car Accident')" },
        amount: { type: "string", description: "Settlement/verdict amount (e.g., '$1.2 Million')" }
      }
    },
    description: "Case settlement results"
  }
};

/**
 * Extract Prompts
 * Used with LLM extraction to guide the AI in extracting specific data
 */
const extractPrompts = {
  services: `Extract all legal services offered by this law firm based on their Google Business Profile. 
    Return a simple array of service names.`,
  
  caseResults: `Extract case results/verdicts/settlements from this law firm's website.
    For each case result, include the type of case (e.g., Car Accident, Medical Malpractice) and the settlement amount.
    Format as an array of objects with 'type' and 'amount' properties.`,
  
  updateFrequency: `Based on the Google Business Profile posts, determine how frequently this profile is updated.
    Categorize as one of: Daily, Weekly, Bi-weekly, Monthly, Quarterly, or Rarely.`,
  
  badges: `Extract all badges and special attributes from this Google Business Profile.
    Badges include things like "Veteran-owned", "Woman-owned", etc.
    Return a simple array of badge names.`
};

/**
 * Batch Processing Configuration
 * For processing multiple competitors at once
 */
const batchConfig = {
  maxConcurrent: 5,
  pauseBetweenRequests: 5000,
  retryAttempts: 3
};

/**
 * Complete Workflow for Top 20 Competitors
 * Steps to conduct full competitive analysis
 */
const analysisWorkflow = {
  // 1. Get top 20 competitors for primary keywords
  getMapsPackResults: (keywords) => {
    return keywords.map(keyword => ({
      keyword,
      config: mapsPackExtractionConfig,
      url: mapsPackExtractionConfig.url(keyword)
    }));
  },
  
  // 2. For each competitor, get detailed profile data
  getProfileData: (competitors) => {
    return competitors.map(competitor => ({
      competitor: competitor.name,
      config: businessProfileExtractionConfig,
      url: businessProfileExtractionConfig.url(competitor.name)
    }));
  },
  
  // 3. Get website data for case results
  getWebsiteData: (competitors) => {
    return competitors.map(competitor => {
      if (!competitor.website) return null;
      return {
        competitor: competitor.name,
        config: competitorWebsiteExtractionConfig,
        url: competitor.website
      };
    }).filter(Boolean);
  },
  
  // 4. Process and transform data for dashboard
  transformForDashboard: (rawData) => {
    // Logic to transform raw scraped data into the format expected by the dashboard
    // This would map to the sampleCompetitors structure in the dashboard
  }
};

module.exports = {
  TARGET_LOCATION,
  INDUSTRY,
  PRIMARY_KEYWORDS,
  mapsPackExtractionConfig,
  businessProfileExtractionConfig,
  directProfileExtractionConfig,
  competitorWebsiteExtractionConfig,
  mobileExtractionConfig,
  profileExtractionSchema,
  extractPrompts,
  batchConfig,
  analysisWorkflow
}; 