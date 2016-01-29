function solve(arr) {
    arr.forEach(function(el) {
        var tokens = el.split(' '),
            carModel = tokens[0],
            fuelType = tokens[1],
            routeNumber = tokens[2],
            luggageWeight = Number(tokens[3]),
            baseCons = 10,
            totalCons,
            extraSnowCons;
        if(fuelType == 'gas') baseCons *= 1.2;
        if(fuelType == 'diesel') baseCons *= 0.8;
        baseCons += 0.01 * luggageWeight;
        if(routeNumber == '1') {
            totalCons = 110 *(baseCons/100);
            extraSnowCons = 0.3 * baseCons;
            totalCons += 10 * (extraSnowCons / 100);
        }
        if(routeNumber == '2') {
            totalCons = 95 *(baseCons/100);
            extraSnowCons = 0.3 * baseCons;
            totalCons += 30 * (extraSnowCons / 100);
        }
        console.log(carModel + ' ' +  fuelType + ' ' + routeNumber + ' ' + Math.round(totalCons));
    });
}
function solve(arr) {
    arr.forEach(function(el){
        var parts = el.split(' '),
            carModel = parts[0].trim(),
            fuelType = parts[1].trim(),
            routeNumber = parts[2].trim(),
            luggageWeight = +parts[3].trim(),
            totalFuelConsumption,
            fuelConsumption = 10;//liters/100km
        switch (fuelType) {
            case 'gas':
                fuelConsumption *= 1.2;
                break;
            case 'diesel':
                fuelConsumption *= 0.8;
                break;
        }
        fuelConsumption += luggageWeight * 0.01;
        if(routeNumber === '1') {
            totalFuelConsumption = (fuelConsumption * 100 + 10 *(fuelConsumption * 1.3)) / 100;
        } else {
            totalFuelConsumption = (fuelConsumption * 65 + 30 *(fuelConsumption * 1.3)) / 100;
        }

        console.log(carModel + ' ' + fuelType + ' ' + routeNumber + ' ' + Math.round(totalFuelConsumption));
    });
}
solve([
    'BMW petrol 1 320.5',
    'Golf petrol 2 150.75',
    'Lada gas 1 202',
    'Mercedes diesel 2 312.54'
]);