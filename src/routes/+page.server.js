export const prerender = true;
// import * as fs from 'fs';
import data from '$lib/db.json'
//fs.writeFile()


export function load() {
    let gat = JSON.stringify(data)
    console.log("sdubgbskjgbksjdb" + data[0] + "Yes it is printed")
    return {
        gat
    }
}