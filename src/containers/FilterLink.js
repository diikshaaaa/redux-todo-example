import { connect } from 'react-redux'
import { setVisibilityFilter } from '../redux/actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
// mapStateToProps has 2 parameters. The first is the state and the second is an optional ownProps parameter. It returns a plain object containing the data that the connected component needs
// mapStateToProps method is used to combine the explicitly passed properties 
// ownprops are basically those props which we have already passed to the component means the props of the component itself
  Active: ownProps.filter === state.visibilityFilter
  // the component is active if the filter attribute matches the visibiltyFilter in state, i.e. if it is currently filtered by this value.
})

const mapDispatchToProps = (dispatch, ownProps) => ({
// As function name says mapDispatchToProps(), map dispatch or send action to props
// mapDispatchToProps function is declared as taking two parameters, it will be called with dispatch as the first parameter and the props passed to the connected component as the second parameter, and will be re-invoked whenever the connected component receives new props.
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
// connect() function connects a React component to a Redux store

export default FilterLink
