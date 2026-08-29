let events = localStorage.getItem("eventList")
    ? JSON.parse(localStorage.getItem("eventList"))
    : [];

function saveEvent() 
{

    let eventType = document.querySelector(
        'input[name="eventType"]:checked'
    );

    let eventName = document.getElementById("eventName").value;
    let startDate = document.getElementById("startDate").value;
    let startTime = document.getElementById("startTime").value;
    let endDate = document.getElementById("endDate").value;
    let endTime = document.getElementById("endTime").value;
    let eventLinks = document.getElementById("eventLinks").value;

    let validation = true;

    if (eventType == null) {
        alert("Please select the event type");
        validation = false;
    }
    else if(eventName == "") {
        alert("Please enter the event name");
        validation = false;
    }

    if (validation) {

        const eventObject = {
            id: Date.now(),
            eventType: eventType.value,
            eventName: eventName,
            startDate: startDate,
            startTime: startTime,
            endDate: endDate,
            endTime: endTime,
            eventLinks: eventLinks
        };

        events.push(eventObject);
        localStorage.setItem("eventList",JSON.stringify(events));

        alert("Event posted successfully");

        clearEventForm();
    }

}
function clearEventForm(){
     let eventType = document.querySelector(
        'input[name="eventType"]:checked'
    );

    if (eventType != null) {
        eventType.checked = false;
    }
    document.getElementById("eventName").value="";
    document.getElementById("startDate").value="";
    document.getElementById("startTime").value="";
    document.getElementById("endDate").value="";
    document.getElementById("endTime").value="";
    document.getElementById("eventLinks").value="";
}

function loadEvents(){
    const eventList=localStorage.getItem("eventList") ? JSON.parse(localStorage.getItem("eventList")) : [];
    return eventList;
}

function EventData()
{
    const events=loadEvents();
    const tableBody=document.getElementById("eventTableBody");

    tableBody.innerHTML="";

    events.forEach(event => {
        const row=`
        <tr>
            <td>${event.id}</td>
            <td>${event.eventType}</td>
            <td>${event.eventName}</td>
            <td>${event.startDate}</td>
            <td>${event.startTime}</td>
            <td>${event.endDate}</td>
            <td>${event.endTime}</td>
            <td>${event.eventLinks}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}