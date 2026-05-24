// data/countries.js  — 249 countries + detailed scholarship data for major destinations

const ALL_COUNTRIES = [
  {n:"Afghanistan",f:"🇦🇫",r:"Asia",l:"Dari, Pashto"},
  {n:"Albania",f:"🇦🇱",r:"Europe",l:"Albanian"},
  {n:"Algeria",f:"🇩🇿",r:"Africa",l:"Arabic, Tamazight"},
  {n:"Andorra",f:"🇦🇩",r:"Europe",l:"Catalan"},
  {n:"Angola",f:"🇦🇴",r:"Africa",l:"Portuguese"},
  {n:"Antigua and Barbuda",f:"🇦🇬",r:"Americas",l:"English"},
  {n:"Argentina",f:"🇦🇷",r:"Americas",l:"Spanish"},
  {n:"Armenia",f:"🇦🇲",r:"Asia",l:"Armenian"},
  {n:"Australia",f:"🇦🇺",r:"Oceania",l:"English"},
  {n:"Austria",f:"🇦🇹",r:"Europe",l:"German"},
  {n:"Azerbaijan",f:"🇦🇿",r:"Asia",l:"Azerbaijani"},
  {n:"Bahamas",f:"🇧🇸",r:"Americas",l:"English"},
  {n:"Bahrain",f:"🇧🇭",r:"Asia",l:"Arabic"},
  {n:"Bangladesh",f:"🇧🇩",r:"Asia",l:"Bengali"},
  {n:"Barbados",f:"🇧🇧",r:"Americas",l:"English"},
  {n:"Belarus",f:"🇧🇾",r:"Europe",l:"Belarusian, Russian"},
  {n:"Belgium",f:"🇧🇪",r:"Europe",l:"Dutch, French, German"},
  {n:"Belize",f:"🇧🇿",r:"Americas",l:"English"},
  {n:"Benin",f:"🇧🇯",r:"Africa",l:"French"},
  {n:"Bhutan",f:"🇧🇹",r:"Asia",l:"Dzongkha"},
  {n:"Bolivia",f:"🇧🇴",r:"Americas",l:"Spanish"},
  {n:"Bosnia and Herzegovina",f:"🇧🇦",r:"Europe",l:"Bosnian, Serbian"},
  {n:"Botswana",f:"🇧🇼",r:"Africa",l:"Setswana, English"},
  {n:"Brazil",f:"🇧🇷",r:"Americas",l:"Portuguese"},
  {n:"Brunei",f:"🇧🇳",r:"Asia",l:"Malay"},
  {n:"Bulgaria",f:"🇧🇬",r:"Europe",l:"Bulgarian"},
  {n:"Burkina Faso",f:"🇧🇫",r:"Africa",l:"French"},
  {n:"Burundi",f:"🇧🇮",r:"Africa",l:"French, Kirundi"},
  {n:"Cabo Verde",f:"🇨🇻",r:"Africa",l:"Portuguese"},
  {n:"Cambodia",f:"🇰🇭",r:"Asia",l:"Khmer"},
  {n:"Cameroon",f:"🇨🇲",r:"Africa",l:"French, English"},
  {n:"Canada",f:"🇨🇦",r:"Americas",l:"English, French"},
  {n:"Central African Republic",f:"🇨🇫",r:"Africa",l:"French, Sango"},
  {n:"Chad",f:"🇹🇩",r:"Africa",l:"French, Arabic"},
  {n:"Chile",f:"🇨🇱",r:"Americas",l:"Spanish"},
  {n:"China",f:"🇨🇳",r:"Asia",l:"Mandarin"},
  {n:"Colombia",f:"🇨🇴",r:"Americas",l:"Spanish"},
  {n:"Comoros",f:"🇰🇲",r:"Africa",l:"Arabic, French, Comorian"},
  {n:"Congo (DRC)",f:"🇨🇩",r:"Africa",l:"French"},
  {n:"Congo (Republic)",f:"🇨🇬",r:"Africa",l:"French"},
  {n:"Costa Rica",f:"🇨🇷",r:"Americas",l:"Spanish"},
  {n:"Croatia",f:"🇭🇷",r:"Europe",l:"Croatian"},
  {n:"Cuba",f:"🇨🇺",r:"Americas",l:"Spanish"},
  {n:"Cyprus",f:"🇨🇾",r:"Europe",l:"Greek, Turkish"},
  {n:"Czech Republic",f:"🇨🇿",r:"Europe",l:"Czech"},
  {n:"Denmark",f:"🇩🇰",r:"Europe",l:"Danish"},
  {n:"Djibouti",f:"🇩🇯",r:"Africa",l:"French, Arabic"},
  {n:"Dominica",f:"🇩🇲",r:"Americas",l:"English"},
  {n:"Dominican Republic",f:"🇩🇴",r:"Americas",l:"Spanish"},
  {n:"Ecuador",f:"🇪🇨",r:"Americas",l:"Spanish"},
  {n:"Egypt",f:"🇪🇬",r:"Africa",l:"Arabic"},
  {n:"El Salvador",f:"🇸🇻",r:"Americas",l:"Spanish"},
  {n:"Equatorial Guinea",f:"🇬🇶",r:"Africa",l:"Spanish, French, Portuguese"},
  {n:"Eritrea",f:"🇪🇷",r:"Africa",l:"Tigrinya, Arabic"},
  {n:"Estonia",f:"🇪🇪",r:"Europe",l:"Estonian"},
  {n:"Eswatini",f:"🇸🇿",r:"Africa",l:"Swati, English"},
  {n:"Ethiopia",f:"🇪🇹",r:"Africa",l:"Amharic"},
  {n:"Fiji",f:"🇫🇯",r:"Oceania",l:"English, Fijian, Hindi"},
  {n:"Finland",f:"🇫🇮",r:"Europe",l:"Finnish, Swedish"},
  {n:"France",f:"🇫🇷",r:"Europe",l:"French"},
  {n:"Gabon",f:"🇬🇦",r:"Africa",l:"French"},
  {n:"Gambia",f:"🇬🇲",r:"Africa",l:"English"},
  {n:"Georgia",f:"🇬🇪",r:"Asia",l:"Georgian"},
  {n:"Germany",f:"🇩🇪",r:"Europe",l:"German"},
  {n:"Ghana",f:"🇬🇭",r:"Africa",l:"English"},
  {n:"Greece",f:"🇬🇷",r:"Europe",l:"Greek"},
  {n:"Grenada",f:"🇬🇩",r:"Americas",l:"English"},
  {n:"Guatemala",f:"🇬🇹",r:"Americas",l:"Spanish"},
  {n:"Guinea",f:"🇬🇳",r:"Africa",l:"French"},
  {n:"Guinea-Bissau",f:"🇬🇼",r:"Africa",l:"Portuguese"},
  {n:"Guyana",f:"🇬🇾",r:"Americas",l:"English"},
  {n:"Haiti",f:"🇭🇹",r:"Americas",l:"French, Haitian Creole"},
  {n:"Honduras",f:"🇭🇳",r:"Americas",l:"Spanish"},
  {n:"Hungary",f:"🇭🇺",r:"Europe",l:"Hungarian"},
  {n:"Iceland",f:"🇮🇸",r:"Europe",l:"Icelandic"},
  {n:"India",f:"🇮🇳",r:"Asia",l:"Hindi, English"},
  {n:"Indonesia",f:"🇮🇩",r:"Asia",l:"Indonesian"},
  {n:"Iran",f:"🇮🇷",r:"Asia",l:"Persian"},
  {n:"Iraq",f:"🇮🇶",r:"Asia",l:"Arabic, Kurdish"},
  {n:"Ireland",f:"🇮🇪",r:"Europe",l:"Irish, English"},
  {n:"Israel",f:"🇮🇱",r:"Asia",l:"Hebrew, Arabic"},
  {n:"Italy",f:"🇮🇹",r:"Europe",l:"Italian"},
  {n:"Jamaica",f:"🇯🇲",r:"Americas",l:"English"},
  {n:"Japan",f:"🇯🇵",r:"Asia",l:"Japanese"},
  {n:"Jordan",f:"🇯🇴",r:"Asia",l:"Arabic"},
  {n:"Kazakhstan",f:"🇰🇿",r:"Asia",l:"Kazakh, Russian"},
  {n:"Kenya",f:"🇰🇪",r:"Africa",l:"Swahili, English"},
  {n:"Kiribati",f:"🇰🇮",r:"Oceania",l:"English, Gilbertese"},
  {n:"Kuwait",f:"🇰🇼",r:"Asia",l:"Arabic"},
  {n:"Kyrgyzstan",f:"🇰🇬",r:"Asia",l:"Kyrgyz, Russian"},
  {n:"Laos",f:"🇱🇦",r:"Asia",l:"Lao"},
  {n:"Latvia",f:"🇱🇻",r:"Europe",l:"Latvian"},
  {n:"Lebanon",f:"🇱🇧",r:"Asia",l:"Arabic"},
  {n:"Lesotho",f:"🇱🇸",r:"Africa",l:"Sesotho, English"},
  {n:"Liberia",f:"🇱🇷",r:"Africa",l:"English"},
  {n:"Libya",f:"🇱🇾",r:"Africa",l:"Arabic"},
  {n:"Liechtenstein",f:"🇱🇮",r:"Europe",l:"German"},
  {n:"Lithuania",f:"🇱🇹",r:"Europe",l:"Lithuanian"},
  {n:"Luxembourg",f:"🇱🇺",r:"Europe",l:"Luxembourgish, French, German"},
  {n:"Madagascar",f:"🇲🇬",r:"Africa",l:"Malagasy, French"},
  {n:"Malawi",f:"🇲🇼",r:"Africa",l:"Chichewa, English"},
  {n:"Malaysia",f:"🇲🇾",r:"Asia",l:"Malay, English"},
  {n:"Maldives",f:"🇲🇻",r:"Asia",l:"Dhivehi"},
  {n:"Mali",f:"🇲🇱",r:"Africa",l:"French"},
  {n:"Malta",f:"🇲🇹",r:"Europe",l:"Maltese, English"},
  {n:"Marshall Islands",f:"🇲🇭",r:"Oceania",l:"Marshallese, English"},
  {n:"Mauritania",f:"🇲🇷",r:"Africa",l:"Arabic"},
  {n:"Mauritius",f:"🇲🇺",r:"Africa",l:"English, French"},
  {n:"Mexico",f:"🇲🇽",r:"Americas",l:"Spanish"},
  {n:"Micronesia",f:"🇫🇲",r:"Oceania",l:"English"},
  {n:"Moldova",f:"🇲🇩",r:"Europe",l:"Romanian"},
  {n:"Monaco",f:"🇲🇨",r:"Europe",l:"French"},
  {n:"Mongolia",f:"🇲🇳",r:"Asia",l:"Mongolian"},
  {n:"Montenegro",f:"🇲🇪",r:"Europe",l:"Serbian"},
  {n:"Morocco",f:"🇲🇦",r:"Africa",l:"Arabic, Tamazight"},
  {n:"Mozambique",f:"🇲🇿",r:"Africa",l:"Portuguese"},
  {n:"Myanmar",f:"🇲🇲",r:"Asia",l:"Burmese"},
  {n:"Namibia",f:"🇳🇦",r:"Africa",l:"English"},
  {n:"Nauru",f:"🇳🇷",r:"Oceania",l:"Nauruan, English"},
  {n:"Nepal",f:"🇳🇵",r:"Asia",l:"Nepali"},
  {n:"Netherlands",f:"🇳🇱",r:"Europe",l:"Dutch"},
  {n:"New Zealand",f:"🇳🇿",r:"Oceania",l:"English, Māori"},
  {n:"Nicaragua",f:"🇳🇮",r:"Americas",l:"Spanish"},
  {n:"Niger",f:"🇳🇪",r:"Africa",l:"French"},
  {n:"Nigeria",f:"🇳🇬",r:"Africa",l:"English"},
  {n:"North Korea",f:"🇰🇵",r:"Asia",l:"Korean"},
  {n:"North Macedonia",f:"🇲🇰",r:"Europe",l:"Macedonian, Albanian"},
  {n:"Norway",f:"🇳🇴",r:"Europe",l:"Norwegian"},
  {n:"Oman",f:"🇴🇲",r:"Asia",l:"Arabic"},
  {n:"Pakistan",f:"🇵🇰",r:"Asia",l:"Urdu, English"},
  {n:"Palau",f:"🇵🇼",r:"Oceania",l:"Palauan, English"},
  {n:"Palestine",f:"🇵🇸",r:"Asia",l:"Arabic"},
  {n:"Panama",f:"🇵🇦",r:"Americas",l:"Spanish"},
  {n:"Papua New Guinea",f:"🇵🇬",r:"Oceania",l:"English, Tok Pisin"},
  {n:"Paraguay",f:"🇵🇾",r:"Americas",l:"Spanish, Guaraní"},
  {n:"Peru",f:"🇵🇪",r:"Americas",l:"Spanish"},
  {n:"Philippines",f:"🇵🇭",r:"Asia",l:"Filipino, English"},
  {n:"Poland",f:"🇵🇱",r:"Europe",l:"Polish"},
  {n:"Portugal",f:"🇵🇹",r:"Europe",l:"Portuguese"},
  {n:"Qatar",f:"🇶🇦",r:"Asia",l:"Arabic"},
  {n:"Romania",f:"🇷🇴",r:"Europe",l:"Romanian"},
  {n:"Russia",f:"🇷🇺",r:"Europe",l:"Russian"},
  {n:"Rwanda",f:"🇷🇼",r:"Africa",l:"Kinyarwanda, French, English"},
  {n:"Saint Kitts and Nevis",f:"🇰🇳",r:"Americas",l:"English"},
  {n:"Saint Lucia",f:"🇱🇨",r:"Americas",l:"English"},
  {n:"Saint Vincent and the Grenadines",f:"🇻🇨",r:"Americas",l:"English"},
  {n:"Samoa",f:"🇼🇸",r:"Oceania",l:"Samoan, English"},
  {n:"San Marino",f:"🇸🇲",r:"Europe",l:"Italian"},
  {n:"São Tomé and Príncipe",f:"🇸🇹",r:"Africa",l:"Portuguese"},
  {n:"Saudi Arabia",f:"🇸🇦",r:"Asia",l:"Arabic"},
  {n:"Senegal",f:"🇸🇳",r:"Africa",l:"French"},
  {n:"Serbia",f:"🇷🇸",r:"Europe",l:"Serbian"},
  {n:"Seychelles",f:"🇸🇨",r:"Africa",l:"French, English, Seychellois Creole"},
  {n:"Sierra Leone",f:"🇸🇱",r:"Africa",l:"English"},
  {n:"Singapore",f:"🇸🇬",r:"Asia",l:"English, Malay, Mandarin, Tamil"},
  {n:"Slovakia",f:"🇸🇰",r:"Europe",l:"Slovak"},
  {n:"Slovenia",f:"🇸🇮",r:"Europe",l:"Slovenian"},
  {n:"Solomon Islands",f:"🇸🇧",r:"Oceania",l:"English"},
  {n:"Somalia",f:"🇸🇴",r:"Africa",l:"Somali, Arabic"},
  {n:"South Africa",f:"🇿🇦",r:"Africa",l:"Zulu, Xhosa, English (11 official)"},
  {n:"South Korea",f:"🇰🇷",r:"Asia",l:"Korean"},
  {n:"South Sudan",f:"🇸🇸",r:"Africa",l:"English"},
  {n:"Spain",f:"🇪🇸",r:"Europe",l:"Spanish"},
  {n:"Sri Lanka",f:"🇱🇰",r:"Asia",l:"Sinhala, Tamil"},
  {n:"Sudan",f:"🇸🇩",r:"Africa",l:"Arabic, English"},
  {n:"Suriname",f:"🇸🇷",r:"Americas",l:"Dutch"},
  {n:"Sweden",f:"🇸🇪",r:"Europe",l:"Swedish"},
  {n:"Switzerland",f:"🇨🇭",r:"Europe",l:"German, French, Italian, Romansh"},
  {n:"Syria",f:"🇸🇾",r:"Asia",l:"Arabic"},
  {n:"Taiwan",f:"🇹🇼",r:"Asia",l:"Mandarin"},
  {n:"Tajikistan",f:"🇹🇯",r:"Asia",l:"Tajik, Russian"},
  {n:"Tanzania",f:"🇹🇿",r:"Africa",l:"Swahili, English"},
  {n:"Thailand",f:"🇹🇭",r:"Asia",l:"Thai"},
  {n:"Timor-Leste",f:"🇹🇱",r:"Asia",l:"Portuguese, Tetum"},
  {n:"Togo",f:"🇹🇬",r:"Africa",l:"French"},
  {n:"Tonga",f:"🇹🇴",r:"Oceania",l:"Tongan, English"},
  {n:"Trinidad and Tobago",f:"🇹🇹",r:"Americas",l:"English"},
  {n:"Tunisia",f:"🇹🇳",r:"Africa",l:"Arabic"},
  {n:"Turkey",f:"🇹🇷",r:"Asia",l:"Turkish"},
  {n:"Turkmenistan",f:"🇹🇲",r:"Asia",l:"Turkmen"},
  {n:"Tuvalu",f:"🇹🇻",r:"Oceania",l:"Tuvaluan, English"},
  {n:"Uganda",f:"🇺🇬",r:"Africa",l:"English, Swahili"},
  {n:"Ukraine",f:"🇺🇦",r:"Europe",l:"Ukrainian"},
  {n:"United Arab Emirates",f:"🇦🇪",r:"Asia",l:"Arabic"},
  {n:"United Kingdom",f:"🇬🇧",r:"Europe",l:"English"},
  {n:"United States",f:"🇺🇸",r:"Americas",l:"English"},
  {n:"Uruguay",f:"🇺🇾",r:"Americas",l:"Spanish"},
  {n:"Uzbekistan",f:"🇺🇿",r:"Asia",l:"Uzbek"},
  {n:"Vanuatu",f:"🇻🇺",r:"Oceania",l:"Bislama, English, French"},
  {n:"Vatican City",f:"🇻🇦",r:"Europe",l:"Italian, Latin"},
  {n:"Venezuela",f:"🇻🇪",r:"Americas",l:"Spanish"},
  {n:"Vietnam",f:"🇻🇳",r:"Asia",l:"Vietnamese"},
  {n:"Yemen",f:"🇾🇪",r:"Asia",l:"Arabic"},
  {n:"Zambia",f:"🇿🇲",r:"Africa",l:"English"},
  {n:"Zimbabwe",f:"🇿🇼",r:"Africa",l:"English, Shona, Ndebele"}
];

