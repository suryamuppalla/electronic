<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-lg-12">
        <h2 class="text-primary mb-3">Electronics</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6" v-for="item in items" :key="item.id">
        <div class="media mb-3 border p-2">
          <img :src="'http://localhost/2004138/electronic/upload/'+item.image" class="mr-3" alt="...">
          <div class="media-body">
            <h5 class="mt-0">
              <router-link :to="`/view/${item.id}`">{{ item.title }}</router-link>
            </h5>
            <p class="mb-2">
              {{ item.description.slice(0, 150) }} ...
            </p>

            <p class="mb-2">Price: {{ item.price }}</p>
            <p class="mb-2">Rating: {{ item.rating }}</p>

            <div class="d-block">
              <router-link :to="`/view/${item.id}`" class="btn btn-primary btn-sm mr-2">View Details</router-link>

              <router-link :to="`/update/${item.id}`" class="btn btn-danger btn-sm">
                Update/Delete Details
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Home',
  data() {
    return {
      items: []
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get(
        'http://localhost/2004138/electronic/index.php/api/electronic'
      ).then((resp) => {
        console.log(resp);
        if (resp && resp.data && resp.data.length) {
          this.items = resp.data;
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
    max-width: 150px;
    max-height: 150px;
  }
</style>
