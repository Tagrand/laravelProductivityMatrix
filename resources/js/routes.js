import { store } from "./store/store.js";
import Login from "./components/Login.vue";
import JobsView from "./components/JobsView.vue";

export default {
    mode: "history",

    routes: [
        {
            path: "/",
            component: JobsView,
            beforeEnter: (to, from, next) => {
                if (store.state.token === "") {
                    return next("/login");
                }

                return next();
            }
        },

        {
            path: "/login",
            component: Login
        }
    ]
};
