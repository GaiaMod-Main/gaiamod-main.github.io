import React from "react";
import ShipGuyComponent from '../components/gm-shipguy/shipguy.jsx';
import isAprilFools from '../lib/amp-enable-pranks.ts';

const ShipGuy = ({isFixed, messageSet}) => {
    return <>{isAprilFools && <ShipGuyComponent isFixed={isFixed} messageSet={messageSet} />}</>;
};

export default ShipGuy;