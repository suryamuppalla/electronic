<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-lg-6 offset-lg-3">
        <div class="card">
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

              <div class="form-group">
                <button class="btn btn-primary" type="submit">Submit</button>
              </div>
            </form>

            <div class="alert alert-success mt-3" v-if="showAlert">
              <p class="text-success mb-1">Electronic Item has been added successfully.</p>
              <router-link class="" to="/">Go to Home</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "AddItem",

  data() {
    return {
      showAlert: false,
      form: {
        title: null,
        description: null,
        price: null, rating: null,
        seller: null,
        manufacturer: null,
        additional_information: null,
        image: null,
        uploadImage: null
      }
    }
  },

  created() {
  },

  methods: {
    previewFiles(event) {
      const file = event.target.files[0];
      let formData = new FormData();
      formData.append('file', file);
      this.form.uploadImage = formData;
    },

    submitForm() {
      axios({
        url: 'http://localhost/2004138/electronic/index.php/api/upload',
        method: 'POST',
        data: this.form.uploadImage,
        headers: {"Content-Type": "multipart/form-data"},
      }).then((resp) => {

        delete this.form.uploadImage;
        this.form.image = resp.data;
        axios.post(
          'http://localhost/2004138/electronic/index.php/api/electronic',
          this.form
        ).then((resp) => {
          Object.keys(this.form).forEach(key => {
            this.form[key] = null;
          });
          this.$refs.images.value = null;
          this.showAlert = true;
        }).catch((err) => {
          console.log(err)
        });
      }).catch(error => {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>

</style>
