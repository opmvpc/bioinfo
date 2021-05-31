<template>
  <div>
    <h1>Distance de Levenshtein</h1>
    <p>
      Trouver la distance de Levenshtein, càd le nombre de modifications qu'il
      faudrait pour obtenir une chaine de caractères à partir d'une autre.
      Les modifications possibles sont les suivantes:
        <ul>
          <li>Ajouter une lettre</li>
          <li>Supprimer une lettre</li>
          <li>Modifier une lettre</li>
        </ul>
    </p>
    <h2>Exemple:</h2>
    <h3>Input:</h3>
    <div class="bg-gray-300 p-4">
      CAATCCAAC CATTTCACC
    </div>
    <h3>Output:</h3>
    <div class="bg-gray-300 p-4">
      3
    </div>
    <hr />
    <div class="mb-4">
      <label for="chaine1">Chaine de caractères 1</label>
      <input type="text" id="chaine1" class="form-input" v-model="chaine1" />
    </div>
    <div class="mb-4">
      <label for="chaine2">Chaine de caractères 2</label>
      <input type="text" id="chaine2" class="form-input" v-model="chaine2" />
    </div>
    <div class="mb-4">
      <button class="btn" @click.prevent="getResultat()">
        Résultat
      </button>
    </div>
    <div class="mb-4">
      <label for="resultat">Résultat</label>
      <input type="number" id="resultat" class="form-input" v-model="resultat" readonly />
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      chaine1: "CAATCCAAC",
      chaine2: "CATTTCACC",
      resultat: ""
    };
  },
  methods: {
    async getResultat() {
      await this.calculerLenvenshteinDistance().then(this.successCallback, this.failureCallback);
    },
    calculerLenvenshteinDistance() {
      return new Promise((successCallback, failureCallback) => {
        console.log("...");
        const resultat = this.levensteinIter(this.chaine1, this.chaine2)
        if (Number.isInteger(resultat)) {
          this.resultat = resultat;
          successCallback(resultat);
        } else {
          failureCallback(resultat);
        }
      });
    },
    successCallback(resultat) {
      console.log("L'opération a réussi avec le message : " + resultat);
    },
    failureCallback(erreur) {
      console.error("L'opération a échoué avec le message : " + erreur);
    },
    levensteinIter(src, tgt) {
      let realCost;

      var srcLength = src.length,
      tgtLength = tgt.length,
      tempString, tempLength; // for swapping

      var resultMatrix = new Array();
      resultMatrix[0] = new Array(); // Multi dimensional

      // To limit the space in minimum of source and target,
      // we make sure that srcLength is greater than tgtLength
      if (srcLength < tgtLength) {
        tempString = src; src = tgt; tgt = tempString;
        tempLength = srcLength; srcLength = tgtLength; tgtLength = tempLength;
      }

      for (var c = 0; c < tgtLength+1; c++) {
        resultMatrix[0][c] = c;
      }

      for (var i = 1; i < srcLength+1; i++) {
        resultMatrix[i] = new Array();
        resultMatrix[i][0] = i;
        for (var j = 1; j < tgtLength+1; j++) {
          realCost = (src.charAt(i-1) == tgt.charAt(j-1))? 0: 1;
          resultMatrix[i][j] = Math.min(
            resultMatrix[i-1][j]+1,
            resultMatrix[i][j-1]+1,
            resultMatrix[i-1][j-1] + realCost // same logic as our previous example.
          );
        }
      }

      return resultMatrix[srcLength][tgtLength];
    },
  }
};
</script>

<style></style>
