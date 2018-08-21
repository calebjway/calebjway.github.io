function displayPDF(pdfName){
  document.getElementById("pdfSelector").style.visibility ="hidden";
  document.getElementById("pdfContainer").style.visibility ="visible";
  //document.getElementById("pdfContainer").style ="background-color: #3d3d3d;";
  document.getElementById("pdfContainer").innerHTML="<object data=\""+pdfName+"\" type=\"application/pdf\" width=\"100%\" height=\"95%\">\
    <embed src=\""+pdfName+"\" width=\"100%\" height=\"95%\" />\
      <p>This browser does not support PDFs. Please download the PDF to view it:\
      <a href=\""+pdfName+"\">Download PDF</a>.</p>\
    </embed>\
  </object>\
  <p style=\"color:white\">Click <a href=\"..\\Pages\\PdfViewer.html\">here</a> to return to the pdf selection or <a href=\"../index.html\">here</a> to return to index</p>\
  ";
}
