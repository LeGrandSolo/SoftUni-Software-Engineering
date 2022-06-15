function extractFile(path) {
    let file = path.split('\\').pop();
    let name = file.substring(0, file.lastIndexOf('.'));
    let extention = file.substring(file.lastIndexOf('.') + 1);
    
    console.log(`File name: ${name}\nFile extension: ${extention}`);
}
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')