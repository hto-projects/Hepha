var testAPI = {
  method: 'GET',
  redirect: 'follow'
};

// fetch("https://api.data.gov/ed/collegescorecard/v1/schools.json?fields=id,school.name,latest.student.size,school.state,school.ft_faculty_rate,school.peps_ownership,school.price_calculator_url&per_page=1&api_key=jJVXuQPnY9fo5Dntk6ReZ7g6h71zLlmnShYmuSHQ", testAPI)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));


const api_key = "api_key=&api_key=jJVXuQPnY9fo5Dntk6ReZ7g6h71zLlmnShYmuSHQ";
let url = "https://api.data.gov/ed/collegescorecard/v1/schools.json?";


function getResults() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch(buildQuery(), requestOptions)
        .then(response => response.json())
        .then(result => console.log(result.results[0].id))
        .catch(error => console.log('error', error));

}

function buildQuery() {
    var email = document.getElementById("email");
    var location = document.getElementById("location-selection").value;
    console.log(location)

    per_page = "per_page=3"

    // query_results = "fields=" + 
    query_results = "fields=" + "id," + "school.name." + "latest.student.size," + "school.state," + "school.ft_faculty_rate," + "school.peps_ownership," + "school.price_calculator_url"

    url + query_results + "&" + per_page + "&" + "school.state=" + str(location) + "&" + api_key;

   

    console.log(url + query_results + "&" + per_page + "&" + "school.state=" + location + "&" + api_key)

    return query_results;
}

