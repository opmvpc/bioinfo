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
        <span class="text-sm text-gray-500"
          ><span class="font-bold">{{ chaine1.trim().length }}</span>
          caractères</span
        >
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
        <span class="text-sm text-gray-500"
          ><span class="font-bold">{{ chaine2.trim().length }}</span>
          caractères</span
        >
      </div>
      <div class="mb-4">
        <label for="chaine2">Vitesse de l'animation</label>
        <input
          type="range"
          min="10"
          max="2000"
          v-model="timer"
          id="timer-input"
          class="form-input"
        />
        <span>{{ timer / 1000 }} secondes</span>
      </div>
      <div class="mb-4">
        <button class="btn" @click.prevent="getResultat()">
          Résultat
        </button>
      </div>
    </div>
    <div>
      <div class="mt-12 xl:mt-0 w-full" v-show="resultMatrix.length > 0">
        <div class="prose">
          <h2>Résultat</h2>
        </div>
        <div class="overflow-x-auto">
          <table ref="matrix">
            <tr v-for="(row, indexRow) in resultMatrix" :key="indexRow">
              <td
                v-for="(col, indexCol) in resultMatrix[indexRow]"
                :key="indexCol"
                :class="[
                  indexRow === 0 || indexCol === 0 ? 'char' : '',
                  (indexRow !== 1 || indexCol !== 1) &&
                  resultMatrix[indexRow][indexCol].type !== 'init' &&
                  indexRow === indexCol
                    ? 'underline'
                    : '',
                  indexRow === resultMatrix.length - 1 &&
                  indexCol === resultMatrix[0].length - 1 &&
                  resultMatrix[indexRow][indexCol].type !== 'init'
                    ? 'bg-yellow-200 text-yellow-700'
                    : ''
                ]"
              >
                {{ resultMatrix[indexRow][indexCol].value }}
              </td>
            </tr>
          </table>
        </div>

        <div class="text-gray-600 mt-2 flex w-full space-x-4 items-center">
          <div>
            <label for="iteration-count"
              >Itération <span class="font-bold">{{ iteration }}</span> sur
              <span class="font-bold">{{ iterationCount }}</span></label
            >
          </div>
          <meter
            class="flex-grow"
            id="iteration-count"
            min="0"
            :max="iterationCount"
            low="33"
            high="66"
            optimum="80"
            :value="iteration"
          >
          </meter>
        </div>
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
      resultMatrix: [],
      timer: 200,
      iterationCount: 0,
      iteration: 0
    };
  },
  methods: {
    async getResultat() {
      this.animateLevenshtein();
    },
    animateLevenshtein() {
      let chaine1 = this.chaine1.trim().toLowerCase();
      let chaine2 = this.chaine2.trim().toLowerCase();
      this.createMatrix(chaine1, chaine2);
      const operations = this.levensteinIter(chaine1, chaine2);
      setTimeout(() => {
        this.$refs.matrix.scrollIntoView({ behavior: "smooth" });
      }, 200);
      this.iterationCount = operations.length;
      this.iteration = 0;
      this.renderOperations(operations);
    },
    async renderOperations(operations) {
      const timer = ms => new Promise(res => setTimeout(res, ms));
      for (let index = 0; index < this.iterationCount; index++) {
        this.iteration += 1;
        const operation = operations[index];
        this.resultMatrix[operation.y + 1][operation.x + 1] = operation;
        await timer(this.timer);
      }
    },
    createMatrix(chaine1, chaine2) {
      let matrix = new Array(chaine2.length + 2);
      for (let i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(chaine1.length + 2);
        for (let j = 0; j < matrix[i].length; j++) {
          matrix[i][j] = { value: 0, type: "init" };
        }
      }

      // first line
      matrix[0][0] = { value: "", type: "init" };
      matrix[0][1] = { value: "", type: "init" };
      matrix[1][0] = { value: "", type: "init" };

      for (let index = 2; index < matrix[0].length; index++) {
        matrix[0][index] = { value: chaine1[index - 2], type: "init" };
      }

      for (let i = 2; i < matrix.length; i++) {
        matrix[i][0] = { value: chaine2[i - 2], type: "init" };
      }

      this.resultMatrix = matrix;
    },
    levensteinIter(chaine1, chaine2) {
      const tailleChaine1 = chaine1.length + 1;
      const tailleChaine2 = chaine2.length + 1;

      let operations = [];
      let matrix = new Array(tailleChaine1)
        .fill(0)
        .map(() => new Array(tailleChaine2).fill(0));

      for (let i = 1; i < tailleChaine1; i++) {
        matrix[i][0] = i;
        operations.push(this.updateCellOperation(i, 0, i));
      }

      for (let j = 1; j < tailleChaine2; j++) {
        matrix[0][j] = j;
        operations.push(this.updateCellOperation(0, j, j));
      }
      console.log(matrix);

      for (let j = 1; j < tailleChaine2; j++) {
        for (let i = 1; i < tailleChaine1; i++) {
          let substitutionCost;
          if (chaine1.charAt(i - 1) === chaine2.charAt(j - 1)) {
            substitutionCost = 0;
          } else {
            substitutionCost = 1;
          }

          let min = Math.min(
            matrix[i - 1][j] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j - 1] + substitutionCost
          );
          matrix[i][j] = min;
          operations.push(this.updateCellOperation(i, j, min));
        }
      }
      console.log(operations);
      return operations;
    },
    updateCellOperation(xCoord, yCoord, value) {
      return {
        type: "update-cell",
        x: xCoord,
        y: yCoord,
        value: value
      };
    },
    deletionOperation(xCoord, yCoord, value) {
      return {
        type: "delete",
        x: xCoord,
        y: yCoord,
        value: value
      };
    },
    insertionOperation(xCoord, yCoord, value) {
      return {
        type: "insertion",
        x: xCoord,
        y: yCoord,
        value: value
      };
    },
    substitutionOperation(xCoord, yCoord, value) {
      return {
        type: "substitution",
        x: xCoord,
        y: yCoord,
        value: value
      };
    }
  }
};
</script>

<style lang="postcss" scoped>
table {
  @apply flex border-4 border-app-200 mt-4 w-min;
}
td {
  @apply flex items-center justify-center text-2xl 2xl:text-4xl border-4 border-app-200 shadow-inner h-12 w-12 2xl:h-16 2xl:w-16 text-center font-mono;
}

td.char {
  @apply capitalize text-2xl 2xl:text-4xl font-bold border-4 border-app-200 shadow-inner h-12 w-12 2xl:h-16 2xl:w-16 text-center text-app-700 bg-app-50;
}
</style>
