<template>
    <div id="shop-cart">
        <div id="banner">
            <div class="d-container">
                <div class="banner-cart d-row space-between">
                    <div class="banner-cart-text ">
                        <span class="font-mon bold font-50">
                            WOO
                        </span>
                        <span class="font-mon unltra-light font-50">
                            CART
                        </span>
                    </div>
                    <div class="banner-cart-icon">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
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
        <div class="cart-info">
            <div class="d-container">
                <div class="cart-quantity gray-text font-24 unltra-light">
                    You have
                    <span class="blue-pa font-24 unltra-light"
                        >{{ this.carts.length }} Items</span
                    >
                    In Your Cart
                </div>
                <div class="cart">
                    <div class="cart-header d-row">
                        <div
                            class="d-col6 font-mon font-16 bold white-text cursor-pointer"
                            style="padding-left: 80px"
                        >
                            PRODUCT
                        </div>
                        <div
                            class="d-col2 font-mon font-16 bold white-text cursor-pointer d-center"
                        >
                            PRICE
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
                    </div>
                    <div class="d-container-cart">
                        <div
                            class="cartsss d-row d-flex-center"
                            v-for="(cart, index) in carts"
                            :key="index"
                        >
                            <div class="d-col6 d-row ">
                                <i
                                    class="fa fa-times-circle cursor-pointer"
                                    aria-hidden="true"
                                    @click="remove(index)"
                                ></i>
                                <div
                                    class="cart-img d-inline-block"
                                    :class="cart.img"
                                ></div>
                                <span
                                    class="blue-pa font-16 d-inline-block"
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
                            <div class="d-col2">
                                <span
                                    class="cart-price font-24 gray-price unltra-light"
                                    >{{ cart.minPrice }} $</span
                                >
                            </div>
                            <div class="d-col2">
                                <div class="gr-button-change">
                                    <button
                                        class="change-amount gray-price unltra-light font-16"
                                        @click="
                                            changeAmount({
                                                id: cart.id,
                                                method: 'desc'
                                            })
                                        "
                                    >
                                        -
                                    </button>
                                    <div
                                        class="amount d-inline-block gray-price unltra-light font-16"
                                    >
                                        {{ cart.amount }}
                                    </div>
                                    <button
                                        class="change-amount gray-price font-16 unltra-light"
                                        @click="
                                            cart.quantity > cart.amount
                                                ? changeAmount({
                                                      id: cart.id,
                                                      method: 'asc'
                                                  })
                                                : showErrAlert()
                                        "
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div class="d-col2">
                                <span
                                    class="cart-price font-24 gray-price unltra-light"
                                >
                                    {{
                                        (cart.minPrice * cart.amount).toFixed(2)
                                    }}
                                    $
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="cart-footer d-row">
                        <div class="d-col6">
                            <input
                                type="text"
                                class="input-pormotion gray-pa"
                                placeholder="Enter Coupon Code Here ..."
                            />
                            <button class="cart-apply font-mon bold blue-pa">
                                apply
                            </button>
                        </div>
                        <div class="d-col6 d-right">
                            <button
                                class="update-cart font-mon bold bg-blue-pa d-upper cursor-pointer"
                                @click="showSuccessAlert"
                            >
                                update cart
                            </button>
                            <router-link
                                :to="{ name: 'Checkout', query: { step: '1' } }"
                                tag="button"
                                class="cart-checkout font-mon bold d-upper cursor-pointer"
                            >
                                <i
                                    class="fa fa-check-circle-o"
                                    aria-hidden="true"
                                ></i>
                                checkout
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="cart-shipping">
            <div class="d-container">
                <div class="d-row">
                    <div class="d-col6 pr-20">
                        <h2 class="d-upper font-mon unltra-light font-36">
                            caculate shipping
                        </h2>
                        <div class="form-location">
                            <select class="select-country">
                                <option value="" selected style="display: none">
                                    Select Your Country</option
                                >
                                name="" id="select-locate"
                                aria-placeholder="Select Your Country" >
                                <option value="Ha Noi">Viet Nam</option>
                                <option value="Da Nang">American</option>
                                <option value="Ho Chi Minh">China</option>
                            </select>
                            <div class="d-row" style="padding: 20px 0">
                                <div class="d-col6" style="padding-right: 10px">
                                    <input
                                        type="text"
                                        placeholder="State / Country"
                                        class="text-country"
                                    />
                                </div>
                                <div class="d-col6" style="padding-left: 10px">
                                    <input
                                        type="text"
                                        placeholder="Post / Zip"
                                        class="text-country"
                                    />
                                </div>
                            </div>
                            <div class="btn-update-total">
                                <button
                                    class="update-btn d-upper blue-pa font-mon bold"
                                >
                                    updates total
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="d-col6 pl-20">
                        <h2 class="d-upper font-mon unltra-light font-36">
                            cart total
                        </h2>
                        <div class="wrap-cart-price">
                            <div class="cart-total-prices">
                                <div class="d-row d-flex d-align-center">
                                    <div
                                        class="d-col6 font-16 gray-text bg-gray-text"
                                    >
                                        Subtotal
                                    </div>
                                    <div class="cart-wrap">
                                        <div class="d-col6  gray-text">
                                            $1234
                                        </div>
                                    </div>
                                </div>
                                <div class="d-row d-align-center">
                                    <div
                                        class="d-col6 font-16 gray-text bg-gray-text"
                                    >
                                        Shipping and Handing
                                    </div>
                                    <div class="d-col6 ">
                                        <div class="cart-wrap">
                                            <div class="cart-flat">
                                                <button
                                                    class="btn-flat1 font-16"
                                                ></button
                                                ><span class="gray-text "
                                                    >Flat rate: 3.99$</span
                                                >
                                            </div>
                                            <div class="cart-flat">
                                                <button
                                                    class="btn-flat font-16"
                                                ></button
                                                ><span class="gray-text "
                                                    >Free shipping: 3.99$</span
                                                >
                                            </div>
                                            <div class="cart-flat">
                                                <button
                                                    class="btn-flat font-16"
                                                ></button
                                                ><span class="gray-text font-16"
                                                    >Flat rate: 3.99$</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-row d-align-center">
                                    <div class="d-col6 gray-text bg-gray-text">
                                        Total
                                    </div>
                                    <div class="cart-wrap">
                                        <div class="d-col6 gray-text font-16">
                                            $ 2015.0
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cart-interested">
            <div class="d-container">
                <div class="d-row">
                    <div class="d-col6">
                        <h2 class="d-upper font-mon unltra-light font-36">
                            you may be interested in
                        </h2>
                    </div>
                    <div class="d-col6 d-flex d-align-center">
                        <div class="cart-br"></div>
                    </div>
                </div>
                <div class="d-row cart-wrap-inte" style="margin: 0 -15px">
                    <div
                        class="d-col2"
                        v-for="(item, index) in interested"
                        :key="index"
                    >
                        <div :class="item.img"></div>
                        <div class="tit ">
                            <p class="gray-text font-16 d-center">
                                {{ item.title }}
                            </p>
                            <p class="blue-pa font-16 d-center">
                                {{ item.minPrice }}
                            </p>
                        </div>
                        <div class="news">
                            <div class="sales font-mon bold" v-if="item.isSale">
                                SALE!
                            </div>
                            <div
                                class="new font-mon bold d-center"
                                v-if="item.isNew"
                            >
                                NEW
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    data() {
        return {
            amount: 1
        };
    },
    computed: {
        ...mapState({
            carts: state => state.cart.cart,
            interested: state => state.product.interestedProduct
        })
    },
    methods: {
        ...mapMutations({
            remove: "cart/removeProduct",
            changeAmount: "cart/changeAmount"
        }),
        showErrAlert() {
            this.$swal({
                icon: "error",
                title: "Oops...",
                text: "Sorry this product is not enough!"
            });
        },
        showSuccessAlert() {
            this.$swal({
                icon: "success",
                title: "Successfully!"
            });
        }
    }
};
</script>

