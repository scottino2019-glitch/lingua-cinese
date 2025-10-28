window.dataSdk = (function () {
  let scores = [];

  return {
    init: async function (onDataChanged) {
      // Simula una lista di punteggi salvati iniziali
      scores = [
        { level: 1, score: 120, time: 60, completedat: new Date().toISOString(), category: "Numeri" }
      ];
      // Chiama la funzione di callback per aggiornare la leaderboard
      if (typeof onDataChanged === "function") {
        onDataChanged(scores);
      }
      return { isOk: true };
    },

    create: async function (level, score, time, completedat, category) {
      // Simula il salvataggio aggiungendo il nuovo punteggio alla lista
      scores.push({ level, score, time, completedat, category });
      return { isOk: true };
    },

    getScores: function () {
      return scores;
    }
  };
})();
