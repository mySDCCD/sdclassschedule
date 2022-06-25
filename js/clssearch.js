//updated 08/21/2020 - VD - Change filters on search, stylize
//updated 08/20/2020 - VD - Free, group, book, web, catnbr, email
//updated 08/19/2020 - VD

function format ( d ) {
  var StartDate = moment(d.START_DATE, "MM-DD-YYYY")
  var CurrentDate = moment();
  if (CurrentDate > StartDate)
    return 'Class Capacity: '+d.ENRL_CAP+'<br>'+
        'Enrolled: '+d.ENRL_TOT+'<br>'+
        'Waitlist: Closed<br>'+
        'Waitlists are closed once classes begin, please contact the instructor for a permission number<br>'+
        'This data is updated every 15 minutes.';
  else
    return 'Class Capacity: '+d.ENRL_CAP+'<br>'+
        'Enrolled: '+d.ENRL_TOT+'<br>'+
        'Waitlist: '+d.WAIT_TOT+'<br>'+
        'Waitlist Capacity: '+d.WAIT_CAP+'<br>'+
        'This data is updated every 15 minutes.';
}

var _pageLoadTime = new Date();
var timerStart = _pageLoadTime.getMinutes() * 60 + _pageLoadTime.getSeconds();
var timerLeft = 300; //starting time point is 300 seconds (5 minutes)
var timerCap = 300;    //timer capacity is 300 seconds (5 minutes)
var _intervalID = 0;   //placeholder for the interval ID
jQuery(function($) {

  var CurrentDate = moment();
  var dt = $("#classes").on('xhr.dt', function(e,settings,json,xhr) {
    //hook into the xhr event and read timing information on the data refresh state
    //additionally manage the timer for updating the refresh message based on xhr data
    var _hdrTimeDiffSec = xhr.getResponseHeader("X-TIME-DIFF-SEC");
    var _hdrTimeCap = xhr.getResponseHeader("X-TIME-CAP");
    timerLeft = parseInt(_hdrTimeDiffSec);
    timerCap = parseInt(_hdrTimeCap);
    if( timerLeft == 0 ) {
      //this means brand new cache so it should be good for the maximum duration of the cache capacity
      timerLeft = timerCap;
    }

    //create the function that will be bound and run on an interval
    delegated_update_func = function(ts,tl) {
      var d = new Date();
      var seconds = d.getMinutes() * 60 + d.getSeconds(); //get current time value as seconds
      seconds = seconds - ts ;  //how many seconds have passed since the page loaded (timeStart, or ts)
        //time left is starting seconds left (tl) minus number of seconds since page loaded (seconds)
      var timeleft = tl - seconds ; // % tc ;
      if( timeleft > 0 ) {
          var result = ("00"+(parseInt(timeleft / 60))).slice(-2) + ':' + ("00"+(timeleft % 60)).slice(-2) ; //formart seconds into 00:00
          $("#time").html(result).parent().show();
      } else {
        //timer has hit zero so clear the interval and update the message that data can be refreshed
        clearInterval(_intervalID);
        $("#time").parent().html("Data can be refreshed by reloading the page");
      }

    };

    // call setInterval with the bound function defined above every 500 milliseconds
    _intervalID = setInterval(delegated_update_func.bind(null,timerStart,timerLeft), 500);

    })
  .DataTable({
    processing: true,
    language: {
      search: "Keyword Search:",
      processing: '<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i><span class="sr-only">Loading...</span> '},
    ajax: {
      url: "https://mws-api.sdccd.edu/",
      dataSrc: "data.query.rows",
      },
    order: [[ 0, 'asc' ], [ 4, 'desc' ]],
    rowGroup: {dataSrc: 'COURSENAME'},
    responsive: {
      details: {
        display: $.fn.dataTable.Responsive.display.modal({
          header: function (row) {
            var data = row.data();
            return 'Details for ' + data['SUBJECT'] + ' ' + data['CATALOG_NBR'] + ' ' + data['CRSE_NAME'] + ' ' + '(' + data["CLASS_NBR"] + ')';
          }
        }),
        //renderer: $.fn.dataTable.Responsive.renderer.tableAll( {
        //  tableClass: 'table'
        //} )
        renderer: function (api, rowIdx, columns) {
          var data = $.map(columns, function (col, i) {
            return col.hidden ?
                '<table class="table table-striped">' +
                '<tr data-dt-row="' + col.rowIndex + '" data-dt-column="' + col.columnIndex + '">' +
                '<td>' + col.title + ':' + '</td> ' +
                '<td>' + col.data + '</td>' +
                '</tr>' :
                '';
          }).join('');

          return data ?
              $('<table/>').append(data) :
              false;
        }
      }
    },

    dom: 'l<"table-filter-container">trpi',
    iDisplayLength: 20,
    columns: [
      {
        'data': null,
        'render': function (data, type, full) {
          if ((data.BOOKSTATUS == 'FREE') && (data.RQMNT == 'HNRS'))
            return '<span class="hidden-sm tableheader">'+full['SUBJECT'] + ' ' + full['CATALOG_NBR'] + '&nbsp;<i class="fas fa-h-square"></i>&nbsp;<img src="img/ztc.png" width="20px" alt="No Cost Textbooks"><br>' + full['CRSE_NAME']+'</span>';
          else if (data.BOOKSTATUS == 'FREE')
            return '<span class="hidden-sm tableheader">'+full['SUBJECT'] + ' ' + full['CATALOG_NBR'] + '&nbsp;<img src="img/ztc.png" width="20px" alt="No Cost Textbooks"><br>' + full['CRSE_NAME']+'</span>';
          else if (data.RQMNT == 'HNRS')
            return '<span class="hidden-sm tableheader">'+full['SUBJECT'] + ' ' + full['CATALOG_NBR'] + '&nbsp;<i class="fas fa-h-square"></i> <br>' + full['CRSE_NAME']+'</span>';
          else
            return '<span class="hidden-sm tableheader">'+full['SUBJECT'] + ' ' + full['CATALOG_NBR'] + '<br>' + full['CRSE_NAME']+'</span>';
        }
      }, //0
      {data: "UNITS"}, //1
      {
        'data': null,
        'render': function (data, type, full) {
          return  '<button class="btn btn-outline-primary" data-clipboard-text="'+data['CLASS_NBR']+'"><i class="far fa-copy"></i> '+data['CLASS_NBR']+'</button>';
        }
      }, // class nbr2
      {data: "ENRL_CAP"}, //3
      //Open seats (4)
      {
        "class": "details-control",
        'data': null,
        "defaultContent": "",
        'render': function (data, type, full, meta) {
          var ClsStartDate = moment(data.START_DATE, "MM-DD-YYYY");
          if (CurrentDate > ClsStartDate)
            return '<div style="text-align:center;color:#009999">' + full['SEATS'] + '</div>';
          else if (data.WAIT_TOT > 0)
            return '<div style="text-align:center;color:#009999">0</div>';
          else
            return '<div style="text-align:center;color:#009999">' + full['SEATS'] + '</div>';
        }
      },
        //class status (5)
      {
        "orderable": false,
        "data": null,
        "defaultContent": "",
        "render": function (data, type, row) {
          var DeadlineDate = moment(data.ADD_DEADLINE, "MM-DD-YYYY");
          if (CurrentDate > DeadlineDate)
            return '<i class="fas fa-stop-circle">&nbsp;</i>Closed ';
          else if (data.CONSENT == 'I')
            return '<i class="fas fa-list-ol">&nbsp;</i> Permission # Required';
          else if ((data.WAIT_TOT >= data.WAIT_CAP) && (data.SEATS < 0.5))
            return '<i class="far fa-pause-circle">&nbsp;</i>Waitlist Full';
          else if (data.WAIT_TOT > 0)
            return '<i class="far fa-pause-circle">&nbsp;</i>Waitlist Available';
          else if (data.SEATS < 0.5)
            return '<i class="fas fa-stop-circle">&nbsp;</i>Full';
          else
            return '<i class="fas fa-thumbs-up">&nbsp;</i>Open';
        }
      },
      {data: "ROOM"}, //6
      {data: "CRSE_TYPE"}, //7
        //class times (8)
      {
        'data': null,
        'render': function (data, type, full) {
          return full['STARTTIME'] + ' - ' + full['ENDTIME'];
        }
      },
        //class dates (9)
      {
        'data': null,
        'render': function (data, type, full) {
          return '<span style="cursor:help;color:#009999;" data-toggle="tooltip" data-container="body" title="<em>Last Day to Add:</em> <div>'+ full['ADD_DEADLINE'] +'</div><br/><em>Last Day to Drop:</em><div>'+ full['DROP_DEADLINE'] +'</div><br/><em>Last Day to Withdraw:</em><div>'+ full['WITH_DEADLINE']+ '</div><br/><em>Pass/No-Pass Deadline:</em><div>'+ full['PNP_DEADLINE'] +'</div><br/><em>Refund Deadline:</em><div>'+ full['REFUND']+'</div>" data-html="true">' + '<i class="far fa-calendar-alt"></i>&nbsp;' + full['START_DATE'] + ' - ' + full['END_DATE'] + '</span>';
        }
      },
      {data: "DAYS"}, //10
        //instructor (11)
      {
        'data': 'EMAIL_ADDR',
        'render': function (data, type, full, meta) {
          return '<a href="mailto:' + data + '?subject=Question about ' + full['COURSENAME'] + '"><i class="far fa-envelope"></i>&nbsp;' + full['NAME'] + '</a>';
        }
        //="<a href=mailto:"&R2&"?subject=Question%20Nbr%20for%20"&C2&"%20"&D2&"%20Class%20Nbr%20"&F2&">"&Q2&"</a>"
      },
      {data: "SUBJECT"}, //12
      {data: "STARTTIME"}, //13
      {data: "ENDTIME"}, //14
      {data: "START_DATE"}, //15
      {data: "END_DATE"}, //16
      {data: "ADD_DEADLINE"}, //17
      {data: "DROP_DEADLINE"}, //18
      {data: "WITH_DEADLINE"}, //19
      {data: "PNP_DEADLINE"}, //20
      {data: "REFUND"}, //21
      {data: "CRSEREQ"}, //22
      {data: "CRSEDESCR"}, //23
      {data: "CLSNOTES"}, //24
       //degree app (25)
      {
        "orderable": false,
        "data": null,
        "defaultContent": "",
        "render": function (data, type, row) {
          if (data.CREDIT_STATUS == 'D')
            return 'Yes';
          else
            return 'No';
        }
      },
        //transfer (26)
      {
        "orderable": false,
        "data": null,
        "defaultContent": "",
        "render": function (data, type, row) {
          if (data.CRSE_TRANSFER == 'A')
            return 'Transferable to UC, CSU';
          else if (data.CRSE_TRANSFER == 'B')
            return 'Transferable to CSU';
          else
            return 'Not Transferable';
        }
      },
      {
        "orderable": false,
        "data": null,
        "defaultContent": "",
        "render": function (data, type, full, row) {
          if ((data.BOOKSTATUS == 'FREE') && (data.LOCATION == 'ONLINE'))
            return '<img src="img/ztc.png" width="40px" alt="No Cost Textbooks"> <a href="https://www.bookstore.sdccd.edu/' + full['COLLEGE'] + '/textbook_express/get_txtexpress.asp?remote=1&student=&ref=2023&term=' + full['COLLEGE'] + '+FALL' + '+2020'+'&dept='+full['SUBJECT']+'&course='+full['CATALOG_NBR']+'&section='+full['CLASS_NBR']+'-WEB&getbooks=display+books" target="_blank">Books</a>';
          else if ((data.BOOKSTATUS == 'YES') && (data.LOCATION == 'ONLINE'))
            return '<a href="https://www.bookstore.sdccd.edu/' + full['COLLEGE'] + '/textbook_express/get_txtexpress.asp?remote=1&student=&ref=2023&term=' + full['COLLEGE'] + '+FALL' + '+2020'+'&dept='+full['SUBJECT']+'&course='+full['CATALOG_NBR']+'&section='+full['CLASS_NBR']+'-WEB&getbooks=display+books" target="_blank">Books</a>';
          else if (data.BOOKSTATUS == 'FREE')
            return '<img src="img/ztc.png" width="40px" alt="No Cost Textbooks"> <a href="https://www.bookstore.sdccd.edu/' + full['COLLEGE'] + '/textbook_express/get_txtexpress.asp?remote=1&student=&ref=2023&term=' + full['COLLEGE'] + '+FALL' + '+2020'+'&dept='+full['SUBJECT']+'&course='+full['CATALOG_NBR']+'&section='+full['CLASS_NBR']+'&getbooks=display+books" target="_blank">Books</a>';
          else if (data.BOOKSTATUS == 'YES')
            return '<a href="https://www.bookstore.sdccd.edu/' + full['COLLEGE'] + '/textbook_express/get_txtexpress.asp?remote=1&student=&ref=2023&term=' + full['COLLEGE'] + '+FALL' + '+2020'+'&dept='+full['SUBJECT']+'&course='+full['CATALOG_NBR']+'&section='+full['CLASS_NBR']+'&getbooks=display+books" target="_blank">Books</a>';
          else
            return 'No Textbooks'
        } //Code added to look at coruse type online only need web suffix  Need to check each semester todo not have term hardcoded
      },
      {data: "BOOKSTATUS"}, //28
      {data: "SESSION_CODE"}, //29
      {data: "RQMNT"}, //30
      {data: "COURSENAME"}, //31
      {data: "CATALOG_NBR"} //32
    ],
  columnDefs: [{
      className: 'control',
      orderable: false,
      targets: [-1]
    },
   // {
   //   "targets": [2],
   //  "render": function (data, type, full, meta) {
   //     return type === 'display'? '<div title="' + full.SEATS + '">' + data : data;
   // }},
   // { "orderSequence": [ "asc" ], "targets": [ 0 ] },
   // { "orderSequence": [ "asc" ], "targets": [ 4 ] }
    ],

  });
  // Add event listener for opening and closing details

  $("#searchbox").on("keyup search input paste cut", function() {
    dt.search(this.value).draw();
  });

  // Array to track the ids of the details displayed rows
  var detailRows = [];
  $('#classes tbody').on( 'click', 'tr td.details-control', function () {
    var tr = $(this).closest('tr');
    var row = dt.row( tr );
    var idx = $.inArray( tr.attr('id'), detailRows );

    if ( row.child.isShown() ) {
      //tr.removeClass( 'details' );
      row.child.hide();

      // Remove from the 'open' array
      detailRows.splice( idx, 1 );
    }
    else {
     // tr.addClass( 'details' );
      row.child( format( row.data() ) ).show();

      // Add to the 'open' array
      if ( idx === -1 ) {
        detailRows.push( tr.attr('id') );
      }
    }
  } );

  // On each draw, loop over the `detailRows` array and show any child rows
  dt.on( 'draw', function () {
    $.each( detailRows, function ( i, id ) {
      $('#'+id+' td.details-control').trigger( 'click' );
    } );
  } );

} );

