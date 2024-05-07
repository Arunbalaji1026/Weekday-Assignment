export const multiSelectReducer = (state, action) => {
    switch (action.type) {
        case 'SELECT_OPTION':
            return {
                ...state,
                [action.filterName]: action.selectedValues
            };
        default:
            return state;
    }
};

