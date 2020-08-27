<template>
    <div class="steps d-flex">
        <div
            class="step font-mon bold"
            :class="{ 'step-active': $route.query.step == 1 }"
        >
            1. sign in
        </div>
        <div
            class="step font-mon bold"
            :class="{ 'step-active': $route.query.step == 2 }"
        >
            2. billing
        </div>
        <div
            class="step font-mon bold"
            :class="{ 'step-active': $route.query.step == 3 }"
        >
            3. payment
        </div>
        <div
            class="step font-mon bold"
            :class="{ 'step-active': $route.query.step == 4 }"
        >
            4. confirmation
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {};
</script>

<style lang="scss">
.steps {
    padding-top: 90px;
    .step {
        flex-grow: 1;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        padding-left: 50px;
    }
    .step {
        height: 60px;
        background-color: #e9f0ef;
        position: relative;
        margin-left: 5px;
        &:before {
            content: "";
            position: absolute;
            left: 0px;
            top: 0;
            border-left: 30px solid white;
            border-top: 30px solid transparent;
            border-bottom: 30px solid transparent;
        }
        &:after {
            content: "";
            position: absolute;
            z-index: 1;
            right: -30px;
            top: 0;
            border-left: 30px solid #e9f0ef;
            border-top: 30px solid transparent;
            border-bottom: 30px solid transparent;
        }
        &:first-child {
            margin-left: 0px;
            border-radius: 5px 0 0 5px;
            &:before {
                display: none;
            }
        }
        &:last-child {
            border-radius: 0 5px 5px 0;
            &:after {
                display: none;
            }
        }
        &.step-active {
            background-color: #ffd453;
            color: black;
            // &:before {
            //     border-left: 30px solid #ffd453;
            // }
            &:after {
                border-left: 30px solid #ffd453;
            }
        }
    }
}
</style>
