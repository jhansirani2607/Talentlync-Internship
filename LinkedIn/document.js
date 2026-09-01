// =========================
// DOCUMENT LIST
// =========================

const documents = localStorage.getItem("documentList")
    ? JSON.parse(localStorage.getItem("documentList"))
    : [];


// =========================
// SAVE DOCUMENT
// =========================

function saveDocument() {

    let documentTitle = document.getElementById("documentTitle").value;
    let documentFile = document.getElementById("documentFile").files[0];

    // Title validation
    if (documentTitle == "") {
        alert("Please give me document Title");
        return;
    }

    // File validation
    if (!documentFile) {
        alert("Please select a PDF file");
        return;
    }

    // PDF validation
    if (documentFile.type != "application/pdf") {
        alert("Please select PDF file only");
        return;
    }


    // Read PDF
    let reader = new FileReader();

    reader.onload = function () {

        let documentObject = {

            id: Date.now(),

            documentTitle: documentTitle,

            documentFile: documentFile.name,

            // Actual PDF data
            fileData: reader.result
        };


        // Add document
        documents.push(documentObject);


        // Save document in localStorage
        localStorage.setItem(
            "documentList",
            JSON.stringify(documents)
        );


        alert("Document posted successfully");


        // Clear form
        clearDocument();
    };


    // Convert PDF to Base64
    reader.readAsDataURL(documentFile);
}


// =========================
// CLEAR DOCUMENT
// =========================

function clearDocument() {

    document.getElementById("documentTitle").value = "";

    document.getElementById("documentFile").value = "";
}


// =========================
// LOAD DOCUMENT
// =========================

function loadDocument() {

    let documentList = localStorage.getItem("documentList")
        ? JSON.parse(localStorage.getItem("documentList"))
        : [];

    return documentList;
}


// =========================
// DISPLAY DOCUMENT
// =========================

function displayDocumentData() {

    let documents = loadDocument();

    let container = document.getElementById("documentContainer");

    container.innerHTML = "";


    // No documents
    if (documents.length == 0) {

        container.innerHTML =
            "<p>No documents shared yet.</p>";

        return;
    }


    // Display documents
    documents.forEach(function (documentItem) {

        let card = `
        
            <div class="document-card">

                <h3>
                    Title: ${documentItem.documentTitle}
                </h3>

                <p>
                    File Name:

                    <a 
                        href="${documentItem.fileData}"
                        target="_blank"
                    >
                        ${documentItem.documentFile}
                    </a>

                </p>

            </div>
        
        `;

        container.innerHTML += card;
    });
}