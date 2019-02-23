// Defining a baseURL and key to as part of the request URL.
let baseURL = 'https://api.nasa.gov/neo/rest/v1/feed?';
let key = 'EVTXXmEGhjtSQN01AwZaxP9qk2Ho1wjOAnNVhte0';
let url;

// Grab references to all the DOM elements you'll need to manipulate.
let searchTerm = document.querySelector('.search');
let searchDate = document.querySelector('.search-date');
let searchForm = document.querySelector('form');
let submitBtn = document.querySelector('.submit');
let section = document.querySelector('section');

// Event listeners to control the functionality.
searchForm.addEventListener('submit', submitSearch);

// Submit the search query.
function submitSearch(e) {
  fetchResults(e);
}

// Fetch the results for the search query using the Fetch API.
function fetchResults(e) {
  // Use preventDefault() to stop the form submitting.
  e.preventDefault();

  // Assemble the full URL.
  url = baseURL + 'start_date=' + searchDate.value + '&end_date=' + searchDate.value + '&api_key=' + key;

  // Use fetch() to make the request to the API
  fetch(url).then(function(result) {
    return result.json();
  }).then(function(json) {
    displayResults(json);
  });
}

// Display information about the NEO's.
function displayResults(json) {
  console.log(json);
  let neo = constructNEOList(json);
  
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }

  if (neo.length == 0) {
    let para = document.createElement('p');
    para.textContent = "No results returned. Earth is safe for that day."
    section.appendChild(para);
  } else {
    for (let i = 0; i < neo.length; i++) {
      let article = document.createElement('article');
      let heading = document.createElement('h2');
      let link = document.createElement('a');
      let list = document.createElement('ul');

      let currentNEO = neo[i];

      heading.appendChild(document.createTextNode(currentNEO.name));

      link.href = currentNEO.jpl_url;
      link.textContent = "Link to JPL page for more info.";

      let li = document.createElement('li');
      li.appendChild(document.createTextNode('Absolute Magnitude: ' + currentNEO.absolute_mag));
      list.appendChild(li);
      li = document.createElement('li');
      li.appendChild(document.createTextNode('Closest Approach: ' + currentNEO.closest_approach + ' miles'));
      list.appendChild(li);
      li = document.createElement('li');
      li.appendChild(document.createTextNode('Relative Velocity: ' + currentNEO.relative_velocity + ' miles per hour'));
      list.appendChild(li);
      li = document.createElement('li');
      li.appendChild(document.createTextNode('Orbiting Body: ' + currentNEO.orbiting_body));
      list.appendChild(li);
      li = document.createElement('li');
      li.appendChild(document.createTextNode('Minimum Diameter: ' + currentNEO.diameter_min + ' miles'));
      list.appendChild(li);
      li = document.createElement('li');
      li.appendChild(document.createTextNode('Maximum Diameter: ' + currentNEO.diameter_max + ' miles'));
      list.appendChild(li);
      li = document.createElement('li');
      li.appendChild(document.createTextNode('Potentially Hazardous: ' + currentNEO.potentially_hazardous));
      list.appendChild(li);

      article.appendChild(heading);
      article.appendChild(link);
      article.appendChild(list);
      section.appendChild(article);
    }
  }
}

// Construct the list of NEO's.
function constructNEOList(json) {
  let neo = [];
  let nearEarthObjects = json.near_earth_objects;
  if (nearEarthObjects.length == 0) {    
    console.log("No NEO found for that date.");
  } else {
    try {
      for (let i = 0; i < nearEarthObjects[searchDate.value].length; i++) {
        let currentNEO = nearEarthObjects[searchDate.value][i];
        let absolute_mag = currentNEO.absolute_magnitude_h;
        let closest_approach = currentNEO.close_approach_data[0].miss_distance.miles;
        let relative_velocity = currentNEO.close_approach_data[0].relative_velocity.miles_per_hour;
        let orbiting_body = currentNEO.close_approach_data[0].orbiting_body;
        let diameter_max = currentNEO.estimated_diameter.miles.estimated_diameter_max;
        let diameter_min = currentNEO.estimated_diameter.miles.estimated_diameter_min;
        let potentially_hazardous = currentNEO.is_potentially_hazardous_asteroid;
        neo.push({
          name: currentNEO.name,
          jpl_url: currentNEO.nasa_jpl_url,
          absolute_mag: absolute_mag,
          closest_approach: parseFloat(closest_approach),
          relative_velocity: parseFloat(relative_velocity),
          orbiting_body: orbiting_body,
          diameter_max: diameter_max,
          diameter_min: diameter_min,
          potentially_hazardous: potentially_hazardous
        });
      }
    } catch(err) {
      console.log('Caught error' + err);
    }
  }
  return neo;
}