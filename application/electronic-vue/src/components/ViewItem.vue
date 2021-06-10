<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-lg-3">
        <div class="card p-0">
          <div class="card-body p-0">
            <img v-if="item.image" :src="imgUrl + item.image" alt="Image">
          </div>
        </div>
      </div> <!-- End of col -->

      <div class="col-lg-9">
        <div class="card">
          <div class="card-body">
            <h5>{{ item.title }}</h5>
            <p class="">Price: {{ item.price }} <span class="ml-3"></span>Rating: {{ item.rating }}</p>
            <p class="">{{ item.description }}</p>


            <p class="mb-1 text-secondary">Additional Information</p>
            <p class="">{{ item.additional_information }}</p>


            <div class="mt-3">
              <p class="">Manufacturer: {{ item.manufacturer }}</p>

              <p class="">Seller: {{ item.seller }}</p>

            </div>

            <div class="mt-3">
              <router-link :to="`/update/${item.id}`" class="btn btn-info">Update Details</router-link>
              <button class="btn btn-danger" v-on:click="confirmDelete">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {Constant} from "../Constant";

export default {
  name: "ViewItem",
  data() {
    return {
      item: {},
      imgUrl: Constant.IMG_URL
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get(
          Constant.API_URL + '/electronic/' + this.$route.params.id
      ).then((resp) => {
        console.log(resp);
        if (resp && resp.data) {
          this.item = resp.data;
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    confirmDelete() {
      axios.post(
          Constant.API_URL + '/electronic',
          {
            id: this.$route.params.id
          }
      ).then((resp) => {
        console.log(resp);
        this.showDeleteContext = false;
        Object.keys(this.form).forEach(key => this.form[key] = null);
      }).catch(() => {
        this.showDeleteContext = false;
      });
    },
  }
}
</script>

<style scoped>
img {
  max-height: 100%;
  max-width: 100%;
  height: auto;
  width: auto;
}
</style>
