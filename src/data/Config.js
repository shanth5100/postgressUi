let environmentData = null;

export const Config = {
    baseUrl: "http://localhost:5006",
    notifyMillis: 400,
    apiNotifyMillis: 600,
    otherNotifyMillis: 1000,
    alertMillis: 2000,

    loadEnviData: function() {
        if (environmentData) {
            return environmentData;
        } else {
            return setAndReturnEnvData();
        }
    },

    
}

let setAndReturnEnvData = function() {
        let data = {
            bgColor: "#6DB4E3",
            baseUrl: "http://localhost:5006"
            // baseUrl: "https://payslip-api.herokuapp.com"
        }
        
        if (process.env.REACT_APP_ENVIRONMENT === "LIVE") {
            data.baseUrl = "https://payslip-api.herokuapp.com";
            data.bgColor = '#F3F2F1';
        }
        environmentData = data;
        return data;
    }

export default Config;