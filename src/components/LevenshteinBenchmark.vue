<template>
  <div class="prose">
    <h1>Distance de Levenshtein: Benchmark</h1>

    Test des 3 algorithmes suivants:
    <ul>
      <li>Récursif naif</li>
      <li>Récursif mémoïsation</li>
      <li>Itératif backtracking</li>
    </ul>
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
    <div class="flex flex-col space-y-8 mt-12 mb-6">
      <div>
        <div class="mb-4">
          <button class="btn" @click.prevent="getResultatNaif()">
            Récursif naïf
          </button>
        </div>
        <div class="mb-4">
          <label for="resultat-naif">Résultat récursif naïf</label>
          <input
            type="number"
            id="resultat-naif"
            class="form-input"
            v-model="resultatNaif"
            readonly
          />
        </div>
        <div v-show="tempsResultatNaif">
          {{ tempsResultatNaif }}
        </div>
      </div>
      <div>
        <div class="mb-4">
          <button class="btn-primary" @click.prevent="getResultatMemoization()">
            Récursif mémoïsation
          </button>
        </div>
        <div class="mb-4">
          <label for="resultat-memo">Résultat récursif mémoïsation</label>
          <input
            type="number"
            id="resultat-memo"
            class="form-input"
            v-model="resultatMemo"
            readonly
          />
        </div>
        <div v-if="tempsResultatMemo">
          {{ tempsResultatMemo }}
        </div>
      </div>
      <div>
        <div class="mb-4">
          <button class="btn-secondary" @click.prevent="getResultatIter()">
            Itératif backtracking
          </button>
        </div>
        <div class="mb-4">
          <label for="resultat-iter">Résultat itératif backtracking</label>
          <input
            type="number"
            id="resultat-iter"
            class="form-input"
            v-model="resultatIter"
            readonly
          />
        </div>
        <div v-if="tempsResultatIter">
          {{ tempsResultatIter }}
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
      resultatNaif: "",
      tempsResultatNaif: 0,
      resultatMemo: "",
      tempsResultatMemo: 0,
      resultatIter: "",
      tempsResultatIter: 0
    };
  },
  methods: {
    async getResultatNaif() {
      await this.calculerLenvenshteinDistance("naif").then(
        this.successCallback,
        this.failureCallback
      );
    },
    async getResultatMemoization() {
      await this.calculerLenvenshteinDistance("memo").then(
        this.successCallback,
        this.failureCallback
      );
    },
    async getResultatIter() {
      await this.calculerLenvenshteinDistance("iter").then(
        this.successCallback,
        this.failureCallback
      );
    },
    calculerLenvenshteinDistance(type) {
      return new Promise((successCallback, failureCallback) => {
        console.log("...");
        const t0 = performance.now();
        let resultat = 0;

        if (type === "naif") {
          resultat = this.levensteinRec(this.chaine1, this.chaine2);
        } else if (type === "memo") {
          resultat = this.levensteinMemo(this.chaine1, this.chaine2, []);
        } else if (type === "iter") {
          resultat = this.levensteinIter(this.chaine1, this.chaine2);
        }
        const t1 = performance.now();

        if (Number.isInteger(resultat)) {
          if (type === "naif") {
            this.resultatNaif = resultat;

            this.tempsResultatNaif = this.affichageTemps(t0, t1);
          } else if (type === "memo") {
            this.resultatMemo = resultat;
            this.tempsResultatMemo = this.affichageTemps(t0, t1);
          } else if (type === "iter") {
            this.resultatIter = resultat;
            this.tempsResultatIter = this.affichageTemps(t0, t1);
          }

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
    levensteinRec(a, b) {
      if (!b.length) return a.length;
      if (!a.length) return b.length;

      return Math.min(
        this.levensteinRec(a.slice(1), b) + 1,
        this.levensteinRec(b.slice(1), a) + 1,
        this.levensteinRec(a.slice(1), b.slice(1)) + (a[0] == b[0] ? 0 : 1)
      );
    },
    levensteinMemo(a, b) {
      if (!b.length) return a.length;
      if (!a.length) return b.length;

      return Math.min(
        this.levensteinRec(a.slice(1), b) + 1,
        this.levensteinRec(b.slice(1), a) + 1,
        this.levensteinRec(a.slice(1), b.slice(1)) + (a[0] == b[0] ? 0 : 1)
      );
    },
    levensteinIter(src, tgt) {
      let realCost;

      var srcLength = src.length,
        tgtLength = tgt.length,
        tempString,
        tempLength; // for swapping

      var resultMatrix = new Array();
      resultMatrix[0] = new Array(); // Multi dimensional

      // To limit the space in minimum of source and target,
      // we make sure that srcLength is greater than tgtLength
      if (srcLength < tgtLength) {
        tempString = src;
        src = tgt;
        tgt = tempString;
        tempLength = srcLength;
        srcLength = tgtLength;
        tgtLength = tempLength;
      }

      for (var c = 0; c < tgtLength + 1; c++) {
        resultMatrix[0][c] = c;
      }

      for (var i = 1; i < srcLength + 1; i++) {
        resultMatrix[i] = new Array();
        resultMatrix[i][0] = i;
        for (var j = 1; j < tgtLength + 1; j++) {
          realCost = src.charAt(i - 1) == tgt.charAt(j - 1) ? 0 : 1;
          resultMatrix[i][j] = Math.min(
            resultMatrix[i - 1][j] + 1,
            resultMatrix[i][j - 1] + 1,
            resultMatrix[i - 1][j - 1] + realCost // same logic as our previous example.
          );
        }
      }

      return resultMatrix[srcLength][tgtLength];
    },
    affichageTemps(t0, t1) {
      const temps = t1 - t0;
      if (temps > 1000) {
        return temps / 1000 + " secondes";
      } else {
        return temps + " millisecondes";
      }
    }
  }
};
</script>

<style></style>
