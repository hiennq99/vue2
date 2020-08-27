<template>
    <section id="payment">
        <div class="cart-info">
            <div class="d-container">
                <div class="cart-quantity gray-text font-24 unltra-light">
                    <i
                        class="fa fa-shopping-cart font-36"
                        aria-hidden="true"
                        style="color: black;
                        padding-right: 20px"
                    ></i>
                    <span
                        class="font-36 d-upper font-mon regular"
                        style="color: black"
                        >Your Order</span
                    >
                </div>
                <div class="cart">
                    <div class="cart-header d-row">
                        <div
                            class="d-col8 font-mon font-16 bold white-text cursor-pointer ph-20"
                        >
                            PRODUCT
                        </div>
                        <div
                            class="d-col2 font-mon font-16 bold white-text cursor-pointer d-center"
                        >
                            QUANTITY
                        </div>
                        <div
                            class="d-col2 font-mon font-16 bold white-text cursor-pointer d-center"
                        >
                            TOTAL
                        </div>
                        <div
                            class="d-col2 font-mon font-16 bold white-text cursor-pointer d-center"
                        ></div>
                    </div>
                    <div class="d-container-cart">
                        <div
                            class="cartsss d-row d-flex-center"
                            v-for="(cart, index) in carts"
                            :key="index"
                        >
                            <div class="d-col8 d-row ph-20">
                                <div
                                    class="cart-img d-inline-block"
                                    :class="cart.img"
                                ></div>
                                <span
                                    class="blue-pa font-16  d-inline-block"
                                    style="width: 35%"
                                    >{{ cart.title }}</span
                                >
                                <span
                                    class="gray-pa font-16"
                                    v-if="cart.size !== ''"
                                    >size: {{ cart.size }}, &nbsp;
                                </span>
                                <span
                                    class="gray-pa font-16"
                                    v-if="cart.color !== ''"
                                    >color: {{ cart.color }}</span
                                >
                            </div>
                            <div class="d-col2 font-19 gray-pa">
                                {{ cart.amount }}
                            </div>
                            <div class="d-col2 font-19 gray-pa">
                                ${{ cart.amount * cart.maxPrice }}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="cart-footer d-row d-align-center"
                    style="border: 1px solid #dfe5e8; border-top: none"
                >
                    <div class="d-row" style="width: 100%; ">
                        <div class="d-col8" style="position: relative">
                            <div class="wrap-pay">
                                <input
                                    type="text"
                                    class="input-pormotion gray-pa"
                                    placeholder="Enter Coupon Code Here ..."
                                />
                                <button
                                    class="cart-apply font-mon bold blue-pa"
                                >
                                    apply
                                </button>
                            </div>
                        </div>
                        <div class="d-col4 ph-15">
                            <div
                                class="d-row pv-15"
                                style="border-bottom: 1px solid #f0f3f2"
                            >
                                <div class="d-col6 gray-text">
                                    Cart Subtotal
                                </div>
                                <div
                                    class="d-col6 d-center"
                                    style="color: #050505;padding-left: 50px;font-size: 20px"
                                >
                                    $12345
                                </div>
                            </div>
                            <div
                                class="d-row pv-15"
                                style="border-bottom: 1px solid #f0f3f2"
                            >
                                <div class="d-col6 font-16 gray-text">
                                    Shipping and Handling
                                </div>
                                <div
                                    class="d-col6 gray-text font-16 d-center"
                                    style="padding-left: 50px; "
                                >
                                    $12345
                                </div>
                            </div>
                            <div class="d-row pv-15">
                                <div class="d-col6 font-16 gray-text">
                                    Order Total
                                </div>
                                <div
                                    class="d-col6 font-24 blue-pa d-center"
                                    style="padding-left: 50px"
                                >
                                    $12345
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-container" style="padding-bottom: 120px">
            <div class="wrapper-radio gray-text">
                <label class="box-radio"
                    >Direct Bank Transfer
                    <input type="radio" checked="checked" name="radio" />
                    <span class="checkmark"></span>
                </label>
            </div>
            <div class="box-full">
                <div class="content-box-full">
                    <div class="tick d-flex-center">
                        <img src="" alt="" />
                    </div>
                    <div class="text">
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        won’t be shipped until the funds have cleared in our
                        account.
                    </div>
                </div>
            </div>
            <div>
                <div class="wrapper-box-radio">
                    <label class="box-radio gray-text"
                        >Cheque Payment
                        <input type="radio" name="radio" />
                        <span class="checkmark"></span>
                    </label>
                </div>
                <div class="wrapper-box-radio gray-text">
                    <label class="box-radio"
                        >PayPal
                        <span style="color: #00bcd4">What is PayPal?</span>
                        <input type="radio" name="radio" />
                        <span class="checkmark"></span>
                    </label>
                    <div class="visa">
                        <img src="@/images/visa.png" alt="" />
                    </div>
                </div>
            </div>
            <div class="d-row">
                <div class="d-col6">
                    <router-link
                        tag="button"
                        :to="{ name: 'Checkout', query: { step: '2' } }"
                        class="bill-previous font-mon font-19 bold d-upper cursor-pointer"
                    >
                        <i class="fa fa-chevron-left" aria-hidden="true"></i>
                        Previous Step
                    </router-link>
                </div>
                <div class="d-col6 d-right">
                    <router-link
                        tag="button"
                        :to="{ name: 'Checkout', query: { step: '4' } }"
                        class="order font-mon font-19 bold d-upper cursor-pointer"
                    >
                        <i class="fa fa-address-card-o" aria-hidden="true"></i>
                        Place order
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    computed: {
        ...mapState({
            carts: state => state.product.products,
            icons: state => state.icons.iconsFt,
            interested: state => state.product.interestedProduct
        })
    }
};
</script>

<style lang="scss">
#payment {
    .order {
        color: #ffffff;
        border: 3px solid #00bcd4;
        background-color: #00bcd4;
        padding: 16px 20px;
        margin-top: 55px;
        border-radius: 4px;
        i {
            color: #ffffff;
            font-size: 20px;
            position: relative;
            padding-right: 15px;
        }
    }
    .wrap-pay {
        position: absolute;
        bottom: 0;
    }
    .cart-info .d-container-cart {
        border-bottom: none;
    }
    .wrapper-radio {
        margin-top: 95px;
        margin-bottom: 30px;
    }
    .wrapper-box-radio {
        padding-top: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #99a9b5;
        &:first-child {
            margin-top: 30px;
            border-top: 1px solid #99a9b5;
        }
        &:last-child {
            display: flex;
            justify-content: space-between;
            align-items: center;
            fieldset {
                padding: 0px 5px;
                border: 1px solid #99a9b5;
            }
        }
    }
    .box-radio {
        display: block;
        position: relative;
        padding-left: 25px;
        margin-bottom: 12px;
        font-size: 16px;
        input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            &:checked ~ .checkmark:after {
                display: block;
                top: 2px;
                left: 2px;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: black;
            }
        }
        .checkmark {
            position: absolute;
            top: 2px;
            left: 0;
            height: 16px;
            width: 16px;
            background-color: white;
            border: 2px solid #99a9b5;
            border-radius: 50%;
            &:after {
                content: "";
                position: absolute;
                display: none;
            }
        }
    }
    .box-full {
        background-color: #a3e7f0;
        padding: 45px;
        border-radius: 5px;
        .content-box-full {
            display: flex;
            align-items: center;
            position: relative;
            .tick {
                min-width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: #84b2c0;
                margin-right: 20px;
            }
            .text {
                font-size: 16px;
                color: #3c3950;
                padding-right: 50px;
            }
        }
    }
}
</style>
