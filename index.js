var inputTag = document.getElementById("inputTag"),
    preview = document.getElementById("preview");

inputTag.addEventListener("change", function () {
    changeImage(this);
});

function changeImage(input) {
    var reader;

    if (input.files && input.files[0]) {
        reader = new FileReader();

        reader.onload = function (e) {
            preview.setAttribute('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}


function cal() {

    // supplie info
    let sname = document.getElementById("old_sname").value;
    document.getElementById("new_sname").innerHTML = sname;
    let sadd = document.getElementById("old_sadd").value;
    document.getElementById("new_sadd").innerHTML = sadd;
    document.getElementById("fenilsonani").innerHTML = ("@all right reserved at a" + sname);
    let sno = document.getElementById("old_sno").value;
    document.getElementById("s_mobile_no").innerHTML = sno;

    // customer info
    let cname = document.getElementById("old_cname").value;
    document.getElementById("new_cname").innerHTML = cname;
    let cadd = document.getElementById("old_cadd").value;
    document.getElementById("new_cadd").innerHTML = cadd;
    let cno = document.getElementById("cno").value;
    document.getElementById("new_cno").innerHTML = cno;


    // for product 1
    // product title
    let product1 = document.getElementById("old_p1").value;
    document.getElementById("new_p1").innerHTML = product1;
    // gst per
    let gstper1 = Number(document.getElementById("per_1").value);
    document.getElementById("nh1").innerHTML = gstper1;
    let amt1 = Number(document.getElementById("amt_p1").value);
    let famt1 = 0;
    famt1 = (amt1 * (100 / (100 + gstper1)));
    let gstamt1 = (amt1 - famt1);
    document.getElementById("qwer1").innerHTML = gstamt1.toFixed(2);
    document.getElementById("qwert1").innerHTML = famt1.toFixed(2);

    // for product 2
    let product2 = document.getElementById("old_p2").value;
    document.getElementById("new_p2").innerHTML = product2;
    // gst per
    let gstper2 = Number(document.getElementById("per_2").value);
    document.getElementById("nh2").innerHTML = gstper1;
    let amt2 = Number(document.getElementById("amt_p2").value);
    let famt2 = 0;
    famt2 = (amt2 * (100 / (100 + gstper2)));
    let gstamt2 = (amt2 - famt2);
    document.getElementById("qwer2").innerHTML = gstamt2.toFixed(2);
    document.getElementById("qwert2").innerHTML = famt2.toFixed(2);

    // total amount
    total_amt = (famt1 + famt2);
    total_gst = (gstamt1 + gstamt2);
    document.getElementById("new_amt_total").innerHTML = total_amt.toFixed(2);
    document.getElementById("new_gst_total").innerHTML = total_gst.toFixed(2);

    // discount amount
    let dis = document.getElementById("dis").value;
    dis_amt = (((total_amt + total_gst) * dis) / 100);
    document.getElementById("new_dis_amt").innerHTML = dis_amt.toFixed(2);

    // final amount
    let netamount = ((total_amt + total_gst) - dis_amt);
    document.getElementById("new_fenil_total").innerHTML = netamount.toFixed(2);

}

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];


function visible() {
    // alert("this is a working");
    document.getElementById("visivlity_of_instruction").style.display = "inherit";
    document.getElementById("visivlity_of_instruction").style.transition = "all 2s";
}

function hideitem() {
    document.getElementById("visivlity_of_instruction").style.display = "none";

}

var dateObj = new Date();
var month = dateObj.getUTCMonth(); //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
document.getElementById("creation_date").innerHTML = day + " " + monthNames[month] + "," + year;
