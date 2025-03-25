# Local SEO Competitive Landscape and Insight Dashboard

A comprehensive dashboard for analyzing competitor data in Google Maps Pack rankings for legal firms specializing in personal injury law.

## Overview

The Local SEO Dashboard provides real-time insights into the competitive landscape of local search results. It helps legal firms understand their market position, analyze competitor profiles, and identify opportunities for optimization.

Key features include:

- **Rankings Overview**: Track top 10 competitors in the Maps Pack
- **Competitor Comparison**: Side-by-side comparison of key metrics
- **Service Matrix**: Visualize service offerings across competitors
- **Review Trends**: Analyze review counts, ratings, and velocity 
- **Update Frequency**: Track profile update patterns
- **Badges & Credentials**: Compare badges and business attributes
- **Case Results**: Analyze settlement amounts by case type
- **Optimization Recommendations**: Actionable insights for improvement

## Data Collection

The dashboard uses Firecrawl, a web scraping and AI extraction tool, to collect and analyze competitor data from Google Maps and business websites.

### Data Sources

- Google Maps Pack rankings
- Google Business Profiles
- Competitor websites
- Review data and trends
- Business attributes and badges

### How Data Collection Works

1. The system searches for target keywords in the specified location
2. It extracts the top 20 competitors from the Maps Pack results
3. For each competitor, it scrapes detailed profile information
4. It extracts case results and settlements from competitor websites
5. AI-powered extraction structures the data for analysis
6. The dashboard transforms raw data into actionable insights

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/local-seo-dashboard.git

# Navigate to the project directory
cd local-seo-dashboard

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Data Collection Usage

To collect fresh competitive data:

```bash
# Run the data collector
node data-collector.js
```

This will:
1. Scrape Google Maps Pack results for the configured keywords
2. Extract competitor information from the results
3. Collect detailed profile data for each competitor
4. Save the processed data for the dashboard to use

## Configuration

### Location and Industry Settings

Edit `data-template-rules.js` to configure:

- Target location (e.g., "Boston, MA")
- Industry (e.g., "Personal Injury Law")
- Primary keywords to track
- Data extraction parameters

```javascript
// Example configuration
const TARGET_LOCATION = "Boston, MA";
const INDUSTRY = "Personal Injury Law";
const PRIMARY_KEYWORDS = [
  "personal injury lawyer",
  "car accident attorney",
  // ...more keywords
];
```

## Dashboard Features

### Rankings Overview
Displays current positions for top competitors in local search results with analysis of top-ranking businesses.

### Competitor Comparison
Side-by-side analysis of competitor metrics including position, rating, reviews, services, and more.

### Service Matrix
Visualizes service offerings across competitors with the ability to highlight service gaps.

### Review Trends
Analyzes review patterns with charts showing review counts, ratings, and monthly velocities.

### Update Frequency
Tracks how often competitors update their profiles, with insights into update patterns.

### Badges & Credentials
Compares badges and business attributes across competitors.

### Case Results
Displays settlement amounts by case type for all competitors.

### Optimization Recommendations
Provides actionable recommendations for improving local rankings.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Material-UI for the component library
- Recharts for data visualization
- Firecrawl for web scraping and data extraction 