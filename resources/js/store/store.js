import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        activeJob: {},

        jobs: [
            {
                id: 1,
                name: "build website",
                y: 765,
                x: 265
            },
            {
                id: 2,
                name: "build app",
                y: 0,
                x: 1000
            },
            {
                id: 3,
                name: "clean flat",
                y: 1000,
                x: 0
            },
            {
                id: 4,
                name: "phone home",
                y: 1000,
                x: 1000
            },
            {
                id: 5,
                name: "watch netflix",
                y: 0,
                x: 0
            },
            {
                id: 6,
                name: "watch amazon prime",
                y: 2,
                x: 66
            }
        ]
    },

    mutations: {
        setActiveJob(state, job) {
            state.activeJob = job;
        }
    },

    actions: {
        updateActiveJob({ commit }, job) {
            commit("setActiveJob", job);
        }
    }
});
