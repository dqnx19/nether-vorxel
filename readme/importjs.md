For a single file:

```javascript
importJS({
    src: "", // script URL
    defer: "", // true or false, false by default
    type: "", // script type, text/javascript by default
    async: "", // true or false, false by default
    placement: "" // head or body, body by default
})
```

For multiple files:

```javascript
importJS([
    {
        src: "", // script URL
        defer: "",
        type: "",
        async: "",
        placement: ""
    },
    {
        src: "", // script URL
        defer: "",
        type: "",
        async: "",
        placement: ""
    }
])
```