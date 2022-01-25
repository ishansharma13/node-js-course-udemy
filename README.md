Node JS The Complete Guide
    #Section-5:
        express is all about middleware that means, a request may use a funnel of middleware functions before returning a response


    next in app.use() calls the next middleware from top to bottom, this means when using next the order of middlewares is important
    ```
    app.use((req,res,next)=>{
    console.log("Request received, in the first middleware");
    next();
    })
    app.use((req,res,next)=>{
    console.log("In the second middleware, sending back response");
    res.send("<h1>Hello from Express!!</h1>")
    })
    ```

    In the above code, next called in the first middleware will call the next middleware inline

    It is very important that we take care of the order of app.use() middlewares depending on their path, for example to make sure that some code always runs when a request is received, such middleware will always be at the top


    when using .get, the path becomes rigid, that means a request will only be returned back or approved if the path matches exactly otherwise not