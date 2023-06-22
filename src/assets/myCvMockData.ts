interface IContact {
  contactType: string
  contactValue: string
}

interface ISkill {
  skillName: string
  icon: string
}

interface IExperience {
  company: string
  details: string
}

interface ILanguage {
  language: string
  level: string
}

export interface ICvData {
  title: string
  extended?: string
  contacts?: IContact[]
  skills?: ISkill[]
  experience?: IExperience[]
  languages?: ILanguage[]
}

export const cvMockData: ICvData[] = [
  {
    title: 'Serhii Horeslavskyi',
    extended: 'Intern/Junior Angular Developer'
  },
  {
    title: 'Contact information',
    contacts: [
      {
        contactType: 'Phone',
        contactValue: '+380-95-000-00-00'
      },
      {
        contactType: 'Email',
        contactValue: 'mail@gmail.com'
      },
      {
        contactType: 'City',
        contactValue: 'Kyiv'
      },
    ]
  },
  {
    title: 'Skills',
    skills: [
      {
        skillName: 'HTML',
        icon: '../../../assets/icons/html.svg'
      },
      {
        skillName: 'CSS',
        icon: '../../../assets/icons/css.svg'
      },
      {
        skillName: 'SCSS/SASS',
        icon: '../../../assets/icons/sass.svg'
      },
      {
        skillName: 'TailwindCSS',
        icon: '../../../assets/icons/tailwindcss.svg'
      },
      {
        skillName: 'JavaScript',
        icon: '../../../assets/icons/javascript.svg'
      },
      {
        skillName: 'TypeScript',
        icon: '../../../assets/icons/typescript.svg'
      },
      {
        skillName: 'Angular',
        icon: '../../../assets/icons/angular.svg'
      },
      {
        skillName: 'RxJS',
        icon: '../../../assets/icons/rxjs.svg'
      },
      {
        skillName: 'Angular Material',
        icon: '../../../assets/icons/angular.svg'
      },
      {
        skillName: 'NGRX',
        icon: '../../../assets/icons/ngrx.svg'
      },
      {
        skillName: 'Git',
        icon: '../../../assets/icons/git.svg'
      },
      {
        skillName: 'Github',
        icon: '../../../assets/icons/github.svg'
      }
    ]
  },
  {
    title: 'Experience',
    experience: [
      {
        company: 'Exadel internship (2 months)',
        details: 'Angular, RxJS, Angular Material, SCSS, NGRX'
      }, 
      {
        company: 'Infopulse internship (8 months)',
        details: 'Angular, RxJS, Tailwind CSS'
      }
    ]
  },
  {
    title: 'Languages',
    languages: [
      {
        language: 'English',
        level: 'B1 (Intermediate)'
      },
      {
        language: 'Ukrainian',
        level: 'С1 (Advanced)'
      }
    ]
  },
  {
    title: 'Education',
    extended: 'Donetsk National University of Economics and Trade named after M. Tugan-Baranovsky Institute of Food Production, engineer, 2013'
  },
  {
    title: 'Additional education(courses, trainings)',
    extended: 'https://www.udemy.com/'
  },
  {
    title: 'Hobbies',
    extended: 'Programming, sport, watching movies'
  }
]