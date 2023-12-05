let url = "https://api.data.gov/ed/collegescorecard/v1/schools.json?";
const api_key = "&" + "api_key=jJVXuQPnY9fo5Dntk6ReZ7g6h71zLlmnShYmuSHQ";

function getResults() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch(buildQuery(), requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log("after call")
      console.log(result)
    })
    .catch(error => console.log('error', error));
}



function buildQuery() {
    var location_value = document.getElementById('location_input').value
    school_location = "&" + "school.state=" + location_value

    var population_min = document.getElementById('population_min_input').value
    var population_max = document.getElementById('population_max_input').value
    school_population = "&" + "latest.student.size__range=" + population_min + ".." + population_max

    per_page = "&" + "per_page=" + "20";

    fields = "fields=" + "id" + "," + "school.name" + "," + "latest.student.size" + "," + "school.state" + "," + "school.ft_faculty_rate" + "," + "school.peps_ownership" + "," + "school.price_calculator_url";

    query_results = url + fields + per_page  + school_location + school_population + api_key;

    console.log(query_results);
    
    return query_results;
}

