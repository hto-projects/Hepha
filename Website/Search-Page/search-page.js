var getResults = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://api.data.gov/ed/collegescorecard/v1/schools.json?fields=id,school.name,latest.student.size,school.state,school.ft_faculty_rate,school.peps_ownership,school.price_calculator_url&per_page=50&api_key=jJVXuQPnY9fo5Dntk6ReZ7g6h71zLlmnShYmuSHQ", getResults)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
