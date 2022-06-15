function undoRedo(object) {
  let implement = [];
  let i = 0;

  function Handler(type, key, oldValue, newValue) {
    this.type = type;
    this.key = key;
    this.oldValue = oldValue;
    this.newValue = newValue;
  }

  return {
    set: function(key, value) {
      if (object.hasOwnProperty(key))
      implement.push(new Handler('set', key, object[key], value));
      else
      implement.push(new Handler('new', key, null, value));
      object[key] = value;
      i++;
      implement.length = i;
      console.log ('set=  '+i+'   key=  '+key + '    value=  '+value);
    },
    get: function(key) {
      return object[key];
    },
    del: function(key) {
        implement.push(new Handler('del', key, object[key], null));
      delete object[key];
      i++;
      implement.length = i;
    },
    undo: function() {
      if (i <= 0) throw new Error('Error: There is nothing to undo');
      i--;

      let h = implement[i];
      console.log ('undo=  '+i+'     h.type=   '+h.type+'     h=   '+h);
      if (h.type == 'set') object[h.key] = h.oldValue;
      else if (h.type == 'new') delete object[h.key];
      else if (h.type == 'del') object[h.key] = h.oldValue;
    },
    redo: function() {
      if (i >= implement.length) throw new Error('Error: There is nothing to redo');
      let h = implement[i];
      if (h.type == 'set') object[h.key] = h.newValue;
      else if (h.type == 'new') object[h.key] = h.newValue;
      else if (h.type == 'del') delete object[h.key];

      i++;
    }
  };
}

let obj = {
    x: 5,
    y: 6
  };

  let unRe = undoRedo(obj);

  unRe.set('x',5);
  unRe.set('y',6);
  unRe.undo();
  console.log ('GET = '+unRe.get('x'))
  console.log ('GET = '+unRe.get('y'))
  unRe.set('y',66);
  console.log ('GET = '+unRe.get('x'))
  console.log ('GET = '+unRe.get('y'))
  unRe.undo();
  unRe.undo();
  console.log ('GET = '+unRe.get('x'))
  console.log ('GET = '+unRe.get('y'))