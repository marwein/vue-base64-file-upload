import Vue from 'vue/dist/vue';
import VueBase64FileUpload from '../dist/vue-base64-file-upload';

const app = new Vue({
  components: {
    VueBase64FileUpload
  },

  data() {
    return {
      customImageMaxSize: 3 // megabytes
    };
  },

  methods: {
    onFile(file) {
      console.log(file);
    },

    onLoad(dataUri) {
      console.log('data-uri is ready!');
    },

    onSizeExceeded(size) {
      console.log(size);
      alert(`Image size exceeds limits of ${this.customImageMaxSize}Mb!`);
    }
  },

  template: `
    <div class="container">
      <h2>Vue Base64 File Upload</h2>
      <div>
        <vue-base64-file-upload
          class="v1"
          accept="image/png,image/jpeg"
          image-class="v1-image"
          input-class="v1-image"
          :max-size="customImageMaxSize"
          @size-exceeded="onSizeExceeded"
          @file="onFile"
          @load="onLoad" />
      </div>
      <div>
        <vue-base64-file-upload
          class="v2"
          @size-exceeded="onSizeExceeded"
          @file="onFile"
          @load="onLoad" />
      </div>
    </div>
  `
});

app.$mount('#app');
