//import * as fs from 'fs'
// import * as fs from 'fs';

export function GET({ url }) {
    //     const fil = url.searchParams.get('filenam');
    //     const val = url.searchParams.get('value');

    //     fs.writeFileSync(`src/lib/${fil}.txt`, val);



    return new Response(String("value is returned"));
}