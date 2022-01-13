const fs = require("fs");
// helper function to turn buffer to JSON file
const readFile = (path) => {
	const data = fs.readFileSync(path);
	return JSON.parse(data);
};

// helper function to write
const writeFile = (schoolData, filePath) => {
	fs.writeFileSync(filePath, JSON.stringify(schoolData, null, 2));
};
