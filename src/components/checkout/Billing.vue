<template>
    <section id="billing">
        <div class="d-row">
            <div class="d-col6 ph-15">
                <h2 class="d-upper font-mon unltra-light font-36">
                    <i
                        class="fa fa-truck"
                        aria-hidden="true"
                        style="transform: rotateY(180deg);"
                    ></i>
                    Billing Address
                </h2>
                <form class="form-billing">
                    <div class="form-billing-country">
                        <div class="font-16 gray-text">
                            Country
                            <span class="red">*</span>
                        </div>
                        <div class="input">
                            <select name="" class="country gray-text">
                                <option value="">
                                    United States of America
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="form-billing-name">
                        <div class="d-row">
                            <div class="d-col6 ph-20">
                                <div class="font-16 gray-text">
                                    Frist Name
                                    <span class="red">*</span>
                                </div>
                                <div class="input">
                                    <input type="text" class="country" />
                                </div>
                            </div>
                            <div class="d-col6 ph-20">
                                <div class="font-16 gray-text">
                                    Last Name
                                    <span class="red">*</span>
                                </div>
                                <div class="input">
                                    <input type="text" class="country" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-billing-country">
                        <div class="font-16 gray-text">
                            Company Name
                        </div>
                        <div class="input">
                            <input type="text" class="country" />
                        </div>
                    </div>
                    <div class="form-billing-country">
                        <div class="font-16 gray-text">
                            Address<span class="red">*</span>
                        </div>
                        <div class="input">
                            <input
                                type="text"
                                class="country"
                                placeholder="Street Address"
                            />
                            <input
                                type="text"
                                class="country"
                                placeholder="Apartment,suite, unit ect(optional)"
                                style="margin-top: 10px"
                            />
                        </div>
                    </div>
                    <div class="form-billing-country">
                        <div class="font-16 gray-text">
                            Town / City <span class="red">*</span>
                        </div>
                        <div class="input">
                            <input type="text" class="country" />
                        </div>
                    </div>
                    <div class="form-billing-name">
                        <div class="d-row">
                            <div class="d-col6 ph-20">
                                <div class="font-16 gray-text">
                                    States / Country
                                    <span class="red">*</span>
                                </div>
                                <div class="input">
                                    <input type="text" class="country" />
                                </div>
                            </div>
                            <div class="d-col6 ph-20">
                                <div class="font-16 gray-text">
                                    Post / Zip
                                    <span class="red">*</span>
                                </div>
                                <div class="input">
                                    <input type="text" class="country" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-billing-name">
                        <div class="d-row">
                            <div class="d-col6 ph-20">
                                <div class="font-16 gray-text">
                                    Email Address
                                    <span class="red">*</span>
                                </div>
                                <div class="input">
                                    <input type="text" class="country" />
                                </div>
                            </div>
                            <div class="d-col6 ph-20">
                                <div class="font-16 gray-text">
                                    Phone
                                    <span class="red">*</span>
                                </div>
                                <div class="input">
                                    <input type="text" class="country" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <router-link
                    tag="button"
                    :to="{ name: 'Checkout', query: { step: '1' } }"
                    class="bill-previous font-mon font-19 bold d-upper cursor-pointer"
                >
                    <i class="fa fa-chevron-left" aria-hidden="true"></i>
                    Previous Step
                </router-link>
            </div>
            <div class="d-col6 ph-15" style="position: relative;">
                <h2 class="d-upper font-mon unltra-light font-36">
                    <i class="fa fa-globe" aria-hidden="true"></i>
                    different address?
                </h2>
                <div class="billing-other">
                    <label class="container-check-box font-16 gray-text"
                        >Ship to a different address?
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>
                </div>
                <div class="order-notes">
                    <div
                        class="font-16 gray-text"
                        style="padding: 26px 0 10px 0"
                    >
                        Order Notes
                    </div>
                    <div class="div">
                        <textarea id="text-area" rows="10" cols="50">
                        </textarea>
                    </div>
                </div>
                <div class="btn-next d-right">
                    <router-link
                        tag="button"
                        :to="{ name: 'Checkout', query: { step: '3' } }"
                        class="next d-upper font-19 bold blue-pa font-mon"
                    >
                        next step
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
#billing {
    margin: 0 -15px;
    padding: 40px 0;
    #text-area {
        width: 100%;
        padding: 10px;
        border: 1px solid #b6c6c9;
    }
    .red {
        bottom: 0 !important;
    }
    .form-billing {
        padding-top: 25px;
        .input {
            padding-top: 10px;
            .country {
                width: 100%;
                height: 40px;
                border: 1px solid #b6c6c9;
                border-radius: 4px;
                padding: 0 10px;
            }
        }
    }
    .form-billing-name {
        padding-top: 25px;
        margin: 0 -20px;
    }
    .form-billing-country {
        padding-top: 25px;
    }
    .billing-other {
        padding-top: 85px;
    }
}
</style>
