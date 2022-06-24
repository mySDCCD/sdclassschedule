$('#txtSubject').on('change', function(){
 console.log($('#txtSubject').val());
 $('#txtClass').html('');
 if($('#txtSubject').val()=='ACCT'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="ACCT 102">ACCT 102 - Basic Accounting</option>');
  $('#txtClass').append('<option value="ACCT 116A">ACCT 116A - Financial Accounting</option>');
  $('#txtClass').append('<option value="ACCT 116B">ACCT 116B - Managerial Accounting</option>');
  $('#txtClass').append('<option value="ACCT 119">ACCT 119 - Accounting Ethics</option>');
  $('#txtClass').append('<option value="ACCT 120">ACCT 120 - Federal Income Tax</option>');
  $('#txtClass').append('<option value="ACCT 121">ACCT 121 - California Income Tax</option>');
  $('#txtClass').append('<option value="ACCT 125">ACCT 125 - Government/Not-Profit AC</option>');
  $('#txtClass').append('<option value="ACCT 128A">ACCT 128A - Small Bus Acctg-Recordkeeping</option>');
  $('#txtClass').append('<option value="ACCT 128B">ACCT 128B - Small Business Acctg-Payroll</option>');
  $('#txtClass').append('<option value="ACCT 132">ACCT 132 - IRS Tax Training</option>');
  $('#txtClass').append('<option value="ACCT 135">ACCT 135 - Principles of Auditing</option>');
  $('#txtClass').append('<option value="ACCT 150">ACCT 150 - Computer Acct. Applications</option>');
  $('#txtClass').append('<option value="ACCT 201A">ACCT 201A - Intermediate Accounting I</option>');
  $('#txtClass').append('<option value="ACCT 201B">ACCT 201B - Intermediate Accounting II</option>');
  $('#txtClass').append('<option value="ACCT 270">ACCT 270 - Work Experience</option>');

 }else if($('#txtSubject').val()=='ADJU'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="ADJU 101">ADJU 101 - Intro to Admin of Justice</option>');
  $('#txtClass').append('<option value="ADJU 102">ADJU 102 - Criminal Law I</option>');
  $('#txtClass').append('<option value="ADJU 106">ADJU 106 - Diversity & Community Relats</option>');
  $('#txtClass').append('<option value="ADJU 160">ADJU 160 - Criminal Law II</option>');
  $('#txtClass').append('<option value="ADJU 161">ADJU 161 - Juvenile Procedures</option>');
  $('#txtClass').append('<option value="ADJU 162">ADJU 162 - Criminal Investigation</option>');
  $('#txtClass').append('<option value="ADJU 167">ADJU 167 - Report Writing</option>');
  $('#txtClass').append('<option value="ADJU 180">ADJU 180 - Drug Abuse and Law Enforcement</option>');
  $('#txtClass').append('<option value="ADJU 182">ADJU 182 - Street Gangs & Law Enforcement</option>');
  $('#txtClass').append('<option value="ADJU 201">ADJU 201 - Criminal Procedure</option>');
  $('#txtClass').append('<option value="ADJU 210">ADJU 210 - Rules of Evidence</option>');
  $('#txtClass').append('<option value="ADJU 220">ADJU 220 - Law Enforcement Forensics</option>');
  $('#txtClass').append('<option value="ADJU 230">ADJU 230 - Constitutional Law I</option>');
  $('#txtClass').append('<option value="ADJU 260">ADJU 260 - POST Certified Regional Academy</option>');
  $('#txtClass').append('<option value="ADJU 300A">ADJU 300A - First Aid</option>');
  $('#txtClass').append('<option value="ADJU 304A">ADJU 304A - Int Traffic Accident Invest</option>');
  $('#txtClass').append('<option value="ADJU 307A">ADJU 307A - Traffic Enfor Radar Cert</option>');
  $('#txtClass').append('<option value="ADJU 312A">ADJU 312A - Basic Supervisory Course</option>');
  $('#txtClass').append('<option value="ADJU 322A">ADJU 322A - Basic Traffic Accident Invest</option>');
  $('#txtClass').append('<option value="ADJU 323A">ADJU 323A - S.T.C. Cert. Corrections Offic</option>');
  $('#txtClass').append('<option value="ADJU 330A">ADJU 330A - Post Cert Field Train Officer</option>');
  $('#txtClass').append('<option value="ADJU 332A">ADJU 332A - Post Certified DUI Course</option>');
  $('#txtClass').append('<option value="ADJU 357A">ADJU 357A - 832 PC Laws of Arrest</option>');
  $('#txtClass').append('<option value="ADJU 359">ADJU 359 - Field Training Officer Update</option>');
  $('#txtClass').append('<option value="ADJU 361D">ADJU 361D - Building Searches</option>');
  $('#txtClass').append('<option value="ADJU 361M">ADJU 361M - Less-Lethal/Taser Training</option>');
  $('#txtClass').append('<option value="ADJU 361R">ADJU 361R - Regional Officer Training</option>');
  $('#txtClass').append('<option value="ADJU 361S">ADJU 361S - CPT for Sheriff Deputies</option>');
  $('#txtClass').append('<option value="ADJU 366">ADJU 366 - Radar-Laser Operator (LIDAR)</option>');
  $('#txtClass').append('<option value="ADJU 369">ADJU 369 - Drug Influence: 11550</option>');
  $('#txtClass').append('<option value="ADJU 381">ADJU 381 - POST Certified Regional Academy Module 1</option');
  $('#txtClass').append('<option value="ADJU 382">ADJU 382 - POST Certified Regional Academy Module 2</option');
  $('#txtClass').append('<option value="ADJU 383">ADJU 383 - POST Certified Regional Academy Module 3</option');
  $('#txtClass').append('<option value="ADJU 384">ADJU 384 - POST Certified Regional Academy Module 4</option');

  

 }else if($('#txtSubject').val()=='AGRI'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="AGRI 100">AGRI 100 - Principles of Sustainable Agri</option>');
  $('#txtClass').append('<option value="AGRI 102">AGRI 102 - Sustainable Urban Agriculture</option>');
  $('#txtClass').append('<option value="AGRI 104">AGRI 104 - Sustainable Vegetable Producti</option>');
  $('#txtClass').append('<option value="AGRI 107">AGRI 107 - Intro to Agri Plant Science</option>');
  $('#txtClass').append('<option value="AGRI 110">AGRI 110 - Fruit Tree Management</option>');
  $('#txtClass').append('<option value="AGRI 114">AGRI 114 - Plant Propagation</option>');
  $('#txtClass').append('<option value="AGRI 116">AGRI 116 - Drip Irrigation Basics</option>');
  $('#txtClass').append('<option value="AGRI 125">AGRI 125 - Introduction to Soil Science</option>');
  $('#txtClass').append('<option value="AGRI 128">AGRI 128 - Food Preservation Skills</option>');
  $('#txtClass').append('<option value="AGRI 270">AGRI 270 - Agriculture Work Experience</option>');

 }else if($('#txtSubject').val()=='AIRE'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="AIRE 60">AIRE 60 - Construction Safety and Health</option>');
  $('#txtClass').append('<option value="AIRE 94">AIRE 94 - HVAC/R Certification Training</option>');
  $('#txtClass').append('<option value="AIRE 100">AIRE 100 - Basic Refrig. & AC Theory</option>');
  $('#txtClass').append('<option value="AIRE 103">AIRE 103 - Basic Refrigeration & AC Lab</option>');
  $('#txtClass').append('<option value="AIRE 122">AIRE 122 - Construction Drawings</option>');
  $('#txtClass').append('<option value="AIRE 123">AIRE 123 - Drawings and Estimating Lab</option>');
  $('#txtClass').append('<option value="AIRE 124">AIRE 124 - Power & Control Systems Theory</option>');
  $('#txtClass').append('<option value="AIRE 125">AIRE 125 - Power & Control Systems Lab</option>');
  $('#txtClass').append('<option value="AIRE 126">AIRE 126 - Fluid Flow Dynamics</option>');
  $('#txtClass').append('<option value="AIRE 127">AIRE 127 - Fluid Flow Dynamics Lab</option>');
  $('#txtClass').append('<option value="AIRE 128">AIRE 128 - Comfort Heating Systems Theory</option>');
  $('#txtClass').append('<option value="AIRE 129">AIRE 129 - Comfort Heating Systems Lab</option>');
  $('#txtClass').append('<option value="AIRE 132">AIRE 132 - Advanced Refrig. & AC Theory</option>');
  $('#txtClass').append('<option value="AIRE 133">AIRE 133 - Advanced Refrig. & AC Lab</option>');
  $('#txtClass').append('<option value="AIRE 138">AIRE 138 - HVAC System Design</option>');
  $('#txtClass').append('<option value="AIRE 139">AIRE 139 - HVAC System Design Lab</option>');
  $('#txtClass').append('<option value="AIRE 144">AIRE 144 - Direct Digital Controls Theory</option>');
  $('#txtClass').append('<option value="AIRE 145">AIRE 145 - Direct Digital Controls Lab</option>');
  $('#txtClass').append('<option value="AIRE 270">AIRE 270 - Work Experience Air Cond/Refri</option>');

 }else if($('#txtSubject').val()=='ALLH'){
  $('#txtClass').append('<option value="ALLH 48">ALLH 48 - Basic Skills Health Careers</option>');

 }else if($('#txtSubject').val()=='AMSL'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="AMSL 120">AMSL 120 - American Sign Lang Lvl I</option>');
  $('#txtClass').append('<option value="AMSL 121">AMSL 121 - American Sign Lang Lvl II</option>');
  $('#txtClass').append('<option value="AMSL 150">AMSL 150 - Introduction to Deaf Culture</option>');
  $('#txtClass').append('<option value="AMSL 155">AMSL 155 - Implications of Deafness</option>');
  $('#txtClass').append('<option value="AMSL 214">AMSL 214 - Asl Fingerspelled Signs</option>');
  $('#txtClass').append('<option value="AMSL 215">AMSL 215 - American Sign Lang Lvl III</option>');
  $('#txtClass').append('<option value="AMSL 215L">AMSL 215L - American Sign Lang III (Lab)</option>');
  $('#txtClass').append('<option value="AMSL 216">AMSL 216 - American Sign Lang Lvl IV</option>');
  $('#txtClass').append('<option value="AMSL 216L">AMSL 216L - American Sign Lang IV (Lab)</option>');
  $('#txtClass').append('<option value="AMSL 225">AMSL 225 - Intro Linguistics of ASL</option>');
  $('#txtClass').append('<option value="AMSL 230">AMSL 230 - Interpretation I</option>');
  $('#txtClass').append('<option value="AMSL 235">AMSL 235 - Professional Aspect/Interpret</option>');
  $('#txtClass').append('<option value="AMSL 240">AMSL 240 - Interpretation II</option>');
  $('#txtClass').append('<option value="AMSL 245">AMSL 245 - Specialized Settings</option>');
  $('#txtClass').append('<option value="AMSL 250">AMSL 250 - Interpretation III</option>');
  $('#txtClass').append('<option value="AMSL 255">AMSL 255 - Interpretation IV</option>');
  $('#txtClass').append('<option value="AMSL 276">AMSL 276 - Field Work in Interpretation</option>');

 }else if($('#txtSubject').val()=='ANHL'){
  $('#txtClass').append('<option value="ANHL 100A">ANHL 100A - Animal Care and Management</option>');
  $('#txtClass').append('<option value="ANHL 100B">ANHL 100B - Advanced Animal Care and Mgt</option>');
  $('#txtClass').append('<option value="ANHL 115">ANHL 115 - Veterinary Office Procedures</option>');
  $('#txtClass').append('<option value="ANHL 125">ANHL 125 - Veterinary Clinical Pathology</option>');
  $('#txtClass').append('<option value="ANHL 125L">ANHL 125L - Veterinary Clin Path Lab</option>');
  $('#txtClass').append('<option value="ANHL 135">ANHL 135 - Veterinary Pharmacology</option>');
  $('#txtClass').append('<option value="ANHL 140">ANHL 140 - Veterinary Microbiology and Im</option>');
  $('#txtClass').append('<option value="ANHL 145">ANHL 145 - Veterinary Anatomy & Phys</option>');
  $('#txtClass').append('<option value="ANHL 145L">ANHL 145L - Veterinary Anat & Phys Lab</option>');
  $('#txtClass').append('<option value="ANHL 155">ANHL 155 - Fundmntls of Anml Health Tec</option>');
  $('#txtClass').append('<option value="ANHL 155L">ANHL 155L - Fundmntls of Anml Health Tec L</option>');
  $('#txtClass').append('<option value="ANHL 205">ANHL 205 - Diseases of Domestic Animals</option>');
  $('#txtClass').append('<option value="ANHL 215">ANHL 215 - Veterinary Radiography</option>');
  $('#txtClass').append('<option value="ANHL 215L">ANHL 215L - Veterinary Radiography Lab</option>');
  $('#txtClass').append('<option value="ANHL 225">ANHL 225 - Animal Nursing Tech Anesthes</option>');
  $('#txtClass').append('<option value="ANHL 227">ANHL 227 - Surgical Nursing Lab I</option>');
  $('#txtClass').append('<option value="ANHL 229">ANHL 229 - Advanced Surgical Nursing</option>');
  $('#txtClass').append('<option value="ANHL 260">ANHL 260 - Laboratory Animal Medicine</option>');
  $('#txtClass').append('<option value="ANHL 260L">ANHL 260L - Lab Animal Medicine Lab</option>');
  $('#txtClass').append('<option value="ANHL 270">ANHL 270 - Veterinary Work Experience</option>');

 }else if($('#txtSubject').val()=='ANTH'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="ANTH 102">ANTH 102 - Intro to Bio Anthropology</option>');
  $('#txtClass').append('<option value="ANTH 102">ANTH 102 - Intro to Physical Anthropology</option>');
  $('#txtClass').append('<option value="ANTH 103">ANTH 103 - Intro to Cultural Anthropology</option>');
  $('#txtClass').append('<option value="ANTH 104">ANTH 104 - Lab in Bio Anthropology</option>');
  $('#txtClass').append('<option value="ANTH 104">ANTH 104 - Lab in Physical Anthropology</option>');
  $('#txtClass').append('<option value="ANTH 107">ANTH 107 - Intro to Archaeology</option>');
  $('#txtClass').append('<option value="ANTH 110">ANTH 110 - Magic, Witchcraft, Religion</option>');
  $('#txtClass').append('<option value="ANTH 115">ANTH 115 - Intro/Archaelogical Field Work</option>');
  $('#txtClass').append('<option value="ANTH 117">ANTH 117 - Anthro of Gender & Sexuality</option>');
  $('#txtClass').append('<option value="ANTH 120">ANTH 120 - Archaeological Artifact Analys</option>');
  $('#txtClass').append('<option value="ANTH 130">ANTH 130 - Bones: Human Osteology</option>');
  $('#txtClass').append('<option value="ANTH 140">ANTH 140 - Primatology</option>');
  $('#txtClass').append('<option value="ANTH 200">ANTH 200 - Intro to North American Indian</option>');
  $('#txtClass').append('<option value="ANTH 205">ANTH 205 - Intro to Medical Anthropology</option>');
  $('#txtClass').append('<option value="ANTH 210">ANTH 210 - Intro to California Indians</option>');
  $('#txtClass').append('<option value="ANTH 215">ANTH 215 - Cultures of Latin America</option>');
  $('#txtClass').append('<option value="ANTH 277D">ANTH 277D - Service Learning -- on Campus</option>');
  $('#txtClass').append('<option value="ANTH 290">ANTH 290 - Independent Study</option>');

 }else if($('#txtSubject').val()=='AODS'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="AODS 150">AODS 150 - Intro/Chemical Dependency</option>');
  $('#txtClass').append('<option value="AODS 153">AODS 153 - Chem Depend Family Counsel Tec</option>');
  $('#txtClass').append('<option value="AODS 154">AODS 154 - AODS Law and Ethics</option>');
  $('#txtClass').append('<option value="AODS 156">AODS 156 - Case Management</option>');
  $('#txtClass').append('<option value="AODS 157">AODS 157 - Pharm of Psychoactive Drugs</option>');
  $('#txtClass').append('<option value="AODS 159">AODS 159 - Co-Occurring Disorders</option>');
  $('#txtClass').append('<option value="AODS 160">AODS 160 - Group Dynamics</option>');
  $('#txtClass').append('<option value="AODS 162">AODS 162 - AODS Internship Seminar</option>');
  $('#txtClass').append('<option value="AODS 163">AODS 163 - Chemical Dependency Internship</option>');
  $('#txtClass').append('<option value="AODS 270">AODS 270 - Work Experience/Chem Depend</option>');

 }else if($('#txtSubject').val()=='ARAB'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="ARAB 101">ARAB 101 - First Course in Arabic</option>');
  $('#txtClass').append('<option value="ARAB 102">ARAB 102 - Second Course in Arabic</option>');

 }else if($('#txtSubject').val()=='ARCH'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="ARCH 100">ARCH 100 - Graphic Design Communication I</option>');
  $('#txtClass').append('<option value="ARCH 101">ARCH 101 - ArchiCAD</option>');
  $('#txtClass').append('<option value="ARCH 103">ARCH 103 - Intro to Arch/Environ Design</option>');
  $('#txtClass').append('<option value="ARCH 107">ARCH 107 - Revit</option>');
  $('#txtClass').append('<option value="ARCH 112">ARCH 112 - AutoCAD</option>');
  $('#txtClass').append('<option value="ARCH 115">ARCH 115 - ARCH Model Making</option>');
  $('#txtClass').append('<option value="ARCH 126">ARCH 126 - History of Ancient World Arch</option>');
  $('#txtClass').append('<option value="ARCH 127">ARCH 127 - History of World Architecture</option>');
  $('#txtClass').append('<option value="ARCH 130">ARCH 130 - Materials of Construction</option>');
  $('#txtClass').append('<option value="ARCH 141">ARCH 141 - Professional Practice</option>');
  $('#txtClass').append('<option value="ARCH 170">ARCH 170 - Architectural Design</option>');
  $('#txtClass').append('<option value="ARCH 172">ARCH 172 - Architectural Design II</option>');
  $('#txtClass').append('<option value="ARCH 173">ARCH 173 - Architectural Site Design</option>');
  $('#txtClass').append('<option value="ARCH 175">ARCH 175 - Adv Architectural Design I</option>');
  $('#txtClass').append('<option value="ARCH 180A">ARCH 180A - Adv Architectural Dsgn IIA</option>');
  $('#txtClass').append('<option value="ARCH 180B">ARCH 180B - Adv Architectural Design IIB</option>');
  $('#txtClass').append('<option value="ARCH 180C">ARCH 180C - Adv Architectural Design IIC</option>');
  $('#txtClass').append('<option value="ARCH 205">ARCH 205 - Estimating</option>');
  $('#txtClass').append('<option value="ARCH 220">ARCH 220 - Graphic Design Comm II</option>');
  $('#txtClass').append('<option value="ARCH 221">ARCH 221 - Graphic Design Comm III</option>');
  $('#txtClass').append('<option value="ARCH 226">ARCH 226 - Architectural Theory</option>');
  $('#txtClass').append('<option value="ARCH 231">ARCH 231 - Sustain in Built Environ</option>');

 }else if($('#txtSubject').val()=='ARTF'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="ARTF 100">ARTF 100 - Art Orientation</option>');
  $('#txtClass').append('<option value="ARTF 104">ARTF 104 - Artists and Designers Today</option>');
  $('#txtClass').append('<option value="ARTF 106">ARTF 106 - Art of the United States</option>');
  $('#txtClass').append('<option value="ARTF 107">ARTF 107 - Contemporary Art</option>');
  $('#txtClass').append('<option value="ARTF 108">ARTF 108 - Women in Art</option>');
  $('#txtClass').append('<option value="ARTF 109">ARTF 109 - Modern Art</option>');
  $('#txtClass').append('<option value="ARTF 110">ARTF 110 - Art History: Prehist-Gothic</option>');
  $('#txtClass').append('<option value="ARTF 111">ARTF 111 - Art History: Renaiss-Modern</option>');
  $('#txtClass').append('<option value="ARTF 113">ARTF 113 - Arts of Africa, Oceana, Amer.</option>');
  $('#txtClass').append('<option value="ARTF 115">ARTF 115 - African Art</option>');
  $('#txtClass').append('<option value="ARTF 120">ARTF 120 - Native American Art</option>');
  $('#txtClass').append('<option value="ARTF 125">ARTF 125 - Arts of the Asian Continent</option>');
  $('#txtClass').append('<option value="ARTF 130">ARTF 130 - Pre-Columbian Art</option>');
  $('#txtClass').append('<option value="ARTF 150A">ARTF 150A - Two-Dimensional Design</option>');
  $('#txtClass').append('<option value="ARTF 151">ARTF 151 - Three Dimensional Design</option>');
  $('#txtClass').append('<option value="ARTF 152">ARTF 152 - Color Theory</option>');
  $('#txtClass').append('<option value="ARTF 155A">ARTF 155A - Freehand Drawing I</option>');
  $('#txtClass').append('<option value="ARTF 155B">ARTF 155B - Freehand Drawing II</option>');
  $('#txtClass').append('<option value="ARTF 161A">ARTF 161A - Museum/Gallery Exhib Skills I</option>');
  $('#txtClass').append('<option value="ARTF 161B">ARTF 161B - Mus/Gallery Exhibit Skills II</option>');
  $('#txtClass').append('<option value="ARTF 163">ARTF 163 - Art Museum/Gallery Internship</option>');
  $('#txtClass').append('<option value="ARTF 165A">ARTF 165A - Composition in Painting I</option>');
  $('#txtClass').append('<option value="ARTF 165B">ARTF 165B - Composition in Painting II</option>');
  $('#txtClass').append('<option value="ARTF 165C">ARTF 165C - Composition in Painting III</option>');
  $('#txtClass').append('<option value="ARTF 165D">ARTF 165D - Composition in Painting IV</option>');
  $('#txtClass').append('<option value="ARTF 170A">ARTF 170A - Contemporary Crafts I</option>');
  $('#txtClass').append('<option value="ARTF 170B">ARTF 170B - Contemporary Crafts II</option>');
  $('#txtClass').append('<option value="ARTF 170C">ARTF 170C - Contemporary Crafts III</option>');
  $('#txtClass').append('<option value="ARTF 175A">ARTF 175A - Sculpture I</option>');
  $('#txtClass').append('<option value="ARTF 175B">ARTF 175B - Sculpture II</option>');
  $('#txtClass').append('<option value="ARTF 175C">ARTF 175C - Sculpture III</option>');
  $('#txtClass').append('<option value="ARTF 188">ARTF 188 - Women and Gender in Photograph</option>');
  $('#txtClass').append('<option value="ARTF 190A">ARTF 190A - Black & White Art Photography</option>');
  $('#txtClass').append('<option value="ARTF 191">ARTF 191 - Cultural Influences Photo</option>');
  $('#txtClass').append('<option value="ARTF 194">ARTF 194 - Critical Photography</option>');
  $('#txtClass').append('<option value="ARTF 195A">ARTF 195A - Ceramics I</option>');
  $('#txtClass').append('<option value="ARTF 195B">ARTF 195B - Ceramics II</option>');
  $('#txtClass').append('<option value="ARTF 195C">ARTF 195C - Ceramics III</option>');
  $('#txtClass').append('<option value="ARTF 196">ARTF 196 - Clay and Glaze Technology</option>');
  $('#txtClass').append('<option value="ARTF 197A">ARTF 197A - Handbuilding Ceramics I</option>');
  $('#txtClass').append('<option value="ARTF 197B">ARTF 197B - Handbuilding Ceramics II</option>');
  $('#txtClass').append('<option value="ARTF 198A">ARTF 198A - Introduction to Printmaking I</option');
  $('#txtClass').append('<option value="ARTF 200">ARTF 200 - Photo Composition/Theory</option>');
  $('#txtClass').append('<option value="ARTF 205A">ARTF 205A - Installation, Perf and New Gen</option>');
  $('#txtClass').append('<option value="ARTF 206">ARTF 206 - Art Entrepreneurship</option>');
  $('#txtClass').append('<option value="ARTF 207A">ARTF 207A - Industrial and Architectural Ceramic Design I</option');
  $('#txtClass').append('<option value="ARTF 207B">ARTF 207B - Industrial and Architectural Ceramic Design II</option');
  $('#txtClass').append('<option value="ARTF 210A">ARTF 210A - Life Drawing I</option>');
  $('#txtClass').append('<option value="ARTF 210B">ARTF 210B - Life Drawing II</option>');
  $('#txtClass').append('<option value="ARTF 210C">ARTF 210C - Life Drawing III</option>');
  $('#txtClass').append('<option value="ARTF 212">ARTF 212 - Sustainable Art and Design</option>');
  $('#txtClass').append('<option value="ARTF 231">ARTF 231 - Introduction to Digital Art</option>');
  $('#txtClass').append('<option value="ARTF 232">ARTF 232 - Intro Digital Drawing&Painting</option>');
  $('#txtClass').append('<option value="ARTF 260">ARTF 260 - Studio Art Studies</option>');
  $('#txtClass').append('<option value="ARTF 280A">ARTF 280A - 2 Dimensional Art Studio Lab</option>');
  $('#txtClass').append('<option value="ARTF 280B">ARTF 280B - 3 Dimensionsal Art Studio Lab</option>');
  $('#txtClass').append('<option value="ARTF 280C">ARTF 280C - Ceramics Studio Lab</option>');
  $('#txtClass').append('<option value="ARTF 280D">ARTF 280D - Digital Art Studio Lab</option>');
  $('#txtClass').append('<option value="ARTF 280E">ARTF 280E - Museum Studies Lab</option>');
  $('#txtClass').append('<option value="ARTF 290">ARTF 290 - Independent Study</option>');

 }else if($('#txtSubject').val()=='ARTG'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="ARTG 100">ARTG 100 - Basic Graphic Design</option>');
  $('#txtClass').append('<option value="ARTG 106">ARTG 106 - Typography</option>');
  $('#txtClass').append('<option value="ARTG 118">ARTG 118 - Graphic Design History</option>');
  $('#txtClass').append('<option value="ARTG 120">ARTG 120 - Illustration</option>');
  $('#txtClass').append('<option value="ARTG 124">ARTG 124 - Page Layout</option>');
  $('#txtClass').append('<option value="ARTG 125">ARTG 125 - Digital Media</option>');
  $('#txtClass').append('<option value="ARTG 126">ARTG 126 - Intermediate Digital Media</option>');
  $('#txtClass').append('<option value="ARTG 133">ARTG 133 - Logo and Packaging</option>');
  $('#txtClass').append('<option value="ARTG 135">ARTG 135 - Professional Practices</option>');
  $('#txtClass').append('<option value="ARTG 143">ARTG 143 - Interaction Design I</option>');
  $('#txtClass').append('<option value="ARTG 148A">ARTG 148A - Portfolio A</option>');
  $('#txtClass').append('<option value="ARTG 148B">ARTG 148B - Portfolio B</option>');
  $('#txtClass').append('<option value="ARTG 148C">ARTG 148C - Portfolio Building</option>');
  $('#txtClass').append('<option value="ARTG 153">ARTG 153 - Interaction Design II</option>');
  $('#txtClass').append('<option value="ARTG 163">ARTG 163 - Interaction Design III</option>');
  $('#txtClass').append('<option value="ARTG 174A">ARTG 174A - Book Arts I</option>');
  $('#txtClass').append('<option value="ARTG 206">ARTG 206 - Advanced Typography</option>');

 }else if($('#txtSubject').val()=='ASTR'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="ASTR 101">ASTR 101 - Descriptive Astronomy</option>');
  $('#txtClass').append('<option value="ASTR 102">ASTR 102 - Exploring The Solar System</option>');
  $('#txtClass').append('<option value="ASTR 109">ASTR 109 - Practice in Observing</option>');
  $('#txtClass').append('<option value="ASTR 111">ASTR 111 - Astronomy Laboratory</option>');
  $('#txtClass').append('<option value="ASTR 290">ASTR 290 - Independent Study</option>');

 }else if($('#txtSubject').val()=='AUTO'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="AUTO 51T">AUTO 51T - Honda/Toyota Quick Service</option>');
  $('#txtClass').append('<option value="AUTO 53">AUTO 53 - Intro to Automotive Technology</option>');
  $('#txtClass').append('<option value="AUTO 56">AUTO 56 - Engine and Related Systems</option>');
  $('#txtClass').append('<option value="AUTO 56T">AUTO 56T - Honda/Toyota Engine Systems</option>');
  $('#txtClass').append('<option value="AUTO 61">AUTO 61 - Basic Electrical System Fund.</option>');
  $('#txtClass').append('<option value="AUTO 61T">AUTO 61T - Honda/Toyota Basic Electricity</option>');
  $('#txtClass').append('<option value="AUTO 62">AUTO 62 - Advanced Electrical</option>');
  $('#txtClass').append('<option value="AUTO 62T">AUTO 62T - Honda/Toyota Adv Electrical</option>');
  $('#txtClass').append('<option value="AUTO 65">AUTO 65 - Engine Performance</option>');
  $('#txtClass').append('<option value="AUTO 65T">AUTO 65T - Honda/Toyota Engine Perf</option>');
  $('#txtClass').append('<option value="AUTO 67">AUTO 67 - Advanced Engine Performance</option>');
  $('#txtClass').append('<option value="AUTO 67T">AUTO 67T - Honda/Toyota Adv Engine Perf</option>');
  $('#txtClass').append('<option value="AUTO 69">AUTO 69 - Climate Control Systems</option>');
  $('#txtClass').append('<option value="AUTO 69T">AUTO 69T - Honda/Toyota Climate Cntl Sys</option>');
  $('#txtClass').append('<option value="AUTO 72">AUTO 72 - Manual Drive Train and Axles</option>');
  $('#txtClass').append('<option value="AUTO 72T">AUTO 72T - Honda/Toyota Man Drive Train</option>');
  $('#txtClass').append('<option value="AUTO 74">AUTO 74 - Automatic Transmissions/Axles</option>');
  $('#txtClass').append('<option value="AUTO 74T">AUTO 74T - Honda/Toyota Auto Transmission</option>');
  $('#txtClass').append('<option value="AUTO 76">AUTO 76 - Automotive Brake Systems</option>');
  $('#txtClass').append('<option value="AUTO 76T">AUTO 76T - Honda/Toyota Auto Brake Sys</option>');
  $('#txtClass').append('<option value="AUTO 78">AUTO 78 - Suspension and Steering</option>');
  $('#txtClass').append('<option value="AUTO 78T">AUTO 78T - Honda/Toyota Suspension</option>');
  $('#txtClass').append('<option value="AUTO 86">AUTO 86 - Bar Specified Diag & Level 2</option>');
  $('#txtClass').append('<option value="AUTO 151T">AUTO 151T - Honda/Toyota Quick Service Lube, Pre-Delivery Inspection Technician</option');
  $('#txtClass').append('<option value="AUTO 153G">AUTO 153G - Introduction to Automotive Technology</option');
  $('#txtClass').append('<option value="AUTO 156G">AUTO 156G - Engine and Related Systems</option');
  $('#txtClass').append('<option value="AUTO 156T">AUTO 156T - Honda/Toyota Engine and Related Systems</option');
  $('#txtClass').append('<option value="AUTO 161G">AUTO 161G - Basic Electricity and Electrical Systems Fundamentals</option');
  $('#txtClass').append('<option value="AUTO 161T">AUTO 161T - Honda/Toyota Basic Electricity and Electrical Systems Fundamentals</option');
  $('#txtClass').append('<option value="AUTO 162G">AUTO 162G - Advanced Electrical </option');
  $('#txtClass').append('<option value="AUTO 162T">AUTO 162T - Honda/Toyota Advanced Electrical </option');
  $('#txtClass').append('<option value="AUTO 165G">AUTO 165G - Engine Performance</option');
  $('#txtClass').append('<option value="AUTO 165T">AUTO 165T - Honda/Toyota Engine Performance</option');
  $('#txtClass').append('<option value="AUTO 167G">AUTO 167G - Advanced Engine Performance</option');
  $('#txtClass').append('<option value="AUTO 167T">AUTO 167T - Honda/Toyota Advanced Engine Performance</option');
  $('#txtClass').append('<option value="AUTO 169G">AUTO 169G - Climate Control Systems</option');
  $('#txtClass').append('<option value="AUTO 169T">AUTO 169T - Honda/Toyota Climate Control Systems</option');
  $('#txtClass').append('<option value="AUTO 172G">AUTO 172G - Manual Drive Train and Axles</option');
  $('#txtClass').append('<option value="AUTO 172T">AUTO 172T - Honda/Toyota Manual Drive Train and Axles</option');
  $('#txtClass').append('<option value="AUTO 174G">AUTO 174G - Automatic Transmissions/Axles</option');
  $('#txtClass').append('<option value="AUTO 174T">AUTO 174T - Honda/Toyota Automatic Transmissions/Axles</option');
  $('#txtClass').append('<option value="AUTO 176G">AUTO 176G - Automative Brake Systems </option');
  $('#txtClass').append('<option value="AUTO 176T">AUTO 176T - Honda/Toyota Automotive Brake Systems</option');
  $('#txtClass').append('<option value="AUTO 178G">AUTO 178G - Suspension, Steering and Handling</option');
  $('#txtClass').append('<option value="AUTO 178T">AUTO 178T - Honda/Toyota Suspension, Steering and Handling</option');
  $('#txtClass').append('<option value="AUTO 180T">AUTO 180T - Honda/Toyota Hybrid Electric Vehicle (HEV) Systems</option');
  $('#txtClass').append('<option value="AUTO 186">AUTO 186 - BAR Specified Diagnostic, Repair, and Level 2 Inspection Training</option');


 }else if($('#txtSubject').val()=='AVIA'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="AVIA 101">AVIA 101 - Private Pilot Ground School</option>');
  $('#txtClass').append('<option value="AVIA 101L">AVIA 101L - Private Pilot Flight Lab</option>');
  $('#txtClass').append('<option value="AVIA 105">AVIA 105 - Intro to Aviation/Aerospace</option>');
  $('#txtClass').append('<option value="AVIA 115">AVIA 115 - Aviation Weather</option>');
  $('#txtClass').append('<option value="AVIA 125">AVIA 125 - Aviation/Airport Management</option>');
  $('#txtClass').append('<option value="AVIA 128">AVIA 128 - Group Dynamics I</option>');
  $('#txtClass').append('<option value="AVIA 133">AVIA 133 - Human Factors in Aviation</option>');
  $('#txtClass').append('<option value="AVIA 151">AVIA 151 - Helicopter Ground School</option>');
  $('#txtClass').append('<option value="AVIA 161">AVIA 161 - Remote Pilot Ground School</option>');
  $('#txtClass').append('<option value="AVIA 161L">AVIA 161L - Remote Pilot Flight Lab</option>');
  $('#txtClass').append('<option value="AVIA 195">AVIA 195 - Instrument Ground School</option>');
  $('#txtClass').append('<option value="AVIA 195L">AVIA 195L - Basic Instrument Flight Lab</option>');
  $('#txtClass').append('<option value="AVIA 196L">AVIA 196L - Advanced Instrument Flight Lab</option>');
  $('#txtClass').append('<option value="AVIA 201">AVIA 201 - Commercial Pilot Ground School</option>');
  $('#txtClass').append('<option value="AVIA 211L">AVIA 211L - Basic VFR Instructor Lab</option>');
  $('#txtClass').append('<option value="AVIA 215L">AVIA 215L - Basic IFR Instructor Lab</option>');
  $('#txtClass').append('<option value="AVIA 216L">AVIA 216L - Advanced IFR Instructor Lab</option>');
  $('#txtClass').append('<option value="AVIA 228">AVIA 228 - Group Dynamics II</option>');
  $('#txtClass').append('<option value="AVIA 270">AVIA 270 - Work Experience</option>');

 }else if($('#txtSubject').val()=='AVIM'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="AVIM 101G">AVIM 101G - Gen Avia Tech Theory I</option>');
  $('#txtClass').append('<option value="AVIM 101H">AVIM 101H - Gen Avia Tech Theory II</option>');
  $('#txtClass').append('<option value="AVIM 102G">AVIM 102G - Gen Avia Maint Tech Prac I</option>');
  $('#txtClass').append('<option value="AVIM 102H">AVIM 102H - Gen Avia Maint Tech Prac II</option>');
  $('#txtClass').append('<option value="AVIM 103A">AVIM 103A - Aircraft Wood/Fab/Fin/Composit</option>');
  $('#txtClass').append('<option value="AVIM 103B">AVIM 103B - Aircraft Weld / Sht Mtl Struc</option>');
  $('#txtClass').append('<option value="AVIM 103C">AVIM 103C - Aircraft Hydraulic Systems</option>');
  $('#txtClass').append('<option value="AVIM 103D">AVIM 103D - Aircraft Landing Gear Systems</option>');
  $('#txtClass').append('<option value="AVIM 104A">AVIM 104A - Appld Aircrft Wood/Fab/Finish</option>');
  $('#txtClass').append('<option value="AVIM 104B">AVIM 104B - Appld Aircrft Weld/Sheetmetal</option>');
  $('#txtClass').append('<option value="AVIM 104C">AVIM 104C - Appld Aircrft Hydraulic System</option>');
  $('#txtClass').append('<option value="AVIM 104D">AVIM 104D - Appld Aircrft Landing Gear Sys</option>');
  $('#txtClass').append('<option value="AVIM 105A">AVIM 105A - Aircrft Cabin Atmosph Control</option>');
  $('#txtClass').append('<option value="AVIM 105B">AVIM 105B - Aircrft Asmbly/Rigging/Inspect</option>');
  $('#txtClass').append('<option value="AVIM 106A">AVIM 106A - Aircraft Cabin Atmosphere Cntl</option>');
  $('#txtClass').append('<option value="AVIM 106B">AVIM 106B - Appld Aircrft Assembly/Rigging</option>');
  $('#txtClass').append('<option value="AVIM 107B">AVIM 107B - Turbine Engines</option>');
  $('#txtClass').append('<option value="AVIM 108B">AVIM 108B - Turbine Engines Lab</option>');
  $('#txtClass').append('<option value="AVIM 109A">AVIM 109A - Airframe Electrical System</option>');
  $('#txtClass').append('<option value="AVIM 109B">AVIM 109B - Powerplant Ignition Systems</option>');
  $('#txtClass').append('<option value="AVIM 109C">AVIM 109C - Powerplant Electrical Systems</option>');
  $('#txtClass').append('<option value="AVIM 109D">AVIM 109D - Aircrft Fire Protect/Dig Logic</option>');
  $('#txtClass').append('<option value="AVIM 110A">AVIM 110A - Airframe Electrical Systems</option>');
  $('#txtClass').append('<option value="AVIM 110B">AVIM 110B - Applied Powerplnt Ignit Syst</option>');
  $('#txtClass').append('<option value="AVIM 110C">AVIM 110C - Applied Powerplant Elect Sys</option>');
  $('#txtClass').append('<option value="AVIM 111C">AVIM 111C - Reciprocating Engines I</option>');
  $('#txtClass').append('<option value="AVIM 111D">AVIM 111D - Reciprocating Engines II</option>');
  $('#txtClass').append('<option value="AVIM 112C">AVIM 112C - Applied Reciprocat Engine I</option>');
  $('#txtClass').append('<option value="AVIM 112D">AVIM 112D - Applied Reciprocat Engines II</option>');
  $('#txtClass').append('<option value="AVIM 120">AVIM 120 - Basic D.C. Electronics Theory</option>');
  $('#txtClass').append('<option value="AVIM 121A">AVIM 121A - Applied Basic D.C. Electronics</option>');
  $('#txtClass').append('<option value="AVIM 203">AVIM 203 - Advanced Composites</option>');
  $('#txtClass').append('<option value="AVIM 204">AVIM 204 - Advanced Composite Laboratory</option>');
  $('#txtClass').append('<option value="AVIM 205">AVIM 205 - Adv. Metal Forming/Welding</option>');
  $('#txtClass').append('<option value="AVIM 206">AVIM 206 - Adv.Sheet Metal Form/Weld Lab</option>');
  $('#txtClass').append('<option value="AVIM 241">AVIM 241 - Aircraft Propeller Systems</option>');
  $('#txtClass').append('<option value="AVIM 242">AVIM 242 - Applied Aircraft Propeller Sys</option>');
  $('#txtClass').append('<option value="AVIM 249">AVIM 249 - Induction and Fuel Metering</option>');
  $('#txtClass').append('<option value="AVIM 250">AVIM 250 - Applied Induction/Fuel Meter</option>');
  $('#txtClass').append('<option value="AVIM 253">AVIM 253 - Lubricat, Cooling, & Exhaust</option>');
  $('#txtClass').append('<option value="AVIM 254">AVIM 254 - Applied Lub/Cooling/Exhaust</option>');
  $('#txtClass').append('<option value="AVIM 270">AVIM 270 - Work Experience</option>');

 }else if($('#txtSubject').val()=='BANK'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="BANK 100">BANK 100 - Intro to Financial Services</option>');
  $('#txtClass').append('<option value="BANK 102">BANK 102 - Mortgage Brokerage and Banking</option>');
  $('#txtClass').append('<option value="BANK 103">BANK 103 - Introduction to Investments</option>');

 }else if($('#txtSubject').val()=='BCAS'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="BCAS 80">BCAS 80 - Construction Safety</option>');
  $('#txtClass').append('<option value="BCAS 81">BCAS 81 - Construction Mathematics I</option>');
  $('#txtClass').append('<option value="BCAS 82">BCAS 82 - Construction Mathematics II</option>');
  $('#txtClass').append('<option value="BCAS 83">BCAS 83 - Introductory Blueprint Reading</option>');
  $('#txtClass').append('<option value="BCAS 85">BCAS 85 - Carpenter Apprentice I</option>');
  $('#txtClass').append('<option value="BCAS 86">BCAS 86 - Carpenter Apprentice II</option>');
  $('#txtClass').append('<option value="BCAS 87">BCAS 87 - Carpenter Apprentice III</option>');
  $('#txtClass').append('<option value="BCAS 300">BCAS 300 - Construction Safety</option>');
  $('#txtClass').append('<option value="BCAS 302">BCAS 302 - Construction Mathematics I</option>');
  $('#txtClass').append('<option value="BCAS 303">BCAS 303 - Construction Mathematics II</option>');
  $('#txtClass').append('<option value="BCAS 307">BCAS 307 - Construction Blueprint Reading</option>');
  $('#txtClass').append('<option value="BCAS 310">BCAS 310 - Carpenter Apprentice I</option>');
  $('#txtClass').append('<option value="BCAS 312">BCAS 312 - Carpenter Apprentice II</option>');
  $('#txtClass').append('<option value="BCAS 314">BCAS 314 - Carpenter Apprentice III</option>');

 }else if($('#txtSubject').val()=='BIOL'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="BIOL 48">BIOL 48 - Pre-biology and Study Skills</option>');
  $('#txtClass').append('<option value="BIOL 100">BIOL 100 - Natrl History/Environmntl Biol</option>');
  $('#txtClass').append('<option value="BIOL 101">BIOL 101 - Environmental Issues</option>');
  $('#txtClass').append('<option value="BIOL 107">BIOL 107 - General Biology Lecture/Lab</option>');
  $('#txtClass').append('<option value="BIOL 110">BIOL 110 - Intro to Oceanography</option>');
  $('#txtClass').append('<option value="BIOL 111">BIOL 111 - Cancer Biology</option>');
  $('#txtClass').append('<option value="BIOL 115">BIOL 115 - Marine Biology</option>');
  $('#txtClass').append('<option value="BIOL 120">BIOL 120 - The Environment of Man</option>');
  $('#txtClass').append('<option value="BIOL 130">BIOL 130 - Human Heredity</option>');
  $('#txtClass').append('<option value="BIOL 131">BIOL 131 - Introduction to Biotechnology</option>');
  $('#txtClass').append('<option value="BIOL 132">BIOL 132 - Applied Biotechnology I</option>');
  $('#txtClass').append('<option value="BIOL 133">BIOL 133 - Applied Biotechnology II</option>');
  $('#txtClass').append('<option value="BIOL 134">BIOL 134 - Biotec Lab Experience</option>');
  $('#txtClass').append('<option value="BIOL 136">BIOL 136 - Quality in Biotechnology</option>');
  $('#txtClass').append('<option value="BIOL 160">BIOL 160 - Elements/Human Anatomy/Physiol</option>');
  $('#txtClass').append('<option value="BIOL 180">BIOL 180 - Plants and People</option>');
  $('#txtClass').append('<option value="BIOL 200">BIOL 200 - Biological Statistics</option>');
  $('#txtClass').append('<option value="BIOL 205">BIOL 205 - General Microbiology</option>');
  $('#txtClass').append('<option value="BIOL 210A">BIOL 210A - Intro to the Biol. Sciences I</option>');
  $('#txtClass').append('<option value="BIOL 210B">BIOL 210B - Intro to the Biol. Sciences II</option>');
  $('#txtClass').append('<option value="BIOL 215">BIOL 215 - Introduction to Zoology</option>');
  $('#txtClass').append('<option value="BIOL 230">BIOL 230 - Human Anatomy</option>');
  $('#txtClass').append('<option value="BIOL 231">BIOL 231 - Media Experience/Human Anatomy</option>');
  $('#txtClass').append('<option value="BIOL 232">BIOL 232 - Experience/Human Dissection</option>');
  $('#txtClass').append('<option value="BIOL 235">BIOL 235 - Human Physiology</option>');
  $('#txtClass').append('<option value="BIOL 250">BIOL 250 - Introduction to Botany</option>');
  $('#txtClass').append('<option value="BIOL 277D">BIOL 277D - Service Learning - Biology</option>');
  $('#txtClass').append('<option value="BIOL 290">BIOL 290 - Independent Study</option>');

 }else if($('#txtSubject').val()=='BLAS'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="BLAS 100">BLAS 100 - Intro to Black Studies</option>');
  $('#txtClass').append('<option value="BLAS 104">BLAS 104 - Black Psychology</option>');
  $('#txtClass').append('<option value="BLAS 110">BLAS 110 - African American Art</option>');
  $('#txtClass').append('<option value="BLAS 115">BLAS 115 - Sociology/Black Perspective</option>');
  $('#txtClass').append('<option value="BLAS 116">BLAS 116 - Contemp Soc Prob/Black Perspec</option>');
  $('#txtClass').append('<option value="BLAS 120">BLAS 120 - Black Music</option>');
  $('#txtClass').append('<option value="BLAS 125">BLAS 125 - Dynamics of Black Community</option>');
  $('#txtClass').append('<option value="BLAS 130">BLAS 130 - The Black Family</option>');
  $('#txtClass').append('<option value="BLAS 135">BLAS 135 - Intro to Black Politics</option>');
  $('#txtClass').append('<option value="BLAS 140A">BLAS 140A - Hist U.S./Black Perspectives</option>');
  $('#txtClass').append('<option value="BLAS 140B">BLAS 140B - Hist U.S./Black Perspectives</option>');
  $('#txtClass').append('<option value="BLAS 145A">BLAS 145A - Intro to African History</option>');
  $('#txtClass').append('<option value="BLAS 145B">BLAS 145B - Intro to African History</option>');
  $('#txtClass').append('<option value="BLAS 150">BLAS 150 - Black Women in Lit/Film/Media</option>');
  $('#txtClass').append('<option value="BLAS 155">BLAS 155 - African American Literature</option>');
  $('#txtClass').append('<option value="BLAS 165">BLAS 165 - Sexuality & Black Culture</option>');
  $('#txtClass').append('<option value="BLAS 175">BLAS 175 - Psycho-History/Racism & Sexism</option>');

 }else if($('#txtSubject').val()=='BLDC'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="BLDC 55">BLDC 55 - Construction Plan Reading</option>');
  $('#txtClass').append('<option value="BLDC 60">BLDC 60 - Construction Practices I</option>');
  $('#txtClass').append('<option value="BLDC 61">BLDC 61 - Construction Practices II</option>');
  $('#txtClass').append('<option value="BLDC 65">BLDC 65 - Building Inspection</option>');
  $('#txtClass').append('<option value="BLDC 68">BLDC 68 - Elect/Plumb/Mechanical Codes</option>');
  $('#txtClass').append('<option value="BLDC 70">BLDC 70 - Building Codes and Zoning</option>');
  $('#txtClass').append('<option value="BLDC 75">BLDC 75 - Construction Management I</option>');
  $('#txtClass').append('<option value="BLDC 80">BLDC 80 - Proj Management/Scheduling</option>');
  $('#txtClass').append('<option value="BLDC 95">BLDC 95 - Bldg Contractor&apos;s License Law</option>');

 }else if($('#txtSubject').val()=='BUSE'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="BUSE 90A">BUSE 90A - Learning Skills</option>');
  $('#txtClass').append('<option value="BUSE 92">BUSE 92 - Intro to Bus Communications</option>');
  $('#txtClass').append('<option value="BUSE 100">BUSE 100 - Introduction to Business</option>');
  $('#txtClass').append('<option value="BUSE 101">BUSE 101 - Business Mathematics</option>');
  $('#txtClass').append('<option value="BUSE 102">BUSE 102 - Introduction to Customer Service</option');
  $('#txtClass').append('<option value="BUSE 115">BUSE 115 - Statistics for Business</option>');
  $('#txtClass').append('<option value="BUSE 119">BUSE 119 - Business Communications</option>');
  $('#txtClass').append('<option value="BUSE 120">BUSE 120 - Principles of Money Management</option>');
  $('#txtClass').append('<option value="BUSE 127">BUSE 127 - Social Media for Business</option>');
  $('#txtClass').append('<option value="BUSE 129">BUSE 129 - Intro to Entrepreneurship</option>');
  $('#txtClass').append('<option value="BUSE 140">BUSE 140 - Business Law & the Legal Envir</option>');
  $('#txtClass').append('<option value="BUSE 145">BUSE 145 - Business of Cannabis</option>');
  $('#txtClass').append('<option value="BUSE 150">BUSE 150 - Human Relations in Business</option>');
  $('#txtClass').append('<option value="BUSE 155">BUSE 155 - Managing the Small Bus</option>');
  $('#txtClass').append('<option value="BUSE 157">BUSE 157 - Plan for the Small Business</option>');
  $('#txtClass').append('<option value="BUSE 201">BUSE 201 - Business Organization & Mgmt</option>');
  $('#txtClass').append('<option value="BUSE 210">BUSE 210 - Human Resources Management</option>');
  $('#txtClass').append('<option value="BUSE 229A">BUSE 229A - Gazelle Path Business Incubator I </option');
  $('#txtClass').append('<option value="BUSE 229B">BUSE 229B - Gazelle Path Business Incubator II</option');
  $('#txtClass').append('<option value="BUSE 229C">BUSE 229C - Gazelle Path Business Incubator III</option');
  $('#txtClass').append('<option value="BUSE 229D">BUSE 229D - Gazelle Path Business Incubator IV</option');
  $('#txtClass').append('<option value="BUSE 230A">BUSE 230A - Basic Small Business Operation</option>');
  $('#txtClass').append('<option value="BUSE 230B">BUSE 230B - Inter Small Bus Oper</option>');
  $('#txtClass').append('<option value="BUSE 230C">BUSE 230C - Adv Small Buse Oper</option>');
  $('#txtClass').append('<option value="BUSE 270">BUSE 270 - Work Experience</option>');

 }else if($('#txtSubject').val()=='CACM'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="CACM 101">CACM 101 - Sanitation/Safety/Equipment</option>');
  $('#txtClass').append('<option value="CACM 105">CACM 105 - Food Production Theory</option>');
  $('#txtClass').append('<option value="CACM 110">CACM 110 - Cooking and Service</option>');
  $('#txtClass').append('<option value="CACM 110A">CACM 110A - Fundamental Food and Service: Restaurant Operations</option');
  $('#txtClass').append('<option value="CACM 110B">CACM 110B - Fundamental Food and Service: Cooking Techniques</option');
  $('#txtClass').append('<option value="CACM 120">CACM 120 - Menu Analysis & Event Catering</option>');
  $('#txtClass').append('<option value="CACM 130">CACM 130 - Quantity Food Prep Theory</option>');
  $('#txtClass').append('<option value="CACM 130">CACM 130 - Quantity Food Prep-Theory</option>');
  $('#txtClass').append('<option value="CACM 131">CACM 131 - Quantity Food Prep-Lab</option>');
  $('#txtClass').append('<option value="CACM 160">CACM 160 - Fundamental of Baking Theory</option');
  $('#txtClass').append('<option value="CACM 201">CACM 201 - Gourmet Food Prep Lab</option>');
  $('#txtClass').append('<option value="CACM 205">CACM 205 - Garde Manger</option>');
  $('#txtClass').append('<option value="CACM 210">CACM 210 - Basic Baking and Pastry</option>');
  $('#txtClass').append('<option value="CACM 212">CACM 212 - Baking and Pastry</option');
  $('#txtClass').append('<option value="CACM 214">CACM 214 - Advanced Baking  </option');
  $('#txtClass').append('<option value="CACM 215">CACM 215 - Advanced Pastry</option');
  $('#txtClass').append('<option value="CACM 270">CACM 270 - Work Experience</option>');
  $('#txtClass').append('<option value="CACM 290">CACM 290 - Independent Study</option>');

 }else if($('#txtSubject').val()=='CBTE'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="CBTE 94">CBTE 94 - Intro to Computer Keyboarding</option>');
  $('#txtClass').append('<option value="CBTE 101">CBTE 101 - Basic Computer Keyboarding</option>');
  $('#txtClass').append('<option value="CBTE 114">CBTE 114 - Intro to Microsoft Windows</option>');
  $('#txtClass').append('<option value="CBTE 120">CBTE 120 - Beginning Microsoft Word</option>');
  $('#txtClass').append('<option value="CBTE 122">CBTE 122 - Intermediate Microsoft Word</option>');
  $('#txtClass').append('<option value="CBTE 127">CBTE 127 - Beginning Microsoft PowerPoint</option>');
  $('#txtClass').append('<option value="CBTE 128">CBTE 128 - Comp. Microsoft Powerpoint</option>');
  $('#txtClass').append('<option value="CBTE 140">CBTE 140 - Beginning Microsoft Excel</option>');
  $('#txtClass').append('<option value="CBTE 143">CBTE 143 - Intermediate Microsoft Excel</option>');
  $('#txtClass').append('<option value="CBTE 152">CBTE 152 - Beginning Microsoft Access</option>');
  $('#txtClass').append('<option value="CBTE 164">CBTE 164 - Intro to Microsoft Outlook</option>');
  $('#txtClass').append('<option value="CBTE 165">CBTE 165 - Webpage Creation-Dreamweaver</option>');
  $('#txtClass').append('<option value="CBTE 180">CBTE 180 - Microsoft Office</option>');
  $('#txtClass').append('<option value="CBTE 205">CBTE 205 - Records Management</option>');
  $('#txtClass').append('<option value="CBTE 206">CBTE 206 - Electronic Records Management</option>');
  $('#txtClass').append('<option value="CBTE 210">CBTE 210 - Computers in Business</option>');
  $('#txtClass').append('<option value="CBTE 211">CBTE 211 - Office Administration</option>');
  $('#txtClass').append('<option value="CBTE 221">CBTE 221 - Legal Secretary Skills & Proc.</option>');

 }else if($('#txtSubject').val()=='CHEM'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="CHEM 16">CHEM 16 - Workshop for Intro Gen Chem</option>');
  $('#txtClass').append('<option value="CHEM 20">CHEM 20 - Intro to Gen Chem Refresher</option>');
  $('#txtClass').append('<option value="CHEM 100">CHEM 100 - Fundamentals of Chemistry</option>');
  $('#txtClass').append('<option value="CHEM 100L">CHEM 100L - Fundamental of Chem Lab</option>');
  $('#txtClass').append('<option value="CHEM 103">CHEM 103 - GOB Chemistry</option>');
  $('#txtClass').append('<option value="CHEM 111">CHEM 111 - Chemistry in Society</option>');
  
  $('#txtClass').append('<option value="CHEM 130">CHEM 130 - Intro/Organic & Biologicl Chem</option>');
  $('#txtClass').append('<option value="CHEM 130L">CHEM 130L - Intro/Organic/Biologc Chem Lab</option>');
  $('#txtClass').append('<option value="CHEM 152">CHEM 152 - Intro to General Chemistry</option>');
  $('#txtClass').append('<option value="CHEM 152L">CHEM 152L - Intro to General Chem Lab</option>');
  $('#txtClass').append('<option value="CHEM 160">CHEM 160 - Introductory Biochemistry</option>');
  $('#txtClass').append('<option value="CHEM 200">CHEM 200 - General Chemistry I Lecture</option>');
  $('#txtClass').append('<option value="CHEM 200L">CHEM 200L - General Chemistry I Laboratory</option>');
  $('#txtClass').append('<option value="CHEM 201">CHEM 201 - General Chemistry II Lecture</option>');
  $('#txtClass').append('<option value="CHEM 201L">CHEM 201L - General Chemistry II Lab</option>');
  $('#txtClass').append('<option value="CHEM 231">CHEM 231 - Organic Chemistry I - Lecture</option>');
  $('#txtClass').append('<option value="CHEM 231L">CHEM 231L - Organic Chemistry I Laboratory</option>');
  $('#txtClass').append('<option value="CHEM 233">CHEM 233 - Organic Chemistry II-Lecture</option>');
  $('#txtClass').append('<option value="CHEM 233L">CHEM 233L - Organic Chem II Laboratory</option>');
  $('#txtClass').append('<option value="CHEM 251">CHEM 251 - Quantitative Analytical Chem</option>');
  $('#txtClass').append('<option value="CHEM 277D">CHEM 277D - Service Learning-On Campus</option>');
  $('#txtClass').append('<option value="CHEM 290">CHEM 290 - Independent Study</option>');

 }else if($('#txtSubject').val()=='CHIC'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="CHIC 110A">CHIC 110A - Intro to Chicana/o Studies</option>');
  $('#txtClass').append('<option value="CHIC 110A">CHIC 110A - Intro to Chicano Studies</option>');
  $('#txtClass').append('<option value="CHIC 110B">CHIC 110B - Intro to Chicano Studies</option>');
  $('#txtClass').append('<option value="CHIC 130">CHIC 130 - Mexican Lit in Translation</option>');
  $('#txtClass').append('<option value="CHIC 135">CHIC 135 - Chicana/o Literature</option>');
  $('#txtClass').append('<option value="CHIC 138">CHIC 138 - Lit/La Raza/Lat Amer in Transl</option>');
  $('#txtClass').append('<option value="CHIC 141A">CHIC 141A - U.S. History/Chicano Perspectv</option>');
  $('#txtClass').append('<option value="CHIC 141B">CHIC 141B - U.S. History/Chicano Perspectv</option>');
  $('#txtClass').append('<option value="CHIC 150">CHIC 150 - History of Mexico</option>');
  $('#txtClass').append('<option value="CHIC 170">CHIC 170 - La Chicana</option>');
  $('#txtClass').append('<option value="CHIC 190">CHIC 190 - Chicano Images in Film</option>');
  $('#txtClass').append('<option value="CHIC 201">CHIC 201 - Indigenous Mexico/Mesoamerica</option>');
  $('#txtClass').append('<option value="CHIC 210">CHIC 210 - Chicano Culture</option>');
  $('#txtClass').append('<option value="CHIC 230">CHIC 230 - Chicano Art</option>');

 }else if($('#txtSubject').val()=='CHIL'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="CHIL 101">CHIL 101 - Human Growth & Development</option>');
  $('#txtClass').append('<option value="CHIL 103">CHIL 103 - Lifespan Development</option>');
  
  $('#txtClass').append('<option value="CHIL 121">CHIL 121 - Curriculum: Art</option>');
  $('#txtClass').append('<option value="CHIL 131">CHIL 131 - Curriculum: Language/Science</option>');
  $('#txtClass').append('<option value="CHIL 133">CHIL 133 - Language and Literacy</option>');
  $('#txtClass').append('<option value="CHIL 141">CHIL 141 - The Child, Family & Community</option>');
  $('#txtClass').append('<option value="CHIL 151">CHIL 151 - Program Planning</option>');
  $('#txtClass').append('<option value="CHIL 153">CHIL 153 - Tech of Teaching/Reggio Emilia</option>');
  $('#txtClass').append('<option value="CHIL 160">CHIL 160 - Obser & Understanding Children</option>');
  $('#txtClass').append('<option value="CHIL 161">CHIL 161 - Obser/Issues in Child Devel</option>');
  $('#txtClass').append('<option value="CHIL 162">CHIL 162 - Observing/Guiding Child Behav</option>');
  $('#txtClass').append('<option value="CHIL 165">CHIL 165 - Children With Special Needs</option>');
  $('#txtClass').append('<option value="CHIL 166">CHIL 166 - Diverse Learners</option>');
  $('#txtClass').append('<option value="CHIL 166">CHIL 166 - Special Needs Curriculum</option>');
  $('#txtClass').append('<option value="CHIL 175">CHIL 175 - Infant-Toddler Growth & Dev.</option>');
  $('#txtClass').append('<option value="CHIL 176">CHIL 176 - Prin of Infant-Toddler Caregiv</option>');
  $('#txtClass').append('<option value="CHIL 176">CHIL 176 - Prin of Infant/Toddler Caregiv</option>');
  $('#txtClass').append('<option value="CHIL 180">CHIL 180 - Nutrition, Health/Safety/Child</option>');
  $('#txtClass').append('<option value="CHIL 188">CHIL 188 - Violence Child/Family</option>');
  $('#txtClass').append('<option value="CHIL 202">CHIL 202 - Admin of Early Childhood Progm</option>');
  $('#txtClass').append('<option value="CHIL 210">CHIL 210 - Supervis/Early Childhood Progm</option>');
  $('#txtClass').append('<option value="CHIL 215">CHIL 215 - Adlt Superv/Mentor Ec</option>');
  $('#txtClass').append('<option value="CHIL 270">CHIL 270 - Work Experience</option>');
  $('#txtClass').append('<option value="CHIL 275">CHIL 275 - Supervised Field Study</option>');
  $('#txtClass').append('<option value="CHIL 291">CHIL 291 - Child Dev Lab Practicum</option>');
  $('#txtClass').append('<option value="CHIL 291A">CHIL 291A - Child Devel Center Practicum</option>');
  $('#txtClass').append('<option value="CHIL 291B">CHIL 291B - Child Devel Center Practicum</option>');
  $('#txtClass').append('<option value="CHIL 291C">CHIL 291C - Child Devel Center Practicum</option>');
  $('#txtClass').append('<option value="CHIL 291D">CHIL 291D - Child Devel Center Practicum</option>');

 }else if($('#txtSubject').val()=='CHIN'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="CHIN 101">CHIN 101 - First Course Mandarin Chinese</option>');
  $('#txtClass').append('<option value="CHIN 102">CHIN 102 - Second Course Mandarin Chinese</option>');
  $('#txtClass').append('<option value="CHIN 201">CHIN 201 - Third Course Mandarin Chinese</option>');
  $('#txtClass').append('<option value="CHIN 202">CHIN 202 - Fourth Course Mandarin Chinese</option>');
  $('#txtClass').append('<option value="CHIN 210">CHIN 210 - Conv. & Comp in Chinese I</option>');
  $('#txtClass').append('<option value="CHIN 211">CHIN 211 - Conv. and Comp. in Chinese II</option>');

 }else if($('#txtSubject').val()=='CISC'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="CISC 71">CISC 71 - Microcontroller Programming</option>');
  $('#txtClass').append('<option value="CISC 106">CISC 106 - Computer Sci & Applied Program</option>');
  $('#txtClass').append('<option value="CISC 106">CISC 106 - Intro to Computer Science</option>');
  $('#txtClass').append('<option value="CISC 150">CISC 150 - Intro to Computer/Infor Scienc</option>');
  $('#txtClass').append('<option value="CISC 152">CISC 152 - Intro to Linux</option>');
  $('#txtClass').append('<option value="CISC 179">CISC 179 - Python Programming</option>');
  $('#txtClass').append('<option value="CISC 181">CISC 181 - Principles of Info Systems</option>');
  $('#txtClass').append('<option value="CISC 182">CISC 182 - Information Technology Fluency</option>');
  $('#txtClass').append('<option value="CISC 183">CISC 183 - Web Development Ruby on Rails</option>');
  $('#txtClass').append('<option value="CISC 186">CISC 186 - Visual Basic Programming</option>');
  $('#txtClass').append('<option value="CISC 187">CISC 187 - Data Structures in C++</option>');
  $('#txtClass').append('<option value="CISC 190">CISC 190 - Java Programming</option>');
  $('#txtClass').append('<option value="CISC 191">CISC 191 - Intermediate Java Programming</option>');
  $('#txtClass').append('<option value="CISC 192">CISC 192 - C/C++ Programming</option>');
  $('#txtClass').append('<option value="CISC 193">CISC 193 - Microsoft C# Swe 1</option>');
  $('#txtClass').append('<option value="CISC 201">CISC 201 - Advanced C++ Programming</option>');
  $('#txtClass').append('<option value="CISC 205">CISC 205 - OOPC++</option>');
  $('#txtClass').append('<option value="CISC 210">CISC 210 - Systems Analysis and Design</option>');
  $('#txtClass').append('<option value="CISC 211">CISC 211 - Computer Org and Assembly Lang</option>');
  $('#txtClass').append('<option value="CISC 220">CISC 220 - Fundamentals Game Programming</option>');
  $('#txtClass').append('<option value="CISC 221">CISC 221 - Intermediate Game Programming</option>');
  $('#txtClass').append('<option value="CISC 246">CISC 246 - Discrete Math for Computer Sci</option>');
  $('#txtClass').append('<option value="CISC 290">CISC 290 - Independent Study</option>');
  $('#txtClass').append('<option value="CISC 401">CISC 401 - Databse Mgmt Design</option>');

 }else if($('#txtSubject').val()=='COMS'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="COMS 101">COMS 101 - Voice and Articulation</option>');
  $('#txtClass').append('<option value="COMS 103">COMS 103 - Oral Communication</option>');
  $('#txtClass').append('<option value="COMS 104">COMS 104 - Advanced Public Communication</option>');
  $('#txtClass').append('<option value="COMS 111">COMS 111 - Oral Interpretation</option>');
  $('#txtClass').append('<option value="COMS 117A">COMS 117A - Intercollegiate Forensics</option>');
  $('#txtClass').append('<option value="COMS 117B">COMS 117B - Intercollegiate Forensics</option>');
  $('#txtClass').append('<option value="COMS 117C">COMS 117C - Intercollegiate Forensics</option>');
  $('#txtClass').append('<option value="COMS 117D">COMS 117D - Intercollegiate Forensics</option>');
  $('#txtClass').append('<option value="COMS 135">COMS 135 - Interpersonal Communication</option>');
  $('#txtClass').append('<option value="COMS 160">COMS 160 - Argumentation</option>');
  $('#txtClass').append('<option value="COMS 170">COMS 170 - Small Group Communication</option>');
  $('#txtClass').append('<option value="COMS 180">COMS 180 - Intercultural Communication</option>');
  $('#txtClass').append('<option value="COMS 201">COMS 201 - Communication and Community</option>');
  $('#txtClass').append('<option value="COMS 290">COMS 290 - Independent Study</option>');

 }else if($('#txtSubject').val()=='CONF'){
  $('#txtClass').append('<option value="">All</option>');

 }else if($('#txtSubject').val()=='COSM'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="COSM 50">COSM 50 - Rules, Regs, & Physiology</option>');
  $('#txtClass').append('<option value="COSM 50">COSM 50 - Rules/Regulations/Physiology</option>');
  $('#txtClass').append('<option value="COSM 50L">COSM 50L - Fundamentals of Cosmetology</option>');
  $('#txtClass').append('<option value="COSM 55">COSM 55 - Introductory Esthetician</option>');
  $('#txtClass').append('<option value="COSM 55L">COSM 55L - Introductory Esthetician Lab</option>');
  $('#txtClass').append('<option value="COSM 60">COSM 60 - Skin Diseases and Disorders</option>');
  $('#txtClass').append('<option value="COSM 60L">COSM 60L - Intermed Cosmetology Lab I</option>');
  $('#txtClass').append('<option value="COSM 65">COSM 65 - Advanced Esthetician</option>');
  $('#txtClass').append('<option value="COSM 65L">COSM 65L - Advanced Esthetician Lab</option>');
  $('#txtClass').append('<option value="COSM 70">COSM 70 - Chemistry & Chemical Services</option>');
  $('#txtClass').append('<option value="COSM 70L">COSM 70L - Intermed Cosmetology Lab II</option>');
  $('#txtClass').append('<option value="COSM 75">COSM 75 - Advanced Makeup</option>');
  $('#txtClass').append('<option value="COSM 80L">COSM 80L - Advanced Cosmetology Lab I</option>');
  $('#txtClass').append('<option value="COSM 81">COSM 81 - Basic Business Practices</option>');
  $('#txtClass').append('<option value="COSM 85">COSM 85 - Nail Technician I</option>');
  $('#txtClass').append('<option value="COSM 86">COSM 86 - Nail Technician II</option>');
  $('#txtClass').append('<option value="COSM 90L">COSM 90L - Advanced Cosmetology Lab II</option>');
  $('#txtClass').append('<option value="COSM 92">COSM 92 - Extended Lab Practice</option>');
  $('#txtClass').append('<option value="COSM 93">COSM 93 - Esthetician Extended Lab</option>');
  $('#txtClass').append('<option value="COSM 95">COSM 95 - State Board Review</option>');

 }else if($('#txtSubject').val()=='CRES'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="CRES 101">CRES 101 - Conflict Res</option>');

 }else if($('#txtSubject').val()=='DANC'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="DANC 110A">DANC 110A - Ballet I</option>');
  $('#txtClass').append('<option value="DANC 110B">DANC 110B - Ballet II</option>');
  $('#txtClass').append('<option value="DANC 110C">DANC 110C - Ballet III</option>');
  $('#txtClass').append('<option value="DANC 110D">DANC 110D - Ballet IV</option>');
  $('#txtClass').append('<option value="DANC 111">DANC 111 - Ethnic Dance Forms</option>');
  $('#txtClass').append('<option value="DANC 111">DANC 111 - Global Dance Traditions</option>');
  $('#txtClass').append('<option value="DANC 115A">DANC 115A - Tap I</option>');
  $('#txtClass').append('<option value="DANC 115B">DANC 115B - Tap Dance II</option>');
  $('#txtClass').append('<option value="DANC 115C">DANC 115C - Tap Dance III</option>');
  $('#txtClass').append('<option value="DANC 115D">DANC 115D - Tap Dance IV</option>');
  $('#txtClass').append('<option value="DANC 120A">DANC 120A - Hip Hop I</option>');
  $('#txtClass').append('<option value="DANC 120B">DANC 120B - Hip Hop II</option>');
  $('#txtClass').append('<option value="DANC 120C">DANC 120C - Hip Hop III</option>');
  $('#txtClass').append('<option value="DANC 120D">DANC 120D - Hip Hop IV</option>');
  $('#txtClass').append('<option value="DANC 125A">DANC 125A - Latin American Dance I</option>');
  $('#txtClass').append('<option value="DANC 125B">DANC 125B - Latin American Dance II</option>');
  $('#txtClass').append('<option value="DANC 126A">DANC 126A - Mid-Eastern Dance I</option>');
  $('#txtClass').append('<option value="DANC 126B">DANC 126B - Mid-Eastern Dance II</option>');
  $('#txtClass').append('<option value="DANC 126C">DANC 126C - Belly Dance III</option>');
  $('#txtClass').append('<option value="DANC 126D">DANC 126D - Belly Dance IV</option>');
  $('#txtClass').append('<option value="DANC 127">DANC 127 - Movement for Wellness</option>');
  $('#txtClass').append('<option value="DANC 135A">DANC 135A - Jazz Dance I</option>');
  $('#txtClass').append('<option value="DANC 135B">DANC 135B - Jazz Dance II</option>');
  $('#txtClass').append('<option value="DANC 135C">DANC 135C - Jazz Dance III</option>');
  $('#txtClass').append('<option value="DANC 135D">DANC 135D - Jazz Dance IV</option>');
  $('#txtClass').append('<option value="DANC 140A">DANC 140A - Modern Dance I</option>');
  $('#txtClass').append('<option value="DANC 140B">DANC 140B - Modern Dance II</option>');
  $('#txtClass').append('<option value="DANC 140C">DANC 140C - Modern Dance III</option>');
  $('#txtClass').append('<option value="DANC 140D">DANC 140D - Modern Dance IV</option>');
  $('#txtClass').append('<option value="DANC 145A">DANC 145A - Ballroom Dance I</option>');
  $('#txtClass').append('<option value="DANC 145B">DANC 145B - Ballroom Dance II</option>');
  $('#txtClass').append('<option value="DANC 150A">DANC 150A - Dance Making: Ballet</option>');
  $('#txtClass').append('<option value="DANC 151A">DANC 151A - Dance Making: Jazz</option>');
  $('#txtClass').append('<option value="DANC 152A">DANC 152A - Dance Making: Modern</option>');
  $('#txtClass').append('<option value="DANC 153A">DANC 153A - Dance Making: Dance Theatre</option>');
  $('#txtClass').append('<option value="DANC 160A">DANC 160A - Pilates - Mat I</option>');
  $('#txtClass').append('<option value="DANC 160B">DANC 160B - Pilates Mat II</option>');
  $('#txtClass').append('<option value="DANC 177A">DANC 177A - Dance Improvisation</option>');
  $('#txtClass').append('<option value="DANC 177B">DANC 177B - Dance Improvisation II</option>');
  $('#txtClass').append('<option value="DANC 178A">DANC 178A - Advanced Commercial Dance I</option>');
  $('#txtClass').append('<option value="DANC 181">DANC 181 - History of Dance</option>');
  $('#txtClass').append('<option value="DANC 183">DANC 183 - Music for Dance</option>');
  $('#txtClass').append('<option value="DANC 253">DANC 253 - Choreography</option>');
  $('#txtClass').append('<option value="DANC 261A">DANC 261A - Dance Performance I</option>');
  $('#txtClass').append('<option value="DANC 261B">DANC 261B - Dance Performance II</option>');
  $('#txtClass').append('<option value="DANC 261C">DANC 261C - Dance Performance III</option>');
  $('#txtClass').append('<option value="DANC 261D">DANC 261D - Dance Performance IV</option>');
  $('#txtClass').append('<option value="DANC 271A">DANC 271A - Stage Costuming for Dance</option>');
  $('#txtClass').append('<option value="DANC 271B">DANC 271B - Makeup for Dance Productions</option>');
  $('#txtClass').append('<option value="DANC 271C">DANC 271C - Lighting Design for Dance Prod</option>');
  $('#txtClass').append('<option value="DANC 271D">DANC 271D - Sound Design for Dance Prod</option>');
  $('#txtClass').append('<option value="DANC 290">DANC 290 - Independent Study</option>');

 }else if($('#txtSubject').val()=='DENA'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="DENA 50">DENA 50 - Dental Communications</option>');
  $('#txtClass').append('<option value="DENA 54">DENA 54 - Basic Dental Assisting</option>');
  $('#txtClass').append('<option value="DENA 54L">DENA 54L - Basic Dental Assisting Lab</option>');
  $('#txtClass').append('<option value="DENA 56">DENA 56 - Basic Dental Science</option>');
  $('#txtClass').append('<option value="DENA 58">DENA 58 - Preventive Dental Care</option>');
  $('#txtClass').append('<option value="DENA 58L">DENA 58L - Preventive Dental Care Lab</option>');
  $('#txtClass').append('<option value="DENA 60">DENA 60 - Clinical Business Management</option>');
  $('#txtClass').append('<option value="DENA 60L">DENA 60L - Clinical Bus Mgmt Lab</option>');
  $('#txtClass').append('<option value="DENA 62">DENA 62 - Dental Specialties I</option>');
  $('#txtClass').append('<option value="DENA 62L">DENA 62L - Dental Specialties I Lab</option>');
  $('#txtClass').append('<option value="DENA 82">DENA 82 - Dental Specialties II</option>');
  $('#txtClass').append('<option value="DENA 82L">DENA 82L - Dental Specialties II Lab</option>');
  $('#txtClass').append('<option value="DENA 83A">DENA 83A - Directed Clinical Practice</option>');
  $('#txtClass').append('<option value="DENA 83B">DENA 83B - Directed Clinical Practice</option>');
  $('#txtClass').append('<option value="DENA 117">DENA 117 - Dental Materials</option>');
  $('#txtClass').append('<option value="DENA 117L">DENA 117L - Dental Materials - Lab</option>');
  $('#txtClass').append('<option value="DENA 129">DENA 129 - Dental Radiography I</option>');
  $('#txtClass').append('<option value="DENA 129L">DENA 129L - Dental Radiography Lab</option>');
  $('#txtClass').append('<option value="DENA 139">DENA 139 - Dental Radiography II</option>');

 }else if($('#txtSubject').val()=='DFLM'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="DFLM 101">DFLM 101 - Introduction to Film</option>');
  $('#txtClass').append('<option value="DFLM 102">DFLM 102 - The American Cinema</option>');

 }else if($('#txtSubject').val()=='DIES'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="DIES 90">DIES 90 - Forklift Operation</option>');
  $('#txtClass').append('<option value="DIES 100">DIES 100 - Intro to Diesel Technology</option>');
  $('#txtClass').append('<option value="DIES 101">DIES 101 - Heavy Truck & Equipment Maint.</option>');
  $('#txtClass').append('<option value="DIES 102">DIES 102 - Heavy Duty Truck HVAC</option>');
  $('#txtClass').append('<option value="DIES 105">DIES 105 - Measuring Tools/Applied Math</option>');
  $('#txtClass').append('<option value="DIES 121">DIES 121 - Diesel Engines A</option>');
  $('#txtClass').append('<option value="DIES 122">DIES 122 - Diesel Engines B</option>');
  $('#txtClass').append('<option value="DIES 123">DIES 123 - Diesel Engines C</option>');
  $('#txtClass').append('<option value="DIES 124">DIES 124 - Diesel Engines D</option>');
  $('#txtClass').append('<option value="DIES 131">DIES 131 - Alternative-Fueled Engine IV</option>');
  $('#txtClass').append('<option value="DIES 135">DIES 135 - Applied Failure Analysis</option>');
  $('#txtClass').append('<option value="DIES 137">DIES 137 - Diesel Fuel Injection Systems</option>');
  $('#txtClass').append('<option value="DIES 137A">DIES 137A - Adv Diesel Fuel Injection Syst</option>');
  $('#txtClass').append('<option value="DIES 138">DIES 138 - Electrical Systems</option>');
  $('#txtClass').append('<option value="DIES 144">DIES 144 - Electronics for Diesel Techy</option>');
  $('#txtClass').append('<option value="DIES 155">DIES 155 - Air Brake Systems</option>');
  $('#txtClass').append('<option value="DIES 160">DIES 160 - H.D. Manual Transmission</option>');
  $('#txtClass').append('<option value="DIES 165">DIES 165 - Truck Automatic Transmissions</option>');
  $('#txtClass').append('<option value="DIES 170">DIES 170 - Truck Drive Axles/Specifica.</option>');
  $('#txtClass').append('<option value="DIES 175">DIES 175 - Truck Chassis R&R</option>');
  $('#txtClass').append('<option value="DIES 180">DIES 180 - Steering/Suspension/Driveline</option>');
  $('#txtClass').append('<option value="DIES 200">DIES 200 - Mobile Hydraulic Systems</option>');
  $('#txtClass').append('<option value="DIES 210">DIES 210 - Brakes/Final Drives/Steering</option>');
  $('#txtClass').append('<option value="DIES 220">DIES 220 - Undercarriage</option>');
  $('#txtClass').append('<option value="DIES 230">DIES 230 - Heavy Equipment Transmissions</option>');
  $('#txtClass').append('<option value="DIES 240">DIES 240 - Equipment Chassis R&R</option>');

 }else if($('#txtSubject').val()=='DJRN'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="DJRN 100">DJRN 100 - Mass Media in the Digital Age</option>');
  $('#txtClass').append('<option value="DJRN 200">DJRN 200 - Newswriting for Multimedia</option>');
  $('#txtClass').append('<option value="DJRN 204">DJRN 204 - Social Media in the Digital Age</option');
  $('#txtClass').append('<option value="DJRN 210">DJRN 210 - Reporting and Editing</option>');
  $('#txtClass').append('<option value="DJRN 211">DJRN 211 - Online News Concepts</option>');
  $('#txtClass').append('<option value="DJRN 212">DJRN 212 - News Publication Management</option>');
  $('#txtClass').append('<option value="DJRN 213">DJRN 213 - Advanced News Management</option>');

 }else if($('#txtSubject').val()=='DRAM'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="DRAM 70">DRAM 70 - Video Production for the Drama</option>');
  $('#txtClass').append('<option value="DRAM 71">DRAM 71 - Digital Video Production II</option>');
  $('#txtClass').append('<option value="DRAM 100A">DRAM 100A - Fundament of Perfom & Prod I</option>');
  $('#txtClass').append('<option value="DRAM 100B">DRAM 100B - Fundament of Perform & Prod II</option>');
  $('#txtClass').append('<option value="DRAM 104A">DRAM 104A - Theatre Company Performance I</option>');
  $('#txtClass').append('<option value="DRAM 104B">DRAM 104B - Theatre Company Performance II</option>');
  $('#txtClass').append('<option value="DRAM 105">DRAM 105 - Introduction to Dramatic Arts</option>');
  $('#txtClass').append('<option value="DRAM 106">DRAM 106 - Acting for Radio/Voice-Over</option>');
  $('#txtClass').append('<option value="DRAM 107">DRAM 107 - Study of Filmed Plays</option>');
  $('#txtClass').append('<option value="DRAM 108">DRAM 108 - Playwriting</option>');
  $('#txtClass').append('<option value="DRAM 109">DRAM 109 - Theater and Social Issues</option>');
  $('#txtClass').append('<option value="DRAM 112">DRAM 112 - Intro to Script Analysis</option>');
  $('#txtClass').append('<option value="DRAM 118">DRAM 118 - Intermediate Playwriting</option>');
  $('#txtClass').append('<option value="DRAM 119">DRAM 119 - Acting for Film & Television</option>');
  $('#txtClass').append('<option value="DRAM 123">DRAM 123 - Beginning Stagecraft</option>');
  $('#txtClass').append('<option value="DRAM 124">DRAM 124 - Makeup for the Stage</option>');
  $('#txtClass').append('<option value="DRAM 126">DRAM 126 - Advanced Stagecraft</option>');
  $('#txtClass').append('<option value="DRAM 129A">DRAM 129A - Beginning Scene Painting</option>');
  $('#txtClass').append('<option value="DRAM 129B">DRAM 129B - Intermediate Scene Painting</option>');
  $('#txtClass').append('<option value="DRAM 132">DRAM 132 - Beginning Acting</option>');
  $('#txtClass').append('<option value="DRAM 133">DRAM 133 - Intermed Acting</option>');
  $('#txtClass').append('<option value="DRAM 134">DRAM 134 - Beginning Voice for Actors</option>');
  $('#txtClass').append('<option value="DRAM 143">DRAM 143 - Beginning Costuming</option>');
  $('#txtClass').append('<option value="DRAM 144A">DRAM 144A - Beg Spec Effects Stage Makeup</option>');
  $('#txtClass').append('<option value="DRAM 144B">DRAM 144B - Intermediate FX Makeup</option>');
  $('#txtClass').append('<option value="DRAM 145A">DRAM 145A - Intro. Theatre Glam.- Events</option>');
  $('#txtClass').append('<option value="DRAM 146A">DRAM 146A - Beg FX Practicum: Character</option>');
  $('#txtClass').append('<option value="DRAM 146B">DRAM 146B - Int. FX Practicum: Creature</option>');
  $('#txtClass').append('<option value="DRAM 146C">DRAM 146C - Intro. Glam Practicum: Events</option>');
  $('#txtClass').append('<option value="DRAM 150">DRAM 150 - Cinema as Art/Communication I</option>');
  $('#txtClass').append('<option value="DRAM 151">DRAM 151 - Cinema as Art/Communication II</option>');
  $('#txtClass').append('<option value="DRAM 165">DRAM 165 - Introduction to Stage Movement</option>');
  $('#txtClass').append('<option value="DRAM 200A">DRAM 200A - Fundamen of Perform & Prod III</option>');
  $('#txtClass').append('<option value="DRAM 200B">DRAM 200B - Fundament of Perform & Prod IV</option>');
  $('#txtClass').append('<option value="DRAM 204A">DRAM 204A - Theatre Company Perform III</option>');
  $('#txtClass').append('<option value="DRAM 204B">DRAM 204B - Theatre Company Performance IV</option>');
  $('#txtClass').append('<option value="DRAM 205">DRAM 205 - The American Musical on Stage and Screen</option');
  $('#txtClass').append('<option value="DRAM 240A">DRAM 240A - Musical Theater Repertoire</option>');
  $('#txtClass').append('<option value="DRAM 240B">DRAM 240B - Musical Theatre Repertoire II</option>');
  $('#txtClass').append('<option value="DRAM 240C">DRAM 240C - Musical Theatre Repertoire III</option>');
  $('#txtClass').append('<option value="DRAM 240D">DRAM 240D - Musical Theatre Repertoire IV</option>');
  $('#txtClass').append('<option value="DRAM 242A">DRAM 242A - Rehearsal and Performance I</option>');
  $('#txtClass').append('<option value="DRAM 242B">DRAM 242B - Rehearsal and Performance II</option>');
  $('#txtClass').append('<option value="DRAM 242C">DRAM 242C - Rehearsal and Performance III</option>');
  $('#txtClass').append('<option value="DRAM 242D">DRAM 242D - Rehearsal and Performance IV</option>');
  $('#txtClass').append('<option value="DRAM 243C">DRAM 243C - Crew - Scenic</option>');
  $('#txtClass').append('<option value="DRAM 244A">DRAM 244A - Theatre Workshop I</option>');
  $('#txtClass').append('<option value="DRAM 244B">DRAM 244B - Theatre Workshop II</option>');
  $('#txtClass').append('<option value="DRAM 244C">DRAM 244C - Theatre Workshop III</option>');
  $('#txtClass').append('<option value="DRAM 244D">DRAM 244D - Theatre Workshop IV</option>');
  $('#txtClass').append('<option value="DRAM 268">DRAM 268 - Experimental Theater</option>');

 }else if($('#txtSubject').val()=='DSPS'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="DSPS 21">DSPS 21 - Accessible Computer Lab</option>');
  $('#txtClass').append('<option value="DSPS 34">DSPS 34 - College Success Skills</option>');
  $('#txtClass').append('<option value="DSPS 40">DSPS 40 - Indiv Assesst and Ed Planning</option>');
  $('#txtClass').append('<option value="DSPS 42">DSPS 42 - Basic Skills Applied Study Str</option>');
  $('#txtClass').append('<option value="DSPS 44">DSPS 44 - Supervised Tutoring/Dsps</option>');

 }else if($('#txtSubject').val()=='ECON'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="ECON 120">ECON 120 - Principles of Macroeconomics</option>');
  $('#txtClass').append('<option value="ECON 121">ECON 121 - Principles of Microeconomics</option>');
  $('#txtClass').append('<option value="ECON 220">ECON 220 - Economics of the Environment</option>');

 }else if($('#txtSubject').val()=='EDUC'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="EDUC 100">EDUC 100 - Tutor Training</option>');
  $('#txtClass').append('<option value="EDUC 200">EDUC 200 - Teaching as a Profession</option>');
  $('#txtClass').append('<option value="EDUC 203">EDUC 203 - Field Exper. for Prosp Tchers</option>');
  $('#txtClass').append('<option value="EDUC 211">EDUC 211 - Field Experience: Math/Science</option>');

 }else if($('#txtSubject').val()=='EGEE'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="EGEE 50">EGEE 50 - Building Science Principles</option>');
  $('#txtClass').append('<option value="EGEE 55">EGEE 55 - Air Qlty Mgmt. and Sys.</option>');
  $('#txtClass').append('<option value="EGEE 70">EGEE 70 - Energy Industry Principles</option>');
  $('#txtClass').append('<option value="EGEE 72">EGEE 72 - Energy Conservation Strategies</option>');

 }else if($('#txtSubject').val()=='ELAC'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="ELAC 5A">ELAC 5A - Engl Lang Gram - Low Int/Int</option>');
  $('#txtClass').append('<option value="ELAC 5B">ELAC 5B - Grammar - High Interm/Adv</option>');
  $('#txtClass').append('<option value="ELAC 7">ELAC 7 - English Pronunciation</option>');
  $('#txtClass').append('<option value="ELAC 15">ELAC 15 - Intro Engl Lit & Comm</option>');
  $('#txtClass').append('<option value="ELAC 16">ELAC 16 - Acc Engl Lang Acq - Low-interm</option>');
  $('#txtClass').append('<option value="ELAC 23">ELAC 23 - Academic List and Speak I</option>');
  $('#txtClass').append('<option value="ELAC 25">ELAC 25 - Intg Rdg, Wrtg, Grmr</option>');
  $('#txtClass').append('<option value="ELAC 26">ELAC 26 - Acc Engl Lang Acq - Interm</option>');
  $('#txtClass').append('<option value="ELAC 33">ELAC 33 - Academic List and Speak II</option>');
  $('#txtClass').append('<option value="ELAC 35">ELAC 35 - Intg Rdg, Wrtg, Grmr II</option>');
  $('#txtClass').append('<option value="ELAC 44">ELAC 44 - Supervised Tutoring</option>');
  $('#txtClass').append('<option value="ELAC 45">ELAC 45 - Intg Rdg, Wrtg, Grmr III</option>');
  $('#txtClass').append('<option value="ELAC 145">ELAC 145 - Intg Rdg, Wrtg, Grmr III</option>');

 }else if($('#txtSubject').val()=='ELCT'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="ELCT 20">ELCT 20 - Blueprint Reading, Electrician</option>');
  $('#txtClass').append('<option value="ELCT 44">ELCT 44 - Supervised Tutoring/Electricit</option>');
  $('#txtClass').append('<option value="ELCT 111">ELCT 111 - Electrical Theory I</option>');
  $('#txtClass').append('<option value="ELCT 111L">ELCT 111L - Electrical Laboratory I</option>');
  $('#txtClass').append('<option value="ELCT 121">ELCT 121 - Electrical Theory II</option>');
  $('#txtClass').append('<option value="ELCT 121L">ELCT 121L - Electrical Laboratory II</option>');
  $('#txtClass').append('<option value="ELCT 131">ELCT 131 - Electrical Theory III</option>');
  $('#txtClass').append('<option value="ELCT 131L">ELCT 131L - Electrical Laboratory III</option>');
  $('#txtClass').append('<option value="ELCT 141">ELCT 141 - Electrical Theory IV</option>');
  $('#txtClass').append('<option value="ELCT 141L">ELCT 141L - Electrical Laboratory IV</option>');
  $('#txtClass').append('<option value="ELCT 190">ELCT 190 - Electric Lineman IA</option>');
  $('#txtClass').append('<option value="ELCT 191">ELCT 191 - Electric Lineman 1B</option>');
  $('#txtClass').append('<option value="ELCT 192">ELCT 192 - Electric Lineman IIA</option>');
  $('#txtClass').append('<option value="ELCT 193">ELCT 193 - Electric Lineman IIB</option>');
  $('#txtClass').append('<option value="ELCT 194">ELCT 194 - Electric Lineman IIIA</option>');
  $('#txtClass').append('<option value="ELCT 195">ELCT 195 - Electric Lineman IIIB</option>');

 }else if($('#txtSubject').val()=='ELDT'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="ELDT 123">ELDT 123 - Intro to Digital Circuits</option>');
  $('#txtClass').append('<option value="ELDT 123L">ELDT 123L - Digital Circuits Laboratory</option>');
  $('#txtClass').append('<option value="ELDT 124">ELDT 124 - Basic DC Electronics</option>');
  $('#txtClass').append('<option value="ELDT 124L">ELDT 124L - Basic DC Laboratory</option>');
  $('#txtClass').append('<option value="ELDT 125">ELDT 125 - AC Circuit Analysis</option>');
  $('#txtClass').append('<option value="ELDT 125L">ELDT 125L - DC/AC Circ Analys Lab W/Pspice</option>');
  $('#txtClass').append('<option value="ELDT 143">ELDT 143 - Semiconductor Devices</option>');
  $('#txtClass').append('<option value="ELDT 143L">ELDT 143L - Semiconductor Devices Lab</option>');
  $('#txtClass').append('<option value="ELDT 144">ELDT 144 - OP-AMPS, Sensors & Computers</option>');
  $('#txtClass').append('<option value="ELDT 144L">ELDT 144L - OP-AMPS and Sensors Laboratory</option>');
  $('#txtClass').append('<option value="ELDT 225">ELDT 225 - Microcontrollers</option>');
  $('#txtClass').append('<option value="ELDT 225L">ELDT 225L - Microcontrollers Laboratory</option>');
  $('#txtClass').append('<option value="ELDT 228">ELDT 228 - Communication Circuits</option>');
  $('#txtClass').append('<option value="ELDT 228L">ELDT 228L - Commun. Circuits/Certific. Lab</option>');
  $('#txtClass').append('<option value="ELDT 229">ELDT 229 - Advanced Telecommun Networks</option>');
  $('#txtClass').append('<option value="ELDT 229L">ELDT 229L - Advanced Telecomms Netwks Lab</option>');

 }else if($('#txtSubject').val()=='EMGM'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="EMGM 50">EMGM 50 - CPR for Health Care Providers</option>');
  $('#txtClass').append('<option value="EMGM 50A">EMGM 50A - CPR for Health Care Providers</option>');
  $('#txtClass').append('<option value="EMGM 105A">EMGM 105A - Emergency Medical Technician</option>');
  $('#txtClass').append('<option value="EMGM 105B">EMGM 105B - Emergency Medical Technician Support </option');
  $('#txtClass').append('<option value="EMGM 106">EMGM 106 - Airway/Defibrillation Training</option>');
  $('#txtClass').append('<option value="EMGM 205">EMGM 205 - EMT to Paramedic Bridge</option>');
  $('#txtClass').append('<option value="EMGM 296">EMGM 296 - Indiv Instr in Emerg Med</option>');
  $('#txtClass').append('<option value="EMGM 350">EMGM 350 - Emt Recertification Course</option>');

 }else if($('#txtSubject').val()=='ENGE'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="ENGE 50A">ENGE 50A - Intro to Robot Team Proj Desig</option>');
  $('#txtClass').append('<option value="ENGE 50B">ENGE 50B - Intro to Robot Project Const</option>');
  $('#txtClass').append('<option value="ENGE 50C">ENGE 50C - Intro to Robot Testing/Deploy</option>');
  $('#txtClass').append('<option value="ENGE 50D">ENGE 50D - Adv Robot Team Project Design</option>');
  $('#txtClass').append('<option value="ENGE 50F">ENGE 50F - Adv Robot Team Project Testing</option>');
  $('#txtClass').append('<option value="ENGE 101">ENGE 101 - Introduction to Engineering</option>');
  $('#txtClass').append('<option value="ENGE 108">ENGE 108 - Dimensioning and Tolerancing</option>');
  $('#txtClass').append('<option value="ENGE 116">ENGE 116 - Comp. Methods in Enge</option>');
  $('#txtClass').append('<option value="ENGE 151">ENGE 151 - Engineering Drawing</option>');
  $('#txtClass').append('<option value="ENGE 200">ENGE 200 - Statics</option>');
  $('#txtClass').append('<option value="ENGE 210">ENGE 210 - Properties of Materials</option>');
  $('#txtClass').append('<option value="ENGE 240">ENGE 240 - Digital Systems</option>');
  $('#txtClass').append('<option value="ENGE 250">ENGE 250 - Dynamics</option>');
  $('#txtClass').append('<option value="ENGE 260">ENGE 260 - Electric Circuits</option>');

 }else if($('#txtSubject').val()=='ENGL'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="ENGL 31">ENGL 31 - Academic Literacy</option>');
  $('#txtClass').append('<option value="ENGL 36">ENGL 36 - Basic Creative Wrtg Wrkshp</option>');
  $('#txtClass').append('<option value="ENGL 42">ENGL 42 - College Readg & Study Skills I</option>');
  $('#txtClass').append('<option value="ENGL 43">ENGL 43 - English Review</option>');
  $('#txtClass').append('<option value="ENGL 44">ENGL 44 - Supervised Tutoring/English</option>');
  $('#txtClass').append('<option value="ENGL 47A">ENGL 47A - Reading, Writing, Reasoning</option>');
  $('#txtClass').append('<option value="ENGL 48">ENGL 48 - College Reading/StudySkills II</option>');
  $('#txtClass').append('<option value="ENGL 49">ENGL 49 - Basic Composition</option>');
  $('#txtClass').append('<option value="ENGL 101">ENGL 101 - Reading and Composition</option>');
  $('#txtClass').append('<option value="ENGL 101X">ENGL 101X - ENGL 31/ENGL 101</option>');
  $('#txtClass').append('<option value="ENGL 105">ENGL 105 - Composition and Literature</option>');
  $('#txtClass').append('<option value="ENGL 105X">ENGL 105X - English 31/English 105</option>');
  $('#txtClass').append('<option value="ENGL 202">ENGL 202 - Introduction to Linguistics</option>');
  $('#txtClass').append('<option value="ENGL 205">ENGL 205 - Criticl Thinkng/Intrmd Compstn</option>');
  $('#txtClass').append('<option value="ENGL 208">ENGL 208 - Introduction to Literature</option>');
  $('#txtClass').append('<option value="ENGL 209">ENGL 209 - Literary Approaches to Film</option>');
  $('#txtClass').append('<option value="ENGL 210">ENGL 210 - American Literature I</option>');
  $('#txtClass').append('<option value="ENGL 211">ENGL 211 - American Literature II</option>');
  $('#txtClass').append('<option value="ENGL 215">ENGL 215 - English Literature I: 800-1799</option>');
  $('#txtClass').append('<option value="ENGL 216">ENGL 216 - English Lit II: 1800-Present</option>');
  $('#txtClass').append('<option value="ENGL 220">ENGL 220 - Masterpieces of World Lit I</option>');
  $('#txtClass').append('<option value="ENGL 221">ENGL 221 - Masterpieces of World Lit II</option>');
  $('#txtClass').append('<option value="ENGL 230">ENGL 230 - Asian American Literature</option>');
  $('#txtClass').append('<option value="ENGL 237">ENGL 237 - Women in Literature</option>');
  $('#txtClass').append('<option value="ENGL 238">ENGL 238 - Evaluating Children&apos;s Lit</option>');
  $('#txtClass').append('<option value="ENGL 240">ENGL 240 - Shakespeare</option>');
  $('#txtClass').append('<option value="ENGL 245A">ENGL 245A - Writing Creative Nonfiction</option>');
  $('#txtClass').append('<option value="ENGL 245B">ENGL 245B - Advanced Creative Nonfiction</option>');
  $('#txtClass').append('<option value="ENGL 247A">ENGL 247A - Writing Seminar - Poetry</option>');
  $('#txtClass').append('<option value="ENGL 247B">ENGL 247B - Adv Poetry</option>');
  $('#txtClass').append('<option value="ENGL 249A">ENGL 249A - Intro Creative Writing I</option>');
  $('#txtClass').append('<option value="ENGL 249B">ENGL 249B - Intro Creative Writing II</option>');
  $('#txtClass').append('<option value="ENGL 252A">ENGL 252A - Fundamentals of Fiction Writin</option>');
  $('#txtClass').append('<option value="ENGL 252B">ENGL 252B - Intermediate Fiction Writing</option>');
  $('#txtClass').append('<option value="ENGL 401">ENGL 401 - Adv Writing for Healthcare Pro</option>');


 }else if($('#txtSubject').val()=='ENGN'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="ENGN 130">ENGN 130 - Intro to Engineering Design</option>');

 }else if($('#txtSubject').val()=='ESCR'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="ESCR 44">ESCR 44 - Supervised Tutoring/Escrow</option>');

 }else if($('#txtSubject').val()=='EXSC'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="EXSC 113A">EXSC 113A - Swimming I</option>');
  $('#txtClass').append('<option value="EXSC 113B">EXSC 113B - Swimming II</option>');
  $('#txtClass').append('<option value="EXSC 113C">EXSC 113C - Swimming III</option>');
  $('#txtClass').append('<option value="EXSC 113D">EXSC 113D - Swimming IV</option>');
  $('#txtClass').append('<option value="EXSC 114A">EXSC 114A - Aquatic Fitness I</option>');
  $('#txtClass').append('<option value="EXSC 114B">EXSC 114B - Aquatic Fitness II</option>');
  $('#txtClass').append('<option value="EXSC 114C">EXSC 114C - Aquatic Fitness III</option>');
  $('#txtClass').append('<option value="EXSC 114D">EXSC 114D - Aquatic Fitness IV</option>');
  $('#txtClass').append('<option value="EXSC 118">EXSC 118 - Lifeguard Training</option>');
  $('#txtClass').append('<option value="EXSC 119">EXSC 119 - Water Safety Instructor</option>');
  $('#txtClass').append('<option value="EXSC 124A">EXSC 124A - Aerobic/Core Conditioning I</option>');
  $('#txtClass').append('<option value="EXSC 124B">EXSC 124B - Aerobic/Core Conditioning II</option>');
  $('#txtClass').append('<option value="EXSC 124C">EXSC 124C - Aerobic/Core Conditioning III</option>');
  $('#txtClass').append('<option value="EXSC 124D">EXSC 124D - Aerobic/Core Conditioning IV</option>');
  $('#txtClass').append('<option value="EXSC 125A">EXSC 125A - Aerobic Dance I</option>');
  $('#txtClass').append('<option value="EXSC 125B">EXSC 125B - Aerobic Dance II</option>');
  $('#txtClass').append('<option value="EXSC 125C">EXSC 125C - Aerobic Dance III</option>');
  $('#txtClass').append('<option value="EXSC 125D">EXSC 125D - Aerobic Dance IV</option>');
  $('#txtClass').append('<option value="EXSC 126A">EXSC 126A - Cardio Conditioning I</option>');
  $('#txtClass').append('<option value="EXSC 126B">EXSC 126B - Cardio Conditioning II</option>');
  $('#txtClass').append('<option value="EXSC 126C">EXSC 126C - Cardio Conditioning III</option>');
  $('#txtClass').append('<option value="EXSC 126D">EXSC 126D - Cardio Conditioning IV</option>');
  $('#txtClass').append('<option value="EXSC 127A">EXSC 127A - Fund Cardio Kickboxing I</option>');
  $('#txtClass').append('<option value="EXSC 127B">EXSC 127B - Beginning Cardio Kickboxing II</option>');
  $('#txtClass').append('<option value="EXSC 127C">EXSC 127C - Inter Cardio Kickboxing III</option>');
  $('#txtClass').append('<option value="EXSC 127D">EXSC 127D - Advanced Cardio Kickboxing IV</option>');
  $('#txtClass').append('<option value="EXSC 130A">EXSC 130A - Indoor Cycling I</option>');
  $('#txtClass').append('<option value="EXSC 130B">EXSC 130B - Indoor Cycling II</option>');
  $('#txtClass').append('<option value="EXSC 130C">EXSC 130C - Indoor Cycling III</option>');
  $('#txtClass').append('<option value="EXSC 130D">EXSC 130D - Indoor Cycling IV</option>');
  $('#txtClass').append('<option value="EXSC 134">EXSC 134 - Adapted Weight Training</option>');
  $('#txtClass').append('<option value="EXSC 135A">EXSC 135A - Fundamental Individual Cond.</option>');
  $('#txtClass').append('<option value="EXSC 135B">EXSC 135B - Beginning Individual Condition</option>');
  $('#txtClass').append('<option value="EXSC 135C">EXSC 135C - Intermediate Individual Cond.</option>');
  $('#txtClass').append('<option value="EXSC 135D">EXSC 135D - Advanced Individual Cond.</option>');
  $('#txtClass').append('<option value="EXSC 136A">EXSC 136A - Sports Conditioning I</option>');
  $('#txtClass').append('<option value="EXSC 136B">EXSC 136B - Sports Conditioning II</option>');
  $('#txtClass').append('<option value="EXSC 139A">EXSC 139A - Weight Training I</option>');
  $('#txtClass').append('<option value="EXSC 139B">EXSC 139B - Weight Training II</option>');
  $('#txtClass').append('<option value="EXSC 139C">EXSC 139C - Weight Training III</option>');
  $('#txtClass').append('<option value="EXSC 139D">EXSC 139D - Weight Training IV</option>');
  $('#txtClass').append('<option value="EXSC 140A">EXSC 140A - Boot Camp I</option>');
  $('#txtClass').append('<option value="EXSC 140B">EXSC 140B - Boot Camp II</option>');
  $('#txtClass').append('<option value="EXSC 140C">EXSC 140C - Boot Camp III</option>');
  $('#txtClass').append('<option value="EXSC 140D">EXSC 140D - Boot Camp IV</option>');
  $('#txtClass').append('<option value="EXSC 141A">EXSC 141A - Total Body Conditioning I</option>');
  $('#txtClass').append('<option value="EXSC 141B">EXSC 141B - Total Body Conditioning II</option>');
  $('#txtClass').append('<option value="EXSC 141C">EXSC 141C - Total Body Conditioning III</option>');
  $('#txtClass').append('<option value="EXSC 142">EXSC 142 - Fund Hiking for Fitness I</option>');
  $('#txtClass').append('<option value="EXSC 144A">EXSC 144A - Fitness Walking I</option');
  $('#txtClass').append('<option value="EXSC 144B">EXSC 144B - Fitness Walking II</option');
  $('#txtClass').append('<option value="EXSC 144C">EXSC 144C - Finess Walking III</option');
  $('#txtClass').append('<option value="EXSC 144D">EXSC 144D - Fitness Walking IV</option');
  $('#txtClass').append('<option value="EXSC 145A">EXSC 145A - Yoga I-Fundamentals of Yoga</option>');
  $('#txtClass').append('<option value="EXSC 145B">EXSC 145B - Yoga II-Beginning Yoga</option>');
  $('#txtClass').append('<option value="EXSC 145C">EXSC 145C - Yoga III-Intermediate</option>');
  $('#txtClass').append('<option value="EXSC 145D">EXSC 145D - Yoga IV - Advanced Level</option>');
  $('#txtClass').append('<option value="EXSC 147A">EXSC 147A - Kickboxing I - Fundamental</option>');
  $('#txtClass').append('<option value="EXSC 147B">EXSC 147B - Kickboxing II - Beginning</option>');
  $('#txtClass').append('<option value="EXSC 147C">EXSC 147C - Kickboxing III-Intermediate</option>');
  $('#txtClass').append('<option value="EXSC 147D">EXSC 147D - Kickboxing IV-Advanced</option>');
  $('#txtClass').append('<option value="EXSC 148A">EXSC 148A - Martial Arts I-Fundamental</option>');
  $('#txtClass').append('<option value="EXSC 148B">EXSC 148B - Martial Arts II-Beginning</option>');
  $('#txtClass').append('<option value="EXSC 148C">EXSC 148C - Martial Arts III-Intermediate</option>');
  $('#txtClass').append('<option value="EXSC 148D">EXSC 148D - Martial Arts IV-Advanced</option>');
  $('#txtClass').append('<option value="EXSC 154A">EXSC 154A - Badminton I</option>');
  $('#txtClass').append('<option value="EXSC 154B">EXSC 154B - Badminton II</option>');
  $('#txtClass').append('<option value="EXSC 154C">EXSC 154C - Badminton III</option>');
  $('#txtClass').append('<option value="EXSC 154D">EXSC 154D - Badminton IV</option>');
  $('#txtClass').append('<option value="EXSC 156A">EXSC 156A - Baseball I</option>');
  $('#txtClass').append('<option value="EXSC 156B">EXSC 156B - Baseball II</option>');
  $('#txtClass').append('<option value="EXSC 156C">EXSC 156C - Baseball III</option>');
  $('#txtClass').append('<option value="EXSC 156D">EXSC 156D - Baseball IV</option>');
  $('#txtClass').append('<option value="EXSC 158A">EXSC 158A - Basketball I</option>');
  $('#txtClass').append('<option value="EXSC 158B">EXSC 158B - Basketball II</option>');
  $('#txtClass').append('<option value="EXSC 158C">EXSC 158C - Basketball III</option>');
  $('#txtClass').append('<option value="EXSC 158D">EXSC 158D - Basketball IV</option>');
  $('#txtClass').append('<option value="EXSC 159A">EXSC 159A - Bowling I</option>');
  $('#txtClass').append('<option value="EXSC 159B">EXSC 159B - Bowling II</option>');
  $('#txtClass').append('<option value="EXSC 159C">EXSC 159C - Bowling III</option>');
  $('#txtClass').append('<option value="EXSC 159D">EXSC 159D - Bowling IV</option>');
  $('#txtClass').append('<option value="EXSC 160A">EXSC 160A - Springboard Diving I</option>');
  $('#txtClass').append('<option value="EXSC 160B">EXSC 160B - Springboard Diving II</option>');
  $('#txtClass').append('<option value="EXSC 160C">EXSC 160C - Springboard Diving III</option>');
  $('#txtClass').append('<option value="EXSC 160D">EXSC 160D - Springboard Diving IV</option>');
  $('#txtClass').append('<option value="EXSC 164A">EXSC 164A - Football I</option>');
  $('#txtClass').append('<option value="EXSC 164B">EXSC 164B - Football II</option>');
  $('#txtClass').append('<option value="EXSC 164C">EXSC 164C - Football III</option>');
  $('#txtClass').append('<option value="EXSC 164D">EXSC 164D - Football IV</option>');
  $('#txtClass').append('<option value="EXSC 166A">EXSC 166A - Golf I</option>');
  $('#txtClass').append('<option value="EXSC 166B">EXSC 166B - Golf II</option>');
  $('#txtClass').append('<option value="EXSC 166C">EXSC 166C - Golf III</option>');
  $('#txtClass').append('<option value="EXSC 166D">EXSC 166D - Golf IV</option>');
  $('#txtClass').append('<option value="EXSC 168A">EXSC 168A - Men&apos;s Gymnastics I</option>');
  $('#txtClass').append('<option value="EXSC 168B">EXSC 168B - Men&apos;s Gymnastics II</option>');
  $('#txtClass').append('<option value="EXSC 168C">EXSC 168C - Men&apos;s Gymnastics III</option>');
  $('#txtClass').append('<option value="EXSC 168D">EXSC 168D - Men&apos;s Gymnastics IV</option>');
  $('#txtClass').append('<option value="EXSC 170A">EXSC 170A - Women&apos;s Gymnastics I</option>');
  $('#txtClass').append('<option value="EXSC 170B">EXSC 170B - Women&apos;s Gymnastics II</option>');
  $('#txtClass').append('<option value="EXSC 170C">EXSC 170C - Women&apos;s Gymnastics III</option>');
  $('#txtClass').append('<option value="EXSC 170D">EXSC 170D - Women&apos;s Gymnastics IV</option>');
  $('#txtClass').append('<option value="EXSC 174A">EXSC 174A - Soccer I</option>');
  $('#txtClass').append('<option value="EXSC 174B">EXSC 174B - Soccer II</option>');
  $('#txtClass').append('<option value="EXSC 174C">EXSC 174C - Soccer III</option>');
  $('#txtClass').append('<option value="EXSC 174D">EXSC 174D - Soccer IV</option>');
  $('#txtClass').append('<option value="EXSC 176A">EXSC 176A - Softball I</option>');
  $('#txtClass').append('<option value="EXSC 176B">EXSC 176B - Softball II</option>');
  $('#txtClass').append('<option value="EXSC 176C">EXSC 176C - Softball III</option>');
  $('#txtClass').append('<option value="EXSC 176D">EXSC 176D - Softball IV</option>');
  $('#txtClass').append('<option value="EXSC 178A">EXSC 178A - Tennis I</option>');
  $('#txtClass').append('<option value="EXSC 178B">EXSC 178B - Tennis II</option>');
  $('#txtClass').append('<option value="EXSC 178C">EXSC 178C - Tennis III</option>');
  $('#txtClass').append('<option value="EXSC 178D">EXSC 178D - Tennis IV</option>');
  $('#txtClass').append('<option value="EXSC 179A">EXSC 179A - Pickleball I</option>');
  $('#txtClass').append('<option value="EXSC 179B">EXSC 179B - Pickleball II</option>');
  $('#txtClass').append('<option value="EXSC 180">EXSC 180 - Track and Field</option>');
  $('#txtClass').append('<option value="EXSC 180A">EXSC 180A - Track and Field I</option>');
  $('#txtClass').append('<option value="EXSC 182A">EXSC 182A - Volleyball I</option>');
  $('#txtClass').append('<option value="EXSC 182B">EXSC 182B - Volleyball II</option>');
  $('#txtClass').append('<option value="EXSC 182C">EXSC 182C - Volleyball III</option>');
  $('#txtClass').append('<option value="EXSC 182D">EXSC 182D - Volleyball IV</option>');
  $('#txtClass').append('<option value="EXSC 183A">EXSC 183A - Beach Volleyball I</option>');
  $('#txtClass').append('<option value="EXSC 183B">EXSC 183B - Beach Volleyball II</option>');
  $('#txtClass').append('<option value="EXSC 183C">EXSC 183C - Beach Volleyball III</option>');
  $('#txtClass').append('<option value="EXSC 183D">EXSC 183D - Beach Volleyball IV</option>');
  $('#txtClass').append('<option value="EXSC 184A">EXSC 184A - Water Polo I</option>');
  $('#txtClass').append('<option value="EXSC 184B">EXSC 184B - Water Polo II</option>');
  $('#txtClass').append('<option value="EXSC 184C">EXSC 184C - Water Polo III</option>');
  $('#txtClass').append('<option value="EXSC 184D">EXSC 184D - Water Polo IV</option>');
  $('#txtClass').append('<option value="EXSC 200">EXSC 200 - Intercollegiate Badminton I</option>');
  $('#txtClass').append('<option value="EXSC 201">EXSC 201 - Intercollegiate Badminton II</option>');
  $('#txtClass').append('<option value="EXSC 202">EXSC 202 - Intercollegiate Baseball I</option>');
  $('#txtClass').append('<option value="EXSC 203">EXSC 203 - Intercollegiate Baseball II</option>');
  $('#txtClass').append('<option value="EXSC 204">EXSC 204 - Intercollegiate Basketball I</option>');
  $('#txtClass').append('<option value="EXSC 205">EXSC 205 - Intercollegiate Basketball II</option>');
  $('#txtClass').append('<option value="EXSC 206">EXSC 206 - Intercoll Cross Country I</option>');
  $('#txtClass').append('<option value="EXSC 207">EXSC 207 - Intercoll Cross Country II</option>');
  $('#txtClass').append('<option value="EXSC 210">EXSC 210 - Intercollegiate Football I</option>');
  $('#txtClass').append('<option value="EXSC 211">EXSC 211 - Intercollegiate Football II</option>');
  $('#txtClass').append('<option value="EXSC 214">EXSC 214 - Intercollegiate Soccer I</option>');
  $('#txtClass').append('<option value="EXSC 215">EXSC 215 - Intercollegiate Soccer II</option>');
  $('#txtClass').append('<option value="EXSC 216">EXSC 216 - Intercollegiate Softball I</option>');
  $('#txtClass').append('<option value="EXSC 217">EXSC 217 - Intercollegiate Softball II</option>');
  $('#txtClass').append('<option value="EXSC 218">EXSC 218 - Intercollegiate Swimming I</option>');
  $('#txtClass').append('<option value="EXSC 219">EXSC 219 - Intercollegiate Swimming II</option>');
  $('#txtClass').append('<option value="EXSC 220">EXSC 220 - Intercollegiate Tennis I</option>');
  $('#txtClass').append('<option value="EXSC 221">EXSC 221 - Intercollegiate Tennis II</option>');
  $('#txtClass').append('<option value="EXSC 222">EXSC 222 - Intercoll Track & Field I</option>');
  $('#txtClass').append('<option value="EXSC 223">EXSC 223 - Intercoll Track & Field II</option>');
  $('#txtClass').append('<option value="EXSC 224">EXSC 224 - Intercollegiate Volleyball I</option>');
  $('#txtClass').append('<option value="EXSC 225">EXSC 225 - Intercollegiate Volleyball II</option>');
  $('#txtClass').append('<option value="EXSC 226">EXSC 226 - Intercollegiate Water Polo I</option>');
  $('#txtClass').append('<option value="EXSC 227">EXSC 227 - Intercollegiate Water Polo II</option>');
  $('#txtClass').append('<option value="EXSC 228A">EXSC 228A - Intercoll Sand Volleyball I</option>');
  $('#txtClass').append('<option value="EXSC 228B">EXSC 228B - Intercoll Sand Volleyball II</option>');
  $('#txtClass').append('<option value="EXSC 230A">EXSC 230A - Strategies of Baseball I</option>');
  $('#txtClass').append('<option value="EXSC 230B">EXSC 230B - Strategies of Baseball II</option>');
  $('#txtClass').append('<option value="EXSC 231A">EXSC 231A - Basketball Theory/Strategy I</option>');
  $('#txtClass').append('<option value="EXSC 231B">EXSC 231B - Basketball Theory/Strategy II</option>');
  $('#txtClass').append('<option value="EXSC 232A">EXSC 232A - Prof. Activities/Cross Coun I</option>');
  $('#txtClass').append('<option value="EXSC 232B">EXSC 232B - Prof. Activities/Cross Coun II</option>');
  $('#txtClass').append('<option value="EXSC 233A">EXSC 233A - Theories Football I</option>');
  $('#txtClass').append('<option value="EXSC 233B">EXSC 233B - Theories/Football II</option>');
  $('#txtClass').append('<option value="EXSC 234A">EXSC 234A - Soccer Theory/Strategy I</option>');
  $('#txtClass').append('<option value="EXSC 234B">EXSC 234B - Soccer Theory/Strategy II</option>');
  $('#txtClass').append('<option value="EXSC 235A">EXSC 235A - Theories/Strategies Softball I</option>');
  $('#txtClass').append('<option value="EXSC 235B">EXSC 235B - Theories/StrategiesSoftball II</option>');
  $('#txtClass').append('<option value="EXSC 237A">EXSC 237A - Theories and Strateg Tennis I</option>');
  $('#txtClass').append('<option value="EXSC 237B">EXSC 237B - Theories and Strateg Tennis II</option>');
  $('#txtClass').append('<option value="EXSC 238A">EXSC 238A - Theories Track-Field I</option>');
  $('#txtClass').append('<option value="EXSC 238B">EXSC 238B - Theories/Track-Field II</option>');
  $('#txtClass').append('<option value="EXSC 239A">EXSC 239A - Theories of Volleyball I</option>');
  $('#txtClass').append('<option value="EXSC 239B">EXSC 239B - Strategies of Volleyball II</option>');
  $('#txtClass').append('<option value="EXSC 240">EXSC 240 - Phys Educ in the Elem Schools</option>');
  $('#txtClass').append('<option value="EXSC 241B">EXSC 241B - Introduction to Kinesiology</option>');
  $('#txtClass').append('<option value="EXSC 242B">EXSC 242B - Care & Prevention of Injuries</option>');
  $('#txtClass').append('<option value="EXSC 270">EXSC 270 - Work Experience</option>');
  $('#txtClass').append('<option value="EXSC 280">EXSC 280 - Applied Exercise Physiology</option>');
  $('#txtClass').append('<option value="EXSC 281">EXSC 281 - Applied Kinesiology</option>');
  $('#txtClass').append('<option value="EXSC 282">EXSC 282 - Techniques of Weight Training</option>');
  $('#txtClass').append('<option value="EXSC 283">EXSC 283 - Exercise & Fitness Assessment</option>');
  $('#txtClass').append('<option value="EXSC 284">EXSC 284 - Fitness and Sports Nutrition</option>');
  $('#txtClass').append('<option value="EXSC 285">EXSC 285 - Exercise/Special Populations</option>');
  $('#txtClass').append('<option value="EXSC 286">EXSC 286 - Techniques/Exercise Leadership</option>');
  $('#txtClass').append('<option value="EXSC 288">EXSC 288 - Internship Lecture</option>');
  $('#txtClass').append('<option value="EXSC 292">EXSC 292 - Yoga Teacher Essentials</option>');
  $('#txtClass').append('<option value="EXSC 292A">EXSC 292A - Yoga Teacher Essentials</option>');
  $('#txtClass').append('<option value="EXSC 292B">EXSC 292B - Yoga Training Methodologies</option>');
  $('#txtClass').append('<option value="EXSC 293">EXSC 293 - Yoga Training Methodologies</option>');
  $('#txtClass').append('<option value="EXSC 293A">EXSC 293A - Yoga Teacher Integration</option>');
  $('#txtClass').append('<option value="EXSC 293B">EXSC 293B - Yoga Training Implementation</option>');
  $('#txtClass').append('<option value="EXSC 294">EXSC 294 - Health and Wellness Coaching</option>');

 }else if($('#txtSubject').val()=='FASH'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="FASH 105">FASH 105 - Introduction to Fashion</option>');
  $('#txtClass').append('<option value="FASH 108">FASH 108 - Anal/Eval/Compar of Rdytowear</option>');
  $('#txtClass').append('<option value="FASH 108">FASH 108 - Ready-To-Wear Fashion</option>');
  $('#txtClass').append('<option value="FASH 109">FASH 109 - Fashion Product Development</option>');
  $('#txtClass').append('<option value="FASH 110">FASH 110 - Fashion Buying/Management</option>');
  $('#txtClass').append('<option value="FASH 111">FASH 111 - Fashion E-commerce</option>');
  $('#txtClass').append('<option value="FASH 112">FASH 112 - Fashion Promotion</option>');
  $('#txtClass').append('<option value="FASH 113">FASH 113 - Fashion Event Planning & Prodn</option>');
  $('#txtClass').append('<option value="FASH 115">FASH 115 - Visual Merchandising</option>');
  $('#txtClass').append('<option value="FASH 120">FASH 120 - Fashion History and Trends</option>');
  $('#txtClass').append('<option value="FASH 121">FASH 121 - Ethnic Costume: Overview</option>');
  $('#txtClass').append('<option value="FASH 122">FASH 122 - Ethnic Costume</option>');
  $('#txtClass').append('<option value="FASH 123">FASH 123 - Intro to Costume Development</option>');
  $('#txtClass').append('<option value="FASH 124">FASH 124 - Costume Understructures</option>');
  $('#txtClass').append('<option value="FASH 125">FASH 125 - Fashion Selection</option>');
  $('#txtClass').append('<option value="FASH 130">FASH 130 - Apparel Construction I</option>');
  $('#txtClass').append('<option value="FASH 131">FASH 131 - Apparel Construction II</option>');
  $('#txtClass').append('<option value="FASH 135">FASH 135 - Tailoring</option>');
  $('#txtClass').append('<option value="FASH 140">FASH 140 - Clothing Design/Flat Pattern I</option>');
  $('#txtClass').append('<option value="FASH 141">FASH 141 - Cloth Design/Flat Pattern II</option>');
  $('#txtClass').append('<option value="FASH 142">FASH 142 - Fashion Illustration/Sketching</option>');
  $('#txtClass').append('<option value="FASH 143">FASH 143 - Adv Fash Illustration/Sketch</option>');
  $('#txtClass').append('<option value="FASH 145">FASH 145 - Clothng Design Through Draping</option>');
  $('#txtClass').append('<option value="FASH 147">FASH 147 - Stretch Knits: Desn & Constrn</option>');
  $('#txtClass').append('<option value="FASH 150">FASH 150 - Advanced Fashion Design</option>');
  $('#txtClass').append('<option value="FASH 155">FASH 155 - Fashion Field Studies</option>');
  $('#txtClass').append('<option value="FASH 156">FASH 156 - Intl Fash Studies: Overview</option>');
  $('#txtClass').append('<option value="FASH 157">FASH 157 - Int Studies: Focused Study</option>');
  $('#txtClass').append('<option value="FASH 158">FASH 158 - Field Studies:Trade Shows</option>');
  $('#txtClass').append('<option value="FASH 160">FASH 160 - Millinery Techniques</option>');
  $('#txtClass').append('<option value="FASH 162">FASH 162 - Millinery Blocking</option>');
  $('#txtClass').append('<option value="FASH 166">FASH 166 - Fit and Alterations</option>');
  $('#txtClass').append('<option value="FASH 168">FASH 168 - Textiles</option>');
  $('#txtClass').append('<option value="FASH 169">FASH 169 - Textile Design Practicum</option>');
  $('#txtClass').append('<option value="FASH 170">FASH 170 - Textile Design</option>');
  $('#txtClass').append('<option value="FASH 171">FASH 171 - Computer Flat Pattern Design</option>');
  $('#txtClass').append('<option value="FASH 172">FASH 172 - Comp&apos;r Flat Pattern for Ind</option>');
  $('#txtClass').append('<option value="FASH 173">FASH 173 - Fashion Mktg on the Internet</option>');
  $('#txtClass').append('<option value="FASH 175">FASH 175 - Comp.Fash.Design: Adobe Photo</option>');
  $('#txtClass').append('<option value="FASH 176">FASH 176 - Comp Fash Desn: Illustrator</option>');
  $('#txtClass').append('<option value="FASH 178">FASH 178 - Computer Pub&apos;Ing and Portfolio</option>');
  $('#txtClass').append('<option value="FASH 179">FASH 179 - Fashion Photo Styling</option>');
  $('#txtClass').append('<option value="FASH 190">FASH 190 - Fashion Entrepreneurship</option>');
  $('#txtClass').append('<option value="FASH 199A">FASH 199A - Fashion Laboratory A</option>');
  $('#txtClass').append('<option value="FASH 199B">FASH 199B - Fashion Laboratory B</option>');
  $('#txtClass').append('<option value="FASH 199C">FASH 199C - Fashion Laboratory C</option>');
  $('#txtClass').append('<option value="FASH 270">FASH 270 - Work Experience</option>');
  $('#txtClass').append('<option value="FASH 290">FASH 290 - Independent Study</option>');

 }else if($('#txtSubject').val()=='FERM'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="FERM 101">FERM 101 - Intro to Yeast & Fermentation</option>');
  $('#txtClass').append('<option value="FERM 110">FERM 110 - Importing and Distribution</option>');
  $('#txtClass').append('<option value="FERM 120">FERM 120 - Fundamentals of Spirits</option>');
  $('#txtClass').append('<option value="FERM 130">FERM 130 - Flavor and Form</option>');

 }else if($('#txtSubject').val()=='FILI'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="FILI 100">FILI 100 - Filipino American Experience</option>');

 }else if($('#txtSubject').val()=='FIPT'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="FIPT 101">FIPT 101 - Fire Protection Organization</option>');
  $('#txtClass').append('<option value="FIPT 102">FIPT 102 - Fire Prevention Technology</option>');
  $('#txtClass').append('<option value="FIPT 103">FIPT 103 - Fire Protectn Equip & Systems</option>');
  $('#txtClass').append('<option value="FIPT 104">FIPT 104 - Bldg Construct for Fire Protec</option>');
  $('#txtClass').append('<option value="FIPT 105">FIPT 105 - Fire Behavior and Combustion</option>');
  $('#txtClass').append('<option value="FIPT 107">FIPT 107 - Fire Fighting Tactics/Strategy</option>');
  $('#txtClass').append('<option value="FIPT 109">FIPT 109 - Fire Service Hydraulics</option>');
  $('#txtClass').append('<option value="FIPT 110A">FIPT 110A - Wildland Fire Control</option>');
  $('#txtClass').append('<option value="FIPT 120">FIPT 120 - Safety and Survival</option>');
  $('#txtClass').append('<option value="FIPT 125">FIPT 125 - Fire Service Report Writing</option>');
  $('#txtClass').append('<option value="FIPT 150A">FIPT 150A - Intro to Fire Suppress/Maint</option>');
  $('#txtClass').append('<option value="FIPT 150B">FIPT 150B - Intro Fire Supp/Maint Task Int</option>');
  $('#txtClass').append('<option value="FIPT 150C">FIPT 150C - Intro to Fire Supp/Maint Tasks</option>');
  $('#txtClass').append('<option value="FIPT 150D">FIPT 150D - Intr Fire Supp/Maint Task Ops</option>');
  $('#txtClass').append('<option value="FIPT 150T">FIPT 150T - Truck Operations</option>');
  $('#txtClass').append('<option value="FIPT 160">FIPT 160 - Intro to Ocean Lifeguarding</option>');
  $('#txtClass').append('<option value="FIPT 270">FIPT 270 - Work Experience</option>');
  $('#txtClass').append('<option value="FIPT 309B">FIPT 309B - Emerg Med Care Sick/Injured</option>');
  $('#txtClass').append('<option value="FIPT 321D">FIPT 321D - Driver Operator - Driving</option>');
  $('#txtClass').append('<option value="FIPT 321P">FIPT 321P - Driver Operator - Pumping</option>');
  $('#txtClass').append('<option value="FIPT 322A">FIPT 322A - Vehicle Extrication</option>');
  $('#txtClass').append('<option value="FIPT 322B">FIPT 322B - Conf Space Rescue Awareness</option>');
  $('#txtClass').append('<option value="FIPT 322C">FIPT 322C - Firefighter Survival</option>');
  $('#txtClass').append('<option value="FIPT 322F">FIPT 322F - Low Angle Rope Rescue Operat.</option>');
  $('#txtClass').append('<option value="FIPT 323B">FIPT 323B - Hazmat Emerg Response</option>');
  $('#txtClass').append('<option value="FIPT 323B">FIPT 323B - Hazmat: FRO</option>');
  $('#txtClass').append('<option value="FIPT 323C">FIPT 323C - Hazmat for the IC</option>');
  $('#txtClass').append('<option value="FIPT 324A">FIPT 324A - NIMS ICS 100/200</option>');
  $('#txtClass').append('<option value="FIPT 324D">FIPT 324D - Inter Wild Fire Behavior S-290</option>');
  $('#txtClass').append('<option value="FIPT 326C">FIPT 326C - Instructor Methodology II</option>');
  $('#txtClass').append('<option value="FIPT 332B">FIPT 332B - Rescue Systems 1</option>');
  $('#txtClass').append('<option value="FIPT 340">FIPT 340 - Human Resource Management</option>');
  $('#txtClass').append('<option value="FIPT 341">FIPT 341 - General Administration</option>');
  $('#txtClass').append('<option value="FIPT 342">FIPT 342 - Investigation and Inspection</option>');
  $('#txtClass').append('<option value="FIPT 343">FIPT 343 - Command Operations</option>');
  $('#txtClass').append('<option value="FIPT 344">FIPT 344 - Wildland Operations</option>');
  $('#txtClass').append('<option value="FIPT 345">FIPT 345 - Instructor Methodology</option>');
  $('#txtClass').append('<option value="FIPT 350">FIPT 350 - Chief Fire Officer 3</option>');
  $('#txtClass').append('<option value="FIPT 351A">FIPT 351A - Fire Inspector IA</option>');
  $('#txtClass').append('<option value="FIPT 351B">FIPT 351B - Fire Inspector 1B</option>');
  $('#txtClass').append('<option value="FIPT 351C">FIPT 351C - Fire Inspector 1C</option>');
  $('#txtClass').append('<option value="FIPT 351D">FIPT 351D - Fire Inspector 1D</option>');
  $('#txtClass').append('<option value="FIPT 362A">FIPT 362A - In-Serv Fire Trng Mods</option>');
  $('#txtClass').append('<option value="FIPT 362B">FIPT 362B - In-Serv Lifeguard Trng Modules</option>');
  $('#txtClass').append('<option value="FIPT 365">FIPT 365 - All Terrain Vehicle Operations</option>');
  $('#txtClass').append('<option value="FIPT 366A">FIPT 366A - Personal Watercraft Operations</option>');
  $('#txtClass').append('<option value="FIPT 381F">FIPT 381F - Regional Firefighter I Academy</option>');
  $('#txtClass').append('<option value="FIPT 381G">FIPT 381G - Fire Academy Certification</option>');
  $('#txtClass').append('<option value="FIPT 381S">FIPT 381S - San Diego Firefighter Academy</option>');
  $('#txtClass').append('<option value="FIPT 392S">FIPT 392S - Topics in Fire Management</option>');
  $('#txtClass').append('<option value="FIPT 394L">FIPT 394L - Topics in Firefighting Tactics</option>');

 }else if($('#txtSubject').val()=='FREN'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="FREN 101">FREN 101 - First Course in French</option>');
  $('#txtClass').append('<option value="FREN 102">FREN 102 - Second Course in French</option>');
  $('#txtClass').append('<option value="FREN 201">FREN 201 - Third Course in French</option>');
  $('#txtClass').append('<option value="FREN 202">FREN 202 - Fourth Course in French</option>');
  $('#txtClass').append('<option value="FREN 210">FREN 210 - Conv and Comp in French I</option>');
  $('#txtClass').append('<option value="FREN 211">FREN 211 - Speaking & Writing French II</option>');

 }else if($('#txtSubject').val()=='GEND'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="GEND 101">GEND 101 - Introduction to Gender Studies</option>');

 }else if($('#txtSubject').val()=='GENS'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="GENS 44">GENS 44 - Supervised Tutoring</option>');

 }else if($('#txtSubject').val()=='GEOG'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="GEOG 101">GEOG 101 - Physical Geography</option>');
  $('#txtClass').append('<option value="GEOG 101L">GEOG 101L - Physical Geography Lab</option>');
  $('#txtClass').append('<option value="GEOG 102">GEOG 102 - Cultural Geography</option>');
  $('#txtClass').append('<option value="GEOG 104">GEOG 104 - World Regional Geography</option>');
  $('#txtClass').append('<option value="GEOG 154">GEOG 154 - Intro to Urban Geography</option>');

 }else if($('#txtSubject').val()=='GEOL'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="GEOL 100">GEOL 100 - Physical Geology</option>');
  $('#txtClass').append('<option value="GEOL 101">GEOL 101 - Physical Geology Laboratory</option>');
  $('#txtClass').append('<option value="GEOL 104">GEOL 104 - Earth Science</option>');
  $('#txtClass').append('<option value="GEOL 111">GEOL 111 - The Earth Through Time</option>');
  $('#txtClass').append('<option value="GEOL 120">GEOL 120 - Earth Science Laboratory</option>');

 }else if($('#txtSubject').val()=='GERM'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="GERM 101">GERM 101 - First Course in German</option>');
  $('#txtClass').append('<option value="GERM 102">GERM 102 - Second Course in German</option>');
  $('#txtClass').append('<option value="GERM 201">GERM 201 - Third Course in German</option>');

 }else if($('#txtSubject').val()=='GISG'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="GISG 104">GISG 104 - Introduction to GIS</option>');
  $('#txtClass').append('<option value="GISG 110">GISG 110 - Intro to Mapping/Geog Info Sys</option>');
  $('#txtClass').append('<option value="GISG 111">GISG 111 - GIS and Cartography</option>');
  $('#txtClass').append('<option value="GISG 112">GISG 112 - Spatial Analysis/GIS</option>');
  $('#txtClass').append('<option value="GISG 113">GISG 113 - Advanced Geog Info Sys App</option>');
  $('#txtClass').append('<option value="GISG 114">GISG 114 - Spatial Databases</option>');
  $('#txtClass').append('<option value="GISG 130">GISG 130 - Introduction to Remote Sensing</option>');
  $('#txtClass').append('<option value="GISG 131">GISG 131 - Intro to Digital Image Process</option>');
  $('#txtClass').append('<option value="GISG 270">GISG 270 - GIS Work Experience</option>');

 }else if($('#txtSubject').val()=='GRFX'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="GRFX 160">GRFX 160 - Vector Art 01: Illustration</option>');
  $('#txtClass').append('<option value="GRFX 170">GRFX 170 - Raster Art 01: Image Editing</option>');
  $('#txtClass').append('<option value="GRFX 181">GRFX 181 - Projects 01</option>');

 }else if($('#txtSubject').val()=='HEAL'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="HEAL 101">HEAL 101 - Health and Life Style</option>');
  $('#txtClass').append('<option value="HEAL 101">HEAL 101 - Health and Lifestyle</option>');
  $('#txtClass').append('<option value="HEAL 131">HEAL 131 - Emergency Medical Response</option>');
  $('#txtClass').append('<option value="HEAL 131">HEAL 131 - Emergency Response</option>');
  $('#txtClass').append('<option value="HEAL 195">HEAL 195 - Health Education for Teachers</option>');

 }else if($('#txtSubject').val()=='HEIT'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="HEIT 110">HEIT 110 - Intro to Health Information</option>');
  $('#txtClass').append('<option value="HEIT 130">HEIT 130 - Basic Pharmacology</option>');
  $('#txtClass').append('<option value="HEIT 135">HEIT 135 - Computer Basics for HEIT</option>');
  $('#txtClass').append('<option value="HEIT 140">HEIT 140 - Fundamentals Law for Hlth Inf</option>');
  $('#txtClass').append('<option value="HEIT 155">HEIT 155 - CPT Coding</option>');
  $('#txtClass').append('<option value="HEIT 160">HEIT 160 - Healthcare Reimbursement</option>');
  $('#txtClass').append('<option value="HEIT 214">HEIT 214 - ICD Coding I</option>');
  $('#txtClass').append('<option value="HEIT 215">HEIT 215 - ICD Coding II</option>');
  $('#txtClass').append('<option value="HEIT 220">HEIT 220 - Principles of Leadership</option>');
  $('#txtClass').append('<option value="HEIT 256">HEIT 256 - Statistics for Healthcare</option>');
  $('#txtClass').append('<option value="HEIT 258">HEIT 258 - Healthcare Quality Management</option>');
  $('#txtClass').append('<option value="HEIT 266">HEIT 266 - Directed Clinical Practice A</option>');
  $('#txtClass').append('<option value="HEIT 267">HEIT 267 - Directed Clinical Practice B</option>');

 }else if($('#txtSubject').val()=='HIMS'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="HIMS 405">HIMS 405 - HIMS Foundations</option>');
  $('#txtClass').append('<option value="HIMS 408">HIMS 408 - Ethics in Healthcare Admin</option>');
  $('#txtClass').append('<option value="HIMS 410">HIMS 410 - Healthcare Informatics</option>');
  $('#txtClass').append('<option value="HIMS 415">HIMS 415 - Healthcare Analytics</option>');
  $('#txtClass').append('<option value="HIMS 418">HIMS 418 - Legal & Compliance</option>');
  $('#txtClass').append('<option value="HIMS 420">HIMS 420 - Financial Management</option>');
  $('#txtClass').append('<option value="HIMS 425">HIMS 425 - Revenue Cycle Management</option>');
  $('#txtClass').append('<option value="HIMS 430">HIMS 430 - HR Management</option>');
  $('#txtClass').append('<option value="HIMS 435">HIMS 435 - Project Management</option>');
  $('#txtClass').append('<option value="HIMS 440">HIMS 440 - Leadership & Strategic Mgmt</option>');
  $('#txtClass').append('<option value="HIMS 445">HIMS 445 - Systems Analysis & Design</option>');
  $('#txtClass').append('<option value="HIMS 455">HIMS 455 - Applied Research Project</option>');
  $('#txtClass').append('<option value="HIMS 460">HIMS 460 - Adv Directed Clinical Practice</option>');

 }else if($('#txtSubject').val()=='HIST'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="HIST 100">HIST 100 - World History I</option>');
  $('#txtClass').append('<option value="HIST 101">HIST 101 - World History II</option>');
  $('#txtClass').append('<option value="HIST 105">HIST 105 - Intro to Western Civilizatn I</option>');
  $('#txtClass').append('<option value="HIST 106">HIST 106 - Intro to Western Civilizatn II</option>');
  $('#txtClass').append('<option value="HIST 109">HIST 109 - History of the United States I</option>');
  $('#txtClass').append('<option value="HIST 110">HIST 110 - Hist. of the United States II</option>');
  $('#txtClass').append('<option value="HIST 115A">HIST 115A - History of the Americas I</option>');
  $('#txtClass').append('<option value="HIST 115B">HIST 115B - History of the Americas II</option>');
  $('#txtClass').append('<option value="HIST 120">HIST 120 - Intro to Asian Civilizations</option>');
  $('#txtClass').append('<option value="HIST 121">HIST 121 - Asian Civilization/Modrn Times</option>');
  $('#txtClass').append('<option value="HIST 123">HIST 123 - Us Hist/Asian Pac Am Perspect</option>');
  $('#txtClass').append('<option value="HIST 130">HIST 130 - The Modern Middle East</option>');
  $('#txtClass').append('<option value="HIST 131">HIST 131 - Latin Amer Before Independence</option>');
  $('#txtClass').append('<option value="HIST 132">HIST 132 - Latin Amer Since Independence</option>');
  $('#txtClass').append('<option value="HIST 141">HIST 141 - Women in US History I</option>');
  $('#txtClass').append('<option value="HIST 142">HIST 142 - Women in US History II</option>');
  $('#txtClass').append('<option value="HIST 150">HIST 150 - Native Americans in US Hist I</option>');
  $('#txtClass').append('<option value="HIST 151">HIST 151 - History of Native Americans II</option>');
  $('#txtClass').append('<option value="HIST 154">HIST 154 - Ancient Egypt</option>');
  $('#txtClass').append('<option value="HIST 175">HIST 175 - California History</option>');
  $('#txtClass').append('<option value="HIST 205">HIST 205 - Methods/Practices in History</option>');

 }else if($('#txtSubject').val()=='HOSP'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="HOSP 101">HOSP 101 - Intro to Hospitality & Tourism</option>');
  $('#txtClass').append('<option value="HOSP 102">HOSP 102 - Financial Accounting</option>');
  $('#txtClass').append('<option value="HOSP 111">HOSP 111 - Food and Beverage Management</option>');
  $('#txtClass').append('<option value="HOSP 112">HOSP 112 - Lodging & Resort Mgmt & Ops</option>');
  $('#txtClass').append('<option value="HOSP 115">HOSP 115 - Strategic Leadership</option>');
  $('#txtClass').append('<option value="HOSP 121">HOSP 121 - Marketing and Sales</option>');
  $('#txtClass').append('<option value="HOSP 130">HOSP 130 - Hospitality Law</option>');
  $('#txtClass').append('<option value="HOSP 152">HOSP 152 - Hospitality Human Resources</option>');
  $('#txtClass').append('<option value="HOSP 162">HOSP 162 - Meeting and Convention</option>');
  $('#txtClass').append('<option value="HOSP 166">HOSP 166 - Special Events</option>');
  $('#txtClass').append('<option value="HOSP 185">HOSP 185 - Facilities Management</option>');
  $('#txtClass').append('<option value="HOSP 190">HOSP 190 - Hospitality Capstone</option>');
  $('#txtClass').append('<option value="HOSP 270">HOSP 270 - Work Experience</option>');

 }else if($('#txtSubject').val()=='HUMA'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="HUMA 101">HUMA 101 - Intro to the Humanities I</option>');
  $('#txtClass').append('<option value="HUMA 102">HUMA 102 - Intro to the Humanities II</option>');
  $('#txtClass').append('<option value="HUMA 103">HUMA 103 - Intro to the New Testament</option>');
  $('#txtClass').append('<option value="HUMA 104">HUMA 104 - Intro to the Old Testament</option>');
  $('#txtClass').append('<option value="HUMA 106">HUMA 106 - World Religions</option>');
  $('#txtClass').append('<option value="HUMA 119">HUMA 119 - Western Humanities</option>');
  $('#txtClass').append('<option value="HUMA 201">HUMA 201 - Mythology</option>');
  $('#txtClass').append('<option value="HUMA 202">HUMA 202 - Mythology: Hero&apos;s Journey</option>');
  $('#txtClass').append('<option value="HUMA 205">HUMA 205 - Exploring Human Values/Film</option>');
  $('#txtClass').append('<option value="HUMA 210">HUMA 210 - Women in Religion and Myth</option>');

 }else if($('#txtSubject').val()=='HUMS'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="HUMS 75">HUMS 75 - Wrkg with Homeless & At-Risk</option>');
  $('#txtClass').append('<option value="HUMS 95">HUMS 95 - Public Asst/Benefits Program</option>');
  $('#txtClass').append('<option value="HUMS 101">HUMS 101 - Intro to Human Aging</option>');
  $('#txtClass').append('<option value="HUMS 105">HUMS 105 - Family Support Model</option>');
  $('#txtClass').append('<option value="HUMS 110">HUMS 110 - Social Work Fields of Service</option>');
  $('#txtClass').append('<option value="HUMS 120">HUMS 120 - Intro to Social Work</option>');
  $('#txtClass').append('<option value="HUMS 276">HUMS 276 - Field Work Gerontology</option>');

 }else if($('#txtSubject').val()=='INTE'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="INTE 101">INTE 101 - Intro to Interior Design</option>');
  $('#txtClass').append('<option value="INTE 105">INTE 105 - Residential Design</option>');
  $('#txtClass').append('<option value="INTE 110">INTE 110 - Materials and Resources</option>');
  $('#txtClass').append('<option value="INTE 112A">INTE 112A - Visual Communication I</option>');
  $('#txtClass').append('<option value="INTE 112B">INTE 112B - Visual Communication II</option>');
  $('#txtClass').append('<option value="INTE 115">INTE 115 - Elements of Interior Design</option>');
  $('#txtClass').append('<option value="INTE 120">INTE 120 - Revit for Interiors</option>');
  $('#txtClass').append('<option value="INTE 125">INTE 125 - Hist Furniture and Interiors</option>');
  $('#txtClass').append('<option value="INTE 130">INTE 130 - Interior Design Profl Practice</option>');
  $('#txtClass').append('<option value="INTE 135">INTE 135 - AutoCAD for Interiors</option>');
  $('#txtClass').append('<option value="INTE 145">INTE 145 - Int. Blding System/Codes</option>');
  $('#txtClass').append('<option value="INTE 200">INTE 200 - Kitchen and Bath Design</option>');
  $('#txtClass').append('<option value="INTE 205">INTE 205 - Non-Residential Space Planning</option>');
  $('#txtClass').append('<option value="INTE 210">INTE 210 - Presentation & Color Rendering</option>');
  $('#txtClass').append('<option value="INTE 215">INTE 215 - Environmental Lighting Design</option>');
  $('#txtClass').append('<option value="INTE 270">INTE 270 - Work Experience</option>');

 }else if($('#txtSubject').val()=='INWT'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="INWT 100">INWT 100 - A+ Certification Training</option>');
  $('#txtClass').append('<option value="INWT 100">INWT 100 - Survey of Operating Systems</option>');
  $('#txtClass').append('<option value="INWT 101">INWT 101 - Intro to Info Sec</option>');
  $('#txtClass').append('<option value="INWT 102">INWT 102 - IT Fundamentals</option>');
  $('#txtClass').append('<option value="INWT 111">INWT 111 - Windows Desktop Professional</option>');
  $('#txtClass').append('<option value="INWT 112">INWT 112 - Windows Server Professional</option>');
  $('#txtClass').append('<option value="INWT 113">INWT 113 - Exchanging Server Training</option>');
  $('#txtClass').append('<option value="INWT 120">INWT 120 - Network+ Cert Training</option>');
  $('#txtClass').append('<option value="INWT 135">INWT 135 - Certified Secure Computer User</option>');
  $('#txtClass').append('<option value="INWT 140">INWT 140 - Security+ Cert Training</option>');
  $('#txtClass').append('<option value="INWT 145">INWT 145 - Linux+ Certification Training</option>');
  $('#txtClass').append('<option value="INWT 170">INWT 170 - CySA+ Cert Training</option>');
  $('#txtClass').append('<option value="INWT 200">INWT 200 - Certified Ethical Hacking Prep</option>');
  $('#txtClass').append('<option value="INWT 200">INWT 200 - Eth. Hacking & Countermeasures</option>');
  $('#txtClass').append('<option value="INWT 205">INWT 205 - CASP</option>');
  $('#txtClass').append('<option value="INWT 210">INWT 210 - Intro to Computer Forensics</option>');

 }else if($('#txtSubject').val()=='ITAL'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="ITAL 101">ITAL 101 - First Course in Italian</option>');
  $('#txtClass').append('<option value="ITAL 102">ITAL 102 - Second Course in Italian</option>');
  $('#txtClass').append('<option value="ITAL 201">ITAL 201 - Third Course in Italian</option>');

 }else if($('#txtSubject').val()=='JAPN'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="JAPN 101">JAPN 101 - First Course in Japanese</option>');
  $('#txtClass').append('<option value="JAPN 102">JAPN 102 - Second Course in Japanese</option>');
  $('#txtClass').append('<option value="JAPN 201">JAPN 201 - Third Course in Japanese</option>');
  $('#txtClass').append('<option value="JAPN 202">JAPN 202 - Fourth Course in Japanese</option>');
  $('#txtClass').append('<option value="JAPN 210">JAPN 210 - Conversat/Compos in Japanese I</option>');
  $('#txtClass').append('<option value="JAPN 211">JAPN 211 - Conversat/Comp in Japanese II</option>');

 }else if($('#txtSubject').val()=='JOUR'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="JOUR 200">JOUR 200 - Intro to Newswriting/Reporting</option>');
  $('#txtClass').append('<option value="JOUR 202">JOUR 202 - Intro.To Mass Communication</option>');
  $('#txtClass').append('<option value="JOUR 204">JOUR 204 - Social Media Digital Age</option>');
  $('#txtClass').append('<option value="JOUR 206">JOUR 206 - Online Journalism</option>');
  $('#txtClass').append('<option value="JOUR 210A">JOUR 210A - Newspaper Production 1</option>');
  $('#txtClass').append('<option value="JOUR 210B">JOUR 210B - Newspaper Production 2</option>');
  $('#txtClass').append('<option value="JOUR 210C">JOUR 210C - Newspaper Production 3</option>');
  $('#txtClass').append('<option value="JOUR 210D">JOUR 210D - Newspaper Production 4</option>');
  $('#txtClass').append('<option value="JOUR 220">JOUR 220 - Principles of Public Relations</option>');

 }else if($('#txtSubject').val()=='LABR'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="LABR 90">LABR 90 - Organizing</option>');
  $('#txtClass').append('<option value="LABR 100">LABR 100 - American Labor Movement</option>');
  $('#txtClass').append('<option value="LABR 108">LABR 108 - Labor and Politics</option>');

 }else if($('#txtSubject').val()=='LCOM'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="LCOM 43">LCOM 43 - English 42/English 43</option>');
  $('#txtClass').append('<option value="LCOM 47">LCOM 47 - ENGL47A / ENGL 21A</option>');
  $('#txtClass').append('<option value="LCOM 47E">LCOM 47E - ENGL 47A / ENGL 12A / PERG 31</option>');
  $('#txtClass').append('<option value="LCOM 96X">LCOM 96X - Math 96/Math 15B</option>');
  $('#txtClass').append('<option value="LCOM 101">LCOM 101 - ENGL 031/ENGL 101</option>');
  $('#txtClass').append('<option value="LCOM 101J">LCOM 101J - English 101/Coms Studies 103</option>');
  $('#txtClass').append('<option value="LCOM 101L">LCOM 101L - English 101/Health 101</option>');
  $('#txtClass').append('<option value="LCOM 101U">LCOM 101U - ENGL 101/PERG 120/MATH 119/15A</option>');
  $('#txtClass').append('<option value="LCOM 104X">LCOM 104X - MATH 104/MATH 15C</option>');
  $('#txtClass').append('<option value="LCOM 116X">LCOM 116X - Math 116/Math 15C</option>');
  $('#txtClass').append('<option value="LCOM 119X">LCOM 119X - Math 119/Math 15A</option>');
  $('#txtClass').append('<option value="LCOM 120D">LCOM 120D - ENGL 101/ENGL 31/PERG 120</option>');
  $('#txtClass').append('<option value="LCOM 120E">LCOM 120E - ENGL 101/PERG 120</option>');
  $('#txtClass').append('<option value="LCOM 120M">LCOM 120M - UMOJA</option>');
  $('#txtClass').append('<option value="LCOM 201X">LCOM 201X - POLI 201/POLI 31</option>');
  $('#txtClass').append('<option value="LCOM 205D">LCOM 205D - ENGL 205/PERG 130</option>');
  $('#txtClass').append('<option value="LCOM 205P">LCOM 205P - ENGL 205/COMS 103</option>');
  $('#txtClass').append('<option value="LCOM 205Q">LCOM 205Q - ENGL 205/PERG 140</option>');
  $('#txtClass').append('<option value="LCOM 258X">LCOM 258X - Psychology 258/Psychology 31</option>');

 }else if($('#txtSubject').val()=='LIBS'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="LIBS 101">LIBS 101 - Info Literacy & Resrch Skills</option>');

 }else if($('#txtSubject').val()=='MACT'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="MACT 140">MACT 140 - Basic Principles/Machine Tech</option>');
  $('#txtClass').append('<option value="MACT 150">MACT 150 - Introduction to CNC</option>');
  $('#txtClass').append('<option value="MACT 160M">MACT 160M - Introduction to CAD/CAM</option>');
  $('#txtClass').append('<option value="MACT 161M">MACT 161M - Applications of Cad/Cam I</option>');
  $('#txtClass').append('<option value="MACT 162M">MACT 162M - Applications of CAD/CAM II</option>');
  $('#txtClass').append('<option value="MACT 170">MACT 170 - Intro/CNC Controlled Vertical</option>');
  $('#txtClass').append('<option value="MACT 171">MACT 171 - Application/CNC Controlled I</option>');
  $('#txtClass').append('<option value="MACT 172">MACT 172 - Application/CNC Controlled II</option>');
  $('#txtClass').append('<option value="MACT 180M">MACT 180M - Advanced CAD/CAM</option>');
  $('#txtClass').append('<option value="MACT 181M">MACT 181M - Application/Adv CAD/CAM I</option>');
  $('#txtClass').append('<option value="MACT 182M">MACT 182M - Application/Adv CAD/CAM II</option>');

 }else if($('#txtSubject').val()=='MARK'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="MARK 100">MARK 100 - Principles of Marketing</option>');
  $('#txtClass').append('<option value="MARK 105">MARK 105 - Professional Selling</option>');
  $('#txtClass').append('<option value="MARK 110">MARK 110 - Principles of Retailing</option>');
  $('#txtClass').append('<option value="MARK 130">MARK 130 - Advertising Principles</option>');

 }else if($('#txtSubject').val()=='MATH'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="MATH 15A">MATH 15A - Prealgebra Refresher</option>');
  $('#txtClass').append('<option value="MATH 15B">MATH 15B - Elem Algebra/Geom Refresher</option>');
  $('#txtClass').append('<option value="MATH 15C">MATH 15C - Interm Algebra/Geom Refresher</option>');
  $('#txtClass').append('<option value="MATH 15D">MATH 15D - Geometry Refresher</option>');
  $('#txtClass').append('<option value="MATH 15E">MATH 15E - Trigonometry Refresher</option>');
  $('#txtClass').append('<option value="MATH 15F">MATH 15F - College Algebra Refresher</option>');
  $('#txtClass').append('<option value="MATH 38">MATH 38 - Pre-Algebra and Study Skills</option>');
  $('#txtClass').append('<option value="MATH 44">MATH 44 - Supervised Tutoring/Math</option>');
  $('#txtClass').append('<option value="MATH 46">MATH 46 - Elementary Algebra & Geometry</option>');
  $('#txtClass').append('<option value="MATH 57A">MATH 57A - Statway I</option>');
  $('#txtClass').append('<option value="MATH 59">MATH 59 - Exploring Math Foundation</option>');
  $('#txtClass').append('<option value="MATH 92">MATH 92 - Applied Beg and Int Algebra</option>');
  $('#txtClass').append('<option value="MATH 96">MATH 96 - Intermed Algebra & Geometry</option>');
  $('#txtClass').append('<option value="MATH 96X">MATH 96X - Math 96/Math 15B</option>');
  $('#txtClass').append('<option value="MATH 104">MATH 104 - Trigonometry</option>');
  $('#txtClass').append('<option value="MATH 104X">MATH 104X - MATH 104/MATH 15C</option>');
  $('#txtClass').append('<option value="MATH 104X">MATH 104X - MATH 104/MATH 15D</option>');
  $('#txtClass').append('<option value="MATH 107">MATH 107 - Intro to Scientific Progrming</option>');
  $('#txtClass').append('<option value="MATH 107L">MATH 107L - Intro to Scientific Prog Lab</option>');
  $('#txtClass').append('<option value="MATH 109">MATH 109 - Explorations in Math Analysis</option>');
  $('#txtClass').append('<option value="MATH 115">MATH 115 - Statway II</option>');
  $('#txtClass').append('<option value="MATH 116">MATH 116 - College and Matrix Algebra</option>');
  $('#txtClass').append('<option value="MATH 116X">MATH 116X - Math 116/Math 15C</option>');
  $('#txtClass').append('<option value="MATH 118">MATH 118 - Math for Liberal Arts</option>');
  $('#txtClass').append('<option value="MATH 119">MATH 119 - Elementary Statistics</option>');
  $('#txtClass').append('<option value="MATH 119X">MATH 119X - Math 119/Math 15A</option>');
  $('#txtClass').append('<option value="MATH 121">MATH 121 - Basic Techs/Applied Calc I</option>');
  $('#txtClass').append('<option value="MATH 122">MATH 122 - Basic Techniques/Calculus II</option>');
  $('#txtClass').append('<option value="MATH 141">MATH 141 - Precalculus</option>');
  $('#txtClass').append('<option value="MATH 150">MATH 150 - Calculus/Analytic Geometry I</option>');
  $('#txtClass').append('<option value="MATH 151">MATH 151 - Calculus/Analytic Geometry II</option>');
  $('#txtClass').append('<option value="MATH 210A">MATH 210A - Concepts/Elem School Math I</option>');
  $('#txtClass').append('<option value="MATH 210B">MATH 210B - Concepts/Elem School Math II</option>');
  $('#txtClass').append('<option value="MATH 212">MATH 212 - Children&apos;s Mathematl Thinkng</option>');
  $('#txtClass').append('<option value="MATH 245">MATH 245 - Discrete Mathematics</option>');
  $('#txtClass').append('<option value="MATH 252">MATH 252 - Calculus/Analytic Geometry III</option>');
  $('#txtClass').append('<option value="MATH 254">MATH 254 - Intro to Linear Algebra</option>');
  $('#txtClass').append('<option value="MATH 255">MATH 255 - Differential Equations</option>');

 }else if($('#txtSubject').val()=='MEDA'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="MEDA 55">MEDA 55 - Human Anatomy and Physiology</option>');
  $('#txtClass').append('<option value="MEDA 56">MEDA 56 - Administrative Medical Assisti</option>');
  $('#txtClass').append('<option value="MEDA 64">MEDA 64 - Allied Health Medical Ethics</option>');
  $('#txtClass').append('<option value="MEDA 68">MEDA 68 - Allied Health Human Behavior</option>');
  $('#txtClass').append('<option value="MEDA 76">MEDA 76 - Infection Control</option>');
  $('#txtClass').append('<option value="MEDA 78">MEDA 78 - Principles of Patient Care</option>');
  $('#txtClass').append('<option value="MEDA 82">MEDA 82 - Diagnostic Testing</option>');
  $('#txtClass').append('<option value="MEDA 84">MEDA 84 - Phlebotomy</option>');
  $('#txtClass').append('<option value="MEDA 86">MEDA 86 - Admin Med Asst II</option>');
  $('#txtClass').append('<option value="MEDA 88">MEDA 88 - Electrocardiogram Application</option>');
  $('#txtClass').append('<option value="MEDA 92">MEDA 92 - Minor Surgery</option>');
  $('#txtClass').append('<option value="MEDA 94">MEDA 94 - Medication Administration</option>');
  $('#txtClass').append('<option value="MEDA 97">MEDA 97 - Directed Clinical Practice</option>');
  $('#txtClass').append('<option value="MEDA 110">MEDA 110 - Medical Terminology</option>');
  $('#txtClass').append('<option value="MEDA 115">MEDA 115 - Pathophysiology</option>');

 }else if($('#txtSubject').val()=='MFET'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="MFET 101">MFET 101 - Intro to Manufac Engineer Tech</option>');
  $('#txtClass').append('<option value="MFET 105">MFET 105 - Print Reading & Symbology</option>');
  $('#txtClass').append('<option value="MFET 107">MFET 107 - Intr to Manufacturing Capstone</option>');
  $('#txtClass').append('<option value="MFET 107D">MFET 107D - STEM Drone Building</option>');
  $('#txtClass').append('<option value="MFET 107G">MFET 107G - STEM Guitar Building</option>');
  $('#txtClass').append('<option value="MFET 110">MFET 110 - Industrial Safety</option>');
  $('#txtClass').append('<option value="MFET 115">MFET 115 - Properties of Materials</option>');
  $('#txtClass').append('<option value="MFET 120">MFET 120 - Manufacturing Processes</option>');
  $('#txtClass').append('<option value="MFET 150">MFET 150 - Manufacturing Automation</option>');
  $('#txtClass').append('<option value="MFET 210">MFET 210 - Statistical Process Control</option>');
  $('#txtClass').append('<option value="MFET 230">MFET 230 - Lean Manufacturing</option>');
  $('#txtClass').append('<option value="MFET 240">MFET 240 - 6 Sigma & Lean Implementation</option>');

 }else if($('#txtSubject').val()=='MLTT'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="MLTT 51">MLTT 51 - Directed Practicum Chemistry</option>');
  $('#txtClass').append('<option value="MLTT 52">MLTT 52 - Directed Practicum Hematology</option>');
  $('#txtClass').append('<option value="MLTT 53">MLTT 53 - Directed Practicum Immunology</option>');
  $('#txtClass').append('<option value="MLTT 54">MLTT 54 - Directed Practicum Microbio</option>');
  $('#txtClass').append('<option value="MLTT 61">MLTT 61 - Directed Practicum Chemistry</option>');
  $('#txtClass').append('<option value="MLTT 62">MLTT 62 - Directed Practicum Hematology</option>');
  $('#txtClass').append('<option value="MLTT 63">MLTT 63 - Directed Practicum Immunology</option>');
  $('#txtClass').append('<option value="MLTT 64">MLTT 64 - Directed Practicum Microbio</option>');
  $('#txtClass').append('<option value="MLTT 201">MLTT 201 - Clin Chem & Urinalysis</option>');
  $('#txtClass').append('<option value="MLTT 202">MLTT 202 - Clin Hematology & Immunology</option>');
  $('#txtClass').append('<option value="MLTT 203">MLTT 203 - Clinical Microbiology</option>');
  $('#txtClass').append('<option value="MLTT 204">MLTT 204 - Principles of Blood Banking</option>');

 }else if($('#txtSubject').val()=='MULT'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="MULT 100">MULT 100 - Intro to Visual Communication</option>');
  $('#txtClass').append('<option value="MULT 101">MULT 101 - Intro to Visual Communication</option>');
  $('#txtClass').append('<option value="MULT 101">MULT 101 - Introduction to Multimedia</option>');
  $('#txtClass').append('<option value="MULT 112">MULT 112 - Beginning Unity 3D</option>');
  $('#txtClass').append('<option value="MULT 114">MULT 114 - Intermediate Unity 3D</option>');
  $('#txtClass').append('<option value="MULT 120">MULT 120 - Intro to Video Game Design</option>');
  $('#txtClass').append('<option value="MULT 121">MULT 121 - Beginning Visual Communication</option>');
  $('#txtClass').append('<option value="MULT 121">MULT 121 - Int. Visual Communication</option>');
  $('#txtClass').append('<option value="MULT 121">MULT 121 - Introduction to Photoshop</option>');
  $('#txtClass').append('<option value="MULT 122">MULT 122 - Advanced Visual Communication</option>');
  $('#txtClass').append('<option value="MULT 122">MULT 122 - Int. Visual Communication</option>');
  $('#txtClass').append('<option value="MULT 123">MULT 123 - Digital Video I</option>');
  $('#txtClass').append('<option value="MULT 124">MULT 124 - Advanced Visual Communication</option>');
  $('#txtClass').append('<option value="MULT 124">MULT 124 - Digital Video II</option>');
  $('#txtClass').append('<option value="MULT 130">MULT 130 - Video Game Development I</option>');
  $('#txtClass').append('<option value="MULT 131">MULT 131 - Video Game Development II</option>');
  $('#txtClass').append('<option value="MULT 137">MULT 137 - 3D Animation I</option>');
  $('#txtClass').append('<option value="MULT 139">MULT 139 - 3D Animation II</option>');
  $('#txtClass').append('<option value="MULT 141">MULT 141 - 3D Animation III</option>');
  $('#txtClass').append('<option value="MULT 143">MULT 143 - 3D Animation IV</option>');
  $('#txtClass').append('<option value="MULT 148">MULT 148 - Business of Games</option>');
  $('#txtClass').append('<option value="MULT 150">MULT 150 - Beginning Unity</option>');
  $('#txtClass').append('<option value="MULT 152">MULT 152 - Intermediate Unity</option>');
  $('#txtClass').append('<option value="MULT 154">MULT 154 - Advanced Unity</option>');
  $('#txtClass').append('<option value="MULT 160">MULT 160 - Beginning Unreal Engine</option>');
  $('#txtClass').append('<option value="MULT 162">MULT 162 - Intermediate Unreal Engine</option>');
  $('#txtClass').append('<option value="MULT 164">MULT 164 - Advanced Unreal Engine</option>');
  $('#txtClass').append('<option value="MULT 290">MULT 290 - Independent Study</option>');

 }else if($('#txtSubject').val()=='MUSC'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="MUSC 50">MUSC 50 - Fundamentals Music Studio Engi</option>');
  $('#txtClass').append('<option value="MUSC 70">MUSC 70 - Commercial Music Performance</option>');
  $('#txtClass').append('<option value="MUSC 80">MUSC 80 - Intro Digital Audio and Midi</option>');
  $('#txtClass').append('<option value="MUSC 82">MUSC 82 - Audio Recording</option>');
  $('#txtClass').append('<option value="MUSC 84">MUSC 84 - Midi Production</option>');
  $('#txtClass').append('<option value="MUSC 95">MUSC 95 - Adv Topics Music Prod</option>');
  $('#txtClass').append('<option value="MUSC 152">MUSC 152 - Digital Audio Post Production</option>');
  $('#txtClass').append('<option value="MUSC 220A">MUSC 220A - Music Marketing and Promotion I</option');
  $('#txtClass').append('<option value="MUSC 220B">MUSC 220B - Music Marketing and Promotion II</option');
  $('#txtClass').append('<option value="MUSC 220C">MUSC 220C - Music Marketing and Promotion III</option');
  $('#txtClass').append('<option value="MUSC 220D">MUSC 220D - Music Marketing and Promotion IV</option');
  $('#txtClass').append('<option value="MUSC 290">MUSC 290 - Independent Study</option>');

 }else if($('#txtSubject').val()=='MUSI'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="MUSI 100">MUSI 100 - Introduction to Music</option>');
  $('#txtClass').append('<option value="MUSI 103">MUSI 103 - History of Rock Music</option>');
  $('#txtClass').append('<option value="MUSI 108">MUSI 108 - The Business of Music</option>');
  $('#txtClass').append('<option value="MUSI 109">MUSI 109 - World Music</option>');
  $('#txtClass').append('<option value="MUSI 110">MUSI 110 - Music for Elem School Teachers</option>');
  $('#txtClass').append('<option value="MUSI 111">MUSI 111 - Jazz History</option>');
  $('#txtClass').append('<option value="MUSI 111">MUSI 111 - Jazz-History and Development</option>');
  $('#txtClass').append('<option value="MUSI 123A">MUSI 123A - Recital Hour I</option>');
  $('#txtClass').append('<option value="MUSI 123B">MUSI 123B - Recital Hour II</option>');
  $('#txtClass').append('<option value="MUSI 124A">MUSI 124A - Piano Class I</option>');
  $('#txtClass').append('<option value="MUSI 124B">MUSI 124B - Piano Class II</option>');
  $('#txtClass').append('<option value="MUSI 123C">MUSI 123C - Recital Hour III</option>');
  $('#txtClass').append('<option value="MUSI 123D">MUSI 123D - Recital Hour IV</option>');
  $('#txtClass').append('<option value="MUSI 125">MUSI 125 - Music, the Arts, and Society</option>');
  $('#txtClass').append('<option value="MUSI 132A">MUSI 132A - Classical Guitar I</option>');
  $('#txtClass').append('<option value="MUSI 132B">MUSI 132B - Classical Guitar II</option>');
  $('#txtClass').append('<option value="MUSI 134A">MUSI 134A - Voice Class I</option');
  $('#txtClass').append('<option value="MUSI 134B">MUSI 134B - Voice Class II</option');
  $('#txtClass').append('<option value="MUSI 134C">MUSI 134C - Voice Class III</option');
  $('#txtClass').append('<option value="MUSI 134D">MUSI 134D - Voice Class IV</option');
  $('#txtClass').append('<option value="MUSI 135A">MUSI 135A - College Guitar I</option>');
  $('#txtClass').append('<option value="MUSI 136A">MUSI 136A - Guitar Class I</option');
  $('#txtClass').append('<option value="MUSI 136B">MUSI 136B - Guitar Class II</option');
  $('#txtClass').append('<option value="MUSI 148A">MUSI 148A - Music Theory I</option');
  $('#txtClass').append('<option value="MUSI 148B">MUSI 148B - Music Theory II</option');
  $('#txtClass').append('<option value="MUSI 150A">MUSI 150A - Basic Musicianship</option>');
  $('#txtClass').append('<option value="MUSI 153">MUSI 153 - Beginning Jazz Improvisation</option>');
  $('#txtClass').append('<option value="MUSI 174A">MUSI 174A - Individualized Study I</option>');
  $('#txtClass').append('<option value="MUSI 174B">MUSI 174B - Individualized Study II</option>');
  $('#txtClass').append('<option value="MUSI 174C">MUSI 174C - Individualized Study III</option>');
  $('#txtClass').append('<option value="MUSI 174D">MUSI 174D - Individualized Study IV</option>');
  $('#txtClass').append('<option value="MUSI 190">MUSI 190 - Electronic Music Studio</option>');
  $('#txtClass').append('<option value="MUSI 201">MUSI 201 - Recording Arts</option>');
  $('#txtClass').append('<option value="MUSI 202">MUSI 202 - Computer Music</option>');
  $('#txtClass').append('<option value="MUSI 203">MUSI 203 - Large Console Audio Recording</option>');
  $('#txtClass').append('<option value="MUSI 204">MUSI 204 - Audio System Design/Maintenanc</option>');
  $('#txtClass').append('<option value="MUSI 205A">MUSI 205A - Projects in Electronic Music I</option>');
  $('#txtClass').append('<option value="MUSI 205B">MUSI 205B - Projects Electronic Music II</option>');
  $('#txtClass').append('<option value="MUSI 206A">MUSI 206A - Projects in Composition I</option>');
  $('#txtClass').append('<option value="MUSI 206B">MUSI 206B - Projects in Composition II</option>');
  $('#txtClass').append('<option value="MUSI 209A">MUSI 209A - EMS Internship I</option>');
  $('#txtClass').append('<option value="MUSI 209B">MUSI 209B - EMS Internship II</option>');
  $('#txtClass').append('<option value="MUSI 209C">MUSI 209C - EMS Internship III</option>');
  $('#txtClass').append('<option value="MUSI 209D">MUSI 209D - EMS Internship IV</option>');
  $('#txtClass').append('<option value="MUSI 211A">MUSI 211A - Vocal Ensemble I</option>');
  $('#txtClass').append('<option value="MUSI 211B">MUSI 211B - Vocal Ensemble II</option>');
  $('#txtClass').append('<option value="MUSI 211C">MUSI 211C - Vocal Ensemble III</option>');
  $('#txtClass').append('<option value="MUSI 211D">MUSI 211D - Vocal Ensemble IV</option>');
  $('#txtClass').append('<option value="MUSI 224A">MUSI 224A - Piano Class III</option');
  $('#txtClass').append('<option value="MUSI 224B">MUSI 224B - Piano Class IV</option');
  $('#txtClass').append('<option value="MUSI 230A">MUSI 230A - Jazz Improvisation I</option>');
  $('#txtClass').append('<option value="MUSI 230B">MUSI 230B - Jazz Improvisation II</option>');
  $('#txtClass').append('<option value="MUSI 240">MUSI 240 - Voice Class III</option>');
  $('#txtClass').append('<option value="MUSI 241">MUSI 241 - Voice Class IV</option>');
  $('#txtClass').append('<option value="MUSI 248A">MUSI 248A - Music Theory III</option');
  $('#txtClass').append('<option value="MUSI 248B">MUSI 248B - Music Theory IV</option');
  $('#txtClass').append('<option value="MUSI 256A">MUSI 256A - Guitar Ensemble I</option>');
  $('#txtClass').append('<option value="MUSI 256B">MUSI 256B - Guitar Ensemble II</option>');
  $('#txtClass').append('<option value="MUSI 256C">MUSI 256C - Guitar Ensemble III</option>');
  $('#txtClass').append('<option value="MUSI 256D">MUSI 256D - Guitar Ensemble IV</option>');
  $('#txtClass').append('<option value="MUSI 257A">MUSI 257A - Guitar Ensemble I</option>');
  $('#txtClass').append('<option value="MUSI 257B">MUSI 257B - Guitar Ensemble II</option>');
  $('#txtClass').append('<option value="MUSI 257C">MUSI 257C - Guitar Ensemble III</option>');
  $('#txtClass').append('<option value="MUSI 257D">MUSI 257D - Guitar Ensemble IV</option>');
  $('#txtClass').append('<option value="MUSI 258A">MUSI 258A - Music Theory III</option>');
  $('#txtClass').append('<option value="MUSI 258B">MUSI 258B - Music Theory IV</option>');
  $('#txtClass').append('<option value="MUSI 259A">MUSI 259A - Choir I</option>');
  $('#txtClass').append('<option value="MUSI 259B">MUSI 259B - Choir II</option>');
  $('#txtClass').append('<option value="MUSI 259C">MUSI 259C - Choir III</option>');
  $('#txtClass').append('<option value="MUSI 259D">MUSI 259D - Choir IV</option>');
  $('#txtClass').append('<option value="MUSI 261A">MUSI 261A - World Music Ensemble I</option');
  $('#txtClass').append('<option value="MUSI 261B">MUSI 261B - World Music Ensemble II</option');
  $('#txtClass').append('<option value="MUSI 261C">MUSI 261C - World Music Ensemble III</option');
  $('#txtClass').append('<option value="MUSI 261D">MUSI 261D - World Music Ensemble IV</option');
  $('#txtClass').append('<option value="MUSI 262A">MUSI 262A - Jazz Big Band I</option');
  $('#txtClass').append('<option value="MUSI 262B">MUSI 262B - Jazz Big Band II</option');
  $('#txtClass').append('<option value="MUSI 262C">MUSI 262C - Jazz Big Band III</option');
  $('#txtClass').append('<option value="MUSI 262D">MUSI 262D - Jazz Big Band IV</option');
  $('#txtClass').append('<option value="MUSI 264A">MUSI 264A - Jazz Ensemble I</option>');
  $('#txtClass').append('<option value="MUSI 264B">MUSI 264B - Jazz Ensemble II</option>');
  $('#txtClass').append('<option value="MUSI 264C">MUSI 264C - Jazz Ensemble III</option>');
  $('#txtClass').append('<option value="MUSI 264D">MUSI 264D - Jazz Ensemble IV</option>');
  $('#txtClass').append('<option value="MUSI 268A">MUSI 268A - Begin Ear Training Lab I</option>');
  $('#txtClass').append('<option value="MUSI 268A">MUSI 268A - Beginning Ear Training I</option>');
  $('#txtClass').append('<option value="MUSI 268B">MUSI 268B - Beginning Ear Training II</option>');
  $('#txtClass').append('<option value="MUSI 268B">MUSI 268B - Beginning Ear Training Lab II</option>');
  $('#txtClass').append('<option value="MUSI 269A">MUSI 269A - Advanced Ear Training III</option>');
  $('#txtClass').append('<option value="MUSI 269A">MUSI 269A - Advanced Ear Training Lab III</option>');
  $('#txtClass').append('<option value="MUSI 269B">MUSI 269B - Advanced Ear Training IV</option>');
  $('#txtClass').append('<option value="MUSI 269B">MUSI 269B - Advanced Ear Training Lab IV</option>');
  $('#txtClass').append('<option value="MUSI 274A">MUSI 274A - Applied Music I</option>');
  $('#txtClass').append('<option value="MUSI 274B">MUSI 274B - Applied Music II</option>');
  $('#txtClass').append('<option value="MUSI 274C">MUSI 274C - Applied Music III</option>');
  $('#txtClass').append('<option value="MUSI 274D">MUSI 274D - Applied Music IV</option>');
  $('#txtClass').append('<option value="MUSI 290">MUSI 290 - Independent Study</option>');

 }else if($('#txtSubject').val()=='NLTE'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="NLTE 44">NLTE 44 - Supervised Tutoring/Nursery</option>');

 }else if($('#txtSubject').val()=='NRSE'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="NRSE 92">NRSE 92 - Nursing Student Success</option>');
  $('#txtClass').append('<option value="NRSE 108">NRSE 108 - Nursing Skills Laboratory II</option>');
  $('#txtClass').append('<option value="NRSE 121">NRSE 121 - Nursing Skills Laboratory I</option>');
  $('#txtClass').append('<option value="NRSE 140">NRSE 140 - Foundations of Nursing</option>');
  $('#txtClass').append('<option value="NRSE 141">NRSE 141 - Pharmacology for Nursing</option>');
  $('#txtClass').append('<option value="NRSE 142">NRSE 142 - Medical Surgical Nursing I</option>');
  $('#txtClass').append('<option value="NRSE 144">NRSE 144 - Medical Surgical Nursing II</option>');
  $('#txtClass').append('<option value="NRSE 146">NRSE 146 - Maternal-Health Child Nursing</option>');
  $('#txtClass').append('<option value="NRSE 206">NRSE 206 - Nursing Skills Laboratory III</option>');
  $('#txtClass').append('<option value="NRSE 208">NRSE 208 - Nursing Skills Laboratory IV</option>');
  $('#txtClass').append('<option value="NRSE 235">NRSE 235 - LVN to RN Transition</option>');
  $('#txtClass').append('<option value="NRSE 240">NRSE 240 - Medical/Surgical Nursing III</option>');
  $('#txtClass').append('<option value="NRSE 242">NRSE 242 - Mental Health & Geri</option>');
  $('#txtClass').append('<option value="NRSE 244">NRSE 244 - Medical Surgical Nursing IV</option>');
  $('#txtClass').append('<option value="NRSE 246">NRSE 246 - Leadership in Nursing</option>');
  $('#txtClass').append('<option value="NRSE 270">NRSE 270 - Work Experience in Nursing Ed</option>');

 }else if($('#txtSubject').val()=='NUTR'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="NUTR 150">NUTR 150 - Nutrition</option>');
  $('#txtClass').append('<option value="NUTR 153">NUTR 153 - Cultural Foods</option>');
  $('#txtClass').append('<option value="NUTR 155">NUTR 155 - Advanced Nutrition</option>');
  $('#txtClass').append('<option value="NUTR 160">NUTR 160 - Foods for Healthy Lifestyles</option>');
  $('#txtClass').append('<option value="NUTR 170">NUTR 170 - Nutrition and Fitness</option>');
  $('#txtClass').append('<option value="NUTR 180">NUTR 180 - Nutrition and Diet Therapy</option>');
  $('#txtClass').append('<option value="NUTR 270">NUTR 270 - Work Experience</option>');

 }else if($('#txtSubject').val()=='OCEA'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="OCEA 101">OCEA 101 - The Oceans</option>');

 }else if($('#txtSubject').val()=='PADM'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="PADM 200">PADM 200 - Intro to Pub. Admin.</option>');

 }else if($('#txtSubject').val()=='PARA'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="PARA 100">PARA 100 - Legal Procedures</option>');
  $('#txtClass').append('<option value="PARA 100A">PARA 100A - Paralegalism and Ethics</option>');
  $('#txtClass').append('<option value="PARA 100B">PARA 100B - Introduction to Law</option>');
  $('#txtClass').append('<option value="PARA 105">PARA 105 - Legal Research</option>');
  $('#txtClass').append('<option value="PARA 110">PARA 110 - Legal Writing & Communications</option>');
  $('#txtClass').append('<option value="PARA 115">PARA 115 - Civil Litigation - Procedures</option>');
  $('#txtClass').append('<option value="PARA 120">PARA 120 - Tort Law</option>');
  $('#txtClass').append('<option value="PARA 140">PARA 140 - Law Office Technology</option>');
  $('#txtClass').append('<option value="PARA 150">PARA 150 - Criminal Litigation/Procedure</option>');
  $('#txtClass').append('<option value="PARA 155">PARA 155 - Employment Law</option>');
  $('#txtClass').append('<option value="PARA 160">PARA 160 - Bankruptcy Law</option>');
  $('#txtClass').append('<option value="PARA 165">PARA 165 - Family Law</option>');
  $('#txtClass').append('<option value="PARA 170">PARA 170 - Corporate Law</option>');
  $('#txtClass').append('<option value="PARA 175">PARA 175 - Estates, Trusts, and Wills</option>');
  $('#txtClass').append('<option value="PARA 180">PARA 180 - Contract Law</option>');
  $('#txtClass').append('<option value="PARA 205">PARA 205 - Environmental Law</option>');
  $('#txtClass').append('<option value="PARA 210">PARA 210 - Immigration Law</option>');
  $('#txtClass').append('<option value="PARA 220">PARA 220 - Intellectual Property Law</option>');
  $('#txtClass').append('<option value="PARA 225">PARA 225 - Real Estate Law</option>');
  $('#txtClass').append('<option value="PARA 270">PARA 270 - Paralegal Internship/Work Exp</option>');

 }else if($('#txtSubject').val()=='PEAC'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="PEAC 101">PEAC 101 - Introduction to Peace Studies</option>');

 }else if($('#txtSubject').val()=='PERG'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="PERG 31">PERG 31 - Career Planning</option>');
  $('#txtClass').append('<option value="PERG 110">PERG 110 - Introduction to College</option>');
  $('#txtClass').append('<option value="PERG 120">PERG 120 - College Success</option>');
  $('#txtClass').append('<option value="PERG 130">PERG 130 - Career-Life Planning</option>');
  $('#txtClass').append('<option value="PERG 140">PERG 140 - Life Skills & Personal Adjust</option>');
  $('#txtClass').append('<option value="PERG 160">PERG 160 - Stress Management & Well-Being in the Modern World</option');

 }else if($('#txtSubject').val()=='PHIL'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="PHIL 100">PHIL 100 - Logic and Critical Thinking</option>');
  $('#txtClass').append('<option value="PHIL 101">PHIL 101 - Symbolic Logic</option>');
  $('#txtClass').append('<option value="PHIL 102A">PHIL 102A - Intro to Philos: Reality/Knowl</option>');
  $('#txtClass').append('<option value="PHIL 102B">PHIL 102B - Intro to Philosophy: Values</option>');
  $('#txtClass').append('<option value="PHIL 103">PHIL 103 - Historical Intro to Philosophy</option>');
  $('#txtClass').append('<option value="PHIL 104A">PHIL 104A - History of Western Philosophy</option>');
  $('#txtClass').append('<option value="PHIL 104B">PHIL 104B - History of Western Philosophy</option>');
  $('#txtClass').append('<option value="PHIL 105">PHIL 105 - Contemporary Philosophy</option>');
  $('#txtClass').append('<option value="PHIL 106">PHIL 106 - Asian Philosophy</option>');
  $('#txtClass').append('<option value="PHIL 107">PHIL 107 - Reflections on Human Nature</option>');
  $('#txtClass').append('<option value="PHIL 108">PHIL 108 - Perspects Human Nature/Society</option>');
  $('#txtClass').append('<option value="PHIL 109">PHIL 109 - Issues in Social Philosophy</option>');
  $('#txtClass').append('<option value="PHIL 110">PHIL 110 - Philosophy of Religion</option>');
  $('#txtClass').append('<option value="PHIL 111">PHIL 111 - Philosophy in Literature</option>');
  $('#txtClass').append('<option value="PHIL 125">PHIL 125 - Philosophy of Women</option>');
  $('#txtClass').append('<option value="PHIL 126">PHIL 126 - Intro. Contemp Gender Issues</option>');
  $('#txtClass').append('<option value="PHIL 130">PHIL 130 - Philosophy of Art & Music</option>');
  $('#txtClass').append('<option value="PHIL 131">PHIL 131 - Environmental Ethics</option>');
  $('#txtClass').append('<option value="PHIL 205">PHIL 205 - Critical Thinking/Writing</option>');
  $('#txtClass').append('<option value="PHIL 290">PHIL 290 - Independent Study</option>');

 }else if($('#txtSubject').val()=='PHLB'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="PHLB 50">PHLB 50 - Phlebotomy</option>');
  $('#txtClass').append('<option value="PHLB 60">PHLB 60 - Phlebotomy DCP</option>');
  $('#txtClass').append('<option value="PHLB 70">PHLB 70 - Phlebotomy</option>');
  $('#txtClass').append('<option value="PHLB 80">PHLB 80 - Phlebotomy DCP</option>');

 }else if($('#txtSubject').val()=='PHOT'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="PHOT 100">PHOT 100 - Basic Black&White Photography</option>');
  $('#txtClass').append('<option value="PHOT 100">PHOT 100 - Intro Black&White Photography</option>');
  $('#txtClass').append('<option value="PHOT 102">PHOT 102 - Directed Photo Lab Studies</option>');
  $('#txtClass').append('<option value="PHOT 103">PHOT 103 - Digital Photo Lab Studies</option>');
  $('#txtClass').append('<option value="PHOT 103">PHOT 103 - Intermediate Photo Lab Studies</option>');
  $('#txtClass').append('<option value="PHOT 105">PHOT 105 - Introduction to Photography</option>');
  $('#txtClass').append('<option value="PHOT 109">PHOT 109 - Photo Composition</option>');
  $('#txtClass').append('<option value="PHOT 125">PHOT 125 - Photo Business Operations</option>');
  $('#txtClass').append('<option value="PHOT 135">PHOT 135 - Intermed. B&W Photography</option>');
  $('#txtClass').append('<option value="PHOT 143">PHOT 143 - Intro. to Digital Photography</option>');
  $('#txtClass').append('<option value="PHOT 150">PHOT 150 - History of Photography</option>');
  $('#txtClass').append('<option value="PHOT 165">PHOT 165 - Online Portfolio/Website</option>');
  $('#txtClass').append('<option value="PHOT 180">PHOT 180 - Photo Editing: Lightroom</option>');
  $('#txtClass').append('<option value="PHOT 181">PHOT 181 - Photo Editing: Photoshop</option>');
  $('#txtClass').append('<option value="PHOT 200A">PHOT 200A - Photographic Lighting Techniqu</option>');
  $('#txtClass').append('<option value="PHOT 203">PHOT 203 - Intermediate Lighting</option>');
  $('#txtClass').append('<option value="PHOT 205">PHOT 205 - Travel Photography</option>');
  $('#txtClass').append('<option value="PHOT 211">PHOT 211 - Analog Creative Techniques</option>');
  $('#txtClass').append('<option value="PHOT 213">PHOT 213 - Intermediate Analog Techniques</option>');
  $('#txtClass').append('<option value="PHOT 217">PHOT 217 - Advanced Digital Techniques</option>');
  $('#txtClass').append('<option value="PHOT 218">PHOT 218 - Intermediate Photo Techniques</option>');
  $('#txtClass').append('<option value="PHOT 220">PHOT 220 - Portraiture</option>');
  $('#txtClass').append('<option value="PHOT 224">PHOT 224 - Color Management</option>');
  $('#txtClass').append('<option value="PHOT 235">PHOT 235 - Adv Black & White Photography</option>');
  $('#txtClass').append('<option value="PHOT 243">PHOT 243 - Advanced Digital Photography</option>');
  $('#txtClass').append('<option value="PHOT 245">PHOT 245 - Landscape Photography</option>');
  $('#txtClass').append('<option value="PHOT 259A">PHOT 259A - Photographic Portfolio</option>');
  $('#txtClass').append('<option value="PHOT 259B">PHOT 259B - Photographic Portfolio II</option>');

 }else if($('#txtSubject').val()=='PHYN'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="PHYN 100">PHYN 100 - Survey of Physical Science</option>');
  $('#txtClass').append('<option value="PHYN 101">PHYN 101 - Survey/Physical Science Lab</option>');
  $('#txtClass').append('<option value="PHYN 105">PHYN 105 - Phy Sci for Elem Ed</option>');
  $('#txtClass').append('<option value="PHYN 114">PHYN 114 - Weather and Climate</option>');

 }else if($('#txtSubject').val()=='PHYR'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="PHYR 210">PHYR 210 - Physical Therapy Introduction</option>');
  $('#txtClass').append('<option value="PHYR 215">PHYR 215 - Documentation Skills</option>');
  $('#txtClass').append('<option value="PHYR 220">PHYR 220 - Growth, Development, Aging</option>');
  $('#txtClass').append('<option value="PHYR 225">PHYR 225 - Acute Care Techniques</option>');
  $('#txtClass').append('<option value="PHYR 225L">PHYR 225L - Acute Care Techniques Lab</option>');
  $('#txtClass').append('<option value="PHYR 230">PHYR 230 - Introduction to Human Movement</option>');
  $('#txtClass').append('<option value="PHYR 240">PHYR 240 - Introduction to Pathology</option>');
  $('#txtClass').append('<option value="PHYR 250">PHYR 250 - Intro to Therapeutic Exercise</option>');
  $('#txtClass').append('<option value="PHYR 260">PHYR 260 - Neurology and Rehabilitation</option>');
  $('#txtClass').append('<option value="PHYR 260L">PHYR 260L - Neurology and Rehab Lab</option>');
  $('#txtClass').append('<option value="PHYR 263">PHYR 263 - Patient Management</option>');
  $('#txtClass').append('<option value="PHYR 264">PHYR 264 - Therapeutic Modalities</option>');
  $('#txtClass').append('<option value="PHYR 264L">PHYR 264L - Therapeutic Modalities Lab</option>');
  $('#txtClass').append('<option value="PHYR 275">PHYR 275 - Orthopedic Exercise and Rehabi</option>');
  $('#txtClass').append('<option value="PHYR 275L">PHYR 275L - Orthopedic Exercise/Rehab Lab</option>');
  $('#txtClass').append('<option value="PHYR 280">PHYR 280 - Organization/Physical Therapy</option>');
  $('#txtClass').append('<option value="PHYR 291">PHYR 291 - Directed Clinical Practice I</option>');
  $('#txtClass').append('<option value="PHYR 295">PHYR 295 - Directed Clinical Practice II</option>');
  $('#txtClass').append('<option value="PHYR 298">PHYR 298 - Directed Clinical Practice III</option>');

 }else if($('#txtSubject').val()=='PHYS'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="PHYS 100">PHYS 100 - Introductory Physics</option>');
  $('#txtClass').append('<option value="PHYS 125">PHYS 125 - General Physics</option>');
  $('#txtClass').append('<option value="PHYS 126">PHYS 126 - General Physics II</option>');
  $('#txtClass').append('<option value="PHYS 180A">PHYS 180A - General Physics I</option>');
  $('#txtClass').append('<option value="PHYS 180B">PHYS 180B - General Physics II</option>');
  $('#txtClass').append('<option value="PHYS 181A">PHYS 181A - General Physics Laboratory I</option>');
  $('#txtClass').append('<option value="PHYS 181B">PHYS 181B - General Physics Laboratory II</option>');
  $('#txtClass').append('<option value="PHYS 195">PHYS 195 - Mechanics</option>');
  $('#txtClass').append('<option value="PHYS 196">PHYS 196 - Electricity and Magnetism</option>');
  $('#txtClass').append('<option value="PHYS 197">PHYS 197 - Waves,Optics,Modern Physics</option>');
  $('#txtClass').append('<option value="PHYS 277C">PHYS 277C - Svc Lrng/Community</option>');

 }else if($('#txtSubject').val()=='POLI'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="POLI 101">POLI 101 - Intro to Political Science</option>');
  $('#txtClass').append('<option value="POLI 102">POLI 102 - Intro to Amer Govt</option>');
  $('#txtClass').append('<option value="POLI 102">POLI 102 - The American Political System</option>');
  $('#txtClass').append('<option value="POLI 103">POLI 103 - Comparative Politics</option>');
  $('#txtClass').append('<option value="POLI 121">POLI 121 - American Political Development</option>');
  $('#txtClass').append('<option value="POLI 124">POLI 124 - Intro to Political Theory</option>');
  $('#txtClass').append('<option value="POLI 140">POLI 140 - Contemporary Int&apos;l Politics</option>');
  $('#txtClass').append('<option value="POLI 201">POLI 201 - Elementary Stat for Poli Sci</option>');
  $('#txtClass').append('<option value="POLI 201X">POLI 201X - POLI 201/POLI 31</option>');

 }else if($('#txtSubject').val()=='PSYC'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="PSYC 31">PSYC 31 - Social/Behav Stats Support</option>');
  $('#txtClass').append('<option value="PSYC 101">PSYC 101 - General Psychology</option>');
  $('#txtClass').append('<option value="PSYC 111">PSYC 111 - Psy/Soc/Aspects/Aging/Death/Dy</option>');
  $('#txtClass').append('<option value="PSYC 112">PSYC 112 - Interpersonal Relations</option>');
  $('#txtClass').append('<option value="PSYC 121">PSYC 121 - Intro to Child Psychology</option>');
  $('#txtClass').append('<option value="PSYC 125">PSYC 125 - Intro to Behavior Modification</option>');
  $('#txtClass').append('<option value="PSYC 130">PSYC 130 - Intro to Community Psychology</option>');
  $('#txtClass').append('<option value="PSYC 133">PSYC 133 - Psychology of Women</option>');
  $('#txtClass').append('<option value="PSYC 135">PSYC 135 - Marriage and Family Relations</option>');
  $('#txtClass').append('<option value="PSYC 137">PSYC 137 - Human Sexual Behavior</option>');
  $('#txtClass').append('<option value="PSYC 155">PSYC 155 - Introduction to Personality</option>');
  $('#txtClass').append('<option value="PSYC 161">PSYC 161 - Introduction to Counseling</option>');
  $('#txtClass').append('<option value="PSYC 166">PSYC 166 - Intro to Social Psychology</option>');
  $('#txtClass').append('<option value="PSYC 201">PSYC 201 - Opportunities in Psychology</option>');
  $('#txtClass').append('<option value="PSYC 211">PSYC 211 - Learning</option>');
  $('#txtClass').append('<option value="PSYC 230">PSYC 230 - Psych of Lifespan Development</option>');
  $('#txtClass').append('<option value="PSYC 245">PSYC 245 - Abnormal Psychology</option>');
  $('#txtClass').append('<option value="PSYC 255">PSYC 255 - Intro to Psychological Resrch</option>');
  $('#txtClass').append('<option value="PSYC 258">PSYC 258 - Behavioral Science Statistics</option>');
  $('#txtClass').append('<option value="PSYC 258X">PSYC 258X - Psychology 258/Psychology 31</option>');
  $('#txtClass').append('<option value="PSYC 259">PSYC 259 - Behavioral Sci Statistics Lab</option>');
  $('#txtClass').append('<option value="PSYC 260">PSYC 260 - Intro to Physiological Psych</option>');
  $('#txtClass').append('<option value="PSYC 276">PSYC 276 - Field Work/Psychological Svs</option>');
  $('#txtClass').append('<option value="PSYC 283">PSYC 283 - Cognitive Psychology</option>');
  $('#txtClass').append('<option value="PSYC 401">PSYC 401 - Organizational Psyc</option>');

 }else if($('#txtSubject').val()=='RADT'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="RADT 50">RADT 50 - Concepts in Imaging Technology</option>');
  $('#txtClass').append('<option value="RADT 60">RADT 60 - Venipuncture for Radiology</option>');
  $('#txtClass').append('<option value="RADT 86">RADT 86 - Fluoroscopy & Radiation Safety</option>');
  $('#txtClass').append('<option value="RADT 86L">RADT 86L - Fluoro & Rad Safety Lab</option>');
  $('#txtClass').append('<option value="RADT 101">RADT 101 - Basic Radiologic Technology</option>');
  $('#txtClass').append('<option value="RADT 110">RADT 110 - Recording Media</option>');
  $('#txtClass').append('<option value="RADT 121">RADT 121 - Radiographic Exposure</option>');
  $('#txtClass').append('<option value="RADT 121C">RADT 121C - Radiographic Exposure Lab</option>');
  $('#txtClass').append('<option value="RADT 131">RADT 131 - Patient Care</option>');
  $('#txtClass').append('<option value="RADT 190">RADT 190 - Radiographic Positioning I</option>');
  $('#txtClass').append('<option value="RADT 190L">RADT 190L - RADT Positioning I</option>');
  $('#txtClass').append('<option value="RADT 192">RADT 192 - Image Analysis</option>');
  $('#txtClass').append('<option value="RADT 201">RADT 201 - Radiographic Positioning II</option>');
  $('#txtClass').append('<option value="RADT 201L">RADT 201L - Positioning II Lab</option>');
  $('#txtClass').append('<option value="RADT 210">RADT 210 - Radiographic Positioning III</option>');
  $('#txtClass').append('<option value="RADT 210L">RADT 210L - Rad Positioning III Lab</option>');
  $('#txtClass').append('<option value="RADT 221">RADT 221 - Advanced Imaging Techniques</option>');
  $('#txtClass').append('<option value="RADT 230">RADT 230 - Radiologic Science</option>');
  $('#txtClass').append('<option value="RADT 231">RADT 231 - Pathology for Imaging Sciences</option>');
  $('#txtClass').append('<option value="RADT 240">RADT 240 - Radiation Biology</option>');
  $('#txtClass').append('<option value="RADT 241">RADT 241 - Sectional Anatomy</option>');
  $('#txtClass').append('<option value="RADT 241L">RADT 241L - Sectional Anatomy Lab</option>');
  $('#txtClass').append('<option value="RADT 242">RADT 242 - Organization of Radiology</option>');
  $('#txtClass').append('<option value="RADT 254C">RADT 254C - Directed Clinical Practice III</option>');
  $('#txtClass').append('<option value="RADT 255C">RADT 255C - Directed Clinical Practice VI</option>');
  $('#txtClass').append('<option value="RADT 256A">RADT 256A - Directed Clinical Practice I</option>');
  $('#txtClass').append('<option value="RADT 256B">RADT 256B - Directed Clinical Practice II</option>');
  $('#txtClass').append('<option value="RADT 256C">RADT 256C - Directed Clinical Practice III</option>');
  $('#txtClass').append('<option value="RADT 257A">RADT 257A - Directed Clinical Practice IV</option>');
  $('#txtClass').append('<option value="RADT 257B">RADT 257B - Directed Clinical Practice V</option>');
  $('#txtClass').append('<option value="RADT 257C">RADT 257C - Directed Clinical Practice VI</option>');
  $('#txtClass').append('<option value="RADT 271">RADT 271 - Digital Mammography</option>');
  $('#txtClass').append('<option value="RADT 271L">RADT 271L - Digital Mammography Laboratory</option>');
  $('#txtClass').append('<option value="RADT 275">RADT 275 - Computed Tomography Imaging</option>');
  $('#txtClass').append('<option value="RADT 275L">RADT 275L - CT Imaging Lab</option>');

 }else if($('#txtSubject').val()=='REAL'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="REAL 101">REAL 101 - Real Estate Principles</option>');
  $('#txtClass').append('<option value="REAL 105">REAL 105 - Legal Aspects of Real Estate</option>');
  $('#txtClass').append('<option value="REAL 105">REAL 105 - Legal Aspects of Real Estate I</option>');
  $('#txtClass').append('<option value="REAL 110">REAL 110 - Pncpls Real Est Appraisal I</option>');
  $('#txtClass').append('<option value="REAL 115">REAL 115 - Real Estate Finance</option>');
  $('#txtClass').append('<option value="REAL 120">REAL 120 - Real Estate Practice</option>');
  $('#txtClass').append('<option value="REAL 125">REAL 125 - Real Estate Economics</option>');
  $('#txtClass').append('<option value="REAL 130">REAL 130 - Real Property Management</option>');
  $('#txtClass').append('<option value="REAL 151">REAL 151 - Real Estate Comput Application</option>');

 }else if($('#txtSubject').val()=='RTVF'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="RTVF 100">RTVF 100 - Intro to Electronic Media</option>');
  $('#txtClass').append('<option value="RTVF 105">RTVF 105 - Media Performance</option>');
  $('#txtClass').append('<option value="RTVF 106">RTVF 106 - Acting for Radio/Voice-Over</option>');
  $('#txtClass').append('<option value="RTVF 107">RTVF 107 - Audio Production</option>');
  $('#txtClass').append('<option value="RTVF 110">RTVF 110 - Introduction to Scriptwriting</option>');
  $('#txtClass').append('<option value="RTVF 111">RTVF 111 - On Location Filming</option>');
  $('#txtClass').append('<option value="RTVF 112">RTVF 112 - Documentary Film Production</option>');
  $('#txtClass').append('<option value="RTVF 118">RTVF 118 - Television Studio Operations</option>');
  $('#txtClass').append('<option value="RTVF 119">RTVF 119 - Acting for Film and Television</option>');
  $('#txtClass').append('<option value="RTVF 121">RTVF 121 - Performance for Television</option>');
  $('#txtClass').append('<option value="RTVF 124">RTVF 124 - Single Camera Production</option>');
  $('#txtClass').append('<option value="RTVF 125">RTVF 125 - Adv TV and Video Production</option>');
  $('#txtClass').append('<option value="RTVF 126">RTVF 126 - Art Dir Film/TV</option>');
  $('#txtClass').append('<option value="RTVF 128">RTVF 128 - Lighting for TV and Film</option>');
  $('#txtClass').append('<option value="RTVF 131">RTVF 131 - Advanced Radio Performance</option>');
  $('#txtClass').append('<option value="RTVF 140">RTVF 140 - Radio and TV Newswriting</option>');
  $('#txtClass').append('<option value="RTVF 141">RTVF 141 - Radio News Production</option>');
  $('#txtClass').append('<option value="RTVF 145">RTVF 145 - Television News Production</option>');
  $('#txtClass').append('<option value="RTVF 146">RTVF 146 - The TV News Field Report</option>');
  $('#txtClass').append('<option value="RTVF 151">RTVF 151 - Introduction to Multimedia</option>');
  $('#txtClass').append('<option value="RTVF 153">RTVF 153 - Intro to Nonlinear Editing</option>');
  $('#txtClass').append('<option value="RTVF 160">RTVF 160 - Introduction to Cinema</option>');
  $('#txtClass').append('<option value="RTVF 167">RTVF 167 - Motion Picture Production</option>');
  $('#txtClass').append('<option value="RTVF 246A">RTVF 246A - Production Management Workshop</option>');
  $('#txtClass').append('<option value="RTVF 246B">RTVF 246B - Production Crew Workshop</option>');
  $('#txtClass').append('<option value="RTVF 246C">RTVF 246C - Post-Production Workshop</option>');
  $('#txtClass').append('<option value="RTVF 246D">RTVF 246D - Directing Workshop</option>');
  $('#txtClass').append('<option value="RTVF 247A">RTVF 247A - Radio Broadcasting Production</option>');
  $('#txtClass').append('<option value="RTVF 247B">RTVF 247B - Radio Broadcasting-News</option>');
  $('#txtClass').append('<option value="RTVF 247C">RTVF 247C - Radio Broadcasting-Music</option>');
  $('#txtClass').append('<option value="RTVF 247D">RTVF 247D - Radio Brdcast Workshop Program</option>');
  $('#txtClass').append('<option value="RTVF 249A">RTVF 249A - TV News Wrkshp-Producing</option>');
  $('#txtClass').append('<option value="RTVF 249B">RTVF 249B - TV News Wrkshp Tape Coordinatn</option>');
  $('#txtClass').append('<option value="RTVF 249C">RTVF 249C - TV News Wrkshp/Assgnmnt Editng</option>');
  $('#txtClass').append('<option value="RTVF 249D">RTVF 249D - TV News Wrkshp/Reporting</option>');

 }else if($('#txtSubject').val()=='RUSS'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="RUSS 101">RUSS 101 - First Course in Russian</option>');
  $('#txtClass').append('<option value="RUSS 102">RUSS 102 - Second Course in Russian</option>');
  $('#txtClass').append('<option value="RUSS 201">RUSS 201 - Third Course in Russian</option>');

 }else if($('#txtSubject').val()=='SDGE'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="SDGE 90">SDGE 90 - Electric Lineman IA</option');
  $('#txtClass').append('<option value="SDGE 91">SDGE 91 - Electric Lineman IB</option');
  $('#txtClass').append('<option value="SDGE 92">SDGE 92 - Electric Lineman IIA</option');
  $('#txtClass').append('<option value="SDGE 93">SDGE 93 - Electric Lineman IIB</option');
  $('#txtClass').append('<option value="SDGE 94">SDGE 94 - Electric Lineman IIIA</option');
  $('#txtClass').append('<option value="SDGE 95">SDGE 95 - Electric Lineman IIIB</option');


 }else if($('#txtSubject').val()=='SOCO'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="SOCO 101">SOCO 101 - Principles of Sociology</option>');
  $('#txtClass').append('<option value="SOCO 110">SOCO 110 - Contemporary Social Problems</option>');
  $('#txtClass').append('<option value="SOCO 125">SOCO 125 - Sociology of the Family</option>');
  $('#txtClass').append('<option value="SOCO 150">SOCO 150 - Sociology of Latinos/Latinas</option>');
  $('#txtClass').append('<option value="SOCO 201">SOCO 201 - Adv Principles of Sociology</option>');
  $('#txtClass').append('<option value="SOCO 220">SOCO 220 - Research Methods in Sociology</option>');
  $('#txtClass').append('<option value="SOCO 223">SOCO 223 - Globalization & Social Change</option>');

 }else if($('#txtSubject').val()=='SPAN'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="SPAN 101">SPAN 101 - First Course in Spanish</option>');
  $('#txtClass').append('<option value="SPAN 102">SPAN 102 - Second Course in Spanish</option>');
  $('#txtClass').append('<option value="SPAN 125">SPAN 125 - Medical Spanish I</option>');
  $('#txtClass').append('<option value="SPAN 201">SPAN 201 - Third Course in Spanish</option>');
  $('#txtClass').append('<option value="SPAN 202">SPAN 202 - Fourth Course in Spanish</option>');
  $('#txtClass').append('<option value="SPAN 210">SPAN 210 - Conversat/Composit Spanish I</option>');
  $('#txtClass').append('<option value="SPAN 211">SPAN 211 - Conversat/Composit Spanish II</option>');
  $('#txtClass').append('<option value="SPAN 215">SPAN 215 - Spanish for Spnish Speakers I</option>');
  $('#txtClass').append('<option value="SPAN 216">SPAN 216 - Span for Span Speakers II</option>');

 }else if($('#txtSubject').val()=='SUST'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="SUST 101">SUST 101 - Introduction to Sustainability</option>');
  $('#txtClass').append('<option value="SUST 270">SUST 270 - Sustainability Work Experience</option>');

 }else if($('#txtSubject').val()=='TAGA'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="TAGA 101">TAGA 101 - First Course in Tagalog</option>');
  $('#txtClass').append('<option value="TAGA 102">TAGA 102 - Second Course in Tagalog</option>');
  $('#txtClass').append('<option value="TAGA 201">TAGA 201 - Third Course in Tagalog</option>');

 }else if($('#txtSubject').val()=='TROL'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="TROL 301">TROL 301 - Light Rail Vehicle I</option>');
  $('#txtClass').append('<option value="TROL 302">TROL 302 - Light Rail Vehicle II</option>');
  $('#txtClass').append('<option value="TROL 303">TROL 303 - Light Rail Vehicle III</option>');
  $('#txtClass').append('<option value="TROL 304">TROL 304 - San Diego Trolley Lrv IV</option>');

 }else if($('#txtSubject').val()=='VIET'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="VIET 101">VIET 101 - First Course in Vietnamese</option>');
  $('#txtClass').append('<option value="VIET 102">VIET 102 - Second Course in Vietnamese</option>');
  $('#txtClass').append('<option value="VIET 201">VIET 201 - Third Course in Vietnamese</option>');

 }else if($('#txtSubject').val()=='VTAH'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="VTAH 100A">VTAH 100A - Animal Care and Management</option>');
  $('#txtClass').append('<option value="VTAH 100B">VTAH 100B - Advanced Animal Care And Mgt</option>');
  $('#txtClass').append('<option value="VTAH 115">VTAH 115 - Veterinary Office Procedures</option>');
  $('#txtClass').append('<option value="VTAH 125">VTAH 125 - Veterinary Clinical Pathology</option>');
  $('#txtClass').append('<option value="VTAH 125L">VTAH 125L - Clin Path Lab</option>');
  $('#txtClass').append('<option value="VTAH 135">VTAH 135 - Veterinary Pharmacology</option>');
  $('#txtClass').append('<option value="VTAH 145">VTAH 145 - Veterinary A & P</option>');
  $('#txtClass').append('<option value="VTAH 145L">VTAH 145L - Veterinary A & P Lab</option>');
  $('#txtClass').append('<option value="VTAH 155">VTAH 155 - Fundmntls Of Anml Health Tec</option>');
  $('#txtClass').append('<option value="VTAH 155L">VTAH 155L - Fundmntls Of Anml Health Tec L</option>');
  $('#txtClass').append('<option value="VTAH 205">VTAH 205 - Diseases of Domestic Animals</option>');
  $('#txtClass').append('<option value="VTAH 215">VTAH 215 - Veterinary Radiography</option>');
  $('#txtClass').append('<option value="VTAH 215L">VTAH 215L - Veterinary Radiography Lab</option>');
  $('#txtClass').append('<option value="VTAH 225">VTAH 225 - Animal Surgery and Anesthesia</option>');
  $('#txtClass').append('<option value="VTAH 227">VTAH 227 - Surgical Nursing Lab 1</option>');
  $('#txtClass').append('<option value="VTAH 229">VTAH 229 - Advanced Surgical Nursing</option>');
  $('#txtClass').append('<option value="VTAH 260">VTAH 260 - Laboratory Animal Medicine</option>');
  $('#txtClass').append('<option value="VTAH 260L">VTAH 260L - Lab Animal Medicine Lab</option>');
  $('#txtClass').append('<option value="VTAH 270">VTAH 270 - Veterinary Work Experience</option>');

 }else if($('#txtSubject').val()=='WEBD'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="WEBD 127">WEBD 127 - Creating User-Centered Content</option>');
  $('#txtClass').append('<option value="WEBD 152">WEBD 152 - HTML and CSS - Beginning</option>');
  $('#txtClass').append('<option value="WEBD 153">WEBD 153 - Beginning Web Databases</option>');
  $('#txtClass').append('<option value="WEBD 164">WEBD 164 - Javascript for Web Development</option>');
  $('#txtClass').append('<option value="WEBD 166">WEBD 166 - PHP: An Introduction</option>');
  $('#txtClass').append('<option value="WEBD 167">WEBD 167 - Using Web Databases</option>');
  $('#txtClass').append('<option value="WEBD 168">WEBD 168 - Intermediate HTML and CSS</option>');
  $('#txtClass').append('<option value="WEBD 169">WEBD 169 - Website Development Using CMS</option>');
  $('#txtClass').append('<option value="WEBD 170">WEBD 170 - Javascript for Web Development</option>');
  $('#txtClass').append('<option value="WEBD 171">WEBD 171 - Advanced JavaScript</option>');
  $('#txtClass').append('<option value="WEBD 173">WEBD 173 - E-Commerce Website Creation</option>');
  $('#txtClass').append('<option value="WEBD 191">WEBD 191 - Professional Practices</option>');

 }else if($('#txtSubject').val()=='WMNS'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="WMNS 101">WMNS 101 - Gender & Women&apos;s Studies</option>');

 }else if($('#txtSubject').val()=='WORK'){
  $('#txtClass').append('<option value="">All</option>');
  $('#txtClass').append('<option value="WORK 270">WORK 270 - Occupational Work Experience</option>');
  $('#txtClass').append('<option value="WORK 272">WORK 272 - General Work Experience</option>');

 }else{
  $('#txtClass').append('<option value="">All</option>');
 }
});