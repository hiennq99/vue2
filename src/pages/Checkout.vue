<template>
    <div id="checkout">
        <div id="banner">
            <div class="d-container">
                <div class="banner-cart d-row space-between">
                    <div class="banner-cart-text ">
                        <span class="font-mon bold font-50">
                            WOO
                        </span>
                        <span class="font-mon unltra-light font-50">
                            CHECKOUT
                        </span>
                    </div>
                    <div class="banner-cart-icon">
                        <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="d-bread">
                    <span class="blue-pa font-16 regular"> Home </span>
                    <i
                        class="fa fa-arrow-right font-16 regular"
                        aria-hidden="true"
                    ></i>
                    <span class="blue-pa font-16 regular"> Home </span>
                    <i
                        class="fa fa-arrow-right font-16 regular"
                        aria-hidden="true"
                    ></i>
                    <span class="blue-pa font-16 regular"> Home </span>
                    <i
                        class="fa fa-arrow-right font-16 regular"
                        aria-hidden="true"
                    ></i>
                    <span class="shop font-16 regular">
                        Shop
                    </span>
                </div>
            </div>
        </div>
        <div class="d-container">
            <process></process>
            <signin v-if="$route.query.step == 1"></signin>
            <billing v-if="$route.query.step == 2"></billing>
            <payment v-if="$route.query.step == 3"></payment>
            <confirmation v-if="$route.query.step == 4"></confirmation>
        </div>
    </div>
</template>

<script>
import signin from "@/components/checkout/SignIn";
import billing from "@/components/checkout/Billing";
import confirmation from "@/components/checkout/Confirmation";
import payment from "@/components/checkout/Payment";
import process from "@/components/checkout/ProcessBar";
import { mapState } from "vuex";
export default {
    components: {
        signin,
        billing,
        confirmation,
        payment,
        process
    },
    computed: {
        ...mapState({
            step: state => state.checkout.step
        })
    }
};
</script>

<style></style>
