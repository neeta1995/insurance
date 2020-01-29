function listData()
{
    ajaxAPICall("", (error, data) => {
        if (!error && data && data.items) {

            var HTML = ""

           
            
        }

    })
}

function ajaxAPICall(url, callback) {
    if (url) {
      $.ajax({
        url: url,
        crossDomain: true,
        headers: {
          accept: "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        type: "GET",
        success: function(data) {
          callback(null, data);
        },
        error: function(result) {
          callback("Error : " + result, null);
        },
        async: false
      });
    } else {
      callback("No URL provided", null);
    }
  }