// FETCH1
async function find() {
    let response = await fetch("https://api-mobilespecs.azharimm.site/v2/brands")
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            console.log(result);


            document.getElementById("vino").value = result.data[0].brand_id;
            document.getElementById("bname").value = result.data[0].brand_name;
            document.getElementById("bslug").value = result.data[0].brand_slug;
            document.getElementById("bcount").value = result.data[98].device_count;
            document.getElementById("bname2").value = result.data[35].brand_name;


         })
        .catch((e) => {
            console.log(e);
        })

}
find()


// FETCH2
async function find1() {
    let response = await fetch("https://www.boredapi.com/api/activity")
        .then((response) => {
            return response.json()
        })
        .then((result1) => {
            console.log(result1);


            document.getElementById("vino1").value = result1.accessibility;
            document.getElementById("bname1").value = result1.activity;
            document.getElementById("bslug1").value = result1.key;
            document.getElementById("bcount1").value = result1.participants;
            document.getElementById("bname21").value = result1.price;


         })
        .catch((e) => {
            console.log(e);
        })

}
find1()

// FETCH3

async function find2() {
    let response = await fetch("https://reqres.in/api/products/3")
        .then((response) => {
            return response.json()
        })
        .then((result2) => {
            console.log(result2);


            document.getElementById("vino2").value = result2.data.id;
            document.getElementById("bname2").value = result2.data.name;
            document.getElementById("bslug2").value = result2.data.year;
            document.getElementById("bcount2").value = result2.data.color;
            document.getElementById("bname212").value = result2.data.pantone_value;


         })
        .catch((e) => {
            console.log(e);
        })

}
find2()

function myFunction() 
{
    alert("Successfully Submitted!!!");
  }