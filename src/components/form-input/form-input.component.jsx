import { FormInputLabel, GroupDiv, Input } from "./form-input.styles"

const FormInput = ({ label, ...otherProps }) => {
  return (
    <GroupDiv>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </GroupDiv>
  )
}

export default FormInput
