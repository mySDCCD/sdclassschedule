//updated 4/17/2022 - Added summer and added popup on MATH 92
//updated 1/24/2022 - VD Fixed LCOM to PSYC/POLI
//updated 8/3/2021 - VD Switched to FAll 2021
//updated 7/19/2021 - VD Added subject description
//updated 6/11/2021 - VD Added COVID-19 logic, exclude 2215
//updated 2/1/2021 - VD Fixed waitlist
//updated 12/5/2020 - VD - Grouping

function format ( d ) {
  var StartDate = moment(d.START_DATE, "MM-DD-YYYY")
  var CurrentDate = moment();
  if (CurrentDate > StartDate)
    return 'Class Capacity: '+d.ENRL_CAP+'<br>'+
        'Enrolled: '+d.ENRL_TOT+'<br>'+
        'Waitlist: Closed<br>'+
        'Waitlists are closed once classes begin, please contact the instructor for a permission number<br>'+
        'This data is updated every 10 minutes.';
  else
    return 'Class Capacity: '+d.ENRL_CAP+'<br>'+
        'Enrolled: '+d.ENRL_TOT+'<br>'+
        'Students on Waitlist: '+d.WAIT_TOT+'<br>'+
        'Waitlist Capacity: '+d.WAIT_CAP+'<br>'+
        'This data is updated every 10 minutes.';
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
        deferRender: true,
        language: {
          search: "Keyword Search:",
          processing: '<div style="margin-top:100px;"><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i><h2>Loading, please wait...</h2></div> '},
        ajax: {
          url: "https://mws-api.sdccd.edu/?term=2225&career=ugrd", //this is where you change the default term
          // url: "UGRD2217.json",
          dataSrc: "data.query.rows",
        },
        order: [[ 36, 'asc' ], [ 2, 'asc' ], [ 4, 'desc' ], [ 38, 'asc']],
        rowGroup: {
          startRender: function ( rows, group ) {
            if (rows.count() > 1)
              return group + ' <span class="badge bg-blue" style="background-color:#03a9f4;"><i class="fas fa-exclamation-triangle"></i> This class has ' +rows.count()+ ' parts</span>';
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
            renderer: function ( api, rowIdx, columns ) {
              var data = $.map( columns, function ( col, i ) {
                return col.hidden ?
                    '<table class="table table-rounded table-striped border">' +
                    '<tr data-dt-row="'+col.rowIndex+'" data-dt-column="'+col.columnIndex+'">'+
                    '<td class="fw-bold" style="width:20%;">'+col.title+':'+'</td> '+
                    '<td>'+col.data+'</td>'+
                    '</tr>' :
                    '';
              } ).join('');

              return data ?
                  $('<table/>').append( data ) :
                  false;
            }
          }
        },

        dom: 'l<"table-filter-container">trpi',
        iDisplayLength: 50,
        columns: [
          {
            'data': null,
            'render': function (data, type, full) {
              if ((data.BOOKSTATUS == 'FREE') && (data.RQMNT == 'HNRS') && (data.WBL != ''))
                return '<span class="hidden-sm tableheader duplicate" style="font-weight:bold;">'+full['SUBJECT'] + ' ' + full['CATALOG_NBR'] + '&nbsp;<i class="fas fa-h-square"></i>&nbsp;<i class="fab fa-creative-commons-nc"></i>&nbsp;<i class="fak fa-wbl"></i>' + 'Honors '+ full['CRSE_NAME']+'</span> <br><button class="btn btn-info btn-sm" style="text-align:center;"><i class="fas fa-info-circle"></i> Class Details</button>';
              else if ((data.BOOKSTATUS == 'FREE') && (data.WBL != ''))
                 return '<span class="hidden-sm tableheader duplicate" style="font-weight:bold;">'+full['SUBJECT'] + ' ' + full['CATALOG_NBR'] + '&nbsp;<i class="fab fa-creative-commons-nc"></i>&nbsp;<i class="fak fa-wbl"></i>' + full['CRSE_NAME']+'</span> <br><button class="btn btn-info btn-sm" style="text-align:center;"><i class="fas fa-info-circle"></i> Class Details</button>';
              else if ((data.WBL != '') && (data.RQMNT == 'HNRS'))
                return '<span class="hidden-sm tableheader duplicate" style="font-weight:bold;">'+full['SUBJECT'] + ' ' + full['CATALOG_NBR'] + '&nbsp;<i class="fas fa-h-square"></i>&nbsp;<i class="fak fa-wbl"></i>' + full['CRSE_NAME']+'</span> <br><button class="btn btn-info btn-sm" style="text-align:center;"><i class="fas fa-info-circle"></i> Class Details</button>';
              if ((data.BOOKSTATUS == 'FREE') && (data.RQMNT == 'HNRS'))
                return '<span class="hidden-sm tableheader duplicate" style="font-weight:bold;">'+full['SUBJECT'] + ' ' + full['CATALOG_NBR'] + '&nbsp;<i class="fas fa-h-square"></i>&nbsp;<i class="fab fa-creative-commons-nc"></i>' + 'Honors ' + full['CRSE_NAME']+'</span> <br><button class="btn btn-info btn-sm" style="text-align:center;"><i class="fas fa-info-circle"></i> Class Details</button>';
              else if (data.BOOKSTATUS == 'FREE')
                return '<span class="hidden-sm tableheader duplicate" style="font-weight:bold;">'+full['SUBJECT'] + ' ' + full['CATALOG_NBR'] + ' ' + full['CRSE_NAME']+ '&nbsp;<i class="fab fa-creative-commons-nc"></i>' +'</span> <br><button class="btn btn-info btn-sm" style="text-align:center;"><i class="fas fa-info-circle"></i> Class Details</button>';
              else if (data.RQMNT == 'HNRS')
                return '<span class="hidden-sm tableheader duplicate" style="font-weight:bold;">'+full['SUBJECT'] + ' ' + full['CATALOG_NBR'] + '&nbsp;<i class="fas fa-h-square"></i> <br>' + 'Honors '+  full['CRSE_NAME']+'</span> <br><button class="btn btn-info btn-sm" style="text-align:center;"><i class="fas fa-info-circle"></i> Class Details</button>';
              else if (data.WBL != '')
                return '<span class="hidden-sm tableheader duplicate" style="font-weight:bold;">'+full['SUBJECT'] + ' ' + full['CATALOG_NBR'] + '&nbsp;<i class="fak fa-wbl"></i> <br>' +full['CRSE_NAME']+'</span> <br><button class="btn btn-info btn-sm" style="text-align:center;"><i class="fas fa-info-circle"></i> Class Details</button>';
              else
                return '<span class="hidden-sm tableheader" style="font-weight:bold;">'+full['SUBJECT'] + ' ' + full['CATALOG_NBR'] + '<br>' + full['CRSE_NAME'] + '</span> <br><button class="btn btn-info btn-sm" style="text-align:center;margin-top:5px;"><i class="fas fa-info-circle"></i> Class Details</button>';
            }
          }, //0
          {data: "UNITS"}, //1
          {
            'data': null,
            'render': function (data, type, full) {
              if (data.CRSE_ID == 008956)
                return '<span style="cursor:help;color:#009999;" data-toggle="tooltip" data-container="body" title="This course is intended for students pursuing an Associates Degree only.   Transfer students should see a counselor for Math requirements per college/university."> <button class="btn btn-outline-primary" data-clipboard-text="'+data['CLASS_NBR']+'"><i class="far fa-copy"></i> '+data['CLASS_NBR']+'</button></span>';
              else
                return  '<button class="btn btn-outline-primary" data-clipboard-text="'+data['CLASS_NBR']+'"><i class="far fa-copy"></i> '+data['CLASS_NBR']+'</button>';
            }
          }, // class nbr2
          {data: "ENRL_CAP"}, //3

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
          },//Open seats (4)
          {
            "class" : "details-control",
            "orderable": false,
            "data": null,
            "defaultContent": "",
            "render": function (data, type, row) {
              var DeadlineDate = moment(data.ADD_DEADLINE, "MM-DD-YYYY");
              if (CurrentDate > DeadlineDate)
                return '<i class="fas fa-stop-circle">&nbsp;</i>Closed ';
              else if (data.CONSENT == 'I')
                return '<i class="fas fa-list-ol">&nbsp;</i> Permission # Required';
              else if ((data.WAIT_TOT >= data.WAIT_CAP) && (data.WAIT_CAP > 0))
                return '<i class="far fa-pause-circle">&nbsp;</i>Waitlist Full';
              else if ((data.WAIT_TOT < data.WAIT_CAP) && (data.SEATS < 0.5))
                return '<i class="far fa-pause-circle">&nbsp;</i>Waitlist Available';
              else if ((data.WAIT_TOT < data.WAIT_CAP) && (data.SEATS == 0))
                return '<i class="far fa-pause-circle">&nbsp;</i>Waitlist Available';
              else if (data.WAIT_TOT > 0)
                return '<i class="far fa-pause-circle">&nbsp;</i>Waitlist Available';
              else if (data.SEATS < 0.5)
                return '<i class="fas fa-stop-circle">&nbsp;</i>Full';
              else
                return '<i class="fas fa-thumbs-up">&nbsp;</i>Open';
            }
          },//class status (5)

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
          },//6 - Class Type
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
          },// ROOM 7
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
          },//9
          {
            'data': null,
            'render': function (data, type, full) {
              return '<span style="cursor:help;color:#009999;" data-toggle="tooltip" data-container="body" title="<em>Last Day to Add:</em> <div>'+ full['ADD_DEADLINE'] +'</div><br/><em>Last Day to Drop:</em><div>'+ full['DROP_DEADLINE'] +'</div><br/><em>Last Day to Withdraw:</em><div>'+ full['WITH_DEADLINE']+ '</div><br/><em>Pass/No-Pass Deadline:</em><div>'+ full['PNP_DEADLINE'] +'</div><br/><em>Refund Deadline:</em><div>'+ full['REFUND']+'</div>" data-html="true">' + '<i class="far fa-calendar-alt"></i>&nbsp;' + full['START_DATE'] + ' - ' + full['END_DATE'] + '</span>';
            }
          },//class dates (10)
          {
            'data': null,
            'render': function (data, type, full, meta) {
              if (data.EMAIL_ADDR == '')
                return 'To Be Determined'
              else
                return '<a href="mailto:' + full['EMAIL_ADDR'] + '?subject=Question about ' + full['COURSENAME'] + '"><i class="far fa-envelope"></i>&nbsp;' + full['NAME'] + '</a>';
            }
          },//="<a href=mailto:"&R2&"?subject=Question%20Nbr%20for%20"&C2&"%20"&D2&"%20Class%20Nbr%20"&F2&">"&Q2&"</a>" instructor (11)
          {
            'data': null,
            "orderable": false,
            'render': function (data, type, full) {
              if (data.CRSE_ID == '070289')
                return 'POLI'
              else if (data.CRSE_ID == '070290')
                return 'PSYC'
              else
                return full['SUBJECT'];
            }
          }, // SUBJECT 12
          {data: "STARTTIME"}, //13
          {data: "ENDTIME"}, //14
          {data: "START_DATE"}, //15
          {data: "END_DATE"}, //16
          {data: "CLSNOTES"}, //17
          {data: "ADD_DEADLINE"}, //18
          {data: "DROP_DEADLINE"}, //19
          {data: "WITH_DEADLINE"}, //20
          {data: "PNP_DEADLINE"}, //21
          {data: "REFUND"}, //22
          {data: "CRSEREQ"}, //23
          {data: "IPEX"}, //24
          {data: "CRSEDESCR"}, //25
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
          },//degree app (26)
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
          },//transfer (27)
          {
            "orderable": false,
            "data": null,
            "defaultContent": "",
            "render": function (data, type, full, row) {
              if (data.WBL == '')
                return ''
              else return full['WBL']
            }
          },//WBL (28)
          {
            "orderable": false,
            "data": null,
            "defaultContent": "",
            "render": function (data, type, full, row) {
              if ((data.BOOKSTATUS == 'FREE') && (data.LOCATION == 'ONLINE'))
                return '<i class="fab fa-creative-commons-nc"></i> <a href="https://www.bookstore.sdccd.edu/' + full['COLLEGE'] + '/textbook_express/get_txtexpress.asp?remote=1&student=&ref=2023&term=' + full['COLLEGE'] + '+' + full['BOOKTERM'] +'&dept='+full['SUBJECT']+'&course='+full['CATALOG_NBR']+'&section='+full['CLASS_NBR']+'-WEB&getbooks=display+books" target="_blank">Books</a>';
              else if ((data.BOOKSTATUS == 'YES') && (data.LOCATION == 'ONLINE'))
                return '<a href="https://www.bookstore.sdccd.edu/' + full['COLLEGE'] + '/textbook_express/get_txtexpress.asp?remote=1&student=&ref=2023&term=' + full['COLLEGE'] + '+' + full['BOOKTERM'] +'&dept='+full['SUBJECT']+'&course='+full['CATALOG_NBR']+'&section='+full['CLASS_NBR']+'-WEB&getbooks=display+books" target="_blank">Books</a>';
              else if (data.BOOKSTATUS == 'FREE')
                return '<i class="fab fa-creative-commons-nc"></i> <a href="https://www.bookstore.sdccd.edu/' + full['COLLEGE'] + '/textbook_express/get_txtexpress.asp?remote=1&student=&ref=2023&term=' + full['COLLEGE'] + '+' + full['BOOKTERM'] +'&dept='+full['SUBJECT']+'&course='+full['CATALOG_NBR']+'&section='+full['CLASS_NBR']+'&getbooks=display+books" target="_blank">Books</a>';
              else if (data.BOOKSTATUS == 'YES')
                return '<a href="https://www.bookstore.sdccd.edu/' + full['COLLEGE'] + '/textbook_express/get_txtexpress.asp?remote=1&student=&ref=2023&term=' + full['COLLEGE'] + '+' + full['BOOKTERM'] +'&dept='+full['SUBJECT']+'&course='+full['CATALOG_NBR']+'&section='+full['CLASS_NBR']+'&getbooks=display+books" target="_blank">Books</a>';
              else
                return 'No Textbooks'
            } //Code added to look at course type online only need web suffix (29)
          },
          {data: "BOOKSTATUS"}, //30
          {data: "SESSION_CODE"}, //31
          {data: "RQMNT"}, //32
          {data: "COURSENAME"}, //33
          {data: "CATALOG_NBR"}, //34
          {data: "BOOKTERM"}, //35
          {data: "CLSNAME"}, //36
          {data: "CAMPUS"}, //37
          {data: "CLASS_MTG_NBR"} //38

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
        ]



      });



  new $.fn.dataTable.FixedHeader( dt );
  // Add functionality to change terms on button click
  $('#term1').click(function() {
    // you can reload your data here. You can call a different file if you need to change the data returned
    dt.ajax.url( "https://mws-api.sdccd.edu/?term=2225&career=ugrd" ).load();
    //dt.ajax.url( "https://www.sdccd.edu/docs/StudentServices/schedules/UGRD2207.json" ).load();
    $('button').removeClass('btn-primary');
    $('button').addClass('btn-outline-primary');
    $(this).removeClass('btn-outline-primary');
    $(this).addClass('btn-primary');
    document.getElementById("term").innerHTML = "Summer 2022";
    if( _intervalID != 0 ) {
      clearInterval(_intervalID);
    }
  });
  $('#term2').click(function() {
    // you can reload your data here. You can call a different file if you need to change the data returned
    dt.ajax.url( "https://mws-api.sdccd.edu/?term=2227&career=ugrd" ).load();
    //dt.ajax.url( "https://www.sdccd.edu/docs/StudentServices/schedules/UGRD2223.json" ).load();
    $('button').removeClass('btn-primary');
    $('button').addClass('btn-outline-primary');
    $(this).removeClass('btn-outline-primary');
    $(this).addClass('btn-primary');
    document.getElementById("term").innerHTML = "Fall 2022";
    if( _intervalID != 0 ) {
      clearInterval(_intervalID);
    }
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
  var txtCoursename = $("#txtCoursename").val();
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
  var txtWPL = $("#txtWPL").val();

  table
      .columns(0).search(txtClass)
      .columns(2).search(txtClassNumber)
      .columns(5).search(txtStatus)
      .columns(37).search(txtCollege)
      .columns(6).search(txtClassType)
      .columns(11).search(txtInstructor)
      .columns(12).search(txtSubject)
      .columns(15).search(txtStart)
      .columns(30).search(txtBooks)
      .columns(27).search(txtTransfer)
      .columns(31).search(txtSession)
      .columns(32).search(txtHonors)
      .columns(34).search(txtCatnbr)
      .columns(36).search(txtCoursename)
      .columns(28).search(txtWPL)
      .draw();
});

