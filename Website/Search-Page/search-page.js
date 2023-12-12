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
      displayResults(result)
    })
    .catch(error => console.log('error', error));
}



function buildQuery() {
    var location_value = document.getElementById('location_input').value
    school_location = "&" + "school.state=" + location_value

    var population_min = document.getElementById('population_min_input').value
    var population_max = document.getElementById('population_max_input').value
    school_population = "&" + "latest.student.size__range=" + population_min + ".." + population_max

// public = 1, private = 2
    var school_type_input = document.getElementById("type-of-school-selection");
    //Added .value here because it was just picking up the selection element
    var selected = school_type_input.options[school_type_input.selectedIndex].value

    var selected_translated = '1'

    if(selected=="Public") {
      selected_translated="1"
    }
    else if(selected=="Private") {
      selected_translated="2"
    }

    school_type = "&" + "school.ownership=" + selected_translated;

    per_page = "&" + "per_page=" + "20";

    fields = "fields=" + "id" + "," + "school.name" + "," + "latest.student.size" + "," + "school.state" + "," + "school.ft_faculty_rate" + "," + "school.ownership" + "," + "school.price_calculator_url";

    query_results = url + fields + per_page + school_location + school_population + school_type + api_key;

    console.log(query_results);
    
    return query_results;
}

function displayResults(result) {
  console.log(result);
  //Grabbing the list from the html
  
  /*
  Available properties of a college to list:
  id
  latest.student.size
  school.ft_faculty_rate
  school.name
  school.ownership
  school.price_calculator_url
  school.state
  */

  //result is the JSON object, results is the array of colleges inside the JSON object
  //This is an arrow function, but the same principle as a for each loop in java. 
  result.results.forEach(college => {

    var result_list = document.getElementById('result-list');
    // let resultDisplaySection = document.querySelector("#result-list");

    // let resultDisplay = document.createElement("li");
    // resultDisplay.textContent = result_list;
  
    // let resultContainer = document.querySelector("#result-list");
    // resultContainer.appendChild(resultDisplay);


console.log(college)
var display = "School Name: " + college["school.name"] + "\nSchool ID: " + college.id
var listItem = document.createElement('li');
listItem.textContent = display;
result_list.appendChild(listItem)

    
    // Every time you will create a new list element
    // Build the string you want to display
    // if you need to grab a property that has a "." in it, you need to do something like college["school.name"] instead of just college.id
    // The element you created needs the textContent to bet set to the string you want to add to the list. 
    // Finally you need to appendChild to the result_list with the list element you created
  });


}
