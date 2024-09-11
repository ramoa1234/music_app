const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs').promises;
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,  'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

const listDirectories = async (dirPath) => {
    try {
      const files = await fs.readdir(dirPath, { withFileTypes: true });
      return files.filter(file => file.isDirectory()).map(dir => dir.name);
    } catch (err) {
      console.error('Error:', err);
      return [];
    }
};

//subdomain needs to be able to render the html page for it 
function generate_subdomain(filePath, routePath) {
  app.get(routePath, (req, res) => {
    res.sendFile(path.resolve(__dirname, filePath));
  });
}

generate_subdomain('song_page.html', '/test');


const directoryPath = path.join('C:', 'Users', 'anton', 'OneDrive', 'Desktop', 'projects', 'music', 'downloads', 'rap');
fs.readdir(directoryPath, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});

