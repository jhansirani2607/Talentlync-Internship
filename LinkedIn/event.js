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
    else if (eventName == "") {
        alert("Please enter the event name");
        validation = false;
    }

    if (validation) {

        const eventId=document.getElementById("eventId").value;
        if(!eventId)
        {
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

            localStorage.setItem(
                "eventList",
                JSON.stringify(events)
            );

            alert("Event posted successfully");

            clearEventForm();
            EventData();
        }
        else{
            const updateAllEventList = loadEvents();

            const updateEvent = updateAllEventList.find((row) => {
                return row.id == eventId;
            });

            updateEvent.eventType = eventType.value;
            updateEvent.eventName = eventName;
            updateEvent.startDate = startDate;
            updateEvent.startTime = startTime;
            updateEvent.endDate = endDate;
            updateEvent.endTime = endTime;
            updateEvent.eventLinks = eventLinks;

            localStorage.setItem(
                "eventList",
                JSON.stringify(updateAllEventList)
            );

            localStorage.removeItem("editEventId");

            clearEventForm();
            EventData();

            alert("Event updated successfully");
        }
    } 
}


function clearEventForm()
{
    let eventType = document.querySelector(
        'input[name="eventType"]:checked'
    );

    if (eventType != null) {
        eventType.checked = false;
    }
    document.getElementById("eventId").value = "";
    document.getElementById("eventName").value = "";
    document.getElementById("startDate").value = "";
    document.getElementById("startTime").value = "";
    document.getElementById("endDate").value = "";
    document.getElementById("endTime").value = "";
    document.getElementById("eventLinks").value = "";
}


function loadEvents()
{
    const eventList = localStorage.getItem("eventList")
        ? JSON.parse(localStorage.getItem("eventList"))
        : [];

    return eventList;
}

function editEventById(eventId)
{
    localStorage.setItem("editEventId", eventId);
    window.location.href = "post.html";
}


function loadEditEvent()
{
    let eventId = localStorage.getItem("editEventId");
    
    if (!eventId) {
        return;
    }
    document.getElementById("eventId").value = eventId;
    let events = loadEvents();
    let event = events.find((event) => {
        return event.id == eventId;
    });
    if (!event) {
        alert("Event not found");
        return;
    }

    let eventTypeRadio = document.querySelector(
        `input[name="eventType"][value="${event.eventType}"]`
    );

    if (eventTypeRadio) {
        eventTypeRadio.checked = true;
    }

    document.getElementById("eventName").value = event.eventName;
    document.getElementById("startDate").value = event.startDate;
    document.getElementById("startTime").value = event.startTime;
    document.getElementById("endDate").value = event.endDate;
    document.getElementById("endTime").value = event.endTime;
    document.getElementById("eventLinks").value = event.eventLinks;
}


function EventData()
{
    const events = loadEvents();

    const tableBody = document.getElementById(
        "eventTableBody"
    );

    tableBody.innerHTML = "";

    events.forEach(event => {

        const row = `
        <tr>
            <td>${event.id}</td>
            <td>${event.eventType}</td>
            <td>${event.eventName}</td>
            <td>${event.startDate}</td>
            <td>${event.startTime}</td>
            <td>${event.endDate}</td>
            <td>${event.endTime}</td>
            <td>${event.eventLinks}</td>

            <td>
                <button onclick="editEventById(${event.id})">
                    Edit
                </button>

                <button onclick="deleteEventId(${event.id})">
                    Delete
                </button>
            </td>
        </tr>
        `;

        tableBody.innerHTML += row;
    });
}


if (
    document.getElementById("eventName") &&
    document.querySelector('input[name="eventType"]')
) {
    loadEditEvent();
}


function deleteEventId(eventId) {
  if (confirm("Confirm to Delete the Record ..? ")) {
    const events = loadEvents();
    const updatedevents = events.filter((row) => {
      return row.id != eventId;
    });
    localStorage.setItem("eventList",JSON.stringify(updatedevents));
    EventData();
  } else {
    alert("Request Cancelled");
  }
}