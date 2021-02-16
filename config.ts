import { config as configDev } from './src/config/config.development';
import { config as configProd } from './src/config/config.production';
import { BuildMode } from './src/environment';


export default process.env.NODE_ENV === BuildMode.PROD ? configProd : configDev;
