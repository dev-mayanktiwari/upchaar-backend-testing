const axios = require("axios");
const fs = require("fs");

const hospitals = [
  {
      "name": "Sunrise Super Specialty Hospital",
      "email": "admin@sunrisespeciality.in",
      "password": "12345",
      "location": "5th Block, Koramangala, Bengaluru, Karnataka",
      "contact": "08025678912",
      "zipcode": 560095,
      "rating": 5,
      "departments": [
          {
              "name": "Oncology",
              "head": "Dr. Kavita Rao"
          },
          {
              "name": "Neurology",
              "head": "Dr. Abhinav Reddy"
          },
          {
              "name": "Gastroenterology",
              "head": "Dr. Rajeev Menon"
          }
      ]
  },
  {
      "name": "Greenfield Medical Center",
      "email": "contact@greenfieldmed.com",
      "password": "67890",
      "location": "123 Main Street, HSR Layout, Bengaluru, Karnataka",
      "contact": "08034567891",
      "zipcode": 560102,
      "rating": 4,
      "departments": [
          {
              "name": "Cardiology",
              "head": "Dr. Sanjay Patel"
          },
          {
              "name": "Orthopedics",
              "head": "Dr. Neeta Sharma"
          }
      ]
  },
  {
      "name": "Elite Care Hospital",
      "email": "info@elitecare.in",
      "password": "54321",
      "location": "24/7 Green Park, Whitefield, Bengaluru, Karnataka",
      "contact": "08045678912",
      "zipcode": 560066,
      "rating": 4,
      "departments": [
          {
              "name": "Pediatrics",
              "head": "Dr. Meera Iyer"
          },
          {
              "name": "Dermatology",
              "head": "Dr. Ramesh Kumar"
          }
      ]
  },
  {
      "name": "MediCare Hospital",
      "email": "support@medicarehospital.in",
      "password": "11223",
      "location": "C-Block, Bellandur, Bengaluru, Karnataka",
      "contact": "08056789123",
      "zipcode": 560103,
      "rating": 5,
      "departments": [
          {
              "name": "Endocrinology",
              "head": "Dr. Ravi Gupta"
          },
          {
              "name": "Urology",
              "head": "Dr. Sushila Devi"
          }
      ]
  },
  {
      "name": "Prime Health Clinic",
      "email": "admin@primehealth.in",
      "password": "98765",
      "location": "A-Block, MG Road, Bengaluru, Karnataka",
      "contact": "08067891234",
      "zipcode": 560001,
      "rating": 3,
      "departments": [
          {
              "name": "General Medicine",
              "head": "Dr. Prakash Rao"
          },
          {
              "name": "Ophthalmology",
              "head": "Dr. Lakshmi Nair"
          }
      ]
  },
  {
      "name": "Vista Health Center",
      "email": "contact@vistahealth.com",
      "password": "19283",
      "location": "D-Block, Jayanagar, Bengaluru, Karnataka",
      "contact": "08078912345",
      "zipcode": 560082,
      "rating": 4,
      "departments": [
          {
              "name": "Rheumatology",
              "head": "Dr. Anil Kumar"
          },
          {
              "name": "Psychiatry",
              "head": "Dr. Sneha Agarwal"
          }
      ]
  },
  {
      "name": "Care Plus Hospital",
      "email": "info@careplushospital.in",
      "password": "45678",
      "location": "E-Block, Indiranagar, Bengaluru, Karnataka",
      "contact": "08089012345",
      "zipcode": 560038,
      "rating": 4,
      "departments": [
          {
              "name": "Hematology",
              "head": "Dr. Amit Sharma"
          },
          {
              "name": "Plastic Surgery",
              "head": "Dr. Shilpa Rao"
          }
      ]
  },
  {
      "name": "Healthcare Hub",
      "email": "contact@healthcarehub.in",
      "password": "23456",
      "location": "F-Block, Wilson Garden, Bengaluru, Karnataka",
      "contact": "08090123456",
      "zipcode": 560027,
      "rating": 5,
      "departments": [
          {
              "name": "Pulmonology",
              "head": "Dr. Ravi Kumar"
          },
          {
              "name": "Nephrology",
              "head": "Dr. Sunita Mehta"
          }
      ]
  },
  {
      "name": "City Med Hospital",
      "email": "admin@citymedhospital.in",
      "password": "34567",
      "location": "G-Block, Ulsoor, Bengaluru, Karnataka",
      "contact": "08091234567",
      "zipcode": 560008,
      "rating": 3,
      "departments": [
          {
              "name": "Infectious Diseases",
              "head": "Dr. Anil Sharma"
          },
          {
              "name": "Geriatrics",
              "head": "Dr. Jyothi Reddy"
          }
      ]
  },
  {
      "name": "Advanced Care Facility",
      "email": "info@advancedcare.in",
      "password": "67890",
      "location": "H-Block, BTM Layout, Bengaluru, Karnataka",
      "contact": "08092345678",
      "zipcode": 560076,
      "rating": 4,
      "departments": [
          {
              "name": "Allergy",
              "head": "Dr. Meenal Patel"
          },
          {
              "name": "Cardiothoracic Surgery",
              "head": "Dr. Vikram Singh"
          }
      ]
  },
  {
      "name": "Global Health Center",
      "email": "admin@globalhealth.in",
      "password": "98765",
      "location": "I-Block, Basavanagudi, Bengaluru, Karnataka",
      "contact": "08093456789",
      "zipcode": 560004,
      "rating": 4,
      "departments": [
          {
              "name": "Gynecology",
              "head": "Dr. Priya Sharma"
          },
          {
              "name": "Thoracic Surgery",
              "head": "Dr. Anand Mehta"
          }
      ]
  },
  {
      "name": "Wellness Hospital",
      "email": "contact@wellnesshospital.in",
      "password": "45678",
      "location": "J-Block, Rajajinagar, Bengaluru, Karnataka",
      "contact": "08094567890",
      "zipcode": 560010,
      "rating": 3,
      "departments": [
          {
              "name": "Neurosurgery",
              "head": "Dr. Arjun Reddy"
          },
          {
              "name": "Emergency Medicine",
              "head": "Dr. Indira Menon"
          }
      ]
  },
  {
      "name": "Metro Hospital",
      "email": "info@metrohospital.in",
      "password": "11223",
      "location": "K-Block, Kalyan Nagar, Bengaluru, Karnataka",
      "contact": "08095678901",
      "zipcode": 560043,
      "rating": 5,
      "departments": [
          {
              "name": "Radiology",
              "head": "Dr. Sunil Patel"
          },
          {
              "name": "Sports Medicine",
              "head": "Dr. Geeta Agarwal"
          }
      ]
  },
  {
      "name": "Elite Medical Institute",
      "email": "admin@elitemedical.in",
      "password": "67890",
      "location": "L-Block, Malleswaram, Bengaluru, Karnataka",
      "contact": "08096789012",
      "zipcode": 560055,
      "rating": 4,
      "departments": [
          {
              "name": "Endocrinology",
              "head": "Dr. Harish Nair"
          },
          {
              "name": "Gastroenterology",
              "head": "Dr. Neha Rao"
          }
      ]
  },
  {
      "name": "Health First Clinic",
      "email": "contact@healthfirst.in",
      "password": "22334",
      "location": "M-Block, J.P. Nagar, Bengaluru, Karnataka",
      "contact": "08097890123",
      "zipcode": 560078,
      "rating": 4,
      "departments": [
          {
              "name": "Pathology",
              "head": "Dr. Kumar Reddy"
          },
          {
              "name": "Pulmonology",
              "head": "Dr. Neelam Gupta"
          }
      ]
  },
  {
      "name": "New Life Hospital",
      "email": "admin@newlifehospital.in",
      "password": "33445",
      "location": "N-Block, Kumaraswamy Layout, Bengaluru, Karnataka",
      "contact": "08098901234",
      "zipcode": 560078,
      "rating": 5,
      "departments": [
          {
              "name": "Oncology",
              "head": "Dr. Ananya Gupta"
          },
          {
              "name": "Nephrology",
              "head": "Dr. Vijay Sharma"
          }
      ]
  },
  {
      "name": "Bright Future Clinic",
      "email": "info@brightfuture.in",
      "password": "55667",
      "location": "O-Block, Kengeri, Bengaluru, Karnataka",
      "contact": "08099012345",
      "zipcode": 560060,
      "rating": 4,
      "departments": [
          {
              "name": "Obstetrics",
              "head": "Dr. Meera Patel"
          },
          {
              "name": "Radiology",
              "head": "Dr. Arun Kumar"
          }
      ]
  },
  {
      "name": "Carewell Hospital",
      "email": "admin@carewellhospital.in",
      "password": "66778",
      "location": "P-Block, Banashankari, Bengaluru, Karnataka",
      "contact": "08091234567",
      "zipcode": 560070,
      "rating": 3,
      "departments": [
          {
              "name": "Emergency Medicine",
              "head": "Dr. Anil Reddy"
          },
          {
              "name": "Rheumatology",
              "head": "Dr. Shweta Agarwal"
          }
      ]
  },
  {
      "name": "Aspire Health Center",
      "email": "contact@aspirehealth.in",
      "password": "77889",
      "location": "Q-Block, Jayanagar 4th Block, Bengaluru, Karnataka",
      "contact": "08092345678",
      "zipcode": 560041,
      "rating": 4,
      "departments": [
          {
              "name": "Orthopedics",
              "head": "Dr. Ramesh Reddy"
          },
          {
              "name": "Pediatrics",
              "head": "Dr. Sangeeta Sharma"
          }
      ]
  },
  {
      "name": "Excel Care Hospital",
      "email": "admin@excelcare.in",
      "password": "88990",
      "location": "R-Block, Kanakapura Road, Bengaluru, Karnataka",
      "contact": "08093456789",
      "zipcode": 560062,
      "rating": 5,
      "departments": [
          {
              "name": "Geriatrics",
              "head": "Dr. Sunil Patel"
          },
          {
              "name": "Cardiology",
              "head": "Dr. Meena Nair"
          }
      ]
  },
  {
      "name": "Health Care Clinic",
      "email": "info@healthcareclinic.in",
      "password": "99887",
      "location": "S-Block, Hebbal, Bengaluru, Karnataka",
      "contact": "08094567890",
      "zipcode": 560024,
      "rating": 3,
      "departments": [
          {
              "name": "Dermatology",
              "head": "Dr. Priya Nair"
          },
          {
              "name": "Urology",
              "head": "Dr. Rajesh Kumar"
          }
      ]
  },
  {
      "name": "Bright Health Center",
      "email": "contact@brighthealth.in",
      "password": "55678",
      "location": "T-Block, J.P. Nagar 2nd Phase, Bengaluru, Karnataka",
      "contact": "08095678901",
      "zipcode": 560078,
      "rating": 4,
      "departments": [
          {
              "name": "Endocrinology",
              "head": "Dr. Kavita Patel"
          },
          {
              "name": "Plastic Surgery",
              "head": "Dr. Arun Reddy"
          }
      ]
  },
  {
      "name": "Peak Health Clinic",
      "email": "admin@peakhealth.in",
      "password": "66789",
      "location": "U-Block, Koramangala 2nd Block, Bengaluru, Karnataka",
      "contact": "08096789012",
      "zipcode": 560034,
      "rating": 5,
      "departments": [
          {
              "name": "General Surgery",
              "head": "Dr. Anita Rao"
          },
          {
              "name": "Neurosurgery",
              "head": "Dr. Ravi Sharma"
          }
      ]
  },
  {
      "name": "Healthway Hospital",
      "email": "contact@healthwayhospital.in",
      "password": "77899",
      "location": "V-Block, Banashankari 2nd Stage, Bengaluru, Karnataka",
      "contact": "08097890123",
      "zipcode": 560070,
      "rating": 4,
      "departments": [
          {
              "name": "Rheumatology",
              "head": "Dr. Neeta Sharma"
          },
          {
              "name": "Allergy",
              "head": "Dr. Vikram Rao"
          }
      ]
  },
  {
      "name": "Skyline Medical Center",
      "email": "info@skylinehealth.in",
      "password": "33445",
      "location": "W-Block, Yeshwanthpur, Bengaluru, Karnataka",
      "contact": "08098901234",
      "zipcode": 560022,
      "rating": 5,
      "departments": [
          {
              "name": "Pediatrics",
              "head": "Dr. Sunil Kumar"
          },
          {
              "name": "Psychiatry",
              "head": "Dr. Sushma Reddy"
          }
      ]
  },
  {
      "name": "New Era Hospital",
      "email": "admin@newerahospital.in",
      "password": "55667",
      "location": "X-Block, Madiwala, Bengaluru, Karnataka",
      "contact": "08090123456",
      "zipcode": 560068,
      "rating": 3,
      "departments": [
          {
              "name": "Endocrinology",
              "head": "Dr. Anil Patel"
          },
          {
              "name": "Nephrology",
              "head": "Dr. Jyothi Reddy"
          }
      ]
  },
  {
      "name": "Hope Medical Center",
      "email": "contact@hopemedical.in",
      "password": "66778",
      "location": "Y-Block, Varthur Road, Bengaluru, Karnataka",
      "contact": "08091234567",
      "zipcode": 560037,
      "rating": 4,
      "departments": [
          {
              "name": "Orthopedics",
              "head": "Dr. Meena Patel"
          },
          {
              "name": "Dermatology",
              "head": "Dr. Kumar Gupta"
          }
      ]
  },
  {
      "name": "Urban Health Clinic",
      "email": "admin@urbanhealth.in",
      "password": "88990",
      "location": "Z-Block, Sarjapur Road, Bengaluru, Karnataka",
      "contact": "08092345678",
      "zipcode": 560102,
      "rating": 5,
      "departments": [
          {
              "name": "Gynecology",
              "head": "Dr. Arvind Sharma"
          },
          {
              "name": "General Medicine",
              "head": "Dr. Sneha Patel"
          }
      ]
  },
  {
      "name": "Urban Care Hospital",
      "email": "contact@urbancare.in",
      "password": "99887",
      "location": "A-Block, Electronic City, Bengaluru, Karnataka",
      "contact": "08094567890",
      "zipcode": 560100,
      "rating": 4,
      "departments": [
          {
              "name": "Hematology",
              "head": "Dr. Kavita Sharma"
          },
          {
              "name": "Gastroenterology",
              "head": "Dr. Rajesh Nair"
          }
      ]
  },
  {
      "name": "Premier Health Center",
      "email": "info@premierhealth.in",
      "password": "22334",
      "location": "B-Block, Whitefield, Bengaluru, Karnataka",
      "contact": "08095678901",
      "zipcode": 560066,
      "rating": 5,
      "departments": [
          {
              "name": "Cardiology",
              "head": "Dr. Priya Reddy"
          },
          {
              "name": "Radiology",
              "head": "Dr. Arvind Patel"
          }
      ]
  },
  {
      "name": "Zen Health Clinic",
      "email": "admin@zenhealth.in",
      "password": "44556",
      "location": "C-Block, Jayanagar 3rd Block, Bengaluru, Karnataka",
      "contact": "08096789012",
      "zipcode": 560011,
      "rating": 4,
      "departments": [
          {
              "name": "Emergency Medicine",
              "head": "Dr. Sushil Gupta"
          },
          {
              "name": "Plastic Surgery",
              "head": "Dr. Indira Rao"
          }
      ]
  },
  {
      "name": "MetroCare Hospital",
      "email": "contact@metrocare.in",
      "password": "55667",
      "location": "D-Block, Koramangala 5th Block, Bengaluru, Karnataka",
      "contact": "08092345678",
      "zipcode": 560095,
      "rating": 5,
      "departments": [
          {
              "name": "Obstetrics",
              "head": "Dr. Meena Sharma"
          },
          {
              "name": "Neurosurgery",
              "head": "Dr. Ravi Nair"
          }
      ]
  },
  {
      "name": "Apex Health Center",
      "email": "admin@apexhealth.in",
      "password": "22334",
      "location": "E-Block, Wilson Garden, Bengaluru, Karnataka",
      "contact": "08093456789",
      "zipcode": 560027,
      "rating": 4,
      "departments": [
          {
              "name": "Nephrology",
              "head": "Dr. Kavita Gupta"
          },
          {
              "name": "Allergy",
              "head": "Dr. Arjun Patel"
          }
      ]
  },
  {
      "name": "Royal Medical Institute",
      "email": "info@royalmedical.in",
      "password": "66778",
      "location": "G-Block, Bellandur, Bengaluru, Karnataka",
      "contact": "08094567890",
      "zipcode": 560103,
      "rating": 3,
      "departments": [
          {
              "name": "Dermatology",
              "head": "Dr. Ravi Kumar"
          },
          {
              "name": "Cardiology",
              "head": "Dr. Neeta Sharma"
          }
      ]
  },
  {
      "name": "Summit Health Clinic",
      "email": "admin@summithealth.in",
      "password": "55667",
      "location": "H-Block, Indiranagar 2nd Stage, Bengaluru, Karnataka",
      "contact": "08095678901",
      "zipcode": 560038,
      "rating": 4,
      "departments": [
          {
              "name": "Endocrinology",
              "head": "Dr. Priya Patel"
          },
          {
              "name": "Pulmonology",
              "head": "Dr. Ravi Sharma"
          }
      ]
  },
  {
      "name": "CareMed Hospital",
      "email": "contact@caremed.in",
      "password": "33445",
      "location": "I-Block, Malleswaram 2nd Stage, Bengaluru, Karnataka",
      "contact": "08093456789",
      "zipcode": 560055,
      "rating": 5,
      "departments": [
          {
              "name": "Oncology",
              "head": "Dr. Anil Kumar"
          },
          {
              "name": "Nephrology",
              "head": "Dr. Meena Reddy"
          }
      ]
  },
  {
      "name": "ProHealth Clinic",
      "email": "admin@prohealth.in",
      "password": "55678",
      "location": "J-Block, Yeshwanthpur, Bengaluru, Karnataka",
      "contact": "08092345678",
      "zipcode": 560022,
      "rating": 4,
      "departments": [
          {
              "name": "Gynecology",
              "head": "Dr. Sunita Patel"
          },
          {
              "name": "Orthopedics",
              "head": "Dr. Anil Rao"
          }
      ]
  },
  {
      "name": "NextGen Health Center",
      "email": "info@nextgenhealth.in",
      "password": "77889",
      "location": "K-Block, Jayanagar 3rd Block, Bengaluru, Karnataka",
      "contact": "08094567890",
      "zipcode": 560011,
      "rating": 5,
      "departments": [
          {
              "name": "Rheumatology",
              "head": "Dr. Priya Kumar"
          },
          {
              "name": "Emergency Medicine",
              "head": "Dr. Arun Sharma"
          }
      ]
  },
  {
      "name": "Optima Health Clinic",
      "email": "contact@optimahealth.in",
      "password": "22334",
      "location": "L-Block, Koramangala 4th Block, Bengaluru, Karnataka",
      "contact": "08097890123",
      "zipcode": 560034,
      "rating": 4,
      "departments": [
          {
              "name": "Urology",
              "head": "Dr. Neeta Reddy"
          },
          {
              "name": "Pathology",
              "head": "Dr. Ramesh Kumar"
          }
      ]
  },
  {
      "name": "Vision Health Center",
      "email": "admin@visionhealth.in",
      "password": "55667",
      "location": "M-Block, Sarjapur Road, Bengaluru, Karnataka",
      "contact": "08094567890",
      "zipcode": 560095,
      "rating": 5,
      "departments": [
          {
              "name": "Ophthalmology",
              "head": "Dr. Meera Gupta"
          },
          {
              "name": "Neurosurgery",
              "head": "Dr. Prakash Rao"
          }
      ]
  },
  {
      "name": "Pioneer Medical Center",
      "email": "info@pioneermedical.in",
      "password": "77899",
      "location": "N-Block, Rajajinagar, Bengaluru, Karnataka",
      "contact": "08091234567",
      "zipcode": 560010,
      "rating": 4,
      "departments": [
          {
              "name": "Cardiology",
              "head": "Dr. Arvind Patel"
          },
          {
              "name": "Dermatology",
              "head": "Dr. Sneha Sharma"
          }
      ]
  },
  {
      "name": "Innova Health Clinic",
      "email": "admin@innovahc.in",
      "password": "44556",
      "location": "O-Block, Jayanagar 4th Block, Bengaluru, Karnataka",
      "contact": "08096789012",
      "zipcode": 560041,
      "rating": 4,
      "departments": [
          {
              "name": "Psychiatry",
              "head": "Dr. Ramesh Patel"
          },
          {
              "name": "Nephrology",
              "head": "Dr. Kavita Reddy"
          }
      ]
  },
  {
      "name": "Cure Well Hospital",
      "email": "contact@curewell.in",
      "password": "99887",
      "location": "P-Block, Whitefield, Bengaluru, Karnataka",
      "contact": "08093456789",
      "zipcode": 560066,
      "rating": 5,
      "departments": [
          {
              "name": "Obstetrics",
              "head": "Dr. Anil Kumar"
          },
          {
              "name": "Gynecology",
              "head": "Dr. Sneha Patel"
          }
      ]
  },
  {
      "name": "HealthTrust Center",
      "email": "info@healthtrust.in",
      "password": "22334",
      "location": "Q-Block, Indiranagar, Bengaluru, Karnataka",
      "contact": "08094567890",
      "zipcode": 560038,
      "rating": 4,
      "departments": [
          {
              "name": "Rheumatology",
              "head": "Dr. Meera Sharma"
          },
          {
              "name": "Neurosurgery",
              "head": "Dr. Arun Gupta"
          }
      ]
  }
]

const url = "http://localhost:3000/api/v1/hospital/register"; // Replace with your API endpoint

const delay = (ms) => {
  new Promise((resolve) => setTimeout(resolve, ms));
};

const sendRequests = async () => {
  const tokens = [];
  console.log("Script running");
  for (const hospital of hospitals) {
    try {
      const response = await axios.post(url, hospital);
      console.log(`Response for hospital ${hospital.name}:`, response.data);
      if (response.data.token) {
        tokens.push(response.data.token);
      }
    } catch (error) {
      console.error(
        `Error sending request for hospital ${hospital.name}:`,
        error.response?.data || error.message
      );
    }
  }

  // Store tokens to a file
  fs.writeFileSync("tokens.json", JSON.stringify(tokens, null, 2));
  console.log("Tokens saved to tokens.json");
};

sendRequests();

