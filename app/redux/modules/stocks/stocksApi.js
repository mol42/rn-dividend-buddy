export default {
    loadAllStocks : () => {
        return fetch("http://localhost:8888/stocks/all").then((res) => res.json());
    }
}