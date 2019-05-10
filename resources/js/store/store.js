import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    showAddJob: false,

    showEditJob: false,

    activeJob: {},

    jobs: [],

    token: "",
  },

  getters: {
    activeJobs(state) {
      return state.jobs.filter((job) => {
        return !job.is_complete;
      });
    }
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

    setEditJob(state, status) {
      state.showEditJob = status;
    },
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
      commit("setAddJob", true);
    },

    hideAddJob({ commit }) {
      commit("setAddJob", false);
    },

    showEditJob({ commit }) {
      commit("setEditJob", true);
    },

    hideEditJob({ commit }) {
      commit("setEditJob", false);
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
    },

    completeJob({dispatch, state}, job) {
      return axios
        .post(`http://localhost:8000/api/completed-jobs/${job.id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${state.token}`
            }
          })
        .then(() => dispatch("getJobs"))
        .catch((error) => console.log(error));
    }
  }
});
