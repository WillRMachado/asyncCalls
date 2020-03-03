//Not using babbel, so avoiding arrow functions in order to support legacy browsers

function randomTime(min, max) {
  min = Math.ceil(min) * 100;
  max = Math.floor(max) * 100;

  return new Promise(resolve =>
    setTimeout(resolve, Math.floor(Math.random() * (max - min)) + min)
  );
}

function loadData(min, max) {
  $("#beforeReturn").html("Done!");

  //   (async function done() {
  $(".randomLoad").each(function() {
    async function setDone(item) {
      await randomTime(min, max);
      item.html("Done!");
    }
    setDone($(this));
  });
  //   })();

  $("#afterReturn").html("Done!");
}

function checkInputs() {
  //var instead of let for legacy support reasons
  var min = $("#min").val();
  var max = $("#max").val();
  if (!min || !max) {
    window.alert("preencha os campos");
  } else if (max > min) {
    window.alert("os tempos estão invertidos!");
  } else if (max == min) {
    window.alert("tempos iguais não tem graça!");
  } else {
    loadData(min, max);
  }
}

$("#play").click(function() {
  checkInputs();
});

$("#clean").click(function() {
  $("#beforeReturn").html("...");
  $(".randomLoad").each(function() {
    $(this).html("...");
  });
  $("#afterReturn").html("...");
});
