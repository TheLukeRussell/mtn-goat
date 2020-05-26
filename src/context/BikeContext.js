import createDataContext from './createDataContext';

const bikeReducer = (state, action) => {
  switch (action.type) {
    case 'add_bike':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case 'delete_bike':
      return state.filter((bikePost) => bikePost.id !== action.payload);
    default:
      return state;
  }
};

const addBike = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: 'add_bike', payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};

const deleteBike = (dispatch) => {
  return (id) => {
    dispatch({ type: 'delete_bike', payload: id });
  };
};

export const { Context, Provider } = createDataContext(bikeReducer, { addBike, deleteBike }, [
  { title: 'Bike Name', content: 'Desciption of the Bike', id: 1 },
]);
