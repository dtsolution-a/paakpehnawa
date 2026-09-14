import fs from 'fs';

let content = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');

const oldArray = 'const HERO_IMAGES = ["/images/goof.png", "/images/goo7.png"];';
const newArray = 'const HERO_IMAGES = ["/images/goof.png", "/images/goo7.png", "/images/goo8.png"];';

if (content.includes(oldArray)) {
    content = content.replace(oldArray, newArray);
    fs.writeFileSync('src/pages/HomePage.tsx', content);
    console.log("Slider updated successfully.");
} else {
    console.log("Could not find the slider array.");
}
