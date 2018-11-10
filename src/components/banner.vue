<template lang="pug">
  div.container-fluid
    .row
      .col-sm-12
        .input-group.input-group-lg.mb-3
          .input-group-prepend
            .btn-group(role='group')
              b-dropdown(text="Filtrar por:" variant='outline-light')
                b-dropdown-item#filtroSeries(href='#' @click='filtroSeries' value="series") Series
                b-dropdown-item#filtroPeliculas(href='#' @click='filtroPeliculas' value="peliculas") Peliculas
                b-dropdown-item#filtroAnimes(href='#' @click='filtroAnimes' value="animes") Animes
          input.form-control(type='text', v-bind:placeholder='tipo', aria-label='Buscar Peliculas' v-model="busqueda")
          .input-group-append
            b-button(type='button' variant='primary' @click="buscar") Buscar
            b-button(type='button' variant='danger' @click="borrar") ×
</template>
<script>
  export default{
    props: ['tipo','busqueda'],
    methods: {
      filtroSeries(){
        //pasar parametros en vez de props
        this.$emit('filter-series')
      },
      filtroPeliculas(){
        //pasar parametros en vez de props
        this.$emit('filter-movie')
      },
      filtroAnimes(){
        //pasar parametros en vez de props
        this.$emit('filter-anime')
      },
      buscar(){
        this.$emit('search')
      },
      borrar(){
        this.$emit('delete')
      }
    }
  }
</script>
