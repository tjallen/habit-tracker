import { connect } from 'react-redux';
import {
  addTask,
  removeTask,
  renameTask,
  updateTaskCount,
} from './../actions';
import App from './../components/App';

const mapStateToProps = state => ({
  tasks: state.tasks,
  date: state.date,
});

const AppContainer = connect(
  mapStateToProps,
  {
    onAddTaskSubmit: addTask,
    onRemoveClick: removeTask,
    onNameChange: renameTask,
    onCountChange: updateTaskCount,
  }
)(App);
export default AppContainer;