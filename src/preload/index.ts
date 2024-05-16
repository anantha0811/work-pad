import { contextBridge } from 'electron'

// Custom APIs for renderer
if (process.contextIsolated) {
  throw new Error('Context isolation must be enabled in the window')
}

try {
  contextBridge.exposeInMainWorld('context', {
    //todo
  })
} catch (error) {
  console.error(error)
}
