var data = null;
d3.csv("car.csv", function(result){
    dataloaded(result);
});

function dataloaded(result){
    // Map the data into particular format
    data = result.map(function(d){
        return {
            name: d.name,
            mpg : d.mpg,
            cylinders : d.cylinders,
            displacement : d.displacement,
            horsepower : d.horsepower,
            weight : d.weight,
            acceleration : d.acceleration,
            model_year : d["model.year"],
            origin: d.origin
        }
    });
    console.log(data.length);
    console.log(data);
}