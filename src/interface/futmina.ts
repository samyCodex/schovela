enum Faculty {
    SAAT = "School of Agriculture and Agricultural Technology (SAAT)",
    SEET = "School of Electrical Engineering and Technology (SEET)",
    SIT = "School of Innovative Technology (SIT)",
    SET = "School of Environmental Technology (SET)",
    SICT = "School of Information and Communication Technology (SICT)",
    SIPET = "School of Infrastructure, Process Engineering and Technology (SIPET)",
    SLS = "School of Life Science (SLS)",
    SPS = "School of Physical Science (SPS)",
    SSTE = "School of Science and Technology Education (SSTE)",
  }

  
  interface FieldOptions {
    [Faculty.SAAT] : string[];
    [Faculty.SEET]: string[];
    [Faculty.SET] : string[];
    [Faculty.SICT] : string[];
    [Faculty.SIPET] : string[];
    [Faculty.SIT] : string[];
    [Faculty.SLS] : string[];
    [Faculty.SPS] : string[];
    [Faculty.SSTE] : string[];
  }


  const faculty: FieldOptions = {
    [Faculty.SAAT]: [
      "Agricultural Economics and Farm Management",
      "Agricultural Extensions and Rural Development",
      "Animal Production",
      "Crop Production",
      "Food Science and Technology",
      "Soil Science and Land Management",
      "Water Resources, Aquaculture and Fisheries Technology",
    ],
    [Faculty.SEET]: [
      "Electrical and Electronics Engineering",
      "Mechatronics Engineering",
      "Computer Engineering",
      "Telecommunication Engineering"
    ],
    [Faculty.SIT]: [
      "Entrepreneurship and Business Studies",
      "Project Management Technology",
      "Logistics and Transport Technology"
    ],
    [Faculty.SET]: [
      "Architecture",
      "Building Technology",
      "Estate Management and Valuation",
      "Quantity Surveying",
      "Surveying and Geoinformatics",
      "Urban and Regional Planning"
    ],
    [Faculty.SICT]: [
      "Computer Science",
      "Information Technology",
      "Information Science and media Studies",
      "Cyber Security"
    ],
    [Faculty.SIPET]: [
      "Agricultural and Bio-resources Engineering",
      "Chemical Engineering",
      "Civil Engineering",
      "Material and Metallurgical Engineering",
      "Mechanical Engineering",
      "Petroleum and Gas Engineering"
    ],
    [Faculty.SLS]: [
      "Animal Biology",
      "Biochemistry",
      "Microbiology",
      "Plant Biology"
    ],
    [Faculty.SPS]: [
      "Geography (With Options in Meteorology, Remote Sensing)",
      "Chemistry (With Options in Polymer Science, Industrial Chemistry)",
      "Mathematics (With Options in Industrial Mathematics, Pure and Applied Mathematics)",
      "Physics (With Options in Electronics, Telecommunications, Computer Science)",
      "Statistics",
      "Geology"
    ],
    [Faculty.SSTE]: [
      "Industrial and Technology Education (With Options in Automobile Technology)",
      "Industrial and Technology Education (With Options in Electrical and Electronics Technology)",
      "Industrial and Technology Education (With Options in Building Technology)",
      "Industrial and Technology Education (With Options in Metalwork Technology)",
      "Industrial and Technology Education (With Options in Woodwork Technology)",
      "Science Education (With Options in Biology Education)",
      "Science Education (With Options in Physics Education)",
      "Science Education (With Options in Chemistry Education)",
      "Science Education (With Options in Geography Education)",
      "Science Education (With Options in Mathematics Education)",
      "Science Education (With Options in Educational Technology)"
    ]
  };
  
  

  export {faculty, Faculty, FieldOptions}