class File {
    constructor(fullName, contents){
        this._fullName = fullName;
        const fullNameFile = fullName.split('.');
        this._extension = fullNameFile.pop();
        this._filename = fullNameFile.join('.');
        this.contents = contents;
        this.i = 0;
        this.j = 0;
    }
    get fullName(){
        return this._fullName;
    }
    get filename(){
        return this._filename;
    }
    get extension(){
        return this._extension;
    }
    getContents(){
        const reg = /\n+/g;
        const symbol = String.fromCharCode(92, 110);
        const contentString = this.contents.replace(reg, symbol);
        return contentString;
    }
    write(str){
        if (this.contents !== ""){
            this.contents = this.contents + '\n' + str;
            return this.contents;
        } else {
            this.contents = this.contents+ str;
            return this.contents;
        }
    }
    gets(){
        const string = this.contents.split('\n');
        return string[this.i++];
    }
    getc(){
        const spell = this.contents.split('');
        return spell[this.j++];
    }
}

  var example = new File("example.txt", "An example file");
  example.fullName = "modified.txt";
  example.write("Hello World");
  example.write("This is an example file provided to you by the Kata author");
  console.log(example.getContents());
  console.log(example.gets());
  console.log(example.getc());
