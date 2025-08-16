const fs = require('fs');
const path = require('path');

// Mapeamento de cores para substituir por preto e branco
const colorReplacements = {
  // Gradientes
  'bg-gradient-to-r from-blue-400 to-purple-500': 'bg-white',
  'bg-gradient-to-r from-blue-500 to-purple-600': 'punk-button',
  'bg-gradient-to-r from-blue-500/20 to-purple-500/20': 'bg-black',
  'bg-gradient-to-br from-blue-500/20 to-purple-500/20': 'bg-black',
  'bg-gradient-to-t from-black/60 to-transparent': 'bg-black/50',
  'hover:from-blue-600 hover:to-purple-700': 'hover:bg-black hover:text-white',
  
  // Cores específicas
  'text-blue-300': 'text-white',
  'text-gray-400': 'text-white',
  'text-gray-300': 'text-white',
  'border-blue-500/30': 'border-white',
  'focus:ring-blue-500': 'focus:ring-white',
  'from-blue-400 to-blue-600': 'bg-white',
  'from-purple-400 to-purple-600': 'bg-black',
  
  // Classes específicas
  'gradient-text': 'punk-text',
  'glass-effect': 'punk-card',
  
  // Backgrounds com transparência
  'bg-white/5': 'bg-black',
  'border-white/10': 'border-white',
  'placeholder-gray-400': 'placeholder-white'
};

function cleanupColors(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  for (const [oldColor, newColor] of Object.entries(colorReplacements)) {
    if (content.includes(oldColor)) {
      content = content.replace(new RegExp(oldColor, 'g'), newColor);
      modified = true;
      console.log(`Replaced "${oldColor}" with "${newColor}" in ${filePath}`);
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

// Procurar e limpar todos os arquivos TSX
function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && file !== 'node_modules') {
      walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      cleanupColors(filePath);
    }
  }
}

console.log('Starting color cleanup...');
walkDirectory('./src');
console.log('Color cleanup completed!');
