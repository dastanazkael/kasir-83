function pickLogo() {
  document.getElementById('logoPicker').click();
}

document.getElementById('logoPicker').addEventListener('change', function(e){
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = function(evt){
    document.getElementById('appLogo').src = evt.target.result;
  };
  reader.readAsDataURL(file);
});

function openThemeEditor() {
  window.location.href = "theme.html";
}
