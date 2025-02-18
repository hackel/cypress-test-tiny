import { createStore } from 'vuex';

export function getStore() {
    return createStore({
        state: () => ({
            test: 'value',
        }),
    });
}

const store = getStore();

export default store;
