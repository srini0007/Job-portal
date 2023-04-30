
let d1= new Date();
d1.setDate((d1.getDate()+21));
let d2= new Date();
d2.setDate((d2.getDate()+14));
let d3= new Date();
d3.setDate((d3.getDate()+3));
let d4= new Date();
d4.setDate((d4.getDate()-5));
let JobListing = [{
    id:0,
    title:"Job title 1",
    description:"Sample description",
    Location: "Sample Location",
    date:d1,
    phoneNo:1234567890,
    mail:"sample@gmail.com"
},
{
    id:1,
    title:"Job title 2",
    description:"Sample description",
    Location: "Sample Location",
    date:d2,
    phoneNo:1234567890,
    mail:"sample@gmail.com"
},
{
    id:2,
    title:"Job title 3",
    description:"Sample description",
    Location: "Sample Location",
    date:d3,
    phoneNo:1234567890,
    mail:"sample@gmail.com"
},
{
    id:3,
    title:"Job title 4",
    description:"Sample description",
    Location: "Sample Location",
    date:d4,
    phoneNo:1234567890,
    mail:"sample@gmail.com"
}
];

export default JobListing;