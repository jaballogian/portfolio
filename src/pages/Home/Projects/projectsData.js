// IMAGES
import BackgroundIphone from '../../../assets/images/backgrounds/project_iphone.svg'
import BackgroundMacbook from '../../../assets/images/backgrounds/project_macbook.svg'

const projectsData = [
  {
    // LEFT CONTENT
    title: 'Project Title 1',
    type: [
      'Mobile App',
      'IoT Device',
    ],
    technologies: 'Android Studio, Arudino IDE, Firebase',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    link: '/project/1',
    // RIGHT CONTENT
    imageType: 'mobile',
    imageList: [
      BackgroundIphone,
      BackgroundIphone,
      BackgroundIphone,
    ],
  },
  {
    // LEFT CONTENT
    title: 'Project Title 2',
    type: [
      'Website',
      'IoT Device',
    ],
    technologies: 'Android Studio, Arudino IDE, Firebase',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    link: '/project/2',
    // RIGHT CONTENT
    imageType: 'desktop',
    imageList: [
      BackgroundMacbook,
      BackgroundMacbook,
    ],
  },
  {
    // LEFT CONTENT
    title: 'Project Title 3',
    type: [
      'IoT Device',
    ],
    technologies: 'Android Studio, Arudino IDE, Firebase',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    link: '/project/3',
    // RIGHT CONTENT
    imageType: 'other',
    imageList: [
      BackgroundMacbook,
      BackgroundMacbook,
    ],
  },
]

export default projectsData