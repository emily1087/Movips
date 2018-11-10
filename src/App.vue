<template lang="pug">
.app.color-texto
  link(href="https://fonts.googleapis.com/css?family=Averia+Sans+Libre" rel="stylesheet")
  mv-navbar
  mv-banner(@filter-series="filtroSeries" @filter-movie="filtroPeliculas" @filter-anime="filtroAnimes" @delete="borrar" @search="buscar" v-bind:tipo="tipo" v-bind:busqueda="busqueda")
  .row
    .col-sm-12.col-lg-3.col-12(v-for="(movie,i) in movies" v-show=" mostrarCard")
        .card.mb-3(style='border:0px; height:80vh')
          img.card-img-top(src='https://occ-0-2207-28.1.nflxso.net/art/61c2e/c320a007046c8f349395c397bdc58b9fe8c61c2e.webp', alt='Card image cap')
          .card-body
            h5.card-title
              | {{movies[i].title}} 
              span.badge.badge-secondary {{cambiarBadge}}
            p.card-text
              | {{movies[i].overview | leerMas | noMostrar }}
            a(href="#", title="title") ...Leer Mas 
            a.btn.btn-outline-primary.mb-1.mr-1(href='#') Ver {{cambiarBotonVer}}
            a.btn.btn-outline-success.mb-1.mr-1(href='#') Descargar
            a.btn.btn-outline-danger(href='#') Favoritos
  mv-footer
</template>

<script>
import mvNavbar from './components/navbar.vue'
import mvBanner from './components/banner.vue'
import getMovies from './services/movips';
import mvFooter from './components/footer.vue'
export default {
  name: 'app',
  components: {mvNavbar, mvBanner, mvFooter},
  data () {
    var inputBuscar = document.getElementById('buscar')
    var filtroPeliculas = document.getElementById('filtroPeliculas')
    var filtroAnimes = document.getElementById('filtroAnimes')
    var filtroSeries = document.getElementById('filtroSeries')
    return {
      tipo: 'Buscar Series',
      busqueda:'',
      badge: 'Serie',
      botonVer: 'Serie',
      movies: [],
      palabras: '',
      mostrarCard: true,
    }
  },
  filters: {
    leerMas(str){
      const MAX_DE_PALABRAS  = 27
      var arrayDePalabras = str.split(" ").slice(0, MAX_DE_PALABRAS)
       //return str = arrayDePalabras.join("-")
      if(arrayDePalabras.length >= MAX_DE_PALABRAS){
        return str = arrayDePalabras.join(" ")
      }else{
        return str = "No hay descripcion en español"
      }
    },
  },
  mounted: function(){
    getMovies()
      .then(function(movies){
        this.movies = movies
      })
  },
  computed: {
    leerPalabras(){
      return this.palabras
    },
    cambiarBadge(){
      return this.badge
    },
    cambiarBotonVer(){
      return this.botonVer
    }
  },
  methods: {
    buscar(){
      moviesService.search(this.busqueda)
    },
    borrar(){
      this.busqueda = ''
    },
    filtroPeliculas(){
      if(filtroPeliculas){
        this.tipo = 'Buscar Peliculas'
        this.badge = 'Pelicula'
        this.botonVer = 'Pelicula'
      }
    },
    filtroAnimes(){
      if(filtroPeliculas){
        this.tipo = 'Buscar Animes'
        this.badge = 'Anime'
        this.botonVer = 'Anime'
      }
    },
    filtroSeries(){
      if(filtroSeries){
        this.tipo = 'Buscar Series'
        this.badge = 'Serie'
        this.botonVer = 'Serie'
      }
    },
  }
}
</script>

<style lang="stylus">
body
  font-family 'Averia Sans Libre', cursive
.color-texto
  background-color black
</style>
