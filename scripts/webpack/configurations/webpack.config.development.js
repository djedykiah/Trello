// Core
import merge from 'webpack-merge';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import openBrowser from 'react-dev-utils/openBrowser';
import { choosePort } from 'react-dev-utils/WebpackDevServerUtils';

// Constants
import { HOST, PORT } from '../../constants';

// Configuration
import generateCommonConfiguration from './webpack.config.common';

// Webpack modules
import { loadDevelopmentCss } from '../modules';

export default async () => {
    const suggestedPort = await choosePort(HOST, PORT);

    setImmediate(() => openBrowser(`http://localhost:${suggestedPort}`));

    return merge(
        generateCommonConfiguration(),
        loadDevelopmentCss(),
        {
            mode:   'development',
            output: {
                filename: 'js/[name].[hash:5].js',
            },
            devtool: 'cheap-module-eval-source-map',
            serve:   {
                host: HOST,
                port: suggestedPort,
            },
            plugins: [ new FriendlyErrorsWebpackPlugin() ],
        },
    );
};
