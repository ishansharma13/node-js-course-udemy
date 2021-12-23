Section-3: 1. require() used to import files

Event loop: loop process that keeps on running managed by node as long as work is to be done
Entire node server is single threaded, it is basically like this, whenever a new task is to be done it is added to the queue along with a callback that gets called when that task is done.

Node.js works on each request as a stream in which data is passed as chunks (stream)

Buffer is simply a construct that allows you to work with chunks before saving them

 order of execution of the code is not necessarily in the manner we write it.
 Event-driven: "we create a task along with a callback attached to it"

node js :: behind the scenes ::
    - it is single threaded
    - event loop is started when the node program starts
        - responsible for calling the callbacks when a particular task on the loop is finished
        - long taking operations are sent to a worker pool that can spawn multiple threads and does all the heavy lifting
            - after a task in the worker pool finishes, it notifies the event loop
    
    - first timer callbacks are called
    - pending callbacks (I/O callbacks)
    - after completing all callbacks, it comes into poll phase listening for new callbacks or tasks
    - check for handling setimmediate callbacks
    - close event callbacks
    - may exit when no event handlers process.exit
