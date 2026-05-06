const ENABLE_PROJECT_SAVING = 'adacraft/ENABLE_PROJECT_SAVING';
const DISABLE_PROJECT_SAVING = 'adacraft/DISABLE_PROJECT_SAVING';

const initialState = {
    canSave: false
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;

    switch (action.type) {
    case ENABLE_PROJECT_SAVING:
        return Object.assign({}, state, { canSave: true });
    case DISABLE_PROJECT_SAVING:
        return Object.assign({}, state, { canSave: false });
    default:
        return state;
    }
};

const enableProjectSaving = function () {
    return { type: ENABLE_PROJECT_SAVING };
};

const disableProjectSaving = function () {
    return { type: DISABLE_PROJECT_SAVING };
};

export {
    reducer as default,
    initialState as adacraftInitialState,
    enableProjectSaving,
    disableProjectSaving
};
