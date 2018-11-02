import Vue from 'vue';

export const loadData = async ({commit}) => {
    try {
        const {body} = await Vue.http.get('data.json');
        if(body) {
            const stocks = body.stocks;
            const funds = body.funds;
            const stockPortfolio = body.stockPortfolio;

            const portfolio = {
                stockPortfolio,
                funds,
            };
            commit('SET_STOCKS', stocks);
            commit('SET_PORTFOLIO', portfolio);
        }
    } catch(error) {
        throw error;
    }

}
