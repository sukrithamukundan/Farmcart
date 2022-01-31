<template>
  <footer class="footer_area">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-3 col-xl-2 col-lg-3 col-md-3 col-sm-3">
          <div class="footer-widget">
            <div class="footer-title">Navigate</div>
            <ul class="list-unstyled">
              <router-link to="/"><li>About Us</li></router-link>
              <router-link to="/"><li>Blog</li></router-link>
              <router-link to="/"><li>Contact Us</li></router-link>
              <router-link to="/"><li>Sitemap</li></router-link>
            </ul>
          </div>
        </div>

        <div class="col-3 col-xl-2 col-lg-3 col-md-3 col-sm-3">
          <div class="footer-widget">
            <div class="footer-title">Collection</div>
            <ul class="list-unstyled">
              <router-link to="/"><li>New arrivals</li></router-link>
              <router-link to="/"><li>Featured</li></router-link>
              <router-link to="/"><li>Catalog</li></router-link>
              <router-link to="/"><li>Brands</li></router-link>
            </ul>
          </div>
        </div>

        <div class="col-3 col-xl-2 col-lg-3 col-md-3 col-sm-3">
          <div class="footer-widget">
            <div class="footer-title">Catagories</div>
            <ul class="list-unstyled">
              <router-link to="/"><li>Vegies</li></router-link>
              <router-link to="/"><li>Fruits</li></router-link>
              <router-link to="/"><li>Tools</li></router-link>
              <router-link to="/"><li>Animals</li></router-link>
              <router-link to="/"><li>Others</li></router-link>
            </ul>
          </div>
        </div>

        <div class="col-3 col-xl-2 col-lg-3 col-md-3 col-sm-3">
          <div class="footer-widget">
            <h4>Farmcart</h4>
            <a href="mailto:#">abc@farmcart.com</a>
            <h6>+123-456-7890</h6>
          </div>
        </div>
        <div class="col-3 p-4 col-xl-2 col-lg-3 col-md-3 col-sm-3">
        <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/2d5c8486-a531-4377-ab50-32eac218a9f4"></iframe></div>

      </div>

      <div class="row justify-content-between">
        <div class="col-xl-7 col-lg-6 col-md-6 col-sm-6 col-6">
          <div class="tiny-footer">
            <p>Copyright © All Rights Reserved 2022 </p>
          </div>
        </div>
        <div class="col-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 text-right">
          <div class="social-info">
            <strong>Get social</strong>
            <img class="twitter" src="@/assets/twitter.png">
            <img class="pinterest" src="@/assets/pinterest.png">
            <img class="facebook" src="@/assets/facebook.png">
            <img class="instagram" src="@/assets/insta.png">
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer_area {
  position: relative;
  z-index: 1;
  color: #2c3539;
  background-color: #fefefe;
}

.footer-widget {
  padding-top: 60px;
}

.footer-title {
  padding-bottom: 20px;
  font-weight: bold;
}

.list-unstyled a {
  text-decoration: none;
}

.list-unstyled a li {
  color: #2c3e50;
  margin-bottom: 10px;
}

.social-info>img {
  padding-left: 10px;
}

.social-info>img:hover {
  opacity: 0.7;
}

</style>
