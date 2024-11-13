const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/Fahad-nissam',
  title: 'FAFA.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Fahad Nissam',
  role: 'Front End Developer',
  description:
    ' 👋Im Fahad Nissam, a front-end developer dedicated to creating intuitive and visually appealing websites. My focus is on crafting responsive, accessible, and user-centered designs that leave a lasting impact. I blend creativity with technical precision to deliver seamless digital experiences.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/fahad-nissam-5a72b2238/',
    github: 'https://github.com/Fahad-nissam',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Madlibs',
    description:
      ' you will learn how to get input from the user, work with f-strings, and see your results printed to the console',
    stack: ['python'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Forged pc',
    description:
      'A full fledged e-commerce website which is mainly focused on selling computer hardware developed under the CRUD operations',
    stack: ['Sql', 'javascript', 'React'],
   
  },
 
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'fahadnizam.007@gmail.com',
}

export { header, about, projects, skills, contact }
