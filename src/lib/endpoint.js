// @ts-nocheck
import { page } from '$app/stores';

let qrl = '';
let lres = '';

class App {
    constructor() {
        console.log("App Called");
        this.slug;
    }
    setslug(slug) {
        this.slug = slug;
    }
    get(url, callback) {


        qrl = url;
        let req = {};
        let res = {
            send(response) {
                lres = response;
            }
        };
        callback(req, res);


    }
    resp() {

        if (this.slug === qrl) {
            return (lres);
        }
        else {
            return "No Such Endpoint";

        }
    }
}

//app.get("FuckOFF", "Dont Use Bad Words");




export default App;