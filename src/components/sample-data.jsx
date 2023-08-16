import { v4 as uuid} from 'uuid';

const workExperienceData = [
  {
    companyName: 'Amazon',
    jobTitle: 'Chief Executive Officer',
    duration: 'August 14, 2023 - August 14, 2023',
    cityAndState: 'Seattle, Washington',
    bulletPoints: 'Led 1M people to handle logistics and innovate faster shipping methods to increase customer experience',
    id: uuid(),
  },
  {
    companyName: 'Apple',
    jobTitle: 'Chief Executive Officer',
    duration: 'August 14, 2023 - August 14, 2023',
    cityAndState: 'Seattle, Washington',
    bulletPoints: 'Led 1M people to handle logistics and innovate faster shipping methods to increase customer experience',
    id: uuid(),
  }
]

const generalInfoData = {
  name: "Bruce Hsu",
  email: "brucescreation@gmail.com",
  phoneNumber: "111-111-1111",
  cityAndState: "Los Angeles, CA"
}

const educationData = {
  universityName: 'USC',
  degree: 'Political Science',
  graduationDate: "October 2022",
  honorsAwards: 'Random Award',
  studentOrganizations: 'Basketball Club',
  location: 'Los Angeles, CA',
  gpa: '4.0/4.0'
}

export {workExperienceData, generalInfoData, educationData}