$('#myInputTextField').keyup(function(){
  dt.search($(this).val()).draw() ;
})

$("#filter-button").click(function() {
  $(this).toggleClass("active");
  $('#filter-body').slideToggle(100);
});

$("#btnSearch").click(function(e){
  var table = $('#classes').DataTable();
  var txtClass = $("#txtClass").val();
  var txtClassNumber = $("#txtClassNumber").val();
  var txtStart = $("#txtStart").val();
  var txtStatus = $("#txtStatus").val();
  var txtCollege = $("#txtCollege").val();
  var txtClassType = $("#txtClassType").val();
  var txtBooks = $("#txtBooks").val();
  var txtTransfer = $("#txtTransfer").val();
  var txtSubject = $("#txtSubject").val();
  var txtInstructor = $("#txtInstructor").val();
  var txtSession = $("#txtSession").val();
  var txtHonors = $("#txtHonors").val();
  var txtCatnbr = $("#txtCatnbr").val();

  table
      .columns(0).search(txtClass)
      .columns(2).search(txtClassNumber)
      .columns(5).search(txtStatus)
      .columns(6).search(txtCollege)
      .columns(7).search(txtClassType)
      .columns(11).search(txtInstructor)
      .columns(12).search(txtSubject)
      .columns(15).search(txtStart)
      .columns(28).search(txtBooks)
      .columns(26).search(txtTransfer)
      .columns(29).search(txtSession)
      .columns(30).search(txtHonors)
      .columns(32).search(txtCatnbr)
      .draw();
});

$('#classes thead th:first-child').css({'background-image':'none'});

//$("#classes a.cust_id").on('click', function(event){
//  event.stopPropagation();
//});

//countdown timer for cache refresh
/*
setInterval(function () {
  var d = new Date();
  var seconds = d.getMinutes() * 60 + d.getSeconds(); //convet 00:00 to seconds for easier caculation
  var twentyMin = 60 * 15; //twenty minutes is 300 seconds!
  var timeleft = twentyMin - seconds % twentyMin; // let's say 01:30, then current seconds is 90, 90%300 = 90, then 300-90 = 210. That's the time left!
  timeleft = timerCap - timerStart % timerCap ;
  var result = parseInt(timeleft / 60) + ':' + timeleft % 60; //formart seconds into 00:00
  document.getElementById('time').innerHTML = result;

}, 500) //calling it every 0.5 second to do a count down
*/