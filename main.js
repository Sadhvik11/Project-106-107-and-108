function startClassification() {
    navigator.mediaDevices.getUserMedia( {audio: true} ) ;
    classifier = ml5.soundClassifier('https://storage.googleapis.com/tm-model/2KHhLZcWv/model.json', modelReady) ;
    }
    function modelReady() {
    classifier.classify(gotResults) ;
    }
    function gotResults(error,results){
    if (error) {
    console.error(error) ;
    }
    else {
    console.log(results) ; 
    random_number_r = Math.floor(Math.random() * 255) + 1 ;
    random_number_g = Math.floor(Math.random() * 255) + 1 ;
    random_number_b = Math.floor(Math.random() * 255) + 1 ; 
    document.getElementById("result_label").innerHTML = 'I can hear ' + results[0].label ;
    document.getElementById("result_confidence").innerHTML = 'Accuracy  ' + (results[0].confidence * 100).toFixed(2) + " %" ;
    document.getElementById("result_label").style.color = "rgb("+random_number_r + random_number_g + random_number_b+")" ;
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r + random_number_b + random_number_g+")" ;
    img = document.getElementById('animals') 
    if (results[0].label == "roaring"){
    img.src = 'download (7).jfif' ;
    }
    else if (results[0].label = "barking") {
    img.src = 'download (6).jfif' ;
    }
    else if (results[0].label = "meowing") {
    img.src = 'download (5).jfif' ;
    }
    else{
    img.src = 'unnamed.jpg' ;
    }
    }
    }