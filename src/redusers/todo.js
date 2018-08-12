export default function todo(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          complete: action.complete
        }
      ];
    case "REM_TODO":
      return state.filter(td => td.id !== action.id);
    case "DONE_TODO":
      return state.map(
        td => (td.id === action.id ? { ...td, complete: !td.complete } : td)
      );
    default:
      return state;
  }
}
