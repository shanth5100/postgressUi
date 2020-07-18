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
            // baseUrl: "http://invoice-git-invoice.apps.us-east-1.starter.openshift-online.com"
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