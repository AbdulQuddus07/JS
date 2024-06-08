// . Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser
document.write("<h3>Qualification</h3>");
let arr = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M-Phil", "PhD"];
for (let index = 1; index < arr.length; index++) {
  document.write("</br>", index, ")  ", arr[index]);
}
