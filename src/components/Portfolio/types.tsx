export interface SkillType {
  list: string
  title: string
}

export interface ProjectType {
  title: string
  link?: string
  skills: string
  slug: string
  task: string
  description: string
  highlights: string[]
  shortDescription: string
}

export interface EducationType {
  institution: string
  location: string
  degree: string
  duration: {
    start: {
      year: string
      month: string
    }
    end: {
      year: string
      month: string
    }
  }
}

export interface AchievementType {
  title: string
  organizations: {
    year: number
    name: string
  }[]
}

export interface CertificationtType {
  title: string
  organization: string
  year: number
  link: string
}

export interface ExperienceType {
  company: string
  role: string
  location: string
  link: string
  logos: {
    logo: any
    link: string
  }[]
  duration: {
    start: {
      year: string
      month: string
    }
    end: {
      year: string
      month: string
    } | null
  }
  skills: string
  description: string[]
}
