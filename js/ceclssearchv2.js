//updated 10/1/2021 - VD - Changed Spring, removed term for COVID
//updated 8/27/2021 - VD - Default Fall 2021
//updated 06/17/2021 - VD - Hyflex/Hybrid and other changes
//updated 06/09/2021 - VD - Hyflex Class Notes
//updated 06/02/2021 - VD - Add header for multiple rows


//Waitlist functionality TBD later

//function format ( d ) {
//  var StartDate = moment(d.START_DATE, "MM-DD-YYYY")
//  var CurrentDate = moment();
//  if (CurrentDate > StartDate)
//    return 'Class Capacity: '+d.ENRL_CAP+'<br>'+
//        'Enrolled: '+d.ENRL_TOT+'<br>'+
//        'Waitlist: Closed<br>'+
//        'Waitlists are closed once classes begin, please contact the instructor for a permission number<br>'+
//        'This data is updated every 15 minutes.';
//  else
//    return 'Class Capacity: '+d.ENRL_CAP+'<br>'+
//        'Enrolled: '+d.ENRL_TOT+'<br>'+
//        'Waitlist: '+d.WAIT_TOT+'<br>'+
//        'Waitlist Capacity: '+d.WAIT_CAP+'<br>'+
//        'This data is updated every 15 minutes.';
//}

