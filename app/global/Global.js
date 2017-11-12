export let isProduction = true;

export function getServerURL() {

    let SERVER_URL;

    if( isProduction )
    {
        SERVER_URL = "http://52.8.111.8:8000";
    }
    else
    {
        SERVER_URL = "http://172.17.230.96:8000";
    }

    return SERVER_URL;
}

