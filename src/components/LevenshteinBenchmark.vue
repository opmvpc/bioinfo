<template>
  <div>
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
      <div class="prose">
        <h1>Distance de Levenshtein: Benchmark</h1>

        Test des 4 algorithmes suivants:
        <ul>
          <li>Récursif naif 1</li>
          <li>Récursif naif 2</li>
          <li>Récursif mémoïsation</li>
          <li>Itératif (bottom-up)</li>
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
        <div class="mb-4">
          <label for="chaine2">Nombre d'itérations</label>
          <input
            type="range"
            min="1"
            max="1000"
            v-model="iterations"
            id="iterations-input"
            class="form-input"
          />
          <span>{{ iterations }} itérations</span>
        </div>
        <div class="flex flex-col space-y-8 mt-12 mb-6">
          <div>
            <div class="mb-4">
              <button class="btn" @click.prevent="getResultatNaif()">
                {{ algoName("naif") }}
              </button>
            </div>
            <div class="mb-4">
              <label for="resultat-naif"
                >Résultat {{ algoName("naif") }} (modification des
                strings)</label
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
              <button
                class="btn btn-ternary"
                @click.prevent="getResultatNaif2()"
              >
                {{ algoName("naif2") }}
              </button>
            </div>
            <div class="mb-4">
              <label for="resultat-naif"
                >Résultat {{ algoName("naif2") }} (indices en paramètres)</label
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
              <button
                class="btn-primary"
                @click.prevent="getResultatMemoization()"
              >
                {{ algoName("memo") }}
              </button>
            </div>
            <div class="mb-4">
              <label for="resultat-memo"
                >Résultat {{ algoName("memo") }}
              </label>
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
                {{ algoName("iter") }}
              </button>
            </div>
            <div class="mb-4">
              <label for="resultat-iter"
                >Résultat {{ algoName("iter") }}
              </label>
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
      <div class="prose">
        <h2>Résultats</h2>
        <div v-for="(type, indexType) in temps" :key="indexType">
          <div v-if="type.data.length > 0">
            <h3>{{ algoName(type.name) }}</h3>
            <div class="grid grid-cols-10 gap-8 uppercase font-bold py-2">
              <div class="col-span-2 text-right">Itération</div>
              <div class="col-span-4">Temps</div>
              <div class="col-span-4">Chaines</div>
            </div>
            <div class="flex flex-col max-h-64">
              <div class="flex-grow overflow-y-auto">
                <div
                  class="grid grid-cols-10 gap-8"
                  v-for="(unTemps, indexTemps) in type.data"
                  :key="indexTemps"
                >
                  <div class="col-span-2 text-right text-gray-400">
                    #{{ indexTemps + 1 }}
                  </div>
                  <div class="col-span-4">{{ affichageTemps(unTemps[1]) }}</div>
                  <div
                    class="col-span-4 text-gray-400 text-sm flex items-center uppercase"
                  >
                    {{ inputs[unTemps[0]] }}
                  </div>
                </div>
              </div>
            </div>
            <div
              class="grid grid-cols-10 gap-8 uppercase font-bold py-2 text-primary-500"
            >
              <div class="col-span-2 text-right">Moyenne</div>
              <div class="col-span-4">
                {{ moyenneTemps(type) }}
              </div>
              <div
                class="col-span-4 text-sm text-gray-400 flex items-center capitalize"
              >
                {{ type.data.length }} itérations
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-8">
      <div class="prose">
        <h2>Graphique</h2>
      </div>
      <div id="chart" class="h-full">
        <apexchart
          type="scatter"
          height="1000"
          :options="chartOptions"
          :series="temps"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts
  },
  data: () => {
    return {
      chartOptions: {},
      chaine1: "CAATCCAAC",
      chaine2: "CATTTCACC",
      resultatNaif: "",
      tempsResultatNaif: 0,
      resultatNaif2: "",
      tempsResultatNaif2: 0,
      resultatMemo: "",
      tempsResultatMemo: 0,
      resultatIter: "",
      tempsResultatIter: 0,
      iterations: 10,
      temps: [
        {
          name: "naif",
          data: []
        },
        {
          name: "naif2",
          data: []
        },
        {
          name: "memo",
          data: []
        },
        {
          name: "iter",
          data: []
        }
      ],
      inputs: []
    };
  },
  methods: {
    moyenneTemps(temps) {
      let moyenne = 0;
      if (temps.length !== 0) {
        moyenne =
          temps.data.reduce((sum, unTemps) => sum + unTemps[1], 0) /
          temps.data.length;
      }
      return this.affichageTemps(moyenne);
    },
    algoIdBySlug(slug) {
      const names = {
        naif: 0,
        naif2: 1,
        memo: 2,
        iter: 3
      };
      return names[slug];
    },
    algoSlugById(id) {
      const names = ["naif", "naif2", "memo", "ite"];
      return names[id];
    },
    algoName(type) {
      const names = {
        naif: "Récursif naïf 1",
        naif2: "Récursif naïf 2",
        memo: "Récursif mémoïsation",
        iter: "Itératif (bottom-up)"
      };
      return names[type];
    },
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
    getInputIdByString(string) {
      let inputId = null;
      this.inputs.forEach((input, index) => {
        if (string === input) {
          inputId = index;
        }
      });
      return inputId;
    },
    calculerLenvenshteinDistance(type) {
      return new Promise((successCallback, failureCallback) => {
        let resultat = 0;
        let t0;
        let t1;
        let tTotal = 0;

        const nomInput = this.chaine1 + " - " + this.chaine2;
        let chaineId = this.getInputIdByString(nomInput);
        if (chaineId === null) {
          chaineId = this.inputs.length;
          this.inputs.push(nomInput);
        }
        for (let i = 0; i < this.iterations; i++) {
          t0 = performance.now();
          if (type === "naif") {
            resultat = this.levensteinRec(this.chaine1, this.chaine2);
          } else if (type === "naif2") {
            resultat = this.levensteinNaif2(
              this.chaine1,
              this.chaine2,
              this.chaine1.length,
              this.chaine2.length
            );
          } else if (type === "memo") {
            let matrix = new Array(this.chaine1.length + 1)
              .fill(-1)
              .map(() => new Array(this.chaine2.length + 1).fill(-1));
            resultat = this.levensteinMemo(
              this.chaine1,
              this.chaine2,
              this.chaine1.length,
              this.chaine2.length,
              matrix
            );
          } else if (type === "iter") {
            resultat = this.levensteinIter(this.chaine1, this.chaine2);
          }
          t1 = performance.now();

          let temps = t1 - t0;
          tTotal += temps;
          this.temps[this.algoIdBySlug(type)].data.push([chaineId, temps]);
        }

        if (Number.isInteger(resultat)) {
          if (type === "naif") {
            this.resultatNaif = resultat;
            this.tempsResultatNaif = this.affichageTemps(tTotal);
          } else if (type === "naif2") {
            this.resultatNaif2 = resultat;
            this.tempsResultatNaif2 = this.affichageTemps(tTotal);
          } else if (type === "memo") {
            this.resultatMemo = resultat;
            this.tempsResultatMemo = this.affichageTemps(tTotal);
          } else if (type === "iter") {
            this.resultatIter = resultat;
            this.tempsResultatIter = this.affichageTemps(tTotal);
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
      // Source: https://www.codementor.io/tips/6243778211/javascript-algorithms-levenshtein-s-distance-for-string-conversion
      if (!b.length) return a.length;
      if (!a.length) return b.length;

      return Math.min(
        this.levensteinRec(a.slice(1), b) + 1,
        this.levensteinRec(b.slice(1), a) + 1,
        this.levensteinRec(a.slice(1), b.slice(1)) + (a[0] == b[0] ? 0 : 1)
      );
    },
    levensteinNaif2(chaine1, chaine2, m, n) {
      // Source: https://www.geeksforgeeks.org/edit-distance-dp-using-memoization/
      if (m === 0) {
        return n;
      }

      if (n === 0) {
        return m;
      }

      if (chaine1[m - 1] === chaine2[n - 1]) {
        return this.levensteinNaif2(chaine1, chaine2, m - 1, n - 1);
      }

      const min =
        Math.min(
          this.levensteinNaif2(chaine1, chaine2, m, n - 1), // insert
          this.levensteinNaif2(chaine1, chaine2, m - 1, n), // remove
          this.levensteinNaif2(chaine1, chaine2, m - 1, n - 1) // replace
        ) + 1;
      return min;
    },
    levensteinMemo(chaine1, chaine2, m, n, cache) {
      // Source: https://www.geeksforgeeks.org/edit-distance-dp-using-memoization/
      if (m === 0) {
        return n;
      }

      if (n === 0) {
        return m;
      }
      if (cache[m][n] !== -1) {
        return cache[m][n];
      }

      if (chaine1[m - 1] === chaine2[n - 1]) {
        cache[m][n] = cache[m - 1][n - 1];
        return this.levensteinMemo(chaine1, chaine2, m - 1, n - 1, cache);
      }

      const min =
        Math.min(
          this.levensteinMemo(chaine1, chaine2, m, n - 1, cache), // insert
          this.levensteinMemo(chaine1, chaine2, m - 1, n, cache), // remove
          this.levensteinMemo(chaine1, chaine2, m - 1, n - 1, cache) // replace
        ) + 1;
      cache[m][n] = min;
      return min;
    },
    affichageTemps(temps) {
      if (temps > 1000) {
        return temps / 1000 + " s";
      } else {
        return temps + " ms";
      }
    },
    levensteinIter(chaine1, chaine2) {
      // Source: https://en.wikipedia.org/wiki/Levenshtein_distance
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
  },
  mounted() {
    this.chartOptions = {
      chart: {
        height: 1000,
        type: "scatter",
        zoom: {
          enabled: true,
          type: "xy"
        }
      },
      xaxis: {
        title: {
          text: "Chaines comparées"
        },
        tickAmount: 10,
        min: 0,
        max: 10,
        labels: {
          rotate: -70,
          minHeight: 150,
          maxHeight: 300,
          rotateAlways: true,
          formatter: val => {
            if (this.inputs.length > 0) {
              return this.inputs[val];
            }
          }
        }
      },
      yaxis: {
        title: {
          text: "Temps (ms)"
        },
        tickAmount: 7,
        labels: {
          formatter: function(val) {
            return parseFloat(val);
          }
        }
      }
    };
  }
};
</script>

<style></style>
