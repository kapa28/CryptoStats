const jsonexport = require('jsonexport');
const fs = require('fs');

async function main() {
    // const API_KEY = `CG-CsPvwp54unwDYcNUQEjyUoGm`;
    const API_URL = `https://api.coingecko.com/api/v3/coins`;

    async function getTokens() {
        try {
            const res = await fetch(`${API_URL}/markets?vs_currency=usd`, {
                method: "GET",
                mode: "cors",
            });
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }
    async function getTokenInfo(list) {
        try {
            const tokens = [];
            for(let i = 0; i < list.length; i++) {
                const res = await fetch(`${API_URL}/${list[i].id}`, {
                    method: "GET",
                    mode: "cors",
                });
                tokens[i] = await res.json();
            };
            return tokens;
        } catch (error) {
            console.log(error);
        }
    }
    async function jsonToCsv(json, name) {
        jsonexport(json, function(err, csv) {
            if (err) return console.error(err);
            fs.writeFile(name + '_O.csv', csv, function(err) {
                if (err) return console.error(err);
                console.log('output.csv saved');
            });
        });
    }

    const tokensList = await getTokens();
    jsonToCsv(tokensList, "tokens");
    const tokenListIndividual = await getTokenInfo(tokensList);
    jsonToCsv(tokenListIndividual, "tokensInfo");
    //https://www.coingecko.com/price_charts/export/1/usd.csv
}

main();