const api_key = "api_key=RXYHvW4sOT0LSDSdBdTxg6jhpMjbBV1tYX1HJ6c5";
let url = "https://api.data.gov/ed/collegescorecard/v1/schools.json?";


function callApi() {
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

    studentSize = 15;
      schoolspredominant = "school.degrees_awarded.predominant=" + email;

    query = schoolspredominant;
    query_results = "fields=" + "id" + "school.name"

    url + query + query_results + api_key;

    return query;
}



//"https://api.data.gov/ed/collegescorecard/v1/schools.json?school.degrees_awarded.predominant=2,3&fields=id,school.name,2013.student.size&per_page=50&api_key=RXYHvW4sOT0LSDSdBdTxg6jhpMjbBV1tYX1HJ6c5"