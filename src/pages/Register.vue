<template>
  <form @submit.prevent="uploadFile">
  <div>
    <input type="file" @change="onFileChange" ref="fileUpload" multiple />
    <button type="submit">Upload</button>
  </div>
</form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      selectedFile: null,
      validExtensions: ['jpg', 'jpeg', 'png', 'gif'],
      maxSize: 2 * 1024 * 1024 // 2 MB
    };
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const fileExtension = file.name.split('.').pop().toLowerCase();
        if (!this.validExtensions.includes(fileExtension)) {
          alert("Invalid file type. Only jpg, jpeg, png, and gif files are allowed.");
          this.selectedFile = null;
          return;
        }
        if (file.size > this.maxSize) {
          alert("File size exceeds the 2 MB limit.");
          this.selectedFile = null;
          return;
        }
        this.selectedFile = file;
      }
    },
    async uploadFile() {
      if (!this.selectedFile) {
        alert("Please select a valid file first!");
        return;
      }

      // Create a FormData instance
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      // Make an API request to upload the file using Axios
      try {
        const response = await axios.post('http://172.23.128.93:3000/upload-signle', {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        console.log(response.data)
      } catch (error) {
        console.error('Error uploading file:', error);
    }
  }
  }
};
</script>