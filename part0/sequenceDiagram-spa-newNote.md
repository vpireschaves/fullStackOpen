```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: HTTP code 201
    deactivate server
    Note left of server: The server saves the information on database
    Note right of browser: The browser inserts the submitted information on HTML
```