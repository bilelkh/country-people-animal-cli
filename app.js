const { data } = require('./data');
const { filterData, countData } = require('./utils/dataUtils');

const args = process.argv.slice(2);

if (args.length === 0) {
    console.log('No arguments provided.');
    process.exit(1);
}

if (args[0].startsWith('--filter=')) {
    const pattern = args[0].split('=')[1];
    const filtered = filterData(data, pattern);
    console.log(JSON.stringify(filtered, null, 2));
} else if (args[0] === '--count') {
    const counted = countData(data);
    console.log(JSON.stringify(counted, null, 2));
} else {
    console.log('Unknown argument.');
}
