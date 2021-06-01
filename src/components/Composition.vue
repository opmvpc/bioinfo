<template>
  <div class="prose">
    <h1>Composition de chaine de caractères</h1>
    <p>
      Trouver toutes les sous-chaines de caractères en fonction d'une string
      finale et d'un nombre de caractères par sous-chaines.
    </p>
    <h2>Exemple:</h2>
    <h3>Input:</h3>
    <div class="bg-gray-300 p-4">
      5 CAATCCAAC
    </div>
    <h3>Output:</h3>
    <div class="bg-gray-300 p-4">
      CAATC AATCC ATCCA TCCAA CCAAC
    </div>
    <hr />
    <div class="mb-4">
      <label for="taille">Taille</label>
      <input type="text" id="taille" class="form-input" v-model="taille" />
    </div>
    <div class="mb-4">
      <label for="chaine">Chaine de caractères</label>
      <input type="text" id="chaine" class="form-input" v-model="chaine" />
    </div>
    <div class="mb-4">
      <button class="btn" @click="getResultat()">
        Résultat
      </button>
    </div>
    <div class="mb-4">
      <label for="resultat">Résultat</label>
      <textarea
        v-model="resultat"
        type="text"
        id="resultat"
        class="form-input"
        rows="5"
        readonly
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      taille: 5,
      chaine: "CAATCCAAC",
      resultat: ""
    };
  },
  methods: {
    getResultat: function() {
      const interationCount = this.chaine.length - this.taille + 1;
      let resultats = [];
      for (let index = 0; index < interationCount; index++) {
        const sousChaine = this.chaine.substr(index, this.taille);
        resultats.push(sousChaine);
      }
      this.resultat = resultats.join("\n");
    }
  }
};
</script>

<style></style>
