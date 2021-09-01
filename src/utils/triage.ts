import { Phase, Step, Triage } from 'src/types'
import { toSEOUrl } from '@/utils/index'

export const parseTriagesFromCMS = (
  triages: Triage[],
  friendlyTriageTitle: string
) => {
  return triages.flatMap((triage: any) => {
    const phases = triage.phase.flatMap((phase: any) => {
      const steps = phase.Phase.modular_blocks.map((block: any) => {
        const step = block.step
        return {
          uid: step._metadata.uid,
          title: step.step_title,
          short_title: step.step_short_title,
          step_friendly: block.step.url_friendly_step_title,
          description: step.step_description,
          done: false,
          tried: false,
          take_a_deep_breath: step.take_a_deep_breath,
          change_tactics: step.change_tactics,
        }
      })

      const phaseTitle = phase.Phase.phase_title
      return {
        phase: phaseTitle,
        phase_friendly: toSEOUrl(phaseTitle),
        steps,
      }
    })

    return {
      uid: triage.uid,
      title: triage.title,
      triage_friendly: friendlyTriageTitle,
      phases,
      routes_path: [],
    }
  })
}

export const triageUpdateDone = (
  triage: Triage,
  phaseFriendly: string,
  stepFriendly: string,
  done: boolean
) => {
  return {
    phases: triage.phases.map((phase: Phase) => {
      if (phase.phase_friendly === phaseFriendly) {
        return {
          ...phase,
          steps: phase.steps.map((step: Step) => {
            if (step.step_friendly === stepFriendly) {
              return {
                ...step,
                done,
                tried: true,
              }
            }
            return step
          }),
        }
      }
      return phase
    }),
  }
}

export const generateRoutesPath = (
  triage: Triage,
  currentStep: string
): string[] => {
  const paths: string[] = []
  let allowPush = false

  triage.phases.map((phase) => {
    phase.steps.map((step) => {
      if (step.step_friendly === currentStep) {
        allowPush = true
      }
      if (allowPush) {
        paths.push(
          `/have-you-tried/${triage.triage_friendly}/${phase.phase_friendly}/${step.step_friendly}`
        )
      }
    })
  })

  paths.push('/topics/crying')

  return paths
}
