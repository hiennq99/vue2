<template>
    <div class="categories d-container">
        <div class="d-row">
            <div class="d-col3 category ph-15">
                <div class="footer-header">
                    <h2 class="footer-h2 bold font-mon black font-19">
                        Categories
                        <i class="fa fa-caret-left red" aria-hidden="true"></i>
                    </h2>
                </div>
                <div class="category-menu">
                    <div
                        class=" menu-item cursor-pointer"
                        v-for="(category, index) in categories"
                        :key="index"
                        :id="`item-` + index"
                    >
                        <div class="d-row items">
                            <div class="d-col9">
                                <div class="font-mon bold gray-price ct-name">
                                    {{ category.name }}
                                </div>
                            </div>
                            <div class="d-col3 d-right">
                                <i
                                    class="fa fa-chevron-down font-16 gray-price"
                                    aria-hidden="true"
                                    v-if="category.hasChild"
                                    @click="displayItem(`item-` + index)"
                                ></i>
                            </div>
                        </div>
                        <div class="d-sub-menu" v-if="category.hasChild">
                            <div class="d-row">
                                <div
                                    class="sub-menu-item"
                                    v-for="(subItem, indexx) in subCategories"
                                    :key="indexx"
                                    :id="`id-` + (indexx + index * 20)"
                                >
                                    <div class="d-row d-wrapp">
                                        <div class="d-col9 ">
                                            <div
                                                class="font-mon gray-pa ct-name d-flex d-align-center"
                                            >
                                                <div
                                                    class="d-retangle d-inline-block bg-gray-text"
                                                ></div>
                                                {{ subItem.name }}
                                            </div>
                                        </div>
                                        <div class="d-col3 d-right">
                                            <i
                                                class="fa fa-chevron-down gray-pa"
                                                aria-hidden="true"
                                                v-if="subItem.hasChild"
                                                @click="
                                                    displayItem(
                                                        `id-` +
                                                            (indexx +
                                                                index * 20)
                                                    )
                                                "
                                            ></i>
                                        </div>
                                    </div>
                                    <div
                                        class="d-second-menu"
                                        v-if="subItem.hasChild"
                                    >
                                        <div
                                            class="d-row"
                                            v-for="(subItem,
                                            index) in subCategories"
                                            :key="index"
                                        >
                                            <div class="d-row second-sub">
                                                <div class="d-col9 ">
                                                    <div
                                                        class="font-mon gray-pa ct-name d-flex d-align-center"
                                                    >
                                                        <div
                                                            class="d-retangle d-inline-block bg-gray-text"
                                                        ></div>
                                                        {{ subItem.name }}
                                                    </div>
                                                </div>
                                                <div class="d-col3 d-right">
                                                    <i
                                                        class="fa fa-chevron-down gray-pa"
                                                        aria-hidden="true"
                                                        v-if="subItem.hasChild"
                                                    ></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="input-search">
                    <input type="text" placeholder="Search for products ..." />
                    <i class="fa fa-search gray-pa" aria-hidden="true"></i>
                </div>
                <div class="footer-header">
                    <h2 class="footer-h2 bold font-mon black font-19">
                        filter by price
                        <i class="fa fa-caret-left red" aria-hidden="true"></i>
                    </h2>
                </div>
                <div class="filter pb-50">
                    <input
                        type="range"
                        min="0"
                        max="300"
                        class="input-filter"
                        v-model="price"
                    />
                    <div class="d-row">
                        <div class="d-col6">
                            <button
                                @click="filterByPrice"
                                style="width: 60%; background-color: #fff; height: 30px; border: 3px solid #00bcd4; border-radius: 4px"
                                class="filter blue-pa font-mon d-upper bold cursor-pointer"
                            >
                                Filter
                            </button>
                        </div>
                        <div
                            class="d-col6"
                            style="display: flex; align-items: center;"
                        >
                            <span class="gray-pa font-16">Price: &nbsp;</span>
                            <span class="gray-text font-16">
                                {{ this.price }}$ - 300$</span
                            >
                        </div>
                    </div>
                </div>
                <div class="footer-header mv-25">
                    <h2 class="footer-h2 bold font-mon black font-19">
                        filter by color
                        <i class="fa fa-caret-left red" aria-hidden="true"></i>
                    </h2>
                </div>
                <div class="filter-options pb-50">
                    <select
                        name=""
                        class="filter gray-pa font-16"
                        v-model="colorSort"
                    >
                        <option value="" style="display:none">
                            Any Color</option
                        >
                        <option value="white"> white</option>
                        <option value="black"> black</option>
                        <option value="brown"> brown</option>
                    </select>
                </div>
                <div class="footer-header mv-25">
                    <h2 class="footer-h2 bold font-mon black font-19">
                        filter by size
                        <i class="fa fa-caret-left red" aria-hidden="true"></i>
                    </h2>
                </div>
                <div class="filter-options pb-50">
                    <select
                        name=""
                        class="filter gray-pa font-16"
                        v-model="sizeSort"
                    >
                        <option value="" style="display:none"> Any Size</option>
                        <option value="Small"> Small</option>
                        <option value="Medium"> Medium</option>
                        <option value="Large"> Large</option>
                    </select>
                </div>
                <div class="footer-header mv-25">
                    <h2 class="footer-h2 bold font-mon black font-19">
                        recently viewed
                        <i class="fa fa-caret-left red" aria-hidden="true"></i>
                    </h2>
                </div>
                <div class="recently-viewd pb-50">
                    <div class="d-row bg-gray-col">
                        <div class="d-col4">
                            <div class="recently-viewd-avartar"></div>
                        </div>
                        <div class="d-col8">
                            <div class="gray-text font-16">
                                Product Title Here
                            </div>
                            <div class="rate">
                                <StarRating
                                    style="display: inline-block; padding: 5px 0"
                                    class="d-left"
                                    :rating="4"
                                    :show-rating="false"
                                    :star-size="16"
                                    :read-only="true"
                                ></StarRating>
                            </div>
                            <div class="price font-19 gray-text">
                                $35.00
                            </div>
                        </div>
                    </div>
                    <div class="d-row bg-gray-col d-relative">
                        <div class="d-col4 ">
                            <div class="recently-viewd-avartar"></div>
                        </div>
                        <div class="d-col8">
                            <div class="gray-text font-16">
                                Product Title Here
                            </div>
                            <div class="rate">
                                <StarRating
                                    style="display: inline-block; padding: 5px 0"
                                    class="d-left"
                                    :rating="4"
                                    :show-rating="false"
                                    :star-size="16"
                                    :read-only="true"
                                ></StarRating>
                            </div>
                            <div class="price font-19 gray-text">
                                $35.00
                            </div>
                        </div>
                        <div class="percent">
                            %
                        </div>
                    </div>
                    <div class="d-row bg-gray-col" style="align-items: center">
                        <div class="d-col4">
                            <div class="recently-viewd-avartar"></div>
                        </div>
                        <div class="d-col8">
                            <div class="gray-text font-16">
                                Product Title Here
                            </div>
                            <div class="price font-19 gray-text">
                                $35.00
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-header mv-25">
                    <h2 class="footer-h2 bold font-mon black font-19">
                        product tags
                        <i class="fa fa-caret-left red" aria-hidden="true"></i>
                    </h2>
                </div>
                <div class="product-tag pb-50">
                    <div
                        class="tags-item gray-text font-16 d-inline-block cursor-pointer"
                        v-for="(tag, index) in arrayCut"
                        :key="index"
                        @click="filterByTagName(tag.title)"
                    >
                        {{ tag.title }}
                    </div>
                </div>
                <div class="footer-header mv-25">
                    <h2 class="footer-h2 bold font-mon black font-19">
                        featured products
                        <i class="fa fa-caret-left red" aria-hidden="true"></i>
                    </h2>
                </div>
                <div class="feature-product">
                    <div class="d-row bg-gray-col d-relative">
                        <div class="d-col4 ">
                            <div class="reg-avatar"></div>
                        </div>
                        <div class="d-col8">
                            <div class="gray-text font-16">
                                Product Title Here
                            </div>
                            <div class="rate">
                                <StarRating
                                    style="display: inline-block; padding: 5px 0"
                                    class="d-left"
                                    :rating="4"
                                    :show-rating="false"
                                    :star-size="16"
                                    :read-only="true"
                                ></StarRating>
                            </div>
                            <div class="price font-19 gray-text">
                                $35.00
                            </div>
                        </div>
                        <div class="percent">
                            %
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-col9 category ph-15">
                <div class="wrapper-category" style="margin: 0 -20px">
                    <div style=" display: flex; flex-wrap: wrap">
                        <div class="d-col4" v-for="index in 6" :key="index">
                            <div class="category-item">
                                <div
                                    class=" img-product"
                                    :class="categories[index].img"
                                ></div>
                                <div class="title-category d-center pv-20">
                                    <div
                                        class="__title d-upper bold font-16 font-mon"
                                    >
                                        {{ categories[index].name }}
                                    </div>
                                    <div class="__br"></div>
                                    <div class="__quantity ">
                                        <span class="gray-pa">
                                            {{ categories[index].quantity }}
                                            items
                                        </span>
                                    </div>
                                </div>
                                <div
                                    class="img-footer"
                                    :class="categories[index].img"
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div class="gr-btn-next d-center">
                        <button class="btn-nexts cursor-pointer">
                            <i
                                class="fa fa-chevron-left gray-pa"
                                aria-hidden="true"
                            ></i>
                        </button>
                        <button class="btn-nexts cursor-pointer">
                            <i
                                class="fa fa-chevron-right gray-pa"
                                aria-hidden="true"
                            ></i>
                        </button>
                    </div>
                </div>
                <div class="search-bar">
                    <div class="d-row">
                        <div class="d-col6">
                            <select
                                class="slect-sort gray-pa font-16"
                                v-model="sorts"
                            >
                                <option
                                    style="display: none"
                                    class="gray-pa"
                                    value=""
                                    >Default Sorting</option
                                >
                                <option value="max">Maximum Price</option>
                                <option value="min">Minimum Price</option>
                            </select>
                            <div class="switch-sort d-inline-block">
                                <span
                                    class="d-upper unltra-light font-mon gray-price"
                                    >desc</span
                                >
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span
                                        class="slider round"
                                        @click="changeDesc"
                                    ></span>
                                </label>

                                <span
                                    class="d-upper unltra-light font-mon gray-price"
                                    >asc</span
                                >
                            </div>
                        </div>
                        <div class="d-col6 d-right ">
                            <span class="font-16 gray-pa ph-15">
                                Showing 1-{{ perPage }} of
                                {{ this.products.length }} results
                            </span>
                            <select
                                class="slect-sort gray-pa font-16"
                                v-model="perPage"
                            >
                                <option class="gray-pa" value="12"
                                    >Show 12 on page</option
                                >
                                <option value="20">Show 20 on page</option>
                                <option value="30">Show 30 on page</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="list-products">
                    <div class="d-row">
                        <div
                            class="d-col4 ph-20"
                            v-for="(product, index) in arrayCut"
                            :key="index"
                        >
                            <div
                                class="list-product-item"
                                :id="`product-` + index"
                            >
                                <div class="img-product bg-gray-200"></div>
                                <div class="news">
                                    <div
                                        class="sales font-mon bold"
                                        v-if="product.isSale"
                                    >
                                        SALE!
                                    </div>
                                    <div
                                        class="new font-mon bold d-center"
                                        v-if="product.isNew"
                                        :class="{ newTrans: product.isSale }"
                                    >
                                        NEW
                                    </div>
                                </div>
                                <div class="product-info">
                                    <div class="rating-product d-center">
                                        <StarRating
                                            class="d-center"
                                            :rating="product.rating"
                                            :show-rating="false"
                                            :star-size="16"
                                            :read-only="true"
                                            v-if="product.rating >= 4"
                                        ></StarRating>
                                        <div
                                            class="__br"
                                            v-if="product.rating < 4"
                                        ></div>
                                    </div>
                                    <div class="product-title  d-center pv-8">
                                        <span
                                            class="d-upper font-mon font-16 bold title-txt"
                                        >
                                            {{ product.title }}
                                        </span>
                                    </div>
                                    <div class="product-price d-center pv-8">
                                        <span class="blue-pa">
                                            {{ product.minPrice }} -
                                        </span>
                                        <span class="blue-pa">
                                            {{ product.maxPrice }}$
                                        </span>
                                    </div>
                                    <div class="product-logo d-center pv-8">
                                        <div class="product-icons is-active">
                                            <i
                                                class="fa fa-shopping-cart gray-pa"
                                                aria-hidden="true"
                                                @click="
                                                    active(
                                                        `#product-` +
                                                            index +
                                                            ' ' +
                                                            `.view-cart`,
                                                        `#product-` + index
                                                    );
                                                    product.quantity >
                                                    product.amount
                                                        ? addToCart(product)
                                                        : showErralert();
                                                "
                                            ></i>
                                            <i
                                                class="fa fa-list-alt gray-pa"
                                                aria-hidden="true"
                                                @click="
                                                    active(
                                                        `#product-` +
                                                            index +
                                                            ' ' +
                                                            `.view-wishlist`,
                                                        `#product-` + index
                                                    );
                                                    addToWishList(product);
                                                "
                                            ></i>
                                            <i
                                                class="fa fa-heart-o gray-pa"
                                                aria-hidden="true"
                                                @click="
                                                    likedProduct(product.id)
                                                "
                                                :class="{
                                                    isLiked: product.isLiked
                                                }"
                                            ></i>
                                        </div>
                                        <router-link
                                            to="/pages/shopcart"
                                            tag="div"
                                            class="view-cart non-active"
                                        >
                                            <i
                                                class="fa fa-list-ul gray-pa"
                                                aria-hidden="true"
                                            ></i>
                                            <span class="gray-pa"
                                                >View Cart</span
                                            >
                                        </router-link>
                                        <router-link
                                            to="/pages/WishList"
                                            class="view-wishlist non-active"
                                            tag="div"
                                        >
                                            <i
                                                class="fa fa-star-o"
                                                aria-hidden="true"
                                            ></i>
                                            <span class="gray-pa"
                                                >View Wishlist</span
                                            >
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav class="d-center">
                    <transition name="fade">
                        <button
                            class="btn-nav-left cursor-pointer"
                            @click="nextPage(-1)"
                            v-if="this.pageNumber > 0"
                        >
                            <i
                                class="fa fa-chevron-left"
                                aria-hidden="true"
                            ></i>
                        </button>
                    </transition>

                    <button
                        class="btn-nav gray-text font-mon unltra-light cursor-pointer"
                        v-for="n in this.countPages"
                        :key="n"
                        @click="navigation(n - 1)"
                    >
                        {{ n }}
                    </button>
                    <transition name="fade">
                        <button
                            class="btn-nav-left cursor-pointer"
                            @click="nextPage(1)"
                            v-if="this.pageNumber + 1 < this.countPages"
                        >
                            <i
                                class="fa fa-chevron-right"
                                aria-hidden="true"
                            ></i>
                        </button>
                    </transition>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import StarRating from "vue-star-rating";
