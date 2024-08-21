<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://localhost">
        <svg
          width="80"
          height="160"
          viewBox="-0.5 0 17 17"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          class="si-glyph si-glyph-art-board"
          fill="#000000"
          transform="rotate(270)matrix(1, 0, 0, 1, 0, 0)"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <title>Header</title>
            <defs></defs>
            <g stroke-width="0.00017" fill="none" fill-rule="evenodd">
              <g fill="#434343">
                <path
                  d="M12.953,12.938 L3.046,12.938 L3.046,3.022 L12.953,3.022 L12.953,12.938 L12.953,12.938 Z M3.963,12.062 L12.098,12.062 L12.098,3.833 L3.963,3.833 L3.963,12.062 L3.963,12.062 Z"
                  class="si-glyph-fill"
                ></path>
                <rect x="12" y="0" width="0.959" height="1.943" class="si-glyph-fill"></rect>
                <rect x="3" y="0" width="0.959" height="1.984" class="si-glyph-fill"></rect>
                <rect x="12" y="14" width="0.938" height="1.922" class="si-glyph-fill"></rect>
                <rect x="3" y="14" width="0.959" height="1.984" class="si-glyph-fill"></rect>
                <rect x="14" y="12" width="1.875" height="0.994" class="si-glyph-fill"></rect>
                <rect x="0" y="12" width="1.855" height="0.918" class="si-glyph-fill"></rect>
                <rect x="14" y="3" width="1.98" height="0.938" class="si-glyph-fill"></rect>
                <rect x="0" y="3" width="1.938" height="0.957" class="si-glyph-fill"></rect>
              </g>
            </g>
          </g>
        </svg>
        <b>ZTHarpi</b>
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="/">{{ $t('header.home') }}</a>
        <a class="navbar-item" href="/artworks"> {{ $t('header.artworks') }}</a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> {{ $t('header.more') }} </a>

          <div class="navbar-dropdown">
            <a class="navbar-item"> {{ $t('header.about') }} </a>
            <a class="navbar-item is-selected"> {{ $t('header.artists') }} </a>
            <a class="navbar-item"> {{ $t('header.contact') }} </a>
            <hr class="navbar-divider" />
            <a class="navbar-item"> {{ $t('header.printing') }} </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item"><LanguageSwitcher /></div>
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>{{ $t('header.signup') }}</strong>
            </a>
            <a class="button is-light">{{ $t('header.login') }}</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import LanguageSwitcher from './LanguageSwitcher.vue'
</script>
