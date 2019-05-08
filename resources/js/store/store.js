import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        activeJob: {},

        jobs: [],

        token: "",
    },

    mutations: {
        setActiveJob(state, job) {
            state.activeJob = job;
        },

        setJobs(state, jobs) {
            state.jobs = jobs;
        },

        setToken(state, token) {
            state.token = token;
        },
    },

    actions: {
        updateActiveJob({ commit }, job) {
            commit("setActiveJob", job);
        },

        getJobs({ commit, state }) {
            axios
                .get("http://localhost:8000/api/jobs", {
                    Authorisation: `Bearer ${state.token}`
                })
                .then(({ data }) => commit("setJobs", data.data));
        },

        login({ commit }, details) {
            return axios
                .post("http://localhost:8000/api/login", {
                    email: details.email,
                    password: details.password
                })
                .then(({ data }) => commit("setToken", data.access_token));
        }
    }
});
