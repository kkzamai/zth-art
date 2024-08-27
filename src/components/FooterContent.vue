<template>
  <footer class="footer">
    <!-- Three columns created using columns class of Bulma -->
    <div class="columns">
      <!-- Column 1 -->
      <div class="column">
        <!-- Heading is left aligned, medium weight -->
        <h4 class="bd-footer-title has-text-weight-medium has-text-left">Company Name</h4>

        <!-- footer content -->
        <p class="bd-footer-link has-text-left">
          ZTHarpi is a web portal for artists who wants to promote artworks.
        </p>
      </div>

      <!-- Column 2 -->
      <div class="column">
        <h4 class="bd-footer-title has-text-weight-medium has-text-justify">Explore</h4>

        <!-- Column 2 lists with links -->
        <p class="bd-footer-link">
          <a href="https://">
            <span class="icon-text">
              <span>Practice</span>
            </span>
          </a>
          <br />
          <a href="https://">
            <span class="icon-text">
              <span>Blogs</span>
            </span>
          </a>
          <br />
          <a href="https://">
            <span class="icon-text">
              <span>Careers</span>
            </span>
          </a>
        </p>
      </div>

      <!-- Column 3 -->
      <div class="column">
        <h4 class="bd-footer-title has-text-weight-medium has-text-justify">Contact us</h4>

        <!-- Column 3 lists with links -->
        <p class="bd-footer-link">
          <a href="https://">
            <span class="icon-text">
              <span><fa-icon icon="email" />Email</span>
            </span>
          </a>
          <br />
          <a href="https://">
            <span class="icon-text">
              <span>Call Us</span>
            </span>
          </a>
          <br />
          <a href="https://">
            <span class="icon-text">
              <span>Chat with us!</span>
            </span>
          </a>
        </p>
        <p><fa-icon :icon="['fab', 'fa-linkedin']" /> <fa-icon :icon="['fab', 'fa-facebook']" /></p>
      </div>
    </div>
    <!-- Copyright symbol of company -->
    <div class="content has-text-centered">
      <p>Copyright © ZTHarpi</p>
    </div>
  </footer>
</template>
