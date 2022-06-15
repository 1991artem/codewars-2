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

var myFile = new File("alpha.beta.gamma.delta.txt", "");

console.log(myFile.getContents()); // ""
myFile.write("Line 1");
console.log(myFile.getContents()); // "Line 1"
myFile.write("Line 2");
console.log(myFile.getContents()); // "Line 1\nLine 2"
myFile.write("Line 3");
console.log(myFile.getContents()); // "Line 1\nLine 2\nLine 3"
console.log(myFile.gets()); // "Line 1"
console.log(myFile.gets()); // "Line 2"
console.log(myFile.gets()); // "Line 3"
console.log(myFile.gets()); // "Line 4"
console.log(myFile.gets()); // "Line 5"
console.log(myFile.gets()); // undefined
console.log(myFile.gets()); // undefined
console.log(myFile.gets()); // undefined

