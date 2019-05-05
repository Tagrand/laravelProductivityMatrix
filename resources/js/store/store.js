import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        change: true,

        jobs: [
            {
                name: "build website",
                y: "765",
                x: "265"
            },
            {
                name: "build app",
                y: "652",
                x: "4"
            },
            {
                name: "clean flat",
                y: "8",
                x: "800"
            },
            {
                name: "phone home",
                y: "989",
                x: "877"
            },
            {
                name: "watch netflix",
                y: "2",
                x: "76"
            }
        ],
    },
});
