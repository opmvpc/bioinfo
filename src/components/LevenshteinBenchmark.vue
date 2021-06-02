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
      <input
        type="text"
        id="chaine1"
        name="chaine1"
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
        type="text"
        id="chaine2"
        name="chaine2"
        class="form-input"
        v-model="chaine2"
      />
      <span class="text-sm text-gray-500"
        ><span class="font-bold">{{ chaine2.trim().length }}</span>
        caractères</span
      >
    </div>
    <div class="flex flex-col space-y-8 mt-12 mb-6">
      <div>
        <div class="mb-4">
          <button class="btn" @click.prevent="getResultatNaif()">
            Récursif naïf 1
          </button>
        </div>
        <div class="mb-4">
          <label for="resultat-naif"
            >Résultat récursif naïf 1 (modification des strings)</label
          >
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
          <button class="btn btn-ternary" @click.prevent="getResultatNaif2()">
            Récursif naïf 2
          </button>
        </div>
        <div class="mb-4">
          <label for="resultat-naif"
            >Résultat récursif naïf 2 (indices en paramètres)</label
          >
          <input
            type="number"
            id="resultat-naif"
            class="form-input"
            v-model="resultatNaif2"
            readonly
          />
        </div>
        <div v-show="tempsResultatNaif2">
          {{ tempsResultatNaif2 }}
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
      resultatNaif2: "",
      tempsResultatNaif2: 0,
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
    async getResultatNaif2() {
      await this.calculerLenvenshteinDistance("naif2").then(
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
        } else if (type === "naif2") {
          resultat = this.levensteinNaif2(
            this.chaine1,
            this.chaine2,
            this.chaine1.length,
            this.chaine2.length,
            []
          );
        } else if (type === "memo") {
          resultat = this.levensteinMemo(
            this.chaine1,
            this.chaine2,
            this.chaine1.length,
            this.chaine2.length,
            []
          );
        } else if (type === "iter") {
          resultat = this.levensteinIter(this.chaine1, this.chaine2);
        }
        const t1 = performance.now();

        if (Number.isInteger(resultat)) {
          if (type === "naif") {
            this.resultatNaif = resultat;
            this.tempsResultatNaif = this.affichageTemps(t0, t1);
          } else if (type === "naif2") {
            this.resultatNaif2 = resultat;
            this.tempsResultatNaif2 = this.affichageTemps(t0, t1);
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
    levensteinNaif2(chaine1, chaine2, m, n, cache) {
      if (m == 0) {
        return n;
      }

      if (n == 0) {
        return m;
      }

      if (chaine1[m - 1] == chaine2[n - 1]) {
        return this.levensteinMemo(chaine1, chaine2, m - 1, n - 1);
      }

      return (
        Math.min(
          this.levensteinMemo(chaine1, chaine2, m, n - 1, cache), // insert
          this.levensteinMemo(chaine1, chaine2, m - 1, n, cache), // remove
          this.levensteinMemo(chaine1, chaine2, m - 1, n - 1, cache) // replace
        ) + 1
      );
    },
    levensteinMemo(chaine1, chaine2, m, n, cache) {
      if (m == 0) {
        return n;
      }

      if (n == 0) {
        return m;
      }

      if (chaine1[m - 1] == chaine2[n - 1]) {
        return this.levensteinMemo(chaine1, chaine2, m - 1, n - 1);
      }

      return (
        Math.min(
          this.levensteinMemo(chaine1, chaine2, m, n - 1, cache), // insert
          this.levensteinMemo(chaine1, chaine2, m - 1, n, cache), // remove
          this.levensteinMemo(chaine1, chaine2, m - 1, n - 1, cache) // replace
        ) + 1
      );
    },
    affichageTemps(t0, t1) {
      const temps = t1 - t0;
      if (temps > 1000) {
        return temps / 1000 + " secondes";
      } else {
        return temps + " millisecondes";
      }
    },
    levensteinIter(chaine1, chaine2) {
      const tailleChaine1 = chaine1.length + 1;
      const tailleChaine2 = chaine2.length + 1;

      let matrix = new Array(tailleChaine1)
        .fill(0)
        .map(() => new Array(tailleChaine2).fill(0));

      for (let i = 1; i < tailleChaine1; i++) {
        matrix[i][0] = i;
      }

      for (let j = 1; j < tailleChaine2; j++) {
        matrix[0][j] = j;
      }

      for (let j = 1; j < tailleChaine2; j++) {
        for (let i = 1; i < tailleChaine1; i++) {
          let substitutionCost;
          if (chaine1.charAt(i - 1) === chaine2.charAt(j - 1)) {
            substitutionCost = 0;
          } else {
            substitutionCost = 1;
          }

          matrix[i][j] = Math.min(
            matrix[i - 1][j] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j - 1] + substitutionCost
          );
        }
      }

      return matrix[tailleChaine1 - 1][tailleChaine2 - 1];
    }
  }
};
</script>

<style></style>
