<template>
  <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
    <div class="prose">
      <h1>Distance de Levenshtein</h1>
      <div>
        Trouver la distance de Levenshtein, càd le nombre de modifications qu'il
        faudrait pour obtenir une chaine de caractères à partir d'une autre. Les
        modifications possibles sont les suivantes:
        <ul>
          <li>Ajouter une lettre</li>
          <li>Supprimer une lettre</li>
          <li>Modifier une lettre</li>
        </ul>
      </div>
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
        <input
          @input="resultMatrix = []"
          type="text"
          id="chaine1"
          class="form-input"
          v-model="chaine1"
        />
      </div>
      <div class="mb-4">
        <label for="chaine2">Chaine de caractères 2</label>
        <input
          @input="resultMatrix = []"
          type="text"
          id="chaine2"
          class="form-input"
          v-model="chaine2"
        />
      </div>
      <div class="mb-4">
        <button class="btn" @click.prevent="getResultat()">
          Résultat
        </button>
      </div>
      <div class="mb-4">
        <label for="resultat">Résultat</label>
        <input
          type="number"
          id="resultat"
          class="form-input"
          v-model="resultat"
          readonly
        />
      </div>
    </div>
    <div>
      <div class="mt-12 xl:mt-0" v-if="resultMatrix.length > 0">
        <table>
          <tr v-for="(row, indexRow) in resultMatrix" :key="indexRow">
            <td
              v-for="(col, indexCol) in resultMatrix[indexRow]"
              :key="indexCol"
              :class="[indexRow === 0 || indexCol === 0 ? 'char' : '']"
            >
              {{ resultMatrix[indexRow][indexCol] }}
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      chaine1: "CAATCCAAC",
      chaine2: "CATTTCACC",
      resultat: "",
      resultMatrix: []
    };
  },
  methods: {
    async getResultat() {
      this.animateLevenshtein();
      //   this.resultMatrix = this.levensteinIter(this.chaine1, this.chaine2)
      // await this.calculerLenvenshteinDistance().then(this.successCallback, this.failureCallback);
    },
    animateLevenshtein() {
      this.createMatrix();
      // const operations = this.levensteinIter(this.chaine1, this.chaine2);
      // this.renderOperations(operations);
    },
    renderOperations() {},
    createMatrix() {
      let matrix = new Array(this.chaine2.length + 2);
      for (let i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(this.chaine1.length + 2);
        for (let j = 0; j < matrix[i].length; j++) {
          matrix[i][j] = "";
        }
      }

      // first line
      matrix[0][0] = "";
      matrix[0][1] = "";
      matrix[1][0] = "";

      for (let index = 2; index < matrix[0].length; index++) {
        matrix[0][index] = this.chaine1[index - 2];
      }

      for (let i = 2; i < matrix.length; i++) {
        matrix[i][0] = this.chaine2[i - 2];
      }

      this.resultMatrix = matrix;
    },
    calculerLenvenshteinDistance() {
      return new Promise((successCallback, failureCallback) => {
        console.log("...");
        this.resultMatrix = this.levensteinIter(this.chaine1, this.chaine2);
        const resultat = this.resultMatrix[this.chaine2.length][
          this.chaine1.length
        ];
        console.log(this.resultMatrix);
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
    }
    // levensteinIter(chaine1, chaine2) {
    //   let operations = [];
    //   let realCost;
    //   let matrix = [];

    //   return operations;
    // }
  }
};
</script>

<style lang="postcss" scoped>
td {
  @apply text-xl border-4 border-app-200 h-16 w-16 text-center;
}

td.char {
  @apply capitalize text-2xl font-bold border-4 border-app-200 h-16 w-16 text-center text-app-700 bg-app-50;
}
</style>
