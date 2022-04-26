import macs from '../assets/output2.json';

let json = macs;

let values = []

json.forEach(item => {
    values.push({
        "eth.src": item["_source"]["layers"]["eth.src"],
        "frame.time": item["_source"]["layers"]["frame.time"]
    });
})

//console.log(JSON.stringify(values));
