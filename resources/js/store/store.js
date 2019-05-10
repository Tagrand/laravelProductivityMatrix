import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    showAddJob: false,

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

    setAddJob(state, status) {
      state.showAddJob = status;
    },

    addJob(state, job) {
      state.jobs.push(job);
    }
  },

  actions: {
    updateActiveJob({ commit }, job) {
      commit("setActiveJob", job);
    },

    getJobs({ commit, state }) {
      axios
        .get("http://localhost:8000/api/jobs",
          {
            headers: {
              Authorization: `Bearer ${state.token}`
            }
          })
        .then(({ data }) => commit("setJobs", data.data))
        .catch((error) => console.log(error));
    },

    login({ commit }, details) {
      return axios
        .post("http://localhost:8000/api/login", {
          email: details.email,
          password: details.password
        })
        .then(({ data }) => commit("setToken", data.access_token));
    },

    showAddJob({ commit }) {
      commit("setAddJob", true)
    },

    hideAddJob({ commit }) {
      commit("setAddJob", false)
    },

    createJob({ commit, state }, job) {
      return axios
        .post("http://localhost:8000/api/jobs",
          job,
          {
            headers: {
              Authorization: `Bearer ${state.token}`
            }
          })
        .then(({ data }) => commit("addJob", data.data))
        .catch((error) => console.log(error));
    }
  }
});
