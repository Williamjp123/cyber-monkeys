//This code should already be implemented in the UI under src/assets, it's just here to show how we push from the json into the website via jS.

import macs from '../assets/output2.json';

let json = macs;

let values = []

json.forEach(item => {
    values.push({
        "eth_src": item["_source"]["layers"]["eth_src"],
        "frame_time": item["_source"]["layers"]["frame_time"]
    });
})

//console.log(JSON.stringify(values));
