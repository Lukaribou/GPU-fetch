import axios from "axios";

interface ApiCredentials {
    username: string,
    password: string
};

export default class GpuApi {

    public static login(credentials: ApiCredentials): Promise<any> {
        const formData = JSON.stringify({
            modeconnect: 'connect',
            util: credentials.username,
            acct_pass: credentials.password
        });
        
        return axios.post('https://www.gpu-lr.fr/sat/index.php?page_param=accueilsatellys.php', formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}