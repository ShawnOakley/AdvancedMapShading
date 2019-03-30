const utils = require('./utils');
const fs = require('fs');

const MAPBOX_KEY = fs.readFileSync("mapbox.key").toString()

async function main() {
    const zoom = 10;
    const [lat, long] = [36.133487, -112.239884]

    const tLat = Math.floor(utils.lat2tile(lat, zoom));
    const tLong  = Math.floor(utils.long2tile(long, zoom));

    const image = await utils.loadImage(
        `https://api.mapbox.com/v4/mapbox.satellite/${zoom}/${tLong}/${tLat}.pngraw?access_token=${MAPBOX_KEY}`       
    )

    document.body.appendChild(image)
}

main();