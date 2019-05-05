import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        activeJob: {},

        jobs: [],
    },

    mutations: {
        setActiveJob(state, job) {
            state.activeJob = job;
        },

        setJobs(state, jobs) {
            state.jobs = jobs;
        }
    },

    actions: {
        updateActiveJob({ commit }, job) {
            commit("setActiveJob", job);
        },

        getJobs({ commit }) {
            axios
                .get("http://localhost:8000/api/jobs")
                .then(({ data }) => commit('setJobs', data));
        }
    }
});
