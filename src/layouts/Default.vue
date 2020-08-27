<template>
    <div id="home">
        <header>
            <div class="top-header">
                <div class="d-container">
                    <div class="header-top d-row">
                        <div class="d-col2 ph-10">
                            <span class="gray-text">
                                <i
                                    class="fa fa-headphones gray-text"
                                    aria-hidden="true"
                                    style="padding-right: 16px"
                                ></i>
                                + 123-456-789
                            </span>
                        </div>
                        <div
                            class="d-col3 d-center ph-10"
                            style="border-left: 1px solid #b6c6c9;border-right: 1px solid #b6c6c9"
                        >
                            <div class="icons">
                                <i
                                    v-for="(icon, index) in icons"
                                    :key="index"
                                    :class="icon"
                                    class="font-16 gray-text"
                                ></i>
                            </div>
                        </div>
                        <div class="d-col7 d-right ph-10">
                            <span v-for="(faq, index) in faqs" :key="index">
                                <a href="#" class="gray-text">
                                    <i
                                        class="fa fa-chevron-right font-10"
                                        aria-hidden="true"
                                    ></i>
                                    {{ faq }}
                                </a>
                            </span>
                            <span class="wrap-btn">
                                <router-link
                                    to="/pages/WishList"
                                    tag="button"
                                    class="btn-wish-list"
                                >
                                    My WishList
                                </router-link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="menu ">
                <div class="d-container">
                    <div class="d-row">
                        <router-link
                            to="/pages/Home"
                            class="d-col2 logo cursor-pointer"
                        >
                            <span>
                                <img
                                    class="img-logo"
                                    src="@/images/logo.png"
                                    alt=""
                                />
                            </span>
                            <span class="font-mon bold">
                                THEGEM
                            </span>
                        </router-link>
                        <div class="d-col8">
                            <div class="d-row">
                                <router-link
                                    tag="div"
                                    :to="'/pages/' + menu"
                                    class="d-colAuto font-mon bold cursor-pointer d-right d-upper"
                                    v-for="(menu, index) in menus"
                                    :key="index"
                                >
                                    {{ menu }}
                                </router-link>
                            </div>
                        </div>
                        <div class="d-col2 d-right cart">
                            <img
                                src="@/images/coanh.png"
                                alt=""
                                style="padding: 0 15px"
                            />
                            <i
                                class="fa fa-search cs-i font-16"
                                aria-hidden="true"
                                style="padding-right: 20px"
                            ></i>
                            <router-link
                                to="/pages/ShopCart"
                                tag="i"
                                class="fa fa-shopping-basket font-16 cursor-pointer"
                                aria-hidden="true"
                                style="padding-right: 15px"
                            ></router-link>
                            <span class="rectangle d-center">{{
                                cart.length
                            }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <router-view> </router-view>
        </main>
        <footer>
            <div class="d-container">
                <div class="d-row ft-top">
                    <div class="d-col3 pr-40">
                        <div class="logo2">
                            <img src="@/images/biglogo.png" alt="" />
                        </div>
                        <p class="gray-pa" style="padding: 50px 0 75px 0">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Recusandae non fugit veritatis deserunt
                            temporibus sed adipisci autem minus nam
                        </p>
                        <div class="footer-header">
                            <h2 class="footer-h2 bold font-mon">
                                Contact
                                <i
                                    class="fa fa-caret-left red"
                                    aria-hidden="true"
                                ></i>
                            </h2>
                        </div>
                        <div class="ft-address">
                            <p class="gray-pa regular">
                                <i
                                    class="fa fa-map-marker gray-pa"
                                    aria-hidden="true"
                                ></i>
                                Address:
                            </p>
                            <p class="gray-pa regular">
                                908 New Hampshire Avenue Northwest
                            </p>
                            <p class="gray-pa regular">#100, Washington, DC</p>
                            <p class="gray-pa regular">20037, United States</p>
                        </div>
                        <div class="info">
                            <div
                                class="info-item"
                                v-for="(item, index) in ftIcons"
                                :key="index"
                            >
                                <i :class="item.icon"></i>
                                <span class="gray-pa">{{ item.tittle }}</span>
                                <span
                                    class="content gray-pa"
                                    :class="item.color"
                                    >{{ item.content }}</span
                                >
                            </div>
                        </div>
                    </div>
                    <div class="d-col3 pr-40">
                        <div class="recent-post">
                            <div class="footer-header">
                                <h2 class="footer-h2 bold font-mon">
                                    Recent post
                                    <i
                                        class="fa fa-caret-left red"
                                        aria-hidden="true"
                                    ></i>
                                </h2>
                            </div>
                            <div class="postss">
                                <div
                                    class="pos d-row"
                                    v-for="(pos, index) in posts"
                                    :key="index"
                                    :class="pos.border"
                                >
                                    <div class="d-col3">
                                        <div
                                            class="ft-img"
                                            :class="pos.color"
                                        ></div>
                                    </div>
                                    <div class="d-col9 ph-15">
                                        <p class="gray-pa line-clamp">
                                            {{ pos.content }}
                                        </p>
                                        <div class="d-row space-between">
                                            <p class="blue-pa">
                                                {{ pos.date }}
                                            </p>
                                            <p
                                                class="gray-pa cmt cursor-pointer"
                                            >
                                                <i
                                                    class="fa fa-comments"
                                                    aria-hidden="true"
                                                ></i>
                                                {{ pos.comment }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="use-link">
                            <div class="footer-header pv-30">
                                <h2 class="footer-h2 bold font-mon">
                                    Useful link
                                    <i
                                        class="fa fa-caret-left red"
                                        aria-hidden="true"
                                    ></i>
                                </h2>
                            </div>
                            <div class="links">
                                <div
                                    class="links-item pv-12"
                                    v-for="(link, index) in links"
                                    :key="index"
                                    :class="link.border"
                                >
                                    <div class="dot "></div>
                                    <p
                                        class="gray-pa cursor-pointer d-inline-block"
                                    >
                                        {{ link.content }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-col3 pr-40">
                        <div class="footer-header">
                            <h2 class="footer-h2 bold font-mon">
                                Email us
                                <i
                                    class="fa fa-caret-left red"
                                    aria-hidden="true"
                                ></i>
                            </h2>
                        </div>
                        <div class="forms">
                            <div class="form-item">
                                <i class="fa fa-user" aria-hidden="true"></i>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    class="footer-input"
                                />
                            </div>
                            <div class="form-item">
                                <i
                                    class="fa fa-envelope"
                                    aria-hidden="true"
                                ></i>
                                <input
                                    type="text"
                                    placeholder="Your Email"
                                    class="footer-input"
                                />
                            </div>
                            <div class="form-item">
                                <input
                                    type="text"
                                    placeholder="Your message"
                                    class="footer-input"
                                    style="height: 76px"
                                />
                            </div>
                            <div class="form-item">
                                <button
                                    class="btn-send-message gray-pa font-mon bold"
                                >
                                    send message
                                </button>
                            </div>
                        </div>
                        <div class="project">
                            <div class="footer-header pv-25">
                                <h2 class="footer-h2 bold font-mon">
                                    project / clients ?
                                    <i
                                        class="fa fa-caret-left red"
                                        aria-hidden="true"
                                    ></i>
                                </h2>
                            </div>

                            <div class="ft-images d-row pv-30">
                                <div
                                    class="d-col4"
                                    v-for="(img, index) in imgs"
                                    :key="index"
                                >
                                    <div class="ft-imgs" :class="img"></div>
                                </div>
                            </div>
                            <div class="gr-btn">
                                <button
                                    class="btn-slide cursor-pointer"
                                ></button>
                                <button
                                    class="btn-slide cursor-pointer"
                                ></button>
                                <button
                                    class="btn-slide cursor-pointer"
                                ></button>
                            </div>
                        </div>
                    </div>
                    <div class="d-col3" style="padding-left: 25px">
                        <div class="footer-header">
                            <h2 class="footer-h2 bold font-mon">
                                flickr feed
                                <i
                                    class="fa fa-caret-left red"
                                    aria-hidden="true"
                                ></i>
                            </h2>
                        </div>
                        <div class="imgs-feed">
                            <div class="img-feed d-row">
                                <div class="d-col4 p-5" v-for="n in 9" :key="n">
                                    <div class="ft-imgs bg-gray-pa"></div>
                                </div>
                            </div>
                        </div>
                        <div class="footer-header pv-25">
                            <h2 class="footer-h2 bold font-mon">
                                newsletters
                                <i
                                    class="fa fa-caret-left red"
                                    aria-hidden="true"
                                ></i>
                            </h2>
                        </div>
                        <p class="gray-pa pv-30">
                            Subscribe to our MailChimp newsletter and stay up to
                            date with all events coming straight in your
                            mailbox:
                        </p>
                        <div class="ft-email">
                            <div class="ft-email-input d-flex">
                                <input
                                    type="text"
                                    placeholder="Your email address"
                                    class="footer-input"
                                />
                                <i
                                    class="fa fa-chevron-right"
                                    aria-hidden="true"
                                ></i>
                            </div>
                            <p class="gray-text pv-15 font-14">
                                <span class="blue-pa">*</span>Personal
                                information will be encrypted
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ft-bot">
                <div class="d-container">
                    <div class="d-row ">
                        <div class="d-col3">
                            <span class="gray-pa">© Copyright 2015</span>
                            <span class="blue-pa">CodexThemes</span>
                        </div>
                        <div class="d-col6">
                            <span
                                class="gray-pa"
                                v-for="pri in privacy"
                                :key="pri.title"
                                :class="pri.border"
                            >
                                {{ pri.title }}
                            </span>
                        </div>
                        <div class="d-col3 ft-cl3">
                            <i
                                v-for="(i, index) in iconsFt"
                                :key="index"
                                :class="i.icon"
                                :style="{ color: i.color }"
                            ></i>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
            icons: [
                "fa fa-twitter",
                "fa fa-facebook",
                "fa fa-instagram",
                "fa fa-facebook-official",
                "fa fa-youtube-play",
                "fa fa-youtube-play",
                "fa fa-pinterest-p"
            ],
            iconsFt: [
                {
                    icon: "fa fa-twitter",
                    color: "#16a7b9"
                },
                {
                    icon: "fa fa-facebook",
                    color: "#315bd6"
                },
                {
                    icon: "fa fa-instagram",
                    color: "#0c5482"
                },
                {
                    icon: "fa fa-facebook-official",
                    color: "#786f4c"
                },
                {
                    icon: "fa fa-youtube-play",
                    color: "#ae0e0e"
                },
                {
                    icon: "fa fa-youtube-play",
                    color: "#ae0e0e"
                },
                {
                    icon: "fa fa-pinterest-p",
                    color: "#ff5757"
                }
            ],
            faqs: [
                "My Account",
                "FAQ",
                "Contact Us",
                "NewSeller SignUp",
                "Shipping Terms"
            ],
            menus: [
                "home",
                "pages",
                "blog",
                "portfolios",
                "shop",
                "feature",
                "element"
            ],
            ftIcons: [
                {
                    icon: "fa fa-headphones",
                    tittle: "Phone:",
                    content: "+1 916-875-2235",
                    color: ""
                },
                {
                    icon: "fa fa-fax",
                    tittle: "Fax:",
                    content: "+1 916-875-2235",
                    color: ""
                },
                {
                    icon: "fa fa-envelope-o",
                    tittle: "Email:",
                    content: "info@domain.ltd",
                    color: "blue-pa"
                },
                {
                    icon: "fa fa-globe",
                    tittle: "Website:",
                    content: "www.codex-themes.com",
                    color: "blue-pa"
                }
            ],
            posts: [
                {
                    color: "bg-gray-text",
                    content:
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut itaquemolestiae quia atque, delectus vitae ipsam a laboriosam perspiciatisquos nisi in assumenda, dignissimos saepe qui alias quasi!Accusantium, pariatur.",
                    date: "27 Dec 2015",
                    comment: "0",
                    border: "post-br"
                },
                {
                    color: "bg-gray-pa",
                    content:
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut itaquemolestiae quia atque, delectus vitae ipsam a laboriosam perspiciatisquos nisi in assumenda, dignissimos saepe qui alias quasi!Accusantium, pariatur.",
                    date: "27 Dec 2015",
                    comment: "15",
                    border: "post-br"
                },
                {
                    color: "bg-gray-text",
                    content:
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut itaquemolestiae quia atque, delectus vitae ipsam a laboriosam perspiciatisquos nisi in assumenda, dignissimos saepe qui alias quasi!Accusantium, pariatur.",
                    date: "27 Dec 2015",
                    comment: "0",
                    border: ""
                }
            ],
            links: [
                {
                    content: "General Information For Users",
                    border: "post-br"
                },
                {
                    content: "Interactive Fairy Tales",
                    border: "post-br"
                },
                {
                    content: "Official Storybook Maker Website",
                    border: "post-br"
                },
                {
                    content: "Everyday Mathematics Links",
                    border: "post-br"
                },
                {
                    content: "Basic Knowledge and Experience",
                    border: ""
                }
            ],
            imgs: [
                "bg-gray-text",
                "bg-gray-pa",
                "bg-gray-200",
                "bg-gray-text",
                "bg-gray-pa",
                "bg-gray-200"
            ],
            privacy: [
                {
                    title: "Support",
                    border: "br-pr"
                },
                {
                    title: "Contact Us",
                    border: "br-pr"
                },
                {
                    title: "Disclaimer",
                    border: "br-pr"
                },
                {
                    title: "Privacy Policy",
                    border: ""
                }
            ]
        };
    },
    computed: {
        ...mapState({
            cart: state => state.cart.cart
        })
    }
};
</script>

