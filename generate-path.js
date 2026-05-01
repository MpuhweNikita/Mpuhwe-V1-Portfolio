const fs = require('fs');
const TextToSVG = require('text-to-svg');

async function main() {
    const ttfUrl = 'https://raw.githubusercontent.com/google/fonts/main/ofl/pacifico/Pacifico-Regular.ttf';
    const res = await fetch(ttfUrl);
    if (!res.ok) {
        console.error("Fetch failed", res.status);
        return;
    }
    const buffer = await res.arrayBuffer();
    fs.writeFileSync('pacifico.ttf', Buffer.from(buffer));

    const textToSVG = TextToSVG.loadSync('pacifico.ttf');

    const options = { x: 0, y: 0, fontSize: 100, anchor: 'top baseline', attributes: { fill: 'none', stroke: 'black' } };

    const d = textToSVG.getD("Welcome visitor, let's dive in", options);

    fs.writeFileSync('snake-path.txt', d);
    console.log("Path generated!");
}
main();
