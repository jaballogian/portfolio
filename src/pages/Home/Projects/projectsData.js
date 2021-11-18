// IMAGES
import BackgroundIphone from '../../../assets/images/backgrounds/project_iphone.svg'
import BackgroundMacbook from '../../../assets/images/backgrounds/project_macbook.svg'

const projectsData = [
  {
    // LEFT CONTENT
    title: 'Project Title 1',
    typeList: [
      'Mobile App',
      'IoT Device',
    ],
    technologies: 'Android Studio, Arudino IDE, Firebase',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    link: '/project/1',
    // RIGHT CONTENT
    imageType: 'mobile',
    imageList: [
      BackgroundIphone,
      BackgroundIphone,
    ],
  },
  {
    // LEFT CONTENT
    title: 'Project Title 2',
    typeList: [
      'Website',
      'IoT Device',
    ],
    technologies: 'Android Studio, Arudino IDE, Firebase',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
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
    typeList: [
      'IoT Device',
    ],
    technologies: 'Android Studio, Arudino IDE, Firebase',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
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