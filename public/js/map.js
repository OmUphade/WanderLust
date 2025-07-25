// mapboxgl.accessToken = maptoken;
// const map = new mapboxgl.Map({
//   container: "map", // container ID
//   center: [-74.5, 40], // starting position [lng, lat]. Note that lat must be set between -90 and 90
//   zoom: 9, // starting zoom
// });

// console.log(coordinates);

// const marker = new mapboxgl.Marker()
//   .setLngLat(coordinates) //Listing.geometry.coordinates
//   .addTo(map);

mapboxgl.accessToken = maptoken;
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", //style url
  center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9, // starting zoom
});

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<div class="custom-popup">
      <h4>${listing.title}</h4>
      <p>Exact location will be provided after booking</p>
      </div>`
    )
  )
  .addTo(map);
