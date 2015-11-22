gradesApp.service('CalculationService', function () {
    var overall = {
            high: 0,
            avg: 0,
            min: 0
        },

        calculateLowest = function (gradesCollection) {
            overall.min = _.min(gradesCollection);
        },
        calculateHighest = function (gradesCollection) {
            overall.high = _.max(gradesCollection);
        },
        calculateAverage = function (gradesCollection) {

            var totalScore = _.sum(gradesCollection),
                totalGrades = gradesCollection.length,
                average = totalScore / totalGrades;

            overall.avg = Math.round(average);
        },
        calculateScores = function (gradesCollection) {
            calculateLowest(gradesCollection);
            calculateHighest(gradesCollection);
            calculateAverage(gradesCollection);
            return overall;
        };

    return {
        calculateScores: calculateScores
    }
});





















