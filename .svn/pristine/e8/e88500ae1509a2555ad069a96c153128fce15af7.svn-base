const LS = window.sessionStorage
export const LStorage = {
  getItem (key) {
    try {
      return LS.getItem(key)
    } catch (err) {
      return null
    }
  },
  setItem: (key, val) => {
    LS.setItem(key, val)
  },
  clear () {
    LS.clear()
  },
  removeItem (key) {
    LS.removeItem(key)
  }
}
