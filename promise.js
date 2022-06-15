async function promiseHelloWorld() {
  const promise = await new Promise ((resolve, reject)=>setTimeout(resolve, 1))
 .then(()=>{return 'Hello World!'})
 .catch(()=>{return ''});
 return !promise ? '' : 'Hello World!';
}
  const test = promiseHelloWorld().then((response) =>{return response});
  console.log(test);