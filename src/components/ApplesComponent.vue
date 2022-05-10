<template>
  <div class="apples">
    <h1>APPPPPPPPLES!!</h1>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ApplesComponent',
  props: {
    msg: String
  },
  created() {
      console.log('Apples Created', )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
