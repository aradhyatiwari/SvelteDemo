// @ts-nocheck
import App from '$lib/endpoint'
const app = new App();

export function GET({ params }) {
    app.setslug(params.slug);
    app.get("sluggish", (req, res) => { res.send("Noicee") });
    return new Response(String(app.resp()));
}