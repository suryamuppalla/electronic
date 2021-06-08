<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-lg-12">
        <h5 class="text-center mb-3 text-primary">Update Item Information</h5>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 offset-lg-3">
        <div class="card" v-if="form.title">
          <div class="card-body">
            <form v-on:submit.prevent="submitForm">
              <div class="form-group">
                <label>Title</label>
                <input type="text" class="form-control" placeholder="Title" v-model="form.title">
              </div>

              <div class="form-group">
                <label>Description</label>
                <textarea class="form-control" placeholder="Description" v-model="form.description"></textarea>
              </div>

              <div class="form-group">
                <label>Price</label>
                <input type="number" class="form-control" placeholder="Price" v-model="form.price">
              </div>

              <div class="form-group">
                <label>Rating</label>
                <input type="number" class="form-control" placeholder="Rating" v-model="form.rating">
              </div>

              <div class="form-group">
                <label>Seller</label>
                <input type="text" class="form-control" placeholder="Seller" v-model="form.seller">
              </div>

              <div class="form-group">
                <label>Manufacturer</label>
                <input type="text" class="form-control" placeholder="Manufacturer" v-model="form.manufacturer">
              </div>

              <div class="form-group">
                <label>Images</label>
                <input type="file" class="form-control" ref="images" @change="previewFiles">
              </div>

              <div class="form-group">
                <label>Additional Information</label>
                <textarea class="form-control" placeholder="Additional Information"
                          v-model="form.additional_information"></textarea>
              </div>

              <div class="d-flex justify-content-start align-items-center">
                <button class="btn btn-primary" type="submit">Submit</button>
                <button class="btn btn-warning ml-3" type="button" v-on:click="deleteItem()" v-if="!showDeleteContext">
                  Delete Item
                </button>
                <button class="btn btn-danger ml-3" type="button" v-on:click="confirmDelete" v-if="showDeleteContext">
                  Confirm Delete?
                </button>
              </div>
            </form>

            <div class="alert alert-success mt-3" v-if="showAlert">
              <p class="text-success mb-1">Electronic Item has been updated successfully.</p>
              <router-link class="" to="/">Go to Home</router-link>
            </div>
          </div>
        </div>

        <div class="alert alert-danger text-center" v-if="!form.title">
          <p class="text-danger mb-0">
            No Product details was found with the given Id, Please contact support for more information.
          </p>

          <p class="mb-0 mt-2">
            <router-link to="/">Go to Home</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {Constant} from "../Constant";

export default {
  name: "UpdateItem",
  data() {
    return {
      showDeleteContext: false,
      showAlert: false,
      form: {
        title: null,
        description: null,
        price: null, rating: null,
        seller: null,
        manufacturer: null,
        additional_information: null,
        image: null
      }
    }
  },

  created() {
    this.fetchDetails();
  },

  methods: {
    previewFiles(event) {
      console.log(event.target.files);
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        this.form.image = reader.result;
      }
      reader.readAsDataURL(file);
    },

    deleteItem() {
      this.showDeleteContext = true;
    },

    confirmDelete() {
      axios.delete(
        Constant.API_URL + '/electronic/' + this.$route.params.id,
      ).then((resp) => {
        console.log(resp);
        this.showDeleteContext = false;
        Object.keys(this.form).forEach(key => this.form[key] = null);
      }).catch(() => {
        this.showDeleteContext = false;
      });
    },

    submitForm() {
      axios.put(
          Constant.API_URL + '/electronic/' + this.$route.params.id,
        this.form
      ).then(() => {
        Object.keys(this.form).forEach(key => {
          this.form[key] = null;
        });
        this.$refs.images.value = null;
        this.$router.push('/view/'+this.$route.params.id);
      }).catch((err) => {
        console.log(err)
      })
    },

    fetchDetails() {
      axios.get(
          Constant.API_URL + '/electronic/' + this.$route.params.id
      ).then((resp) => {
        if (resp && resp.data) {
          this.form = resp.data;
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
