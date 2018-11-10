<template lang="pug">
  div
    header.main-header
      .background-overlay.text-white
        b-navbar.color-texto(style='' toggleable='md' type='dark')
              b-navbar-toggle(target='nav_collapse')
              b-navbar-brand(href='#') Movies
              b-collapse#nav_collapse(is-nav='')
                b-navbar-nav
                  b-nav-item(href="#") Inicio
                  b-nav-item(href="#") Series
                  b-nav-item-dropdown(href="#" text="Peliculas")
                    b-dropdown-item(href="#") Accion
                    b-dropdown-item(href="#") Comedia
                    b-dropdown-item(href="#") Terror
                  b-nav-item(href="#") Favoritos
                b-navbar-nav.ml-auto
                  b-dropdown.mr-1(right='', text='Color de Fondo:' variant="outline-secondary")
                    b-dropdown-item() Blanco
                    b-dropdown-item() Negro

                  b-button.my-2.my-sm-0.mr-1(variant="success") Login
                  b-button.my-2.my-sm-0(variant="outline-info") Register
        .container
              .row.mb-3
                .col-sm.text-center.p-5
                  h1.display-4 Movips
                  p.lead las mejores peliculas, aqui,en movips
                  b-button(type='button' variant='primary') Download For Android
</template>
<style lang="stylus">
.background-overlay
  background-color rgba(48, 51, 107,0.4)
.main-header
  background-image url('../assets/collage-peliculas-accion.jpg')
</style>

