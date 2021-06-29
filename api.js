'use strict';
import https from 'https';

export async function get(url) {
    return new Promise((resolve, reject) => {
        let str = '';
        https.get(url, (res) => {
            res.on('data', (chunk) => {
                str += chunk;
            });
            res.on('end', () => {
                resolve(str);
            });
        }).on('error', (error) => {
            reject(error);
        });
    });
}