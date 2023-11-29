// var testAPI = {
//   method: 'GET',
//   redirect: 'follow'
// };




let url = "https://api.data.gov/ed/collegescorecard/v1/schools.json?";
const api_key = "&" + "api_key=jJVXuQPnY9fo5Dntk6ReZ7g6h71zLlmnShYmuSHQ";



function getResults() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  // fetch(buildQuery(), requestOptions)
  // .then(response => response.json())
  // .then(result => console.log(result.results[0].id))
  // .catch(error => console.log('error', error));

  fetch(buildQuery(), requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}



function buildQuery() {
    var location_value = document.getElementById('location_input').value

    school_location = "&" + "school.state=" + location_value
    console.log(location_value)
    console.log(school_location)


    per_page = "&" + "per_page=" + "3";

    fields = "fields=" + "id" + "," + "school.name" + "," + "latest.student.size" + "," + "school.state" + "," + "school.ft_faculty_rate" + "," + "school.peps_ownership" + "," + "school.price_calculator_url";

    query_results = url + fields + per_page  + school_location + api_key;

   

    console.log(query_results);

    return query_results;
}

