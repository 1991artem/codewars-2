function undoRedo(object) {
    let history = [], implement = [];
    return {
      set: (key, value) => {
        history.push([key, object[key]])
        implement = []
        object[key] = value
      },
      get: (key) => object[key],
      del: (key) => {
        history.push([key, object[key]])
        implement = []
        delete object[key]
      },
      undo: () => {
        if (!history.length) throw new Error('Error: There is nothing to undo');
        let [key, value] = history.pop()
        implement.push([key, object[key]])
        if (value) object[key] = value
        else delete object[key]
      },
      redo: () => {
        if (!implement.length) throw new Error('Error: There is nothing to redo');
        let [key, value] = implement.pop()
        history.push([key, object[key]])
        if (value) object[key] = value
        else delete object[key]
      }
    }
  }