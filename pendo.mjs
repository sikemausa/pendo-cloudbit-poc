import fetch from 'node-fetch';

const url = "https://app.pendo.io/api/v1/guide";
const headers = {
    'x-pendo-integration-key': `${process.env.pendoIntegrationKey}`,
    'content-type': 'application/json'
}

fetch(url, { method: 'GET', headers: headers})
    .then((res) => {
        return res.json()
    })
    .then((json) => {
        console.log(json)
    })
    .catch(error => {
        console.log(error);
    })