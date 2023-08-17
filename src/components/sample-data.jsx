import { v4 as uuid} from 'uuid';

/* made sample data a super stacked resume with a ton of buzz words */
const workExperienceData = [
  {
    companyName: 'MeTube',
    jobTitle: 'CEO',
    duration: 'Dec. 2022 - Present',
    cityAndState: 'Seattle, Washington',
    bulletPoints: 'Founded a YC-backed startup focused on signing Vlog-centric creators. Grew platform 50% month over month with over 80% retention. Raised $5B in VC-funding to date.',
    id: uuid(),
    isEditing: false,
    isHidden: false
  },
  {
    companyName: 'Citadel',
    jobTitle: 'Quantitative Analyst Intern',
    duration: 'June 2021 - Aug. 2021',
    cityAndState: 'New York City, NY',
    bulletPoints: 'Developed trading algorithims that achieved 700% return in 1 month',
    id: uuid(),
    isEditing: false,
    isHidden: false
  },
  {
    companyName: 'McDonalds',
    jobTitle: 'Cashier',
    duration: 'Dec. 2018 - Dec. 2019',
    cityAndState: 'Seattle, Washington',
    bulletPoints: 'Processed hundreds of microtransactions every day in a fast-paced environment',
    id: uuid(),
    isEditing: false,
    isHidden: false    
  }
]

const generalInfoData = {
  name: "John Doe",
  email: "johndoe@professionalemail.com",
  phoneNumber: "111-111-1111",
  cityAndState: "San Francisco, CA"
}

const educationData = {
  universityName: 'Harvard University',
  degree: 'Bachelors of Science in Political Science',
  graduationDate: "December 2022",
  honorsAwards: 'Gates Scholarship, Mock Trial 1st Place National Winner',
  studentOrganizations: 'Basketball Club Team Captain, Rowing Team Captain',
  location: 'Boston, MA',
  gpa: '4.0/4.0'
}

const skillsInterestsData = {
  skills: 'Fluent in English, Mandarin, French, Spanish, Japanese, Korean',
  interests: 'Anime, Drawing, Rap, Content Creation, Valorant'
}

export {workExperienceData, generalInfoData, educationData, skillsInterestsData}