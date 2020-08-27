<template>
  <div id="main-banner">
    <div class="arrow-left cursor-pointer">
      <i class="fa fa-arrow-left" aria-hidden="true"></i>
    </div>
    <div class="arrow-right cursor-pointer">
      <i class="fa fa-arrow-right" aria-hidden="true"></i>
    </div>
    <div class="d-container">
      <div class="banner-title">
        <div class="banner-title-sale">
          <span class="font-mon bold">
            50%
          </span>
          <span class="font-mon unltra-light">
            OFF
          </span>
          <p class="font-24 unltra-light" style="padding-top: 50px">
            Annual Seasonal Discounts On All Kinds Of Jewelry In Selected
            Categories.
          </p>
          <p class="font-24 unltra-light">
            Limited Time Only Proposition! Look For The “Sales” Label Over
            Desired Items.
          </p>
        </div>
      </div>
      <div class="d-bread">
        <span class="blue-pa font-16 regular"> Home </span>
        <i class="fa fa-arrow-right font-16 regular" aria-hidden="true"></i>
        <span class="shop font-16 regular">
          Shop
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#main-banner {
  position: relative;
  background: rgb(136, 77, 101);
  background: linear-gradient(
    69deg,
    rgba(136, 77, 101, 1) 0%,
    rgba(136, 77, 101, 1) 51%,
    rgba(101, 110, 131, 1) 100%
  );


  .arrow-left,
  .arrow-right {
    display: inline-block;
    position: absolute;
    top: 44%;
    background-color: #212331;
    padding: 20px;
    i {
      color: #ffffff;
      font-size: 36px;
    }
  }
  .arrow-left:hover,
  .arrow-right:hover {
    background-color: #00bcd4;
  }
  .arrow-right {
    right: 0;
  }
  .banner-title {
    padding: 100px 0;
  }
  .banner-title-sale {
    text-align: right;
    .font-mon {
      font-size: 100px;
      color: #ffffff;
    }
    .unltra-light {
      color: #ffffff;
    }
  }
}
</style>