<style lang="scss">
#shop-cart {
    #banner {
        .d-bread {
            i {
                color: #5f727f;
            }
            .shop {
                color: #5f727f;
            }
        }
        background-color: #e9f0ef;

        .banner-cart-icon {
            i {
                font-size: 100px;
            }
        }
    }

    #cart-shipping {
        .wrap-cart-price {
            padding: 60px 0;
        }
        padding: 80px 0;
        .cart-total-prices {
            border-left: 1px solid #dfe5e8;
            border-right: 1px solid #dfe5e8;
            border-top: 1px solid #dfe5e8;
            .cart-wrap {
                padding: 0 20px;
                flex: 0 0 50%;
            }
            .bg-gray-text {
                padding: 25px 20px;
                background-color: #f0f3f2;
                border-right: 1px solid #dfe5e8;
            }
            .d-row {
                border-bottom: 1px solid #dfe5e8;
            }
        }
        .btn-flat {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: #99a9b5;
        }
        .btn-flat1 {
            height: 9px;
            border-radius: 50%;
            background-color: #fff;
            border: 2px solid #99a9b5;
            box-sizing: content-box;
        }
        .btn-flat,
        .btn-flat1 {
            margin-right: 10px;
        }
        .cart-flat {
            padding: 2px 0;
        }
        .form-location {
            ::placeholder {
                color: #99a9b5;
            }
            padding: 60px 0;

            .select-country {
                border: 1px solid #dfe5e8;
                width: 100%;
                padding: 15px 20px;
                border-radius: 4px;
                color: #99a9b5;
            }
            .text-country {
                border: 1px solid #dfe5e8;
                width: 100%;
                padding: 15px 20px;
                border-radius: 4px;
                color: #99a9b5;
            }
            .update-btn {
                background-color: #fff;
                font-size: 19px;
                padding: 15px 20px;
                border: 3px solid #00bcd4;
                border-radius: 4px;
            }
        }
    }
}
</style>
