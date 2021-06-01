<template>
  <div class="prose">
    <h1>Sommaire:</h1>
    <ul>
      <li>
        <h2>Comment réassembler un génome?</h2>
        <ul>
          <li>
            <router-link to="/composition"
              >Composition de chaine de caractères</router-link
            >
          </li>
        </ul>
      </li>
      <li>
        <h2>Comparaison de chaines de caractères</h2>
        <ul>
          <li>
            <router-link to="/levenshtein">Distance de Levenshtein</router-link>
          </li>
          <li>
            <router-link to="/levenshtein-benchmark">Benchmark</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>
