const documents=localStorage.getItem("documentList")?JSON.parse(localStorage.getItem("documentList")):[];

function saveDocument(){

    let documentTitle=document.getElementById("documentTitle").value;
    let documentFile=document.getElementById("documentFile").files[0];


    let validation=true;
    if(documentTitle=="")
    {
        alert("Please give me document Title");
        validation=false;
    }
    if(!documentFile)
    {
        alert("Please select a PDF file");
        validation=false;
    }

    if(validation)
    {
        let documentObject={
            id:Date.now(),
            documentTitle:documentTitle,
            documentFile:documentFile.name
        }

        documents.push(documentObject);

        localStorage.setItem("documentList",JSON.stringify(documents));

        alert("Document posted successfully");

        clearDocument();

    }
}

function clearDocument(){
    document.getElementById("documentTitle").value="";
    document.getElementById("documentFile").value="";
}

function loadDocument(){
    let documenList=localStorage.getItem("documentList")?JSON.parse(localStorage.getItem("documentList")):[];
    return documenList;
}

function displayDocumentData() {

    let documents = loadDocument();
    let container = document.getElementById("documentContainer");

    container.innerHTML = "";

    if (documents.length == 0) {
        container.innerHTML ="<p>No documents shared yet.</p>";
        return;
    }

    documents.forEach(documentItem => {

        let card = `
               <div class="document-card">
                <h3>
                    Title:
                    ${documentItem.documentTitle}
                </h3>
                <p>
                    File Name:
                    ${documentItem.documentFile}
                </p>
                <p>
                    Document ID:
                    ${documentItem.id}
                </p>
            </div>
        `;
        container.innerHTML += card;
    });
}