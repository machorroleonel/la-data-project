function getLADataFromAPI(){
    var endpoint = 'https://data.lacity.org/resource/v87k-wgde.json'
    
    // https://upload.wikimedia.org/wikipedia/commons/7/7f/Fresh_Pure_Water.jpg
  
    fetch(endpoint) // returns a promise
    .then(function(data){
        return data.json()
    })
    .then(function(json){
        console.log(json)
        var resultDiv = document.getElementById('result')
        var finalHTML = ''
        json.forEach(function(item){
            var cardItem = 
            `
                <div class="col s6 m4">
                  <div class="card">
                    <div class="card-image">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Fresh_Pure_Water.jpg">
                      <span class="card-title">${item.location_1_zip}</span>
                    </div>
                    <div class="card-content">
                      <p>
                      The data from 2005-2006 shows that this area used ${item.fy_05_06} gallons of water
                      5 years later, in 2012-2013 this area used ${item.fy_12_13}
                      </p>
                    </div>
                  </div>
                </div>
            `
            finalHTML += cardItem
        })

        resultDiv.innerHTML = finalHTML
        
        // var wantedData = json.map(function(item){
        //     return item.location_1_zip + " in 2005-2006 used " +
        //           Math.floor(item.fy_05_06 * 7.48) + " gallons of water."
        // })
        // console.log(wantedData)
    })
    .catch(function(error){
        console.log(error)
    })
}