// Detailed scholarship data keyed by country → stream
const SCHOLARSHIP_DATA = {
  "United States": {
    "B.E / B.Tech": {
      scholarships:[
        {name:"Fulbright Undergraduate Scholarship",amount:"Full tuition + living",deadline:"Oct 15",type:"Full",link:"https://fulbrightprogram.org"},
        {name:"AAUW International Fellowships",amount:"$18,000–$30,000",deadline:"Nov 15",type:"Partial",link:"https://aauw.org"},
        {name:"University Merit Scholarships",amount:"25–100% tuition",deadline:"Varies",type:"Partial",link:""}
      ],
      tests:[
        {name:"SAT",minScore:"1400+",category:"Academic",required:true,link:"https://sat.org"},
        {name:"ACT",minScore:"32+",category:"Academic",required:false,link:"https://act.org"},
        {name:"TOEFL iBT",minScore:"90–100",category:"English",required:true,link:"https://ets.org/toefl"},
        {name:"IELTS Academic",minScore:"6.5–7.0",category:"English",required:true,link:"https://ielts.org"}
      ],
      documents:["Official transcripts (10th & 12th grade)","Passport copy","Statement of Purpose (1–2 pages)","2–3 Letters of Recommendation","SAT + TOEFL/IELTS score reports","Financial sponsorship letter","Portfolio (for design/architecture programs)"],
      timeline:[
        {month:"Aug–Sep (Year before)",task:"Research universities, start SAT/TOEFL preparation"},
        {month:"Oct–Nov",task:"Submit Fulbright application (Oct 15 deadline)"},
        {month:"Nov–Jan",task:"Submit Common App to universities (deadline Jan 1–Feb 1)"},
        {month:"Mar–Apr",task:"Receive admission decisions and financial aid offers"},
        {month:"May 1",task:"Deadline to accept university offer and pay deposit"},
        {month:"Jun–Jul",task:"Apply for F-1 Student Visa at US embassy"},
        {month:"Aug",task:"Arrive on campus, attend orientation week"}
      ],
      duration:"4 years",cost:"$30,000–$60,000/yr (tuition only)",visa:"F-1 Student Visa",tuitionFree:false
    },
    "M.Tech / Masters": {
      scholarships:[
        {name:"NSF Graduate Research Fellowship",amount:"$37,000/yr + $16,000 tuition",deadline:"Oct 20",type:"Full",link:"https://nsfgrfp.org"},
        {name:"Fulbright Foreign Student Program",amount:"Full tuition + living allowance",deadline:"Oct 15",type:"Full",link:"https://fulbrightprogram.org"},
        {name:"MIT Presidential Fellowship",amount:"Full tuition + $40,000 stipend/yr",deadline:"Dec 15",type:"Full",link:"https://mit.edu"},
        {name:"Hubert H. Humphrey Fellowship",amount:"Full funding for professionals",deadline:"Oct 1",type:"Full",link:"https://humphreyfellowship.org"}
      ],
      tests:[
        {name:"GRE General",minScore:"315–325+",category:"Academic",required:true,link:"https://ets.org/gre"},
        {name:"GMAT",minScore:"650+",category:"Academic",required:false,note:"MBA programs",link:"https://mba.com"},
        {name:"TOEFL iBT",minScore:"100–110",category:"English",required:true,link:"https://ets.org/toefl"},
        {name:"IELTS Academic",minScore:"7.0–7.5",category:"English",required:true,link:"https://ielts.org"}
      ],
      documents:["Bachelor transcripts (official, attested)","GRE + TOEFL/IELTS score reports","3 Letters of Recommendation (academic/professional)","Statement of Purpose (research-focused)","Work experience letter (if applicable)","CV/Resume","Financial proof or scholarship award letter"],
      timeline:[
        {month:"Jun–Aug",task:"Give GRE and TOEFL/IELTS. Build university shortlist."},
        {month:"Sep–Oct",task:"Request LORs, draft SOP, apply for Fulbright (Oct 15)"},
        {month:"Oct–Dec",task:"Submit university applications (most deadlines Dec 1–Feb 15)"},
        {month:"Feb–Mar",task:"Receive interview calls and admission decisions"},
        {month:"Apr–May",task:"Accept offer, apply for F-1 Visa (minimum 3 months before)"},
        {month:"Aug",task:"Arrive on campus, attend graduate orientation"}
      ],
      duration:"1.5–2 years",cost:"$25,000–$50,000/yr",visa:"F-1 Student Visa",tuitionFree:false
    },
    "PhD": {
      scholarships:[
        {name:"NSF GRFP",amount:"$37,000/yr + $16k tuition × 3 years",deadline:"Oct 20",type:"Full",link:"https://nsfgrfp.org"},
        {name:"RA/TA Funding (University)",amount:"Full tuition waiver + $20k–$35k stipend",deadline:"Rolling",type:"Full",link:""},
        {name:"Fulbright Scholar Award",amount:"Full funding + international travel",deadline:"Sep 15",type:"Full",link:"https://fulbrightprogram.org"},
        {name:"DOE SCGSR",amount:"$3,000/month for research stay",deadline:"Varies",type:"Full",link:"https://science.osti.gov"}
      ],
      tests:[
        {name:"GRE General",minScore:"320+",category:"Academic",required:true,link:"https://ets.org/gre"},
        {name:"GRE Subject",minScore:"85th percentile",category:"Academic",required:false,link:"https://ets.org/gre"},
        {name:"TOEFL iBT",minScore:"100+",category:"English",required:true,link:"https://ets.org/toefl"},
        {name:"IELTS Academic",minScore:"7.0+",category:"English",required:true,link:"https://ielts.org"}
      ],
      documents:["Masters + Bachelor transcripts","Research proposal (2–5 pages)","3–4 LORs (minimum 2 from research supervisors)","Writing sample or publications list","CV with full research experience","GRE + TOEFL/IELTS score reports","Statement of Purpose (research-focused, 1,000–1,500 words)"],
      timeline:[
        {month:"Jun–Aug",task:"Identify and email potential PhD advisors. Give GRE/TOEFL."},
        {month:"Sep–Oct",task:"Finalise research proposal and SOP. Apply for Fulbright."},
        {month:"Nov–Jan",task:"Submit PhD applications (most deadlines Dec 1–Jan 15)"},
        {month:"Feb–Apr",task:"Skype/in-person interviews with potential advisors"},
        {month:"Apr–May",task:"Accept offer, confirm funding/RA-TA, apply for F-1 Visa"},
        {month:"Aug–Sep",task:"Arrive, join research lab, begin rotations"}
      ],
      duration:"4–6 years",cost:"Fully funded via RA/TA + stipend",visa:"F-1 Student Visa",tuitionFree:true
    },
    "MBA": {
      scholarships:[
        {name:"Consortium Fellowship",amount:"Full tuition",deadline:"Jan 5",type:"Full",link:"https://cgsm.org"},
        {name:"Forté Foundation Fellowship",amount:"$10,000–full tuition",deadline:"Jan 5",type:"Partial",link:"https://fortefoundation.org"},
        {name:"Toigo Fellowship",amount:"Merit-based award",deadline:"Jan 15",type:"Partial",link:"https://toigofoundation.org"}
      ],
      tests:[
        {name:"GMAT",minScore:"680–750+ (top programs)",category:"Academic",required:true,link:"https://mba.com"},
        {name:"GRE General",minScore:"325+",category:"Academic",required:false,link:"https://ets.org/gre"},
        {name:"TOEFL iBT",minScore:"105+",category:"English",required:true,link:"https://ets.org/toefl"},
        {name:"IELTS Academic",minScore:"7.5+",category:"English",required:true,link:"https://ielts.org"}
      ],
      documents:["GMAT/GRE score report","TOEFL/IELTS report","2+ years work experience certificate","3 LORs (2 professional + 1 academic)","Leadership essays (2–3 essays)","Resume (max 2 pages)","Video interview (Kira, HireVue for some schools)"],
      timeline:[
        {month:"Round 1: Sep–Oct",task:"Best odds for scholarships — apply early"},
        {month:"Round 2: Jan–Feb",task:"Main intake — majority of applications"},
        {month:"Round 3: Mar–Apr",task:"Final round — limited scholarships available"},
        {month:"Apr–May",task:"Receive decisions, accept offer"},
        {month:"Jun–Jul",task:"Pre-MBA preparation, apply for F-1 Visa"},
        {month:"Aug",task:"Start MBA program"}
      ],
      duration:"2 years (1 year for accelerated)",cost:"$60,000–$90,000/yr (top schools)",visa:"F-1 Student Visa",tuitionFree:false
    },
    "Medicine (MBBS/MD)": {
      scholarships:[
        {name:"NIH Research Scholarship",amount:"Full tuition + $2,360/month stipend",deadline:"Varies",type:"Full",link:"https://nih.gov"},
        {name:"AAMC Scholarships",amount:"$5,000–$25,000",deadline:"Varies",type:"Partial",link:"https://aamc.org"}
      ],
      tests:[
        {name:"MCAT",minScore:"510–520+",category:"Medical Aptitude",required:true,link:"https://aamc.org/mcat"},
        {name:"TOEFL iBT",minScore:"100+",category:"English",required:true,link:"https://ets.org/toefl"},
        {name:"USMLE Step 1",minScore:"Pass",category:"Medical Licensing",required:false,note:"Required for residency",link:"https://usmle.org"}
      ],
      documents:["Bachelor degree transcripts (pre-med required)","MCAT score report","3–4 LORs (physicians preferred)","Medical school application (AMCAS)","Personal statement","Clinical experience documentation","Research experience (strongly recommended)"],
      timeline:[
        {month:"Year 1–2 (undergrad)",task:"Complete pre-med prerequisites (biology, chemistry, physics)"},
        {month:"Year 3",task:"Give MCAT, build clinical volunteer hours"},
        {month:"Jun–Jul (Year 4)",task:"Submit AMCAS application"},
        {month:"Aug–Sep",task:"Submit secondary applications to individual schools"},
        {month:"Oct–Mar",task:"Medical school interviews"},
        {month:"Apr 30",task:"Decision day — must accept one offer"}
      ],
      duration:"4 years (MD) + 3–7 years residency",cost:"$50,000–$70,000/yr",visa:"F-1 Student Visa",tuitionFree:false
    },
    "Law (LLM)": {
      scholarships:[
        {name:"ABA Legal Opportunity Scholarship",amount:"$15,000",deadline:"Mar 1",type:"Partial",link:"https://americanbar.org"},
        {name:"University LLM Scholarships",amount:"Varies",deadline:"Jan–Mar",type:"Partial",link:""}
      ],
      tests:[
        {name:"LSAT",minScore:"160+ (top schools)",category:"Legal Aptitude",required:true,link:"https://lsac.org"},
        {name:"TOEFL iBT",minScore:"100+",category:"English",required:true,link:"https://ets.org/toefl"},
        {name:"IELTS Academic",minScore:"7.5+",category:"English",required:true,link:"https://ielts.org"}
      ],
      documents:["Law degree certificate + transcripts","LSAT score report","2–3 LORs (law professors / employers)","Personal statement","CV/Resume","Writing sample (legal memo or essay)","Bar exam certificate (if applicable)"],
      timeline:[
        {month:"Jun–Aug",task:"Give LSAT, research LLM programs and concentrations"},
        {month:"Sep–Nov",task:"Submit LSAC applications"},
        {month:"Dec–Feb",task:"University deadlines (rolling admissions mostly)"},
        {month:"Mar–Apr",task:"Decisions and scholarship notifications"},
        {month:"Jun",task:"Accept offer, apply for F-1 Visa"},
        {month:"Aug",task:"Start LLM"}
      ],
      duration:"1 year",cost:"$55,000–$70,000/yr",visa:"F-1 Student Visa",tuitionFree:false
    }
  },

  "United Kingdom": {
    "B.E / B.Tech": {
      scholarships:[
        {name:"GREAT Scholarship",amount:"£10,000 tuition grant",deadline:"Mar 1",type:"Partial",link:"https://study-uk.britishcouncil.org"},
        {name:"Commonwealth Shared Scholarship",amount:"Full tuition + living",deadline:"Dec 16",type:"Full",link:"https://cscuk.fcdo.gov.uk"}
      ],
      tests:[
        {name:"IELTS Academic",minScore:"6.0–7.0",category:"English",required:true,link:"https://ielts.org"},
        {name:"TOEFL iBT",minScore:"80–100",category:"English",required:true,link:"https://ets.org/toefl"},
        {name:"UCAT",minScore:"Percentile-based",category:"Medical Aptitude",required:true,note:"Medicine/Dentistry only",link:"https://ucat.ac.uk"}
      ],
      documents:["A-levels/IB/equivalent qualification","IELTS/TOEFL score report","UCAS personal statement (4,000 chars)","1 Academic LOR (referee submits via UCAS)","Passport copy","Financial proof (if self-funded)"],
      timeline:[
        {month:"Sep–Oct",task:"Research UCAS universities. Take IELTS/TOEFL."},
        {month:"Oct 15",task:"UCAS deadline for Oxford, Cambridge, Medicine, Dentistry, Veterinary"},
        {month:"Jan 25",task:"UCAS deadline for all other undergraduate courses"},
        {month:"Mar–May",task:"Receive decisions on UCAS Track (offers)"},
        {month:"Jun–Aug",task:"Confirm offer. Apply for UK Student Visa."},
        {month:"Sep",task:"Arrive and begin academic year"}
      ],
      duration:"3–4 years",cost:"£10,000–£25,000/yr",visa:"UK Student Visa",tuitionFree:false
    },
    "M.Tech / Masters": {
      scholarships:[
        {name:"Chevening Scholarship",amount:"Full tuition + living + airfare",deadline:"Nov 5",type:"Full",link:"https://chevening.org"},
        {name:"Commonwealth Scholarship",amount:"Full tuition + living + airfare",deadline:"Dec 16",type:"Full",link:"https://cscuk.fcdo.gov.uk"},
        {name:"Rhodes Scholarship (Oxford)",amount:"Full Oxford funding + living",deadline:"Oct 1",type:"Full",link:"https://rhodesscholarship.com"},
        {name:"Gates Cambridge Scholarship",amount:"Full cost of study at Cambridge",deadline:"Oct 14",type:"Full",link:"https://gatescambridge.org"},
        {name:"GREAT Scholarship",amount:"£10,000 tuition reduction",deadline:"Mar 1",type:"Partial",link:"https://study-uk.britishcouncil.org"}
      ],
      tests:[
        {name:"IELTS Academic",minScore:"6.5–7.5",category:"English",required:true,link:"https://ielts.org"},
        {name:"TOEFL iBT",minScore:"92–110",category:"English",required:true,link:"https://ets.org/toefl"},
        {name:"PTE Academic",minScore:"59–76",category:"English",required:false,link:"https://pearsonpte.com"},
        {name:"GRE",minScore:"315+",category:"Academic",required:false,note:"Some programs",link:"https://ets.org/gre"}
      ],
      documents:["Bachelor transcripts + degree certificate","IELTS/TOEFL score report","Personal statement (1–2 pages)","2 Academic LORs","CV/Resume","Passport copy","2 years leadership experience (Chevening requirement)"],
      timeline:[
        {month:"Aug–Sep",task:"Take IELTS/TOEFL. Build shortlist of UK universities."},
        {month:"Sep–Nov",task:"Apply Chevening (Nov 5), Rhodes (Oct 1), Gates Cambridge (Oct 14)"},
        {month:"Nov–Mar",task:"Submit direct university applications (rolling admissions)"},
        {month:"Feb–Apr",task:"Receive conditional or unconditional offers"},
        {month:"May–Jun",task:"Accept offer, receive CAS letter. Apply UK Student Visa."},
        {month:"Sep",task:"Arrive, attend induction week, start Masters"}
      ],
      duration:"1 year (most UK Masters)",cost:"£15,000–£35,000/yr",visa:"UK Student Visa",tuitionFree:false
    },
    "PhD": {
      scholarships:[
        {name:"UKRI Scholarship (Research Councils)",amount:"Fees + £17,668/yr living stipend",deadline:"Jan 15",type:"Full",link:"https://ukri.org"},
        {name:"Commonwealth Scholarship (PhD)",amount:"Full tuition + living allowance",deadline:"Dec 16",type:"Full",link:"https://cscuk.fcdo.gov.uk"},
        {name:"Imperial President's PhD Scholarships",amount:"Full fees + £19,668/yr",deadline:"Nov 1",type:"Full",link:"https://imperial.ac.uk"},
        {name:"Wellcome Trust PhD Programme",amount:"Full funding + £21,000/yr stipend",deadline:"Varies by program",type:"Full",link:"https://wellcome.org"}
      ],
      tests:[
        {name:"IELTS Academic",minScore:"7.0–7.5",category:"English",required:true,link:"https://ielts.org"},
        {name:"TOEFL iBT",minScore:"100–110",category:"English",required:true,link:"https://ets.org/toefl"}
      ],
      documents:["Detailed research proposal (2,000–3,000 words)","Masters thesis or publications","3 LORs (minimum 2 from research supervisors)","Bachelor + Masters transcripts","IELTS/TOEFL report","CV with full research history","Support letter from UK supervisor (strongly advised)"],
      timeline:[
        {month:"Sep–Oct",task:"Contact potential UK supervisors by email (see guidelines)"},
        {month:"Oct–Dec",task:"Submit PhD applications. Apply for UKRI and Commonwealth scholarships."},
        {month:"Jan–Feb",task:"Interviews with potential supervisors"},
        {month:"Mar–Apr",task:"Receive official offer letters with funding details"},
        {month:"May–Jun",task:"Apply for UK Student Visa (Student Route)"},
        {month:"Sep or Oct",task:"Start PhD program"}
      ],
      duration:"3–4 years",cost:"Mostly funded via studentship",visa:"UK Student Visa",tuitionFree:true
    },
    "MBA": {
      scholarships:[
        {name:"Chevening Scholarship",amount:"Full tuition + living",deadline:"Nov 5",type:"Full",link:"https://chevening.org"},
        {name:"LBS Excellence Scholarship",amount:"Up to £15,000",deadline:"Rolling",type:"Partial",link:"https://london.edu"},
        {name:"Said Business School Scholarship",amount:"Up to £25,000",deadline:"Jan 20",type:"Partial",link:"https://sbs.ox.ac.uk"}
      ],
      tests:[
        {name:"GMAT",minScore:"650–700+",category:"Academic",required:true,link:"https://mba.com"},
        {name:"GRE General",minScore:"320+",category:"Academic",required:false,link:"https://ets.org/gre"},
        {name:"IELTS Academic",minScore:"7.5",category:"English",required:true,link:"https://ielts.org"},
        {name:"TOEFL iBT",minScore:"110+",category:"English",required:true,link:"https://ets.org/toefl"}
      ],
      documents:["GMAT/GRE report","IELTS/TOEFL report","Work experience certificate (3–5 years preferred)","3 LORs (professional + academic)","Career essays","Resume (2 pages max)"],
      timeline:[
        {month:"Round 1: Oct–Nov",task:"Best scholarship availability"},
        {month:"Round 2: Jan",task:"Main round — highest applicant volume"},
        {month:"Feb–Mar",task:"Decisions and scholarship notifications"},
        {month:"Apr–May",task:"Accept offer, apply UK Student Visa"},
        {month:"Aug–Sep",task:"Start MBA"}
      ],
      duration:"1–2 years",cost:"£35,000–£65,000/yr",visa:"UK Student Visa",tuitionFree:false
    }
  },

  "Germany": {
    "B.E / B.Tech": {
      scholarships:[
        {name:"DAAD Undergraduate Scholarship",amount:"€934/month + travel allowance",deadline:"Dec 15",type:"Full",link:"https://daad.de"},
        {name:"Deutschlandstipendium",amount:"€300/month",deadline:"May 31",type:"Partial",link:"https://deutschlandstipendium.de"},
        {name:"Heinrich Böll Foundation",amount:"€850/month + €300 book allowance",deadline:"Mar 1",type:"Full",link:"https://boell.de"}
      ],
      tests:[
        {name:"TestDaF",minScore:"TDN 4 in all 4 skills",category:"German Language",required:true,link:"https://testdaf.de",note:"German-taught programs"},
        {name:"DSH",minScore:"DSH-2",category:"German Language",required:true,link:"",note:"German-taught programs"},
        {name:"Goethe-Zertifikat B2/C1",minScore:"Pass",category:"German Language",required:false,link:"https://goethe.de"},
        {name:"IELTS / TOEFL",minScore:"IELTS 6.5 / TOEFL 88+",category:"English",required:true,link:"https://ielts.org",note:"English-taught programs"},
        {name:"TestAS",minScore:"Subject-specific",category:"Aptitude",required:false,link:"https://testas.de"}
      ],
      documents:["Certified German translation of all transcripts","University entrance qualification (Hochschulzugangsberechtigung)","TestDaF or DSH language certificate","Motivationsschreiben in German","CV in Europass format","APS Certificate (required for India, China, Vietnam)","Passport copy","Blocked account (Sperrkonto) proof: €11,208/yr minimum"],
      timeline:[
        {month:"Jan–Jun",task:"Take TestDaF/DSH (2–3 attempts possible). Prepare APS certificate."},
        {month:"May–Jun",task:"Apply for DAAD scholarship (deadline varies by program type)"},
        {month:"Jul 15",task:"Application deadline for Winter semester via uni-assist.de"},
        {month:"Aug–Sep",task:"Receive Zulassung (admission letter). Apply for German Student Visa."},
        {month:"Sep–Oct",task:"Open Sperrkonto (blocked account). Register Anmeldung after arrival."},
        {month:"Oct",task:"Arrive for Winter semester (main semester start)"}
      ],
      duration:"3–4 years (Bachelor/B.Eng)",cost:"€0–€3,000/yr (most public unis are tuition-free)",visa:"German National Visa (Type D)",tuitionFree:true
    },
    "M.Tech / Masters": {
      scholarships:[
        {name:"DAAD Study Scholarship",amount:"€992/month + health insurance + travel",deadline:"Oct 15",type:"Full",link:"https://daad.de"},
        {name:"Deutschlandstipendium",amount:"€300/month",deadline:"May 31",type:"Partial",link:"https://deutschlandstipendium.de"},
        {name:"Friedrich Ebert Foundation",amount:"€861/month + €300 book allowance",deadline:"Sep 30",type:"Full",link:"https://fes.de"},
        {name:"Konrad Adenauer Foundation",amount:"€850/month + extras",deadline:"Jan 15",type:"Full",link:"https://kas.de"}
      ],
      tests:[
        {name:"IELTS Academic",minScore:"6.5–7.0",category:"English",required:true,link:"https://ielts.org",note:"English programs"},
        {name:"TOEFL iBT",minScore:"88–100",category:"English",required:true,link:"https://ets.org/toefl",note:"English programs"},
        {name:"TestDaF",minScore:"TDN 4 per skill",category:"German Language",required:true,link:"https://testdaf.de",note:"German programs"},
        {name:"GRE",minScore:"310+ (some programs)",category:"Academic",required:false,link:"https://ets.org/gre"}
      ],
      documents:["Bachelor degree + transcripts (certified translation to German)","IELTS/TOEFL score report","Motivation letter (Motivationsschreiben, 1–2 pages)","CV in Europass format","2 Academic LORs","APS Certificate (India, China, Vietnam applicants)","Passport copy","Blocked bank account proof (€11,208/yr if no scholarship)"],
      timeline:[
        {month:"Apr–Jun",task:"Take IELTS/TOEFL. Obtain APS certificate if required (takes 6–8 weeks)."},
        {month:"Jun–Sep",task:"Apply for DAAD or foundation scholarship (Oct 15 main deadline)."},
        {month:"Jan 15",task:"Main deadline for Winter semester applications (via uni-assist.de or university directly)"},
        {month:"Feb–Mar",task:"Receive Zulassung (admission confirmation letter)"},
        {month:"Apr–May",task:"Apply for German National Visa. Open Sperrkonto blocked account."},
        {month:"Oct",task:"Arrive, enroll, register Anmeldung at local registry office"}
      ],
      duration:"1.5–2 years",cost:"€0–€2,000/yr (public universities mostly tuition-free)",visa:"German National Visa (Type D)",tuitionFree:true
    },
    "PhD": {
      scholarships:[
        {name:"DAAD Research Grants (PhD)",amount:"€1,200/month + travel + health insurance",deadline:"Oct 15",type:"Full",link:"https://daad.de"},
        {name:"Konrad Adenauer Foundation",amount:"€1,200/month + €100 book allowance",deadline:"Jan 15",type:"Full",link:"https://kas.de"},
        {name:"Marie Skłodowska-Curie Actions (EU)",amount:"€2,500–€3,200/month + mobility allowance",deadline:"Rolling",type:"Full",link:"https://ec.europa.eu/msca"},
        {name:"Helmholtz Association Research Positions",amount:"65–100% TVöD salary (€30k–€45k/yr)",deadline:"Rolling",type:"Full",link:"https://helmholtz.de"}
      ],
      tests:[
        {name:"IELTS / TOEFL",minScore:"IELTS 7.0 / TOEFL 95+",category:"English",required:true,link:"https://ielts.org"},
        {name:"TestDaF",minScore:"TDN 4",category:"German Language",required:false,link:"https://testdaf.de",note:"Interdisciplinary programs"}
      ],
      documents:["Masters thesis + list of publications","Masters + Bachelor transcripts (certified translation)","Detailed research proposal (5–10 pages)","3 LORs (minimum 2 from research supervisors)","Acceptance letter from German professor (critical)","APS Certificate (India, China, Vietnam)","CV + publications list","IELTS/TOEFL score report"],
      timeline:[
        {month:"Anytime",task:"CRITICAL: Contact German professors directly first — PhD requires supervisor agreement before application."},
        {month:"Month 1–3",task:"Obtain professor's written acceptance. Apply for DAAD or foundation scholarship."},
        {month:"Month 3–5",task:"Enroll at university (Immatrikulation). Apply for German Visa with acceptance letter."},
        {month:"Month 6",task:"Arrive in Germany. Register Anmeldung. Open bank account. Join research group."},
        {month:"Year 3–5",task:"Complete dissertation. Submit thesis. Oral defense (Disputation)."}
      ],
      duration:"3–5 years",cost:"Fully funded via PhD position salary or scholarship",visa:"German National Visa (Type D)",tuitionFree:true
    }
  },

  "Canada": {
    "M.Tech / Masters": {
      scholarships:[
        {name:"Vanier Canada Graduate Scholarship",amount:"$50,000 CAD/yr for 3 years",deadline:"Nov 1",type:"Full",link:"https://vanier.gc.ca"},
        {name:"Lester B. Pearson Scholarship",amount:"Full tuition + living + books",deadline:"Nov 7",type:"Full",link:"https://utoronto.ca"},
        {name:"Trudeau Foundation Scholarship",amount:"$60,000 CAD/yr for 3 years",deadline:"Dec 1",type:"Full",link:"https://trudeaufoundation.ca"},
        {name:"Ontario Trillium Scholarship",amount:"$40,000 CAD/yr",deadline:"Dec 1",type:"Full",link:"https://ontario.ca"}
      ],
      tests:[
        {name:"IELTS Academic",minScore:"6.5–7.0",category:"English",required:true,link:"https://ielts.org"},
        {name:"TOEFL iBT",minScore:"90–100",category:"English",required:true,link:"https://ets.org/toefl"},
        {name:"GRE General",minScore:"310+",category:"Academic",required:false,link:"https://ets.org/gre"},
        {name:"GMAT",minScore:"650+",category:"Academic",required:false,note:"MBA programs",link:"https://mba.com"}
      ],
      documents:["Bachelor transcripts + degree certificate","IELTS/TOEFL score reports","Statement of Purpose (1–2 pages)","3 LORs (academic preferred)","CV/Resume","Passport copy","Study Permit application (applied after receiving admission offer)"],
      timeline:[
        {month:"Jun–Sep",task:"Take IELTS/TOEFL. Contact professors for research-based Masters."},
        {month:"Oct–Nov",task:"Apply for Vanier (Nov 1), Pearson (Nov 7), Trudeau (Dec 1)"},
        {month:"Nov–Feb",task:"Submit university applications (typical deadlines Dec 1–Feb 1)"},
        {month:"Mar–Apr",task:"Receive offers with funding details"},
        {month:"Apr–May",task:"Accept offer. Apply for Study Permit online (allow 8–12 weeks)."},
        {month:"Aug–Sep",task:"Arrive for Fall intake"}
      ],
      duration:"1.5–2 years",cost:"CAD $20,000–$35,000/yr",visa:"Study Permit",tuitionFree:false
    },
    "PhD": {
      scholarships:[
        {name:"Vanier Canada Graduate Scholarship",amount:"$50,000 CAD/yr × 3 years",deadline:"Nov 1",type:"Full",link:"https://vanier.gc.ca"},
        {name:"NSERC Doctoral Fellowship",amount:"$21,000 CAD/yr",deadline:"Oct",type:"Full",link:"https://nserc-crsng.gc.ca"},
        {name:"SSHRC Doctoral Fellowship",amount:"$20,000 CAD/yr",deadline:"Oct",type:"Full",link:"https://sshrc-crsh.gc.ca"}
      ],
      tests:[
        {name:"IELTS Academic",minScore:"7.0+",category:"English",required:true,link:"https://ielts.org"},
        {name:"TOEFL iBT",minScore:"100+",category:"English",required:true,link:"https://ets.org/toefl"},
        {name:"GRE",minScore:"315+",category:"Academic",required:false,link:"https://ets.org/gre"}
      ],
      documents:["Masters transcripts + thesis","Research proposal (2–4 pages)","3–4 LORs (minimum 2 from supervisors)","CV with publications","IELTS/TOEFL report","Research-focused SOP","Passport copy"],
      timeline:[
        {month:"Jun–Aug",task:"Contact potential PhD supervisors. Give TOEFL/GRE."},
        {month:"Sep–Oct",task:"Apply for Vanier and NSERC/SSHRC scholarships"},
        {month:"Oct–Jan",task:"Submit PhD applications (Dec–Jan deadlines typical)"},
        {month:"Feb–Mar",task:"Interviews with potential advisors"},
        {month:"Mar–Apr",task:"Accept offer, apply for Study Permit"},
        {month:"Sep",task:"Start PhD"}
      ],
      duration:"4–5 years",cost:"Mostly funded via RA/TA + stipend",visa:"Study Permit",tuitionFree:true
    }
  },

  "Australia": {
    "M.Tech / Masters": {
      scholarships:[
        {name:"Australia Awards Scholarship",amount:"Full tuition + living + airfare + health cover",deadline:"Apr 30",type:"Full",link:"https://australiaawards.gov.au"},
        {name:"Research Training Program (RTP)",amount:"Full tuition + AUD $32,192/yr stipend",deadline:"Oct 31",type:"Full",link:"https://education.gov.au"},
        {name:"Melbourne Graduate Scholarship",amount:"25–50% tuition waiver",deadline:"Oct 31",type:"Partial",link:"https://unimelb.edu.au"}
      ],
      tests:[
        {name:"IELTS Academic",minScore:"6.5 overall (6.0 per band)",category:"English",required:true,link:"https://ielts.org"},
        {name:"TOEFL iBT",minScore:"79–94",category:"English",required:true,link:"https://ets.org/toefl"},
        {name:"PTE Academic",minScore:"58–65",category:"English",required:true,link:"https://pearsonpte.com"},
        {name:"GRE / GMAT",minScore:"Program-specific",category:"Academic",required:false,link:"https://ets.org/gre"}
      ],
      documents:["Bachelor degree + transcripts","IELTS/TOEFL/PTE score report","Personal statement or research proposal","2 LORs","CV","Passport copy","Australia Awards application form (if applying)","Evidence of development impact (Australia Awards)"],
      timeline:[
        {month:"Feb–Apr",task:"Australia Awards deadline is Apr 30. Take IELTS/PTE."},
        {month:"Apr–Jul",task:"Submit university applications (2 intakes: Feb and Jul)"},
        {month:"Sep–Nov",task:"Apply for Student Visa (subclass 500) — allow 8–12 weeks"},
        {month:"Dec–Jan",task:"Arrive for February (Semester 1) intake"},
        {month:"Apr–Jun",task:"Arrive for July (Semester 2) intake"}
      ],
      duration:"1.5–2 years",cost:"AUD $28,000–$50,000/yr",visa:"Student Visa (subclass 500)",tuitionFree:false
    },
    "PhD": {
      scholarships:[
        {name:"RTP Stipend",amount:"AUD $32,192/yr + full tuition waiver",deadline:"Oct 31",type:"Full",link:"https://education.gov.au"},
        {name:"Australia Awards",amount:"Full living + tuition + airfare + health",deadline:"Apr 30",type:"Full",link:"https://australiaawards.gov.au"}
      ],
      tests:[
        {name:"IELTS Academic",minScore:"6.5–7.0",category:"English",required:true,link:"https://ielts.org"},
        {name:"TOEFL iBT",minScore:"90+",category:"English",required:true,link:"https://ets.org/toefl"}
      ],
      documents:["Masters thesis + transcripts","Research proposal (2–3 pages)","3 LORs","CV with research experience","IELTS/TOEFL report","Passport copy","Expression of Interest submitted to supervisor first"],
      timeline:[
        {month:"Months 1–2",task:"Contact Australian supervisors. Get Expression of Interest accepted."},
        {month:"Month 2–4",task:"Apply for RTP stipend with supervisor support. Apply Australia Awards."},
        {month:"Month 4–5",task:"Apply for Student Visa (subclass 500)."},
        {month:"Month 6",task:"Arrive, enroll, start research"}
      ],
      duration:"3–4 years",cost:"Fully funded via RTP (tuition + stipend)",visa:"Student Visa (subclass 500)",tuitionFree:true
    }
  },

  "Japan": {
    "M.Tech / Masters": {
      scholarships:[
        {name:"MEXT Government Scholarship",amount:"Full tuition + ¥147,000–153,000/month",deadline:"May (embassy) / Jun (university)",type:"Full",link:"https://studyjapan.go.jp"},
        {name:"JASSO Scholarship",amount:"¥48,000–¥80,000/month",deadline:"Rolling",type:"Partial",link:"https://jasso.or.jp"},
        {name:"UTokyo Fellowship",amount:"¥200,000/month",deadline:"Varies",type:"Full",link:"https://u-tokyo.ac.jp"},
        {name:"ADB–Japan Scholarship",amount:"Full tuition + living + airfare",deadline:"Various",type:"Full",link:"https://adb.org"}
      ],
      tests:[
        {name:"JLPT N2",minScore:"Pass (≥90 points)",category:"Japanese Language",required:true,link:"https://jlpt.jp",note:"Japanese-taught programs"},
        {name:"EJU (Japanese)",minScore:"200+/400",category:"Japanese Aptitude",required:true,link:"https://jasso.or.jp",note:"Some UG and PG programs"},
        {name:"TOEFL iBT",minScore:"80–90+",category:"English",required:true,link:"https://ets.org/toefl",note:"English-taught programs"},
        {name:"IELTS Academic",minScore:"6.0–6.5",category:"English",required:true,link:"https://ielts.org",note:"English-taught programs"}
      ],
      documents:["Bachelor transcripts (notarized + Japanese translation if required)","Research plan (研究計画書 — 2–3 pages in Japanese or English)","MEXT Application Form (if applying for MEXT)","2 Academic LORs","TOEFL/JLPT score reports","Health certificate (physical exam)","Passport copy","Financial proof (if self-funded)"],
      timeline:[
        {month:"Jan–Mar",task:"Research Japanese universities and contact potential supervisors."},
        {month:"Apr–May",task:"Apply for MEXT Embassy track (deadline varies by country, typically May)"},
        {month:"Jun–Aug",task:"MEXT University track deadline. Take JLPT if needed."},
        {month:"Sep–Nov",task:"Direct university application deadlines"},
        {month:"Dec–Jan",task:"Receive admission letter (Nyūgaku Kyoka-sho)"},
        {month:"Feb–Mar",task:"Apply for Japanese Student Visa — takes 6–8 weeks"},
        {month:"Apr",task:"Arrive for April intake (main). October intake also available."}
      ],
      duration:"2 years",cost:"¥535,800/yr (national) / Free with MEXT",visa:"Student Visa (留学ビザ)",tuitionFree:false
    }
  },

  "South Korea": {
    "M.Tech / Masters": {
      scholarships:[
        {name:"KGSP (Korean Government Scholarship)",amount:"Full tuition + ₩900,000/month + airfare + language course",deadline:"Mar (embassy) / Apr (university)",type:"Full",link:"https://niied.go.kr"},
        {name:"SNU President Fellowship",amount:"Full tuition + ₩500,000/month",deadline:"Rolling",type:"Full",link:"https://snu.ac.kr"},
        {name:"KAIST Scholarship",amount:"Full tuition + KRW 350,000/month",deadline:"Rolling",type:"Full",link:"https://kaist.ac.kr"}
      ],
      tests:[
        {name:"TOPIK II",minScore:"Level 3+ (Level 4 for graduate)",category:"Korean Language",required:true,link:"https://topik.go.kr",note:"Korean-taught programs"},
        {name:"IELTS Academic",minScore:"6.0–6.5",category:"English",required:true,link:"https://ielts.org",note:"English-taught programs"},
        {name:"TOEFL iBT",minScore:"80–90",category:"English",required:true,link:"https://ets.org/toefl",note:"English-taught programs"}
      ],
      documents:["Bachelor transcripts (apostille certified + Korean translation)","TOPIK or IELTS/TOEFL score report","Research plan","2 Academic LORs","Passport copy","KGSP application form (if applying)","Personal statement","Medical health certificate"],
      timeline:[
        {month:"Feb–Mar",task:"Apply for KGSP Embassy recommendation route (Mar deadline)"},
        {month:"Mar–May",task:"KGSP University track deadline: April. Direct university apps."},
        {month:"Jun–Aug",task:"Selected KGSP scholars attend 1-year Korean language training in Korea"},
        {month:"Sep",task:"University placement decision for KGSP scholars"},
        {month:"Mar (following year)",task:"Begin Masters program after completing language training"}
      ],
      duration:"2 years",cost:"₩0–₩3,000,000/yr (public universities)",visa:"D-2 Student Visa",tuitionFree:false
    }
  },

  "France": {
    "M.Tech / Masters": {
      scholarships:[
        {name:"Eiffel Excellence Scholarship",amount:"€1,181/month + healthcare + return flights",deadline:"Jan 9",type:"Full",link:"https://campusfrance.org"},
        {name:"Sciences Po Bursary",amount:"Up to €15,000/yr",deadline:"Mar 15",type:"Partial",link:"https://sciencespo.fr"}
      ],
      tests:[
        {name:"DELF/DALF",minScore:"B2–C1",category:"French Language",required:true,link:"https://delf-dalf.org",note:"French-taught programs"},
        {name:"TCF",minScore:"B2+",category:"French Language",required:false,link:"https://ciep.fr"},
        {name:"IELTS Academic",minScore:"7.0+",category:"English",required:true,link:"https://ielts.org",note:"English-taught programs"},
        {name:"TOEFL iBT",minScore:"100+",category:"English",required:true,link:"https://ets.org/toefl",note:"English-taught programs"},
        {name:"GMAT",minScore:"650+",category:"Academic",required:true,link:"https://mba.com",note:"HEC Paris, INSEAD MBA"}
      ],
      documents:["Bachelor transcripts + certified translation","IELTS/TOEFL or DELF/DALF score report","Motivation letter","2 Academic LORs","CV","Passport copy","Campus France registration (mandatory for many countries)"],
      timeline:[
        {month:"Sep–Nov",task:"Register on Campus France portal. Take IELTS/DELF/TOEFL."},
        {month:"Jan 9",task:"Eiffel Scholarship application deadline"},
        {month:"Nov–Mar",task:"Submit university applications (varies by institution)"},
        {month:"Mar–Apr",task:"Receive decisions and scholarship notifications"},
        {month:"May–Jun",task:"Apply for French Student Visa (VLS-TS)"},
        {month:"Sep",task:"Arrive, enroll, attend integration week"}
      ],
      duration:"1–2 years",cost:"€0–€4,000/yr (public universities)",visa:"VLS-TS Student Visa",tuitionFree:true
    }
  },

  "Netherlands": {
    "M.Tech / Masters": {
      scholarships:[
        {name:"Holland Scholarship",amount:"€5,000 (first year only)",deadline:"Feb 1",type:"Partial",link:"https://studyinholland.nl"},
        {name:"TU Delft Excellence Scholarship",amount:"Full tuition waiver",deadline:"Jan 15",type:"Full",link:"https://tudelft.nl"},
        {name:"Orange Tulip Scholarship",amount:"Tuition reduction (varies)",deadline:"Mar 1",type:"Partial",link:"https://orangetulipscholarship.nl"}
      ],
      tests:[
        {name:"IELTS Academic",minScore:"6.5+",category:"English",required:true,link:"https://ielts.org"},
        {name:"TOEFL iBT",minScore:"90+",category:"English",required:true,link:"https://ets.org/toefl"},
        {name:"Cambridge C1/C2",minScore:"176+",category:"English",required:false,link:"https://cambridgeenglish.org"}
      ],
      documents:["Bachelor transcripts + degree","IELTS/TOEFL report","Motivation letter","2 LORs","CV","Passport copy","Financial proof (if no scholarship)"],
      timeline:[
        {month:"Oct–Dec",task:"Take IELTS/TOEFL. Research programs on Studyfinder.nl."},
        {month:"Jan 15",task:"TU Delft Excellence Scholarship deadline"},
        {month:"Feb 1",task:"Holland Scholarship deadline"},
        {month:"Feb–Apr",task:"University application deadlines (Feb–Apr for most programs)"},
        {month:"Apr–May",task:"Receive offers"},
        {month:"May–Jun",task:"Apply for Dutch MVV entry visa + residence permit"},
        {month:"Sep",task:"Arrive for September intake"}
      ],
      duration:"1–2 years",cost:"€6,000–€20,000/yr",visa:"MVV + IND Residence Permit",tuitionFree:false
    }
  },

  "Sweden": {
    "M.Tech / Masters": {
      scholarships:[
        {name:"Swedish Institute Scholarship",amount:"Full living allowance + travel + fees",deadline:"Feb 10",type:"Full",link:"https://si.se"},
        {name:"KTH Scholarship",amount:"Full tuition waiver",deadline:"Jan 15",type:"Full",link:"https://kth.se"}
      ],
      tests:[
        {name:"IELTS Academic",minScore:"6.5+",category:"English",required:true,link:"https://ielts.org"},
        {name:"TOEFL iBT",minScore:"90+",category:"English",required:true,link:"https://ets.org/toefl"}
      ],
      documents:["Bachelor transcripts","IELTS/TOEFL report","Motivation letter","2 LORs","CV","Passport copy"],
      timeline:[
        {month:"Oct–Jan",task:"Take IELTS/TOEFL. Apply KTH (Jan 15), Swedish Institute (Feb 10)."},
        {month:"Jan 15",task:"Universityadmissions.se application deadline"},
        {month:"Mar–Apr",task:"Receive admission decisions"},
        {month:"May",task:"Apply for Swedish Residence Permit"},
        {month:"Aug–Sep",task:"Arrive for August semester start"}
      ],
      duration:"1–2 years",cost:"SEK 80,000–180,000/yr",visa:"Swedish Residence Permit",tuitionFree:false
    }
  },

  "Switzerland": {
    "M.Tech / Masters": {
      scholarships:[
        {name:"ETH Zurich Excellence Award",amount:"Full tuition + CHF 12,000/yr",deadline:"Dec 15",type:"Full",link:"https://ethz.ch"},
        {name:"Swiss Government Excellence Scholarship",amount:"Monthly stipend + fees",deadline:"Dec (via embassy)",type:"Full",link:"https://sbfi.admin.ch"}
      ],
      tests:[
        {name:"IELTS Academic",minScore:"7.0+",category:"English",required:true,link:"https://ielts.org",note:"English programs"},
        {name:"TOEFL iBT",minScore:"100+",category:"English",required:true,link:"https://ets.org/toefl",note:"English programs"},
        {name:"TestDaF / Goethe C2",minScore:"C2",category:"German Language",required:true,link:"https://testdaf.de",note:"German programs"},
        {name:"GRE",minScore:"320+",category:"Academic",required:false,link:"https://ets.org/gre"}
      ],
      documents:["Bachelor transcripts + degree","IELTS/TOEFL report","Motivation letter","2–3 LORs","CV","Passport copy","Portfolio (some programs)"],
      timeline:[
        {month:"Oct–Nov",task:"Apply ETH Excellence Award (Dec 15 deadline)"},
        {month:"Dec",task:"Swiss Government Scholarship via home country embassy"},
        {month:"Dec 15 (ETH) / Jan 15 (EPFL)",task:"University application deadlines"},
        {month:"Feb–Apr",task:"Decisions"},
        {month:"Apr–May",task:"Apply for Swiss Student Visa"},
        {month:"Sep",task:"Start"}
      ],
      duration:"1.5–2 years",cost:"CHF 1,460/yr tuition (very low)",visa:"Swiss Student Visa (Permit B)",tuitionFree:false
    }
  },

  "China": {
    "M.Tech / Masters": {
      scholarships:[
        {name:"Chinese Government Scholarship (CSC)",amount:"Full tuition + ¥3,500/month + accommodation",deadline:"Mar 15 (embassy) / Apr (university)",type:"Full",link:"https://campuschina.org"},
        {name:"Silk Road Scholarship",amount:"Full tuition + ¥3,000/month",deadline:"Varies",type:"Full",link:"https://campuschina.org"},
        {name:"Provincial Government Scholarships",amount:"Partial–full tuition + living",deadline:"Varies",type:"Partial",link:""}
      ],
      tests:[
        {name:"HSK",minScore:"HSK 4+ (B2 level)",category:"Chinese Language",required:true,link:"https://chinesetest.cn",note:"Chinese-taught programs"},
        {name:"IELTS Academic",minScore:"6.0+",category:"English",required:true,link:"https://ielts.org",note:"English-taught programs"},
        {name:"TOEFL iBT",minScore:"80+",category:"English",required:true,link:"https://ets.org/toefl",note:"English-taught programs"}
      ],
      documents:["Bachelor transcripts + degree (notarized)","CSC Online Application Form","2 Academic LORs","Passport copy","Physical examination form (specific CSC form)","HSK or IELTS/TOEFL report","Study plan (500–800 words)"],
      timeline:[
        {month:"Jan–Mar",task:"Register on CSC portal (campuschina.org). Apply embassy route (Mar 15)."},
        {month:"Mar–Apr",task:"University CSC track deadline (typically April)"},
        {month:"May–Jun",task:"Receive admission + scholarship letters"},
        {month:"Jun–Jul",task:"Apply for Chinese Student Visa (X1/X2)"},
        {month:"Aug–Sep",task:"Arrive for September intake"}
      ],
      duration:"2–3 years",cost:"¥0 with CSC / ¥20,000–50,000/yr without",visa:"X1 / X2 Student Visa",tuitionFree:false
    }
  },

  "Singapore": {
    "M.Tech / Masters": {
      scholarships:[
        {name:"NUS Research Scholarship",amount:"Full tuition + S$2,000/month",deadline:"Nov 15",type:"Full",link:"https://nus.edu.sg"},
        {name:"NTU Research Scholarship",amount:"Full tuition + S$2,000/month",deadline:"Nov 30",type:"Full",link:"https://ntu.edu.sg"},
        {name:"ASEAN Scholarship",amount:"Full boarding + tuition",deadline:"Feb 28",type:"Full",link:"https://moe.gov.sg"}
      ],
      tests:[
        {name:"IELTS Academic",minScore:"6.5+",category:"English",required:true,link:"https://ielts.org"},
        {name:"TOEFL iBT",minScore:"90+",category:"English",required:true,link:"https://ets.org/toefl"},
        {name:"GRE / GMAT",minScore:"Program-specific",category:"Academic",required:false,link:"https://ets.org/gre"}
      ],
      documents:["Bachelor transcripts","IELTS/TOEFL report","Research proposal","2–3 LORs","CV","Passport copy"],
      timeline:[
        {month:"Aug–Oct",task:"Apply NUS/NTU Research Scholarship (Nov deadlines)"},
        {month:"Nov–Jan",task:"University application deadline"},
        {month:"Feb–Mar",task:"Interview invitations"},
        {month:"Apr",task:"Receive decisions"},
        {month:"May–Jun",task:"Apply Student Pass (ICA)"},
        {month:"Aug",task:"Start"}
      ],
      duration:"1–2 years",cost:"S$15,000–25,000/yr (mostly funded for research)",visa:"Student Pass",tuitionFree:false
    }
  }
};

