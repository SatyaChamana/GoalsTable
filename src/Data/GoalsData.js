const Data = { data : [{
                        thingsToDo:"Invest in Airtel",
                        owner:true,
                        status : "Pending",
                        dueDate : new Date(),
                        priority : "Urgent"
                    },{
                        thingsToDo:"Write",
                        owner:true,
                        status : "Done",
                        dueDate : new Date(),
                        priority : "Low"
                    },{
                        thingsToDo:"Read Novel",
                        owner:true,
                        status : "Stuck",
                        dueDate : new Date(),
                        priority : "Medium"
                    },{
                        thingsToDo:"Complete Assignment",
                        owner:false,
                        status : "Pending",
                        dueDate : new Date(),
                        priority : "High"
                    },{
                        thingsToDo:"Watch Movie",
                        owner:true,
                        status : "Pending",
                        dueDate : new Date(),
                        priority : "Low"
                    },
]
}


const config = [{
    col : "goal",
    id : 1,
    display : true,
    tag : 'input'
},{
    col : "status",
    id : 2,
    display : false,
    tag : 'div'
},{
    col : "owner",
    id : 3,
    display : true,
    tag : 'img'
},{
    col : "dueDate",
    id : 4,
    display : true,
    tag : 'date'
},{
    col : "priority",
    id : 5,
    display : true,
    tag : 'div'
},{
    col : "number",
    id : 6,
    display : true,
    tag : 'input'
},{
    col : "tags",
    id : 7,
    display : false,
    tag : 'input'
},
]
export default config;