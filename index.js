import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_B8CoedFLTDQx4tCsSTNUR9FoIbxtSGmG9zvE5Ytm');


export async function convertCurrency(fromCurrency, toCurrency, units){
    const res=await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });

    const multiplier=res.data[toCurrency];
    return multiplier*units;
}

