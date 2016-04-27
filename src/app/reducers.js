import { Map, List } from 'immutable'
import io from 'socket.io-client'

import { Actions } from './actions'
const {
  SET_PLAYLIST,
  ADD_VIDEO,
  DELETE_VIDEO,
  PLAY,
  PLAY_NEXT,
  PLAY_PREVIOUS,
  PAUSE,
  RESUME,
} = Actions

export function socket(state = null, action) {
  switch (action.type) {
    case 'SET_SOCKET':
      return action.socket
    default:
      return state
  }
}

export function isSearching(state = false, action) {
  switch (action.type) {
    case 'SEARCH':
      return true
    case 'SET_SEARCH_RESULT':
      return false
    case 'SET_SEARCH_ERROR':
      return false
    default:
      return state
  }
}

export function searchResult(state = [], action) {
  switch (action.type) {
    case 'SET_SEARCH_RESULT':
      return action.data
    default:
      return state
  }
}

export function searchError(state = null, action) {
  switch (action.type) {
    case 'SET_SEARCH_ERROR':
      return action.error
    default:
      return state
  }
}

export function isSendingMap(state = Map(), action) {
  const { type } = action
  let status = true
  let act = ''
  if (type.startsWith('SEND_')) {
    act = type.substring(5)
  } else {
    status = false
    act = type
  }
  return state.set(act, status)
}

export function playlist(state = List(), action) {
  switch (action.type) {
    case SET_PLAYLIST:
      return List(action.data)
    case ADD_VIDEO:
      return state.push(action.data)
    case DELETE_VIDEO:
      return state.delete(action.index)
    default:
      return state
  }
}

export function currentPlayingVideoId(state = '', action) {
  switch (action.type) {
    case PLAY:
      return action.videoId
    case PLAY_NEXT:
      return action.nextVideoId
    case PLAY_PREVIOUS:
      return action.previousVideoId
    default:
      return state
  }
}

export function isPlaying(state = false, action) {
  switch (action.type) {
    case PLAY:
      if (action.videoId) return true
      return false
    case PAUSE:
      return false
    case RESUME:
      return true
    default:
      return state
  }
}

export function showSearch(state = false, action) {
  switch (action.type) {
    case 'TOGGLE_SEARCH':
      return !state
    default:
      return state
  }
}
