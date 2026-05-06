const environments = {
    VITTASCIENCE: Symbol(),
    ADACRAFT_ORG: Symbol()
};

import adacraftOrgConfig from './config/environments/adacraft-org';
import vittascienceConfig from './config/environments/vittascience';
const configs = {
    [environments.ADACRAFT_ORG]: adacraftOrgConfig,
    [environments.VITTASCIENCE]: vittascienceConfig
};

let defaultTarget = environments.ADACRAFT_ORG;

// The choice of the target environment is done by setting a env var for the
// build of adacraft. Obviously, its value must be one of the environment names
// defined above. 
let target = defaultTarget;
const name = process.env.TARGET_ENVIRONMENT;
if (name !== undefined) {
    const newTarget = environments[name];
    if (newTarget === undefined) {
        console.log(`"${name}" is an unknown TARGET_ENVIRONMENT, switch to default one`)
    } else {
        target = newTarget;
    }
}

export default {
    config: configs[target],
    decisions: {
        stageHeaderIsAbove: target !== environments.VITTASCIENCE,
        displayRestartAllButton: target === environments.VITTASCIENCE,
        // Show turbo mode and frame rate with controls.
        showExtraInfo: target !== environments.VITTASCIENCE,
        allowGreenFlagWhileActive: target !== environments.VITTASCIENCE,
        hideStageControls: target === environments.VITTASCIENCE,
        showBrowserFullscreenControl: target !== environments.VITTASCIENCE,
        noDefaultStorage: target === environments.VITTASCIENCE,
        headerIsInFrontOfStageInFullscreen: target === environments.ADACRAFT_ORG
    }
};
