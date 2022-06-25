$('#txtCESubject').on('change', function(){
    console.log($('#txtCESubject').val());
    $('#txtCEClass').html('');
    if($('#txtCESubject').val()=='ABED'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="ABED 414">ABED  414 - Arithmetic Review</option>');
        $('#txtCEClass').append('<option value="ABED 420">ABED  420 - College Preparatory English</option>');
        $('#txtCEClass').append('<option value="ABED 430">ABED  430 - Pre-Vocational ABE</option>');
        $('#txtCEClass').append('<option value="ABED 441">ABED  441 - Basic Ed, Language Arts, Begin</option>');
        $('#txtCEClass').append('<option value="ABED 442">ABED  442 - Basic Ed, Language Arts, Inter</option>');
        $('#txtCEClass').append('<option value="ABED 443">ABED  443 - Basic Ed, Math, Beginning</option>');
        $('#txtCEClass').append('<option value="ABED 444">ABED  444 - Basic Ed, Math, Intermediate</option>');
    }else if($('#txtCESubject').val()=='ACCT'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="ACCT 502">ACCT  502 - Computerized Accounting</option>');
        $('#txtCEClass').append('<option value="ACCT 511">ACCT  511 - Accounting-Beginning</option>');
        $('#txtCEClass').append('<option value="ACCT 512">ACCT  512 - Accounting-Intermediate</option>');
    }else if($('#txtCESubject').val()=='APLD'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="APLD 509">APLD  509 - Copper Enameling</option>');
        $('#txtCEClass').append('<option value="APLD 524">APLD  524 - Jewelry Making 1-3</option>');
    }else if($('#txtCESubject').val()=='ARTS'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="ARTS 507">ARTS  507 - Art Appreciation-OA</option>');
    }else if($('#txtCESubject').val()=='ARTX'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="ARTX 515">ARTX  515 - Drawing and Painting 1-2 - OA</option>');
        $('#txtCEClass').append('<option value="ARTX 548">ARTX  548 - Introductory Ceramics-OA</option>');
        $('#txtCEClass').append('<option value="ARTX 690">ARTX  690 - Arts and Music</option>');
    }else if($('#txtCESubject').val()=='AUTO'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="AUTO 411">AUTO  411 - Auto Body and Paint Technician</option>');
        $('#txtCEClass').append('<option value="AUTO 411A">AUTO  411A - Auto Body Refinishing Tech</option>');
        $('#txtCEClass').append('<option value="AUTO 414">AUTO  414 - Basic Upholstery Skills</option>');
        $('#txtCEClass').append('<option value="AUTO 415">AUTO  415 - Automotive Upholstery</option>');
        $('#txtCEClass').append('<option value="AUTO 507">AUTO  507 - Automotive Technician</option>');
        $('#txtCEClass').append('<option value="AUTO 507A">AUTO  507A - Engine/Electrical/Performance</option>');
        $('#txtCEClass').append('<option value="AUTO 507B">AUTO  507B - Adv Driveability & Performance</option>');
        $('#txtCEClass').append('<option value="AUTO 508">AUTO  508 - Service Advisor I</option>');
        $('#txtCEClass').append('<option value="AUTO 508A">AUTO  508A - Service Advisor II</option>');
        $('#txtCEClass').append('<option value="AUTO 600">AUTO  600 - Quickservice Lube/Pre-Delivery</option>');
        $('#txtCEClass').append('<option value="AUTO 601">AUTO  601 - Automotive Fundamentals</option>');
        $('#txtCEClass').append('<option value="AUTO 601">AUTO  601 - Automotive Intro and Safety</option>');
    }else if($('#txtCESubject').val()=='BUSN'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="BUSN 510">BUSN  510 - Small Business Management</option>');
        $('#txtCEClass').append('<option value="BUSN 621">BUSN  621 - Project Management I</option>');
        $('#txtCEClass').append('<option value="BUSN 622">BUSN  622 - Project Management II</option>');
        $('#txtCEClass').append('<option value="BUSN 630">BUSN  630 - Small Business Essentials</option>');
        $('#txtCEClass').append('<option value="BUSN 631">BUSN  631 - Small Business Planning</option>');
        $('#txtCEClass').append('<option value="BUSN 632">BUSN  632 - Small Business Skills</option>');
        $('#txtCEClass').append('<option value="BUSN 633">BUSN  633 - Small Business Sales</option>');
        $('#txtCEClass').append('<option value="BUSN 634">BUSN  634 - Small Business Marketing</option>');
    }else if($('#txtCESubject').val()=='CLTX'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="CLTX 530">CLTX  530 - Clothing 7 Occupation/Textile</option>');
        $('#txtCEClass').append('<option value="CLTX 620">CLTX  620 - Sewing Fundamentals</option>');
        $('#txtCEClass').append('<option value="CLTX 625">CLTX  625 - Sewing Fundamentals II</option>');
        $('#txtCEClass').append('<option value="CLTX 630">CLTX  630 - Sewing Like a Professional</option>');
        $('#txtCEClass').append('<option value="CLTX 635">CLTX  635 - Contemporary Tailoring</option>');
        $('#txtCEClass').append('<option value="CLTX 645">CLTX  645 - Fundamentals of Pattern Making</option>');
        $('#txtCEClass').append('<option value="CLTX 650">CLTX  650 - Sewing for the Home</option>');
        $('#txtCEClass').append('<option value="CLTX 651">CLTX  651 - Sewn Product Business I</option>');
        $('#txtCEClass').append('<option value="CLTX 652">CLTX  652 - Sewn Product Business II</option>');
        $('#txtCEClass').append('<option value="CLTX 653">CLTX  653 - Sewn Product Business III</option>');
        $('#txtCEClass').append('<option value="CLTX 660">CLTX  660 - Textile Surface Design</option>');
        $('#txtCEClass').append('<option value="CLTX 670">CLTX  670 - Intro To Fashion Industry</option>');
        $('#txtCEClass').append('<option value="CLTX 671">CLTX  671 - Fashion Retail Basics</option>');
    }else if($('#txtCESubject').val()=='CNCT'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="CNCT 525">CNCT  525 - Woodshop-Woodworking</option>');
        $('#txtCEClass').append('<option value="CNCT 601">CNCT  601 - Painter Apprentice I</option>');
        $('#txtCEClass').append('<option value="CNCT 602">CNCT  602 - Painter Apprentice II</option>');
        $('#txtCEClass').append('<option value="CNCT 603">CNCT  603 - Painter Apprentice III</option>');
        $('#txtCEClass').append('<option value="CNCT 604">CNCT  604 - Painter Apprentice IV</option>');
        $('#txtCEClass').append('<option value="CNCT 605">CNCT  605 - Painter Apprentice V</option>');
        $('#txtCEClass').append('<option value="CNCT 631">CNCT  631 - Construction Blueprint Read I</option>');
        $('#txtCEClass').append('<option value="CNCT 632">CNCT  632 - Construction Blueprint Read II</option>');
        $('#txtCEClass').append('<option value="CNCT 637">CNCT  637 - Construction Estimating</option>');
        $('#txtCEClass').append('<option value="CNCT 641">CNCT  641 - Construction Mathematics I</option>');
        $('#txtCEClass').append('<option value="CNCT 642">CNCT  642 - Construction Mathematics II</option>');
    }else if($('#txtCESubject').val()=='COMM'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="COMM 614">COMM  614 - Computer Presentations</option>');
        $('#txtCEClass').append('<option value="COMM 618">COMM  618 - Web Site Creation</option>');
        $('#txtCEClass').append('<option value="COMM 630">COMM  630 - Interactive Media</option>');
        $('#txtCEClass').append('<option value="COMM 630A">COMM  630A - Interactive Media-Multimedia</option>');
        $('#txtCEClass').append('<option value="COMM 630B">COMM  630B - Interactive Media-Web</option>');
        $('#txtCEClass').append('<option value="COMM 641">COMM  641 - Web Programming Beginning</option>');
        $('#txtCEClass').append('<option value="COMM 642">COMM  642 - User Interface Design</option>');
        $('#txtCEClass').append('<option value="COMM 643">COMM  643 - Design Principles</option>');
        $('#txtCEClass').append('<option value="COMM 644">COMM  644 - Web Programming Intermediate</option>');
        $('#txtCEClass').append('<option value="COMM 645">COMM  645 - Content Management Systems</option>');
        $('#txtCEClass').append('<option value="COMM 646">COMM  646 - Responsive Web Design</option>');
        $('#txtCEClass').append('<option value="COMM 647">COMM  647 - Website Promotion</option>');
        $('#txtCEClass').append('<option value="COMM 660">COMM  660 - Visual Design</option>');
        $('#txtCEClass').append('<option value="COMM 661">COMM  661 - Vector Design</option>');
        $('#txtCEClass').append('<option value="COMM 662">COMM  662 - Page Layout Design</option>');
        $('#txtCEClass').append('<option value="COMM 663">COMM  663 - Portfolio Design</option>');
        $('#txtCEClass').append('<option value="COMM 666">COMM  666 - Workflow For Modern Web Design</option>');
        $('#txtCEClass').append('<option value="COMM 667">COMM  667 - Motion Graphics</option>');
        $('#txtCEClass').append('<option value="COMM 668">COMM  668 - Video Production</option>');
        $('#txtCEClass').append('<option value="COMM 669">COMM  669 - Content Management Basics</option>');
    }else if($('#txtCESubject').val()=='COMP'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="COMP 600">COMP  600 - Introduction to Networking</option>');
        $('#txtCEClass').append('<option value="COMP 601">COMP  601 - Intro to Router Configuration</option>');
        $('#txtCEClass').append('<option value="COMP 602">COMP  602 - Local Area Network Design</option>');
        $('#txtCEClass').append('<option value="COMP 603">COMP  603 - Wide Area Network Design</option>');
        $('#txtCEClass').append('<option value="COMP 606">COMP  606 - CISCO Network Security 1</option>');
        $('#txtCEClass').append('<option value="COMP 608">COMP  608 - Basic Network Configuration</option>');
        $('#txtCEClass').append('<option value="COMP 609">COMP  609 - Network Security Basics</option>');
        $('#txtCEClass').append('<option value="COMP 610">COMP  610 - Computer Care-Software Tools</option>');
        $('#txtCEClass').append('<option value="COMP 612">COMP  612 - Hardware Service Technician</option>');
        $('#txtCEClass').append('<option value="COMP 623">COMP  623 - Server Side Programming</option>');
        $('#txtCEClass').append('<option value="COMP 628">COMP  628 - Business Information Systems</option>');
        $('#txtCEClass').append('<option value="COMP 640">COMP  640 - Windows Operating Systems</option>');
        $('#txtCEClass').append('<option value="COMP 641">COMP  641 - Linux Essentials</option>');
        $('#txtCEClass').append('<option value="COMP 642">COMP  642 - Server Admin Fundamentals</option>');
        $('#txtCEClass').append('<option value="COMP 643">COMP  643 - Linux Server Technologies</option>');
        $('#txtCEClass').append('<option value="COMP 644">COMP  644 - Server Side Web Development</option>');
        $('#txtCEClass').append('<option value="COMP 645">COMP  645 - Mobile App HTML Development</option>');
        $('#txtCEClass').append('<option value="COMP 646">COMP  646 - Mobile Software Dev Platform</option>');
        $('#txtCEClass').append('<option value="COMP 647">COMP  647 - Mobile App Publication</option>');
        $('#txtCEClass').append('<option value="COMP 651">COMP  651 - Virtual Datacenter 1</option>');
        $('#txtCEClass').append('<option value="COMP 652">COMP  652 - Virtual Datacenter 2</option>');
        $('#txtCEClass').append('<option value="COMP 655">COMP  655 - Cyber Threat and Vulnerability</option>');
        $('#txtCEClass').append('<option value="COMP 656">COMP  656 - Cyber Incident Response, Intro</option>');
        $('#txtCEClass').append('<option value="COMP 657">COMP  657 - Cybersecurity Architecture</option>');
        $('#txtCEClass').append('<option value="COMP 660">COMP  660 - Programming with Python I</option>');
        $('#txtCEClass').append('<option value="COMP 661">COMP  661 - Programming with Python II</option>');
        $('#txtCEClass').append('<option value="COMP 662">COMP  662 - Programming Databases - Python</option>');
        $('#txtCEClass').append('<option value="COMP 671">COMP  671 - AWS Academy Cloud Foundations</option>');
        $('#txtCEClass').append('<option value="COMP 672">COMP  672 - AWS Academy Cloud Architecture</option>');
        $('#txtCEClass').append('<option value="COMP 699">COMP  699 - Emerging Topics-Computers</option>');
    }else if($('#txtCESubject').val()=='CRTW'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="CRTW 537">CRTW  537 - Writers Workshop - OA</option>');
    }else if($('#txtCESubject').val()=='DRAM'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="DRAM 550">DRAM  550 - Practical Theatre - OA</option>');
    }else if($('#txtCESubject').val()=='DSPS'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="DSPS 605D">DSPS  605D - Relationships & Sexuality-DSPS</option>');
        $('#txtCEClass').append('<option value="DSPS 607D">DSPS  607D - Community Living Skills-DSPS</option>');
        $('#txtCEClass').append('<option value="DSPS 608D">DSPS  608D - Personal Living Skills-DSPS</option>');
        $('#txtCEClass').append('<option value="DSPS 609D">DSPS  609D - Social Skills- DSPS</option>');
        $('#txtCEClass').append('<option value="DSPS 610D">DSPS  610D - Introduction to Computers-DSPS</option>');
        $('#txtCEClass').append('<option value="DSPS 611D">DSPS  611D - Beginning Computers - DSPS</option>');
        $('#txtCEClass').append('<option value="DSPS 621D">DSPS  621D - Physical Fitness for Disabled</option>');
        $('#txtCEClass').append('<option value="DSPS 622D">DSPS  622D - Communications for Disabled</option>');
        $('#txtCEClass').append('<option value="DSPS 624D">DSPS  624D - Basic Education-DSPS</option>');
        $('#txtCEClass').append('<option value="DSPS 625D">DSPS  625D - Communication on the Job</option>');
        $('#txtCEClass').append('<option value="DSPS 639D">DSPS  639D - Occupational Opportunities</option>');
        $('#txtCEClass').append('<option value="DSPS 641D">DSPS  641D - Developmental Learning</option>');
        $('#txtCEClass').append('<option value="DSPS 642D">DSPS  642D - Life Management/Career Prep</option>');
        $('#txtCEClass').append('<option value="DSPS 648D">DSPS  648D - Assertion Training-Disabled</option>');
        $('#txtCEClass').append('<option value="DSPS 653D">DSPS  653D - Adaptive Arts and Crafts</option>');
        $('#txtCEClass').append('<option value="DSPS 656D">DSPS  656D - Wellness Management - DSPS</option>');
        $('#txtCEClass').append('<option value="DSPS 662D">DSPS  662D - Food Preparation Basics-DSPS</option>');
        $('#txtCEClass').append('<option value="DSPS 690D">DSPS  690D - Cognitive Retraining/ABI</option>');
    }else if($('#txtCESubject').val()=='ELRN'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="ELRN 451">ELRN  451 - Electronic Technician I</option>');
        $('#txtCEClass').append('<option value="ELRN 452">ELRN  452 - Electronic Technician II</option>');
    }else if($('#txtCESubject').val()=='ENGL'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="ENGL 545">ENGL  545 - Literature Survey-OA</option>');
    }else if($('#txtCESubject').val()=='ESLA'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="ESLA 415">ESLA  415 - ESL Multi-Level</option>');
        $('#txtCEClass').append('<option value="ESLA 425A">ESLA  425A - Beg Low Prevocational ESL 1</option>');
        $('#txtCEClass').append('<option value="ESLA 425B">ESLA  425B - Beg Low Prevocational ESL 2</option>');
        $('#txtCEClass').append('<option value="ESLA 426A">ESLA  426A - Beg High Prevocational ESL 1</option>');
        $('#txtCEClass').append('<option value="ESLA 426B">ESLA  426B - Beg High Prevocational ESL 2</option>');
        $('#txtCEClass').append('<option value="ESLA 427A">ESLA  427A - Int Low Prevocational ESL 1</option>');
        $('#txtCEClass').append('<option value="ESLA 427N">ESLA  427B - Int Low Prevocational ESL 2</option>');
        $('#txtCEClass').append('<option value="ESLA 428A">ESLA  428A - Int High Prevocational ESL 1</option>');
        $('#txtCEClass').append('<option value="ESLA 428B">ESLA  428B - Int High Prevocational ESL 2</option>');
        $('#txtCEClass').append('<option value="ESLA 429A">ESLA  429A - Advanced Prevocational ESL 1</option>');
        $('#txtCEClass').append('<option value="ESLA 429B">ESLA  429B - Advanced Prevocational ESL 2</option>');
        $('#txtCEClass').append('<option value="ESLA 431">ESLA  431 - ESL Beg Literacy 1</option>');
        $('#txtCEClass').append('<option value="ESLA 432">ESLA  432 - ESL Beg Low 2</option>');
        $('#txtCEClass').append('<option value="ESLA 433">ESLA  433 - ESL Beg High 3</option>');
        $('#txtCEClass').append('<option value="ESLA 434">ESLA  434 - ESL Int Low 4</option>');
        $('#txtCEClass').append('<option value="ESLA 435">ESLA  435 - ESL Int High 5</option>');
        $('#txtCEClass').append('<option value="ESLA 436">ESLA  436 - ESL Adv Low 6</option>');
        $('#txtCEClass').append('<option value="ESLA 437">ESLA  437 - ESL Adv High 7</option>');
        $('#txtCEClass').append('<option value="ESLA 440">ESLA  440 - ESL/Citizenship</option>');
        $('#txtCEClass').append('<option value="ESLA 450">ESLA  450 - ESL Beginning Conversation</option>');
        $('#txtCEClass').append('<option value="ESLA 451">ESLA  451 - ESL Int/Adv Conversation</option>');
        $('#txtCEClass').append('<option value="ESLA 452">ESLA  452 - ESL Beginning Pronunciation</option>');
        $('#txtCEClass').append('<option value="ESLA 453">ESLA  453 - ESL Int/Adv Pronunciation</option>');
        $('#txtCEClass').append('<option value="ESLA 454">ESLA  454 - ESL Beginning Grammar</option>');
        $('#txtCEClass').append('<option value="ESLA 455">ESLA  455 - ESL Int/Adv Grammar</option>');
        $('#txtCEClass').append('<option value="ESLA 456">ESLA  456 - ESL Beginning Reading</option>');
        $('#txtCEClass').append('<option value="ESLA 457">ESLA  457 - ESL Int/Adv Reading</option>');
    }else if($('#txtCESubject').val()=='FDNT'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="FDNT 618">FDNT  618 - Nutrition Essentials</option>');
        $('#txtCEClass').append('<option value="FDNT 619">FDNT  619 - Meal Planning Essentials</option>');
        $('#txtCEClass').append('<option value="FDNT 620">FDNT  620 - Ethnic/Regional Foods</option>');
        $('#txtCEClass').append('<option value="FDNT 627">FDNT  627 - Professional Bakeshop Skills</option>');
        $('#txtCEClass').append('<option value="FDNT 628">FDNT  628 - Advanced Bakeshop Skills</option>');
        $('#txtCEClass').append('<option value="FDNT 675">FDNT  675 - Culinary Arts V</option>');
        $('#txtCEClass').append('<option value="FDNT 676">FDNT  676 - Culinary Arts VI</option>');
        $('#txtCEClass').append('<option value="FDNT 681">FDNT  681 - Culinary Arts and Sciences I</option>');
        $('#txtCEClass').append('<option value="FDNT 682">FDNT  682 - Culinary Arts and Sciences II</option>');
        $('#txtCEClass').append('<option value="FDNT 683">FDNT  683 - Culinary Arts Advanced I</option>');
        $('#txtCEClass').append('<option value="FDNT 684">FDNT  684 - Culinary Arts Advanced II</option>');
    }else if($('#txtCESubject').val()=='FREN'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="FREN 800">FREN  800 - French 1 Introduction</option>');
    }else if($('#txtCESubject').val()=='HEAL'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="HEAL 525">HEAL  525 - Health Education for OA</option>');
        $('#txtCEClass').append('<option value="HEAL 535">HEAL  535 - Mind and Body Control</option>');
        $('#txtCEClass').append('<option value="HEAL 690">HEAL  690 - Health Education</option>');
    }else if($('#txtCESubject').val()=='HLTH'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="HLTH 605">HLTH  605 - Nursing Assistant Training</option>');
        $('#txtCEClass').append('<option value="HLTH 606">HLTH  606 - Home Health Aide</option>');
        $('#txtCEClass').append('<option value="HLTH 607">HLTH  607 - Acute Care Nurse Assistant</option>');
        $('#txtCEClass').append('<option value="HLTH 608">HLTH  608 - Restorative Nurse Assistant</option>');
        $('#txtCEClass').append('<option value="HLTH 609">HLTH  609 - Healthcare Careers</option>');
        $('#txtCEClass').append('<option value="HLTH 610">HLTH  610 - Personal and Home Care Aide</option>');
        $('#txtCEClass').append('<option value="HLTH 611">HLTH  611 - Behavioral Health Aide</option>');
        $('#txtCEClass').append('<option value="HLTH 612">HLTH  612 - Medical Terminology</option>');
        $('#txtCEClass').append('<option value="HLTH 613">HLTH  613 - Health Unit Coordinator Basics</option>');
    }else if($('#txtCESubject').val()=='HMDV'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="HMDV 533">HMDV  533 - Family Home Day Care Training</option>');
        $('#txtCEClass').append('<option value="HMDV 540">HMDV  540 - Family Preparation-Childbirth</option>');
        $('#txtCEClass').append('<option value="HMDV 545">HMDV  545 - Family Relations</option>');
        $('#txtCEClass').append('<option value="HMDV 575A">HMDV  575A - Foundations of Child Care</option>');
        $('#txtCEClass').append('<option value="HMDV 575B">HMDV  575B - Intro to Child Care Business</option>');
        $('#txtCEClass').append('<option value="HMDV 580">HMDV  580 - Infant Development & Care</option>');
        $('#txtCEClass').append('<option value="HMDV 581">HMDV  581 - Toddler Development & Care</option>');
        $('#txtCEClass').append('<option value="HMDV 582">HMDV  582 - Two-Year-Old Dev & Care</option>');
        $('#txtCEClass').append('<option value="HMDV 583">HMDV  583 - Three to Five Yr-Old Dev&Care</option>');
        $('#txtCEClass').append('<option value="HMDV 584">HMDV  584 - Multi-Age Development & Care</option>');
        $('#txtCEClass').append('<option value="HMDV 585">HMDV  585 - Infant and Toddler Brain Dance</option>');
        $('#txtCEClass').append('<option value="HMDV 586">HMDV  586 - Early Learner Brain Dance</option>');
        $('#txtCEClass').append('<option value="HMDV 590">HMDV  590 - Infant/Tod Outdoor Enrichment</option>');
        $('#txtCEClass').append('<option value="HMDV 591">HMDV  591 - Early Learner Outdoor Enrich</option>');
        $('#txtCEClass').append('<option value="HMDV 610">HMDV  610 - Newborn to 12 Months</option>');
        $('#txtCEClass').append('<option value="HMDV 615">HMDV  615 - 12/23 Months/Walking - Talking</option>');
        $('#txtCEClass').append('<option value="HMDV 620">HMDV  620 - 24 to 36 Months/Discovering Me</option>');
        $('#txtCEClass').append('<option value="HMDV 626">HMDV  626 - 3-5 Years-Preschool Experience</option>');
        $('#txtCEClass').append('<option value="HMDV 630">HMDV  630 - Outdoor Classroom</option>');
        $('#txtCEClass').append('<option value="HMDV 680">HMDV  680 - Families Learning Together</option>');
    }else if($('#txtCESubject').val()=='HMID'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="HMID 535">HMID  535 - Upholstery</option>');
    }else if($('#txtCESubject').val()=='HSDP'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="HSDP 403">HSDP  403 - Independent Study</option>');
        $('#txtCEClass').append('<option value="HSDP 409">HSDP  409 - English 3-4</option>');
        $('#txtCEClass').append('<option value="HSDP 411">HSDP  411 - English 3-4, Second Semester</option>');
        $('#txtCEClass').append('<option value="HSDP 413A">HSDP  413A - Contemporary Voices 1</option>');
        $('#txtCEClass').append('<option value="HSDP 413B">HSDP  413B - Contemporary Voices 2</option>');
        $('#txtCEClass').append('<option value="HSDP 414">HSDP  414 - American Literature 1 & 2</option>');
        $('#txtCEClass').append('<option value="HSDP 416">HSDP  416 - American Literature 1&2 Sem 2</option>');
        $('#txtCEClass').append('<option value="HSDP 427">HSDP  427 - United States Government 1</option>');
        $('#txtCEClass').append('<option value="HSDP 432">HSDP  432 - Economics</option>');
        $('#txtCEClass').append('<option value="HSDP 433">HSDP  433 - United States History 1</option>');
        $('#txtCEClass').append('<option value="HSDP 436">HSDP  436 - 20th Century U.S. History 2</option>');
        $('#txtCEClass').append('<option value="HSDP 448">HSDP  448 - G.E.D. Preparation</option>');
        $('#txtCEClass').append('<option value="HSDP 451">HSDP  451 - G.E.D. Mathematics</option>');
        $('#txtCEClass').append('<option value="HSDP 461">HSDP  461 - Physics 1</option>');
        $('#txtCEClass').append('<option value="HSDP 465">HSDP  465 - Algebra 3-4</option>');
        $('#txtCEClass').append('<option value="HSDP 478">HSDP  478 - World Hist/Geography/Econ 1</option>');
        $('#txtCEClass').append('<option value="HSDP 479">HSDP  479 - World Hist/Geography/Econ 2</option>');
        $('#txtCEClass').append('<option value="HSDP 500">HSDP  500 - Pre-Algebra, Semester 1</option>');
        $('#txtCEClass').append('<option value="HSDP 501">HSDP  501 - Pre-Algebra, Semester 2</option>');
        $('#txtCEClass').append('<option value="HSDP 506">HSDP  506 - Algebra 1-2, Semester 1</option>');
        $('#txtCEClass').append('<option value="HSDP 507">HSDP  507 - Algebra 1-2, Semester 2</option>');
        $('#txtCEClass').append('<option value="HSDP 511">HSDP  511 - Biology 1</option>');
        $('#txtCEClass').append('<option value="HSDP 512">HSDP  512 - Biology 2</option>');
        $('#txtCEClass').append('<option value="HSDP 513">HSDP  513 - Earth Science 1</option>');
        $('#txtCEClass').append('<option value="HSDP 514">HSDP  514 - Earth Science 2</option>');
    }else if($('#txtCESubject').val()=='HSEP'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="HSEP 400">HSEP  400 - HSEP for Mathematics 1</option>');
        $('#txtCEClass').append('<option value="HSEP 401">HSEP  401 - HSEP for Mathematics 2</option>');
        $('#txtCEClass').append('<option value="HSEP 402">HSEP  402 - HSEP for Reading 1</option>');
        $('#txtCEClass').append('<option value="HSEP 403">HSEP  403 - HSEP for Reading 2</option>');
        $('#txtCEClass').append('<option value="HSEP 404">HSEP  404 - HSEP for Writing 1</option>');
        $('#txtCEClass').append('<option value="HSEP 405">HSEP  405 - HSEP for Writing 2</option>');
        $('#txtCEClass').append('<option value="HSEP 406">HSEP  406 - HSEP for Science</option>');
        $('#txtCEClass').append('<option value="HSEP 407">HSEP  407 - HSEP for Social Studies</option>');
    }else if($('#txtCESubject').val()=='INDT'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="INDT 601">INDT  601 - Shielded Metal Arc Welding I</option>');
        $('#txtCEClass').append('<option value="INDT 602">INDT  602 - Shielded Metal Arc Welding II</option>');
        $('#txtCEClass').append('<option value="INDT 605">INDT  605 - Gas Metal Arc Welding</option>');
        $('#txtCEClass').append('<option value="INDT 606">INDT  606 - Flux Cored Arc Welding</option>');
        $('#txtCEClass').append('<option value="INDT 611">INDT  611 - Pipe Welding I</option>');
        $('#txtCEClass').append('<option value="INDT 612">INDT  612 - Pipe Welding II</option>');
        $('#txtCEClass').append('<option value="INDT 621">INDT  621 - Gas Tungsten Arc Welding I</option>');
        $('#txtCEClass').append('<option value="INDT 622">INDT  622 - Gas Tungsten Arc Welding II</option>');
        $('#txtCEClass').append('<option value="INDT 631">INDT  631 - Metal Fabrication I</option>');
        $('#txtCEClass').append('<option value="INDT 632">INDT  632 - Metal Fabrication II</option>');
    }else if($('#txtCESubject').val()=='INTD'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="INTD 500">INTD  500 - Career & College Readiness</option>');
        $('#txtCEClass').append('<option value="INTD 501">INTD  501 - Career Development</option>');
        $('#txtCEClass').append('<option value="INTD 690">INTD  690 - Interdisciplinary Studies</option>');
    }else if($('#txtCESubject').val()=='INVS'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="INVS 515">INVS  515 - Investments - A</option>');
    }else if($('#txtCESubject').val()=='ITAL'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="ITAL 800">ITAL  800 - Italian 1 Introduction</option>');
    }else if($('#txtCESubject').val()=='LAWS'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="LAWS 510">LAWS  510 - Law and the Retiree</option>');
    }else if($('#txtCESubject').val()=='MECT'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="MECT 421">MECT  421 - Plumbing I</option>');
        $('#txtCEClass').append('<option value="MECT 422">MECT  422 - Plumbing II</option>');
        $('#txtCEClass').append('<option value="MECT 423">MECT  423 - Plumbing III</option>');
        $('#txtCEClass').append('<option value="MECT 431">MECT  431 - Air Conditioning/Heating I</option>');
        $('#txtCEClass').append('<option value="MECT 432">MECT  432 - Air Conditioning/Heating II</option>');
    }else if($('#txtCESubject').val()=='MUSI'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="MUSI 505">MUSI  505 - Music Appreciation-OA</option>');
    }else if($('#txtCESubject').val()=='MUSN'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="MUSN 519">MUSN  519 - Orchestra Workshop - OA</option>');
        $('#txtCEClass').append('<option value="MUSN 536">MUSN  536 - Piano 1-2 for Older Adults</option>');
    }else if($('#txtCESubject').val()=='MUSV'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="MUSV 510">MUSV  510 - Chorus Mixed Voices-OA</option>');
    }else if($('#txtCESubject').val()=='OFSY'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="OFSY 500">OFSY  500 - Basic Business Math 1</option>');
        $('#txtCEClass').append('<option value="OFSY 501">OFSY  501 - Basic Business Math 2</option>');
        $('#txtCEClass').append('<option value="OFSY 505">OFSY  505 - Business Communications 1</option>');
        $('#txtCEClass').append('<option value="OFSY 506">OFSY  506 - Business Communications 2</option>');
        $('#txtCEClass').append('<option value="OFSY 507">OFSY  507 - Workplace Professional</option>');
        $('#txtCEClass').append('<option value="OFSY 510">OFSY  510 - Database Systems:Beginning</option>');
        $('#txtCEClass').append('<option value="OFSY 511">OFSY  511 - Database Systems:Intermediate</option>');
        $('#txtCEClass').append('<option value="OFSY 516">OFSY  516 - Internet Basics</option>');
        $('#txtCEClass').append('<option value="OFSY 527">OFSY  527 - Microsoft Windows</option>');
        $('#txtCEClass').append('<option value="OFSY 528">OFSY  528 - Electronic Info Management</option>');
        $('#txtCEClass').append('<option value="OFSY 541">OFSY  541 - Keyboarding-Multilevel</option>');
        $('#txtCEClass').append('<option value="OFSY 555">OFSY  555 - Microcomputer Basics</option>');
        $('#txtCEClass').append('<option value="OFSY 560">OFSY  560 - Office Skills Laboratory</option>');
        $('#txtCEClass').append('<option value="OFSY 575">OFSY  575 - Spreadsheets:Beginning</option>');
        $('#txtCEClass').append('<option value="OFSY 577">OFSY  577 - Spreadsheets:Advanced</option>');
        $('#txtCEClass').append('<option value="OFSY 580">OFSY  580 - Survey of Business Software</option>');
        $('#txtCEClass').append('<option value="OFSY 596">OFSY  596 - Word Processing:Beginning</option>');
        $('#txtCEClass').append('<option value="OFSY 599">OFSY  599 - Word Processing:Advanced</option>');
        $('#txtCEClass').append('<option value="OFSY 603">OFSY  603 - Digital Editing</option>');
        $('#txtCEClass').append('<option value="OFSY 606">OFSY  606 - Vector Graphics</option>');
        $('#txtCEClass').append('<option value="OFSY 612">OFSY  612 - 3D Modeling</option>');
        $('#txtCEClass').append('<option value="OFSY 618">OFSY  618 - Web Marketing</option>');
    }else if($('#txtCESubject').val()=='PASV'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="PASV 505">PASV  505 - Body Dynamics/Aging Process</option>');
        $('#txtCEClass').append('<option value="PASV 510">PASV  510 - Nutrition/Health-Older Adults</option>');
        $('#txtCEClass').append('<option value="PASV 530">PASV  530 - Retirement Living-Later Life</option>');
        $('#txtCEClass').append('<option value="PASV 545">PASV  545 - Arts and Crafts-Older Adults</option>');
    }else if($('#txtCESubject').val()=='PHYE'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="PHYE 550">PHYE  550 - Physical Fitness Through Dance</option>');
        $('#txtCEClass').append('<option value="PHYE 561">PHYE  561 - Tennis</option>');
    }else if($('#txtCESubject').val()=='PRTG'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="PRTG 510">PRTG  510 - Printmaking</option>');
    }else if($('#txtCESubject').val()=='PSYC'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="PSYC 515">PSYC  515 - Personal Development</option>');
    }else if($('#txtCESubject').val()=='SFED'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="SFED 500">SFED  500 - Basic Firearms Safety</option>');
    }else if($('#txtCESubject').val()=='SOCC'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="SOCC 503">SOCC  503 - Social Studies/Older Adults</option>');
    }else if($('#txtCESubject').val()=='SPAN'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="SPAN 805">SPAN  805 - Spanish 1 Introduction</option>');
        $('#txtCEClass').append('<option value="SPAN 845">SPAN  845 - Spanish Conversation Workshop</option>');
    }else if($('#txtCESubject').val()=='SPEE'){
        $('#txtCEClass').append('<option value="">All</option>');
        $('#txtCEClass').append('<option value="SPEE 520">SPEE  520 - Effective Communications</option>');

    }else{
        $('#txtCEClass').append('<option value="">All</option>');
    }
});