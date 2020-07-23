console.log("HELLO_HI");
var clickButton = document.getElementById("Click");
var mailclickButton = document.getElementById("MAILClick");


clickButton.addEventListener("click", startRecording);
mailclickButton.addEventListener("click", sendmail);

function sendmail() {
  console.log('Sending the mail')
  var Text = document.getElementById('textInput').value;
  var Email = document.getElementById('Email').value;
  console.log(Text)
  console.log(Email)
  var urlREQ =  window.location.protocol;
  var hostname = window.location.hostname;
  var port = window.location.port;
  if (port == '') {
    var URL = urlREQ + '//' + hostname +'/sendmail';
  } else {
    var URL = urlREQ + '//' + hostname +':' + port +'/sendmail';
  }

  // var URL = urlREQ + '//' + hostname +':5000'+'/sendmail';
  // var URL = urlREQ + '//' + hostname +'/sendmail';

  console.log(URL)
  var formData = new FormData();
      // var tokenData = new FormData();
  formData.append('Text', Text);
  formData.append('Email', Email);

    $.ajax({
      type: 'POST',
      url: URL,
      data: formData,
      // tokenData: tokenData,
      processData: false,  // prevent jQuery from converting the data
      contentType: false,  // prevent jQuery from overriding content type

      success: function(response) {
        alert("Mail Sent Successfully");
        // document.getElementById('textInput').value = response;   
        // console.log("response")  
        console.log("successfully sent the mail")     
      },
      error: function(xhr, status, error) {
  // var err = eval("(" + xhr.responseText + ")");
  alert("Error occurs in sending the mail");
}
    });

   
//   $.ajax({
//       type: 'GET',
//       url: URL,
//       data: formData,
//       // tokenData: tokenData,
//       processData: false,  // prevent jQuery from converting the data
//       contentType: false,  // prevent jQuery from overriding content type

//       success: function(response) {
//         // document.getElementById('textInput').value = response;   
//         console.log("successfully sent the mail")     
//       },
//       error: function(xhr, status, error) {
//   // var err = eval("(" + xhr.responseText + ")");
//   alert("Error occurs in sending the mail");
// }
//     });

}
// function startRecording() {
// 	var urlREQ =  window.location.protocol;
// 	var hostname = window.location.hostname;
// 	var URL = urlREQ + '//' + hostname +':8000'+'/stream'
// 	console.log(URL)
// 	var lastResponseLength = false;

// 	$.ajax({
//       type: 'GET',
//       url: URL,
//       processData: false,  // prevent jQuery from converting the data
//       contentType: false,  // prevent jQuery from overriding content type
//       xhrFields: {
//             // Getting on progress streaming response
//             onprogress: function(e)
//             {
//             	console.log("Getting on progress streaming response")
//                 var progressResponse;
//                 var response = e.currentTarget.response;
//                 if(lastResponseLength === false)
//                 {
//                     progressResponse = response;
//                     lastResponseLength = response.length;
//                 }
//                 else
//                 {
//                     progressResponse = response.substring(lastResponseLength);
//                     lastResponseLength = response.length;
//                 }
//                 console.log(progressResponse)
//                 document.getElementById('textInput').value += progressResponse;
//                 // var parsedResponse = JSON.parse(progressResponse);
//                 // $('#progressTest').text(progressResponse);
//                 // $('#fullResponse').text(parsedResponse.message);
//                 // $('.progress-bar').css('width', parsedResponse.progress + '%');
//             }
//         },

//       success: function(response) {
//       	// document.getElementById('textInput').value = response;
//       	console.log(response);
//       },
//       error: function(xhr, status, error) {
//   var err = eval("(" + xhr.responseText + ")");
//   alert(err);
// }
//   	});

// }

