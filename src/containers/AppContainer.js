import { connect } from 'react-redux';
import {
  addTask,
  updateTaskCount,
  removeTask,
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
    onCountChange: updateTaskCount,
    onRemoveClick: removeTask,
  }
)(App);
export default AppContainer;