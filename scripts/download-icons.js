const https = require('https');
const fs = require('fs');
const path = require('path');

const iconUrls = {
  // Programming Languages
  typescript: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
  javascript: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  python: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
  react: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
  vue: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg',
  
  // Frontend
  nextjs: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
  html: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
  css: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
  sass: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
  tailwindcss: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/tailwindcss.svg',
  
  // Data & Analytics
  mysql: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
  postgresql: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
  powerbi: 'https://raw.githubusercontent.com/microsoft/PowerBI-Icons/main/SVG/Power-BI.svg',
  tableau: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg',
  numpy: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/numpy.svg',
  pandas: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/pandas.svg',
  
  // Cloud & Tools
  aws: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
  gcp: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg',
  git: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
  docker: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
  r: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/r.svg',
};

const iconsDir = path.join(process.cwd(), 'public', 'icons');

// Create icons directory if it doesn't exist
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Download each icon
Object.entries(iconUrls).forEach(([name, url]) => {
  const filePath = path.join(iconsDir, `${name}.svg`);
  
  https.get(url, (response) => {
    if (response.statusCode === 200) {
      const file = fs.createWriteStream(filePath);
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${name}.svg`);
      });
    } else {
      console.error(`Failed to download ${name}.svg: ${response.statusCode}`);
    }
  }).on('error', (err) => {
    console.error(`Error downloading ${name}.svg:`, err.message);
  });
}); 

