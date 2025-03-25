/**
 * Local SEO Dashboard - Data Collection Runner
 * 
 * This script provides a simple command-line interface to start
 * the data collection process for the SEO Dashboard.
 */

const { collectCompetitorData } = require('./data-collector');
const rules = require('./data-template-rules');
const fs = require('fs').promises;

// Get arguments from command line
const args = process.argv.slice(2);
const options = parseArguments(args);

// Display header
console.log('\n');
console.log('========================================================');
console.log('  LOCAL SEO DASHBOARD - COMPETITIVE DATA COLLECTION');
console.log('========================================================');
console.log('\n');

// Display configuration
console.log(`Location: ${rules.TARGET_LOCATION}`);
console.log(`Industry: ${rules.INDUSTRY}`);
console.log(`Keywords: ${rules.PRIMARY_KEYWORDS.join(', ')}`);
console.log(`\n`);

// Check if we should run immediately or show help
if (options.help) {
  displayHelp();
} else {
  startDataCollection(options);
}

/**
 * Parse command line arguments
 */
function parseArguments(args) {
  const options = {
    outputFile: `seo-data-${new Date().toISOString().split('T')[0]}.json`,
    help: false,
    location: null,
    keywords: null,
    limit: 20
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    
    if (arg === '--help' || arg === '-h') {
      options.help = true;
    } else if (arg === '--output' || arg === '-o') {
      options.outputFile = args[++i] || options.outputFile;
    } else if (arg === '--location' || arg === '-l') {
      options.location = args[++i];
    } else if (arg === '--keywords' || arg === '-k') {
      options.keywords = args[++i]?.split(',').map(k => k.trim());
    } else if (arg === '--limit') {
      options.limit = parseInt(args[++i], 10) || options.limit;
    }
  }
  
  return options;
}

/**
 * Display help information
 */
function displayHelp() {
  console.log('USAGE:');
  console.log('  node run-data-collection.js [options]');
  console.log('\n');
  console.log('OPTIONS:');
  console.log('  -h, --help              Show this help message');
  console.log('  -o, --output FILE       Specify output JSON file');
  console.log('  -l, --location LOC      Override location');
  console.log('  -k, --keywords LIST     Override keywords (comma-separated)');
  console.log('  --limit NUMBER          Limit number of competitors (default: 20)');
  console.log('\n');
  console.log('EXAMPLES:');
  console.log('  node run-data-collection.js');
  console.log('  node run-data-collection.js --location "Miami, FL"');
  console.log('  node run-data-collection.js --keywords "injury lawyer,car accident attorney"');
  console.log('  node run-data-collection.js --output "miami-data.json" --limit 10');
  console.log('\n');
}

/**
 * Start the data collection process
 */
async function startDataCollection(options) {
  console.log('Starting data collection process...');
  
  // Apply overrides if provided
  if (options.location) {
    console.log(`Overriding location: ${options.location}`);
    rules.TARGET_LOCATION = options.location;
  }
  
  if (options.keywords) {
    console.log(`Overriding keywords: ${options.keywords.join(', ')}`);
    rules.PRIMARY_KEYWORDS = options.keywords;
  }
  
  try {
    // Start the collection process
    console.log('\nCollecting competitor data...');
    const data = await collectCompetitorData();
    
    // Limit data if needed
    const limitedData = data.slice(0, options.limit);
    console.log(`\nLimiting output to ${limitedData.length} competitors.`);
    
    // Save data to file
    console.log(`\nSaving data to ${options.outputFile}...`);
    await fs.writeFile(
      options.outputFile, 
      JSON.stringify(limitedData, null, 2), 
      'utf8'
    );
    
    console.log('\nData collection complete!');
    console.log(`\nOutput saved to ${options.outputFile}`);
    console.log('\n');
    
  } catch (error) {
    console.error('\nError during data collection:');
    console.error(error);
    console.log('\nData collection failed.');
    process.exit(1);
  }
}

// Export for testing
module.exports = {
  parseArguments,
  startDataCollection
}; 