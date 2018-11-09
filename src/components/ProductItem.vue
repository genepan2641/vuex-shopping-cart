<template>
    <div class="product-item">
        <div class="product-item__header">
            <div class="item-image">
                <div class="item-image__inner">
                    <img class="item-image__img" :src="`static/images/${image}`" alt="">
                </div>
            </div>
        </div>
        <div class="product-item__body">
            <div class="product-item__name">{{ name | trimString }}</div>
            <p class="product-item__price">NT$ {{ price }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: { type: String },
        price: { type: Number },
        image: { type: String }
    },
    filters: {
        trimString(val) {
            let maxLength = 35;
            return val.length > maxLength ? `${val.slice(0, maxLength)}...` : val;
        }
    }
}
</script>

<style lang="scss">
@import "~@/assets/sass/_variables.scss";
.product-item {
  border-radius: 4px;
  &:hover {
    .item-image__img {
      transform: translate(-50%, -50%) scale(1.05);
    }
  }

  &__body {
    padding: 10px 0px 0px;
  }
  &__name {
    text-align: left;
    font-size: $font-size-6;
    font-weight: 500;
    color: map-get($colors, dark);
    margin: 0px;
    height: 35px;
  }

  &__price {
    display: inline-block;
    background-color: #eee;
    padding: 3px 5px;
    font-size: $font-size-6;
    color: map-get($colors, dark);
    margin: 5px 0;
    font-weight: 700;
  }
}

.item-image {
  width: 100%;
  overflow: hidden;

  &__inner {
    width: 100%;
    padding-top: 130%;
    position: relative;
  }

  &__img {
    transition: 100ms all ease-out;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    max-height: 100%;
  }
}
</style>