export default {
    data() {
        return {
            arrayCut: [],
            perPage: 12,
            sorts: "",
            desc: true,
            price: 0,
            colorSort: "",
            sizeSort: "",
            countPages: 0,
            pageNumber: 0
        };
    },
    components: {
        StarRating
    },
    computed: {
        ...mapState({
            categories: state => state.product.categories,
            subCategories: state => state.product.childrenCategory,
            products: state => state.product.products
        })
    },
    watch: {
        perPage(val) {
            this.arrayCut = this.products.slice(0, parseInt(val));
            this.countPages = Math.ceil(this.products.length / val);
            console.log(this.countPages);
        },
        sorts(val) {
            if (val === "max") {
                this.sort("maxPrice", this.desc);
            } else {
                this.sort("minPrice", this.desc);
            }
        },
        desc(val) {
            this.sort(this.sorts, this.desc);
        },
        colorSort(newVal) {
            this.arrayCut = this.products
                .filter(item => item.color === newVal)
                .slice(0, parseInt(this.perPage));
        },
        sizeSort(newVal) {
            this.arrayCut = this.products
                .filter(item => item.size === newVal)
                .slice(0, parseInt(this.perPage));
        },
        pageNumber(newVal) {
            this.arrayCut = this.products.slice(
                this.pageNumber * this.perPage,
                this.perPage * (this.pageNumber + 1)
            );
        }
    },
    created() {
        this.arrayCut = this.products.slice(0, this.perPage);
        this.countPages = Math.ceil(this.products.length / this.perPage);
    },
    methods: {
        ...mapActions({
            likedProduct: "product/likedProduct",
            addToCart: "cart/addToCart",
            addToWishList: "wishlist/addToWishList"
        }),
        displayItem(element) {
            let item = document.querySelector(`#` + element);
            if (!item.children[1].classList.contains("active"))
                item.children[1].classList.add("active");
            else item.children[1].classList.remove("active");
        },
        active(name, namePa) {
            let item = document.querySelector(namePa + " " + `.is-active`);
            item.classList.replace("is-active", "non-active");
            let item1 = document.querySelector(name);
            item1.classList.replace("non-active", "is-active");
        },
        sort(field, method) {
            this.arrayCut.sort(function(a, b) {
                if (method) {
                    if (parseInt(a[field]) < parseInt(b[field])) return 1;
                    else return -1;
                    return 0;
                } else {
                    if (parseInt(a[field]) > parseInt(b[field])) return 1;
                    else return -1;
                    return 0;
                }
            });
        },
        showErralert() {
            this.$swal({
                icon: "error",
                title: "Oops...",
                text: "Sorry this product is not enough!"
            });
        },
        filterByPrice() {
            this.arrayCut = this.products
                .filter(item => parseInt(item.minPrice) >= parseInt(this.price))
                .slice(0, parseInt(this.perPage));
        },
        filterByTagName(tagName) {
            this.arrayCut = this.products.filter(
                item => item.title === tagName
            );
        },
        changeDesc() {
            this.desc = !this.desc;
        },
        navigation(count) {
            this.pageNumber = count;
        },
        nextPage(value) {
            this.pageNumber = this.pageNumber + value;
        }
    }
};
</script>

