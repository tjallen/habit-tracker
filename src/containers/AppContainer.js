import { connect } from 'react-redux';
import { addTask } from './../actions';
import App from './../components/App';

const mapStateToProps = state => ({
  tasks: state.tasks,
});

const AppContainer = connect (
  mapStateToProps,
  {
    onAddTaskSubmit: addTask,
  }
)(App);
export default AppContainer;