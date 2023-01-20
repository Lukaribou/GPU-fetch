import axios from "axios";
import FormData = require('form-data');

interface ApiCredentials {
    username: string,
    password: string
};

export class GpuApi {

    public static login(credentials: ApiCredentials): Promise<any> {
        const formData = new FormData();
        formData.append('modeconnect', 'connect');
        formData.append('util', credentials.username);
        formData.append('acct_pass', credentials.password);
        
        return axios.post('https://www.gpu-lr.fr/sat/index.php?page_param=accueilsatellys.php', formData, {
            headers: formData.getHeaders()
        });
    }
}