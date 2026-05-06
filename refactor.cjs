const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = walkSync(dirFile, filelist);
    } catch (err) {
      if (err.code === 'ENOTDIR' || err.code === 'EBADF') filelist = [...filelist, dirFile];
    }
  });
  return filelist;
};

const files = walkSync('./src').filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

const replacements = [
  { from: /bg-white/g, to: 'bg-surface' },
  { from: /text-secondary\/[0-9]+/g, to: 'text-text-secondary' },
  { from: /text-secondary\/\[.*?\]/g, to: 'text-text-secondary' },
  { from: /text-secondary(?![\/\-])/g, to: 'text-text-primary' },
  { from: /border-secondary\/[0-9]+/g, to: 'border-border' },
  { from: /border-secondary\/\[.*?\]/g, to: 'border-border' },
  { from: /border-white\/20/g, to: 'border-border' },
  { from: /bg-secondary\/[0-9]+/g, to: 'bg-surface-alt' },
  { from: /bg-secondary\/\[.*?\]/g, to: 'bg-surface-alt' },
  { from: /bg-gradient-to-r from-white via-white to-primary\/\[0\.08\]/g, to: 'bg-surface border-b border-border' },
  { from: /bg-gradient-to-br from-\[\#FFF5F2\] via-white to-white/g, to: 'bg-background' }
];

let modifiedFiles = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;
  
  replacements.forEach(r => {
    newContent = newContent.replace(r.from, r.to);
  });
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Updated ${file}`);
    modifiedFiles++;
  }
});

console.log(`Refactored ${modifiedFiles} files.`);
