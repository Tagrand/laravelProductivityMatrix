import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    showAddJob: false,

    showEditJob: false,

    activeJob: {},

    newJob: {},

    jobs: [],

    token: "",
  },

  getters: {
    activeJobs(state) {
      return state.jobs.filter((job) => {
        return !job.is_complete && !job.is_skipped;
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

    addJob(state, job) {
      state.jobs.push(job);
    },

    setNewJobData(state, job) {
      state.newJob = job;
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

    setNewJob({commit}, job={}) {
      commit("setNewJobData", job);
    },

    showAddJob({ commit })  {
      commit("setAddJob", true);
    },

    hideAddJob({ commit, dispatch }) {
      commit("setAddJob", false);
      dispatch("setNewJob");
    },

    showEditJob({ commit }) {
      commit("setEditJob", true);
    },

    hideEditJob({ commit, dispatch }) {
      commit("setEditJob", false);
      dispatch("setNewJob");
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

    completeJob({ dispatch, state }, job) {
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
    },

    skipJob({ dispatch, state }, job) {
      return axios
        .post(`http://localhost:8000/api/skipped-jobs/${job.id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${state.token}`
            }
          })
        .then(() => dispatch("getJobs"))
        .catch((error) => console.log(error));
    },

    updateJob({dispatch, state}, job) {
      return axios
        .patch(`http://localhost:8000/api/jobs/${this.state.activeJob.id}`,
          job,
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
