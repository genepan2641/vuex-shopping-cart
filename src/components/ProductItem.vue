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
            <p class="product-item__name">{{ name | trimString }}</p>
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
  border: 1px solid #eee;
  border-radius: 4px;

  &__body {
    padding: 10px 10px 0;
  }
  &__name {
    text-align: left;
    font-size: $font-size-4;
    font-weight: 500;
    color: map-get($colors, dark);
    margin-top: 0;
  }

  &__price {
    font-size: $font-size-5;
    font-weight: 700;
    color: map-get($colors, dark);
    margin-bottom: 5px;
  }
}

.item-image {
  width: 100%;
  overflow: hidden;

  &__inner {
    width: 100%;
    padding-top: 75%;
    position: relative;
  }

  &__img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
