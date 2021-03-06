import {
    STORE_PAGE,
    STORE_TAB,
    ADD_FILTER,
    REMOVE_FILTER,
    CLEAR_FILTERS,
} from './index';

export const mainReducer = (state, { type, payload }) => {
    switch (type) {
        case STORE_PAGE:
            return {
                ...state,
                pageInfo: {
                    ...state.pageInfo,
                    page: payload,
                },
            };
        case STORE_TAB:
            return {
                ...state,
                pageInfo: {
                    ...state.pageInfo,
                    ...payload,
                },
            };
        case ADD_FILTER:
            return {
                ...state,
                pageInfo: {
                    ...state.pageInfo,
                    filter: payload
                },
            };
        case REMOVE_FILTER:
            return {
                ...state,
                pageInfo: {
                    ...state.pageInfo,
                    filter: ''
                },
            };
        case CLEAR_FILTERS:
            return {
                ...state,
                pageInfo: {
                    ...state.pageInfo,
                    filter: ''
                },
            };
        default:
            return state;
    }
};
