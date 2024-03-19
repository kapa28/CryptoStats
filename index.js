const jsonexport = require('jsonexport');
const fs = require('fs');

async function main() {
    // const API_KEY = `CG-CsPvwp54unwDYcNUQEjyUoGm`;
    const options = {
        method: "GET",
        mode: "cors"
        /* headers: {
          'x-cg-pro-api-key': 'https://www.easistent.com/urniki/df205daa2f7114245e3f4550746c2dec11f80538'
        }*/
    };
    const API_URL = `https://api.coingecko.com/api/v3/coins`;

    async function getTokens() {
        try {
            const res = await fetch(`${API_URL}/markets?vs_currency=usd`, options);
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }
    async function asyncDelay() {
        let rnd = Math.random()*500;
        await setTimeout(() => {
            console.log(`Delayed for ${rnd} ms.`);
        }, rnd);
    }
    async function getTokenInfo(list) {
        try {
            let tokens = [];
            for(let i = 0; i < list.length; i++) {
                asyncDelay();
                let res = await fetch(`${API_URL}/${list[i].id}?localization=false&tickers=false&market_data=false&community_data=true&developer_data=false&sparkline=false`, options);
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
            fs.writeFile(name + '.csv', csv, function(err) {
                if (err) return console.error(err);
                console.log(name + '.csv saved');
            });
        });
    }

    /*const tokensList = await getTokens();
    const jsonString = JSON.stringify(tokensList, null, 2);

    fs.writeFile("./token_list.json", jsonString, async (err) => {
        if (err) {
          console.error('An error occurred:', err);
          return;
        }*/

    // Read from file;
    let token_list;
    fs.readFile('token_list.json', 'utf8', async function (err, data) {
        if (err) throw err;
        token_list = JSON.parse(data);

        console.log(token_list);

        const tokenListIndividual = await getTokenInfo(await token_list);
        jsonToCsv(tokenListIndividual, "tokens_info");

        fs.writeFile("./tokens_info.json", JSON.stringify(tokenListIndividual), async (err) => {
            if (err) {
              console.error('An error occurred:', err);
            }
        });
        //https://www.coingecko.com/price_charts/export/1/usd.csv
    });

}

main();