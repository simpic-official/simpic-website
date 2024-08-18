import dinner from './images/drive/dinner.jpg'
import conference from './images/drive/conference2.jpg'
import party from './images/drive/party2.jpg'
import tour from './images/drive/recreational2.jpg'
import cultural from './images/drive/cultural.jpg'
import pandemos1 from './images/pandemos1.png'
import pandemos2 from './images/pandemos2.png'
import pandemos3 from './images/pandemos3.png'
import pandemos4 from './images/pandemos4.png'
import pandemos5 from './images/pandemos5.png'
import invitationpackage from './images/invitationpackage.png'

export const schedulesDay1 = [
    {
        col1: "Registration",
        col2: "09:00",
        col3: "12:00"
    },
    {
        col1: "Lunch",
        col2: "11:00",
        col3: "13:00"
    },
    {
        col1: "Opening Ceremony",
        col2: "13:30",
        col3: "14:45"
    },
    {
        col1: "Cultural Activity",
        col2: "15:00",
        col3: "18.15"
    },
    {
        col1: "Welcome Dinner",
        col2: "18:30",
        col3: "21:00"
    },
    {
        col1: "Travel back to Hotel",
        col2: "21:00",
        col3: "21:15"
    },
]

export const schedulesDay2 = [
    {
        col1: "Breakfast at Hotel",
        col2: "06:00",
        col3: "08:00"
    },
    {
        col1: "Examination Round 1 / Conference",
        col2: "09:00",
        col3: "12:00"
    },
    {
        col1: "Conference",
        col2: "09:30",
        col3: "11:30",
    },
    {
        col1: "Lunch",
        col2: "11:30",
        col3: "13:00"
    },
    {
        col1: "Delegate-Buddy Time",
        col2: "13:00",
        col3: "Onwards"
    }
]

export const schedulesDay3 = [
    {
        col1: "Breakfast at Hotel",
        col2: "06:00",
        col3: "08:00"
    },
    {
        col1: "Examination Round 2",
        col2: "09:00",
        col3: "10:30"
    },
    {
        col1: "Examination Round 3",
        col2: "10:30",
        col3: "11:45"
    },
    {
        col1: "Lunch",
        col2: "12:00",
        col3: "13:30"
    },
    {
        col1: "Final Round Examination",
        col2: "13:30",
        col3: "16:30"
    },
    {
        col1: "Closing Ceremony",
        col2: "16:30",
        col3: "17:00"
    },
    {
        col1: "Farewell Party",
        col2: "18:00",
        col3: "21:00"
    },
    {
        col1: "Travel back to Hotel",
        col2: "21:00",
        col3: "21:15"
    },
]

export const schedulesDay4 = [
    {
        col1: "Breakfast at Hotel",
        col2: "06:00",
        col3: "08:00"
    },
    {
        col1: "Cultural Excursion",
        col2: "08:30",
        col3: "15:30"
    },
]

export const activities = [
    {
        title: "Welcome Dinner",
        description: "Join us for a delightful dinner cruise with beautiful views",
        bg: "rgba(217,217,217,1)",
        img: dinner,
    },
    {
        title: "Conference",
        description: "Engage in insightful lectures and discussions with peers",
        bg: "rgba(255,171,171,1)",
        img: conference,
    },
    {
        title: "Night Party",
        description: "Celebrate with an electrifying EDM night of music and dance",
        bg: "rgba(137,146,224,1)",
        img: party,
    },
    {
        title: "Museum Tour",
        description: "Explore the history of our medical school on a guided tour",
        bg: "rgba(243,177,61,1)",
        img: tour,
    },
    {
        title: "Cultural Excursion",
        description: "Experience Bangkok's culture on this exciting adventure",
        bg: "rgba(236,216,150,1)",
        img: cultural,
    }
]

export const resources = [
    {
        type: 'COMPETITION',
        title: 'Rulebook'
    },
    {
        type: 'REGISTRATION',
        title: 'Registration Guide'
    },
    {
        type: 'REGISTRATION',
        title: 'Invitation Package'
    },
    {
        type: 'GUIDEBOOK',
        title: 'Coming Soon'
    },
    {
        type: 'PANDEMOS',
        title: 'The Last but not Least',
        img: pandemos1,
        link: "https://pubhtml5.com/oppcd/mlet/",
    },
    {
        type: 'PANDEMOS',
        title: 'Antibody and B-Lymphocyte',
        img: pandemos5,
        link: "https://pubhtml5.com/iyspj/jwyp/"
    },
    {
        type: 'PANDEMOS',
        title: 'Into a small world',
        img: pandemos3,
        link: "https://pubhtml5.com/eynem/ftkv/"
    },
    {
        type: 'PANDEMOS',
        title: 'The New Chapter 2024',
        img: pandemos4,
        link: "https://online.pubhtml5.com/xylph/rjdf/"
    }
]

export const faqs = [
    {
        question: "What are the registration fees included?",
        answer: "Registration fees cover all expenses from January 18th to 21st, 2025, encompassing food, lodging, tour activities, and more. In summary, no additional charges apply for attending SIMPIC following registration.",
        id: "f1",
    },
    {
        question: "Do the team need to stay at the provided hotel during the competition?",
        answer: "Please note that our partner hotel is optional. Your team can also choose not to stay at the provided hotel during this competition. If your team chooses not to stay at our provided hotel, you need to select the package with no hotel room during the registration process.",
        id: "f2"
    },
    {
        question: "For each university, how many teams can participate in the competition?",
        answer: "There is no restriction on the number of teams that a university can enter into the competition.",
        id: "f3"
    },
    {
        question: "Can clinical medical students join the competition?",
        answer: "Absolutely! Clinical medical students are welcome to partake in the competition, provided they are enrolled in their respective universities.",
        id: "f4"
    },
    {
        question: "Are there any requirements or essays needed in order to join the competition?",
        answer: "Only a letter of approval (or statement) and PDPA consent are required for SIMPIC registration which can be downloaded from the website.",
        id: "f5"
    },
    {
        question: "Can participants modify their registration details, such as accommodation preferences, after they have registered?",
        answer: "Participants are welcome to modify their registration details, including team composition and accommodation preferences, before finalizing and submitting their application. It's important to review and ensure accuracy before hitting the submit button, as changes cannot be accommodated after submission.",
        id: "f6"
    },
    {
        question: "What are check-in and check-out times for accommodations?",
        answer: "For the upcoming event. It is our pleasure to inform you that transportation will indeed be provided for all activities scheduled within the competition venue, tour activities, and the exam itself. This is to ensure a seamless experience for all participants. However, we recommend that participants personally handle transportation arrangements from the airport. This will allow competitors to immerse themselves in the Thai experience and tailor their transportation and schedule according to their flight and preferences.",
        id: "f7"
    },
    {
        question: "Will transportation be provided for the tour activities, or should participants arrange their own transportation?",
        answer: "Delegates can start checking in at 13.00 on January 17, 2025 (GMT+7)",
        id: "f8"
    },
    {
        question: "What is the cancellation policy for the event? Will participants receive a refund if they are unable to attend after registering?",
        answer: "Inform you that we have a strict no-refund policy for this event. We understand that unexpected circumstances can arise, but the logistics and planning involved in organizing the event prevent us from offering refunds to participants who are unable to attend after registering. We've taken this decision to ensure the fairness and consistency of our policy for all participants. While we cannot provide refunds, we do encourage participants to consider their availability and commitment before registering. If you have any further questions or concerns, please feel free to reach out to us, and we'd be happy to assist you.",
        id: "f9"
    },
    
]
