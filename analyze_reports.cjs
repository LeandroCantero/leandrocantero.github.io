const fs = require('fs');

const files = [
    '../leandrocantero.github.io_2025-12-12_03-19-23.json'
];

let output = '';

files.forEach(file => {
    try {
        const raw = fs.readFileSync(file, 'utf8');
        const data = JSON.parse(raw);

        output += '--------------------------------------------------\n';
        output += `File: ${file}\n`;
        output += `Form Factor: ${data.configSettings?.formFactor}\n`;
        output += `Performance: ${data.categories?.performance?.score * 100}\n`;
        output += `Accessibility: ${data.categories?.accessibility?.score * 100}\n`;
        output += `SEO: ${data.categories?.seo?.score * 100}\n`;
        output += `Best Practices: ${data.categories?.['best-practices']?.score * 100}\n`;

        output += '\n--- TOP FAILING AUDITS (Performance & Accessibility) ---\n';

        const relevantCategories = ['performance', 'accessibility'];

        relevantCategories.forEach(catKey => {
            const cat = data.categories[catKey];
            if (!cat) return;

            output += `\nCategory: ${cat.title}\n`;
            cat.auditRefs.forEach(ref => {
                const audit = data.audits[ref.id];
                if (audit.score !== null && audit.score < 0.9) {
                    output += `[${audit.score}] ${audit.title}\n`;
                    if (audit.displayValue) output += `   -> ${audit.displayValue}\n`;
                }
            });
        });
        output += '\n';

    } catch (err) {
        output += `Error reading ${file}: ${err.message}\n`;
    }
});

fs.writeFileSync('analysis_result.txt', output);
console.log('Analysis complete. Written to analysis_result.txt');
