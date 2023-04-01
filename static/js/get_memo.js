function get_memo(){
    console.time('new_scramble');
    var scramble = document.getElementById("scramble_text").value;
    console.log(`scramble is ${scramble}`);
    document.getElementById("scramble").innerHTML = scramble;

    $.ajax({
        type: "POST",
        url: "/get_memo",
        data: {scramble: scramble},
        success: function(response) {
            var memo = response.memo;
          console.log(memo);
          update_elements(memo);
        }
      });
      console.timeEnd('new_scramble');
}

function update_elements(memo){
    document.getElementById("memo1").innerHTML = memo[0];
    document.getElementById("memo2").innerHTML = memo[1];
    document.getElementById("memo3").innerHTML = memo[2];
    document.getElementById("memo4").innerHTML = memo[3];
    document.getElementById("memo5").innerHTML = memo[4];
    document.getElementById("memo6").innerHTML = memo[5];
}

function toggle_hints(){
    const elements = document.querySelectorAll('.memo_info');
    elements.forEach((element) => {
        element.classList.toggle('hideP')
    });
    console.log("Toggled hints");
}
