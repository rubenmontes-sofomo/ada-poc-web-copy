import React, { Dispatch, SetStateAction, useState } from 'react'
import styles from './toggle-field.module.scss'

type ToggleFieldProps = {
  selectedValue: string
  items: any[]
  setValue: Dispatch<SetStateAction<string>>
}

export const ToggleField = ({
  selectedValue,
  items,
  setValue,
}: ToggleFieldProps): JSX.Element => {
  const [showOptions, setShowOptions] = useState(false)
  const toggleOptions = () => {
    setShowOptions(!showOptions)
  }
  const updateSelection = (selection: string) => {
    setValue(selection)
    setShowOptions(false)
  }
  return (
    <div className={styles.toggleField}>
      <span onClick={toggleOptions}>{selectedValue}</span>
      {items && (
        <ul className={showOptions ? styles.show : ''}>
          {items.map((item: any) => (
            <li
              key={item.uid}
              className={selectedValue === item.title ? styles.selected : ''}
              onClick={() => updateSelection(item.title)}
            >
              {item.title?.toLowerCase()}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