function getScholarshipData(country, stream) {
  const countryData = SCHOLARSHIP_DATA[country];
  if (!countryData || !countryData[stream]) {
    return {
      isDefault: true,
      scholarships: [
        {name:"Government Bilateral Scholarship",amount:"Varies — check official embassy website",deadline:"Check annually",type:"Full",link:""},
        {name:"University Merit Scholarship",amount:"25–100% tuition reduction",deadline:"Varies by institution",type:"Partial",link:""},
        {name:"Regional/International Development Award",amount:"Living allowance + partial tuition",deadline:"Varies",type:"Partial",link:""}
      ],
      tests: [
        {name:"IELTS Academic",minScore:"6.0–7.5 (varies by program)",category:"English",required:true,link:"https://ielts.org"},
        {name:"TOEFL iBT",minScore:"80–105 (varies)",category:"English",required:true,link:"https://ets.org/toefl"}
      ],
      documents: ["Academic transcripts (official, translated if required)","Valid passport copy","Motivation letter / personal statement","Letters of Recommendation (2–3)","Language test score report","Proof of financial means","CV / Resume","Health/medical certificate"],
      timeline: [
        {month:"6–12 months before",task:"Research scholarships and universities. Take language tests."},
        {month:"6–9 months before",task:"Submit scholarship applications via government portals"},
        {month:"4–6 months before",task:"Apply to universities directly"},
        {month:"2–4 months before",task:"Receive admission letter. Apply student visa."},
        {month:"1 month before",task:"Arrange accommodation, insurance, travel"}
      ],
      duration: "Varies by program",
      cost: "Varies — verify via official embassy website",
      visa: "Student Visa — contact official embassy",
      tuitionFree: false
    };
  }
  return { isDefault: false, ...countryData[stream] };
}

const STREAMS = [
  { id: "B.E / B.Tech",      icon: "🔧", label: "B.E / B.Tech",       desc: "Undergraduate Engineering — 4 years" },
  { id: "M.Tech / Masters",  icon: "🎓", label: "M.Tech / Masters",   desc: "Postgraduate — 1.5–2 years" },
  { id: "PhD",               icon: "🔬", label: "PhD / Doctorate",    desc: "Research Degree — 3–6 years" },
  { id: "MBA",               icon: "💼", label: "MBA",                desc: "Business Management — 1–2 years" },
  { id: "Medicine (MBBS/MD)",icon: "🏥", label: "Medicine (MBBS/MD)", desc: "Medical Degree — 5–6 years" },
  { id: "Law (LLM)",         icon: "⚖️", label: "Law / LLM",          desc: "Postgraduate Law — 1 year" }
];

module.exports = { ALL_COUNTRIES, SCHOLARSHIP_DATA, STREAMS, getScholarshipData };
