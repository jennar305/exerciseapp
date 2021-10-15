import router from "../router";
import { Login } from "./users";

const session = {
    user: null,
    messages: [],
    toRoute: '/activity',
    Login(username, password){

        const response = Login(username, password);

        this.user = response.user;

        router.push(this.toRoute);

    }
};

export default session;