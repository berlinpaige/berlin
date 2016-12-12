var projectData = [
  {
    projectType: 'professional',
    professionalProjects: true,
    photo: 'data:image/jpeg;base64,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',
    client: 'clinetName',
    description: 'Professional work @ CPB',
    url: 'http://google.com',
    linkText: 'visit link',
    linkText: 'visit link',
    technologies: 'React, Stylus',
    role: 'Front End Dev',
    id: 0
  },
  {
    projectType: 'professional',
    professionalProjects: true,
    photo: 'http://www.picturescollections.com/wp-content/uploads/2013/03/Blue-Color-Photography-04.jpg',
    client: 'clinetName',
    description: 'Personal Project',
    url: 'http://google.com',
    linkText: 'visit link',
    technologies: 'React, Stylus',
    role: 'Front End Dev',
    id: 1
  },
  {
    projectType: 'professional',
    professionalProjects: true,
    photo: 'http://img09.deviantart.net/a079/i/2008/268/7/6/blue_stairs_by_initio.jpg',
    client: 'clinetName',
    description: 'Professional work @ CPB',
    url: 'http://google.com',
    linkText: 'visit link',
    technologies: 'React, Stylus',
    role: 'Front End Dev',
    id: 2
  },
  {
    projectType: 'professional',
    professionalProjects: true,
    photo: 'http://s3.favim.com/orig/40/awesome-blue-fashion-paint-photography-Favim.com-334609.jpg',
    client: 'clinetName',
    description: 'Professional work @ CPB',
    url: 'http://google.com',
    linkText: 'visit link',
    technologies: 'React, Stylus',
    role: 'Front End Dev',
    id: 3
  },
  {
    projectType: 'personal',
    professionalProjects: true,
    photo: 'https://s-media-cache-ak0.pinimg.com/236x/e2/f6/11/e2f611a6a8855c90702552d6568a0e14.jpg',
    client: 'clinetName',
    url: 'http://google.com',
    linkText: 'visit link',
    description: 'Personal Project',
    technologies: 'React, Stylus',
    role: 'Front End Dev',
    id: 4
  },
  {
    projectType: 'personal',
    professionalProjects: true,
    photo: 'https://img1.etsystatic.com/000/2/6470801/il_570xN.263933921.jpg',
    client: 'clinetName',
    description: 'Personal Project',
    url: 'http://google.com',
    linkText: 'visit link',
    technologies: 'React, Stylus',
    role: 'Front End Dev',
    id: 5
  },
  {
    projectType: 'personal',
    professionalProjects: true,
    photo: 'http://www.fotoblur.com/imgs/0/0/0/3/0/9/0/295089.jpg?v=3',
    client: 'clinetName',
    description: 'Personal Project',
    url: 'http://google.com',
    linkText: 'visit link',
    technologies: 'React, Stylus',
    role: 'Front End Dev',
    id: 6
  },
  {
    projectType: 'personal',
    professionalProjects: true,
    photo: 'https://www.photocase.com/photos/1641797-human-being-vacation-and-travel-blue-water-travel-photography-cold-photocase-stock-photo-large.jpeg',
    client: 'clinetName',
    description: 'Professional work @ CPB',
    url: 'http://google.com',
    linkText: 'visit link',
    technologies: 'React, Stylus',
    role: 'Front End Dev',
    id: 7
  },
  {
    projectType: 'personal',
    professionalProjects: true,
    photo: 'http://www.nationalgeographic.com/content/dam/photography/photos/000/013/1342.jpg',
    client: 'clinetName',
    description: 'Professional work @ CPB',
    url: 'http://google.com',
    linkText: 'visit link',
    technologies: 'React, Stylus',
    role: 'Front End Dev',
    id: 8
  }
]




module.exports = projectData