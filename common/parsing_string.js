const path = "/users/download/index.html";

function isHtml (path) {
  const expansion = '.html';  
  const cutEx = path.slice(-5);

  if (expansion === cutEx) {
    return true;
  } else {
    return false;
  }
}

console.log(isHtml(path));