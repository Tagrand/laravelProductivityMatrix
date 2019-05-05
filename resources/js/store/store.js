import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        change: true,

        jobs: [
            {
                name: "build website",
                y: 765,
                x: 265,
            },
            {
                name: "build app",
                y: 0,
                x: 1000,
            },
            {
                name: "clean flat",
                y: 1000,
                x: 0
            },
            {
                name: "phone home",
                y: 1000,
                x: 1000,
            },
            {
                name: "watch netflix",
                y: 0,
                x: 0,
            },
            {
                name: "watch amazon prime",
                y: 2,
                x: 66,
            }
        ]
    }
});
