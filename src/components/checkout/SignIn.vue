<template>
    <div id="sign-in">
        <div class="d-row">
            <div class="d-col6 ph-20">
                <h2 class="d-upper font-mon unltra-light font-36">
                    <i class="fa fa-key" aria-hidden="true"></i>
                    existing customer
                </h2>
                <div class="wrapper">
                    <div class="wrap-text">
                        <span class="gray-text font-16">
                            Username or Email <span class="red">*</span>
                        </span>
                        <div class="input-txt">
                            <input type="text" class="text" id="username" />
                        </div>
                    </div>
                    <div class="wrap-text">
                        <span class="gray-text font-16">
                            Password <span class="red">*</span>
                        </span>
                        <div class="input-txt">
                            <input type="text" class="text" id="passwords" />
                        </div>
                    </div>
                    <div class="wrap-login d-flex">
                        <button
                            @click="getInfoLogin"
                            class="sg-login font-mon font-19 bold blue-pa d-upper"
                        >
                            login
                        </button>
                        <label class="check-box d-flex d-align-center">
                            <input type="checkbox" />
                            <div class="gray-pa font-16 ph-20 remember">
                                Remember me
                            </div>
                            <div class="ph-20">
                                <a href="#" class="blue-pa font-16"
                                    >Lost your password?
                                </a>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div class="d-col6 ph-20">
                <h2 class="d-upper font-mon unltra-light font-36">
                    <i class="fa fa-address-book" aria-hidden="true"></i>
                    new customer
                </h2>
                <div class="wrapper">
                    <div class="gr-btn">
                        <router-link
                            tag="button"
                            :to="{ name: 'Checkout', query: { step: '2' } }"
                            class="bg-gray-text d-upper font-16 bold font-mon"
                        >
                            checkout as guest
                        </router-link>
                    </div>
                    <div class="gr-btn">
                        <button
                            class="bg-blue-pa d-upper font-16 bold font-mon"
                        >
                            create an account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    methods: {
        ...mapMutations({
            nextStep: "checkout/nextStep"
        }),
        ...mapActions({
            logins: "users/login"
        }),
        getInfoLogin() {
            let username = document.querySelector("#username").value;
            let password = document.querySelector("#passwords").value;
            let user = {
                gmail: username,
                passwords: password
            };
            this.logins(user);
        }
    },
    computed: {
        ...mapState({
            currenUser: state => state.users.currentUser
        })
    }
};
</script>

<style lang="scss">
#sign-in {
    padding: 130px 0 150px 0;
    margin: 0 -20px;
    .wrapper {
        padding-top: 45px;
        .gr-btn {
            padding-top: 50px;
        }
        .wrap-text,
        .wrap-login {
            padding-top: 20px;
        }
        .remember {
            border-right: 1px solid #b6c6c9;
        }
    }
    .input-txt {
        padding-top: 10px;

        .text {
            width: 100%;
            height: 40px;
            border: 1px solid #b6c6c9;
            border-radius: 3px;
            padding: 0 10px;
        }
    }
    .check-box {
        input {
            width: 25px;
            height: 25px;
            border: 1px solid #b6c6c9;
            margin-left: 20px;
        }
        input:checked {
            background-color: #fff;
        }
    }
    .gr-btn {
        button {
            width: 100%;
            height: 40px;
            border-radius: 3px;
        }
    }
    .sg-login {
        width: 125px;
        height: 45px;
        background-color: #fff;
        border: 3px solid #00bcd4;
    }
}
</style>
