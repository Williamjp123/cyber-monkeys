
// This code needs to be fixed so that it can work smoothly with our code in App.js 
// I've turned the code into a giant comment until we can get it working 
{/* 
$(function () {
    $("#tabs").tabs();

    $("#btnCancel-top").on("click", function () {
        $('#btnSubmit-top').attr("disabled", "disabled");
        $('#oncallUploadForm').attr("disabled", "disabled");
        window.close();
        return false;
    });

    $("#btnUpload").on("click", function () {
        uploadFormData();
        return false;
    });

    $("#btnSubmit").on("click", function () {
        Saving();
        $(this).attr("disabled", "disabled");
        $('#btnCancel').attr("disabled", "disabled");
        $('#oncallUploadForm').submit();
        return false;
    });

});

function uploadFormData(){
    $.ajax({
        url: '/odtc/oncall/uploadcheck',
        data: new FormData(document.getElementById("oncallUploadForm")),
        enctype: 'multipart/form-data',
        dataType: 'json',
        async: true,
        cache: false,
        processData: false,
        contentType: false,
        type: 'POST',
        success: function(data) {

            if(data !== null) {
                var scheduleJson = data;
                var htmlDataMain = "<h3>" + data.length + " Schedules</h3><hr>";
                var htmlDataSub = "";
                var errors = 0;

                var i = 0;
                for (i = 0; i < data.length; i++) {
                    htmlDataSub += "<div>";
                    htmlDataSub += "<span><strong>Schedule: </strong>" + (data[i].schedule === null ? "(Missing)" : data[i].schedule) + "</span><br>";
                    htmlDataSub += "<span><strong>Role: </strong>" + (data[i].role === null ? "(Missing)" : data[i].role) + "</span><br>";
                    htmlDataSub += "<span><strong>Shift: </strong>" + (data[i].shift === null ? "(Missing)" : data[i].shift) + "</span><br>";
                    htmlDataSub += "<span><strong>Contact: </strong>" + (data[i].onCallContact === null ? "(Missing)" : data[i].onCallContact) + "</span><br>";
                    htmlDataSub += "<span><strong>Pager: </strong>" + (data[i].pagerNum === null ? "(Missing)" : data[i].pagerNum) + "</span><br>";
                    htmlDataSub += "<span><strong>Phone: </strong>" + (data[i].phoneNum === null ? "(Missing)" : data[i].phoneNum) + "</span><br>";
                    htmlDataSub += "<span><strong>Position: </strong>" + (data[i].comments === null ? "(Missing)" : data[i].comments) + "</span><br>";
                    htmlDataSub += "<span><strong>Contact Method: </strong>" + (data[i].phonePreffered === null ? "(Missing)" : (data[i].phonePreffered === 1 ? "Phone" : "Pager")) + "</span><br>";





                    if(data[i].errors.length > 1 ) {
                        htmlDataSub += "<strong>Errors: </strong><span class='error'>" + data[i].errors + "</span></span><br>";
                        errors += 1;
                    }
                    htmlDataSub += "<hr></div>";
                }

                if(errors > 0)
                {
                    htmlDataMain += "<h1 style='color:red'>" + errors + " Broken Schedule(s)</h1><hr>";
                }
                else{
                    htmlDataMain += "<h1>No Errors, Click \"Create All On Calls\" to Upload</h1><hr>";
                    $("#btnSubmit").show();
                }



                htmlDataMain += htmlDataSub;

                $("#resultDiv").html(htmlDataMain);
            }
            else
            {
                new $.Zebra_Dialog("File not uploaded. Supported file types: .xls, .xlsx", {
                   'type':     'error',
                    'title':    'Upload Error'
                });
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            new $.Zebra_Dialog("File not uploaded. Supported file types: .xls, .xlsx", {
                'type':     'error',
                'title':    'Upload Error'
            });
        }
    });
}
*/}