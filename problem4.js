/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here
if(fileName.endsWith('.pdf')){
    console.log("Store");
} else if(fileName.endsWith('.docx')){
    console.log("Store");
} else if(fileName.startsWith("#")){
    console.log("Store");
} else{
    console.log("Delete");
}