window.onload = init;
      	var context;    // Audio context
      	var buf;        // Audio buffer

      	function init() {
      	if (!window.AudioContext) {
      	    if (!window.webkitAudioContext) {
      	        alert("Your browser does not support any AudioContext and cannot play back this audio.");
      	        return;
      	    }
      	        window.AudioContext = window.webkitAudioContext;
      	    }

      	    context = new AudioContext();
      	}

      	function playByteArray(byteArray) {

      	    var arrayBuffer = new ArrayBuffer(byteArray.length);
      	    var bufferView = new Uint8Array(arrayBuffer);
      	    for (i = 0; i < byteArray.length; i++) {
      	      bufferView[i] = byteArray[i];
      	    }

      	    context.decodeAudioData(arrayBuffer, function(buffer) {
      	        buf = buffer;
      	        play();
      	    });
      	}

      	// Play the loaded file
      	function play() {
      	    // Create a source node from the buffer
      	    var source = context.createBufferSource();
      	    source.buffer = buf;
      	    // Connect to the final output node (the speakers)
      	    source.connect(context.destination);
      	    // Play immediately
      	    source.start(0);
      	}

function startRecording() {
	var urlREQ =  window.location.protocol;
	var hostname = window.location.hostname;
  var port = window.location.port;
  
  if (port == '') {
    var URL = urlREQ + '//' + hostname +'/upload';
  } else {
    var URL = urlREQ + '//' + hostname +':' + port +'/upload';
  }

	// var URL = urlREQ + '//' + hostname +':5000'+'/upload';
  // var URL = urlREQ + '//' + hostname +'/upload';
	console.log(URL)
	var lastResponseLength = false;
	var audio = document.getElementById('audio1');
	var source = document.getElementById('audioSource');
      var fileInput = document.getElementById('uploadFile');
      

      var file = fileInput.files[0];
      var filename = file.name
      console.log("filename" , file.name)
        var lan_value;
      if (document.getElementById('r1').checked) {
            lan_value = document.getElementById('r1').value;
      }
      if (document.getElementById('r2').checked) {
            lan_value = document.getElementById('r2').value;
      }
      if (document.getElementById('r3').checked) {
            lan_value = document.getElementById('r3').value;
      }


      console.log(lan_value);
      var token = document.getElementById('token').value;
      console.log(token)
      var formData = new FormData();
      // var tokenData = new FormData();
      formData.append('uploadFile', file);
      formData.append('token', token);
      formData.append('language', lan_value);
      // tokenData.append('token', token);


	$.ajax({
      type: 'POST',
      url: URL,
      data: formData,
      // tokenData: tokenData,
      processData: false,  // prevent jQuery from converting the data
      contentType: false,  // prevent jQuery from overriding content type
      xhrFields: {
            // Getting on progress streaming response
            onprogress: function(e)
            {
            	console.log("Getting on progress streaming response edited")
                var progressResponse;
                // var elm = e.currentTarget;
                var response = e.currentTarget.response;
                if(lastResponseLength === false)
                {
                    progressResponse = response;
                    lastResponseLength = response.length;
                }
                else
                {
                    progressResponse = response.substring(lastResponseLength);
                    lastResponseLength = response.length;
                }
                 console.log(progressResponse.length)

                document.getElementById('textInput').value += progressResponse;
                // document.getElementById('audio').src = progressResponse;
                // source.src += progressResponse;
                // source.src = elm.getAttribute('data-value')
          		// audio.load(); 
                // var parsedResponse = JSON.parse(progressResponse);
                // $('#progressTest').text(progressResponse);
                // $('#fullResponse').text(parsedResponse.message);
                // $('.progress-bar').css('width', parsedResponse.progress + '%');
            }
        },

      success: function(response) {
      	document.getElementById('textInput').value = response;  
        console.log(filename)
        document.getElementById('audio1').src = '/static/'+ filename;
        document.getElementById('audio1').load();      	
      },
      error: function(xhr, status, error) {
  // var err = eval("(" + xhr.responseText + ")");
  alert("Error occurs in ajax");
}
  	});

}