$("#btnSearch").submit(function(e) {
  e.preventDefault();
});

$('#classes thead th:first-child').css({'background-image':'none'});

$(document).ready(function() {
  function onHashChange() {
    var hash = window.location.hash;

    if (hash) {
      // using ES6 template string syntax
      $(`[data-toggle="tab"][href="${hash}"]`).trigger('click');
    }
  }

  window.addEventListener('hashchange', onHashChange, false);
  onHashChange();
});

// hides duplicated rows on class search

$(document).ajaxStart($.blockUI).ajaxStop($.unblockUI);

$(document).ready(function () {
  function check() {
    var last;
    var last2;
    var last3;
    var last4;
    var last5;
    var last6;
    var last7;
    var last8;
    var last9;
    var last10;
    var last11;
    for (var i = 0; i < $('table tbody tr').length; i++) {
      var cell = $('table tbody tr:eq(' + i + ') td:eq(0)');
      var cell2 = $('table tbody tr:eq(' + i + ') td:eq(2)');
      var cell3 = $('table tbody tr:eq(' + i + ') td:eq(3)');
      var cell4 = $('table tbody tr:eq(' + i + ') td:eq(4)');
      var cell5 = $('table tbody tr:eq(' + i + ') td:eq(5)');
      var cell6 = $('table tbody tr:eq(' + i + ') td:eq(6)');
      var cell7 = $('table tbody tr:eq(' + i + ') td:eq(7)');
      var cell8 = $('table tbody tr:eq(' + i + ') td:eq(8)');
      var cell9 = $('table tbody tr:eq(' + i + ') td:eq(9)');
      var cell10 = $('table tbody tr:eq(' + i + ') td:eq(10)');
      var cell11 = $('table tbody tr:eq(' + i + ') td:eq(11)');

      if (last == cell.text()) {
        cell.text(' ');
      } else {
        last = cell.text();
      }
      if (last2 == cell2.text()) {
        cell2.text(' ');
      } else {
        last2 = cell2.text();
      }
      if (last3 == cell3.text()) {
        cell3.text(' ');
      } else {
        last3 = cell3.text();
      }
      if (last4 == cell4.text()) {
        cell4.text(' ');
      } else {
        last4 = cell4.text();
      }
      if (last5 == cell5.text()) {
        cell5.text(' ');
      } else {
        last5 = cell5.text();
      }
      if (last6 == cell6.text()) {
        cell6.text(' ');
      } else {
        last6 = cell6.text();
      }


    }
  }

  var dt = $('#classes').DataTable({
    retrieve: true,
    initComplete: function () {
      check();
    }
  })
  dt.on('draw.dt', function () {
    check();
  });
});

var minDate, maxDate;

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
  var table = $('#classes').DataTable();

  // Refilter the table
  $('#min, #max').on('change', function () {
    table.draw();
  });
});



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