<style lang="scss">
.categories {
    padding: 100px 0;
    .product-tag {
        .tags-item {
            padding: 10px;
            border: 1px solid #5f727f;
            margin: 3px 3px;
        }
    }
    .recently-viewd {
        .bg-gray-col:not(:first-child) {
            border-top: 1px solid #b6c6c9;
        }
        .d-row {
            padding: 15px;
            .d-col8 {
                padding-left: 10px;
            }
        }
        .recently-viewd-avartar {
            background-color: #050505;
            padding-top: 100%;
            border-radius: 50%;
        }
    }
    .filter-options {
        select {
            width: 100%;
            height: 40px;
            padding: 0 15px;
            border: 2px solid #b6c6c9;
            border-radius: 4px;
        }
    }
    .filter {
        input {
            background: #99a9b5;
            width: 100%;
            margin: 25px 0;
        }
        .input-filter::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 15px;
            height: 15px;
            background: #00bcd4;
            cursor: pointer;
        }
    }
    .input-search {
        position: relative;
        padding-bottom: 50px;
        input {
            width: 100%;
            height: 40px;
            padding: 0 15px;
            border: 2px solid #b6c6c9;
            border-radius: 4px;
        }
        i {
            font-size: 20px;

            display: inline-block;
            position: absolute;
            right: 4%;
            top: 10%;
        }
    }
    .is-active {
        display: block;
    }
    .non-active {
        display: none;
    }
    nav {
        .btn-nav-left,
        .btn-nav {
            width: 30px;
            height: 30px;
            border-radius: 4px;
            margin: 0 10px;
        }
        .btn-nav-left {
            background-color: #b6c6c9;
            i {
                font-size: 10px;
                color: #fff;
            }
        }
        .btn-nav {
            background-color: #fff;
            border: 1px solid #b6c6c9;
            transition: all 0.5s;
            &:nth-child(1) {
                color: #fff;
                background-color: #3c3950 !important;
            }
        }
        .btn-nav:hover {
            color: #fff;
            background-color: #00bcd4;
            border: 1px solid #00bcd4;
        }
    }
    .news {
        top: 5%;
        right: -6%;
        .new {
            top: 0;
        }
        .newTrans {
            transform: translateY(-18px);
        }
    }
    .list-product-item {
        position: relative;
        .bg-gray-200 {
            transition: all 0.5s;
        }
    }
    .list-product-item:hover {
        cursor: pointer;
        .bg-gray-200 {
            background-color: #a8e2e9;
        }
    }
    .list-products {
        margin: 0 -20px;
        .product-title {
            min-height: 55px;
        }
        .title-txt {
            width: 80%;
            overflow: hidden;
        }
        .img-product {
            padding-top: 130%;
        }
        .product-info {
            padding: 25px 0;
            border: 1px solid #f0f3f2;
            margin-bottom: 25px;
        }
        .product-logo {
            .fa {
                padding: 0 5px;
            }
            .isLiked {
                color: red;
            }
        }
    }
    .search-bar {
        margin: 60px 0 40px 0;
        padding: 10px;
        background-color: #f0f3f2;

        select {
            border: none;
            padding: 5px 20px;
            option {
                color: #000;
            }
        }
        .switch-sort {
            padding: 0 23px;
        }
    }
    .switch {
        top: -6px;
        margin: 0 5px;
    }
    .btn-nexts {
        width: 30px;
        height: 30px;
        margin: 0 8px;
        background-color: #fff;
        border: 1px solid #393d50;
        border-radius: 3px;
        i {
            font-size: 10px;
        }
        transition: all 0.3s;
    }
    .btn-nexts:hover {
        cursor: pointer;
        background-color: #393d50;
        i {
            color: #fff;
        }
    }
    .bg-gray-img {
        background-color: #dfe5e8;
    }
    .title-category {
        min-height: 120px;
    }
    .title-category:hover {
        background-color: #393d50;
        cursor: pointer;
        .__title,
        .__quantity {
            color: #f4f6f7;
        }
        .__br {
            width: 40%;
        }
    }
    .category-item {
        padding: 0 20px;
        margin-bottom: 50px;
        .img-product {
            padding-top: 75%;
        }
        .img-footer {
            padding-top: 20%;
        }
    }

    .category-menu {
        margin: 30px 0 70px 0;
        border-left: 1px solid #dfe5e8;
        border-right: 1px solid #dfe5e8;
        border-bottom: 1px solid #dfe5e8;
        .menu-item {
            border-top: 1px solid #dfe5e8;
            .items {
                padding: 20px;
            }
            .items:hover {
                .font-mon,
                i {
                    color: #00bcd4;
                }
            }
        }
        .ct-name {
            overflow: hidden;
        }

        .d-sub-menu {
            width: 100%;
            background-color: #f4f6f7;
            display: none;
            .sub-menu-item {
                width: 100%;
                padding: 20px 0;
                border-top: 1px solid #dfe5e8;
                .d-wrapp {
                    padding: 0 20px;
                }
                .d-wrapp:hover {
                    .font-mon,
                    i {
                        color: #00bcd4;
                    }
                    .d-retangle {
                        background-color: #00bcd4;
                    }
                }
            }
            .second-sub {
                padding-left: 35px;
                padding-right: 20px;
                background-color: #e4eaed;
                width: 100%;
                padding: 20px 20px 20px 35px;
            }
            .second-sub:hover {
                .font-mon,
                i {
                    color: red;
                }
                background-color: #d8e3e8;
                .d-retangle {
                    background-color: red;
                }
            }
            .d-second-menu {
                display: none;
                margin-bottom: -20px;
            }
        }
    }
}

@media (max-width: 1200px) {
    .wrapper-category,
    .list-products {
        margin: 0 !important;
    }
}
</style>