var _pageLoadTime = new Date();
var timerStart = _pageLoadTime.getMinutes() * 60 + _pageLoadTime.getSeconds();
var timerLeft = 300; //starting time point is 300 seconds (5 minutes)
var timerCap = 300;    //timer capacity is 300 seconds (5 minutes)
var _intervalID = 0;   //placeholder for the interval ID
jQuery(function($) {

  var CurrentDate = moment();
  var dt = $("#ceclasses").on('xhr.dt', function(e,settings,json,xhr) {
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
          processing: '<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i><h2>Loading...</h2> '},
        ajax: {
          url: "https://mws-api.sdccd.edu/?term=2225&career=ce",
          //url: "https://www.sdccd.edu/docs/StudentServices/schedules/CE2213.json",
          dataSrc: "data.query.rows",
        },
        order: [[ 0, 'asc' ], [ 4, 'desc' ]],
        rowGroup: {
          startRender: function ( rows, group ) {
            if (rows.count() > 1)
              return group + ' <span class="badge bg-blue" style="background-color:#03a9f4;"><i class="fas fa-exclamation-triangle"></i> This class has ' +rows.count()+ ' instructors/parts</span>';
            else
              return group;
          },
          endRender: function ( rows, group ) {
            if (rows.count() > 1)
              return ' ';
            else
              return null;
          },
          emptyDataGroup: null,
          dataSrc: 'COURSENAME'
        },
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
              if (data.CECBE == '4CBE')
                return '<span class="hidden-sm tableheader">'+full['SUBJECT'] + ' ' + full['CATALOG_NBR'] + '&nbsp;<span style="cursor:help;color:#009999;" data-toggle="tooltip" data-container="body" title="By enrolling in this course, you acknowledge that if you meet the eligibility requirements, you would like to receive San Diego City, Mesa, and/or Miramar College credit for this course. You will be provided an opportunity to opt out of receiving credit once your instructor submits verification that you have met the grade eligibility requirement."><i class="fa-solid fa-square-c"></i></span><br/>' + full['CRSE_NAME']+'</span>';
              else
                return '<span class="hidden-sm tableheader">'+full['SUBJECT'] + ' ' + full['CATALOG_NBR'] + '&nbsp;<br/>' + full['CRSE_NAME']+'</span>';
            }
          }, //0
          {data: "CRSETOPIC"},//1
          {
            'data': null,
            'render': function (data, type, full) {
              return  '<button class="btn btn-outline-primary" data-clipboard-text="'+data['CLASS_NBR']+'"><i class="far fa-copy"></i> '+data['CLASS_NBR']+'</button>';
            }
          }, // class nbr2
          {
            "data": null,
            "defaultContent": "",
            "render": function (data, type, full) {
              if (data.ENRL_CAP == 999)
                return '-';
              else
                return full['ENRL_CAP'];
            }
          }, // enroll cap 3
          //Open seats (4)
          {
            "data": null,
            "defaultContent": "",
            "render": function (data, type, full) {
              if (data.SEATS == '999')
                return '-';
              else
                return full['SEATS'];
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
                  // else if ((data.WAIT_TOT >= data.WAIT_CAP) && (data.SEATS < 0.5))
                  //  return '<i class="far fa-pause-circle">&nbsp;</i>Waitlist Full';
                  // else if (data.WAIT_TOT > 0)
              //   return '<i class="far fa-pause-circle">&nbsp;</i>Waitlist Available';
              else if (data.SEATS < 0.5)
                return '<i class="fas fa-stop-circle">&nbsp;</i>Full';
              else
                return '<i class="fas fa-thumbs-up">&nbsp;</i>Open';
            }
          },
          {
            'data': null,
            "orderable": false,
            'render': function (data, type, full) {
              if (((data.ROOM == 'City Remote') || (data.ROOM == 'Mesa Remote') || (data.ROOM == 'Miramar Remote')) && (data.LOCATION == 'ONLINESYNC'))
                return 'Online';
              else if (data.LOCATION == 'ONLINE')
                return 'Online';
              else if (((data.ROOM == 'City - Web') || (data.ROOM == 'Mesa - Web') || (data.ROOM == 'Miramar - Web')) && (data.LOCATION == 'ONLINESYNC'))
                return 'Online';
              else if (((data.ROOM == 'City - Web') || (data.ROOM == 'Mesa - Web') || (data.ROOM == 'Miramar - Web')) && (data.LOCATION == 'HYFLEX'))
                return 'Online';
              else if (((data.ROOM == 'City - Web') || (data.ROOM == 'Mesa - Web') || (data.ROOM == 'Miramar - Web')) && (data.LOCATION == 'PT-ONLINE'))
                return 'Online';
              else if (data.ROOM == '')
                return 'TBA';
              else
                return full['ROOM'];
            }
          }, // ROOM 6
          {
            'data': null,
            "orderable": false,
            'render': function (data, type, full) {
              if ((data.CATALOG_NBR == ' 270') || (data.CATALOG_NBR == ' 272'))
                return full['CRSE_TYPE'];
              else if (((data.LOCATION == 'PT-ONLINE') || (data.LOCATION == 'ONCAMPUS')) && (data.IPEX == 'YES'))
                return '<span style="cursor:help;color:#009999;" data-toggle="tooltip" data-container="body" title="This class contains an in-person component and/or in-person exam that requires proof of vaccination. Please visit https://www.sdccd.edu/students/covid19/ for more information."></i>' + full['CRSE_TYPE'] + '&nbsp;<br/><i class="fas fa-syringe"></i>&nbsp; &nbsp;<i class="fas fa-edit"></i></span>';
              else if (((data.LOCATION == 'PT-ONLINE') || (data.LOCATION == 'ONCAMPUS')) && (data.STRM == '2227'))
                return full['CRSE_TYPE'];
              else if ((data.LOCATION == 'PT-ONLINE') || (data.LOCATION == 'ONCAMPUS'))
                return '<span style="cursor:help;color:#009999;" data-toggle="tooltip" data-container="body" title="This class contains an in-person component that requires proof of vaccination.  Please visit https://www.sdccd.edu/students/covid19/ for more information."></i>' + full['CRSE_TYPE'] + '&nbsp;<i class="fas fa-syringe"></i></span>';
              else if (data.LOCATION == 'HYFLEX')
                return 'HyFlex';
              else if (data.LOCATION == 'ONLINE')
                return 'Fully Online';
              else if (data.LOCATION == 'ONLINESYNC')
                return 'Online Live';
              else
                return full['CRSE_TYPE'];
            }
          },//7 - Class Type
          {
            'data': null,
            "orderable": false,
            'render': function (data, type, full) {
              if ((data.STARTTIME == '') && (data.LOCATION == 'ONLINESYNC'))
                return '';
              else if ((data.STARTTIME == '') && (data.LOCATION == 'ONLINE'))
                return '';
              else if ((data.STARTTIME == '') && (data.LOCATION == 'PT-ONLINE'))
                return '';
              else if ((data.STARTTIME == '') && (data.LOCATION == 'HYFLEX'))
                return '';
              else if (data.STARTTIME == '')
                return 'TBA';
              else
                return full['STARTTIME'] + ' - ' + full['ENDTIME'];
            }
          },//class times (8)
          {
            'data': null,
            "orderable": false,
            'render': function (data, type, full) {
              if ((data.DAYS == '') && (data.LOCATION == 'ONLINESYNC'))
                return ''
              else if ((data.DAYS == '') && (data.LOCATION == 'ONLINE'))
                return ''
              else if ((data.DAYS == '') && (data.LOCATION == 'PT-ONLINE'))
                return ''
              else if ((data.DAYS == '') && (data.LOCATION == 'HYFLEX'))
                return ''
              else if (data.DAYS == '')
                return 'TBA'
              else
                return full['DAYS'];
            }
          }, // DAYS 9
          {
            'data': null,
            'render': function (data, type, full) {
              if (data.WAH == '####')
                return ' ';
              else
                return full['WAH'] + ' Weekly Hours';
            }
          }, //10
          {
            'data': null,
            'render': function (data, type, full) {
              return '<i class="far fa-calendar-alt"></i>&nbsp;' + full['START_DATE'] + ' - ' + full['END_DATE'] + '</span>';
            }
          },//class dates (11)
          {
            'data': null,
            'render': function (data, type, full, meta) {
              if (data.EMAIL_ADDR == '')
                return 'To Be Determined'
              else
                return '<a href="mailto:' + full['EMAIL_ADDR'] + '?subject=Question about ' + full['COURSENAME'] + '"><i class="far fa-envelope"></i>&nbsp;' + full['NAME'] + '</a>';
            }
            //="<a href=mailto:"&R2&"?subject=Question%20Nbr%20for%20"&C2&"%20"&D2&"%20Class%20Nbr%20"&F2&">"&Q2&"</a>"
          },//instructor (12)
          {data: "SUBJECT"}, //13
          {data: "STARTTIME"}, //14
          {data: "ENDTIME"}, //15
          {data: "START_DATE"}, //16
          {data: "END_DATE"}, //17
          {data: "ADD_DEADLINE"}, //18
          {data: "DROP_DEADLINE"}, //19
          {data: "WITH_DEADLINE"}, //20
          {data: "CRSEREQ"}, //21
          {data: "HYFLEXNOTE"}, //22
          {data: "CLSNOTES"}, //23
          {data: "CRSEDESCR"}, //24
          {data: "SESSION_CODE"}, //25
          {data: "COURSENAME"}, //26
          {data: "CATALOG_NBR"}, //27
          {data: "CECLSNAME"}, //28
          {data: "CECBE"}, //29 - CE to Col CBE
          {
            'data': null,
            'render': function (data, type, full) {
              if (data.CBEFLAG == 'Y')
                return 'By enrolling in this course, you acknowledge that if you meet the eligibility requirements, you would like to receive San Diego City, Mesa, and/or Miramar College credit for this course. You will be provided an opportunity to opt out of receiving credit once your instructor submits verification that you have met the grade eligibility requirement. <a href="https://www.sdccd.edu/about/departments-and-offices/instructional-services-division/workforce-and-economic-development/cte-transitions-credit-by-exam/sdce-to-college.aspx" target="_blank">Student Requirements</a> <br/><br/>' + full['CBEEQ'];
              else
                return '';
            }
          }//30 - CE to Col CBE

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
  new $.fn.dataTable.FixedHeader( dt );
  // Add functionality to change terms on button click
  $('#term1').click(function() {
    // you can reload your data here. You can call a different file if you need to change the data returned
    dt.ajax.url( "https://mws-api.sdccd.edu/?term=2225&career=ce" ).load();
    //dt.ajax.url( "https://www.sdccd.edu/docs/StudentServices/schedules/CE2207.json" ).load();
    $('button').removeClass('active');
    $(this).addClass('active');
    document.getElementById("term").innerHTML = "Summer 2022";
    if( _intervalID != 0 ) {
      clearInterval(_intervalID);
    }
  });
  $('#term2').click(function() {
    // you can reload your data here. You can call a different file if you need to change the data returned
    dt.ajax.url( "https://mws-api.sdccd.edu/?term=2227&career=ce" ).load();
    //dt.ajax.url( "https://www.sdccd.edu/docs/StudentServices/schedules/CE2207.json" ).load();
    $('button').removeClass('active');
    $(this).addClass('active');
    document.getElementById("term").innerHTML = "Fall 2022";
    if( _intervalID != 0 ) {
      clearInterval(_intervalID);
    }
  });

  // Add event listener for opening and closing details

  $("#cesearchbox").on("keyup search input paste cut", function() {
    dt.search(this.value).draw();
  });

  // Array to track the ids of the details displayed rows
  var detailRows = [];
  $('#ceclasses tbody').on( 'click', 'tr td.details-control', function () {
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

$("#cefilter-button").click(function() {
  $(this).toggleClass("active");
  $('#cefilter-body').slideToggle(100);
});

$("#btnSearch2").click(function(e){
  var table = $('#ceclasses').DataTable();
  var txtCEClass = $("#txtCEClass").val();
  var txtCEClassname = $("#txtCEClassName").val();
  var txtCEClassNumber = $("#txtCEClassNumber").val();
  var txtCampus = $("#txtCampus").val();
  var txtCEStart = $("#txtCEStart").val();
  var txtCEStatus = $("#txtCEStatus").val();
  var txtCEClassType = $("#txtCEClassType").val();
  var txtCESubject = $("#txtCESubject").val();
  var txtCEInstructor = $("#txtCEInstructor").val();
  var txtCrseTopic = $("#txtCrseTopic").val();
  var txt4CBE = $("#txt4CBE").val();

  table
      .columns(0).search(txtCEClass)
      .columns(2).search(txtCEClassNumber)
      .columns(5).search(txtCEStatus)
      .columns(6).search(txtCampus)
      .columns(7).search(txtCEClassType)
      .columns(12).search(txtCEInstructor)
      .columns(13).search(txtCESubject)
      .columns(16).search(txtCEStart)
      .columns(28).search(txtCEClassname)
      .columns(1).search(txtCrseTopic)
      .columns(29).search(txt4CBE)
      .draw();
});

$('#ceclasses thead th:first-child').css({'background-image':'none'});


// Custom filtering function which will search data in column four between two values
$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
      var min = minDate.val();
      var max = maxDate.val();
      var date = new Date( data[15] );

      if (
          ( min === null && max === null ) ||
          ( min === null && date <= max ) ||
          ( min <= date   && max === null ) ||
          ( min <= date   && date <= max )
      ) {
        return true;
      }
      return false;
    }
);

$(document).ready(function() {
  // Create date inputs
  minDate = new DateTime($('#min'), {
    format: 'MMMM Do YYYY'
  });
  maxDate = new DateTime($('#max'), {
    format: 'MMMM Do YYYY'
  });

  // DataTables initialisation
  var table = $('#ceclasses').DataTable();

  // Refilter the table
  $('#min, #max').on('change', function () {
    table.draw();
  });
});


//$(document).ready(function() {
//  function onHashChange() {
//    var hash = window.location.hash;
//
//   if (hash) {
// using ES6 template string syntax
//      $(`[data-toggle="tab"][href="${hash}"]`).trigger('click');
//    }
//  }
//
//  window.addEventListener('hashchange', onHashChange, false);
//  onHashChange();
//});

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