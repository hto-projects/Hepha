var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.data.gov/ed/collegescorecard/v1/schools.json?school.degrees_awarded.predominant=2,3&fields=id,school.name,2013.student.size&per_page=50&api_key=jJVXuQPnY9fo5Dntk6ReZ7g6h71zLlmnShYmuSHQ", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));