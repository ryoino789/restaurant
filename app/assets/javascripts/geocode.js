let geocoder;
let map;

function initMap() {
  geocoder = new google.maps.Geocoder();
  let latlng = new google.maps.LatLng(35.7111705,139.7738941);
  let opts = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("map"), opts);
}

function codeAddress() {
  let address = document.getElementById("address").value;
  if (geocoder) {
    geocoder.geocode({
      'address': address,
      'region': 'jp'
    }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        let bounds = new google.maps.LatLngBounds();
        for (let r in results) {
          if (results[r].geometry) {
            let latlng = results[r].geometry.location;
            bounds.extend(latlng);
            new google.maps.Marker({
              position: latlng,
              map: map
            });
            document.getElementsByClassName('class_name')[0].innerHTML = document.getElementById("address").value;
            document.getElementsByClassName('class_ido')[0].innerHTML = latlng.lat();
            document.getElementsByClassName('class_keido')[0].innerHTML = latlng.lng();
          }
        }
        //map.fitBounds(bounds);
      } else {
        alert("Geocode 取得に失敗しました reason: " + status);
      }
    });
  }
}