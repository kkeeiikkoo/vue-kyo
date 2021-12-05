<template>
  <div class="home">

  <p>
{{ $t("hello") }}</p>
<br>
<button v-on:click="changetoen">en</button>
<button v-on:click="changetojp">jp</button>
<button v-on:click="changetoch">ch</button>

    <!-- <HelloWorld /> -->


    
  </div>


</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },

    methods: {
       changetoen: function () {
        this.$i18n.locale = 'en';
        
      },
      changetojp: function () {
        this.$i18n.locale = (this.$i18n.locale !== 'jp') ? 'jp' : 'jp';
        
      },
      changetoch: function () {
        this.$i18n.locale = (this.$i18n.locale !== 'ch') ? 'ch' : 'ch';
        
      }
    }
}

</script>
