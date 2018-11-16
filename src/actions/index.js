export function add(id, text) {
  return {
    type: 'ADD_TODO',
    id,
    text,
    complete: false
  }
}

export function remove(id) {
  return {
    type: 'REM_TODO',
    id,
  }
}

export function done(id) {
  return {
    type: "DONE_TODO",
    id
  }
}