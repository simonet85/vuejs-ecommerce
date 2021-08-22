<template>
  <div id="products" class="row list-group">
    <div v-for="(product, idx) in products" :key="idx" class="item col-xs-4">
      <div class="thumbnail">
        <img
          @click="clickedImage(product)"
          class="group list-group-image"
          src="https://via.placeholder.com/400x250/000/fff"
        />
        <div class="caption">
          <h4 class="group inner list-group-item-heading">
            <a href="#">{{ product.name }}</a>
          </h4>
          <p class="group inner list-group-item-text">
            {{ product.description }}
          </p>

          <br />

          <div class="row flex flex-row align-center">
            <div class="col-xs-4">
              <p class="lead">{{ product.price | currency }}</p>
            </div>

            <div class="col-xs-8 flex flex-row align-center justify-right">
              <div
                class="number-in-stock"
                :class="{
                  few: product.inStock < 10 && product.inStock > 0,
                  none: product.inStock == 0,
                }"
              >
                {{ product.inStock }} in stock
              </div>
              <button
                class="btn btn-success"
                @click="addProductToCart(product, 1)"
                :disabled="product.inStock == 0"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { products } from "../data/products";
import { eventBus } from "../main";
export default {
  data() {
    return {
      products: products,
    };
  },
  methods: {
    addProductToCart(product, quantity) {
      eventBus.$emit("additemtocart", {
        product: product,
        quantity: quantity,
      });
    },
  },
};
</script>

<style>
#products .item img {
  background-color: #000;
}
#products .item p.lead {
  margin-bottom: 0;
}
#products .item .number-in-stock {
  margin-right: 10px;
}
#products .item .number-in-stock.few {
  color: #E0A14F;
}
#products .item .number-in-stock.none {
  color: #C45E5E;
}
</style>