<style lang="scss">
#home {
    header {
        .icons {
            i {
                padding: 0 8px;
            }
            i:nth-child(6) {
                color: red;
            }
        }
        .btn-wish-list {
            background-color: #494c64;
            padding: 8px 15px;
            border-radius: 3px;
        }
        .wrap-btn {
            padding-left: 20px;
        }
        .top-header {
            border-top: 3px solid #00bcd4;
            border-bottom: 1px solid #b6c6c9;
            background-color: #f4f6f7;
        }
        .header-top {
            .d-col2,
            .d-col3 {
                line-height: 40px;
            }
            .d-col8 {
                .gray-text {
                    padding: 0 10px;
                }
            }
            .d-col7 {
                .gray-text {
                    padding: 0 10px;
                }
            }
        }
        .menu {
            padding: 20px 0;
            box-shadow: 0px 0px 2px 0px #888888;
            .d-col8 {
                padding: 10px 0;
                .bold {
                    padding: 8px 15px;
                }
                .bold:hover {
                    color: #00bcd4;
                }
                .bold:focus {
                    border: 2px solid black;
                }
            }
            .logo {
                .bold {
                    font-size: 27px;
                    color: #3c3950;
                }
                img {
                    width: 20%;
                    position: relative;
                    top: 6px;
                }
            }
            .cart {
                padding: 18px 0;
            }
            .rectangle {
                display: inline-block;
                width: 20px;
                height: 16px;
                background: #00bcd4;
                color: #f4f6f7;
                position: relative;
            }
            .rectangle::before {
                content: "";
                width: 0;
                height: 0;
                border-top: 8px solid transparent;
                border-right: 12px solid #00bcd4;
                border-bottom: 8px solid transparent;
                position: absolute;
                left: -11px;
            }
        }
    }
    footer {
        .ft-bot {
            padding: 42px 0;
            background-color: #181828;
            .ft-cl3 {
                text-align: right;
                i {
                    padding: 0 10px;
                }
            }
            .d-col6 {
                text-align: center;
                .gray-pa {
                    padding: 0 20px;
                }
                .br-pr {
                    border-right: 1px solid #99a9b5;
                }
            }
        }
        .ft-email {
            i {
                color: #99a9b5;
                display: inline-block;
                background-color: #394050;
                padding: 20px;
            }
            .blue-pa {
                position: relative;
                top: -4px;
            }
            .gray-text {
                color: #4a4b5b;
            }
        }
        .footer-input {
            width: 100%;
            background-color: #181828;
            color: #99a9b5;

            border: 1px solid #494c64;
            border-radius: 2px;

            font-size: 16px;
            padding: 15px 20px;
        }
        .footer-input:focus {
            border: #00bcd4 1px solid !important;
        }
        .imgs-feed {
            padding: 40px 0;
            .d-col4 {
                padding: 5px;
            }
            .img-feed {
                margin: 0 -5px;
            }
        }
        .ft-imgs {
            height: 100%;
            width: 100%;
            padding-top: 100%;
        }
        .project {
            .gr-btn {
                text-align: center;
                position: relative;
                top: -24px;
            }
            .btn-slide {
                width: 12px;
                height: 12px;
                border-radius: 50%;

                background-color: #394050;
                margin: 0 5px;
            }
            .btn-slide:hover {
                background-color: #99a9b5;
            }
            .ft-images {
                margin: 0 -5px;
            }
            .d-col4 {
                padding: 5px;
            }
        }
        .forms {
            padding: 40px 0;
            .btn-send-message {
                background-color: #394050;
                font-size: 14px;
                text-transform: uppercase;
                width: 100%;
                text-align: center;
                padding: 14px 0;

                border-radius: 2px;
            }
            .form-item {
                padding: 7px 0;
                position: relative;
                i {
                    color: #494c64;
                    display: inline-block;
                    position: absolute;

                    font-size: 22px;
                    right: 15px;
                    top: 29%;
                }
            }
        }

        .links {
            .links-item:hover {
                .dot {
                    background-color: #fff;
                }
                .gray-pa {
                    color: #00bcd4;
                }
            }
            .gray-pa {
                padding-left: 10px;
            }
        }
        .dot {
            padding: 2px;
            border-radius: 50%;
            background-color: #00bcd4;
            display: inline-block;
            position: relative;
            top: -3px;
        }
        .pr-40 {
            padding-right: 30px;
        }
        .postss {
            padding: 40px 0;
        }
        .cmt:hover {
            color: #00bcd4;
            i {
                color: #00bcd4;
            }
        }
        .pos {
            padding: 11px 0;
        }
        .post-br {
            border-bottom: dashed 1px #99a9b5;
        }
        .ft-img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
        }
        .ft-top {
            padding: 130px 0 80px 0;
        }
        background-color: #212331;

        .fa-map-marker {
            font-size: 20px;
            padding-right: 15px;
        }
        p {
            line-height: 24px;
        }
        .ft-address {
            border-bottom: 1px dashed #99a9b5;
            padding: 35px 0;
        }
        .info {
            padding: 30px 0;
        }
        .info-item {
            padding: 7px 0;
            span {
                font-size: 16px;
            }
            i {
                color: #99a9b5;
                padding-right: 10px;
            }
        }
    }
}
@media (max-width: 1200px) {
    .wrap-btn {
        display: none;
    }
    header {
        .d-col7 {
            align-items: center;
            display: flex;
            justify-content: center;
        }
    }
}
@media (max-width: 1024px) {
    header {
        .header-top {
            justify-content: center;
            .d-col2,
            .d-col3 {
                display: none;
            }
        }
        .menu {
            .cart,
            .d-col8 {
                display: none;
            }
            .d-row {
                justify-content: center;
            }
            .logo {
                display: flex;
                justify-content: center;
                .img-logo {
                    width: 100% !important;
                    top: 0 !important;
                }
            }
        }
    }
    .categories {
        .d-row {
            .d-col3 {
                display: none;
            }
            .d-col9 {
                flex: 0 0 100%;
                max-width: 100%;
            }
        }
    }
}
@media only screen and (max-width: 576px) {
    header {
        .header-top {
            .d-col3 {
                display: block !important;
                border: none !important;
            }
            .d-col7 {
                display: none;
            }
        }
    }
    .search-bar {
        .d-col6 {
            text-align: center;
        }
    }
}
</style>
