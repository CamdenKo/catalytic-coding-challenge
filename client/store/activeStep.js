const UPDATE_ACTIVE_STEP = 'UPDATE_ACTIVE_STEP'

export const updateActiveStep = step => ({ type: UPDATE_ACTIVE_STEP, step })

export default (state = 0, action) => {
  switch (action.type) {
    case UPDATE_ACTIVE_STEP:
      return action.step
    default:
      return state
  }
}
