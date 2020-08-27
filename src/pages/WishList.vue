<template>
    <div id="my-wish-list">
        <div id="banner">
            <div class="d-container">
                <div class="banner-cart d-row space-between">
                    <div class="banner-cart-text ">
                        <span class="font-mon bold font-50">
                            MY
                        </span>
                        <span class="font-mon unltra-light font-50">
                            WISHLIST
                        </span>
                    </div>
                    <div class="banner-cart-icon">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
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
                            STOCK STATUS
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
                            <div class="d-col6 d-row ">
                                <i
                                    class="fa fa-times-circle"
                                    aria-hidden="true"
                                    @click="remove(index)"
                                ></i>
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
                            <div class="d-col2">
                                <span
                                    class="cart-price font-24 gray-price unltra-light"
                                    >{{ cart.maxPrice }} $</span
                                >
                            </div>
                            <div class="d-col2 gr-button-change">
                                <span
                                    class="font-16 gray-text"
                                    v-if="cart.inStock"
                                >
                                    In Stock
                                </span>
                                <span
                                    class="font-16"
                                    style="color: red"
                                    v-if="!cart.inStock"
                                >
                                    Out of Stock
                                </span>
                            </div>
                            <div class="d-col2">
                                <button
                                    class="add-to-cart bg-gray-pa d-flex d-align-center"
                                >
                                    <i
                                        class="fa fa-shopping-cart"
                                        aria-hidden="true"
                                        style="font-size: 24px; padding-right: 10px"
                                    ></i>
                                    <div
                                        class="d-inline-block font-mon bold"
                                        @click="addToCart(cart)"
                                    >
                                        ADD TO CART
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cart-footer d-row d-align-center cart-ft">
                    <h2
                        class="gray-text font-24 light"
                        style="padding-right: 8px"
                    >
                        Share your wishlist on:
                    </h2>
                    <div class="d-colAuto">
                        <button
                            class="btn-share"
                            v-for="(item, index) in icons"
                            :key="index"
                            style="color: #fff;
                "
                            :style="{ backgroundColor: item.color }"
                        >
                            <i :class="item.icon"></i>
                        </button>
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
                                {{ item.maxPrice }}
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
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    computed: {
        ...mapState({
            carts: state => state.wishlist.wishList,
            icons: state => state.icons.iconsFt,
            interested: state => state.product.interestedProduct
        })
    },
    methods: {
        deleteElement(key) {
            this.carts.splice(key, 1);
        },
        ...mapMutations({
            remove: "wishlist/removeProduct"
        }),
        ...mapActions({
            addToCart: "cart/addToCart"
        })
    }
};
</script>

<style lang="scss">
#my-wish-list {
    .btn-share {
        border-radius: 50%;
        padding: 3px 6px;
        margin: 0 8px;
        cursor: pointer;
    }
}
</style>
