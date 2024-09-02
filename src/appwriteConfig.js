import { Client,Databases} from 'appwrite';

export const PROJECT_ID ='66d59185001fdf41e68b'
export const DATABASE_ID = '66d592ef00081fbccaed'
export const COLLECTION_ID_MESSAGES = '66d59306001d3d23a982'


const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66d59185001fdf41e68b');


export const databases=new Databases(client);
export default client;