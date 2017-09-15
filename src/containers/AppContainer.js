import { connect } from 'react-redux';
import { addTask, updateTaskCount } from './../actions';
import App from './../components/App';

const mapStateToProps = state => ({
  tasks: state.tasks,
});

const AppContainer = connect(
  mapStateToProps,
  {
    onAddTaskSubmit: addTask,
    onTaskCountUpdate: updateTaskCount,
  }
)(App);
export default AppContainer;