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
