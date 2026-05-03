import React from 'react';
import GUI from '../containers/gui.jsx';

const searchParams = new URLSearchParams(location.search);
const cloudHost = searchParams.get('cloud_host') || 'wss://clouddata.turbowarp.org';

const onClickLogo = () => {
    window.location = 'https://gaiamod-main.github.io/Gaia-Home';
};

const RenderGUI = props => (
    <GUI
        cloudHost={cloudHost}
        canSave={false}
        basePath={process.env.ROOT}
        onClickLogo={onClickLogo}
        canEditTitle
        enableCommunity
        {...props}
    />
);

export default RenderGUI;
