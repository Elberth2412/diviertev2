
export default async function fetchPrices(ticker) {
    const apiKey = "0OEFT1WCIPDCFZ44"; // de Alpha Vantage, Finnhub, etc.
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();

    if (!data["Time Series (Daily)"]) {
        throw new Error("No se encontraron precios");
    }

    // Convertir la respuesta al formato [{ date, close }]
    const precios = Object.entries(data["Time Series (Daily)"]).map(([date, values]) => ({
        date,
        close: parseFloat(values["4. close"]),
    }));

    // ordenar por fecha ascendente
    return precios.reverse();
}
