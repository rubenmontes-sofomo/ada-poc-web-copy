export type Phase = {
  phase: string
  phase_friendly: string
  steps: Step[]
}

export type Step = {
  uid: string
  title: string
  short_title: string
  step_friendly: string
  description: string
  done: boolean
  tried: boolean
  take_a_deep_breath: boolean
  change_tactics: boolean
}

export type Triage = {
  uid: string
  title: string
  triage_friendly: string
  phases: Phase[]
  routes_path: string[]
}

export type HeroCMS = {
  created_at: string
  created_by: string
  cta_button: string
  image: { title: string; href: string; uuid: number }
  locale: string
  publish_details: {
    environment: string
    locale: string
    time: string
    user: string
  }
  tags: string[]
  title: string
  uid: string
  updated_at: string
  updated_by: string
  utm_source: string
  value_proposition: string
  _in_progress: boolean
}

export type CSLandingPage = {
  _version: number
  locale: 'en-us'
  uid: string
  ACL: object
  _in_progress: boolean
  ada_preview: Preview[]
  ada_preview_headline: string
  advisors_preview_headline: string
  advisors: Advisor[]
  created_at: string
  created_by: string
  headline: string
  hero_cta_1: CTA
  hero_cta_2: CTA
  hero_image: any // TODO: To be checked
  intro: string
  tags: string[]
  title: string
  title_: string
  topics: Topic[]
  topics_preview_description: string
  topics_preview_headline: string
  updated_at: string
  updated_by: string
  url: string
  value_prop_headline: string
  value_props: ValueProp[]
  value_props_cta: CTA
  publish_details: {
    environment: string
    locale: string
    time: string
    user: string
  }
}

export type CTA = {
  title: string
  href: string
}

export type ValueProp = {
  value: {
    headline: string
    description: string
    image_url: string
    _metadata: {
      uid: string
    }
  }
}

export type ValueProps = {
  headline: string
  _metadata: {
    uid: string
  }
  image: any // TODO: To be hecked
  title: string
  description: string
  image_2: any // TODO: To be hecked
  title_2: string
  description_2: string
  cta: string
}

export type IntroducingAda = {
  headline_introduction: string
  _metadata: {
    uid: string
  }
  image: any // TODO: To be hecked
  description: string
}

export type Preview = {
  preview: {
    image_url: string
    description: string
    _metadata: {
      uid: string
    }
  }
}
export interface PreviewOnSlider extends Preview {
  width: number | null
  index: number
}

export type Advisor = {
  advisor: {
    image_url: string
    name: string
    description: string
    reference: [
      {
        uid: string
        _content_type_uid: string
      }
    ]
    _metadata: {
      uid: string
    }
  }
}

export interface AdvisorOnChart extends Advisor {
  position?: { top: number; left: number }
  imageUrl?: string
}

export type Topic = {
  topic: {
    image_url: string
    name: string
    description: string
    reference: [
      {
        uid: string
        _content_type_uid: string
      }
    ]
    _metadata: {
      uid: string
    }
  }
}

export type TopicsPreview = {
  headline: string
  _metadata: {
    uid: string
  }
  description: string
  topics: Topic[]
  cta: string
}

export type Feature = {
  headline: string
  _metadata: {
    uid: string
  }
  description: string
  cta: string
}

export type MissionStatement = {
  image: any // TODO: To be hecked
  _metadata: {
    uid: string
  }
  headline: string
  description: string
}
export type AdvisorPreview = {
  headline: string
  _metadata: {
    uid: string
  }
  advisor_image_rotation: any // TODO: To be hecked
  advisor_name: string
  advisor_description: string
  link: {
    title: string
    href: string
    uuid: number
  }
}
export type Feature2 = {
  headline: string
  _metadata: {
    uid: string
  }
  description: string
  cta: string
}

export type WillowFooter = {
  logo: any // TODO: To be hecked
  _metadata: {
    uid: string
  }
  footer_details: string
}
